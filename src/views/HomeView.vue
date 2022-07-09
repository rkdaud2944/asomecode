<template>
    <el-row class="header">
        <el-col :span="10">
            <img src="/images/common/logo_con.jpg" />
        </el-col>
        <el-col :span="13">
            <div class="header-button-bar">
                <el-button>공지</el-button>
                <el-button>자료실</el-button>
                <el-button>커뮤니티</el-button>
                <el-button>FAQ</el-button>
            </div>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <div class="what_is_asomeit">
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
import Subject from '@/components/SubjectComponent.vue'

export default {
    components: {
        Subject,
    },

    data() {
        return {
            subjects: [
                {
                    title: '어썸키트 1',
                    description: '최소한의 부품과 장치를 이용하여 교구의 비용은 줄이고 피지컬 컴퓨팅 전반의 코딩을 체험할 수 있도록 준비된 교육 프로그램',
                },
                {
                    title: '어썸키드 2',
                    description: '각종 부품과 센서에 대해 이해하고 간단한 놀잇감을 직접 개발해보면서 생활 속에서 만나는 다양한 장치의 원리를 이해하도록 개발된 프로그램',
                },
                {
                    title: '어썸봇',
                    description: '스마트폰으로 조종하는 2족로봇을 직접 개발하고 개발된 놀잇감을 프로그램을 통해 개조하도록 개발된 프로그램',
                },
                {
                    title: '어썸카',
                    description: '스마트폰으로 조종하는 RC자동차를 직접 개발하고 개발된 놀잇감을 프로그램을 통해 개조하도록 개발된 프로그램',
                },
                {
                    title: '커스텀 과목',
                    description: '사용자가 자신의 개발된 교구를 직접 개발할 수 있는 프로그램',
                }
            ]
        }
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    background: rgb(3, 84, 87);
    margin-top: 10px;
    padding: 4px;
}
.header-button-bar {
    line-height: 75px;
    text-align: center;
    float: right;
}
.what_is_asomeit {
    background: #D1DCE6;
    margin-top: 10px;
    padding: 12px;
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
