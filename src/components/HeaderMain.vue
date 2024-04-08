<template>
    <nav class="header-nav">
        <div class="main-logo" @click="this.$router.push({ path: `/`})">
            <img :src="logo" alt="logo" class="logo"/>
        </div>
    
        <div>
            <!-- 현재 클릭만 하면 변경됨, 연결여부에 따라 표시하도록 수정 필요 (새로고침해도 유지되게)-->
            <!-- <div class="connect-false-wrap" v-show="this.connected === false" @click="this.connected = true"> -->
            <div class="control-btn-wrap">
                <span class="connect-btn Pretendard-Medium" @click="connect()">
                    <img :src="connectImg"/>
                    연결하기
                </span>
                <span class="stop-btn Pretendard-Medium" @click="stop()">
                    <img :src="stopImg"/> 
                    멈추기
                </span>
            </div>
        </div>
        <div class="nav">
            <span class="NotoSansKR-Regular nav-txt"><a :href="this.downloadLink" target="_blank">자료실</a></span>
            <span class="NotoSansKR-Regular nav-txt"><a :href="this.qnaLink" target="_blank">도움말</a></span>
            <span class="NotoSansKR-Regular hamburger-wrap nav-txt">
                <div class="hamburger-icon">
                    <!-- <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div> -->
                    <img :src="menu" class="menu-img"/>
                </div>
                
                <!-- <img src="@/assets/images/common/hamburger_menu.png"/> -->
                
                <!-- 드롭다운 메뉴 -->
                <div class="dropdown-menu">
                <!-- 메뉴 항목 -->
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
                        <!-- <li class="menu-cts" @click="update()"> -->
                            <img :src="updateImg"/>
                            <p>업데이트</p>
                        </li>
                        <li class="menu-cts">
                            <a href="https://asomecode-web.s3.ap-northeast-2.amazonaws.com/driver/CH341SER.zip" download>
                                <img :src="settingImg"/>
                                <p>드라이버 설치</p>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </span>
            
            <div class="darken-background"></div>
        </div>
    </nav>
    
    <div class="update-modal" v-if="this.updateModal == true">
    <!-- <div class="update-modal"> -->
        <div @click="toggleUpdateModal()">X</div>
        <p>업데이트할 교구를 클릭하세요.</p>
        <div>
            <q-btn @click="update('asomekit')" style="background-color: #E4007F; color: #fff; font-weight: 600; margin-right: 10px;">어썸킷</q-btn>
            <q-btn @click="update('asomebot')" style="background-color: #4EA949; color: #fff; font-weight: 600;">어썸봇</q-btn>
        </div>
    </div>
    
    <!-- 어두운 배경, v-show로 표시 여부 결정 -->
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
            codes: null,

            isMenuOpen: false,
            connected: false,
            
            downloadLink: "https://asomeit.kr/download",
            qnaLink: "https://asomeit.imweb.me/faq",

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
        // window.addEventListener("message", (event) => {
        //     if (event.data && typeof event.data === 'string' && event.data.includes('import')) {
        //         serial.runCode(event.data);
        //         return;
        //     }
        // });
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

        
        // window.addEventListener("message", (event) => {
        //     if (event.data === 'bleConnect') {
        //         ble.bleConnect();
        //     }
        // });
        

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

//     ble.runCode(`
// while True:
//     print(1)`);
        },
        bleStop(){
            console.log('bleStop');
            ble.writeLn(String.fromCharCode(3))
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
        }
    },
    

    
}
</script>

<!-- <style scoped src="@/assets/css/component/nav_bar.css"/> -->
<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>