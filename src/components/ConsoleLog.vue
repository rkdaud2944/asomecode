<template>
    <div class="resizer" @mousedown="startResize"></div>
    <div>
        <div :style="{ height: consoleHeight + 'px' }" ref="console" class="q-pa-md" id="console">

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
    <div class="console-input">
        <p>입력</p>
        <q-input @keydown.enter.prevent="send" 
                @keydown.up.prevent="codeHistory('up')"
                @keydown.down.prevent="codeHistory('down')"
                filled
                v-model="text" 
                class="input">
        </q-input>
    </div>
</template>

<script>
import eventbus from "@/globals/eventbus";
import serial from "@/globals/serial";
import ble from "@/globals/ble";
import { mapState } from 'pinia'
import {useConnectStore} from '@/store/connect-store'
import VueBase from "@/mixin/vue-base";
import bridgeIn from "@/globals/bridge-in";

export default {
    mixins: [VueBase, bridgeIn],
    
    computed: {
        ...mapState(useConnectStore,['mode','connectionState']),
    },

    
    data() {
        return {
            timer: null,
            buffer: [],
            rows: [],
            text: "",
            consoleEnabled: true,
            resizing: false,
            consoleHeight: 100,
            startY: 0,
            arrow: false,
            
            inputHistory: [],
            currentIndex: -1, 
        };
    },
    mounted() {
        //ble
        eventbus.on("onBleConnected", () => {
            console.log("onBleConnected");
            this.rows = [];
        });
        eventbus.on("onBleDisconnected", () => {
            console.log("onBleDisconnected");
            this.rows = [];
        });
        eventbus.on("onBleReceived", async(data) => {
            console.log("onBleReceived");

            data = data.replaceAll(" ", "&nbsp;"); 
            data = data.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
            data = data.replaceAll(/\r?\n/g, "<br>");

            // 한글 디코딩
            data = this.decodeKoreanCharacters(data)
            
            this.buffer.push(await data);
        });


        //serial
        eventbus.on("onSerialConnected", () => {
            this.rows = [];
        });
        // eventbus.on("onSerialClosed", () => {
        //     this.rows = [];
        // });
        eventbus.on("onSerialReceived", (data) => {
            // TODO: 디버깅을 위해서 임시 주석 처리
            // if (data && (data.startsWith("###") || data.startsWith(">>> ###"))) {
            //     // console.log(data);
            //     return;
            // }

            data = data.replaceAll(" ", "&nbsp;");
            data = data.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");

            // 한글 디코딩
            data = this.decodeKoreanCharacters(data)
            
            this.buffer.push(data);
        });

        this.timer = setInterval(() => {
            if (this.buffer.length == 0) return;

            const filteredBuffer = this.buffer.filter(item => !item.startsWith("###"));
            this.rows = this.rows.concat(filteredBuffer);
            this.buffer = [];

            if (this.rows.length > 256) {
                this.rows = this.rows.slice(-256);
            }
        }, 500);

    },

    unmounted() {
        clearInterval(this.timer);
    },

    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                const consoleElement = this.$refs.console;
                if (consoleElement) {
                    consoleElement.scrollTop = consoleElement.scrollHeight;
                }
            });
        },
        onConsoleWindowControl() {
            if (this.consoleHeight >= 51) {
                this.consoleEnabled = true;
            } 
            else {
                this.consoleEnabled = false;
            }
            this.consoleHeight = this.consoleEnabled ? 50 : 100;
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
        },
        send() {
            // 입력 이력 추가
            if (this.text.trim() !== "") {
                this.inputHistory.unshift(this.text); 
                this.currentIndex = -1; 
            }

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
            
            if (this.text.startsWith("/blockcoding") || this.text.startsWith("/blockCoding")) {
                localStorage.removeItem("lessonBlock")
                this.openRouterPath('/blockCoding')
            }

            if(this.mode == 'ble'){
                ble.writeLn(this.text);
                this.text = "";
                return;
            }else{
                serial.writeLn(this.text);
                this.text = "";
            }
        },
        codeHistory(direction) {
            if (direction === 'up' && this.currentIndex + 1 < this.inputHistory.length) {
                this.currentIndex++;
                this.text = this.inputHistory[this.currentIndex]; 
            } else if (direction === 'down') {
                if (this.currentIndex - 1 >= 0) {
                this.currentIndex--;
                this.text = this.inputHistory[this.currentIndex];
                } else {
                this.currentIndex = -1;
                this.text = "";
                }
            }
        },
        decodeKoreanCharacters(str) {
            const koreanEncodedRegex = /{{(.*?)}}/g;
            return str.replace(koreanEncodedRegex, (match, p1) => {
                try {
                    return decodeURIComponent(p1);
                } catch (e) {
                    console.error('Decode error:', e);
                    return match; // 디코딩 실패 시 원본 반환
                }
            });
        },
    },

    watch: {   
        rows: {
            handler() {
                this.scrollToBottom();
            },
            deep: true 
        },
        consoleHeight : function(value){
            if (value >= 51) this.arrow = false;
        },
    },
};
</script>

<style scoped src="@/assets/css/component/console.css"/>
