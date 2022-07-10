<template>
    <el-row class="header">
        <el-col :span="10">
            <img src="/images/common/logo_con.jpg" />
        </el-col>
        <el-col :span="13">
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <el-row>
        <el-col class="left" :span="8">
            {{ $route.query.title }}
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="15">
            <el-row class="list-header">
                {{ $route.query.description }}
            </el-row>

            <el-row @click="goTo(`/lesson/detail/${lesson.id}`)" class="list" v-for="(lesson, index) in lessons" :key="index">
                <el-col :span="2" class="list-left" >{{ index + 1 }}차시</el-col>
                <el-col :span="21" class="list-main" >{{ lesson.title }}</el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
import VueBase from '@/VueBase';

export default {
    mixins: [VueBase],

    data() {
        return {
            lessons: [
                {
                    id: 0,
                    title: '어썸키트 과정 1',
                    description: '최소한의 부품과 장치를 이용하여 교구의 비용은 줄이고 피지컬 컴퓨팅 전반의 코딩을 체험할 수 있도록 준비된 교육 프로그램',
                },
                {
                    id: 1,
                    title: '어썸키드 과정 2',
                    description: '각종 부품과 센서에 대해 이해하고 간단한 놀잇감을 직접 개발해보면서 생활 속에서 만나는 다양한 장치의 원리를 이해하도록 개발된 프로그램',
                },
                {
                    id: 2,
                    title: '어썸키드 과정 2',
                    description: '각종 부품과 센서에 대해 이해하고 간단한 놀잇감을 직접 개발해보면서 생활 속에서 만나는 다양한 장치의 원리를 이해하도록 개발된 프로그램',
                },
            ],
        }
    },

    setup() {

    },

    mounted() {
        console.log(this.$route.query);
    },
}
</script>

<style scoped>
.el-col {
    border-radius: 8px;
}
.header {
    width: 100%;
    background: rgb(3, 84, 87);
    margin-top: 10px;
    padding: 4px;
}
.left {
    width: 100%;
    height: 90vh;
    background: rgb(186, 193, 0);
    margin-top: 10px;
    padding: 4px;
}
.list-header {
    margin-top: 20px;
    margin-bottom: 20px;
}
.list {
    cursor: pointer;
}
.list-left {
    width: 100%;
    height: 32px;
    background: #D3DCE6;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.list-main {
    height: 32px;
    background: #D3DCE6;
    padding-left: 20px;
    margin: 10px;
    display: flex;
    align-items: center;
}
</style>
