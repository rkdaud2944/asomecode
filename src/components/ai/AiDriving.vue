<template>
    <div class="container Pretendard-Regular">
        <h4 class="Pretendard-Bold">AI 자율주행</h4>
        <div class="image-container">
            <div class="image-box">
                <img id="stream" :src="streamUrl" alt="Live Stream" @error="onImageError" @load="onImageLoad" crossorigin="anonymous">
            </div>
            <div class="direction-grid">
                <div v-for="(direction, index) in directions" :key="index" class="grid-item">
                    <button @click="addDirectionExample(direction)" class="grid-button">
                        <!-- <span :class="`arrow arrow-${direction.id}`"></span> -->
                        <span class="label">{{ direction.label }} ({{ labelMap[direction.id]?.count || 0 }})</span>
                    </button>
                </div>
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
                <!-- <input type="text" v-model="labelName" placeholder="학습용 이미지의 라벨을 입력해주세요" class="input-ip small-input"> -->
                <h6 class="Pretendard-Medium direction-header">인식 결과: {{ predictedLabel }}</h6>
                <!-- <button @click="addExampleHandler" class="styled-button small-button">예제추가</button> -->
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
            directions: [
                { id: 0, label: "왼쪽 위" },
                { id: 1, label: "위" },
                { id: 2, label: "오른쪽 위" },
                { id: 3, label: "왼쪽" },
                { id: 4, label: "중앙" },
                { id: 5, label: "오른쪽" },
                { id: 6, label: "왼쪽 아래" },
                { id: 7, label: "아래" },
                { id: 8, label: "오른쪽 아래" },
            ],
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
        this.retryCount = 0; // 성공하면 재시도 횟수 초기화
        },

        onImageError() {
            if (!this.isLoading) {
                console.error("Unable to load stream after retries.");
                return;
            }
            console.log(`Image failed to load, retrying in 1 second...`);
            setTimeout(this.retryStream, 1000); // 1초 후 재시도
        },

        retryStream() {
            if (!this.isLoading) return; // 이미 로드 성공 시 중단
                this.streamUrl = `http://${this.streamIp}/stream?time=` + new Date().getTime();
                const imgElement = document.getElementById("stream");
            if (imgElement) {
                imgElement.src = this.streamUrl; // 이미지 src 업데이트
            }
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
            this.asomecarReady();

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
                console.error("Error during training:", error);
                alert("전 방향을 학습해주세요.");
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
                const imgElement = document.getElementById("stream");
                let img = tf.browser.fromPixels(imgElement);
                img = tf.image.resizeBilinear(img, [224, 224]);
                img = img.expandDims(0).toFloat().div(127).sub(1);
                const classId = await predict(img);
                this.predictedLabel = this.getLabelNameByClassId(classId);
                console.log(`Predicted label: ${this.predictedLabel}`);

                this.executePredictedAction(this.predictedLabel);

                await tf.nextFrame();
                // 0.5초 대기
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        },

        stopPredictionHandler() {
            this.asomecarStop();
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
        },
        async addDirectionExample(direction) {
            const imgElement = document.getElementById("stream");
            let img = tf.browser.fromPixels(imgElement);
            img = tf.image.resizeBilinear(img, [224, 224]);
            img = img.expandDims(0).toFloat().div(127).sub(1);

            if (this.labelMap[direction.id]) {
                this.labelMap[direction.id].count++;
            } else {
                this.labelMap[direction.id] = { name: direction.label, count: 1 };
            }

            if (!isModelInitialized()) {
                initModel(this.directions.length);
            }
            addExample(img, direction.id);

            console.log(`Added example for direction: ${direction.label}`);

            this.sendTrainingCode(direction);
        },

        asomecarReady(){            
            const codes = `import asomecar\nasomecar.ready(1, 2, 3, 4, 5, 6, 7, 8)`;
            this.send(codes);
        },
        
        asomecarStop(){            
            const codes = `asomecar.stop()`;
            this.send(codes);
        },

        sendDirectionCode(direction) {
            const directionCodes = {
                "왼쪽 위": "asomecar.leftForward(150)",
                "위": "asomecar.forward(150)",
                "오른쪽 위": "asomecar.rightForward(150)",
                "왼쪽": "asomecar.left(150)",
                "중앙": "asomecar.stop()",
                "오른쪽": "asomecar.right(150)",
                "왼쪽 아래": "asomecar.leftBack(150)",
                "아래": "asomecar.backward(150)",
                "오른쪽 아래": "asomecar.rightBack(150)"
            };

            const code = directionCodes[direction.label];
            if (code) {
                const command = `import asomecar\n${code}`;
                this.send(command);
            } else {
                console.error("Direction code not found for:", direction.label);
            }
        },

        executePredictedAction(predictedLabel) {
            const actionMapping = {
                "왼쪽 위": () => this.sendDirectionCode({ label: "왼쪽 위" }),
                "위": () => this.sendDirectionCode({ label: "위" }),
                "오른쪽 위": () => this.sendDirectionCode({ label: "오른쪽 위" }),
                "왼쪽": () => this.sendDirectionCode({ label: "왼쪽" }),
                "중앙": () => this.sendDirectionCode({ label: "중앙" }),
                "오른쪽": () => this.sendDirectionCode({ label: "오른쪽" }),
                "왼쪽 아래": () => this.sendDirectionCode({ label: "왼쪽 아래" }),
                "아래": () => this.sendDirectionCode({ label: "아래" }),
                "오른쪽 아래": () => this.sendDirectionCode({ label: "오른쪽 아래" })
            };

            if (actionMapping[predictedLabel]) {
                actionMapping[predictedLabel]();
            } else {
                console.error("No action defined for predicted label:", predictedLabel);
            }
        },

        sendTrainingCode(direction) {
            const trainingCodes = {
                "왼쪽 위": "asomecar.leftForwardWith(150,0.5)",
                "위": "asomecar.forwardWith(150,0.5)",
                "오른쪽 위": "asomecar.rightForwardWith(150,0.5)",
                "왼쪽": "asomecar.leftWith(150,0.5)",
                "중앙": "asomecar.stop()",
                "오른쪽": "asomecar.rightWith(150,0.5)",
                "왼쪽 아래": "asomecar.leftBackWith(150,0.5)",
                "아래": "asomecar.backwardWith(150,0.5)",
                "오른쪽 아래": "asomecar.rightBackWith(150,0.5)"
            };

            const code = trainingCodes[direction.label];
            if (code) {
                const command = `import asomecar\n${code}`;
                this.send(command);
            } else {
                console.error("Training code not found for:", direction.label);
            }
        },


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

