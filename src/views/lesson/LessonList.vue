<template>
    <div class="header">
        <a href="#">
            <img src="/images/common/logom.png" class="logo"/>
        </a>
    </div>

    <div class="row q-pa-md" style="padding: 0px;">
        <div class="col-4 left">
            <h4 class="subject-in-title">{{ subject.title }}</h4>
            <br>
            <h4 class="subject-in-title_eng">{{ subject.subTitle }}</h4>
            <img src="../../../public/images/common/asomebot.png" class="asomebot">
        </div>

        <div class="subject-size subject-margin">
            <div class="row list-header">
                <p class="description-text">{{ subject.description }}</p>
            </div>
            <div class="list-top-bar"></div>
            <div @click="goTo(`/lesson/detail/${lesson.id}`)" class="list-left rounded q-ma-sm q-pa-md" v-for="(lesson, index) in subject.lessons" :key="index" style="cursor: pointer" >
                <div style="height: 60px;">          
                    <div class="subject-number">
                        <p class="subject-number-text"><b>{{ index + 1 }}</b> 차시</p>
                    </div>
                    <p class="subject-title-text">{{ lesson.title }}</p>
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

@media (min-width: 1180px){
    .subject-margin {
    margin-left:40px ;
    }
}


@media (min-width: 834px){

    .header {
        width: 100%;
        background: rgb(255, 102, 51);
        height: 70px;
    }
    .logo{
        margin: 10px;
        margin-left: 200px;
        width: 120px;
        height: 45px;
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
        margin-right: 10px;
        float: left;
    }
    .list-top-bar{
        background-color:darkgray;
        height: 1px;
        width: 100%;
        margin-bottom:20px
    }
    .subject-number{
        background:white ; width: 10%; height: 100%; border-radius: 20px; display: inline-block !important; position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px; position: absolute; top:30%; left:22%; font-size: 1.3vw;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 40%;
        margin-left: 30px;
        font-size: 20px;
    }
    .asomebot{
        position:absolute ;
        right:20px;
        bottom: -70px;
    }
    .subject-size{
        width: 66.67%;
        height: auto;
    }
    .description-text{
    font-size:2vw; 
    }
}
@media (min-width: 718px) and (max-width:784px) {
    
    .header {
        height: 0px;
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
        text-align: center;
        margin-top : 5%;
        margin-right : 0%;
        margin-bottom: 0px;
        letter-spacing:-5px;
    }
    .subject-in-title_eng{
        font-family: inherit;
        font-size: 24px;
        color: white;
        text-align: center;
        margin-top: 0px;
        margin-left : 6%;
    }
    .left {
        width: 100%;
        height: 33.5vw;
        background: rgba(255, 167, 101, 0.99);
        background-image: radial-gradient(rgb(255, 184, 131) 19%, transparent 0), radial-gradient(rgb(255, 184, 131) 19%, transparent 0);
        background-position: 1,10px;
        background-size: 15px 15px;
        padding: 0px;
        position: relative;
        margin-right: 10px;
        float: left;
    }
    .list-top-bar{
        background-color:darkgray;
        height: 1px;
        width: 98%;
        margin-bottom:20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .subject-number{
        background:white;
        width: 10%;
        height: 100%;
        border-radius: 20px;
        display: inline-block !important;
        position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:30%;
        left:22%;
        font-size: 2vw;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 40%;
        margin-left: 30px;
        font-size: 20px;
    }  
    .asomebot{
        position:absolute;
        left: 230px;
        top: 125px;
    }
    .subject-size{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 98%;
        height: auto;
    }
    .description-text{
        font-size:2vw;
        margin: 35px;
    }
}
@media (min-width: 100px) and (max-width:718px) {
        .header {
        height: 0px;
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
        text-align: center;
        margin-top : 5%;
        margin-right : 0%;
        margin-bottom: 0px;
        letter-spacing:-5px;
    }
    .subject-in-title_eng{
        font-family: inherit;
        font-size: 24px;
        color: white;
        text-align: center;
        margin-top: 0px;
        margin-left : 6%;
    }
    .left {
        width: 100%;
        height: 33.5vw;
        background: rgba(255, 167, 101, 0.99);
        background-image: radial-gradient(rgb(255, 184, 131) 19%, transparent 0), radial-gradient(rgb(255, 184, 131) 19%, transparent 0);
        background-position: 1,10px;
        background-size: 15px 15px;
        padding: 0px;
        position: relative;
        margin-right: 10px;
        float: left;
    }
    .list-top-bar{
        background-color:darkgray;
        height: 1px;
        width: 98%;
        margin-bottom:20px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .subject-number{
        background:white;
        width: 10%;
        height: 100%;
        border-radius: 20px;
        display: inline-block !important;
        position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:30%;
        left:22%;
        font-size: 2vw;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 40%;
        margin-left: 30px;
        font-size: 20px;
    }  
    .asomebot{
        position:absolute;
        left: 230px;
        top: 125px;
    }
    .subject-size{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 98%;
        height: auto;
    }
    .description-text{
        font-size:2vw;
        margin: 35px;
    }

}
</style>