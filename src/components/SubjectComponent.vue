<template>
    <div class="main">
        <br>
        <h5>{{ subject.title }}</h5>

        <p class="text">{{ subject.description }}</p>
        <br>

        <div class="row flex flex-center">
            <q-btn @click="goTo('/lesson/list', subject)" color="secondary" label="더알아보기" class="q-ml-md" />
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
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 320px;
    background: rgb(237, 225, 138);
    text-align: center;
    position : relative;
}
.text {
    margin-left: 10px;
    margin-right: 10px;
}
</style>