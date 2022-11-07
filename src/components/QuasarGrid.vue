<template>
    <div>
        <q-table @row-click="onRowClick" :rows="rows" :columns="columns" row-key="rowKey" :pagination="paginationOption" hide-bottom />
    </div>
    <br>

    <div class="flex flex-center">
        <q-pagination @update:model-value="onPageChanged" v-model="currentPage" :max="pageCount" :max-pages="10"
            boundary-numbers color="purple" />
    </div>
</template>

<script>
import VueBase from '@/mixin/vue-base';

export default {
    mixins: [VueBase],

    props: ["rowKey"],

    data() {
        return {
            columns: [],
            rows: [],
            rowCount: 0,
            currentPage: 1,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            paginationOption: {
                rowsPerPage: process.env.VUE_APP_PAGE_SIZE,
            },
        }
    },

    computed: {
        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        }
    },

    methods: {
        setColumns(columns) {
            this.columns = columns;
        },

        setRows(rows, rowCount) {
            console.log('setRows', rows, rowCount);
            this.rows = rows;
            this.rowCount = rowCount;
        },

        onPageChanged(page) {
            this.$emit('onPageChanged', page);
        },

        onRowClick(e, row) {
            this.$emit('onRowClick', row);
        },
    }
}
</script>