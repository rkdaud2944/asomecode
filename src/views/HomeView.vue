<template>
    <el-row class="header">
        <el-col :span="10">
            <img src="/images/common/logo2.png" />
        </el-col>
        <el-col :span="13">
            <div class="header-button-bar">
                <el-link :underline="false">
                    <img class="header-button-image" :src="noticeImageSrc"
                        @mouseover="noticeImageSrc = noticeImageSrc + '.over.png'"
                        @mouseleave="noticeImageSrc = noticeImageSrc.replace('.over.png', '')" />
                </el-link>
                <el-link :underline="false">
                    <img class="header-button-image" :src="libraryImageSrc"
                        @mouseover="libraryImageSrc = libraryImageSrc + '.over.png'"
                        @mouseleave="libraryImageSrc = libraryImageSrc.replace('.over.png', '')" />
                </el-link>
                <el-link :underline="false">
                    <img class="header-button-image" :src="communityImageSrc"
                        @mouseover="communityImageSrc = communityImageSrc + '.over.png'"
                        @mouseleave="communityImageSrc = communityImageSrc.replace('.over.png', '')" />
                </el-link>
                <el-link :underline="false">
                    <img class="header-button-image" :src="faqImageSrc"
                        @mouseover="faqImageSrc = faqImageSrc + '.over.png'"
                        @mouseleave="faqImageSrc = faqImageSrc.replace('.over.png', '')" />
                </el-link>
            </div>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <div class="what-is-asomeit">
        <img src="/images/korea/what_is_asomeit.png">
        <p>
            SW 코딩교육을 통해 <b>논리적인 사고</b>와 <b>창의력</b>을 길러 줄 수 있는 프로그램으로
            <br>흥미있는 놀잇감형 교구를 활용해 어렵지 않게 배울 수 있습니다.
        </p>
    </div>

    <el-row class="subject-list">
        <el-col class="subject" :span="6" v-for="(subject, index) in subjects" :key="index">
            <Subject :subject="subject" />
        </el-col>
    </el-row>
</template>

<script>
import subjectSets from '@/data/subject-sets';
import Subject from '@/components/SubjectComponent.vue'

export default {
    components: {
        Subject,
    },

    setup() {
        return {
            selectedSubjectSetId: localStorage.getItem('selectedSubjectSetId'),
            subjects: subjectSets.getSubjectsOrDefaults(localStorage.getItem('selectedSubjectSetId')),
        }
    },

    data() {
        return {
            noticeImageSrc: '/images/common/header_button_image/bt_notice.png',
            libraryImageSrc: '/images/common/header_button_image/bt_library.png',
            communityImageSrc: '/images/common/header_button_image/bt_community.png',
            faqImageSrc: '/images/common/header_button_image/bt_faq.png',
        }
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    background: rgb(255, 255, 255);
    margin-top: 10px;
    padding: 4px;
}

.header-button-bar {
    line-height: 75px;
    text-align: center;
    float: right;
}

.header-button-image {
    width: 82px;
    height: 79px;
}

.what-is-asomeit {
    background: url(https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/images/p1_back.gif);
    margin-top: 10px;
    padding: 20px;
    text-align: center;
}

.subject-list {
    width: 100%;
    background: rgb(31, 63, 1);
    margin-top: 10px;
    padding: 4px;
    text-align: center;
}

.subject {
    padding: 10px;
}
</style>
