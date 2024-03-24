<template>
    <div>simulation</div>
    <!-- <component :is="currentComponent"></component> -->
    
    <DicePage v-if="$route.params.page === 'dice'"/>
    <CanonPage v-if="$route.params.page === 'canon'"/>
    <p v-if="!$route.params.page">기본 시뮬레이션 페이지입니다.</p>
</template>



<script>
import DicePage from '@/components/simulation/DicePage.vue';
import CanonPage from '@/components/simulation/CanonPage.vue';

export default {
    props: ['page'], // `type` 파라미터를 prop으로 받습니다.

    
    components: {
        DicePage,
        CanonPage
    }, 

    computed: {
        // `type` 값에 따라 적절한 컴포넌트를 반환합니다.
        // currentComponent() {
        //     switch (this.page) {
        //         case 'dice':
        //             return DicePage;
        //         case 'canon':
        //             return CanonPage;
        //         // 필요한 만큼 case를 추가할 수 있습니다.
        //         default:
        //             return null; // 기본값 또는 오류 컴포넌트를 반환할 수 있습니다.
        //     }
        // }
    },

    created() {
        var ipcRenderer = require('electron').ipcRenderer;//ipcRenderer를 선언해야 합니다
        ipcRenderer.on('tweet', (event, tweet, uiOption) => {//ipcRenderer.on('이벤트이름', (event, 객체1, 객체2, ...) 첫 파라메터는 무조건 event입니다.
            // this.tweet=tweet;//받은 데이터를 지지고 볶고 해줍시다.
            // this.uiOption=uiOption;
            console.log("tweet : "+tweet+", uiOption : "+uiOption)
        })
    }
}
</script>

<style>

</style>
