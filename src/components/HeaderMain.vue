<template>
    <div class="row" style="background: #353543; width: 100%; padding: 10px">
        <div class="col">
            <q-btn @click="connect()" color="primary" label="connect" class="q-ml-md" />
            <q-btn @click="goTo('/')" color="black" label="home" class="q-ml-md" />
            <q-btn @click="openUrl('/editor')" color="secondary" label="editor" class="q-ml-md" />
            <q-btn @click="sendCode('stop')" color="deep-orange" label="stop" class="q-ml-md" />
        </div>
        <div class="on-right">
            <q-btn @click="sendCode('reboot')" color="secondary" label="reboot" class="q-ml-md" />
            <q-btn @click="sendCode('format')" color="deep-orange" label="format" class="q-ml-md" />
            <q-btn @click="sendCode('update')" color="brown" label="update" class="q-ml-md" />
            <q-btn @click="openUrl('/help')" color="purple" label="HELP" class="q-ml-md" />
        </div>
    </div>
</template>

<script>
// import serial from "@/utils/serial";
import { SerialPort } from "serialport";
import VueBase from "@/VueBase";

export default {
    mixins: [VueBase],

    methods: {
        connect() {
            // const port = new SerialPort({
            //     path: "path",
            //     baudRate: 115200,
            //     lock: false,
            // });
            console.log(SerialPort);
            // serial.connect();
        },
        sendCode() {
            // serial.sendCode(code);
        }
    }
}
</script>