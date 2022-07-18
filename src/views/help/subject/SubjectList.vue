<template>
    <Header />

    <div class="q-pa-sd">
        <QuasarGrid ref="grid" :rowKey="id" @onPageChanged="onPageChanged" @onRowClick="onRowClick" />
        <br>

        <br>
        <div class="row flex flex-center">
            <q-btn @click="onWriteButtonClick" color="primary" label="글쓰기" />
        </div>
    </div>
</template>

<script>
import subjects from '@/data/subjects';
import userColumns from '@/assets/quasar/table-columns';
import Header from '@/components/HeaderHelp.vue';
import QuasarGrid from '@/components/QuasarGrid';

export default {
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
            this.$refs.grid.setRows(subjects, 1000);
        },

        onRowClick(e, row) {
            this.$router.push({ path: '/help/subject/detail', query: row });
        },

        onWriteButtonClick() {
            this.$router.push({ path: '/help/subject/write' });
        },
    }
}
</script>