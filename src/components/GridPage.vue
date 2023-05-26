<!-- 페이징 처리가 된 그리트 콤포넌트 -->
<template>
    <div>
        <div>
            <q-table :rows="rows" :columns="columns" :pagination="paginationOption"
                row-key="name" hide-bottom>

            <template v-slot:body="props">
                <q-tr @click="onRowClick(props.row)" :props="props">
                    <q-td v-for="col in props.cols" :key="col.name" :props="props">
                        <div>{{ col.value }}</div>
                    </q-td>
                </q-tr>
            </template>
            </q-table>
        </div>
        <br />

        <div>
            <q-pagination @update:model-value="onPageChanged" style="justify-content : center;" v-model="page" :max="pageCount" :max-pages="10"
                boundary-numbers color="purple"
                direction-links
                boundary-links
                icon-first="skip_previous"
                icon-last="skip_next"
                icon-prev="fast_rewind"
                icon-next="fast_forward"/>
        </div>
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import QuasarColumnManager from "@/utils/quasar-column-manager";

export default {
    mixins: [VueBase],
    props: ["rowKey", "columns"],

    data() {
        return {
            page: 1,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
            columnManager: new QuasarColumnManager(this.columns),
            data: {},
            paginationOption: {
                rowsPerPage: process.env.VUE_APP_PAGE_SIZE,
            },
        };
    },

    computed: {
        params() {
            return {
                page: this.page - 1,
                size: this.pageSize,
            }
        },

        rows() {
            return this.data.rows;
        },

        rowCount() {
            return this.data.rowCount;
        },

        pageCount() {
            return Math.ceil(this.rowCount / this.pageSize);
        },
    },

    mounted() {
        this.$emit("onPageChanged", this.params);
    },

    methods: {
        setData(data) {
            this.data = data;
        },

        getColumnHeader(col) {
            return this.columnManager.getHeader(col);
        },

        getColumn(col) {
            return this.columnManager.getColumn(col);
        },

        setPagesize(size) {
            this.page = 1;
            this.pageSize = size;
            this.paginationOption.rowsPerPage = size;
            this.$emit("onPageChanged", this.params);
        },

        onColumnClick(col) {
            this.columnManager.onColumnClick(col);
        },

        onPageChanged(page) {
            this.page = page;
            this.$emit("onPageChanged", this.params);
        },

        onRowClick(row) {
            this.$emit("onRowClick", row);
        },

        onBatchMenu(index) {
            console.log("onBatchMenu", index);
        },
    },
};
</script>