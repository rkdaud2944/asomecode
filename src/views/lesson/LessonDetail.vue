<template>

    <div class="container-wrap">
        <div class="container">
            <!-- <div class="col-3 scroll" :class="{sidefixed: scrollPosition > 10}"> -->

            <div class="container-top">
                <div class="back-button" @click="historyBack">
                    <div class="ico_arrow"></div>
                </div>

                <div class="container-top-txt">                    
                    <p class="subject-title Pretendard-Medium"> {{ this.$route.query.subjectTitle }} </p>
                    <p class="lesson-chapter Pretendard-Regular"> {{ this.$route.query.index }}차시 </p>
                    <p class="chapter-title Pretendard-Medium"> {{ this.$route.query.title }} </p>
                </div>
            </div>

            <div class="cts-wrap">
                <!-- <div class="objectives" :class="{sidefixed: scrollPosition > 10}"> -->
                <div class="objectives Pretendard-Medium">
                    <div @click="moveTo(title.tag)" :class="`title`" v-for="(title, index) in titles" :key="index">
                        {{title.name}}
                    </div>
                </div>

                <div class="cts" :class="{c9contents: scrollPosition > 10}"><br>
                    <div class="markdown_output" v-html="output"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import VueBase from '@/mixin/vue-base';
import markdown from "@/utils/markdown";
import apiLesson from "@/api/lesson";
import images from "@/assets/images"

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
            console.log("111" + tag, element);
            // const top = element.offsetTop - 100; // 헤더 길이만큼 낮추기
            // const top = element.offsetTop - 100; // 헤더 길이만큼 낮추기

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
        
        historyBack(){
            this.$router.go(-1);

        }
    },
};
</script>

<!-- <style scoped src="@/assets/css/component/lesson.css"/> -->
<style src="@/assets/css/component/markdown_content.css"/>
<style src="@/assets/css/component/lesson_detail.css"/>
<style scoped src="@/assets/css/font.css"/>