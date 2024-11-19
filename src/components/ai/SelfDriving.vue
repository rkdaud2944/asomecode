<template>
    <div>
        <h4>자율주행 학습하기</h4>
        <!-- 로딩 중 메시지 -->
        <div v-if="isLoading" class="loading-message">
            Loading...
        </div>
        <!-- 이미지 스트림 -->
        <div class="image-container">
            <img id="stream" :src="streamUrl" alt="Live Stream" width="320" height="240" @error="onImageError" @load="onImageLoad">
        </div>
        <!-- 학습 시작 버튼 -->
        <div class="controls">
            <button @click="openModal" class="styled-button">Wi-Fi 연결</button>
        </div>

        <!-- Wi-Fi 정보 입력 모달 -->
        <div v-if="isModalOpen" class="modal">
            <div class="modal-content">
                <h5>Wi-Fi 연결 정보 입력</h5>
                <label for="ssid">Wi-Fi SSID:</label>
                <input type="text" v-model="wifiSsid" id="ssid" placeholder="Enter Wi-Fi SSID">

                <label for="password">Wi-Fi Password:</label>
                <!-- 비밀번호 가리지 않음 -->
                <input type="text" v-model="wifiPassword" id="password" placeholder="Enter Wi-Fi Password">

                <div class="modal-buttons">
                    <button @click="connectWifi" class="styled-button">Connect</button>
                    <button @click="closeModal" class="styled-button cancel-button">Cancel</button>
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
            streamUrl: "http://192.168.0.214/stream", // 초기 스트림 URL 설정
            isLoading: true, // 로딩 상태를 나타내는 변수
            retryCount: 0, // 로딩 재시도 횟수
            maxRetries: 5, // 최대 재시도 횟수
            retryDelay: 3000, // 재시도 딜레이 (밀리초)
            isModalOpen: false, // 모달 열림 상태
            wifiSsid: '', // 입력받은 Wi-Fi SSID
            wifiPassword: '' // 입력받은 Wi-Fi 비밀번호
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
            this.streamUrl = "http://192.168.0.214/stream?time=" + new Date().getTime(); // 타임스탬프 추가로 캐시 방지
        },
        // 모달 열기
        openModal() {
            this.isModalOpen = true;
        },
        // 모달 닫기
        closeModal() {
            this.isModalOpen = false;
        },
        // 카메라 실행하기
        connectWifi() {
            // 입력받은 Wi-Fi 정보로 camera_control.start() 호출
            const codes = `import camera_control\ncamera_control.start("${this.wifiSsid}", "${this.wifiPassword}")`;
            this.send(codes);
            this.closeModal();
        },
        // 코드를 실행하는 메서드
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
    margin-top: 10px; /* 이미지와 로딩 메시지 사이에 여백 추가 */
    color: #333; /* 로딩 메시지 색상 */
    font-size: 16px;
    font-weight: bold;
}

/* 컨트롤 버튼 스타일 */
.controls {
    margin-top: 20px;
}
.styled-button {
    margin-right: 10px;
    padding: 10px 20px;
    font-size: 16px;
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
input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    font-size: 14px;
}
</style>