.direction-grid {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
    height: 240px;
    width: 320px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    justify-content: center;
    align-content: center;
    padding: 5px;
    margin-left: 20px;
    
}

.direction-header {
    grid-column: span 3;
    align-self: flex-start; 
    margin: 0 50px 5px 20px;
}

.grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.grid-button {
    width: 60px; 
    height: 60px;
    border: 1px solid #d1d1d1;
    border-radius: 8px;
    background-color: #f5f5f5;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s, border-color 0.3s;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
}

.grid-button:hover {
    background-color: #e0e0e0;
    border-color: #bdbdbd;
}

.arrow {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
}

/* 각 방향의 화살표 스타일 */
.arrow-0 {
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
}

.arrow-1 {
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
}

.arrow-2 {
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent white transparent;
}

.arrow-3 {
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}

.arrow-4 {
    border-width: 10px 10px 10px 10px;
    border-color: transparent white transparent transparent;
}

.arrow-5 {
    border-width: 10px 10px 10px 0;
    border-color: white transparent transparent transparent;
}

.arrow-6 {
    border-width: 10px 10px 0 10px;
    border-color: white transparent transparent transparent;
}

.arrow-7 {
    border-width: 10px 10px 0 10px;
    border-color: white transparent transparent transparent;
}

.arrow-8 {
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent white transparent;
}

.label {
    font-size: 10px;
    color: black;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


</style>
