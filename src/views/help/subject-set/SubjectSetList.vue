<template>
    <Header />

    <div class="q-pa-md">
        <q-table @row-click="onRowClick" :rows="subjectSet" :columns="columns" row-key="id" hide-bottom/>
        <br>

        <br>
        <div class="row flex flex-center">
            <q-btn @click="clearSelection" color="primary" label="초기화" />
            <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" class="q-ml-md" />
        </div>
    </div>

    <br>
    <div class="q-pa-lg flex flex-center">
        <q-pagination @update:model-value="onPageChanged" v-model="currentPage" :max="pageCount" :max-pages="10"
            boundary-numbers color="purple" />
    </div>
</template>

<script>
import VueBase from '@/VueBase';
import subjectSets from '@/data/subject-sets';
import Header from '@/components/HeaderHelp.vue';

export default {
    mixins : [VueBase],

    components: {
        Header,
    },

    data() {
        return {
            columns: columns,
            rowCount: 1000,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            currentPage: 1,
            subjectSet: subjectSets.rows,
        }
    },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        }
    },

    methods: {
        onRowClick(e, row) {
            this.$router.push({ path: '/help/subject-set/detail', query: row });
        },

        onPageChanged(page) {
            console.log(page);
        },

        clearSelection() {
            localStorage.setItem('selectedSubjectSetId', null);
            this.refresh();
        },

        onWriteButtonClick() {
            this.$router.push({ path: '/help/subject-set/write' });
        },
    }
}

const columns = [
    { name: 'id', align: 'center', label: 'id', field: 'id' },
    { name: 'title', align: 'left', label: '제목', field: 'title' },
    { name: 'author', align: 'center', label: '작성자', field: 'author' },
    { name: 'created_at', align: 'center', label: '작성일', field: 'created_at' },
    { name: 'views', align: 'center', label: '조회수', field: 'views' },
];
</script>