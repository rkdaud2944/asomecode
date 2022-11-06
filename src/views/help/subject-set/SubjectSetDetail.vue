<template>
    <Header />
    <br>

    <div class="q-pa-md">
        <div>
            <h4>
                {{ $route.query.title }} <span v-if="selected">(선택됨)</span>
            </h4>
        </div>
        <br>

        <q-table :rows="rows" :columns="columns" row-key="id" hide-bottom/>
        <br>

        <div class="row flex flex-center">
            <q-btn @click="selectSubjetSet" color="primary" label="적용" />
            <q-btn @click="clearSelection" color="primary" label="취소" class="q-ml-md" />
            <q-btn @click="goTo(`/help/subject-set/edit/${id}`)" color="secondary" label="수정" class="q-ml-md" />
            <q-btn @click="deleteSubjectSet" color="deep-orange" label="삭제" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import VueBase from '@/globals/vue-base';
import subjectSets from '@/data/subject-sets';
import Header from '@/components/HeaderHelp.vue';

export default {
    mixins: [VueBase],

    components: {
        Header,
    },

    data() {
        return {
            id: this.$route.query.id,
            columns: columns,
            rows: subjectSets.getSubjects(this.$route.query.id ),
            selected: this.$route.query.id == localStorage.getItem('selectedSubjectSetId'),
        }
    },

    methods: {
        selectSubjetSet() {
            this.selected = true;
            localStorage.setItem('selectedSubjectSetId', this.$route.query.id);
            this.refresh();
        },

        clearSelection() {
            this.selected = false;
            localStorage.setItem('selectedSubjectSetId', null);
            this.refresh();
        },

        deleteSubjectSet() {
            // TODO: 삭제 하기
            this.goTo('/help/subject-set/list');
        },
    },
}

const columns = [
    { name: 'id', align: 'center', label: 'id', field: 'id' },
    { name: 'title', align: 'left', label: '제목', field: 'title' },
    { name: 'author', align: 'center', label: '작성자', field: 'author' },
    { name: 'created_at', align: 'center', label: '작성일', field: 'created_at' },
    { name: 'views', align: 'center', label: '조회수', field: 'views' },
];
</script>