<template>
    <div ref="console" class="q-pa-md" style="overflow-y: scroll; height:320px;">
        <div v-for="(row, index) in rows" :key="index" v-html="row"></div>
    </div>
    <q-input @keydown.enter.prevent="send" filled v-model="text">
        <template v-slot:prepend>
            <q-icon name="keyboard_arrow_right" />
        </template>
    </q-input>
</template>

<script>
import eventbus from "@/utils/eventbus";
import serial from "@/utils/serial";

export default {
    data() {
        return {
            timer: null,
            buffer: [],
            rows: [],
            text: "",
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
    }
};
</script>

