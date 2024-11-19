<template>
    <div>
        <h4>자율주행 학습하기</h4>
        <div v-if="isLoading" class="loading-message">
            Loading...
        </div>
        <div class="image-container">
            <img id="stream" :src="streamUrl" alt="Live Stream" width="320" height="240" @error="onImageError" @load="onImageLoad">
        </div>
        <div class="controls">
            <input type="text" v-model="streamIp" placeholder="Enter Stream IP" class="input-ip">
            <button @click="registerStreamIp" class="styled-button small-button">IP 등록</button>
        </div>
        <div class="controls">
            <button @click="openModal" class="styled-button small-button">Wi-Fi 연결</button>
        </div>

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
            wifiPassword: ''
        };
    },
    methods: {
        ...remoteSerial,

        // 이미지 로드 성공 시 호출되는 메서드
        onImageLoad() {
            console.log("Image loaded successfully");
            this.isLoading = false; // 로딩 상태를 false로 변경
            this.retryCount = 0; // 재시도 횟수 초기화
        },

        // 이미지 로드 실패 시 호출되는 메서드
        onImageError() {
            if (this.retryCount < this.maxRetries) {
                console.log(`Image failed to load, retrying... (${this.retryCount + 1}/${this.maxRetries})`);
                this.retryCount++;
                setTimeout(this.retryStream, this.retryDelay); // 재시도 딜레이 후 다시 요청
            } else {
                console.error("Max retries reached. Unable to load stream.");
                this.isLoading = true; // 재시도 실패 후 로딩 상태로 유지
            }
        },

        // 스트림 다시 요청하는 메서드
        retryStream() {
            this.streamUrl = `http://${this.streamIp}/stream?time=` + new Date().getTime(); // 타임스탬프 추가로 캐시 방지
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
                this.isLoading = true; // 로딩 상태로 변경하여 이미지 재로딩 시작
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
</style>
