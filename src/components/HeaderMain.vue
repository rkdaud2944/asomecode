<template>
    <div class="row" style="background: #353543; width: 100%; padding: 10px">
        <div class="col">
            <q-btn ref="btConnect" @click="connect()" :color="btConnectColor" label="connect" class="q-ml-md" />
            <q-btn @click="goTo('/')" color="black" label="home" class="q-ml-md" />
            <q-btn @click="goTo('/editor')" color="secondary" label="editor" class="q-ml-md" />
            <q-btn @click="stop()" color="deep-orange" label="stop" class="q-ml-md" />
        </div>
        <div class="on-right">
            <q-btn @click="reboot()" color="secondary" label="reboot" class="q-ml-md" />
            <q-btn @click="format()" color="deep-orange" label="format" class="q-ml-md" />
            <q-btn @click="update()" color="brown" label="update" class="q-ml-md" />
            <q-btn @click="openUrl('/help')" color="purple" label="HELP" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
import serial from "@/utils/serial";
import VueBase from "@/VueBase";
import eventbus from "@/utils/eventbus";
import updateBoard from "@/utils/update-board";

export default {
    mixins: [VueBase],

    data() {
        return {
            btConnectColor: "grey",
        }
    },

    mounted() {
        eventbus.on("onSerialConnected", () => {
            this.btConnectColor = "primary";
        });
        eventbus.on("onSerialClosed", () => {
            this.btConnectColor = "grey";
            this.$q.notify('어썸보드 연결이 끊어졌습니다.');
        });
    },

    methods: {
        ...serial,

        connect() {
            serial.connect();
        },

        sendCode() {
            serial.writeLn("print('Hi')");
        },

        update() {
            updateBoard.start();
        },
    }
}
</script>