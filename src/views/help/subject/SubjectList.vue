<template>
    <Header />

    <div class="row q-pa-md">
        <div class="col q-pr-md">
            <q-select filled v-model="selectedFilter" :options="filterOptions" 
            option-value="value"
                option-label="label" label="필터" />
        </div>
        <div class="col q-pl-md">
            <q-input color="teal" filled v-model="keyword" label="검색어" v-on:keyup.enter="searchSubject">
                <template v-slot:prepend>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
    </div>

    <div class="q-pa-md">
        <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" @onRowClick="onRowClick" />
        <br />
        <div class="row flex flex-center">
            <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" />
        </div>
    </div>
</template>

<script>
import Header from "@/components/HeaderHelp.vue";
import apiSubject from '@/api/subject';
import Grid from '@/components/GridPage.vue';

export default {
    components: { Header, Grid },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        },
    },

    data() {
        return {
            columns: columns,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            params: { page: 0, size: this.pageSize },

            selectedFilter: null,
            filterOptions: [ 
                { label: '제목', value: 'title'},
                { label: '작성자', value: 'writer'}
            ],
            keyword: null,
        }
    },

    mounted() {
        this.onPageChanged();
    },

    methods: {
        searchSubject() {
            if (this.selectedFilter == null) return
            
            this.params = { page: 0, size: this.pageSize }
            this.params[this.selectedFilter.value] = this.keyword
            this.getSubjects();
        },

        onPageChanged() {
            this.getSubjects();
        },

        onRowClick(row) {
            this.$router.push({ path: "/help/subject/detail", query: { id: row.id } });
        },

        onWriteButtonClick() {
            this.$router.push({ path: "/help/subject/write" });
        },

        getSubjects() {
            apiSubject.getSubjects(this.params)
                .then(response => {
                    this.$refs.grid.setData(response.data);
                })
                .catch(this.showError);
        },
    },
};

const columns = [
    { name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px' },
    { name: 'title', align: 'left', label: '제목', field: 'title', style: 'width: 250px' },
    { name: 'subTitle', align: 'left', label: '부제목', field: 'subTitle', style: 'width: 200px' },
    { name: 'description', align: 'left', label: '설명', field: 'description', style: 'width: 300px' },
];
</script>
