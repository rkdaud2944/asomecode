<template>
    <div class="header">
        <a href="#">
            <img src="/images/common/logom.png" style="margin: 10px; margin-left: 200px; width: 120px; height: 45px;"/>
        </a>
    </div>

    <div class="row q-pa-md" style="padding: 0px;">
        <div class="col-4 left">
            <h4 class="subject-in-title">{{ subject.title }}</h4>
            <br>
            <h4 class="subject-in-title_eng">{{ subject.subTitle }}</h4>
            <img src="../../../public/images/common/asomebot.png" style="position:absolute ; right:20px; bottom: -70px;">
        </div>

        <div class="col-8">
            <div class="row list-header">
                {{ subject.description }}
            </div>
        <div style="background-color:darkgray; height: 1px; width: 100%; margin-bottom:20px">

        </div>
            <div @click="goTo(`/lesson/detail/${lesson.id}`)" class="row" v-for="(lesson, index) in subject.lessons"
                :key="index">

                <div class="col-12 list-left rounded q-ma-sm q-pa-md" style="height: 80px; cursor: pointer;">
                    
                    <div style="background:white ; width: 10%; height: 100%; border-radius: 20px; display: inline-block !important; position: relative;">
                    <p style="padding:0px; position: absolute; top:25%; left:20%; font-size: 20px;"><b>{{ index + 1 }}</b> 차시</p>
                    </div>

                    <p style="text-align:right; display: inline-block; position: relative; bottom: 40%; margin-left: 30px; font-size: 20px;">{{ lesson.title }}</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import VueBase from '@/VueBase';
import apiSubject from "@/api/subject";

export default {
    mixins: [VueBase],

    data() {
        return {
            subject: null,
        }
    },

    mounted() {
        this.getSubject(this.$route.query.id)
    },

    methods: {
        getSubject(id) {
            apiSubject.subjectDetail(id)
                .then((response) => {
                    console.log(response.data);
                    this.subject = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    background: rgb(255, 102, 51);
    height: 70px;
}
.list-header {
    margin-top: 70px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
}
.list-left {
    background:rgb(242,242,242);
    
}
.list-main {
    background:rgb(242,242,242);
    
}
.rounded {
    border-radius: 30px;
}
.subject-in-title
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
.subject-in-title_eng{
   font-family: inherit;
    font-size: 24px;
    color: white;
    text-align: right;
    margin: 0px;
    margin-right : 6%;
}
.left {
    width: 29%;
    height: 45vh;
    background: rgba(255, 167, 101, 0.99);
    background-image: radial-gradient(rgb(255, 184, 131) 19%, transparent 0), radial-gradient(rgb(255, 184, 131) 19%, transparent 0);
    background-position: 1,10px;
    background-size: 15px 15px;
    padding: 0px;
    position: relative;
    margin-right: 50px;
}
</style>