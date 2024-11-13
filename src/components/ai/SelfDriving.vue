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
    </div>
</template>

<script>
export default {
    data() {
        return {
            streamUrl: "http://192.168.0.214/stream", // 초기 스트림 URL 설정
            isLoading: true, // 로딩 상태를 나타내는 변수
            retryCount: 0, // 로딩 재시도 횟수
            maxRetries: 5, // 최대 재시도 횟수
            retryDelay: 3000 // 재시도 딜레이 (밀리초)
        };
    },
    methods: {
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
</style>
