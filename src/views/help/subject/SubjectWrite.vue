<template>
    <Header />
    <br />

    <div class="q-pa-md">
        <div class="row">
            <div class="col-3" v-for="subject in defaultSubjects" :key="subject.id">
                {{ subject.title }}
                <br>

                <div class="column">
                    <div class="col" v-for="lesson in lessons.filter(e => e.defaultSubjectId == subject.id)" :key="lesson.id">
                        <q-checkbox left-label v-model="checkedLessons[lesson.id]" :label="lesson.title"
                            checked-icon="task_alt" 
                            unchecked-icon="highlight_off" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="q-ma-md">
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

        <q-input v-model="description" filled type="textarea" />
        <br>

        <q-btn @click="goTo('/help/subject/list')" color="primary" label="완료" />
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import apiSubject from "@/api/subject";
import apiLesson from "@/api/lesson";
import Header from "@/components/HeaderHelp.vue";

export default {
    mixins: [VueBase],

    components: {
        Header,
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
        };
    },

    mounted() {
        this.getDefaultSubjectSet();
        this.getLessons();
    },

    methods: {
        getDefaultSubjectSet() {
            apiSubject.getSubjectSet()
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
                        this.checkedLessons[e.id] = false
                    });
                })
                .catch(e => { console.log(e) });
        },
    },
};
</script>