// ai-model.js

import * as tf from "@tensorflow/tfjs";

// 모델 및 데이터셋 초기화
let truncatedMobileNet;
let model;
let controllerDataset;

export async function initModel(numClasses) {
    truncatedMobileNet = await loadTruncatedMobileNet();
    controllerDataset = new ControllerDataset(numClasses);
}

// 모델이 초기화되었는지 확인하는 함수
export function isModelInitialized() {
    return controllerDataset !== undefined;
}

// 현재 클래스 수를 가져오는 함수
export function getNumClasses() {
    return controllerDataset.numClasses;
}

// 클래스 수를 업데이트하는 함수
export function updateNumClasses(newNumClasses) {
    controllerDataset.updateNumClasses(newNumClasses);
}

// 예제를 추가하는 함수
export async function addExample(img, label) {
    const activation = truncatedMobileNet.predict(img);
    controllerDataset.addExample(activation, label);
}

// 모델 훈련 함수
export async function trainModel(denseUnits, learningRate, batchSizeFraction, epochs, numClasses) {
    if (controllerDataset.xs == null) {
        throw new Error('Add some examples before training!');
    }

    if (controllerDataset.xs.shape[0] !== controllerDataset.ys.shape[0]) {
        throw new Error(`Mismatch in number of examples: xs has ${controllerDataset.xs.shape[0]}, ys has ${controllerDataset.ys.shape[0]}`);
    }

    let lastActivation, lossFunction, outputUnits;
    if (numClasses === 1) {
        outputUnits = 1;
        lastActivation = 'sigmoid';
        lossFunction = 'binaryCrossentropy';
    } else {
        outputUnits = numClasses;
        lastActivation = 'softmax';
        lossFunction = 'categoricalCrossentropy';
    }

    model = tf.sequential({
        layers: [
            tf.layers.flatten({ inputShape: truncatedMobileNet.outputs[0].shape.slice(1) }),
            tf.layers.dense({
                units: denseUnits,
                activation: 'relu',
                kernelInitializer: 'varianceScaling',
                useBias: true,
            }),
            tf.layers.dense({
                units: outputUnits,
                kernelInitializer: 'varianceScaling',
                useBias: false,
                activation: lastActivation,
            }),
        ],
    });

    const optimizer = tf.train.adam(learningRate);
    model.compile({ optimizer: optimizer, loss: lossFunction });

    const batchSize = Math.floor(controllerDataset.xs.shape[0] * batchSizeFraction);
    if (!(batchSize > 0)) {
        throw new Error('Batch size is 0 or NaN. Please choose a non-zero fraction.');
    }

    await model.fit(controllerDataset.xs, controllerDataset.ys, {
        batchSize,
        epochs,
        callbacks: {
            onBatchEnd: async (batch, logs) => {
                console.log('Loss: ' + logs.loss.toFixed(5));
            },
        },
    });
}



// 예측 함수
export async function predict(img) {
    const activation = truncatedMobileNet.predict(img);
    const predictions = model.predict(activation);

    let classId;
    if (getNumClasses() === 1) {
        const predictionValue = (await predictions.data())[0];
        // 임계값을 기준으로 클래스 결정 (여기서는 0.5)
        classId = predictionValue > 0.5 ? 0 : 1;
    } else {
        const predictedClass = predictions.as1D().argMax();
        classId = (await predictedClass.data())[0];
        predictedClass.dispose();
    }

    img.dispose();
    activation.dispose();
    predictions.dispose();
    return classId;
}

// MobileNet을 로드하고 일부 계층만 사용하도록 조정한 모델을 반환합니다.
async function loadTruncatedMobileNet() {
    const mobilenet = await tf.loadLayersModel(
        'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
    );
    const layer = mobilenet.getLayer('conv_pw_13_relu');
    return tf.model({ inputs: mobilenet.inputs, outputs: layer.output });
}

class ControllerDataset {
    constructor(numClasses) {
        this.numClasses = numClasses;
        this.xs = null;
        this.ys = null;
        this.labels = []; // 이 줄 추가
    }

    async updateNumClasses(newNumClasses) {
        if (newNumClasses <= this.numClasses) {
            this.numClasses = newNumClasses;
        } else {
            this.numClasses = newNumClasses;
            if (this.labels.length > 0) {
                if (this.ys) {
                    this.ys.dispose();
                }
                const labelsTensor = tf.tensor1d(this.labels, 'int32');
                if (this.numClasses > 1) {
                    this.ys = tf.oneHot(labelsTensor, this.numClasses);
                } else {
                    this.ys = labelsTensor.reshape([-1, 1]);
                }
                labelsTensor.dispose();
            }
        }
    }    

    addExample(example, label) {
        this.labels.push(label); // 레이블 저장
        let y;
        if (this.numClasses > 1) {
            y = tf.tidy(() => tf.oneHot(tf.tensor1d([label]).toInt(), this.numClasses));
        } else {
            y = tf.tensor2d([[label]]);
        }
    
        if (this.xs == null) {
            this.xs = tf.keep(example);
            this.ys = tf.keep(y);
        } else {
            const oldX = this.xs;
            this.xs = tf.keep(oldX.concat(example, 0));
    
            const oldY = this.ys;
            this.ys = tf.keep(oldY.concat(y, 0));
    
            oldX.dispose();
            oldY.dispose();
            y.dispose();
        }
    }
    
    
}
