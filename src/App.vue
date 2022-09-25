<template>
    <el-row v-if="showHeaderMain">
        <HeaderMain />
    </el-row>
    <el-row v-if="showHeaderMain">
        <ConsoleLog />
    </el-row>
</template>

<script>
import globals from "./globals";
import { useMemberStore } from "@/store/member";
import HeaderMain from "@/components/HeaderMain.vue";
import ConsoleLog from "@/components/ConsoleLog.vue";

export default {    
    components: {
        HeaderMain, ConsoleLog,
    },

    computed: {
        showHeaderMain() {
            let result = true;
            const skipHeaderMains = ["/help"];
            skipHeaderMains.forEach((path) => {
                if (this.$route.path.startsWith(path)) {
                    result = false;
                    return;
                }
            });
            return result;
        },
    },

    watch: {
        $route(to) {
            globals.currentPath = to.path;

            this.showHeaderMain = true;
            const skipHeaderMains = ["/editor", "/help", "/backOffice"];
            skipHeaderMains.forEach((path) => {
                if (to.path.startsWith(path)) {
                    this.showHeaderMain = false;
                }
            });
        },
    },

    setup() {
        const memberStore = useMemberStore();

        console.log("Appp platform", process.env.VUE_APP_PLATFORM);
        console.log("Appp mode", process.env.VUE_APP_MODE);

        return {
            memberStore,
        };
    },

    methods : {
        refreshAll() {
            // 새로고침
            this.$router.go();
        }
    }
};
</script>