<template>
    <Header />
    <div> 
        <a style="
            text-align: left;
            padding-top: 35px;
            margin-left: 5%;
            display: block;
            font-family: none;
            font-weight: 600;
            font-size: 50px;
            color: black;">
            FaQ
        </a>
        <a style="
            text-align: left;
            margin-left: 5%;
            display: block;
            font-family: sans-serif;
            font-size: 20px;
            color: black;
            margin-bottom: 7px;">
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

