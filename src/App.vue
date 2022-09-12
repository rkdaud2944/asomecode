<template>
    <el-row v-if="showHeaderMain">
        <HeaderMain />
    </el-row>
    <router-view />
</template>

<script>
import globals from "./globals";
import { useMemberStore } from "@/store/member";
import HeaderMain from "@/components/HeaderMain.vue";

export default {
    
    components: {
        HeaderMain,
    },

    data() {
        return {
            showHeaderMain: false,
        };
    },

    watch: {
        $route(to) {
            globals.currentPath = to.path;

            this.showHeaderMain = true;
            const skipHeaderMains = ["/editor", "/help"];
            skipHeaderMains.forEach((path) => {
                if (to.path.startsWith(path)) {
                    this.showHeaderMain = false;
                }
            });
        },
    },

    setup() {
        const memberStore = useMemberStore();

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