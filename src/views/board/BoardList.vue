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
                <div style="text-align: right; margin-bottom: 10px;">
                    <q-btn color="secondary" label="새 글 작성" @click="createArticleDialog = true" />
                </div>

                <q-dialog v-model="createArticleDialog">
                    <q-card style="width: 1000px; max-width: 80vw;">
                        <q-card-section>
                            <div class="text-h6">새 글 작성</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <q-form @submit="onSubmitArticle" @reset="onResetArticleBody" class="q-gutter-md">
                                <q-input :rules="articleBodyRule" filled v-model="createArticleBody.writer"
                                    label="작성자" />
                                <q-input :rules="articleBodyRule" filled v-model="createArticleBody.password"
                                    type="password" label="비밀번호" />
                                <q-input :rules="articleBodyRule" filled v-model="createArticleBody.title" label="제목" />
                                <q-editor v-model="createArticleBody.content" min-height="10rem" />
                                <div>
                                    <q-btn class="form-btn" label="취소" color="primary" v-close-popup />
                                    <q-btn class="form-btn" label="등록" type="submit" color="positive" />
                                    <q-btn class="form-btn" label="Reset" type="reset" color="warning" />
                                </div>
                            </q-form>
                        </q-card-section>
                    </q-card>
                </q-dialog>

                <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged"
                    @onRowClick="onRowClick" />
            </div>
        </q-page-container>

        <q-dialog v-model="articleDetailDialog">
            <q-card style="width: 1000px; max-width: 80vw;">
                <q-card-section>
                    <q-btn color="primary" label="목록으로" v-close-popup />
                    <q-btn style="float:right" color="primary" label="삭제" @click="deleteAticleDialog = true" />
                    <q-btn style="float:right; margin-right: 10px;" color="primary" label="수정" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="row content-header">
                        <div class="col-8">{{ articleDetail.writer }}<br>{{ articleDetail.createAt }}</div>
                        <div class="col-4" style="text-align: right;">댓글수: {{ articleDetail.commentCount }}, 조회수: {{ articleDetail.viewCount }}</div>
                    </div>

                    <div class="column content">
                        <div class="col-4">
                            <h2>{{ articleDetail.title }}</h2>
                        </div>
                        <q-linear-progress /><br>
                        <div class="col-8">{{ articleDetail.content }}</div>
                    </div>

                    <div class="column comment-header">
                        <div class="col">댓글</div>
                    </div>

                    <div class="column comment" v-for="comment in articleDetail.comments" :key="comment">
                        <div class="col-5">{{ comment.writer }}</div>
                        <div class="col">{{ comment.content }}</div>
                        <div class="col">{{ comment.createAt }} <span v-on:click="onComment(comment.id)">답글쓰기</span> </div>

                        <div class="column reply-header" v-if="comment.replies.length != 0">
                            <div class="col">답글</div>
                        </div>

                        <div class="col reply" v-for="reply in comment.replies" :key="reply">
                            <div class="col-5">{{ reply.writer }}</div>
                        <div class="col">{{ reply.content }}</div>
                        <div class="col">{{ reply.createAt }}</div>
                        </div>

                        <CreateReply v-if="createReply[comment.id] " :index="comment.id" @onCancelCreateReply="onCancelCreateReply"/>
                    </div>

                    <q-form @submit="createComment(articleDetail.id)" class="row create-comment-container">
                        <div class="col-2">
                            <div class="col">
                                <q-input class="input-writer-password" 
                                :rules="articleBodyRule"
                                v-model="createCommentBody.writer" outlined label="작성자" />

                                <q-input class="input-writer-password" 
                                :rules="articleBodyRule"
                                v-model="createCommentBody.password" outlined label="비밀번호" />
                            </div>
                        </div>
                        <div class="col-10">
                            <div class="col">
                                <q-input v-model="createCommentBody.content" filled type="textarea" />
                            </div>
                            <div class="col" style="text-align: right;">
                                <q-btn class="sumit-comment-btn" color="primary" label="등록" type="submit"/>
                            </div>
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="deleteAticleDialog" persistent>
            <q-card style="min-width: 350px">
                <q-card-section>
                    <div class="text-h6">비밀번호</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input v-model="deleteArticlePassword" autofocus @keyup.enter="prompt = false" />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn class="form-btn" label="취소" color="primary" v-close-popup />
                    <q-btn class="form-btn" label="삭제" color="red" @click="onDeleteArticle(articleDetail.id)" />
                </q-card-actions>
            </q-card>
        </q-dialog>

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
import apiBoard from "@/api/board";
import Grid from '@/components/GridPage.vue';
import CreateReply from '@/components/board/createReply.vue';
import { ref } from 'vue'

