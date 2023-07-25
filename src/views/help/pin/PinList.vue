<template>
    <Header />
    <div style=" background-color: #ffffff; ">
        <div class="q-pa-md"> 
            <a style="
                text-align: center;
                padding-top: 35px;
                display: block;
                font-family: none;
                font-weight: 600;
                font-size: 50px;
                color: black;">
                Pin Library
            </a>
            <a style="
                text-align: center;
                padding-bottom: 35px;
                display: block;
                font-family: sans-serif;
                font-size: 20px;
                color: black;">
                어썸보드의 핀을 사용하는 방법에 대해서 알려드립니다.
            </a>
        </div>
        <div class="hr">
        </div>
        <div class="q-pa-md q-gutter-sm" style="background-color: white; width: 600px; margin-left: auto; margin-right: auto; display: block; text-align: center; border-radius: 5px; margin-top: 3px;">
            <q-img class="img center" :src="imageBaseUrl + 'button.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'buzzer_active.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'buzzer_passive.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'led.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'rotary_encoder.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_cds.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_dht11.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_line.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_rain.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_soil.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_sonic.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_sound.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'sensor_sw420.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'servo_180.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'servo_360.png'" spinner-color="white" />
            <q-img class="img center" :src="imageBaseUrl + 'TM1637.png'" spinner-color="white" />
        </div>
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
@font-face {
    font-family: pten;
    src: url(../../../assets/fonts/Pretendard-Black.otf);
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.hr {
    border: 1px solid #027BE3 ;
}
.img {
    display: block;
    max-width: 449px;
    height: 200px;
}

body {
    background-color: white;
    max-width: 1000px;
    margin: 0 auto;
}
</style>