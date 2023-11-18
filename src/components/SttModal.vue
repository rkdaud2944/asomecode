<!-- Modal.vue -->
<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <img
          :class="{'img-size': true, 'sttmodaloff': buttonState === 'start', 'sttmodalon': buttonState === 'stop', 'sttmodalcheck': buttonState === 'close'}"
          :src="buttonState === 'start' ? sttmodaloff : (buttonState === 'stop' ? sttmodalon : sttmodalcheck)"
        />
        <p class="font-size">{{ modalMessage }}</p>
        <div class="stt-box">
          <button class="ui-left-font" id="fs-three" @click="handleClick()">
            {{ buttonLabel }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import images from "@/assets/images";
import { stt } from "@/globals/stt.js";
const fs = require("fs");

export default {
  watch: {
    recognizedText(newValue) {
      this.$emit("text-updated", newValue);
    },
  },
  data() {
    return {
      sttmodaloff: images.sttmodaloff,
      sttmodalon: images.sttmodalon,
      sttmodalcheck: images.sttmodalcheck,
      showModal: false,
      modalMessage: "녹음준비되면 스타트 누르셈",
      isRecording: false, // 녹음 상태를 추적하는 데이터 속성
      recognizedText: "", // 인식된 텍스트를 저장할 새로운 속성
      mediaRecorder: null,
      audioChunks: [],
      buttonState: "start", // 가능한 값: "start", "stop", "close"
    };
  },
  props: {
    isVisible: Boolean,
  },
  computed: {
    buttonLabel() {
      if (this.buttonState === "start") {
        return "시작";
      } else if (this.buttonState === "stop") {
        return "녹음완료";
      } else {
        return "닫기";
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
      this.buttonState = "start";
      this.modalMessage = "아래 버튼 클릭 시 녹음 시작";
      window.opener.postMessage("sttclose");
    },
    //stt
    async handleClick() {
      if (this.buttonState === "start") {
        await this.startRecording();
        this.modalMessage = "중지버튼";
      } else if (this.buttonState === "stop") {
        await this.stopRecording();
        this.modalMessage = "끝";
      } else {
        this.closeModal();
      }
    },

    async startRecording() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };
      this.mediaRecorder.start();
      this.isRecording = true; // 녹음 시작을 표시
      this.buttonState = "stop";
    },

    async stopRecording() {
      if (!this.mediaRecorder) return;

      return new Promise(resolve => {
        this.mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
          const filePath = "/sttaudiofile.wav";

          try {
            const buffer = Buffer.from(await audioBlob.arrayBuffer());
            await fs.promises.writeFile(filePath, buffer);

            // stt 함수를 호출하고 인식된 텍스트를 받아옴
            const recognizedText = await stt("Kor", filePath);

            // Vue.nextTick을 사용하여 데이터 갱신
            this.recognizedText = recognizedText;
            await fs.promises.unlink(filePath);
            console.log("파일 삭제 성공");
          } catch (err) {
            console.error("녹음 프로세스 중 오류:", err);
          }
          this.audioChunks = [];
          this.buttonState = "close";
          resolve(); // Promise를 사용하여 완료 시점을 알림
        };
        this.mediaRecorder.stop();
        this.isRecording = false;
        
        window.opener.postMessage('stt');
      });
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.img-size {
  width: 80%;
}
.font-size {
  font-size: 25px;
}
</style>
