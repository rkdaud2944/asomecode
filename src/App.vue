<template>
  <div>Hello {{ memberStore.id }}</div>
  <button @click="memberStore.id = 999">test</button>
</template>

<script>
import globals from './globals'
import {useMemberStore} from '@/store/member'

export default {
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