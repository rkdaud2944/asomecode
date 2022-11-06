<template>
    <q-layout view="hHh LpR fff">
        <q-header style="top: 52px;" class="bg-primary text-white" height-hint="98">
            <q-toolbar style="height: 65px;">
                <img src="/images/common/logo.png">
                <q-toolbar-title>과목 상세</q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container style="margin: 10px 100px 0px 100px;">
            <div class="q-pa-md">
                <div style="text-align: right;">
                    <q-btn color="secondary" label="새 글 쓰기" @click="goCreateBoard" />
                </div>
                <q-table title="게시판 목록" :rows="rows" :columns="columns" row-key="name" style="margin-top: 10px;"
                    @row-click="onRowClick(rows)" />
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
// TODO: 라우터를 따로 불러야 할 이유가 있는가?
import { useRouter } from 'vue-router'

export default {
    setup() {
        const $router = useRouter()
        function goCreateBoard() {
            $router.push('/board/create')
        }
        return {
            columns,
            rows,
            goCreateBoard
        }
    },
    methods: {
        onRowClick(row) {
            this.$router.push({ path: '/board/detail', query: row.id });
        },
    }
}

const columns = [
    { name: 'createdAt', align: 'left', label: '작성 날짜', field: 'createdAt' },
    { name: 'title', label: '제목', align: 'left', field: 'title' },
    { name: 'writer', label: '작성자', align: 'left', field: 'writer' },
    { name: 'views', label: '조회수', align: 'left', field: 'views' },
    { name: 'commentCount', label: '댓글수', align: 'left', field: 'commentCount' },
]

const rows = [
    {
        id: 1,
        createdAt: "2022-07-15",
        title: '어썸 아이티 게시판 첫 글',
        writer: '김태후니',
        views: 120000,
        commentCount: 0,
    },
    {
        id: 2,
        createdAt: "2022-07-15",
        title: '어썸 아이티 게시판 두번째 글',
        writer: '김태후니',
        views: 120,
        commentCount: 0,
    },
]
</script>