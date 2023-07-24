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
            <q-breadcrumbs-el v-for="(lesson, index) in checkedLessons" :key="lesson">
                {{ index+ 1 }}차시 {{ lesson.title }}
            </q-breadcrumbs-el>
        </q-breadcrumbs><br>

        <q-input filled v-model="subject.title" label="제목" stack-label /><br>
        <q-input filled v-model="subject.subTitle" label="부제목 (영문제목)" stack-label /><br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="subject.writer" label="작성자" stack-label />
            </div>
            <div class="col q-pl-md">
                <q-input filled v-model="password" label="비밀번호" type="password" stack-label />
            </div>
        </div>
        <br>

        <q-input v-model="subject.description" label="과목 설명" filled type="textarea" />
        <br>

        <q-btn @click="updateSubject" color="secondary" label="수정" />
        <q-btn class="q-mx-md" @click="goBack()" color="red" label="취소" />
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
            subject: "",
            password: "",

            defaultSubjects: null,
            lessons: [],
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
            const idx = this.checkedLessons.findIndex((e) => e.id == lesson.id);
            if (idx > -1) this.checkedLessons.splice(idx, 1)
            else this.checkedLessons.push(lesson)
        },

        getSubject() {
            apiSubject.subjectDetail(this.$route.query.id)
                .then(response => {
                    this.subject = response.data;
                    this.subject.lessons.forEach(e => {
                        this.checkboxValues[e.id] = true
                        this.checkedLessons.push(e)
                    });
                })
                .catch(this.showError);
        },

        getDefaultSubjectSet() {
            apiSubjectSet.getSubjectSet()
                .then((response) => {
                    this.defaultSubjects = response.data.subjects
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

                    this.getSubject()
                })
                .catch(this.showError);
        },

        updateSubject() {
            let body = {
                title: this.subject.title,
                subTitle: this.subject.subTitle,
                writer: this.subject.writer,
                password: this.password,
                description: this.subject.description,
                lessons: this.checkedLessons.map(e => e.id),
            }

            apiSubject.updateSubject(this.subject.id, body)
                .then(() => {
                    this.showSuccess();
                    this.$router.push({ path: "/help/subject/detail", query: { id: this.subject.id } });
                })
                .catch(this.showError);
        },
    },
};
</script>