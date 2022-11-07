<template>
    <q-dialog v-model="dialog">
        <q-card style="width: 1000px; max-width: 80vw;">
            <q-card-section>
                <div class="text-h6">새 글 작성</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form @submit="onSubmitArticle" @reset="onResetArticleBody" class="q-gutter-md">
                    <q-input :rules="[val => !!val || '작성자를 입력해 주세요']" filled v-model="createArticleBody.writer" label="작성자" />
                    <q-input :rules="[val => !!val || '비밀번호를 입력해']" filled v-model="createArticleBody.password" type="password"
                        label="비밀번호" />
                    <q-input :rules="[val => !!val || '제목을 입력해 주세요']" filled v-model="createArticleBody.title" label="제목" />
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
</template>

<script>
import VueBase from "@/mixin/vue-base";
import apiBoard from "@/api/board";
import { ref } from 'vue'

export default {
    mixins: [VueBase],

    data() {
        return {
            createArticleBody: {
                writer: "",
                password: "",
                title: "",
                content: "",
                boardType: null,
            },
        }
    },

    setup() {
        return {
            dialog: ref(false),
        }
    },

    methods: {
        onDialog(boardType) {
            this.dialog = true
            this.createArticleBody.boardType = boardType
        },

        onResetArticleBody() {
            this.createArticleBody = {
                writer: null,
                password: null,
                title: null,
                content: null,
            }
        },

        onSubmitArticle() {
            let body = this.createArticleBody
            apiBoard.create(body)
                .then(() => {
                    this.dialog = false
                    this.createArticleBody = {
                        writer: null,
                        password: null,
                        title: null,
                        content: null,
                        boardType: null,
                    }
                    this.$emit("succeededCreateArticle");
                })
                .catch(this.showError);
        },
    },
}
</script>

<style>
.form-btn {
    margin-right: 10px;
}
</style>