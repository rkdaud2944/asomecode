<template>
    <q-toolbar class="header-nav">
        <div class="main-logo" @click="this.$router.push({ path: `/`})">
            <img :src="logo" alt="logo" class="logo"/>
        </div>
    
        <div>
            <div class="control-btn-wrap">
                <span class="connect-btn Pretendard-Medium" @click="connect()">
                    <img :src="connectBtnImg"/>
                    연결하기
                </span>
                <span class="stop-btn Pretendard-Medium" @click="stop()">
                    <img :src="stopBtnImg"/> 
                    멈추기
                </span>
            </div>
        </div>
        <div class="nav">
            <span class="NotoSansKR-Regular nav-txt"><a @click="goToDownload" style="cursor: pointer;">자료실</a></span>
            <span class="NotoSansKR-Regular nav-txt"><a @click="goToQna" style="cursor: pointer;">도움말</a></span>
            <span class="NotoSansKR-Regular hamburger-wrap nav-txt">
                <div class="hamburger-icon">
                    <img :src="menu" class="menu-img"/>
                </div>
                <div class="dropdown-menu">
                    <ul>
                        <li class="menu-cts menu-title">
                            <p>MENU</p>
                        </li>
                        <li class="menu-cts li-connect" @click="connect()">
                            <img :src="connectImg"/>
                            <p>연결하기</p>
                        </li>
                        <li class="menu-cts" @click="stop()">
                            <img :src="stopImg"/>
                            <p>멈추기</p>
                        </li>
                        <li class="menu-cts" @click="openEditor('')">
                            <img :src="editorImg"/>
                            <p>소스편집</p>
                        </li>
                        <li class="menu-cts" @click="reboot()">
                            <img :src="restartImg"/>
                            <p>재부팅</p>
                        </li>
                        <li class="menu-cts" @click="format()">
                            <img :src="resetImg"/>
                            <p>포맷</p>
                        </li>
                        <li class="menu-cts" @click="toggleUpdateModal()">
                            <img :src="updateImg"/>
                            <p>업데이트</p>
                        </li>
                        <li class="menu-cts" @click="installDriver()">
                            <img :src="settingImg"/>
                            <p>드라이버 설치</p>
                        </li>
                    </ul>
                </div>
            </span>
            <div class="darken-background"></div>
        </div>
    </q-toolbar>
    
    <div class="update-modal" v-if="this.updateModal == true">
        <div @click="toggleUpdateModal()" style="color: black">X</div>
        <p style="color: black">업데이트할 교구를 클릭하세요.</p>
        <div>
            <q-btn @click="update('asomekit')" style="background-color: #E4007F; color: #fff; font-weight: 600; margin-right: 10px;">어썸킷</q-btn>
            <q-btn @click="update('asomebot')" style="background-color: #4EA949; color: #fff; font-weight: 600;">어썸봇</q-btn>
        </div>
    </div>
</template>

<script>
import images from "@/assets/images";
import serial from "@/globals/serial";
import VueBase from "@/mixin/vue-base";
import bridgeIn from "@/globals/bridge-in";
import eventbus from "@/globals/eventbus";
import boardUpdater from "@/globals/board-updater";
import ble from "@/globals/ble";
import { mapState } from 'pinia'
import {useConnectStore} from '@/store/connect-store'

export default {
    mixins: [VueBase, bridgeIn],

    computed: {
        ...mapState(useConnectStore,['mode','connectionState']),
    },

    data() {
        return {
            btConnectColor: "grey",

            logo: images.logo,
            connectImg: images.connect,
            editorImg: images.editor,
            resetImg: images.reset,
            restartImg: images.restart,
            stopImg: images.stop,
            updateImg: images.update,
            settingImg: images.setting,
            menu: images.menu,
            connectBtnImg: images.connectBtn,
            stopBtnImg: images.stopBtn,
            codes: null,

            isMenuOpen: false,
            connected: false,
            
            updateModal: false,
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
        
        eventbus.on('simulationOpen', (path) => {
            this.openRouterPath(path);
        });

        eventbus.on('simulationBus', (params) => {
            window.parent.postMessage(JSON.stringify(params), '*');
            this.simulJS(params);
            
        });
        
        window.addEventListener("message", (event) => {
            if (event.data === 'connect') {
                this.connect();
            }
        });
        
        window.addEventListener("message", (event) => {
            if (event.data.type === 'sttclose') { 
                serial.writeLn(event.data.text);
            }
        });
        window.addEventListener("message", (event) => {
            if (event.data === 'stop') {
                this.connect();
            }
        });
    },

    methods: {
        ...serial, ...bridgeIn,

        update(mode) {
            boardUpdater.start(mode);
            this.toggleUpdateModal();
        },
        
        showDropdown() { 
            document.getElementById('dropdown').style.display = 'block';
        },

        hideDropdown() {
            document.getElementById('dropdown').style.display = 'none';
        },

        bleConnect() {
            ble.connect();
        },
        
        bleSendData() {
            ble.runCode(`import hcsr04
hcsr04.open(3, 2)
red = OutputPin(11)
yellow = OutputPin(14)
green = OutputPin(15)
bright = OutputPin(20)
while True:
    cm = hcsr04.get_distance()
    if cm <= 5:
        red.on()
        delay(1)
        red.off()
    else :
        delay(0.5)`);
        },
        bleStop(){
            ble.writeLn(String.fromCharCode(3))
        },
        
        installDriver() {
            window.location.href = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/driver/CH341SER.zip";
        },
    
        toggleUpdateModal() {
            var bg = document.querySelector('.darken-background');
            if (this.updateModal) {
                this.updateModal = false;
                bg.style.display = 'none'

            } else {
                this.updateModal = true;
                bg.style.display = 'block'
            }
        },

        goToDownload() {
            window.open("https://asomeit.kr/download");
        },

        goToQna() {
            window.open("https://asomeit.imweb.me/faq");
        }
    },
}
</script>

<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>
