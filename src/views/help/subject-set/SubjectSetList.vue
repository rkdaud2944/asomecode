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
        <SubjectSetListGrid ref="grid" rowKey="id" :columns="columns" @onPageChanged="onPageChanged" />
        <br>
        <div class="row flex flex-center">
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