<template>
    <Header />
    <br />

    <div class="q-ma-md">
        <div class="q-ma-md">차시 목록</div>
        <q-table :rows="subject.lessons" :columns="columns" row-key="id" hide-bottom /><br>

        <q-input filled v-model="subject.title" label="제목" stack-label readonly /><br>
        <q-input filled v-model="subject.subTitle" label="부제목 (영문제목)" stack-label readonly /><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="subject.writer" label="작성자" stack-label readonly />
            </div>
            <div class="col q-pl-md">
            </div>
        </div>
        <br>

        <q-input v-model="subject.description" label="과목 설명" filled type="textarea" readonly /><br>

        <div class="row flex flex-center">
            <q-btn @click="onclickUpdateBtn" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="onclickDeleteBtn" color="deep-orange" label="삭제" class="q-ml-md" />
        </div>
    </div>

    <q-dialog ref="passwordDialog" @hide="onCancelPasswordDialog">
        <q-card class="q-dialog-plugin">
            <q-bar class="bg-primary text-white">
                <q-icon name="report_gmailerrorred" />
                <div>비밀번호를 입력해주세요</div>
                <q-space />
                <q-btn @click="onCancelPasswordDialog" dense flat icon="close" />
            </q-bar>

            <q-input class="input-box q-ma-sm" filled v-model="password" label="password" color="teal">
                <template v-slot:prepend>
                    <q-icon name="lock" />
                </template>
            </q-input>

            <q-card-actions align="right">
                <q-btn color="primary" label="OK" @click="deleteSubject" />
                <q-btn color="primary" label="Cancel" @click="onCancelPasswordDialog" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import Header from "@/components/HeaderHelp.vue";
import apiSubject from '@/api/subject';
export default {
    mixins: [VueBase],

    components: {
        Header,
    },

    data() {
        return {
            subject: "",
            password: "",
            columns: columns,
        };
    },

    mounted() {
        this.getSubject();
    },

    methods: {
        getSubject() {
            apiSubject.subjectDetail(this.$route.query.id)
                .then(response => {
                    this.subject = response.data;
                })
                .catch(this.showError);
        },

        deleteSubject() {
            const params = {
                password: this.password
            }
            apiSubject.deleteSubject(this.$route.query.id, params)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/help/subject/list");
                })
                .catch(this.showError);
        },

        onclickUpdateBtn() {
            this.$router.push({ path: `/help/subject/edit`, query: { id: this.$route.query.id }});
        },

        onclickDeleteBtn() {
            this.$refs.passwordDialog.show();
        },

        onCancelPasswordDialog() {
            this.$refs.passwordDialog.hide();
            this.password = ""
        }
    },
};

const columns = [
    { name: 'id', align: 'center', label: 'id', field: 'id' },
    { name: 'title', align: 'left', label: '제목', field: 'title' },
];
</script>