<template>
    <Header />
    <div style="background-color: lightgray; height: 100%; height: 91.7vh;">
      <div class="row q-pa-md" style="width: 80%; text-align: center; margin: auto;">
        <div class="col q-pr-md" style="padding: 0; -webkit-box-shadow: 0 10px 6px -6px #777; -moz-box-shadow: 0 10px 6px -6px #777; box-shadow: 0 10px 6px -6px #777;">
          <q-select filled v-model="selectedFilter" :options="filterOptions" option-value="value" style="width: 30%; border-radius: 0px; float: left; background-color: white;" option-label="label" label="필터를 선택해주세요" />
          <div class="col q-pl-md" style="padding-left: 0;">
            <q-input color="teal" style="width: 70%; float: left; background-color: white;" filled v-model="keyword" label="검색어를 입력하세요" v-on:keyup.enter="searchSubject"></q-input>
          </div>
        </div>
      </div>
      <div class="q-pa-md">
        <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" @onRowClick="onRowClick" />
        <br />        
        <div class="row flex flex-center">
          <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" />
        </div>
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
        onPageChanged() {
            this.getSubjects();
        },

        getSubjects() {
            apiSubject.getSubjects(this.params)
                .then(response => {
                    this.$refs.grid.setData(response.data);
                })
                .catch(this.showError);
        },

        searchSubject() {
            if (this.selectedFilter == null) return
            
            this.params = { page: 0, size: this.pageSize }
            this.params[this.selectedFilter.value] = this.keyword
            this.getSubjects();
        },
        
        onRowClick(row) {
            this.$router.push({ path: "/help/subject/detail", query: { id: row.id } });
        },

        onWriteButtonClick() {
            this.$router.push({ path: "/help/subject/write" });
        },
    },
};

const columns = [
    // { name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    
    { name: 'title', align: 'center', label: '제목', field: 'title', style: 'width: 250px' },
    { name: 'subTitle', align: 'center', label: '부제목', field: 'subTitle', style: 'width: 200px' },
    { name: 'description', align: 'center', label: '설명', field: 'description', style: 'width: 300px' },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px' },
    // { name: 'createat', align: 'left', label: '생성일', field: 'createat', style: 'width: 300px' },
];
</script>
