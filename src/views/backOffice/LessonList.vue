<template>
    <div class="q-pa-md">
        <FilterFrame icon="filter_alt" title="필터목록" size="300">
            <template v-slot:filter>
                <Filter @onFilterChanged="onFilterChanged" />
            </template>
            <template v-slot:main>
                <Grid ref="grid" rowKey="id" @onPageChanged="onPageChanged" />
            </template>
        </FilterFrame>
    </div>
</template>

<script>
import VueBase from '@/globals/vue-base';
import apiLesson from '@/api/lesson';
import FilterFrame from '@/components/FilterFrame.vue';
import Filter from '@/components/backOffice/LessonListFilter.vue';
import Grid from '@/components/backOffice/LessonListGrid.vue';

export default {
    mixins: [VueBase],

    components: {
        FilterFrame, Filter, Grid,
    },

    data() {
        return {
            paramsList: { page: 0, size: process.env.VUE_APP_PAGE_SIZE },
            paramsFilter: {},
        }
    },

    computed: {
        params() {
            return {
                ...this.paramsList,
                ...this.paramsFilter,
            }
        },
    },

    methods: {
        onPageChanged(params) {
            this.paramsList = params;
            this.getLessons();
        },

        onFilterChanged(params) {
            this.paramsFilter = params;
            this.getLessons();
        },

        getLessons() {
            apiLesson.getLessons(this.params)
                .then(response => {
                    this.$refs.grid.setData(response.data);
                })
                .catch(this.showError);
        },
    },
}
</script>