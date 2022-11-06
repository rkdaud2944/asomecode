<template>
    <q-layout view="hHh lpr fFf">
        <div v-if="showHeaderMain">
            <HeaderMain />
        </div>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer v-if="showFooterMain" class="bg-grey-4 text-black">
            <ConsoleLog />
        </q-footer>
    </q-layout>
</template>

<script>
import globals from "./globals";
import bridgeIn from "./bridge-in";
import { useMemberStore } from "@/store/member";
import HeaderMain from "@/components/HeaderMain.vue";
import ConsoleLog from "@/components/ConsoleLog.vue";
import editorControl from "@/globals/editor-control";

export default {
    components: {
        HeaderMain, ConsoleLog,
    },

    setup() {
        bridgeIn.init();
        editorControl.init();

        const memberStore = useMemberStore();

        return {
            memberStore,
        };
    },

    data() {
        return {
            showHeaderMain: true,
            showFooterMain: true,
        };
    },

    watch: {
        $route(to) {
            console.log("Appp route", to);

            globals.currentPath = to.path;

            this.showHeaderMain = true;
            this.showFooterMain = true;
            const skipHeaderMains = ["/editor", "/help", "/backOffice"];
            skipHeaderMains.forEach((path) => {
                if (to.path.startsWith(path)) {
                    this.showHeaderMain = false;
                    this.showFooterMain = false;
                    console.log("skipHeaderMains", path);
                }
            });
        },
    },

    mounted() {
        window.goTo = (path, params) => {
            if (params) {
                this.$router.push({ path: path, query: params });
            } else {
                this.$router.push({ path: path });
            }
        };
    },
};
</script>