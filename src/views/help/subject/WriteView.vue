<template>
    <Header />
    <br />

    <div class="q-pa-md">
        <div class="row">
            <div class="col-5">
                <q-input color="teal" filled v-model="keyword" label="검색어">
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
                <br />
                <LessonList ref="sourceList" />

            </div>

            <div class="col">
                <div class="button-bar">
                    <el-button @click="addLessons" type="primary">추가</el-button>
                </div>
                <br />
                <br />

                <div class="button-bar">
                    <el-button @click="deleteLessons" type="danger">삭제</el-button>
                </div>

            </div>

            <div class="col-5">
                <LessonList ref="targetList" />
            </div>
        </div>
    </div>

    <div class="q-ma-md">
        <q-input filled v-model="title" label="제목" stack-label :dense="dense" />
        <br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="author" label="작성자" stack-label :dense="dense" />
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="password" label="비밀먼호" type="password" stack-label :dense="dense" />
            </div>
        </div>
        <br>

        <q-input v-model="text" filled type="textarea" />
        <br>

        <q-btn @click="goTo('/help/subject/list')" color="primary" label="완료" />
    </div>
</template>

<script>
import VueBase from "@/VueBase";
import lessons from "@/data/lessons";
import Header from "@/components/HeaderHelp.vue";
import LessonList from "@/components/LessonList.vue";

export default {
    mixins: [VueBase],

    components: {
        Header,
        LessonList,
    },

    data() {
        return {
            keyword: "",
            title: "",
            author: "",
            password: "",
            text: "",
        };
    },

    mounted() {
        this.$refs.sourceList.addRows(lessons);
    },

    methods: {
        addLessons() {
            const sourceList = this.$refs.sourceList;
            const targetList = this.$refs.targetList;
            const source = sourceList.getSelected();
            if (source) {
                targetList.addRows(source);
                sourceList.removeRows(source);
            }
        },

        deleteLessons() {
            const sourceList = this.$refs.sourceList;
            const targetList = this.$refs.targetList;
            const target = targetList.getSelected();
            if (target) {
                sourceList.addRows(target);
                targetList.removeRows(target);
            }
        },
    },
};
</script>

<style>
.button-bar {
    width: 100%;
    text-align: center;
}
</style>
