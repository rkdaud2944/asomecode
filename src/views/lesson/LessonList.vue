<template>
    <div class="header">
        <img src="/images/common/logo_con.jpg" />
    </div>

    <div class="row q-pa-md">
        <div class="col-4">
            <h4>{{ subject.title }}</h4>
        </div>
        <div class="col-8">
            <div class="row list-header">
                {{ subject.description }}
            </div>

            <div @click="goTo(`/lesson/detail/${lesson.id}`)" class="row" v-for="(lesson, index) in subject.lessons"
                :key="index">
                <div class="col-2 list-left rounded q-ma-sm q-pa-md flex flex-center">{{ index + 1 }}차시</div>
                <div class="col-9 list-main rounded q-ma-sm q-pa-md">{{ lesson.title }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import VueBase from '@/VueBase';
import apiSubject from "@/api/subject";

export default {
    mixins: [VueBase],

    data() {
        return {
            subject: null,
        }
    },

    mounted() {
        this.getSubject(this.$route.query.id)
    },

    methods: {
        getSubject(id) {
            apiSubject.subjectDetail(id)
                .then((response) => {
                    console.log(response.data);
                    this.subject = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    background: rgb(3, 84, 87);
    margin-top: 10px;
    padding: 4px;
}
.list-header {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
}
.list-left {
    background: #D3DCE6;
}
.list-main {
    background: #D3DCE6;
}
.rounded {
    border-radius: 10px;
}
</style>
