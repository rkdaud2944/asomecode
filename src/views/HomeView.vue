<template>
    <el-row class="header">
        <el-col :span="10">
        <a href="#">
            <img src="/images/common/logo2.png" style="padding: 10px; width: 186px;">
            </a>
        </el-col>
        <el-col :span="13">
            <div class="header-button-bar">
                <a class="notice" href="#"></a>
                <a class="libaray" href="#"></a>
                <a class="community" href="#"></a>
                <a class="faq" href="#"></a>
            </div>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <div class="what-is-asomeit">
        <img src="/images/korea/what_is_asomeit.png">

        <p class="what-is-asometext">
            SW 코딩교육을 통해 <b>논리적인 사고</b>와 <b>창의력</b>을 길러 줄 수 있는 프로그램으로
            <br>흥미있는 놀잇감형 교구를 활용해 어렵지 않게 배울 수 있습니다.
        </p>
    </div>
<div class="main-page">

    <el-row class="subject-list">
        <el-col class="subject" :span="5" v-for="(subject, index) in subjects" :key="index">
            <Subject :subject="subject" />
        </el-col>
    </el-row>

</div>
</template>

<script>
import Subject from '@/components/SubjectComponent.vue'
import '../../public/css/common.css'

export default {
    components: {
        Subject,
    },


    data() {
        return {
            subjects: [
                {
                    id: 0,
                    title: '어썸키트',
                    title_eng: 'Asome kit',
                    description: '최소한의 부품과 장치를 이용하여 교구의 비용은 줄이고 피지컬 컴퓨팅 전반의 코딩을 체험할 수 있도록 준비된 교육 프로그램',
                    images: require("../../public/images/common/page1.png"),
                },
                {
                    id: 1,
                    title: '어썸키트',
                    title_eng: 'Asome kit',
                    description: '각종 부품과 센서에 대해 이해하고 간단한 놀잇감을 직접 개발해보면서 생활 속에서 만나는 다양한 장치의 원리를 이해하도록 개발된 프로그램',
                    images: require("../../public/images/common/page2.png"),
                },
                {
                    id: 2,
                    title: '어썸 봇',
                    title_eng: 'Asome Bot',
                    description: '스마트폰으로 조종하는 2족로봇을 직접 개발하고 개발된 놀잇감을 프로그램을 통해 개조하도록 개발된 프로그램',
                    images: require("../../public/images/common/page3.png"),
                },
                {
                    id: 3,
                    title: '어썸 카',
                    title_eng: 'Asome Car',
                    description: '스마트폰으로 조종하는 RC자동차를 직접 개발하고 개발된 놀잇감을 프로그램을 통해 개조하도록 개발된 프로그램',
                    images: require("../../public/images/common/page4.png"),
                },
                {
                    id: 4,
                    title: '커스텀 과목',
                    title_eng: 'custom',
                    description: '사용자가 자신의 개발된 교구를 직접 개발할 수 있는 프로그램',
                    images: require("../../public/images/common/page5.png"),
                },
                {
                    id: 5,
                    title: '커스텀 과목',
                    title_eng: 'custom',
                    description: '사용자가 자신의 개발된 교구를 직접 개발할 수 있는 프로그램',
                    images: require("../../public/images/common/page5.png"),
                },
            ]
        }
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    background: rgb(255, 255, 255);
    padding: 15px;
}
.header-button-bar {
    line-height: 75px;
    text-align: center;
    float: right;
    margin:1px;
}
.what-is-asomeit {
    background: rgba(209, 220, 230, 0.99);
    background-image: radial-gradient(rgb(224, 230, 235) 19%, transparent 0), radial-gradient(rgb(224, 230, 235) 19%, transparent 0);
    background-position: 1,10px;
     background-size: 15px 15px;
    padding: 40px;
    text-align: center;
}
.what-is-asometext {
    font-size : 20px; 
    font-family: Arial, Helvetica, sans-serif;
    margin: 2px;
    line-height: 34px;
}
.subject-list {
    width: 90%;
    height: 800px;
    margin-top: 5%;
    margin-bottom: 20%;
    text-align: center;
    margin-right: 0px;
    margin-left: auto;
}

.main-page{
    float: left;
    background-color: rgb(224, 230, 235);
    width: 100%;
    height: 100%;
}

.subject{
    margin:8px;
    margin-bottom: 70px;
    box-shadow:3px 3px 20px rgba(0,0,0,0.51);
}
.notice{
    background: url(../../public/images/common/bt_notice.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.notice:hover{
    background: url(../../public/images/common/bt_notice.png.over.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.libaray{
    background: url(../../public/images/common/bt_libaray.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.libaray:hover{
    background: url(../../public/images/common/bt_libaray.png.over.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.community{
    background: url(../../public/images/common/bt_community.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.community:hover{
    background: url(../../public/images/common/bt_community.png.over.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
    margin-right: 13px;
}
.faq{
    background: url(../../public/images/common/bt_faq.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
}
.faq:hover{
    background: url(../../public/images/common/bt_faq.png.over.png) no-repeat;
    background-size:cover ;
    width: 90px;
    height: 90px;
    float: left;
    margin:1px;
}

</style>
