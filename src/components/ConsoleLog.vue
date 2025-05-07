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
  import { useConnectStore } from '@/store/connect-store'
  import VueBase from "@/mixin/vue-base";
  import bridgeIn from "@/globals/bridge-in";
  import boardUpdater from "@/globals/board-updater";
  
  // Electron의 dialog 모듈을 사용하기 위해 require (nodeIntegration이 활성화된 경우)
  const { remote } = require('electron');
  
  export default {
    mixins: [VueBase, bridgeIn],
    
    computed: {
      ...mapState(useConnectStore, ['mode', 'connectionState']),
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
      // ble
      eventbus.on("onBleConnected", () => {
        this.rows = [];
      });
      eventbus.on("onBleDisconnected", () => {
        this.rows = [];
      });
      eventbus.on("onBleReceived", (data) => {
        data = data.replaceAll(" ", "&nbsp;"); 
        data = data.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
  
        // 한글 디코딩
        data = this.decodeKoreanCharacters(data)
        
        this.buffer.push(data);
      });
  
      // serial
      eventbus.on("onSerialConnected", () => {
        this.rows = [];
      });
      eventbus.on("onSerialReceived", (data) => {
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
        
        const trimmedText = this.text.trim();
        const tokens = trimmedText.split(" ");
  
        // 정확한 명령어 비교
        
        if (trimmedText === "/list") {
          serial.listFiles();
          this.text = "";
          return;
        }
        
        if (tokens[0] === "/view" && tokens.length === 2) {
          serial.viewFile(tokens[1]);
          this.text = "";
          return;
        }
        
        if (tokens[0] === "/run" && tokens.length === 2) {
          serial.runFile(tokens[1]);
          this.text = "";
          return;
        }
        
        if (tokens[0] === "/del" && tokens.length === 2) {
          serial.deleteFile(tokens[1]);
          this.text = "";
          return;
        }
        
        if (trimmedText === "/blockcoding" || trimmedText === "/blockCoding") {
          localStorage.removeItem("lessonBlock")
          this.openRouterPath('/blockCoding')
          this.text = "";
          return;
        }
        
        if (trimmedText === "/go qc") {
          this.$router.push('/GoqcPage');
          this.text = "";
          return;
        }  

        if (trimmedText === "/auto") {
          this.$router.push('/AutomaticProgram');
          this.text = "";
          return;
        }
        
        if (trimmedText === "/update weather") {
          boardUpdater.start('weather');
          this.text = "";
          return;
        }
        
        if (trimmedText === "/ver" || trimmedText === "/버전") {
          remote.dialog.showMessageBox({
            type: 'info',
            title: 'AsomeCode',
            message: 'AsomeCode: 2.0.9 version',
            // buttons: ['확인']
          });
          this.text = "";
          return;
        }
        
        // 명령어에 해당되지 않는 경우
        if(this.mode === 'ble'){
          ble.writeLn(this.text);
        } else {
          serial.writeLn(this.text);
        }
        this.text = "";
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
      // 한글 디코딩 함수
      decodeKoreanCharacters(str) {
        const koreanEncodedRegex = /{{(.*?)}}/g;
        return str.replace(koreanEncodedRegex, (match, p1) => {
          try {
            return decodeURIComponent(p1);
          } catch (e) {
            console.error('Decode error:', e);
            return match;
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
      consoleHeight(value) {
        if (value >= 51) this.arrow = false;
      },
    },
  };
  </script>
  
  <style scoped src="@/assets/css/component/console.css"/>
  