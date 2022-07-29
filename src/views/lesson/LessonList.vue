<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="subject-logo"/>
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
                <div class="subject-div-size">          
                    <div class="subject-number">
                        <p class="subject-number-text"> <span class="testColor">{{ index + 1 }}</span> 차시</p>
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

.testColor{
    color: orange;
    font-weight: bold;
    font-size: 20px;
}
.q-ma-sm{
    margin: 10px;
}
.q-pa-md{
    padding: 5px 10px;
}
/* nav bar fixed 겹침방지용 코드 */
@media (min-width: 884px){
    .nav-padding{
        padding-top: 120px;
    }
}
@media (max-width: 884px){
    .nav-padding{
        padding-top: 100px;
    }
    .subject-logo{
        display: none;
    }
    .header {
        min-height: 10px;
    }
}

/* description 위치조절용 코드 */
@media (min-width: 1180px){
    .subject-margin {
    margin-left:40px ;
    }
}

/* 가장 큰 사이즈 */
@media (min-width: 834px){

    .header {
        width: 100%;
        background: rgb(255, 102, 51);
        min-height: 10px;
        padding-top: 100px;
    }
    .subject-logo{
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
        margin-top : 55px;
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
        background:white ; width: 80px; height: 40px; border-radius: 20px; display: inline-block !important; position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:10px;
        left:20px;
        font-size: 15px;
    }
    .subject-div-size{
        height: 40px;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 15px;
        margin-left: 30px;
        font-size: 15px;
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
    font-size:17px; 
    }
}

/* 두 번째로 큰 사이즈 */
@media (min-width: 784px) and (max-width: 834px){

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
        margin-top : 30px;
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
        height: 280px;
        min-height: 280px;
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
        background:white ; width: 80px; height: 40px; border-radius: 20px; display: inline-block !important; position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:10px;
        left:20px;
        font-size: 15px;
    }
    .subject-div-size{
        height: 40px;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 15px;
        margin-left: 30px;
        font-size: 15px;
    } 
    .asomebot{
        position:absolute;
        left: 30%;
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
        font-size:17px;
        margin: 35px;
    }
}

/* 두 번째로 작은 사이즈 */
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
        margin-top : 30px;
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
        height: 280px;
        min-height: 280px;
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
        background:white ; width: 80px; height: 40px; border-radius: 20px; display: inline-block !important; position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:10px;
        left:20px;
        font-size: 15px;
    }
    .subject-title-text{
        text-align:right;
        display: inline-block;
        position: relative;
        bottom: 15px;
        margin-left: 30px;
        font-size: 15px;
    }  
    .subject-div-size{
        height: 40px;
    }
    .asomebot{
        position:absolute;
        left: 30%;
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
        font-size:17px;
        margin: 35px;
    }
}

/* 가장 작은 사이즈 */
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
        margin-top : 30px;
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
        height: 280px;
        min-height: 280px;
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
        width: 100%;
        height: 35px;
        border-radius: 20px;
        display: inline-block !important;
        position: relative;
        font-size: 20px;
    }
    .subject-number-text{
        padding:0px;
        position: absolute;
        top:6px;
        left:44%;
        font-size: 18px;
    }
    .subject-title-text{
        text-align:center;
        position: relative;
        font-size: 15px;
    }  
    .subject-div-size{
        height: 70px;
    }
    .asomebot{
        position:absolute;
        left: 30%;
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
        font-size:17px;
        margin: 35px;
    }
}
</style>