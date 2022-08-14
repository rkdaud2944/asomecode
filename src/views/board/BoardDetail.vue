<template>
    <q-layout view="hhh LpR fff">
        <q-header class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    게시판 상세
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container style="margin: 0px 100px 0px 100px;">
            <br>
            <q-btn color="primary" label="목록으로" @click="goBack" />
            <q-btn style="float:right" color="primary" label="삭제" @click="goBack" />
            <q-btn style="float:right; margin-right: 10px;" color="primary" label="수정"/>

            <div class="row content-header">
                <div class="col-8">김태후니<br>2022-07-15</div>
                <div class="col-4" style="text-align: right;">댓글수: 0, 조회수: 120000</div>
            </div>

            <div class="column content">
                <div class="col-4">
                    <h2>어썸 아이티 게시판 첫 글</h2>
                </div>
                <q-linear-progress /><br>
                <div class="col-8">신입 개발자입니다.<br>
                    회사에서 사용할 노트북을 하나 사려고 하는데 사는 김에 맥북을 하나 사고 싶습니다.<br>
                    선배님들 추천해주실 수 있을까요?<br>
                    M1칩말고 M2칩을 사라고 하던데...<br>
                    Intellij DBeaver MongoDB 등등 사용중이고 큰 툴은 사용하지 않습니다.</div>
            </div>

            <div class="column comment-header">
                <div class="col">댓글 2</div>
            </div>

            <div class="column comment">
                <div class="col-5">김태후니2<br>2022-07-15</div><br>
                <div class="col">무적권 M1 으로 사십쇼</div>
            </div>
            <div class="column comment">
                <div class="col-5">김태후니3<br>2022-07-15</div><br>
                <div class="col">굳이 비싼 M2 살 이유가 전혀 없습니다~</div>
            </div>

            <div class="row create-comment-container">
                <div class="col-2">
                    <div class="col">
                        <q-input class="input-writer-password" outlined label="작성자" />
                    </div>
                    <div class="col">
                        <q-input class="input-writer-password" outlined label="비밀번호" />
                    </div>
                </div>
                <div class="col-10">
                    <div class="col">
                        <q-input filled type="textarea" />
                    </div>
                    <div class="col" style="text-align: right;">
                        <q-btn class="sumit-comment-btn" color="primary" label="등록" />
                    </div>
                </div>
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
import { useRouter } from 'vue-router'
export default {
    setup() {
        const $router = useRouter()
        function goBack() {
            $router.go(-1)
        }

        return {
            goBack
        }
    },
}
</script>

<style scoped>
h2 {
    font-size: 22px;
    margin: 0px;
    font-weight: bold;
}

.content-header {
    border: solid;
    border-color: #ddd;
    padding: 10px 15px;
    margin-top: 10px;
}

.content {
    border: solid;
    border-color: #ddd;
    padding: 10px 15px;
    margin-bottom: 20px;
}

.comment-header {
    border: solid;
    border-color: #ddd;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(241, 240, 240);
}

.comment {
    border: solid;
    border-top: 0px;
    border-color: #ddd;
    padding: 10px 15px;
}

.create-comment-container {
    border: solid;
    border-color: #ddd;
    padding: 15px;
    margin-top: 10px;
}

.input-writer-password {
    width: auto;
    margin: 0px 10px 10px 0px;
}

.sumit-comment-btn {
    width: 80px;
    margin-top: 10px;
}
</style>