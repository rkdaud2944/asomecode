<template>
    <div ref="console" style="overflow-y: scroll; height:200px;">
        <div v-for="(row, index) in rows" :key="index">
            {{ row }}
        </div>
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
            this.rows.push(data);
            if (this.rows.length > 256) {
                this.rows = this.rows.slice(-256);
            }

            this.$nextTick(() => {
                if (this.$refs.console) {
                    this.$refs.console.scrollTop = this.$refs.console.scrollHeight;
                }
            });
        });
    },

    methods: {
        send() {
            serial.writeLn(this.text);
            this.text = "";
        },
    }
};
</script>

