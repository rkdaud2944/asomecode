<template>
    <div class="main subject-color" v-bind:id="'component'+subject.id">
        <img :src="subject.images" class="images">
        <br>
        <p class="h3_style">{{ subject.title }}</p>
        <p class="eng_text">{{ subject.title_eng }}</p>
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

    props: ["subject"],
setup() {

    },
}
</script>

<style scoped src="@/assets/css/component/subject.css"/>