<template>
    <q-tabs @click="onTabClick" @update:model-value="onTabUpdated" v-model="tabName" indicator-color="yellow" class="bg-primary text-white shadow-2 q-mb-md">
        <q-tab name="pin" icon="pin" label="핀 라이브러리" />
        <q-tab name="module" icon="view_module" label="모듈 라이브러리" />
        <q-tab name="qna" icon="question_mark" label="Q&A" />
        <q-tab name="subject" icon="list" label="커스텀 과목" />
        <q-tab name="subject-set" icon="workspaces_filled" label="커스텀 과목 세트" />
    </q-tabs>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],

    data() {
        return {
            tabName: '',
        }
    },

    mounted() {
        this.tabName = this.getTabNameFromPath();
    },

    methods: {
        onTabUpdated(tab) {
            this.goTo(`/help/${tab}/list`);
        },

        onTabClick() {
            if (this.tabName == this.getTabNameFromPath()) {
                this.goTo(`/help/${this.tabName}/list`);
            }
        },

        getTabNameFromPath() {
            const names = this.$route.path.split('/');
            return names[2];
        },
    },
}
</script>
