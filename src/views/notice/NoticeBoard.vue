<template>
    <BoardList :boardType="boardType" class="notice-component"/>
</template>

<script>
import BoardList from '@/components/board/BoardList.vue';
export default {
    components: {
        BoardList,
    },

    data() {
        return {
            boardType: "Notice"
        }
    },
}
</script>

<style scoped>
.notice-component {
    padding-top: 72px;
}
</style>