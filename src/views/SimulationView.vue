<template>
    <p v-if="!$route.params.page">기본 시뮬레이션 페이지입니다.</p>
    <DicePage v-if="$route.params.page === 'dice'"/>
    <DhtScreenPage v-if="$route.params.page === 'dht_screen'"/>
    <StovePage v-if="$route.params.page === 'stove'"/>
    <DoorPage v-if="$route.params.page === 'door'"/>
    <FlagGamePage v-if="$route.params.page === 'flag_game'"/>
    <SpaceCraftPage v-if="$route.params.page === 'spacecraft'"/>
    <MazePage v-if="$route.params.page === 'maze'"/>
    <SlidingPuzzlePage v-if="$route.params.page === 'sliding_puzzle1'"/>
    <LunarLanderPage v-if="$route.params.page === 'lunar_lander'"/>
    <CanonPage v-if="$route.params.page === 'cannon'"/>
    <SoilSensor v-if="$route.params.page === 'soil_sensor'"/>
    <WaterSensor v-if="$route.params.page === 'water_sensor'"/>
    <CarRacePage v-if="$route.params.page === 'car_race'"/>
    <Slider140Page v-if="$route.params.page === 'slider140'"/>
</template>


<script>
import DicePage from '@/components/simulation/DicePage.vue';
import DhtScreenPage from '@/components/simulation/DhtScreenPage.vue';
import StovePage from '@/components/simulation/StovePage.vue';
import DoorPage from '@/components/simulation/DoorPage.vue';
import FlagGamePage from '@/components/simulation/FlagGamePage.vue';
import SpaceCraftPage from '@/components/simulation/SpaceCraftPage.vue';
import MazePage from '@/components/simulation/MazePage.vue';
import SlidingPuzzlePage from '@/components/simulation/SlidingPuzzlePage.vue';
import LunarLanderPage from '@/components/simulation/LunarLanderPage.vue';
import CanonPage from '@/components/simulation/CanonPage.vue';
import SoilSensor from '@/components/simulation/SoilSensorPage.vue';
import WaterSensor from '@/components/simulation/WaterSensorPage.vue';
import CarRacePage from '@/components/simulation/CarRacePage.vue';
import Slider140Page from '@/components/simulation/Slider140Page.vue';

export default {

    
    components: {
        DicePage, DhtScreenPage, StovePage, SoilSensor, WaterSensor,
        DoorPage, FlagGamePage, SpaceCraftPage, MazePage, SlidingPuzzlePage, LunarLanderPage, CanonPage, CarRacePage,
        Slider140Page,
    }, 

    computed: {
    },

    created() {
    }
}
</script>

<style>

</style>
