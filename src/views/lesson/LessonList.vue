<template>
    <div class="header nav-padding">
        <button @click="getPolly">123</button>
        <a @click="goTo('/')">
            <img :src="logom" class="subject-logo"/>
        </a>
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
        
        // getPolly(){            
        //     apiTTS.getPolly("가나다라")
        //         .then(response => {
        //             this.$refs.grid.setData(response.data);
        //         })
        //         .catch((response) => {
        //             this.$q.notify({
        //                 color: "deep-orange",
        //                 textColor: "white",
        //                 // message: response.data.message,
        //                 message: response.data,
        //             });
        //         });
        // },

        getPolly(){      
            apiTTS.getPolly("가나다라")
                .then(response => {
                    // 바이트 배열을 Blob으로 변환
                    const blob = new Blob([response.data], { type: 'audio/mpeg' });  // 'audio/mpeg'는 예시이므로 서버에서 제공하는 실제 포맷에 맞게 변경해야 합니다.
                    
                    // Blob을 URL로 변환
                    const url = window.URL.createObjectURL(blob);
                    
                    // Audio 객체 생성 및 재생
                    const audio = new Audio(url);
                    audio.play();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },

}
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>