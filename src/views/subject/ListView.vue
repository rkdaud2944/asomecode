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
        <el-button @click="onWriteButtonClick" type="primary">글쓰기</el-button>
    </div>

    <br>
    <el-row class="pagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="rowCount"
            :page-size="pageSize"
            :page-count="pageCount"
            :current-page="currentPage"
            @current-change="onChangeCurrentPage" />        
    </el-row>
</template>

<script>
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
            subjects: [
                {
                    id: 1,
                    title: '커스텀 과목',
                    author: '장성우',
                    created_at: '2020-01-01',
                    views: 100,
                },
                {
                    id: 2,
                    title: '커스텀 과목',
                    author: '장성우',
                    created_at: '2020-01-01',
                    views: 100,
                },
                {
                    id: 3,
                    title: '커스텀 과목',
                    author: '장성우',
                    created_at: '2020-01-01',
                    views: 100,
                },
                {
                    id: 4,
                    title: '커스텀 과목',
                    author: '장성우',
                    created_at: '2020-01-01',
                    views: 100,
                },
            ],
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

        onChangeCurrentPage(page) {
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