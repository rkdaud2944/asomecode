<template>
    <div class="main subject-color" v-bind:id="`component${this.index % 5 + 1}`">
        <img :src="imgSrc" class="images">
        <br>
        <p class="h3_style">{{ subject.title }}</p>
        <p class="eng_text">{{ subject.subTitle }}</p>
        <p class="text">{{ subject.description }}</p>
        <br>
        <div class="more-button" @click="goTo('/lesson/list', { id: subject.id })">
            <p style="color:white; font-size: 15px; line-height:28px; ">더 알아보기 <b>〉</b></p>
        </div>
    </div>
</template>

<script>
import VueBase from '@/mixin/vue-base'

export default {
    mixins: [
        VueBase,
    ],

    props: ["subject", "index"],

    data() {
        return {
            imgSrc: require(`@/assets/images/page${this.index % 5 + 1}.png`)
        }
    },
}
</script>




<style scoped src="@/assets/css/component/subject.css"/>