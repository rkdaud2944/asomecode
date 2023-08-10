<template>
    <div class="row q-pa-md nav-padding" style="padding-left: 0px; padding-right: 0px;">
        <div>

            <a href="/"><img src="/images/common/logo2.png" class="img">
            </a>
        </div>
        <div class="col menu">
            <ImageButton :src="'/images/common/header_button_image/bt_notice.png'" @click="onClickNotice"/>
            <ImageButton :src="'/images/common/header_button_image/bt_library.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_community.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_faq.png'" />
        </div>
    </div> 

    <div class="what-is-asomeit" style="height: 170px;">
        <img src="/images/korea/what_is_asomeit.png">
        <p class="what-is-asomeit-font">
            SW 코딩교육을 통해 <b>논리적인 사고</b>와 <b>창의력</b>을 길러 줄 수 있는 프로그램으로
            <br>흥미있는 놀잇감형 교구를 활용해 어렵지 않게 배울 수 있습니다.
        </p>
    </div>

    <div style="background:rgb(224,230,235);">
        <div class="row subject_box">
            <div class="col-3 subject-box-interval" v-for="(subject, index) in subjects" :key="index">
                <div class="q-ma-md subject">
                    <Subject :subject="subject" :index="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiSubjectSet from "@/api/subjectSet";
import ImageButton from '@/components/ImageButton.vue';
import Subject from '@/components/SubjectComponent.vue'

export default {
    components: {
        ImageButton, Subject,
    },

    setup() {
        return {
            selectedSubjectSetId: localStorage.getItem('selectedSubjectSetId'),
        }
    },

    data() {
        return {
            subjects: {},
        }
    },

    mounted() {
        this.getSubjectSet()
    },

    methods: {
        onClickNotice() {
            this.$router.push({ path: '/notice/list'});
        },

        getSubjectSet() {
            apiSubjectSet.getSubjectSet(this.selectedSubjectSetId)
                .then((response) => {
                    this.subjects = response.data.subjects
                })
                .catch(this.showError);
        },
    }
}
</script>

<style scoped src="@/assets/css/component/homeview.css"/>
