<template>
    <Header />
    <div> 
        <p class="help-main-title-font-style text-align--left margin-left--5">
            FaQ
        </p>
        <a class="help-sub-title-font-style text-align--left margin-left--5 margin--bottom-7px">
            자주 묻는 질문입니다
        </a>
    </div>

    <div>
        <BoardList boardType="QnA" />
    </div>
</template>

<script>
import Header from '@/components/HeaderHelp.vue';
import BoardList from '@/components/board/BoardList.vue';
export default {
    components: {
        Header, BoardList,
    },
}
</script>
<style scoped src="@/assets/css/component/common.css"/>

