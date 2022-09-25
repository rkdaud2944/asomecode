<template>
    <q-dialog v-model="dialog" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">비밀번호</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input v-model="password" autofocus @keyup.enter="prompt = false" />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn class="form-btn" label="취소" color="primary" v-close-popup />
                <q-btn class="form-btn" label="삭제" color="red" @click="onDelete" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import apiBoard from "@/api/board";
import { ref } from 'vue'

export default {
    data() {
        return {
            type: null,
            id: null,
            password: null,
        }
    },

    setup() {
        return {
            dialog: ref(false),
        }
    },

    methods: {
        onDialog(type, id) {
            this.dialog = true
            this.type = type
            this.id = id
        },

        cancelDialog() {
            this.dialog = false
            this.type = null
            this.id = null
            this.password = null
        },

        onDelete() {
            apiBoard.deleteArticle(this.type, this.id, this.password)
                .then(() => {
                    if (this.type == 'article') this.$emit("succeededDeleteArticle");
                    else this.$emit("succeededDeleteComment");
                    this.cancelDialog()
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