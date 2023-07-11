<template>
    <Header />
    <div style="background-color: #eeeeee; height: 100%; height: 91.7vh;">
        <div class="row q-pa-md" style="
            width: 88.5vw;
            text-align: center;
            margin: auto;
            padding: 0;
            padding-top: 20px;
            border-radius: 5%;
        
            -webkit-box-shadow: 0 10px 6px -6px #777;
            -moz-box-shadow: 0 10px 6px -6px #777;
            box-shadow: 0 10px 6px -6px #777;">

            <div class="q-pr-md custom-div1" style="width: 30%; padding: 0px; border-top-left-radius: 5% !important;
                    border-bottom-left-radius: 5% !important;
                    border-top-right-radius: 5% !important;
                    border-bottom-right-radius: 5% !important;">
                <q-select filled v-model="selectedFilter" :options="filterOptions" option-value="value" style="border-top-left-radius: 5% !important;
                    border-bottom-left-radius: 5% !important;
                    border-top-right-radius: 5% !important;
                    border-bottom-right-radius: 5% !important;
                    
                " option-label="label" label="필터를 선택해주세요" />
            </div>
            <div class="q-pl-md custom-div2" style="padding-left: 0; width: 70%; background: rgba(255, 255, 255, 1); ">
                <q-input color="teal" style="
                    border-top-left-radius: 5% !important;
                    border-bottom-left-radius: 5% !important;
                    border-top-right-radius: 5% !important;
                    border-bottom-right-radius: 5% !important;
                    border-left: 1px solid rgba(105, 105, 105, 0.5);"
                    
                filled v-model="keyword" label="검색어를 입력하세요" v-on:keyup.enter="searchSubject">
                </q-input>
            </div>

        </div>
        <div class="q-pa-md">
            <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" @onRowClick="onRowClick" /><br />        
            <div class="row flex flex-center" >
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
    
    { name: 'title', align: 'center', label: '제목', field: 'title', style: 'width: 250px;' },
    { name: 'subTitle', align: 'center', label: '부제목', field: 'subTitle', style: 'width: 200px;' },
    { name: 'description', align: 'center', label: '설명', field: 'description', style: 'width: 300px;' },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px;' },
    // { name: 'createat', align: 'left', label: '생성일', field: 'createat', style: 'width: 300px' },
];
</script>
<style>
.custom-div1 .q-field__control{
    background-color: #ffffff !important;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
    
}
.custom-div2 .q-field__control{
    background-color: #ffffff !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    /* border-left: 1px solid rgba(0,0,0,0.5) !important; */
}

</style>