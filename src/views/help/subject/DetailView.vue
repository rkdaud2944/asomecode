<template>
    <Header />

    <div class="q-pa-md">
        Subject Detail
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