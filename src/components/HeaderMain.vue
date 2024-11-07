<template>
    <q-toolbar class="header-nav">
        <div class="main-logo" @click="this.$router.push({ path: `/`})">
            <img :src="logo" alt="logo" class="logo"/>
        </div>
    
        <div>
            <div class="control-btn-wrap">
                <span class="connect-btn Pretendard-Medium" @mouseenter="showConnectOptions" @mouseleave="hideConnectOptions">
                    <img :src="connectBtnImg" />
                    연결하기
                    <div v-if="showOptions" class="connect-options">
                        <span class="option" @click="connect()">유선 연결</span>
                        <span class="option" @click="startScan()">무선 연결</span>
                    </div>
                </span>
                <span class="stop-btn Pretendard-Medium" @click="stop()">
                    <img :src="stopBtnImg" />
                    멈추기
                </span>
            </div>
        </div>
        <div class="nav">
            <span @click="goToDownload" class="NotoSansKR-Regular nav-txt"><a style="cursor: pointer;">자료실</a></span>
            <span @click="goToQna" class="NotoSansKR-Regular nav-txt"><a style="cursor: pointer;">도움말</a></span>
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

    <!-- ble 모달 -->    
    <div>
        <button @click="startScan">BLE 스캔 시작</button>
        
        <!-- BLE 장치 선택 모달 -->
        <div v-if="showModal" class="ble-modal Pretendard-Medium">
            <div class="ble-modal-content">
                <h6>기기를 선택하세요</h6>
                <select v-model="selectedDevice">
                <option v-for="device in bleDevices" :key="device.id" :value="device.id">
                    {{ device.name }}
                </option>
                </select>
                <div class="ble-modal-actions">
                    <button @click="cancelScan">취소</button>
                    <button @click="selectDevice">연결</button>
                </div>
            </div>
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
            showOptions: false,            
                    
            bleDevices: [],
            selectedDevice: null,
            showModal: false
        } 
    },

    created() {
        eventbus.on("onBleScan", (deviceData) => {
            console.log("BLE 장치 발견:", deviceData);
            if (!this.bleDevices.some(device => device.id === deviceData.id)) {
                this.bleDevices.push(deviceData);
            }
        });
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
        
        eventbus.on('aiContentsOpen', (path) => {
            this.openRouterPath(path);
        });


        eventbus.on('simulationBus', (params) => {
            window.parent.postMessage(JSON.stringify(params), '*');
            this.simulJS(params);
            
        });
        
        eventbus.on("onBleScanStart", () => {
            this.btConnectColor = "primary";
            this.$q.notify('BLE 스캔이 시작되었습니다.');
        });
        
        eventbus.on("onBleScanStopped", () => {
            this.btConnectColor = "grey";
            this.$q.notify('BLE 스캔이 중지되었습니다.');
        });
        
        eventbus.on("onBleConnected", () => {
            this.btConnectColor = "primary";
            this.$q.notify('무선 연결이 완료되었습니다.');
            this.showModal = false;
            // ble.writeLn("/r/n");
        });
        
        eventbus.on("bleDisconnect", () => {
            this.btConnectColor = "grey";
            this.$q.notify('무선 연결이 끊어졌습니다.');
        });

        eventbus.on("onBleConnectError", (error) => {
            this.btConnectColor = "grey";
            this.$q.notify('연결 실패 : ',error);
        });
        
        eventbus.on("bleSendDataError", (error) => {
            this.btConnectColor = "grey";
            this.$q.notify('데이터 전송 실패 : ',error);
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

        startScan() {
            this.showModal = true;
            this.bleDevices = []; // 이전 스캔 결과 초기화
            ble.bleScan(); // BLE 스캔 시작
        },

        cancelScan() {
            this.showModal = false;
            this.bleDevices = []; // 장치 목록 초기화
            this.selectedDevice = null;
            ble.stopScanning(); // 스캔 중지
        },
        
        selectDevice() {
            console.log("선택된 장치 ID:", this.selectedDevice);
            if (this.selectedDevice) {
                ble.connectToSelectedDevice(this.selectedDevice)
                    // .then(() => {
                    //     this.$q.notify('BLE 장치에 성공적으로 연결되었습니다.');
                    //     this.bleDevices = []; // 목록 초기화
                    // })
                    // .catch((error) => {
                    //     this.$q.notify('BLE 장치 연결에 실패했습니다.');
                    //     console.error("연결 실패:", error);
                    // });
            }
        },

        showConnectOptions() {
            this.showOptions = true;
        },

        hideConnectOptions() {
            this.showOptions = false;
        },

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
        
        bleSendData(code) {
            // ble.runCode(code);
            ble.writeLn(code);
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
        },
        
    },
}
</script>

<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>

<style scoped>
/* 모달 스타일 */
.ble-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.ble-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
}
.ble-modal-content h6 {
  color: black;
}
.ble-modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>