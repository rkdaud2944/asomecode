<template>
    <Header />
    <div> 
        <a style="
            text-align: left;
            padding-top: 35px;
            margin-left: 5%;
            display: block;
            font-family: pten;
            font-size: 50px;
            color: black;">
            QnA
        </a>
        <a style="
            text-align: left;
            margin-left: 5%;
            display: block;
            font-family: sans-serif;
            font-size: 20px;
            color: black;">
            질문에 묻고 답해요
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

