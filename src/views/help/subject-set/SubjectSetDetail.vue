<template>
    <Header />
    <br>

    <div class="q-pa-md">
        <div>
            <h4>
                <span v-if="selected">{{ subjectSet.title }} (선택됨)</span>
            </h4>
        </div>
        <br>

        <div class="q-ma-md">과목 목록</div>
        <q-table :rows="subjectSet.subjects" :columns="columns" row-key="id" hide-bottom/><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="subjectSet.title" label="제목" stack-label readonly /><br>
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="subjectSet.writer" label="작성자" stack-label readonly /><br>
            </div>
        </div>

        <div class="row flex flex-center">
            <q-btn @click="selectSubjetSet" color="primary" label="적용" />
            <q-btn @click="clearSelection" color="primary" label="적용 취소" class="q-ml-md" />

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
                <q-btn color="primary" label="OK" @click="deleteSubjectSet" />
                <q-btn color="primary" label="Cancel" @click="onCancelPasswordDialog" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import VueBase from '@/mixin/vue-base';
import Header from '@/components/HeaderHelp.vue';
import apiSubjectSet from '@/api/subjectSet';

export default {
    mixins: [VueBase],

    components: {
        Header,
    },

    data() {
        return {
            subjectSet: "",
            password: "",
            columns: columns,
            selected: "",
        }
    },

    mounted() {
        this.getSubjectSet();
    },

    methods: {
        getSubjectSet() {
            apiSubjectSet.getSubjectSet(this.$route.query.id)
                .then(response => {
                    this.subjectSet = response.data;
                })
                .catch(this.showError);
        },

        selectSubjetSet() {
            this.selected = true;
            localStorage.setItem('selectedSubjectSetId', this.$route.query.id);
            this.showSuccess();
        },

        clearSelection() {
            this.selected = false;
            localStorage.setItem('selectedSubjectSetId', null);
            this.showSuccess();
        },

        deleteSubjectSet() {
            this.$refs.passwordDialog.hide();
            this.password = ""
            this.showSuccess();
        },

        onclickUpdateBtn() {
            this.$router.push({ path: `/help/subject-set/edit`, query: { id: this.$route.query.id }});
        },

        onclickDeleteBtn() {
            this.$refs.passwordDialog.show();
        },

        onCancelPasswordDialog() {
            this.$refs.passwordDialog.hide();
            this.password = ""
        }
    },
}

const columns = [
{ name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px' },
    { name: 'title', align: 'left', label: '제목', field: 'title', style: 'width: 250px' },
    { name: 'subTitle', align: 'left', label: '부제목', field: 'subTitle', style: 'width: 200px' },
    { name: 'description', align: 'left', label: '설명', field: 'description', style: 'width: 300px' },
];
</script>