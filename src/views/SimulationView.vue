<template>
    <p v-if="!$route.params.page">기본 시뮬레이션 페이지입니다.</p>
    <DicePage v-if="$route.params.page === 'dice'"/>
    <CanonPage v-if="$route.params.page === 'canon'"/>
    <DhtScreenPage v-if="$route.params.page === 'dht_screen'"/>

</template>


<script>
import DicePage from '@/components/simulation/DicePage.vue';
import DhtScreenPage from '@/components/simulation/DhtScreenPage.vue';
import CanonPage from '@/components/simulation/CanonPage.vue';

export default {

    
    components: {
        DicePage, 
        DhtScreenPage,
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
