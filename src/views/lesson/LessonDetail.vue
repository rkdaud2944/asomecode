<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="logo"/>
        </a>
    </div>

    <div class="row">
        <div class="col-3">
            <h4 class="flex flex-center">목차</h4>
            <div @click="moveTo(title.tag)" :class="`title title-${title.level}`" v-for="(title, index) in titles" :key="index">
                {{title.name}}
            </div>
        </div>

        <div class="col-9">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
import markdown from "@/utils/markdown";
import lesson03 from "@/data/lesson03.js";

export default {
    data() {
        return {
            titles: [],
            content: "",
        };
    },

    mounted() {
        markdown.setHtml(lesson03);
        this.titles = markdown.getTitles(lesson03);
        this.content = markdown.getContent();
    },

    methods: {
        moveTo(tag) {
            const element = window.document.getElementById(tag);
            console.log(tag, element);
            const top = element.offsetTop;
            window.scrollTo(0, top);
        },
    },
};
</script>

<style scoped>

.title {
    width: 100%;
    margin: 8px;
    cursor: pointer;
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

@media (min-width: 883px){
.header {
        width: 100%;
        background: rgb(255, 102, 51);
        height: 70px;
}
.logo {
        margin: 10px;
        margin-left: 200px;
        width: 120px;
        height: 45px;
}
.nav-padding{
        padding-top: 180px;
    }
}

@media (max-width: 883px){
.nav-padding{
        padding-top: 130px;
    }
.header {
        width: 100%;
        background: rgb(255, 102, 51);
        min-height: 10px;
}
.logo {
        display:none;
}
}
</style>