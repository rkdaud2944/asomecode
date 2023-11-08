<template>
    <div class="row q-pa-md nav-padding" style="padding-left: 0px; padding-right: 0px;">
        <div>

            <a @click="goTo('/')"><img :src="logo2" class="img">
            </a>
        </div>
        <div class="col menu">
            <ImageButton :src="noticeImage" @mouseover="onMouseOver('notice')" @mouseleave="onMouseLeave('notice')" @click="onClickNotice"/>
            <ImageButton :src="communityImage" @mouseover="onMouseOver('community')" @mouseleave="onMouseLeave('community')"/>
            <ImageButton :src="libraryImage" @mouseover="onMouseOver('library')" @mouseleave="onMouseLeave('library')"/>
            <ImageButton :src="faqImage" @mouseover="onMouseOver('faq')" @mouseleave="onMouseLeave('faq')"/>
        </div>
    </div> 

    <div class="what-is-asomeit" style="height: 170px;">
        <img :src="asomeitQuestionMark">
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
import images from "@/assets/images";
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
            isMouseOverNotice: false,
            isMouseOverCommunity: false,
            isMouseOverLibrary: false,
            isMouseOverFaq: false,
            logo2: images.logo2,
            notice: images.notice,
            noticeHover: images.noticeHover,
            community: images.community,
            communityHover: images.communityHover,
            library: images.library,
            libraryHover: images.libraryHover,
            faq: images.faq,
            faqHover: images.faqHover,
            asomeitQuestionMark: images.asomeitQuestionMark,
        }
    },
    computed: {
        noticeImage() {
            return this.isMouseOverNotice ? this.noticeHover : this.notice;
        },
        communityImage() {
            return this.isMouseOverCommunity ? this.communityHover : this.community;
        },
        libraryImage() {
            return this.isMouseOverLibrary ? this.libraryHover : this.library;
        },
        faqImage() {
            return this.isMouseOverFaq ? this.faqHover : this.faq;
        }
    },

    mounted() {
        this.getSubjectSet()
    },

    methods: {
        onMouseOver(type) {
            if(type === 'notice') this.isMouseOverNotice = true;
            if(type === 'community') this.isMouseOverCommunity = true;
            if(type === 'library') this.isMouseOverLibrary = true;
            if(type === 'faq') this.isMouseOverFaq = true;
        },

        onMouseLeave(type) {
            if(type === 'notice') this.isMouseOverNotice = false;
            if(type === 'community') this.isMouseOverCommunity = false;
            if(type === 'library') this.isMouseOverLibrary = false;
            if(type === 'faq') this.isMouseOverFaq = false;
        },
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
