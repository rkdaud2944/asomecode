<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="logo" />
        </a>
    </div>

    <div class="row">
        <div class="col-3" style="height:904px;">
            <div class="flex flex-center title-box">
                <a href="javascript:history.back()" class="gohome"><img
                        src="../../../public/images/common/p3_list.png"></a>
                <p class="title-style">목차</p>
            </div>
            <div class="test">
                <div @click="moveTo(title.tag)" :class="`title title-${title.level}`" v-for="(title, index) in titles"
                    :key="index">
                    {{title.name}}
                </div>
            </div>
        </div>

        <div class="col-9 contents"><br>
            <div class="markdown_output" v-html="output"></div>
        </div>

    </div>
</template>

<script>
import markdown from "@/utils/markdown";
import apiLesson from "@/api/lesson";

export default {

    data() {
        return {
            lesson: null,
            titles: null,
            content: null,
        };
    },

    computed: {
        output() {
            return markdown.markedInput(this.lesson.content)
        }
    },

    mounted() {
        this.getLesson(this.$route.query.id)
    },

    methods: {
        moveTo(tag) {
            const element = window.document.getElementById(tag);
            console.log(tag, element);
            const top = element.offsetTop;
            window.scrollTo(0, top);
        },

        getLesson(id) {
            apiLesson.lessonDetail(id)
                .then((response) => {
                    this.lesson = response.data;
                    markdown.setHtml(this.lesson.content);
                    this.titles = markdown.getTitles(this.lesson.content);
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
                })
                .catch(this.showError);
        },
    },
};


</script>



<style scoped src="@/assets/css/component/lesson.css"/>


<style src="@/assets/css/component/markdown_content.css"/>
<style>
.markdown_output {
    padding-top: 80px;
    margin: 0px 22px 0px 22px;
}
</style>