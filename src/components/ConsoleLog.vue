<template>
    <div ref="console" class="q-pa-md" style="overflow-y: scroll; height:220px;">

        <q-page-sticky :offset="[20, -40]">
            <q-expansion-item class="shadow-1 overflow-hidden" dense
            style="border-radius: 30px; width: 40px;"
            switch-toggle-side
            header-class="bg-white text-black"
            @click="onConsoleWindowControl">
            </q-expansion-item>
        </q-page-sticky>

        <div v-for="(row, index) in rows" :key="index" v-html="row"></div>
    </div>
    <q-input @keydown.enter.prevent="send" filled v-model="text">
        <template v-slot:prepend>
            <q-icon name="keyboard_arrow_right" />
        </template>
    </q-input>
</template>

<script>
import eventbus from "@/globals/eventbus";
import serial from "@/globals/serial";

export default {
    data() {
        return {
            timer: null,
            buffer: [],
            rows: [],
            text: "",
            consoleEnabled: true,
        };
    },

    mounted() {
        eventbus.on("onSerialConnected", () => {
            this.rows = [];
        });
        eventbus.on("onSerialClosed", () => {
            this.rows = [];
        });
        eventbus.on("onSerialReceived", (data) => {
            // TODO: 디버깅을 위해서 임시 주석 처리
            // if (data && (data.startsWith("###") || data.startsWith(">>> ###"))) {
            //     // console.log(data);
            //     return;
            // }

            data = data.replaceAll(" ", "&nbsp;");
            data = data.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");

            this.buffer.push(data);
        });

        this.timer = setInterval(() => {
            if (this.buffer.length == 0) return;

            this.rows = this.rows.concat(this.buffer);
            this.buffer = [];

            if (this.rows.length > 256) {
                this.rows = this.rows.slice(-256);
            }

            this.$nextTick(() => {
                if (this.$refs.console) {
                    this.$refs.console.scrollTop = this.$refs.console.scrollHeight;
                }
            });

        }, 500);
    },

    unmounted() {
        clearInterval(this.timer);
    },

    methods: {
        send() {
            if (this.text.startsWith("/list")) {
                serial.listFiles();
                this.text = "";
                return;
            }

            if (this.text.startsWith("/view")) {
                serial.viewFile(this.text.split(" ")[1]);
                this.text = "";
                return;
            }

            serial.writeLn(this.text);
            this.text = "";
        },

        onConsoleWindowControl() {
            if (this.consoleEnabled) {
                this.$refs.console.style.height = '50px'
                this.consoleEnabled = false
            } else {
                this.$refs.console.style.height = '220px'
                this.consoleEnabled = true
            }
        },
    }
};
</script>

