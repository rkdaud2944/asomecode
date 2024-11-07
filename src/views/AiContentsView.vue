<template>
    <p v-if="!$route.params.page">Ai 콘텐츠 페이지입니다.</p>
    <SelfDriving v-if="$route.params.page === 'selfDriving'"/>
</template>


<script>
import SelfDriving from '@/components/ai/SelfDriving.vue';

export default {

    
    components: {
        SelfDriving
    }, 

    computed: {
    },

    created() {
    }
}
</script>

<style>

</style>
