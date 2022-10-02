<template>
    <Header />
    <div>
        <BoardList boardType="QnA" />
    </div>
</template>

<script>
import Header from '@/components/HeaderHelp.vue';
import BoardList from '@/components/board/BoardList.vue';
export default {
    components: {
        Header, BoardList,
    },
}
</script>