export default {
    components: {
        Grid, CreateReply
    },

    data() {
        return {
            columns: columns,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            params: { page: 0, size: this.pageSize, boardType: "QnA" },
            createArticleBody: {
                writer: null,
                password: null,
                title: null,
                content: null,
                boardType: "QnA",
            },

            createCommentBody: {
                writer: null,
                password: null,
                content: null,
            },

            articleBodyRule: [
                val => (val !== null && val !== '') || '입력해주세요',
            ],

            deleteArticlePassword: null,

            articleDetail: null,
            createReply: [],
        }
    },

    setup() {
        return {
            articleDetailDialog: ref(false),
            createArticleDialog: ref(false),
            deleteAticleDialog: ref(false),
        }
    },

    methods: {
        onResetArticleBody() {
            this.createArticleBody = {
                writer: null,
                password: null,
                title: null,
                content: null,
                boardType: "QnA",
            }
        },

        onPageChanged() {
            this.getArticles();
        },

        onRowClick(row) {
            this.articleDetailDialog = true
            this.getArticle(row.id)
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

        getArticle(id) {
            apiBoard.getArticle(id)
                .then(response => {
                    this.articleDetail = response.data
                    this.createReply = [];
                    this.createCommentBody = {
                        writer: null,
                        password: null,
                        content: null,
                    };
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
        },

        onSubmitArticle() {
            if (this.createArticleBody.content == null ||
                this.createArticleBody.content == '') {
                this.$q.notify({
                    color: "deep-orange",
                    textColor: "white",
                    message: "내용을 입력해주세요",
                });
                return
            }

            let body = this.createArticleBody
            apiBoard.create(body)
                .then(() => {
                    this.getArticles()
                    this.createArticleDialog = false
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
        },

        onDeleteArticle(id) {
            let password = this.deleteArticlePassword

            apiBoard.deleteArticle(id, password)
                .then(response => {
                    console.log(response)
                    this.getArticles()
                    this.deleteAticleDialog = false
                    this.articleDetailDialog = false
                    this.articleDetail = null
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
        },

        onComment(index) {
            this.createReply[index] = true
        },
        
        onCancelCreateReply(index) {
            this.createReply[index] = false
        },

        onCreateReply(index) {
            this.createReply[index] = false
        },

        createComment(id) {
            if (this.createCommentBody.content == null ||
                this.createCommentBody.content == '') {
                this.$q.notify({
                    color: "deep-orange",
                    textColor: "white",
                    message: "내용을 입력해주세요",
                });
                return
            }

            let body = this.createCommentBody
            apiBoard.createComment(body, id)
                .then(() => {
                    this.getArticle(id)
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
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

<style scoped>
.form-btn {
    margin-right: 10px;
}

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
    padding: 12px 23px 10px 0;
    padding-left: 46px;
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

.reply-header {
    border: solid;
    border-color: #ddd;
    padding: 7px 12px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(241, 240, 240);
}

.reply {
    border: solid;
    border-top: 0px;
    border-color: #ddd;
    padding: 12px 23px 10px 0;
    padding-left: 46px;
}
</style>