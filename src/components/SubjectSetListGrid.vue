<!-- 페이징 처리가 된 그리트 콤포넌트 -->
<template>
    <div>
        <div>
            <q-table :rows="rows" :columns="columns" :pagination="paginationOption" row-key="name" hide-bottom>

                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td v-for="col in props.cols" :key="col.name" :props="props">
                            <div>{{ col.value }}</div>
                            
                            <q-btn style="margin-right: 10px;" @click="onDetailPage(props.row.id)" v-if="col.name == 'optionBtn'" color="primary" label="상세"/>
                            <q-btn style="margin-right: 10px;" @click="onSelectSubjectSet(props.row)" v-if="col.name == 'optionBtn'" color="primary" label="과목 설정"/>
                        </q-td>
                    </q-tr>
                </template>

                <q-tr>
                    <q-td v-for="col in props.cols" :key="col.name" :props="props">
                        <q-btn @click="openUrl(`/user/detail?id=${props.row.id}`)" flat style="color: #FF0080"
                            label="설정" />
                    </q-td>
                </q-tr>
            </q-table>
        </div>
        <br />

        <div>
            <q-pagination @update:model-value="onPageChanged" v-model="page" :max="pageCount" :max-pages="10"
                boundary-numbers color="purple" direction-links boundary-links icon-first="skip_previous"
                icon-last="skip_next" icon-prev="fast_rewind" icon-next="fast_forward" />
        </div>
    </div>
</template>

<script>
import { Notify } from 'quasar'
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

        onBatchMenu(index) {
            console.log("onBatchMenu", index);
        },

        onDetailPage(id) {
            this.$router.push({ path: "/help/subject-set/detail", query: { id: id } });
        },

        onSelectSubjectSet(row) {
            localStorage.setItem('selectedSubjectSetId', row.id);

            Notify.create({
                type: "positive",
                color: "blue",
                textColor: "white",
                message: `"${row.title}" 과정으로 설정이 완료되었습니다.`
            });
        }
    },
};
</script>