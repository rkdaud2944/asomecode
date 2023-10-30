<template>
    <div class="header nav-padding">
        <button @click="saveToBoard('test','테스트')">보드 저장</button>
        <button @click="play('test')">지정 재생</button>
        <button @click="remove('test')">지정 삭제</button>
        <button @click="tempAudio('두번째 음성 테스트')">보드에 임시 저장 후 실행 - 삭제</button>
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

export default {
    mixins: [VueBase],

    data() {
        return {
            subject: {},

            logom: images.logom,
            asomebot: images.asomebot
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
        
        getTTS(text){
            apiTTS.getTTS(text);
        },

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
        }
    },

}
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>