<template>
    <q-dialog v-model="dialog">
        <q-card style="width: 1000px; max-width: 80vw;">
            <q-card-section>
                <q-btn color="primary" label="목록으로" v-close-popup />
                <q-btn style="float:right" color="primary" label="삭제"
                    @click="onDeleteDialog('article', articleDetail.id)" />
                <q-btn style="float:right; margin-right: 10px;" color="primary" label="수정" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="row content-header">
                    <div class="col-8">{{ articleDetail.writer }}<br>{{ articleDetail.createAt }}</div>
                    <div class="col-4" style="text-align: right;">댓글수: {{ articleDetail.commentCount }}, 조회수: {{
                            articleDetail.viewCount
                    }}</div>
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
                    <div class="col">{{ comment.createAt }}
                        <q-btn dense color="primary" icon="close" size="xs"
                            @click="onDeleteDialog('comment', comment.id)" />
                        <span v-on:click="onComment(comment.id)"> 답글쓰기</span>
                    </div>

                    <div class="column reply-header" v-if="comment.replies.length != 0">
                        <div class="col">답글</div>
                    </div>

                    <div class="col reply" v-for="reply in comment.replies" :key="reply">
                        <div class="col-5">{{ reply.writer }}</div>
                        <div class="col">{{ reply.content }}</div>
                        <div class="col">{{ reply.createAt }}
                            <q-btn dense color="primary" icon="close" size="xs"
                                @click="onDeleteDialog('reply', reply.id)" />
                        </div>
                    </div>

                    <CreateReply v-if="createReply[comment.id]" :index="comment.id"
                        @onCancelCreateReply="onCancelCreateReply" @onCreateReply="onCreateReply" />
                </div>

                <q-form @submit="createComment(articleDetail.id)" class="row create-comment-container">
                    <div class="col-2">
                        <div class="col">
                            <q-input class="input-writer-password" v-model="createCommentBody.writer" outlined
                                label="작성자" />

                            <q-input class="input-writer-password" v-model="createCommentBody.password" outlined
                                label="비밀번호" />
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="col">
                            <q-input v-model="createCommentBody.content" filled type="textarea" />
                        </div>
                        <div class="col" style="text-align: right;">
                            <q-btn class="sumit-comment-btn" color="primary" label="등록" type="submit" />
                        </div>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>

    <DeleteDialog ref="deleteAticleDialog" 
        @succeededDeleteArticle="succeededDeleteArticle"
        @succeededDeleteComment="succeededDeleteComment" />
</template>

<script>
import apiBoard from "@/api/board";
import CreateReply from '@/components/board/CreateReply.vue';
import DeleteDialog from '@/components/board/DeleteDialog.vue';
import { ref } from 'vue'

export default {
    components: {
        CreateReply, DeleteDialog
    },

    data() {
        return {
            createCommentBody: {
                writer: null,
                password: null,
                content: null,
            },

            articleDetail:[],
            createReply: [],
        }
    },

    setup() {
        return {
            dialog: ref(false),
        }
    },

    methods: {
        onDialog(id) {
            this.dialog = true
            this.id = id
            this.getArticle(id)
        },

        cancelDialog() {
            this.dialog = false
        },

        getArticle(id) {
            apiBoard.getArticle(id)
                .then(response => {
                    this.articleDetail = response.data
                    this.createReply = [];
                    this.createCommentBody = {
                        writer: "",
                        password: "",
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

        onDeleteDialog(type, id) {
            this.$refs.deleteAticleDialog.onDialog(type, id)
        },

        succeededDeleteArticle() {
            this.dialog = false
            this.$emit("getArticles");
        },

        succeededDeleteComment() {
            this.getArticle(this.articleDetail.id)
        },

        onComment(index) {
            this.createReply[index] = true
        },

        onCancelCreateReply(index) {
            this.createReply[index] = false
        },

        onCreateReply() {
            this.getArticle(this.articleDetail.id)
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
</script>

<style>
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