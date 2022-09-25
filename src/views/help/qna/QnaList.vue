<template>
    <Header />
    <BoardList :boardType="boardType" />
</template>

<script>
import Header from '@/components/HeaderHelp.vue';
import BoardList from '@/components/board/BoardList.vue';
export default {
    components: {
        Header, BoardList,
    },

    data() {
        return {
            boardType: "QnA"
        }
    },
}
</script>