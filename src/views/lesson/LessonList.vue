<template>
    <!-- <div class="header nav-padding">
        <p>tts</p>
        <button @click="saveToBoard('춤','네 춤출게요')">보드 저장</button>
        <button @click="play('춤')">지정 재생</button>
        <button @click="remove('하이')">지정 삭제</button>
        <button @click="tempAudio('두번째 음성 테스트')">보드에 임시 저장 후 실행 - 삭제</button>
        
        <p>stt</p>
        <button class="ui-left-font" id="fs-three" @click="handleClick()"> {{ isRecording ? 'Stop' : 'Start' }} </button>
    </div> -->
    <div class="list-page-wrap">
        <div class="list-wrap">
            <img :src="listImg"/>
            <div class="list-top">
                <div class="list-back-button" @click="historyBack">
                    <div class="ico_arrow"></div>
                </div>
                <div class="title Pretendard-Medium">{{ subject.title }}</div>
                <div class="description Pretendard-Regular" v-html="subject.description" ></div>
            </div>

            <div class="list-container">
                <div class="list-item" v-for="(item, index) in subject.lessons" :key="index" @click="goTo('/lesson/detail', { id: item.id, subjectTitle: subject.title, index: index+1, title: item.title, color: this.$route.query.color})">
                    <div class="list-content">
                        <span class="list-number Pretendard-Regular"
                        :style="defaultBorderColor">{{ index + 1 }}차시</span>
                        <span class="list-title Pretendard-Regular">{{ item.title }}</span>
                    </div>
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
import {stt} from '@/globals/stt.js';

const fs = require('fs');

export default {
    mixins: [VueBase],

    data() {
        return {
            subject: {},

            logom: images.logom,
            listAsomebot: images.listAsomebot,
            listAsomekit: images.listAsomekit,
            listAsomecar: images.listAsomecar,

            //stt            
            mediaRecorder: null,
            audioChunks: [],
            isRecording: false,  // 녹음 상태를 추적하는 데이터 속성

            title: null,
            titleNum: null,
        }
    },

    computed: {
        listImg() {
            const title = this.$route.query.title;
            switch (title) {
                case 'Asomebot':
                    return this.listAsomebot;
                case 'Asomekit':
                    return this.listAsomekit;
                case 'Asomecar':
                    return this.listAsomecar;
                default:
                    return this.listAsomekit;
            }
        },

        defaultBorderColor() {
            return { borderColor: this.$route.query.color,
                    color: this.$route.query.color,
                    '--chapter-background-color-hover': this.$route.query.color,
                    '--chapter-color-hover': '#fff',
                    '--chapter-color-active': '#AEAEB4',
                    '--chapter-background-color-active': this.$route.query.clickColor,
                    '--chapter-border-color-active': this.$route.query.clickColor
                };
        },
        
        // defaultTextColor() {
        //     return { color: this.$route.query.color};
        // }
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
        async handleClick() {
            if (this.isRecording) {
                this.stopRecording();
            } else {
                this.startRecording();
            }
        },

        async startRecording() {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.ondataavailable = event => {
                this.audioChunks.push(event.data);
            };
            this.mediaRecorder.start();
            this.isRecording = true;  // 녹음 시작을 표시
        },

        async stopRecording() {
            if (!this.mediaRecorder) return;

            this.mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                const filePath = '/sttaudiofile.wav'; // 실제 저장 경로로 변경하세요
                
                try {
                    const buffer = Buffer.from(await audioBlob.arrayBuffer());
                    await fs.promises.writeFile(filePath, buffer);
                    await stt('Kor', filePath);
                    await fs.promises.unlink(filePath);
                    console.log('File deleted successfully');
                } catch (err) {
                    console.error('Error during recording process:', err);
                }
                this.audioChunks = [];
            };
            this.mediaRecorder.stop();
            this.isRecording = false;
        },

        // 디자인 수정
        historyBack(){
            this.$router.go(-1);

        }
    },

}
</script>

<!-- <style scoped src="@/assets/css/component/lesson_list.css"/> -->
<style scoped src="@/assets/css/component/lesson_list2.css"/>
<style scoped src="@/assets/css/font.css"/>