<template>
    <div>
        <h4>자율주행 학습하기</h4>
        <div v-if="isLoading" class="loading-message">
            Loading...
        </div>
        <div class="image-container">
            <img id="stream" :src="streamUrl" alt="Live Stream" width="320" height="240" @error="onImageError" @load="onImageLoad" crossorigin="anonymous">
        </div>
        <div class="controls">
            <input type="text" v-model="streamIp" placeholder="Enter Stream IP" class="input-ip">
            <button @click="registerStreamIp" class="styled-button small-button">IP 등록</button>
        </div>
        <div class="controls">
            <button @click="openModal" class="styled-button small-button">Wi-Fi 연결</button>
        </div>
        
        <!-- 학습 및 예측 관련 UI -->
        <div class="controls">
            <input type="text" v-model="labelName" placeholder="Enter Label Name" class="input-ip">
            <button @click="addExampleHandler" class="styled-button small-button">Add Example</button>
            <button @click="trainModelHandler" class="styled-button small-button">Train Model</button>
            <button @click="predictHandler" class="styled-button small-button">Start Prediction</button>
            <button @click="stopPredictionHandler" class="styled-button small-button">Stop Prediction</button>
        </div>
        <div class="controls">
            <div class="hyper-params">
                <div class="dropdown">
                    <label>Learning rate</label>
                    <div class="select">
                        <select v-model="learningRate">
                            <option value="0.00001">0.00001</option>
                            <option selected value="0.0001">0.0001</option>
                            <option value="0.001">0.001</option>
                            <option value="0.003">0.003</option>
                        </select>
                    </div>
                </div>
                <div class="dropdown">
                    <label>Batch size</label>
                    <div class="select">
                        <select v-model="batchSizeFraction">
                            <option value="0.05">0.05</option>
                            <option value="0.1">0.1</option>
                            <option selected value="0.4">0.4</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div class="dropdown">
                    <label>Epochs</label>
                    <div class="select">
                        <select v-model="epochs">
                            <option value="10">10</option>
                            <option selected value="20">20</option>
                            <option value="40">40</option>
                        </select>
                    </div>
                </div>
                <div class="dropdown">
                    <label>Hidden units</label>
                    <div class="select">
                        <select v-model="denseUnits">
                            <option value="10">10</option>
                            <option selected value="100">100</option>
                            <option value="200">200</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ul>
                <li v-for="(label, index) in labelMap" :key="index">
                    {{ index }}: {{ label.name }} ({{ label.count }} examples)
                    <img :src="label.thumbnail" alt="Example Thumbnail" width="50" height="50" v-if="label.thumbnail">
                </li>
            </ul>
        </div>
        <h3>Detected: {{ predictedLabel }}</h3>

        <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
                <h5>Wi-Fi 연결 정보 입력</h5>
                <label for="ssid">Wi-Fi SSID:</label>
                <input type="text" v-model="wifiSsid" id="ssid" placeholder="Enter Wi-Fi SSID" class="small-input">

                <label for="password">Wi-Fi Password:</label>
                <input type="text" v-model="wifiPassword" id="password" placeholder="Enter Wi-Fi Password" class="small-input">

                <div class="modal-buttons">
                    <button @click="connectWifi" class="styled-button small-button">Connect</button>
                    <button @click="closeModal" class="styled-button cancel-button small-button">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import remoteSerial from "@/globals/remote-serial";
import * as tf from "@tensorflow/tfjs";
import {
    initModel,
    addExample,
    trainModel,
    predict,
    isModelInitialized,
    getNumClasses,
    updateNumClasses
} from "@/globals/ai-model";

