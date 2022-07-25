<template>
    <div class="row q-pa-md">
        <div>
            
            <a href="/"><img src="/images/common/logo2.png" class="img">
            </a>
        </div>
        <div class="col menu">
            <ImageButton :src="'/images/common/header_button_image/bt_notice.png'"/>
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
@media (min-width: 791px){
    .what-is-asomeit{
        background: url(https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/images/p1_back.gif);
        margin-top: 10px;
        padding: 20px;
        text-align: center;
    }
    .subject{
        margin:1px;
        margin-bottom: 70px;
        box-shadow:3px 3px 20px rgba(0,0,0,0.51);
    }
    .subject_box{
        box-sizing: border-box;
        
    }
    .subject-box-interval{
        margin-top: 5%;
        width: 18%;
        margin-left: auto;
        margin-right: auto;
    }
    .what-is-asomeit-font{
        font-size: 20px;
        font-family: Helvetica Neue;
        line-height: 34px;
    }
    .menu{
        text-align: right;
        margin-right:50px;
    }
    .img{
        margin-left: 70px;
        width: 186px;
        
    }
}

@media (min-width: 767px) and (max-width: 883px){
    .what-is-asomeit-font{
        font-size: 16px;
        font-family: Helvetica Neue;
        line-height: 24px;
    }
    .subject-box-interval{
        margin-top: 5%;
        width: 45%;
        margin-left: auto;
        margin-right: auto;
    }
    .what-is-asomeit{
        background: url(https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/images/p1_back.gif);
        margin-top: 10px;
        padding: 20px;
        text-align: center;
    }
    .menu{
        text-align: center;
        margin-right:0px;
    }
    .img{
        display: none;
    }
    .subject{
        margin:1px;
        margin-bottom: 70px;
        box-shadow:3px 3px 20px rgba(0,0,0,0.51);
    }
}

@media (min-width: 100px) and (max-width: 767px){
    .what-is-asomeit-font{
        font-size: 16px;
        font-family: Helvetica Neue;
        line-height: 24px;
    }
    .subject-box-interval{
        margin-top: 5%;
        width: 95%;
        margin-left: auto;
        margin-right: auto;
    }
    .what-is-asomeit{
        background: url(https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/images/p1_back.gif);
        margin-top: 10px;
        padding: 20px;
        text-align: center;
    }
    .menu{
        text-align: center;
        margin-right:0px;
    }
    .img{
        display: none;
    }
    .subject{
        margin:1px;
        margin-bottom: 70px;
        box-shadow:3px 3px 20px rgba(0,0,0,0.51);
    }
}

</style>
