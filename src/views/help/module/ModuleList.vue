<template>
    <Header />

    <div class="q-pa-md">
        어썸보드에서 제공하는 다양한 모듈에 대한 설명입니다.
    </div>
    <hr class="hr">
</template>

<script>
import Header from '@/components/HeaderHelp.vue';

export default {
    components: {
        Header,
    },

    mounted() {
        console.log(this.$route.query);
    }
}
</script>
<style>
.hr {
    border: 1px solid #ff8123;
    border-radius: 4px 4px 0 0;
}
</style>