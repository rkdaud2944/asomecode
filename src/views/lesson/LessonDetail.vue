<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="logo"/>
        </a>
    </div>

    <div class="row">
        <div class="col-3" style="height:904px;">
            <div class="flex flex-center title-box">
                <a href="javascript:history.back()" class="gohome"><img src="../../../public/images/common/p3_list.png"></a>
                <p class="title-style">목차</p>   
            </div>
        <div class="test">
            <div @click="moveTo(title.tag)" :class="`title title-${title.level}`" v-for="(title, index) in titles" :key="index">
                {{title.name}}
            </div>
        </div>
        </div>

        <div class="col-9 contents">
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

        let header = document.querySelector(".col-3");
     
        window.onscroll = function () {
        let windowTop = window.scrollY;
        if (windowTop > 60) {
            header.classList.add("drop");
        } 
        else {
            header.classList.remove("drop");
        }
        };
        
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
@import '@/assets/css/component/lesson.css';


</style>