<template>
    <!-- <div class="main test"> -->
    <div class="main test" v-bind:id="'component'+subject.id">
    
            <img :src="subject.images" class="images">
        
            <br>
        <p class="h3_style">{{ subject.title }}</p>
    
        <p class="eng_text">{{ subject.title_eng }}</p>


        <p class="text">{{ subject.description }}</p>
        <br>

            <div @click="goTo('/lesson/list', subject)"
            class="more-button" ><p style="color:white; font-size: 14px; line-height: 3px ;">더 알아보기 <b>〉</b></p> </div>
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
        console.log("맵테스트 : "+componentColorMap.get(1))
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
    margin-top :30px;
    margin-right: auto;
    margin-left: auto;
    width: 170px;
    height: 30px;
    border: 2px solid white;
    border-radius: 18px;
    cursor: pointer;
    
}
.test{
    background-color: rgb(255, 102, 51);
}
#component1{
    background-color: rgb(250, 190, 0);
}
#component2{
    background-color: rgb(0, 153, 204);
}
#component3{
    background-color: rgb(51, 204, 51);
}
#component4{
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
    font-size : 15px;
    margin: 5px;
}
</style>