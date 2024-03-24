<template>
    <nav class="header-nav">
        <div class="main-logo" @click="this.$router.push({ path: `/`})">
            <img :src="logo" alt="logo" class="logo"/>
        </div>
        
        <p  @click="openRouterPath('/blockCoding')">
            Block 
        </p>

        <router-outlet></router-outlet>
        <!-- dice -->
        <p @click="openRouterPath('/simulation/dice')"> 시뮬테스트</p>
    
        <div>
            <!-- 현재 클릭만 하면 변경됨, 연결여부에 따라 표시하도록 수정 필요 (새로고침해도 유지되게)-->
            <div class="connect-false-wrap" v-show="this.connected === false" @click="this.connected = true">
                <span class="connect" @click="connect()">
                    <img :src="connectImg"/>
                    연결하기
                </span>
                <span class="stop" @click="stop()">
                    <img :src="stopImg"/>
                    멈추기
                </span>
            </div>
            
            <div class="connect-true-wrap" v-show="this.connected === true" @click="this.connected = false">
                <span class="connect">
                    <img :src="connectImg" @click="connect()"/>
                    연결하기
                </span>
                <span class="stop">
                    <img :src="stopImg" @click="stop()"/>
                    멈추기
                </span>
            </div>
        </div>
        <div class="nav">
            <span class="NotoSansKR-Regular nav-txt">자료실</span>
            <span class="NotoSansKR-Regular nav-txt">도움말</span>
            <span class="NotoSansKR-Regular hamburger-wrap nav-txt">
                <div class="hamburger-icon">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                
                <!-- <img src="@/assets/images/common/hamburger_menu.png"/> -->
                
                <!-- 드롭다운 메뉴 -->
                <div class="dropdown-menu">
                <!-- 메뉴 항목 -->
                    <ul>
                        <li class="li menu-title">
                            <p>MENU</p>
                        </li>
                        <li class="li">
                            <img :src="connectImg"/>
                            <p>연결하기</p>
                        </li>
                        <li class="li">
                            <img :src="stopImg"/>
                            <p>멈추기</p>
                        </li>
                        <li class="li" @click="openRouterPath('editor')">
                            <img :src="editorImg"/>
                            <p>소스편집</p>
                        </li>
                        <li class="li">
                            <img :src="updateImg"/>
                            <p>업데이트</p>
                        </li>
                        <li class="li">
                            <img :src="restartImg"/>
                            <p>재부팅</p>
                        </li>
                        <li class="li">
                            <img :src="resetImg"/>
                            <p>포맷</p>
                        </li>
                        <li class="li">
                            <img :src="settingImg"/>
                            <p>설정</p>
                        </li>
                    </ul>
                </div>
                
            </span>
            
            <div class="darken-background"></div>
        </div>
    </nav>
    
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
            codes: null,

            isMenuOpen: false,
            connected: false
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
        
        // const menu=document.querySelector(".toggle");
        // const subBar=document.querySelector(".menu>.sub");

        // let subToggle=true

        // function slide_menu() {
        //     if (subToggle){
        //         subBar.style.display="block";
        //         subBar.classList.remove("up");
        //         subBar.classList.add("down");
        //         subToggle=!subToggle;
        //     } else {
        //         subBar.classList.remove("down");
        //         subBar.classList.add("up");
        //         subToggle=!subToggle;
        //     }
        //     console.log(subBar.classList);
        // }
        // menu.addEventListener("click",slide_menu);

        window.addEventListener("message", (event) => {
            if (event.data === 'connect') {
                this.connect();
            }
        });
        window.addEventListener("message", (event) => {
            if (event.data && typeof event.data === 'string' && event.data.includes('import')) {
                serial.runCode(event.data);
                return;
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

        
        // window.addEventListener("message", (event) => {
        //     if (event.data === 'bleConnect') {
        //         ble.bleConnect();
        //     }
        // });
        

    },

    methods: {
        ...serial, 

        update() {
            boardUpdater.start();
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
    },
    
    // toggleMenu() {
    //     this.isMenuOpen = !this.isMenuOpen;
    // }
}
</script>

<!-- <style scoped src="@/assets/css/component/nav_bar.css"/> -->
<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>