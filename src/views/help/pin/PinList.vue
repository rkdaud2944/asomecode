<template>
    <Header />

    <div class="q-pa-md">
        어썸보드의 핀을 사용하는 방법에 대해서 알려드립니다.
    </div>
    <hr class="hr">

    <div class="q-pa-md q-gutter-sm">
        <q-img class="img" :src="imageBaseUrl + 'button.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'buzzer_active.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'buzzer_passive.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'led.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'rotary_encoder.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_cds.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_dht11.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_line.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_rain.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_soil.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_sonic.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_sound.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'sensor_sw420.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'servo_180.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'servo_360.png'" spinner-color="white" />
        <q-img class="img" :src="imageBaseUrl + 'TM1637.png'" spinner-color="white" />
    </div>
</template>

<script>
import Header from '@/components/HeaderHelp.vue';

export default {
    components: {
        Header,
    },

    data() {
        return {
            imageBaseUrl: process.env.VUE_APP_LESSON_CONTENT_BASEURL + "lesson/pin-library-images/",
        };
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
.img {
    display: block;
    max-width: 449px;
    height: 200px;
}
</style>