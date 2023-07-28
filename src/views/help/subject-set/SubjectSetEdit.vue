<template>
    <Header />
    <br />

    <div class="q-pa-md">
        <div class="row">
            <div class="col-6">
                <div class="q-px-md">
                    <a class="font-size--25px">기본 과목</a>
                </div><br>

                <q-virtual-scroll class="max-height--300px"
                    :items="defaultSubjects" separator v-slot="{ item, index }">
                    <q-item :key="index" dense>
                        <q-item-section>
                            <q-item-label>
                                <q-checkbox left-label v-model="checkboxValues[item.id]"
                                    checked-icon="task_alt" @update:model-value="checkSubject(item)"
                                    unchecked-icon="highlight_off">
                                    {{ item.title }} - {{ item.subTitle }}
                                </q-checkbox>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-virtual-scroll>
            </div>

            <div class="col-6">
                <div class="q-px-md">
                    <a class="font-size--25px">커스텀 과목</a>
                </div><br>

                <q-virtual-scroll class="max-height--180px"
                    :items="subjects" separator v-slot="{ item, index }">
                    <q-item :key="index" dense>
                        <q-item-section>
                            <q-item-label>
                                <q-checkbox left-label v-model="checkboxValues[item.id]"
                                    checked-icon="task_alt" @update:model-value="checkSubject(item)"
                                    unchecked-icon="highlight_off">
                                    {{ item.title }} - {{ item.subTitle }}
                                </q-checkbox>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-virtual-scroll>
            </div>
        </div>
    </div>

    <div class="q-ma-md">
        <q-breadcrumbs class="text-primary">
            <template v-slot:separator>
                <q-icon size="1.5em" name="chevron_right" color="primary" />
            </template>
            <q-breadcrumbs-el v-for="subject in checkedSubjects" :key="subject">
                {{ subject.title }}
            </q-breadcrumbs-el>
        </q-breadcrumbs><br>

        <q-input filled v-model="subjectSet.title" label="제목" stack-label /><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="subjectSet.writer" label="작성자" stack-label />
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="password" label="비밀번호" type="password" stack-label />
            </div>
        </div>
        <br>
        <div class="text-align--right">
            <q-btn @click="updateSubjectSet" color="secondary" label="수정" />
            <q-btn class="q-mx-md margin-right--0" @click="goBack()" color="red" label="취소" />
        </div>
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import apiSubjectSet from "@/api/subjectSet";
import apiSubject from "@/api/subject";
import Header from "@/components/HeaderHelp.vue";

export default {
    mixins: [VueBase],

    components: {
        Header
    },

    data() {
        return {
            subjectSet: "",
            password: "",

            defaultSubjects: null,
            subjects: [],
            checkedSubjects: [],

            checkboxValues: [],
        };
    },

    mounted() {
        this.getDefaultSubjectSet();
        this.getSubjects();
    },

    methods: {
        checkSubject(subject) {
            const idx = this.checkedSubjects.findIndex((e) => e.id == subject.id);
            if (idx > -1) this.checkedSubjects.splice(idx, 1)
            else this.checkedSubjects.push(subject)
        },

        getSubjectSet() {
            apiSubjectSet.getSubjectSet(this.$route.query.id)
                .then(response => {
                    this.subjectSet = response.data;
                    this.subjectSet.subjects.forEach(e => {
                        this.checkboxValues[e.id] = true
                        this.checkedSubjects.push(e)
                    });
                })
                .catch(this.showError);
        },

        getDefaultSubjectSet() {
            apiSubjectSet.getSubjectSet()
                .then((response) => {
                    this.defaultSubjects = response.data.subjects
                    this.defaultSubjects.forEach(e => {
                        this.checkboxValues[e.id] = false
                    });
                })
                .catch(this.showError);
        },

        getSubjects() {
            apiSubject.getSubjects({ size: 10000 })
                .then(response => {
                    this.subjects = response.data.rows
                    this.subjects.forEach(e => {
                        this.checkboxValues[e.id] = false
                    });

                    this.getSubjectSet()
                })
                .catch(this.showError);
        },

        clearForm() {
            this.title = ""
            this.writer = ""
            this.password = ""
            this.checkedSubjects = []

            this.defaultSubjects.forEach(e => {
                this.checkboxValues[e.id] = false
            });

            this.subjects.forEach(e => {
                this.checkboxValues[e.id] = false
            });

        },

        updateSubjectSet() {
            let body = {
                title: this.subjectSet.title,
                writer: this.subjectSet.writer,
                password: this.password,
                subjectIds: this.checkedSubjects.map(e => e.id),
            }
            
            apiSubjectSet.updateSubjectSet(this.subjectSet.id, body)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/help/subject-set/list");
                })
                .catch(this.showError);
        },
    },
};
</script>
<style scoped src="@/assets/css/component/common.css"/>