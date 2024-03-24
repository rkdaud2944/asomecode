<template>
    <p v-if="!$route.params.page">기본 시뮬레이션 페이지입니다.</p>
    <DicePage v-if="$route.params.page === 'dice'"/>
    <CanonPage v-if="$route.params.page === 'canon'"/>
</template>



<script>
import DicePage from '@/components/simulation/DicePage.vue';
import CanonPage from '@/components/simulation/CanonPage.vue';

export default {

    
    components: {
        DicePage,
        CanonPage
    }, 

    computed: {
    },

    created() {
    }
}
</script>

<style>

</style>
