<template>
    <q-layout view="hHh LpR fff">

        <q-header class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    새 글 쓰기
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container style="margin: 0px 100px 0px 100px;">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="writer" label="작성자" />
                <q-input filled v-model="password" type="password" label="비밀번호" />
                <q-input filled v-model="title" label="제목" />
                <q-editor v-model="content" min-height="10rem" />
                <div>
                    <q-btn class="form-btn" label="취소" color="primary" @click="goBack"/>
                    <q-btn class="form-btn" label="등록" type="submit" color="positive" />
                    <q-btn class="form-btn" label="Reset" type="reset" color="warning" />
                </div>
            </q-form>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const $router = useRouter()
        function goBack() {
            $router.go(-1)
        }

        const writer = ref(null)
        const password = ref(null)
        const title = ref(null)
        const content = ref(null)

        return {
            goBack,
            writer,
            password,
            title,
            content,

            onReset() {
                writer.value = null
                password.value = null
                title.value = null
                content.value = null
            }
        }
    },
}
</script>

<style scoped>
.form-btn {
    margin-right: 10px;
}
</style>