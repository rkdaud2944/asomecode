<template>
    <Header />
    <br />

    <div class="q-pa-md">
        <div class="row">
            <div class="col-3" v-for="subject in defaultSubjects" :key="subject.id">
                <div class="q-px-md">{{ subject.title }}</div><br>

                <q-virtual-scroll style="max-height: 300px;"
                    :items="lessons.filter(e => e.defaultSubjectId == subject.id)" separator v-slot="{ item, index }">
                    <q-item :key="index" dense>
                        <q-item-section>
                            <q-item-label>
                                <q-checkbox left-label v-model="checkboxValues[item.id]" :label="item.title"
                                    checked-icon="task_alt" @update:model-value="checkLesson(item)"
                                    unchecked-icon="highlight_off" />
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
            <q-breadcrumbs-el v-for="(lesson, index) in checkedLessons" :key="lesson.id">
                {{ index+ 1 }}차시 {{ lesson.title }}
            </q-breadcrumbs-el>
        </q-breadcrumbs><br>

        <q-input filled v-model="title" label="제목" stack-label /><br>
        <q-input filled v-model="subTitle" label="부제목 (영문제목)" stack-label /><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="writer" label="작성자" stack-label />
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="password" label="비밀먼호" type="password" stack-label />
            </div>
        </div>
        <br>

        <q-input v-model="description" label="과목 설명" filled type="textarea" />
        <br>

        <q-btn @click="createSubject" color="primary" label="생성" />
        <q-btn class="q-mx-md" @click="clearForm" color="warning" label="초기화" />
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import apiSubject from "@/api/subject";
import apiSubjectSet from "@/api/subjectSet";
import apiLesson from "@/api/lesson";
import Header from "@/components/HeaderHelp.vue";

export default {
    mixins: [VueBase],

    components: {
        Header
    },

    data() {
        return {
            defaultSubjects: null,
            lessons: [],

            title: "",
            subTitle: "",
            writer: "",
            password: "",
            description: "",
            checkedLessons: [],

            checkboxValues: [],
        };
    },

    mounted() {
        this.getDefaultSubjectSet();
        this.getLessons();
    },

    methods: {
        checkLesson(lesson) {
            const idx = this.checkedLessons.indexOf(lesson)
            if (idx > -1) this.checkedLessons.splice(idx, 1)
            else this.checkedLessons.push(lesson)
        },

        getDefaultSubjectSet() {
            apiSubjectSet.getSubjectSet()
                .then((response) => {
                    this.defaultSubjects = response.data
                })
                .catch(this.showError);
        },

        getLessons() {
            apiLesson.getLessons({ size: 10000 })
                .then(response => {
                    this.lessons = response.data.rows
                    this.lessons.forEach(e => {
                        this.checkboxValues[e.id] = false
                    });
                })
                .catch(this.showError);
        },

        clearForm() {
            this.title = ""
            this.subTitle = ""
            this.writer = ""
            this.password = ""
            this.description = ""
            this.checkedLessons = []

            this.lessons.forEach(e => {
                this.checkboxValues[e.id] = false
            });
        },

        createSubject() {
            let body = {
                title: this.title,
                subTitle: this.subTitle,
                writer: this.writer,
                password: this.password,
                description: this.description,
                customization: 1,
                lessons: this.checkedLessons.map(e => e.id),
            }
            
            apiSubject.createSubject(body)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/help/subject/list");
                })
                .catch(this.showError);
        },
    },
};
</script>