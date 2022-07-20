<template>
    <!-- <div class="main">
        <br>
        <h5>{{ subject.title }}</h5>
        <p>{{ subject.title_eng }}</p>

        <p class="text">{{ subject.description }}</p>
        <br>

        <div class="row flex flex-center">
            <q-btn @click="goTo('/lesson/list', subject)" color="secondary" label="더알아보기" class="q-ml-md" />
        </div>
    </div> -->

    <!-- <div class="main test"> -->
    <div class="main subject-color" v-bind:id="'component'+subject.id">
    
            <img :src="subject.images" class="images">
        
            <br>
        <p class="h3_style">{{ subject.title }}</p>
    
       <p class="eng_text">{{ subject.title_eng }}</p>


        <p class="text">{{ subject.description }}</p>
        <br>

            <div class="more-button" @click="goTo('/lesson/list', subject)">
                <p style="color:white; font-size: 15px; line-height:28px; ">더 알아보기 <b>〉</b>
                </p>
            </div>
        </div>


</template>

<script>
import VueBase from '@/VueBase'

export default {
    mixins: [
        VueBase,
    ],

    props: ["subject"],
setup() {

    },

    beforeMount(){
        var componentColorMap = new Map();
        componentColorMap.set(1,'red')
        componentColorMap.set(2,'yellow')
        componentColorMap.set(3,'blue')
        componentColorMap.set(4,'green')
    },
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 400px;
    text-align: center;
    position : relative;
}
.icon {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: black;
}
.text {
    margin-left: 10px;
    margin-right: 10px;
    line-height: 24px;
    font-size:14px;
    font-family: Helvetica Neue;
}
.more-button {
    bottom: 40px;
    right: 0;
    left: 0;
    width: 170px;
    height: 30px;
    border: 2px solid white;
    border-radius: 18px;
    cursor: pointer;
    position: absolute;
    margin : auto;
    
}
.subject-color{
    background-color: rgb(255, 102, 51);
}
#component2{
    background-color: rgb(250, 190, 0);
}
#component3{
    background-color: rgb(0, 153, 204);
}
#component4{
    background-color: rgb(51, 204, 51);
}
#component5{
    background-color: rgb(155, 98, 185);
}
#component5{
    background-color: rgb(155, 98, 185);
}

.h3_style{
    color: white;
    font-size : 40px;
    margin: 0px;
}
.images{
    display:inline-block; margin:auto; margin-top:-40px; width:122px; height:121px;
}
.eng_text{
    color: rgba(0,0,0,0.7);
    font-size : 16px;
    margin: 5px;
}
</style>