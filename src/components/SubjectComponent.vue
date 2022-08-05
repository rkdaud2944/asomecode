<template>
    <div class="main subject-color" v-bind:id="'component'+subject.id">
        <img :src="subject.images" class="images">
        <br>
        <p class="h3_style">{{ subject.title }}</p>
        <p class="eng_text">{{ subject.title_eng }}</p>
        <p class="text">{{ subject.description }}</p>
        <br>
        <div class="more-button" @click="goTo('/lesson/list', subject)">
            <p style="color:white; font-size: 15px; line-height:28px; ">더 알아보기 <b>〉</b></p>
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

<style scoped src="@/assets/css/component/subject.css"/>