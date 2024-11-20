<template>
    <div class="container">
        <h4>사물인식</h4>
        <div class="image-container">
            <div class="image-box">
                <img id="stream" :src="streamUrl" alt="Live Stream" @error="onImageError" @load="onImageLoad" crossorigin="anonymous">
            </div>
            <div class="info-box">
                <h5>Detected: {{ predictedLabel }}</h5>
                <ul>
                    <li v-for="(label, index) in labelMap" :key="index">
                        {{ index }}: {{ label.name }} ({{ label.count }} examples)
                    </li>
                </ul>
            </div>
        </div>

        <div class="connect">
            <button @click="openModal" class="styled-button small-button left-button">Wi-Fi 연결</button>
            <div class="ip-controls">
                <input type="text" v-model="streamIp" placeholder="Enter Stream IP" class="input-ip small-input">
                <button @click="registerStreamIp" class="styled-button small-button">IP 등록</button>
            </div>
        </div>

        <!-- 학습 및 예측 관련 UI -->
        <div class="controls">
            <input type="text" v-model="labelName" placeholder="Enter Label Name" class="input-ip small-input">
            <button @click="addExampleHandler" class="styled-button small-button">예제추가</button>
            <button @click="trainModelHandler" class="styled-button small-button">모델학습</button>
            <button @click="predictHandler" class="styled-button small-button">시작</button>
            <button @click="stopPredictionHandler" class="styled-button small-button">중단</button>
        </div>

        <div class="controls hyper-params">
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

        <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
                <h5>Wi-Fi 연결 정보 입력</h5>
                <label for="ssid">ID:</label>
                <input type="text" v-model="wifiSsid" id="ssid" placeholder="Enter Wi-Fi SSID" class="small-input wifi-input"><br/>

                <label for="password">PW:</label>
                <input type="text" v-model="wifiPassword" id="password" placeholder="Enter Wi-Fi Password" class="small-input wifi-input">

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
/* 전체 컨테이너 중앙 정렬 */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 이미지 컨테이너 */
.image-container {
    display: flex;
    align-items: flex-start;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    width: 700px; /* 고정 너비 설정 */
    box-sizing: border-box;
}

/* 이미지 박스 */
.image-box {
    border: 1px solid #ccc;
    padding: 5px;
    width: 320px; /* 이미지 크기에 맞게 고정 */
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9; /* 이미지가 없을 때 배경색 */
}

/* 이미지 상하반전 및 크기 고정 */
#stream {
    transform: scaleY(-1);
    width: 320px;
    height: 240px;
}

/* 정보 박스 */
.info-box {
    margin-left: 20px;
    border: 1px solid #ccc;
    padding: 5px;
    flex: 1; /* 남은 공간 차지 */
}

/* 이미지가 없을 때 빈 공간 유지 */
.image-box::before {
    content: '';
    display: block;
    width: 320px;
    height: 240px;
}

/* 컨트롤 영역 */
.connect {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px; /* 이미지 컨테이너와 동일한 너비 */
}

/* 컨트롤 영역 */
.controls {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px; /* 이미지 컨테이너와 동일한 너비 */
}

/* Wi-Fi 연결 버튼 왼쪽 정렬 */
.left-button {
    margin-right: auto;
}

/* IP 입력 컨트롤 */
.ip-controls {
    display: flex;
    align-items: center;
}

/* 입력창 스타일 */
.input-ip {
    width: 300px;
    padding: 5px;
    margin-right: 5px;
    font-size: 12px;
}

/* 작은 버튼 스타일 */
.small-button {
    padding: 5px 10px;
    font-size: 12px;
}

/* 하이퍼파라미터 드롭다운 가로 배열 */
.hyper-params {
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
    width: 700px; /* 이미지 컨테이너와 동일한 너비 */
}

.hyper-params .dropdown {
    margin-right: 10px;
}

.hyper-params .dropdown label {
    display: block;
    font-size: 12px;
}

.hyper-params .dropdown .select select {
    width: 100%;
    padding: 5px;
    font-size: 12px;
}

/* 버튼 스타일 개선 */
.styled-button {
    /* margin-right: 5px; */
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    background: linear-gradient(45deg, #4CAF50, #45A049);
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.styled-button:hover {
    background: linear-gradient(45deg, #45A049, #4CAF50);
}

.cancel-button {
    background: linear-gradient(45deg, #f44336, #e53935);
}

.cancel-button:hover {
    background: linear-gradient(45deg, #e53935, #f44336);
}

/* 입력창 공통 스타일 */
input {
    box-sizing: border-box;
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

.wifi-input {
    display: block;
    width: 100%;
    right: 0;
}

</style>
