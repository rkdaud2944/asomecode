<template>
    <!-- <div class="main test"> -->
    <div class="main test" v-bind:id="'component'+subject.id">
        <br>
        <h3>{{ subject.title }}</h3>
        <br>

        <p class="text">{{ subject.description }}</p>
        <br>

        <div class="more-button">
            <el-button @click="goTo('/lesson/list', subject)" class="more-button" type="success">더알아보기</el-button>
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
        console.log("맵테스트 : "+componentColorMap.get(1))
    },
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 300px;
    background: white;
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
}
.more-button {
    position : absolute;
    bottom: 20px;
    width: 100px;
    left: calc(50% - 50px);
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
    background-color: rgb(171, 101, 236);
}
#component5{
    background-color: rgb(171, 101, 236);
}

</style>