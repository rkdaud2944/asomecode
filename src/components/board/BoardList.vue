<template>
    
    <q-layout view="hhh LpR fff">
        <q-page-container style="margin: 0px 100px 0px 100px; background-color: #ffffff; height: 100%; height: 100vh; margin: 0;">
            <div>
                <div class="q-pa-md">
                    <div class="row q-pa-md" style="
                        width: 40%;
                        margin-left: auto;
                        margin-right: 5%;
                        padding: 0;
                        padding-top: 20px;
                        padding-bottom:20px;
                        ">
                        <div class="custom-div1" style="width: 30%; padding: 0px; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);">
                            <q-select dense square filled v-model="selectedFilter" :options="filterOptions" option-value="value" option-label="label" label="필터"  />
                        </div>
                        <div class="custom-div2" style="
                            padding-left: 0;
                            width: 70%;
                            border-top-left-radius: 0px !important;
                            border-bottom-left-radius: 0px !important;
                            border-top-right-radius: 3px !important;
                            border-bottom-right-radius: 3px !important;
                            background-color: white;box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);">
                            <q-input dense square filled color="teal" style="" v-model="keyword" label="검색어를 입력하세요" v-on:keyup.enter="searchSubject"></q-input>
                        </div>
                    </div>
                    
                    <div style=" width: 90%; background-color:#027BE3; height: 1px; margin: auto; margin-bottom: 17px;">
                    </div>

                    <CreateArticle ref="createArticleDialog" @succeededCreateArticle="succeededCreateArticle" />
                    <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged"
                        @onRowClick="onRowClick" />
                </div>
            </div>
            <div style="text-align: right; margin-bottom: 10px; margin-right: 6%;">
                <q-btn color="primary" label="새 글 작성" @click="onCreateArticleDialog(boardType)" />
            </div>
        </q-page-container>
        <div>
            <ArticleDetail ref="articleDetailDialog" @getArticles="getArticles" />
        </div>
        
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