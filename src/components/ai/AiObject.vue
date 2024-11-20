<template>
    <div class="container Pretendard-Regular">
        <h4 class="Pretendard-Bold">AI 사물인식</h4>
        <div class="image-container">
            <div class="image-box">
                <img id="stream" :src="streamUrl" alt="Live Stream" @error="onImageError" @load="onImageLoad" crossorigin="anonymous">
            </div>
            <div class="info-box">
                <h6 class="Pretendard-Medium">인식 결과: {{ predictedLabel }}</h6>
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
                <input type="text" v-model="streamIp" placeholder="WiFi 연결 후 로그창의 IP를 이곳에 입력해주세요" class="input-ip small-input">
                <button @click="registerStreamIp" class="styled-button small-button">IP 등록</button>
            </div>
        </div>

        <!-- 학습 및 예측 관련 UI -->
        <div class="action-controls">
            <button @click="resetHandler" class="styled-button small-button reset-button">초기화</button>
            <div>
                <input type="text" v-model="labelName" placeholder="학습용 이미지의 라벨을 입력해주세요" class="input-ip small-input">
                <button @click="addExampleHandler" class="styled-button small-button">예제추가</button>
                <button @click="trainModelHandler" class="styled-button small-button">모델학습</button>
                <button @click="predictHandler" class="styled-button small-button">시작</button>
                <button @click="stopPredictionHandler" class="styled-button small-button">중단</button>
            </div>
        </div>

        <div class="settings-controls hyper-params">
            <div class="dropdown">
                <label>학습률</label>
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
                <label>배치 크기</label>
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
                <label>에포크</label>
                <div class="select">
                    <select v-model="epochs">
                        <option value="10">10</option>
                        <option selected value="20">20</option>
                        <option value="40">40</option>
                    </select>
                </div>
            </div>
            <div class="dropdown">
                <label>은닉 유닛</label>
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
                <input type="text" v-model="wifiSsid" id="ssid" placeholder="Wi-Fi SSID" class="small-input wifi-input"><br/>

                <label for="password">PW:</label>
                <input type="text" v-model="wifiPassword" id="password" placeholder="Wi-Fi Password" class="small-input wifi-input">

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
    updateNumClasses,
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
            alert("Wi-Fi 연결을 시도합니다. 로그창의 ip를 확인해주세요.");
        },

        registerStreamIp() {
            if (this.streamIp) {
                this.streamUrl = `http://${this.streamIp}/stream`;
                this.isLoading = true;
                
                alert("화면 연결중.. 확인을 누르고 잠시만 기다려주세요.");
            } else {
                alert("IP 주소를 입력해주세요.");
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
            
            alert("학습을 시작합니다. 완료창이 뜰 때까지 기다려주세요.");
            if (this.getNumberOfClasses() < 2) {
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
                alert("모델학습이 완료되었습니다.");
            } catch (error) {
                alert("error: " + error);
            }
        },


        async predictHandler() {            
            alert("모델예측을 시작합니다. 중단하려면 중단 버튼을 눌러주세요.");
            if (!isModelInitialized()) {
                alert("모델이 초기화되지 않았습니다. 먼저 모델을 학습시켜주세요.");
                return;
            }
            if (this.getNumberOfClasses() < 2) {
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
                // 0.5초 대기
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        },

        stopPredictionHandler() {
            this.isPredicting = false;
            alert("모델예측을 중단합니다.");
        },

        getLabelNameByClassId(classId) {
            return this.labelMap[classId] ? this.labelMap[classId].name : 'Unknown';
        },

        resetHandler() {
            this.labelMap = {};
            this.labelCounter = 0;
            this.predictedLabel = '';
            this.labelName = '';

            // 모델 및 데이터셋 초기화
            const numClasses = this.getNumberOfClasses();
            initModel(numClasses).then(() => {
                console.log("Model and dataset have been reinitialized.");
            }).catch((error) => {
                console.error("Error during reinitialization:", error);
            });
            alert("모델 및 데이터셋을 초기화합니다.");
        }

    }
};
</script>

<style scoped src="@/assets/css/font.css"/>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-container {
    display: flex;
    align-items: flex-start;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
    width: 700px;
    box-sizing: border-box;
}

.image-box {
    border: 1px solid #ccc;
    padding: 5px;
    width: 320px; 
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9; 
}

#stream {
    transform: scaleY(-1);
    width: 320px;
    height: 240px;
}

.info-box {
    margin-left: 20px;
    /* border: 1px solid #ccc; */
    padding: 5px;
    flex: 1;
    height: 100%; 
    display: flex;
    flex-direction: column; 
}

.info-box > h6 {
    margin: 0;
    padding: 0;
    align-self: flex-start; 
}

.image-box::before {
    content: '';
    display: block;
    width: 320px;
    height: 240px;
}

.connect {
    margin-top: 10px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 700px; 
}

.action-controls {
    margin-top: 30px;
    display: flex;
    width: 700px; 
    /* justify-content: flex-end; */
    align-items: stretch; /* 자식 요소를 부모 높이에 맞춤 */
    justify-content: center;
}

.action-controls button {
    margin-right: 3px;
}

.action-controls button:last-child{
    margin-right: 0px;
}

.action-controls .reset-button {
    display: flex;
    width: 70px;
    justify-content: center;
    align-items: center;
    margin-right: 10px; /* input 필드와의 간격 */
    background-color: #d9534f;
    border-color: #d43f3a;
}

.action-controls .reset-button:hover {
    background-color: #c9302c;
    border-color: #ac2925;
}

.action-controls div {
    display: flex;
    justify-content: flex-end;
    width: 700px;
}

.settings-controls {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 700px; 
}

.left-button {
    margin-right: auto;
}

.ip-controls {
    display: flex;
    align-items: stretch;
}

.input-ip {
    width: 300px;
    padding: 5px;
    margin-right: 5px;
    font-size: 12px;
}

.small-button {
    width: 70px;
    justify-content: center;
    /* padding: 5px 10px; */
    font-size: 12px;
}

.hyper-params {
    display: flex;
    align-items: center;
    /* margin-top: 10px; */
    flex-wrap: wrap;
    width: 700px;
}

.hyper-params .dropdown {
    margin-right: 10px;
}

.hyper-params .dropdown label {
    display: block;
    font-size: 12px;
    text-align: center;
}

.hyper-params .dropdown .select select {
    width: 100%;
    padding: 5px;
    font-size: 12px;
}

.styled-button {
    /* margin-right: 5px; */
    padding: 5px 5px;
    font-size: 12px;
    cursor: pointer;
    background-color: #337ab7;
    border-color: #2e6da4;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.styled-button:hover {
    background-color: #286090;
    border-color: #204d74;
}

.cancel-button {
    background-color: #d9534f;
    border-color: #d43f3a;
}

.cancel-button:hover {
    background-color: #c9302c;
    border-color: #ac2925;
}

input {
    box-sizing: border-box;
    font-size: 14px;
}

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
