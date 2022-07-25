<template>
    <q-layout view="hhh LpR fff">
        <q-header class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    게시판
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container style="margin: 0px 100px 0px 100px;">
            <div class="q-pa-md">
                <div style="text-align: right;">
                    <q-btn color="secondary" label="새 글 쓰기" @click="goCreateBoard" />
                </div>
                <q-table title="게시판 목록" :rows="articles" :columns="columns" row-key="name" style="margin-top: 10px;"
                    @row-click="onRowClick(rows)"
                    hide-bottom />
            </div>

            <div class="q-pa-lg flex flex-center">
                <q-pagination
                v-model="currentPage"
                :max="10"
                direction-links
                boundary-links
                icon-first="skip_previous"
                icon-last="skip_next"
                icon-prev="fast_rewind"
                icon-next="fast_forward"
                />
            </div>
        </q-page-container>

        <q-footer class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
const columns = [
    { name: 'createAt', align: 'left', label: '작성 날짜', field: 'createAt' },
    { name: 'title', label: '제목', align: 'left', field: 'title' },
    { name: 'writer', label: '작성자', align: 'left', field: 'writer' },
    { name: 'viewCount', label: '조회수', align: 'left', field: 'viewCount' },
    { name: 'commentCount', label: '댓글수', align: 'left', field: 'commentCount' },
]

import { useRouter } from 'vue-router'
import apiBoard from "@/api/board";

export default {
    data() {
        return {
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            rowCount: null,
            pageCount: null,
            currentPage: 1,
        }
    },

    setup() {
        const $router = useRouter()
        function goCreateBoard() {
            $router.push('/board/create')
        }
        return {
            columns,
            goCreateBoard,
            articles: [],
        }
    },

    mounted() {
        this.changeCurrentPage(this.currentPage);
    },

    methods: {
        onRowClick(row) {
            this.$router.push({ path: '/board/detail', query: row.id });
        },

        changeCurrentPage(page) {
            apiBoard.list(page, this.pageSize, "QnA")
                .then((response) => {
                    this.articles = response.data.rows;
                    console.log(this.articles)
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    }
}
</script>