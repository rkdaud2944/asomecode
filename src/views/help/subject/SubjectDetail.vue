<template>
    <Header />
    <div>
        <div>
            <p class="help-detail-font-style">Help 
                <img class="help-detail-title-img-style" :src="arrow">
                <span class="color--999899">Custom Curriculum</span>
            </p>
            <input class="help-detail-title-font-style" filled readonly v-model="subject.title"/><br>
        </div>
        <input class="help-detail-sub-title-font-style" filled readonly v-model="subject.subTitle"/>
        <input class="help-detail-writer-font-style" filled readonly v-model="subject.writer"/>
    </div>

    <div class="hr">
    </div>

    <div class="q-ma-md margin-left--5">차시 목록</div>
     
        <q-table class="help-detail-table-style" :rows="subject.lessons" :columns="columns" row-key="id" hide-bottom /><br>
        <br>

        <q-input class="margin-left--5 margin-right--5 width--auto" v-model="subject.description" label="과목 설명" filled readonly /><br>

        <div class="margin-right--5 text-align--right">
            <q-btn @click="onclickUpdateBtn" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="onclickDeleteBtn" color="red" label="삭제" class="q-ml-md" />
            <q-btn class="q-mx-md margin-right--0" @click="goBack()" color="green" label="뒤로가기" />
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
import apiSubject from "@/api/subject";
import images from "@/assets/images";

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

            arrow: images.arrow
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

<style scoped src="@/assets/css/component/common.css"/>
<style src="@/assets/css/component/SubjectDetail.css"/>
