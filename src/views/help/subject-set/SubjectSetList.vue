<template>
    <Header />
    <div> 
        <a style="
            text-align: left;
            padding-top: 35px;
            margin-left: 5%;
            display: block;
            font-family: pten;
            font-size: 50px;
            color: black;">
            Custom Curriculum Set
        </a>
        <a style="
            text-align: left;
            margin-left: 5%;
            display: block;
            font-family: sans-serif;
            font-size: 20px;
            color: black;">
            직접 커스텀한 과목을<br>어썸코드에 적용시켜 보아요
        </a>
    </div>
    <div class="row q-pa-md" style="
        width: 40%;
        margin-left: auto;
        margin-right: 5%;
        padding: 0;
        padding-top: 20px;
        ">
        <div class="custom-div1" style="width: 30%; padding: 0px; box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);">
            <q-select dense square filled v-model="selectedFilter" :options="filterOptions" option-value="value" option-label="label" label="필터"  />
        </div>
        <div class="custom-div2" style="
            padding-left: 0;
            width: 70%;
            border-top-left-radius: 0px !important;
            border-bottom-left-radius: 0px !important;
            border-top-right-radius: 3px !important;
            border-bottom-right-radius: 3px !important;
            background-color: white;box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);">
            <q-input dense square filled color="teal" v-model="keyword" label="검색어를 입력하세요" v-on:keyup.enter="searchSubject">
            </q-input>
        </div>
    </div>

    <div style=" width: 90%; background-color:#027BE3; height: 1px; margin: auto; margin-top: 17px;">
    </div>

    <div class="q-pa-md">
        <SubjectSetListGrid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" />
        <br>
        <div class="row flex flex-center" style="margin-right: 5%; display: block; text-align: right;">
            <q-btn @click="clearSelection" color="primary" label="초기화" />
            <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import apiSubjectSet from "@/api/subjectSet";
import Header from '@/components/HeaderHelp.vue';
import SubjectSetListGrid from '@/components/SubjectSetListGrid.vue';

export default {
    mixins: [VueBase],

    components: { Header, SubjectSetListGrid },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        }
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
            this.getSubjectSets();
        },

        getSubjectSets() {
            apiSubjectSet.getSubjectSets(this.params)
                .then(response => {
                    this.$refs.grid.setData(response.data);
                })
                .catch(this.showError);
        },

        searchSubject() {
            if (this.selectedFilter == null) return
            
            this.params = { page: 0, size: this.pageSize }
            this.params[this.selectedFilter.value] = this.keyword
            this.getSubjectSets();
        },

        clearSelection() {
            localStorage.setItem('selectedSubjectSetId', null);
            this.showSuccess();
        },

        onWriteButtonClick() {
            this.$router.push({ path: '/help/subject-set/write' });
        },
    }
}

const columns = [
    { name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    { name: 'writer', align: 'center', label: '작성자', field: 'writer', style: 'width: 150px' },
    { name: 'title', align: 'left', label: '제목', field: 'title', style: 'width: 250px' },
    { name: 'createAt', align: 'left', label: '생성일', field: 'createAt', style: 'width: 300px' },
    { name: 'optionBtn', align: 'left', label: 'Option', field: 'optionBtn', style: 'width: 300px' },
];
</script>