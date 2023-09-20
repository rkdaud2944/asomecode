<template>
    <Header />
    <br>
    <div class="q-pa-md">
        <div>
            <div>
            <p class="help-detail-font-style">Help 
                <img class="help-detail-title-img-style" :src="arrow">
                <span class="color--999899">Custom Curriculum Set</span>
            </p>
            <input class="help-detail-title-font-style" filled readonly v-model="subjectSet.title"/><br>
        </div>
            <input class="help-detail-writer-font-style" filled readonly v-model="subjectSet.writer"/>
        </div>

        <div class="hr">
        </div>

        <div class="q-ma-md margin-left--5">과목 목록</div>
        <q-table class="help-detail-table-style" :rows="subjectSet.subjects" :columns="columns" row-key="id" hide-bottom/><br>

        <div class="margin-right--5 text-align--right">
            <q-btn @click="selectSubjetSet" color="primary" label="어썸코드 적용" />
            <!-- <q-btn @click="clearSelection" color="primary" label="적용 취소" class="q-ml-md" /> -->

            <q-btn @click="onclickUpdateBtn" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="onclickDeleteBtn" color="red" label="삭제" class="q-ml-md" />
            <q-btn class="q-ml-md" @click="goBack()" color="green" label="뒤로가기"  />
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
import images from "@/assets/images";

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

            arrow: images.arrow
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
            const params = {
                password: this.password
            }
            apiSubjectSet.deleteSubjectSet(this.$route.query.id, params)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/help/subject-set/list");
                })
                .catch(this.showError);
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
    // { name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    { name: 'title', align: 'left', label: '제목', field: 'title', style: 'width: 250px' },
    { name: 'subTitle', align: 'left', label: '부제목', field: 'subTitle', style: 'width: 200px' },
    { name: 'description', align: 'left', label: '설명', field: 'description', style: 'width: 300px',
        format: (value) => {
            if (value.length > 15) {
                return value.substring(0, 15) + '...';
            }
            return value;
        },
    },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px' },
];

</script>
<style scoped src="@/assets/css/component/common.css"/>
<style src="@/assets/css/component/SubjectDetail.css"/>
