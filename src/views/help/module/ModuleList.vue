<template>
    <Header />
    <div class="q-pa-md"> 
        <p class="help-main-title-font-style text-align--center">
            Module Library
        </p>
        <p class="help-sub-title-font-style text-align--center padding-bottom--35">
            어썸보드에서 제공하는 다양한 모듈에 대한 설명입니다.
        </p>
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
<style src="@/assets/css/component/common.css"/>