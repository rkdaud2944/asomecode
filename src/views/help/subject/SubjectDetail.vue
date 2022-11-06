<template>
    <Header />
    <br />

    <div class="q-ma-md">
        <q-table :rows="rows" :columns="columns" row-key="id" hide-bottom/>
        <br>

        <q-input filled v-model="title" label="제목" stack-label :dense="dense" readonly />
        <br>

        <div class="row">
            <div class="col q-pr-md">
                <q-input filled v-model="author" label="작성자" stack-label :dense="dense" readonly />
            </div>
            <div class="col q-pl-md">
            </div>
        </div>
        <br>

        <q-input v-model="text" filled type="textarea" readonly />
        <br>

        <div class="row flex flex-center">
            <q-btn @click="goTo(`/help/subject/edit/${id}`)" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="deleteSubject" color="deep-orange" label="삭제" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import VueBase from "@/vue-base";
import lessons from "@/data/lessons";
import Header from "@/components/HeaderHelp.vue";

export default {
    mixins: [VueBase],

    components: {
        Header,
    },

    data() {
        return {
            columns: columns,
            rows: lessons,
            id: this.$route.query.id,

            // TODO: API 가져오기, query 대신 id만 넘기기
            title: this.$route.query.title,
            author: this.$route.query.author,
            text: this.$route.query.text,
        };
    },

    methods: {
        deleteSubject() {
            // TODO: API 호출
            this.goTo('/help/subject/list');
        },
    },
};

// TODO: 모듈 하나 만들고 용도마다 속성으로 처리
const columns = [
    { name: 'id', align: 'center', label: 'id', field: 'id' },
    { name: 'title', align: 'left', label: '제목', field: 'title' },
    { name: 'author', align: 'center', label: '작성자', field: 'author' },
    { name: 'created_at', align: 'center', label: '작성일', field: 'created_at' },
    { name: 'views', align: 'center', label: '조회수', field: 'views' },
];
</script>