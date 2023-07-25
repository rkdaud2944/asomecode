<template>
    <Header />
    <div>
        <div>
            <p style="text-align: left;
                padding-top: 35px;
                padding-left: 2px;
                margin-left: 5%;
                display: block;
                color: #000000;
                width: auto;
                margin-bottom: 0;
                ">Help 
                <img src="../../../../public/images/common/arrow.png" style="width:10px;
                    position: relative;
                    top: 3.8px;
                    margin-right:4px;">
                <span style="color: #999899;">Custom Curriculum</span>
            </p>
            <input style="
                margin-left: 5%;
                margin-top: 3px;
                font-family: none;
                font-weight: 600;
                outline: none;
                border: none;
                width: auto;
                font-size: 35px;
                " filled readonly v-model="subject.title"/><br>
        </div>
        <input style="
            text-align: left;
            margin-left: 5%;
            display: block;
            font-family: sans-serif;
            font-size: 14px;
            color: black;
            outline: none;
            border: none;
            float: left;" filled readonly v-model="subject.subTitle"/>
        <input style="
            text-align: right;
            margin-left: auto;
            margin-right: 5%;
            display: block;
            font-family: sans-serif;
            font-size: 14px;
            color: black;
            outline: none;
            border: none;" filled readonly v-model="subject.writer"/>
    </div>

    
    <div style=" width: 90%; background-color:#027BE3; height: 1px; margin: auto; margin-top: 17px;">
        </div>

    <div class="q-ma-md" style="margin-left: 5%; ">차시 목록</div>
     
        <q-table style="background-color:#027BE3; margin-left: 5%; margin-right: 5%; width: auto; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);" :rows="subject.lessons" :columns="columns" row-key="id" hide-bottom /><br>
        <br>

        <q-input style=" margin-left: 5%; margin-right: 5%; width: auto;" v-model="subject.description" label="과목 설명" filled readonly /><br>

        <div style="text-align: right; margin-right: 5%;">
            <q-btn @click="onclickUpdateBtn" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="onclickDeleteBtn" color="red" label="삭제" class="q-ml-md" />
            <q-btn style="margin-right: 0" class="q-mx-md" @click="goBack()" color="green" label="뒤로가기" />
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

<style>
tbody {
    background-color: #fcfcfc;
}
</style>