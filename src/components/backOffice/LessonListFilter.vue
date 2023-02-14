<template>
    <div>
        <div class="row q-mb-md" style="width: 100%">
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
                    console.log(this.defaultSubjectSet)
                })
                .catch(this.showError);
        },
    },
}
</script>

<style scoped>
.input-box {
    width: 100%;
    margin-bottom: 8px;
}

.range-box {
    background: #F2F2F2;
    margin-bottom: 8px;
}

.range-box-label {
    font-size: 12px;
    color: #8e8e8e;
    margin-top: 4px;
    margin-left: 8px;
    margin-bottom: 4px;
}

.range-box-left {
    width: 45%;
}

.range-box-center {
    width: 10%;
    text-align: center;
    line-height: 56px;
}

.range-box-right {
    width: 45%;
    float: right;
}
</style>