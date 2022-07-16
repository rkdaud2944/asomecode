<template>
    <Header />
    <br />

    <q-input class="q-ma-md" color="teal" filled v-model="keyword" label="검색어">
        <template v-slot:prepend>
            <q-icon name="search" />
        </template>
    </q-input>
    <br />

    <el-row class="ma3">
        <el-col :span="10">
            <LessonList ref="sourceList" />
        </el-col>

        <el-col :span="4">
            <div class="button-bar">
                <el-button @click="addLessons" type="primary">추가</el-button>
            </div>
            <br />
            <br />

            <div class="button-bar">
                <el-button @click="deleteLessons" type="danger">삭제</el-button>
            </div>
        </el-col>

        <el-col :span="10">
            <LessonList ref="targetList" />
        </el-col>
    </el-row>

    <div class="q-ma-md">
        <q-input filled v-model="title" label="제목" stack-label :dense="dense" />
        <br>
        <q-input v-model="text" label="내용" filled type="textarea" />
        <br>

        <q-btn @click="goTo('/help/subject/list')" color="primary" label="완료" />
    </div>
</template>

<script>
import VueBase from "@/VueBase";
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
            text: "",
        };
    },

    mounted() {
        const rows = [
            {
                id: 0,
                category: "AsomeKit",
                title: "SW코딩 왜 배워야 할까요?",
            },
            {
                id: 1,
                category: "AsomeKit",
                title: "프로그래밍과 사물인터넷은 뭔가요?",
            },
            {
                id: 2,
                category: "AsomeKit",
                title: "어썸보드와 어썸코드 사용 준비하기",
            },
            {
                id: 3,
                category: "AsomeKit",
                title: "LED 제어하기와 신호등 만들기",
            },
            {
                id: 4,
                category: "AsomeKit",
                title: "버튼 스위치 이용하기와 주사위 만들기",
            },
        ];
        this.$refs.sourceList.addRows(rows);
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
