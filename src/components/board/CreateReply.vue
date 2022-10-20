<template>
    <div class="row create-comment-container">
        <div class="col-2">
            <div class="col">
                <q-input class="input-writer-password" v-model="createReplyBody.writer" outlined label="작성자" />
            </div>
            <div class="col">
                <q-input class="input-writer-password" v-model="createReplyBody.password" outlined label="비밀번호" />
            </div>
        </div>
        <div class="col-10">
            <div class="col">
                <q-input v-model="createReplyBody.content" filled type="textarea" />
            </div>
            <div class="col" style="text-align: right;">
                <q-btn class="sumit-comment-btn" style="right: 10px" color="primary" label="취소"
                    @click="onCancelCreateReply(index)" />
                <q-btn class="sumit-comment-btn" color="primary" label="등록" @click="onCreateReply(index)" />
            </div>
        </div>
    </div>
</template>

<script>
import apiBoard from "@/api/board";

export default {
    props: ["index"],

    data() {
        return {
            createReplyBody: {
                writer: null,
                password: null,
                content: null,
            },
        }
    },

    methods: {
        onCancelCreateReply(index) {
            this.$emit("onCancelCreateReply", index);
        },

        onCreateReply(index) {
            if (this.createReplyBody.content == null ||
                this.createReplyBody.content == '') {
                this.$q.notify({
                    color: "deep-orange",
                    textColor: "white",
                    message: "내용을 입력해주세요",
                });
                return
            }

            let body = this.createReplyBody
            apiBoard.createReply(body, index)
                .then(() => {
                    this.$emit("onCreateReply");
                })
                .catch((response) => {
                    this.$q.notify({
                        color: "deep-orange",
                        textColor: "white",
                        message: response.data.message,
                    });
                });
        },
    }
}
</script>

<style>
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
    width: 60px;
    margin-top: 10px;
}
</style>