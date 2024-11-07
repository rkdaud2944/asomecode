<template>
    <div>
        <h5>자율 주행 자동차</h5>
        <!-- ESP32 카메라 스트리밍 -->
        <img id="stream" :src="streamUrl" alt="Live Stream" width="320" height="240">
        
        <!-- 하이퍼파라미터 설정 -->
        <div class="params">
        <label>Learning Rate:</label>
        <select v-model="learningRate">
            <option value="0.00001">0.00001</option>
            <option value="0.0001">0.0001</option>
            <option value="0.001">0.001</option>
            <option value="0.003">0.003</option>
        </select>

        <label>Batch Size:</label>
        <select v-model="batchSize">
            <option value="0.05">0.05</option>
            <option value="0.1">0.1</option>
            <option value="0.4">0.4</option>
            <option value="1">1</option>
        </select>

        <label>Epochs:</label>
        <select v-model="epochs">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
        </select>

        <label>Hidden Units:</label>
        <select v-model="hiddenUnits">
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
        </div>
        
        <!-- 훈련 및 예측 버튼 -->
        <div class="controls">
        <button @click="trainModel">Train Model</button>
        <button @click="startPrediction">Play</button>
        </div>
    </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';
import { ControllerDataset } from '@/utils/ai-self-driving';

export default {
data() {
    return {
    learningRate: 0.0001,
    batchSize: 0.4,
    epochs: 20,
    hiddenUnits: 100,
    streamUrl: "http://192.168.0.214/stream",
    controllerDataset: new ControllerDataset(4),
    truncatedMobileNet: null,
    model: null,
    isPredicting: false,
    };
},
mounted() {
    this.init();
    // 매 0.3초마다 스트리밍 이미지를 갱신
    setInterval(() => {
    this.streamUrl = `http://192.168.0.214/stream?time=${new Date().getTime()}`;
    }, 300);
},
methods: {
    async init() {
        this.truncatedMobileNet = await this.loadTruncatedMobileNet();
    },
    async loadTruncatedMobileNet() {
        const mobilenet = await tf.loadLayersModel(
            'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
    );
    const layer = mobilenet.getLayer('conv_pw_13_relu');
        return tf.model({ inputs: mobilenet.inputs, outputs: layer.output });
    },
    async trainModel() {
        if (this.controllerDataset.xs == null) {
            alert('Add some examples before training!');
            return;
        }
        this.model = tf.sequential({
            layers: [
            tf.layers.flatten({ inputShape: this.truncatedMobileNet.outputs[0].shape.slice(1) }),
            tf.layers.dense({
                units: this.hiddenUnits,
                activation: 'relu',
                kernelInitializer: 'varianceScaling',
                useBias: true,
            }),
            tf.layers.dense({
                units: 4,
                kernelInitializer: 'varianceScaling',
                useBias: false,
                activation: 'softmax',
            }),
            ],
        });
        const optimizer = tf.train.adam(this.learningRate);
        this.model.compile({ optimizer: optimizer, loss: 'categoricalCrossentropy' });
        const batchSize = Math.floor(this.controllerDataset.xs.shape[0] * this.batchSize);
        if (!(batchSize > 0)) {
            alert('Batch size is 0 or NaN. Please choose a non-zero fraction.');
            return;
        }
        await this.model.fit(this.controllerDataset.xs, this.controllerDataset.ys, {
            batchSize,
            epochs: this.epochs,
            callbacks: {
            onBatchEnd: async (batch, logs) => {
                console.log('Loss: ' + logs.loss.toFixed(5));
            },
            },
        });
    },
    async startPrediction() {
        this.isPredicting = true;
        while (this.isPredicting) {
            const img = await this.getImage();
            const embeddings = this.truncatedMobileNet.predict(img);
            const predictions = this.model.predict(embeddings);
            const predictedClass = predictions.as1D().argMax();
            const classId = (await predictedClass.data())[0];
            img.dispose();
            console.log('Predicted Class:', classId);
            await tf.nextFrame();
        }
    },
    async getImage() {
        const imgElement = document.getElementById('stream');
        const img = tf.browser.fromPixels(imgElement);
        const processedImg = tf.tidy(() => img.expandDims(0).toFloat().div(127).sub(1));
        img.dispose();
        return processedImg;
    },
},
};
</script>

<style scoped>
#stream {
    transform: scaleY(-1); /* 카메라 스트림을 상하반전 */
}
.params {
    margin-top: 20px;
}
.controls {
    margin-top: 20px;
}
button {
    margin-right: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
</style>