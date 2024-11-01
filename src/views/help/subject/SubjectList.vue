<template>
    <Header />
    <div> 
        <p class="help-main-title-font-style margin-left--5 text-align--left">
            Custom Curriculum
        </p>
        <p class="help-sub-title-font-style margin-left--5 text-align--left">
            과목을 직접 커스텀하여<br>나만의 과목을 만들어봐요
        </p>
    </div>
    <div class="height--95vh">
        <div class="row q-pa-md help-search-bar">
            <div class="custom-div1">
                <q-select dense square filled v-model="selectedFilter" :options="filterOptions" option-value="value" option-label="label" label="필터" />
            </div>
            <div class="custom-div2">
                <q-input dense square filled color="teal" v-model="keyword" label="검색어를 입력하세요" v-on:keyup.enter="searchSubject">
                </q-input>
            </div>
        </div>

        <div class="hr">
        </div>

        <div class="padding-top--16">
            <Grid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" @onRowClick="onRowClick" /><br />        
            <div class="row flex flex-center text-align--right margin-right--5 display-block">
                <q-btn @click="onWriteButtonClick" color="primary" label="만들기" />
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
    { name: 'description', align: 'center', label: '설명', field: 'description', style: 'width: 300px;',
        format: (value) => {
            if (value.length > 15) {
                return value.substring(0, 15) + '...';
            }
            return value;
        },
    },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px;' },
    // { name: 'createat', align: 'left', label: '생성일', field: 'createat', style: 'width: 300px' },
];
</script>
<style scoped src="@/assets/css/component/common.css"/>
<style src="@/assets/css/component/SubjectList.css"/>
