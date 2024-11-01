<template>
    <Header />
    <div class="background-color--ffffff">
        <div class="q-pa-md"> 
            <p class="help-main-title-font-style text-align--center">
                Pin Library
            </p>
            <p class="help-sub-title-font-style text-align--center padding-bottom--35">
                어썸보드의 핀을 사용하는 방법에 대해서 알려드립니다.
            </p>
        </div>
        <div class="hr">
        </div>
        <div class="q-pa-md q-gutter-sm center background-color--ffffff width--600px border-radius--5px margin-top--3px">
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
<style scoped src="@/assets/css/component/common.css"/>
<style src="@/assets/css/component/PinList.css"/>