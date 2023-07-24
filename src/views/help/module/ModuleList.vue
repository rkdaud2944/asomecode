<template>
    <Header />
    <div class="q-pa-md"> 
        <a style="
            text-align: center;
            padding-top: 35px;
            display: block;
            font-family: pten;
            font-size: 50px;
            color: black;">
            Module Library
        </a>
        <a style="
            text-align: center;
            padding-bottom: 35px;
            display: block;
            font-family: sans-serif;
            font-size: 20px;
            color: black;">
            어썸보드에서 제공하는 다양한 모듈에 대한 설명입니다.
        </a>
    </div>

    <div class="hr">

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
<style>
.hr {
    border: 1px solid #027BE3;
}
</style>