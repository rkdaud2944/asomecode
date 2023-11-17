<template>
    <div class="header nav-padding">
        <p>tts</p>
        <button @click="saveToBoard('test','테스트')">보드 저장</button>
        <button @click="play('test')">지정 재생</button>
        <button @click="remove('test')">지정 삭제</button>
        <button @click="tempAudio('두번째 음성 테스트')">보드에 임시 저장 후 실행 - 삭제</button>
        
        <!-- <p>stt</p>
        <p style="color: black;">{{ recognizedText }}</p>
        <button class="ui-left-font" id="fs-three" @click="handleClick()"> {{ isRecording ? 'Stop' : 'Start' }} </button> -->
    </div>

    <div class="row q-pa-md" style="padding: 0px;">
        <div class="col-4 left">
            <h4 class="subject-in-title">{{ subject.title }}</h4>
            <br>
            <h4 class="subject-in-title_eng">{{ subject.subTitle }}</h4>
            <!-- <img src="../../../public/images/common/asomebot.png" class="asomebot"> -->
            <img :src="asomebot" class="asomebot"/>
        </div>

        <div class="subject-size subject-margin">
            <div class="row list-header">
                <p class="description-text">{{ subject.description }}</p>
            </div>
            <div class="list-top-bar"></div>
            <div @click="goTo('/lesson/detail', { id: lesson.id })" class="list-left rounded q-ma-sm q-pa-md" v-for="(lesson, index) in subject.lessons" :key="index" style="cursor: pointer" >
                <div class="subject-div-size">
                    <div class="subject-number">
                        <p class="subject-number-text"> <span class="testColor">{{ index + 1 }}</span> 차시</p>
                    </div>
                    <p class="subject-title-text">{{ lesson.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import images from "@/assets/images";
import VueBase from '@/mixin/vue-base';
import apiSubject from "@/api/subject";
import apiTTS from "@/api/tts"
// import {stt} from '@/globals/stt.js';
// const fs = require('fs');

export default {
    mixins: [VueBase],

    data() {
        return {
            subject: {},

            logom: images.logom,
            asomebot: images.asomebot,
    

            //stt            
            // mediaRecorder: null,
            // audioChunks: [],
            // isRecording: false,  // 녹음 상태를 추적하는 데이터 속성
            // recognizedText: '',  // 인식된 텍스트를 저장할 새로운 속성
        }
    },

    mounted() {
        this.getSubject(this.$route.query.id)
    },

    methods: {
        getSubject(id) {
            apiSubject.subjectDetail(id)
                .then((response) => {
                    this.subject = response.data;
                })
                .catch(this.showError);
        },
        
        //tts
        saveToBoard(fileName,text){
            apiTTS.saveToBoard(fileName,text);
        },

        tempAudio(text){
            apiTTS.tempAudio(text);
        },

        play(text){            
            apiTTS.play(text);
        },
        
        remove(text){            
            apiTTS.remove(text);
        },
        
        //stt
        // async handleClick() {
        //     if (this.isRecording) {
        //         this.stopRecording();
        //     } else {
        //         this.startRecording();
        //     }
        // },

        // async startRecording() {
        //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        //     this.mediaRecorder = new MediaRecorder(stream);
        //     this.mediaRecorder.ondataavailable = event => {
        //         this.audioChunks.push(event.data);
        //     };
        //     this.mediaRecorder.start();
        //     this.isRecording = true;  // 녹음 시작을 표시
        // },

        // async stopRecording() {
        //     if (!this.mediaRecorder) return;

        //     this.mediaRecorder.onstop = async () => {
        // const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
        // const filePath = '/sttaudiofile.wav';

        // try {
        //     const buffer = Buffer.from(await audioBlob.arrayBuffer());
        //     await fs.promises.writeFile(filePath, buffer);

        //     // stt 함수를 호출하고 인식된 텍스트를 받아옴
        //     const recognizedText = await stt('Kor', filePath);

        //     // Vue.nextTick을 사용하여 데이터 갱신
        //     this.recognizedText = recognizedText;
        //     await fs.promises.unlink(filePath);
        //     console.log('파일 삭제 성공');
        // } catch (err) {
        //     console.error('녹음 프로세스 중 오류:', err);
        // }
        //         this.audioChunks = [];
        //     };
        //     this.mediaRecorder.stop();
        //     this.isRecording = false;
        // },
    },

}
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>