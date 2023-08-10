<template>
    <div class="resizer" @mousedown="startResize"></div>
        <div>
            <div :style="{ height: consoleHeight + 'px' }" ref="console resizable" class="q-pa-md" id="console">
                <q-page-sticky :offset="[20, -40]">
                    <q-expansion-item v-model="arrow" class="shadow-1 overflow-hidden" dense
                        style="border-radius: 30px; width: 40px;"
                        switch-toggle-side
                        header-class="bg-white text-black"
                        @click="onConsoleWindowControl">
                    </q-expansion-item>
                </q-page-sticky>
                <div v-for="(row, index) in rows" :key="index" v-html="row">
                </div>
            </div>
        </div>
    <q-input @keydown.enter.prevent="send" filled v-model="text">
        <template v-slot:prepend>
            <q-icon name="keyboard_arrow_right" />
        </template>
    </q-input>
</template>

<script>
import eventbus from "@/globals/eventbus";
// import serial from "@/globals/serial";

export default {
    
    data() {
        return {
            timer: null,
            buffer: [],
            rows: [],
            text: "",
            consoleEnabled: true,
            resizing: false,
            consoleHeight: 220,
            startY: 0,
            arrow: false,
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
        onConsoleWindowControl() {
            if (this.consoleHeight >= 51) {
                this.consoleEnabled = true;
            } 
            else {
                this.consoleEnabled = false;
            }
            this.consoleHeight = this.consoleEnabled ? 50 : 220;          
        },
        startResize(e) {
            this.resizing = true
            this.startY = e.clientY
            window.addEventListener('mousemove', this.resizeHandler)
            window.addEventListener('mouseup', this.stopResize)
        },
        resizeHandler(e) {
            if (this.resizing) {
                const consoleHeight = this.consoleHeight - (e.clientY - this.startY)
                this.consoleHeight = Math.max(100, consoleHeight)
                this.startY = e.clientY
            }
        },
        stopResize() {
            this.resizing = false
            window.removeEventListener('mousemove', this.resizeHandler)
            window.removeEventListener('mouseup', this.stopResize)
        }
        ,
        send() {

            if (this.text.startsWith("/list")) {
                // serial.listFiles();
                this.text = "";
                return;
            }

            if (this.text.startsWith("/view")) {
                // serial.viewFile(this.text.split(" ")[1]);
                this.text = "";
                return;
            }

            // serial.writeLn(this.text);
            this.text = "";
        },
    },

    watch: {
        consoleHeight : function(value){
            if (value >= 51) this.arrow = false;
        },
    },
};
</script>

<style scoped src="@/assets/css/component/console.css"/>
