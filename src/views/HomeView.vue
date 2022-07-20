<template>
    <div class="row q-pa-md">
        <div class="col">
            <img src="/images/common/logo2.png" style="margin-left: 70px; width: 186px;"/>
            </div>
        <div class="col" style="text-align: right; padding-right: 80px;">
            <ImageButton :src="'/images/common/header_button_image/bt_notice.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_library.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_community.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_faq.png'" />
        </div>
    </div>

    <div class="what-is-asomeit" style="height: 170px;">
        <img src="/images/korea/what_is_asomeit.png">
        <p style="font-size: 18px;">
            SW 코딩교육을 통해 <b>논리적인 사고</b>와 <b>창의력</b>을 길러 줄 수 있는 프로그램으로
            <br>흥미있는 놀잇감형 교구를 활용해 어렵지 않게 배울 수 있습니다.
        </p>
    </div>

    <div style="background:rgb(224,230,235);">
        <div class="row subject_box">
            <div class="col-3 test" v-for="(subject, index) in subjects" :key="index">
                <div class="q-ma-md subject">
                <Subject :subject="subject" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import subjectSets from '@/data/subject-sets';
import ImageButton from '@/components/ImageButton.vue';
import Subject from '@/components/SubjectComponent.vue'

export default {
    components: {
        ImageButton, Subject,
    },

    setup() {
        return {
            selectedSubjectSetId: localStorage.getItem('selectedSubjectSetId'),
            subjects: subjectSets.getSubjectsOrDefaults(localStorage.getItem('selectedSubjectSetId')),
        }
    },
}
</script>

<style scoped>
.what-is-asomeit {
    background: url(https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/images/p1_back.gif);
    margin-top: 10px;
    padding: 20px;
    text-align: center;
}
.subject{
    margin:8px;
    margin-bottom: 70px;
    box-shadow:3px 3px 20px rgba(0,0,0,0.51);
}
.subject_box{
    box-sizing: border-box;
    
}
.test{
    margin-top: 5%;
    width: 18%;
    margin-left: auto;
    margin-right: auto;
}
</style>
