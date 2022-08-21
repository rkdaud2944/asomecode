<template>
    <q-layout view="hhh LpR fff">
        <q-page-container style="margin: 0px 100px 0px 100px;">
            <div class="q-pa-md">
                <div style="text-align: right; margin-bottom: 10px;">
                    <q-btn color="secondary" label="새 글 작성" @click="onCreateArticleDialog(boardType)" />
                </div>

                <CreateArticle ref="createArticleDialog" @succeededCreateArticle="succeededCreateArticle" />

                <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged"
                    @onRowClick="onRowClick" />
            </div>
        </q-page-container>

        <ArticleDetail ref="articleDetailDialog" @getArticles="getArticles"/>
    </q-layout>
</template>

<script>
import apiBoard from "@/api/board";
import Grid from '@/components/GridPage.vue';
import CreateArticle from '@/components/board/CreateArticleDialog.vue';
import ArticleDetail from '@/components/board/ArticleDetailDialog.vue';

export default {
    props: ["boardType"],

    components: {
        Grid, CreateArticle, ArticleDetail
    },

    data() {
        return {
            columns: columns,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            params: { page: 0, size: this.pageSize, boardType: this.boardType },
        }
    },

    setup() {
        return {
        }
    },

    methods: {
        onPageChanged() {
            this.getArticles();
        },

        onRowClick(row) {
            this.$refs.articleDetailDialog.onDialog(row.id)
        },

        getArticles() {
            apiBoard.getArticles(this.params)
                .then(response => {
                    this.$refs.grid.setData(response.data);
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
        },

        onCreateArticleDialog(boardType) {
            this.$refs.createArticleDialog.onDialog(boardType)
        },

        succeededCreateArticle() {
            this.getArticles()
        },
    },
}

const columns = [
    { name: 'createAt', align: 'left', label: '작성 날짜', field: 'createAt', style: 'width: 80px' },
    { name: 'title', label: '제목', align: 'left', field: 'title', style: 'width: 80px' },
    { name: 'writer', label: '작성자', align: 'left', field: 'writer', style: 'width: 80px' },
    { name: 'viewCount', label: '조회수', align: 'left', field: 'viewCount', style: 'width: 80px' },
    { name: 'commentCount', label: '댓글수', align: 'left', field: 'commentCount', style: 'width: 80px' },
]
</script>

<style>

</style>