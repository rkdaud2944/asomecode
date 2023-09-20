<template>
    <div class="row">
        <div class="col-3 backsidefixed">
            <div class="flex flex-center title-box">
                <a href="javascript:history.back()" class="gohome" >
                    <img :src="lectureList">
                </a>
                <p class="title-style">목차
                </p>
            </div>
            <div @click="moveTo(title.tag)" :class="`title`" v-for="(title, index) in titles" :key="index">
                {{title.name}}
            </div>  
        </div>

        <div class="col-9 contents c9contents"><br>
            <div class="markdown_output" v-html="output"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import markdown from "@/utils/markdown";
import apiLesson from "@/api/lesson";
import {  mapMutations  } from 'vuex';
import images from "@/assets/images";

export default {
    data() {
        return {
            lesson: {},
            titles: [],
            output: null,

            lectureList: images.lectureList
        };
    },

    computed: {
    },

    mounted() {
        this.getLesson(this.$route.query.id)
        window.addEventListener('scroll', this.updateScroll);
    },

    beforeUnmount() {
        this.SetBoViewTitle(null)
    },

    updated() {
        hljs.highlightAll();
    },

    methods: {
        ...mapMutations({
            SetBoViewTitle :'setBoViewTitle',
        }),

        moveTo(tag) {
            const element = window.document.getElementById(tag);
            // console.log(tag, element);
            const top = element.offsetTop - 100; // 헤더 길이만큼 낮추기

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        },

        getLesson(id) {
            apiLesson.lessonDetail(id)
                .then((response) => {
                    this.lesson = response.data;
                    this.output = markdown.parse(this.lesson.content)
                    
                    // ##################
                    this.SetBoViewTitle(this.lesson.title)
                    
                    let domparser = new DOMParser()
                    let doc = domparser.parseFromString(this.output, 'text/html')
                    const elements = doc.getElementsByTagName("h2");
                    for (let i = 0; i < elements.length; i++) {
                        this.titles.push({
                            name: elements[i].innerText,
                            tag: elements[i].id,
                        });
                    }
                })
                .catch(this.showError);
        },
    },
};
</script>

<style scoped src="@/assets/css/component/lesson.css"/>
<style src="@/assets/css/component/markdown_content.css"/>

<style>

</style>