export default {
    data() {
        return {
            streamIp: '', 
            streamUrl: '', 
            isLoading: true, 
            retryCount: 0, 
            maxRetries: 5, 
            retryDelay: 3000, 
            isModalOpen: false,
            wifiSsid: '',
            wifiPassword: '',
            labelName: '',
            predictedLabel: '',
            isPredicting: false,
            labelMap: {},
            labelCounter: 0,
            learningRate: 0.0001,
            batchSizeFraction: 0.4,
            epochs: 20,
            denseUnits: 100
        };
    },
    methods: {
        ...remoteSerial,

        onImageLoad() {
            console.log("Image loaded successfully");
            this.isLoading = false;
            this.retryCount = 0;
        },

        onImageError() {
            if (this.retryCount < this.maxRetries) {
                console.log(`Image failed to load, retrying... (${this.retryCount + 1}/${this.maxRetries})`);
                this.retryCount++;
                setTimeout(this.retryStream, this.retryDelay);
            } else {
                console.error("Max retries reached. Unable to load stream.");
                this.isLoading = true;
            }
        },

        retryStream() {
            this.streamUrl = `http://${this.streamIp}/stream?time=` + new Date().getTime();
        },

        openModal() {
            this.isModalOpen = true;
        },

        closeModal() {
            this.isModalOpen = false;
        },

        connectWifi() {
            const codes = `import camera_control\ncamera_control.start("${this.wifiSsid}", "${this.wifiPassword}")`;
            this.send(codes);
            this.closeModal();
        },

        registerStreamIp() {
            if (this.streamIp) {
                this.streamUrl = `http://${this.streamIp}/stream`;
                this.isLoading = true;
            } else {
                console.error("Please enter a valid IP address");
            }
        },

        send(codes) {
            console.log("Sending codes:", codes);
            if (this.$store.state.connectionMode === 'ble') {
                this.runBle(codes);
            } else {
                this.runCode(codes);
            }
        },

        getNumberOfClasses() {
            return Object.keys(this.labelMap).length;
        },

        async addExampleHandler() {
            if (!this.labelName) {
                console.error("Please enter a label name");
                return;
            }

            // 현재 레이블 수를 확인
            // const numClasses = this.getNumberOfClasses();
            // // eslint-disable-next-line no-prototype-builtins
            // if (numClasses < 2 && !this.labelMap.hasOwnProperty(this.labelName)) {
            //     console.error("At least two labels are required to add examples.");
            //     alert("예제를 추가하려면 최소 두 개의 레이블이 필요합니다.");
            //     return;
            // }

            // 이미지 처리 코드 (생략 없이 그대로 유지)
            const imgElement = document.getElementById('stream');
            let img = tf.browser.fromPixels(imgElement);
            img = tf.image.resizeBilinear(img, [224, 224]);
            img = img.expandDims(0).toFloat().div(127).sub(1);

            let labelKey;
            // 동일한 이름의 레이블이 있을 경우 이미지 업데이트, 없으면 새로운 레이블 추가
            if (Object.values(this.labelMap).some(label => label.name === this.labelName)) {
                labelKey = Object.keys(this.labelMap).find(key => this.labelMap[key].name === this.labelName);
                labelKey = parseInt(labelKey); // 문자열 키를 정수로 변환
                this.labelMap[labelKey].count++;
                this.labelMap[labelKey].thumbnail = imgElement.src;
            } else {
                labelKey = this.labelCounter;
                this.labelMap[labelKey] = { name: this.labelName, count: 1, thumbnail: imgElement.src };
                this.labelCounter++;
            }

            // 모델 초기화 여부 확인 및 초기화 또는 클래스 수 업데이트
            if (!isModelInitialized()) {
                // 모델 초기화
                await initModel(this.getNumberOfClasses());
            } else {
                // 클래스 수가 변경되었는지 확인하고 업데이트
                if (getNumClasses() !== this.getNumberOfClasses()) {
                    await updateNumClasses(this.getNumberOfClasses());
                }
            }

            await addExample(img, labelKey);

            console.log(`Added example for label: ${this.labelName}`);
        },

        async trainModelHandler() {
            if (this.getNumberOfClasses() < 2) {
                console.error("At least two labels are required to train the model.");
                alert("모델을 훈련하려면 최소 두 개의 레이블이 필요합니다.");
                return;
            }
            try {
                await trainModel(
                    this.denseUnits,
                    this.learningRate,
                    this.batchSizeFraction,
                    this.epochs,
                    this.getNumberOfClasses()
                );
                console.log("Model trained successfully");
            } catch (error) {
                console.error("Error during training:", error);
            }
        },


        async predictHandler() {
            if (!isModelInitialized()) {
                console.error("Model is not initialized. Please train the model first.");
                return;
            }
            if (this.getNumberOfClasses() < 2) {
                console.error("At least two labels are required for prediction.");
                alert("예측을 위해서는 최소 두 개의 레이블이 필요합니다.");
                return;
            }

            this.isPredicting = true;

            while (this.isPredicting) {
                const imgElement = document.getElementById('stream');
                let img = tf.browser.fromPixels(imgElement);
                img = tf.image.resizeBilinear(img, [224, 224]);
                img = img.expandDims(0).toFloat().div(127).sub(1);
                const classId = await predict(img);
                this.predictedLabel = this.getLabelNameByClassId(classId);
                console.log(`Predicted label: ${this.predictedLabel}`);
                await tf.nextFrame();
            }
        },

        stopPredictionHandler() {
            this.isPredicting = false;
            console.log("Prediction stopped");
        },

        getLabelNameByClassId(classId) {
            return this.labelMap[classId] ? this.labelMap[classId].name : 'Unknown';
        }
    }
};
</script>

<style scoped>
/* 이미지 상하반전 */
#stream {
    transform: scaleY(-1);
}

/* 이미지 컨테이너 */
.image-container {
    width: 320px;
    height: 240px;
    position: relative;
}

/* 로딩 메시지 스타일 */
.loading-message {
    margin-top: 10px; 
    color: #333; 
    font-size: 16px;
    font-weight: bold;
}

.controls {
    margin-top: 20px;
    display: flex;
    align-items: center;
}
.styled-button {
    margin-right: 10px;
    padding: 5px 10px; 
    font-size: 14px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
.styled-button:hover {
    background-color: #0056b3;
}
.cancel-button {
    background-color: #6c757d;
}
.cancel-button:hover {
    background-color: #5a6268;
}

.small-button {
    padding: 5px 10px; 
    font-size: 14px; 
}

/* 모달 스타일 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.modal-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.input-ip {
    padding: 5px;
    margin-right: 10px;
    font-size: 14px;
}
.small-input {
    padding: 5px;
    font-size: 14px;
}
input {
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    box-sizing: border-box;
    font-size: 14px;
}
.hyper-params {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.dropdown {
    margin-bottom: 10px;
}
.select select {
    width: 100%;
    padding: 5px;
    font-size: 14px;
}
</style>
