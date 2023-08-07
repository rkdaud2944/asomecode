<template>
    <div class="header nav-padding">
        <a @click="goTo('/')">
            <img src="/images/common/logom.png" class="logo" />
        </a>
    </div>

    <div class="row">
        <div class="col-3 scroll" :class="{sidefixed: scrollPosition > 10}">
            <div class="flex flex-center title-box">
                <a href="javascript:history.back()" class="gohome" >
                    <!-- <img src="../../../public/images/common/p3_list.png"> -->
                    <img :src="contentsList"/>
                    <lectureList/>
                </a>
                <p class="title-style">목차</p>
            </div>
            <div @click="moveTo(title.tag)" :class="`title`" v-for="(title, index) in titles" :key="index">
                {{title.name}}
            </div>
        </div>

        <div class="col-9 contents" :class="{c9contents: scrollPosition > 10}"><br>
            <div class="markdown_output" v-html="output"></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import markdown from "@/utils/markdown";
import apiLesson from "@/api/lesson";

export default {
    mixins: [VueBase],
    
    data() {
        return {
            lesson: {},
            titles: [],
            output: null,
            scrollPosition: null,

            logom: images.logom,
            lectureList: images.lectureList,
            contentsList: images.contentsList
        };
    },

    mounted() {
        this.getLesson(this.$route.query.id)
        window.addEventListener('scroll', this.updateScroll);
    },

    updated() {
        hljs.highlightAll();
    },

    methods: {
        updateScroll(){
            this.scrollPosition = window.scrollY
        },
        moveTo(tag) {
            const element = window.document.getElementById(tag);
            console.log(tag, element);
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