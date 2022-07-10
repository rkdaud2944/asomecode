<template>
    <el-row style="background: gray; width: 100%; padding: 10px">
        <el-col :span="1"></el-col>
        <el-col :span="10">
            <el-button @click="sendCode('connect')" type="primary">connect</el-button>
            <el-button @click="goTo('/')" type="primary">home</el-button>
            <el-button @click="openUrl('/editor')" type="primary">editor</el-button>
            <el-button @click="sendCode('stop')" type="danger">stop</el-button>
        </el-col>
        <el-col :span="2"></el-col>
        <el-col :span="10">
            <div style="float: right">
                <el-button @click="sendCode('reboot')" type="danger">reboot</el-button>
                <el-button @click="sendCode('format')" type="danger">format</el-button>
                <el-button @click="sendCode('update')" type="primary">update</el-button>
                <el-button @click="openUrl('/help')" type="success">HELP</el-button>
            </div>
        </el-col>
        <el-col :span="1"></el-col>
    </el-row>
</template>

<script>
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],

    setup() {

    },
}
</script>