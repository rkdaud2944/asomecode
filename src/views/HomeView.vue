<template>
    <div class="row q-pa-md">
        <div class="col">
            <img src="/images/common/logo2.png" />
        </div>
        <div class="col" style="text-align: right">
            <ImageButton :src="'/images/common/header_button_image/bt_notice.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_library.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_community.png'" />
            <ImageButton :src="'/images/common/header_button_image/bt_faq.png'" />
        </div>
    </div>

    <div class="what-is-asomeit">
        <img src="/images/korea/what_is_asomeit.png">
        <p>
            SW 코딩교육을 통해 <b>논리적인 사고</b>와 <b>창의력</b>을 길러 줄 수 있는 프로그램으로
            <br>흥미있는 놀잇감형 교구를 활용해 어렵지 않게 배울 수 있습니다.
        </p>
    </div>

    <div class="row">
        <div class="col-3" v-for="(subject, index) in subjects" :key="index">
            <div class="q-ma-md">
                <Subject :subject="subject" />
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
</style>
