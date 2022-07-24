<template>
    <div class="row">
        <div class="col-3">
            <h4  class="flex flex-center">목차</h4>
            <div :class="`title title-${title.level}`" v-for="(title, index) in titles" :key="index">{{ title.name }}</div>
        </div>

        <div class="col-9">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

import markdown from '@/utils/markdown';
import lesson03 from '@/data/lesson03.js';

export default {
    data() {
        return {
            titles: [],
            content: "",
        };
    },

    mounted() {
        this.titles = markdown.getTitles(lesson03);
        this.content = marked.parse(lesson03);
    },
}
</script>

<style scoped>
.title {
    width: 100%;
    margin: 8px;
}
.title-1 {
    font-size: 1.5em;
    font-weight: bold;
}
.title-2 {
    font-size: 1.2em;
    padding-left: 10px;
}
.title-3 {
    font-size: 1em;
    padding-left: 20px;
}
.title-4 {
    font-size: 0.8em;
    padding-left: 30px;
}
</style>