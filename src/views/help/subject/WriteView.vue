<template>
    <Header />
    <br>

    <el-row>
          <el-input
            placeholder="Type something"
            prefix-icon="el-icon-search"
            v-model="keyword">
        </el-input>
    </el-row>
    <br>

    <el-row>
        <el-col :span="10">
            <LessonList ref="sourceList" />
        </el-col>

        <el-col :span="4">
            <div class="button-bar">
                <el-button @click="addLessons" type="primary">추가</el-button>
            </div>
            <br>
            <br>

            <div class="button-bar">
                <el-button @click="deleteLessons" type="danger">삭제</el-button>
            </div>
        </el-col>

        <el-col :span="10">
            <LessonList ref="targetList" />
        </el-col>
    </el-row>
</template>

<script>
import Header from '@/components/HeaderHelp.vue';
import LessonList from '@/components/LessonList.vue';

export default {
    components: {
        Header,
        LessonList,
    },

    data() {
        return {
            keyword: '',
        }
    },

    mounted() {
        const rows = [
            {
                id: 0,
                category: 'AsomeKit',
                title: 'SW코딩 왜 배워야 할까요?',
            },
            {
                id: 1,
                category: 'AsomeKit',
                title: '프로그래밍과 사물인터넷은 뭔가요?',
            },
            {
                id: 2,
                category: 'AsomeKit',
                title: '어썸보드와 어썸코드 사용 준비하기',
            },
            {
                id: 3,
                category: 'AsomeKit',
                title: 'LED 제어하기와 신호등 만들기',
            },
            {
                id: 4,
                category: 'AsomeKit',
                title: '버튼 스위치 이용하기와 주사위 만들기',
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
}
</script>

<style>
.button-bar {
    width: 100%;
    text-align: center;
}
</style>