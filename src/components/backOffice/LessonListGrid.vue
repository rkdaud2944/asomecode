<template>
    <div style="width: auto">
        <div>
            <q-table :rows="rows" :columns="columns" :pagination="paginationOption"
                :row-key="rowKey" hide-bottom>
                <template v-slot:header="props">
                    <q-tr :props="props">
                        <q-th @click="onColumnClick(col)" v-for="col in props.cols" :key="col.name" :props="props">
                           <div v-html="getColumnHeader(col)">
                           </div>
                        </q-th>
                            
                    </q-tr>
                </template>

                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td v-for="col in props.cols" :key="col.name" :props="props">
                            <div v-if="col.type == 'code'" :style="col.style">
                                <TextBox :text="getCode(col).label" :color="getCode(col).color" width="100%" />
                            </div>

                            <div v-else v-html="getColumn(col)" :style="col.style" class="text-fit"></div>
                        </q-td>

                        <q-td>
                            <q-btn @click="goTo('/backOffice/lesson/detail', { id: props.row.id})" flat style="color: #FF0080" label="보기" />
                            
                            <q-btn  @click="goTo('/backOffice/edit/lesson', { id: props.row.id})" flat style="color: #FF0080" label="수정" />
                        </q-td>
                    </q-tr>
                </template>
            </q-table>
        </div>
        <br />

        <div>
            <q-pagination @update:model-value="onPageChanged" v-model="page" :max="pageCount" :max-pages="6"
                boundary-numbers color="purple" />
        </div>
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import strg from "@/utils/strg";
import QuasarColumnManager from "@/utils/quasar-column-manager";
import TextBox from '@/components/TextBox.vue';

export default {
    mixins: [VueBase],

    props: ["rowKey"],

    components: {
        TextBox
    },

    data() {
        return {
            columnManager: new QuasarColumnManager(columns),
            columns: columns,
            data: {},
            page: 1,
            pageSize: process.env.VUE_APP_PAGE_SIZE,
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

        getCode(col) {
            return this.columnManager.getCode(col);
        },

        toLink(text) {
            return strg.toLink(text);
        },

        onPageChanged(page) {
            this.page = page;
            this.$emit("onPageChanged", this.params);
        },
    },
};

const columns = [
    { name: 'id', align: 'center', label: 'ID', field: 'id', style: 'width: 30px' },
    { name: 'title', align: 'left', label: '제목', field: 'title', style: 'width: 300px' },
    { name: 'defaultSubjectTitle', align: 'left', label: '과목명', field: 'defaultSubjectTitle', style: 'width: 100px' },
];
</script>