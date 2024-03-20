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
                    <div @click="moveTo(title.tag)" :class="`detail-title tag-${title.tag} defaultTag`" v-for="(title, index) in titles" :key="index">
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
        

        window.addEventListener('scroll', this.debounce(this.handleScroll, 100));


        this.getLesson(this.$route.query.id)
        
        const title = document.querySelector('.tag-0');
        title.classList.add('tag-active');

        
    },
    
    updated() {
        hljs.highlightAll();
    },

    
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        moveTo(tag) {
            const element = window.document.getElementById(tag);
            const top = element.offsetTop + 60; 

            // 현재 항목의 클래스를 추가
            if (element) {
                element.classList.add("active");
            }

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
                        elements[i].id = i
                        this.titles.push({
                            name: elements[i].innerText,
                            tag: elements[i].id,
                        });
                    }
                    
                    let serializer = new XMLSerializer();
                    this.output = serializer.serializeToString(doc);
                })
            .catch(this.showError);
        },
        
        historyBack(){
            this.$router.go(-1);

        },

        handleScroll(){
            const h2Elements = document.querySelectorAll('h2');
            let activeFound = false;
            
            h2Elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;

                // 상단에서부터 200px 내에 있는 요소에만 .active 클래스 적용
                if (elementTop >= 0 && elementTop <= 200 && !activeFound) {
                const id = element.id;
                const activeTag = document.querySelector(`.tag-${id}`);
                if (activeTag && !activeTag.classList.contains('tag-active')) {
                    // 첫번째 목차 활성화 제거
                    document.querySelectorAll('.defaultTag').forEach(element => {
                        element.classList.remove('defaultTag');
                    });
                    // 이전 .active 클래스 제거
                    document.querySelectorAll('.tag-active').forEach(tag => {
                        tag.classList.remove('tag-active');
                    });
                    // 현재 요소에 .active 클래스 추가
                    activeTag.classList.add('tag-active');
                }
                activeFound = true; // 활성 상태 요소를 찾았음을 표시
                }
            });

            const objectives = document.querySelector('.objectives');
            // 목차 위치
            if(window.scrollY > 50) {
                // 애니메이션 효과
                if (!objectives.classList.contains('animated')) {
                    objectives.classList.add('animated');
                    objectives.style.animation = 'moveUp 1s forwards';
                    objectives.classList.remove('animated');
                }
            } else {
                objectives.classList.add('animated');
                objectives.style.animation = 'moveDown 1s forwards';
                objectives.classList.remove('animated');
            }
        },

        // 디바운스 함수
        debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
            func.apply(context, args);
            }, wait);
        };
        }


    },
};
</script>

<!-- <style scoped src="@/assets/css/component/lesson.css"/> -->
<style src="@/assets/css/component/markdown_content.css"/>
<style src="@/assets/css/component/lesson_detail.css"/>
<style scoped src="@/assets/css/font.css"/>