<template>
    <div>
        <div class="row q-mb-md">
            <div class="col">
                <q-btn @click="onFilterChanged" color="red">필터적용</q-btn>
            </div>

            <div class="on-right">
                <q-btn @click="clearInputs">초기화</q-btn>
            </div>
        </div>

        <q-input class="input-box" filled v-model="params.title" label="차시 제목" color="teal">
            <template v-slot:prepend>
                <q-icon name="title" />
            </template>
        </q-input>

        <q-select class="input-box" v-model="params.defaultSubjectId" 
        :options="defaultSubjectSet" :option-value="opt => opt.id" :option-label="opt => opt.title" 
        label="과목명" emit-value filled map-options>
            <template v-slot:prepend>
                <q-icon name="subject" />
            </template>
        </q-select>
    </div>
</template>

<script>
import apiSubjectSet from "@/api/subjectSet";
export default {

    data() {
        return {
            defaultSubjectSet: [],
            params: {
                title: null,
                defaultSubjectId: null
            },
        };
    },

    mounted() {
        this.getDefaultSubjectSet()
    },

    computed: {
        filters() {
            const filters = { ...this.params };
            return filters;
        }
    },

    methods: {
        clearInputs() {
            this.params = {
                title: null,
            }

            this.$emit("onFilterChanged", this.filters);
        },

        onFilterChanged() {
            this.$emit("onFilterChanged", this.filters);
        },

        getDefaultSubjectSet() {
            apiSubjectSet.getSubjectSet()
                .then((response) => {
                    this.defaultSubjectSet = response.data.subjects;
                })
                .catch(this.showError);
        },
    },
}
</script>

<style scoped src="@/assets/css/backoffice/backoffice.css"/>
