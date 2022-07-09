<template>
    <el-row>
        <HeaderMain />
    </el-row>
    <router-view />
</template>

<script>
import "element-plus/dist/index.css";
import globals from './globals'
import {useMemberStore} from '@/store/member'
import HeaderMain from '@/components/HeaderMain.vue'

export default {
    components: {
        HeaderMain,
    },

    watch: {
        $route(to) {
            globals.currentPath = to.path;
        },
    },

    setup() {
        const memberStore = useMemberStore();

        return {
            memberStore
        }
    }
}
</script>