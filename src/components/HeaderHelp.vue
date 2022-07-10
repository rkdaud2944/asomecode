<template>
    <el-tabs type="border-card" v-model="tabName" @tab-click="onTabClick">
        <el-tab-pane label="pin">핀 라이브러리</el-tab-pane>
        <el-tab-pane label="module">모듈 라이브러리</el-tab-pane>
        <el-tab-pane label="qna">Q&A</el-tab-pane>
        <el-tab-pane label="subject">커스텀 과목</el-tab-pane>
    </el-tabs>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],

    data() {
        return {
            tabName: 'pin',
        }
    },

    mounted() {
        // TODO: 오류 발생
        // const names = this.$route.path.split('/');
        // this.tabName = names[2];
        // console.log(names, this.tabName);
    },

    methods: {
        onTabClick(tab) {
            console.log(tab.props.label);
            this.goTo(`/help/${tab.props.label}/list`);
        },
    },
}
</script>
