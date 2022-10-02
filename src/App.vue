<template>
    <div v-if="showHeaderMain">
        <HeaderMain />
    </div>
    <router-view />
    <ConsoleLog />
</template>

<script>
import globals from "./globals";
import bridgeIn from "./bridge-in";
import { useMemberStore } from "@/store/member";
import HeaderMain from "@/components/HeaderMain.vue";
import ConsoleLog from "@/components/ConsoleLog.vue";

export default {    
    components: {
        HeaderMain, ConsoleLog,
    },

    setup() {
        bridgeIn.init();
        
        const memberStore = useMemberStore();

        console.log("Appp platform", process.env.VUE_APP_PLATFORM);
        console.log("Appp mode", process.env.VUE_APP_MODE);

        return {
            memberStore,
        };
    },

    data() {
        return {
            showHeaderMain: true,
        };
    },

    watch: {
        $route(to) {
            globals.currentPath = to.path;

            this.showHeaderMain = true;
            const skipHeaderMains = ["/editor", "/help", "/backOffice"];
            skipHeaderMains.forEach((path) => {
                if (to.path.startsWith(path)) {
                    this.showHeaderMain = false;
                    console.log("skipHeaderMains", path);
                }
            });
        },
    },

    mounted() {
        window.goTo = (path, params) => {
            if (params) {
                // console.log("goTo", this);
                this.$router.push({path: path, query: params});
            } else {
                this.$router.push({path: path});
            }
        };
    },
};
</script>