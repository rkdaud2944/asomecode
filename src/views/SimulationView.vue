<template>
    <p v-if="!$route.params.page">기본 시뮬레이션 페이지입니다.</p>
    <DicePage v-if="$route.params.page === 'dice'"/>
    <DhtScreenPage v-if="$route.params.page === 'dht_screen'"/>
    <StovePage v-if="$route.params.page === 'stove'"/>
    <DoorPage v-if="$route.params.page === 'door'"/>
    <FlagGamePage v-if="$route.params.page === 'flag_game'"/>

</template>


<script>
import DicePage from '@/components/simulation/DicePage.vue';
import DhtScreenPage from '@/components/simulation/DhtScreenPage.vue';
import StovePage from '@/components/simulation/StovePage.vue';
import DoorPage from '@/components/simulation/DoorPage.vue';
import FlagGamePage from '@/components/simulation/FlagGamePage.vue';

export default {

    
    components: {
        DicePage, DhtScreenPage, StovePage,
        DoorPage, FlagGamePage,
    }, 

    computed: {
    },

    created() {
    }
}
</script>

<style>

</style>
