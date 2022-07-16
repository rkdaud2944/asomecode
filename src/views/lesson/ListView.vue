<template>
    <el-row class="header">
        <el-col :span="10">
            <img src="/images/common/logo_con.jpg" />
        </el-col>
        <el-col :span="13">
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>

    <el-row>
        <el-col class="left" :span="8">
            {{ subject.title }}
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="15">
            <el-row class="list-header">
                {{ subject.description }}
            </el-row>

            <el-row @click="goTo(`/lesson/detail/${lesson.id}`)" class="list" v-for="(lesson, index) in subject.lessons"
                :key="index">
                <el-col :span="2" class="list-left">{{ index + 1 }}차시</el-col>
                <el-col :span="21" class="list-main">{{ lesson.title }}</el-col>
            </el-row>
        </el-col>
    </el-row>
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

    setup() {

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
.el-col {
    border-radius: 8px;
}

.header {
    width: 100%;
    background: rgb(3, 84, 87);
    margin-top: 10px;
    padding: 4px;
}

.left {
    width: 100%;
    height: 90vh;
    background: rgb(186, 193, 0);
    margin-top: 10px;
    padding: 4px;
}

.list-header {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 80px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
}

.list {
    cursor: pointer;
}

.list-left {
    width: 100%;
    height: 32px;
    background: #D3DCE6;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-main {
    height: 32px;
    background: #D3DCE6;
    padding-left: 20px;
    margin: 10px;
    display: flex;
    align-items: center;
}
</style>