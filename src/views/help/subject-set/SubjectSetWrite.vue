<template>
    <Header />
    <br />

    <div class="q-pa-md">
        <div class="row">
            <div class="col-6">
                <div class="q-px-md">
                    <a style="font-size: 25px;">기본 과목</a>
                </div><br>
                <q-virtual-scroll style="max-height: 300px;"
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
                    <a style="font-size: 25px;">커스텀 과목</a>
                </div><br>

                <q-virtual-scroll style="max-height: 180px;"
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
            <q-breadcrumbs-el v-for="subject in checkedSubjects" :key="subject.id">
                {{ subject.title }}
            </q-breadcrumbs-el>
        </q-breadcrumbs><br>

        <q-input filled v-model="title" label="제목" stack-label /><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="writer" label="작성자" stack-label />
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="password" label="비밀번호" type="password" stack-label />
            </div>
        </div>
        <br>
        <div style="text-align: right;">
            <q-btn class="q-mx-md" @click="createSubject" color="primary" label="생성" />
            <!-- <q-btn class="q-mx-md" @click="clearForm" color="warning" label="초기화" /> -->
            <q-btn @click="goBack()" color="green" label="뒤로가기"  />
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
            defaultSubjects: null,
            subjects: [],

            title: "",
            writer: "",
            password: "",
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
            const idx = this.checkedSubjects.indexOf(subject)
            if (idx > -1) this.checkedSubjects.splice(idx, 1)
            else this.checkedSubjects.push(subject)
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

        createSubject() {
            let body = {
                title: this.title,
                writer: this.writer,
                password: this.password,
                subjectIds: this.checkedSubjects.map(e => e.id),
            }
            
            apiSubjectSet.createSubjectSet(body)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/help/subject-set/list");
                })
                .catch(this.showError);
        },
    },
};
</script>