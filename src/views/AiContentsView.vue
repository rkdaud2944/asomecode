<template>
    <p v-if="!$route.params.page">Ai 콘텐츠 페이지입니다.</p>
    <AiDriving v-if="$route.params.page === 'aiDriving'"/>
    <AiObject v-if="$route.params.page === 'aiObject'"/>
</template>


<script>
import AiDriving from '@/components/ai/AiDriving.vue';
import AiObject from '@/components/ai/AiObject.vue';

export default {

    
    components: {
        AiDriving, AiObject
    }, 

    computed: {
    },

    created() {
    }
}
</script>

<style>

</style>
