<template>
    <Header />

    <div class="q-pa-md">
        Pin 라이브러리
    </div>
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