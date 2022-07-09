<template>
    <div class="main">
        <br>
        <h3>{{ subject.title }}</h3>
        <br>

        <p class="text">{{ subject.description }}</p>
        <br>

        <div class="more-button">
            <el-button class="more-button" type="success">더알아보기</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["subject"],

    setup() {

    },
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 300px;
    background: white;
    text-align: center;
    position : relative;
}
.icon {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: black;
}
.text {
    margin-left: 10px;
    margin-right: 10px;
}
.more-button {
    position : absolute;
    bottom: 20px;
    width: 100px;
    left: calc(50% - 50px);
}
</style>