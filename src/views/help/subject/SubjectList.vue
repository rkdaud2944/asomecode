<template>
    <Header />

    <el-row>
        <el-col :span="2"> </el-col>
        <el-col :span="20">
            <el-table
                @row-click="onSubjectClick"
                :data="subjects"
                style="width: 100%"
            >
                <el-table-column prop="id" label="id" width="80"></el-table-column>
                <el-table-column prop="title" label="title"></el-table-column>
                <el-table-column prop="author" label="author"></el-table-column>
                <el-table-column prop="created_at" label="created_at"></el-table-column>
                <el-table-column prop="views" label="views"></el-table-column>
            </el-table>
        </el-col>
    </el-row>

    <br>
    <div class="write-button-bar">
        <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" />
    </div>

    <br>
    <div class="q-pa-lg flex flex-center">
        <q-pagination @update:model-value="onPageChanged" v-model="currentPage" :max="pageCount" :max-pages="10"
            boundary-numbers color="purple" />
    </div>
</template>

<script>
import subjects from '@/data/subjects';
import Header from '@/components/HeaderHelp.vue';

export default {
    components: {
        Header,
    },

    data() {
        return {
            rowCount: 1000,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            currentPage: 1,
            subjects: subjects,
        }
    },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        }
    },

    methods: {
        onSubjectClick(row) {
            this.$router.push({path: '/help/subject/detail', query: row});
        },

        onPageChanged(page) {
            console.log(page);
        },

        onWriteButtonClick() {
            this.$router.push({path: '/help/subject/write'});
        },
    }
}
</script>

<style scoped>
.pagination {
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
.write-button-bar {
    margin-right: 32px;
    text-align: right;
}
</style>