<template>
    <Header />

    <div class="row q-pa-md">
        <div class="col q-pr-md">
            <q-select filled v-model="model" :options="options" label="Filled" />
        </div>
        <div class="col q-pl-md">
            <q-input color="teal" filled v-model="keyword" label="검색어">
                <template v-slot:prepend>
                    <q-icon name="search" />
                </template>
            </q-input>
        </div>
    </div>

    <div class="q-pa-md">
        <QuasarGrid ref="grid" :rowKey="id" @onPageChanged="onPageChanged" @onRowClick="onRowClick" />

        <br>
        <div class="row flex flex-center">
            <q-btn @click="clearSelection" color="primary" label="초기화" />
            <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import VueBase from '@/mixin/vue-base';
import subjectSets from '@/data/subject-sets';
import userColumns from '@/assets/quasar/table-columns';
import Header from '@/components/HeaderHelp.vue';
import QuasarGrid from '@/components/QuasarGrid';

export default {
    mixins : [VueBase],

    components: {
        Header, QuasarGrid,
    },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        }
    },

    mounted() {
        this.$refs.grid.setColumns(userColumns.user);
        this.onPageChanged(1);
    },

    methods: {
        onPageChanged(page) {
            console.log(page);
            this.$refs.grid.setRows(subjectSets.rows, 1000);
        },

        onRowClick(e, row) {
            this.$router.push({ path: '/help/subject-set/detail', query: row });
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
</script>