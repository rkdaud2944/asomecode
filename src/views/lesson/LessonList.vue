<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="subject-logo"/>
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
    },

}
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>