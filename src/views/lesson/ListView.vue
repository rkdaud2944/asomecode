<template>
    <el-row class="header">
        <el-col :span="10">
            <img src="/images/common/logom.png" style="padding: 0px; margin: 6px; margin-left: 250px; width: 150px; height: 55px;">
        </el-col>
        <el-col :span="13">
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <el-row>
        <el-col class="left " :span="6">
           <p class="test2"> {{ $route.query.title }}</p>
           <p class="test3">{{ $route.query.title_eng }}</p>
           <img src="../../../public/images/common/asomebot.png" style="margin-left: 230px; margin-top: 65px; object-fit: cover;">
            <!-- {{ $route.query}} -->
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="17">
            <el-row class="list-header">
               <p class="test4"> {{ $route.query.description }} </p>
               <div style="background-color:darkgray; height: 1px; width: 100%;"></div>
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
import '../../../public/css/common.css'

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
                    title: '어썸키트 과정 2',
                    description: '각종 부품과 센서에 대해 이해하고 간단한 놀잇감을 직접 개발해보면서 생활 속에서 만나는 다양한 장치의 원리를 이해하도록 개발된 프로그램',
                },
                {
                    id: 2,
                    title: '어썸키트 과정 3',
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
    
}
.header {
    width: 100%;
    background: rgb(255, 102, 51);
    padding: 4px;
}
.left {
    width: 100%;
    height: 45vh;
    background: rgba(255, 167, 101, 0.99);
    background-image: radial-gradient(rgb(255, 184, 131) 19%, transparent 0), radial-gradient(rgb(255, 184, 131) 19%, transparent 0);
    background-position: 1,10px;
     background-size: 15px 15px;
    /* margin-top: 10px; */
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
    
    border-radius: 8px; 
}
.list-main {
    height: 32px;
    background: #D3DCE6;
    padding-left: 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    
    border-radius: 8px; 
}
.test2
{
    font-family: inherit;
    font-size: 55px;
    font-weight: 900;
    color: white;
    text-align: right;
    margin-top : 23%;
    margin-right : 6%;
    margin-bottom: 0px;
    letter-spacing:-5px;
}
.test3{
   font-family: inherit;
    font-size: 24px;
    color: white;
    text-align: right;
    margin: 0px;
    margin-right : 6%;
}
.test4{
    font-size: 27px;
    font-weight: 300;
    margin-top : 100px;
}
</style>
