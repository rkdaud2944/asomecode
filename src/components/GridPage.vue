<!-- 페이징 처리가 된 그리트 콤포넌트 -->
<template>
    <div>
        <div style="width: 90%; text-align: center; margin: auto; padding: 0;" >
            <q-table :rows="rows" :columns="columns" style=" background-color: #027BE3;" :pagination="paginationOption"
                row-key="name" hide-bottom>

            <template v-slot:body="props">
                <q-tr @click="onRowClick(props.row)" :props="props" style="font-family:Arial, Helvetica, sans-serif; cursor: pointer; background-color: #424242;">
                    <q-td v-for="col in props.cols" :key="col.name" :props="props">
                        <div>{{ col.value }}</div>
                    </q-td>
                </q-tr>
            </template>
            </q-table>
        </div>
            <q-pagination
                class="page-center"
                @update:model-value="onPageChanged" v-model="page" :max="pageCount" :max-pages="10"
                boundary-numbers color="blue"
                direction-links
                boundary-links
                icon-first="skip_previous"
                icon-last="skip_next"
                icon-prev="fast_rewind"
                icon-next="fast_forward"/>
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

<style>
@font-face {
    font-family: pten;
    src: url(../assets/fonts/NEXEN\ TIRE_Regular.ttf);
}

@media screen and (max-width:1250px ) {
    .page-center {
        margin-top: 25px;
        float: left;
        position: relative;
        left: 40%;
    }
}
@media screen and (min-width:1250px ) {
    .page-center {
        margin-top: 25px;
        float: left;
        position: relative;
        left: 46%;
    }
}
.q-table th {
    font-size: 16px;
    font-family: pten;
    color: white;
    text-align: left;
}
.q-table tbody td {
    text-align: left;
}
.q-table__card {
    box-shadow: none;
    color: white;
}
</style>