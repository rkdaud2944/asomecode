<template>
  <q-toolbar class="header-nav">
    <div class="main-logo" @click="goHome">
      <img :src="logo" alt="logo" class="logo" />
    </div>

    <!-- 중앙에 위치할 버튼 영역 -->
    <div class="control-btn-wrap">
      <span
        v-if="connectionState !== 'connected'"
        class="connect-btn Pretendard-Medium"
        @click="connect"
        @mouseover="onConnectBtnHover"
        @mouseleave="onConnectBtnLeave"
      >
        <img :src="currentConnectImg" />
        연결하기
        <span class="indicator disconnected"></span>
      </span>

      <span
        v-else
        class="connect-btn Pretendard-Medium connected"
        @click="disconnect"
        @mouseover="onConnectedBtnHover"
        @mouseleave="onConnectedBtnLeave"
      >
        <img :src="currentConnectImg" />
        연결해제
        <span class="indicator connected"></span>
      </span>

      <span
        class="stop-btn Pretendard-Medium"
        @click="stop"
        @mouseover="onStopBtnHover"
        @mouseleave="onStopBtnLeave"
        @mousedown="onStopBtnActive"
        @mouseup="onStopBtnHover"
      >
        <img :src="navstopImg" />
        멈추기
      </span>
    </div>

    <div class="nav">
      <span @click="goToBlockCoding" class="NotoSansKR-Regular nav-txt">
        <a style="cursor: pointer;">블록코딩</a>
      </span>
      <span @click="goToDownload" class="NotoSansKR-Regular nav-txt">
        <a style="cursor: pointer;">자료실</a>
      </span>
      <span @click="goToQna" class="NotoSansKR-Regular nav-txt">
        <a style="cursor: pointer;">도움말</a>
      </span>

      <span class="NotoSansKR-Regular hamburger-wrap nav-txt">
        <div class="hamburger-icon">
          <img :src="menu" class="menu-img" />
        </div>
        <div class="dropdown-menu">
          <ul>
            <li class="menu-cts menu-title">
              <p>MENU</p>
            </li>
            <li class="menu-cts li-connect" @click="connect">
              <img :src="connectImg" />
              <p>연결하기</p>
            </li>
            <li class="menu-cts" @click="stop">
              <img :src="stopImg" />
              <p>멈추기</p>
            </li>
            <li class="menu-cts" @click="openEditor('')">
              <img :src="editorImg" />
              <p>소스편집</p>
            </li>
            <li class="menu-cts" @click="reboot">
              <img :src="restartImg" />
              <p>재부팅</p>
            </li>
            <li class="menu-cts" @click="format">
              <img :src="resetImg" />
              <p>포맷</p>
            </li>
            <li class="menu-cts" @click="toggleUpdateModal">
              <img :src="updateImg" />
              <p>업데이트</p>
            </li>
            <li class="menu-cts" @click="installDriver">
              <img :src="settingImg" />
              <p>드라이버 설치</p>
            </li>
            <!-- <li class="menu-cts" @click="goToBlockCoding">
              <img :src="blockImg" />
              <p>블록코딩</p>
            </li> -->
          </ul>
        </div>
      </span>

      <div class="darken-background"></div>
    </div>
  </q-toolbar>

  <div class="update-modal" v-if="updateModal">
    <div @click="toggleUpdateModal()" style="color: black">X</div>
    <p style="color: black">업데이트할 교구를 클릭하세요.</p>
    <div>
      <q-btn
        @click="update('asomekit')"
        style="background-color: #E4007F; color: #fff; font-weight: 600; margin-right: 10px;"
      >
        어썸킷
      </q-btn>
      <q-btn
        @click="update('asomebot')"
        style="background-color: #4EA949; color: #fff; font-weight: 600;"
      >
        어썸봇
      </q-btn>
    </div>
  </div>

  <!-- BLE 스캔 버튼 및 모달 -->
  <div>
    <button @click="startScan">BLE 스캔 시작</button>

    <div v-if="showModal" class="ble-modal Pretendard-Medium">
      <div class="ble-modal-content">
        <h6>기기를 선택하세요</h6>
        <select v-model="selectedDevice">
          <option
            v-for="device in bleDevices"
            :key="device.id"
            :value="device.id"
          >
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
import { mapState } from 'pinia';
import { useConnectStore } from '@/store/connect-store';
import seiral from "@/globals/serial";

export default {
  mixins: [VueBase, bridgeIn],

  computed: {
    ...mapState(useConnectStore, ['mode', 'connectionState']),
  },

  data() {
    return {
      btConnectColor: "grey",
      logo: images.logo,
      menu: images.menu,

      connect_default: images.connect_default,   
      connect_hover: images.connect_hover,      
      connect_click: images.connect_click,      
      connect_variant: images.connect_variant,  
      stop_default: images.stop_default,      
      stop_hover: images.stop_hover,       
      stop_click: images.stop_click,   

      currentConnectImg: images.connect_default,
      navstopImg: images.stop_default,      

      stopBtnImg: images.stopBtn,
      connectImg: images.connect,
      editorImg: images.editor,
      resetImg: images.reset,
      restartImg: images.restart,
      stopImg: images.stop,
      updateImg: images.update,
      settingImg: images.setting,
      blockImg: images.block,
      asomebotBtnImg: images.asomebotBtnImg,
      asomekitBtnImg: images.asomekitBtnImg,
      asomecarBtnImg: images.asomecarBtnImg,

      isMenuOpen: false,
      connected: false,
      updateModal: false,
      showOptions: false,
      bleDevices: [],
      selectedDevice: null,
      showModal: false,
      isUpdating: false,
      canCancel: false,
    };
  },

  created() {
    eventbus.on("onBleScan", (deviceData) => {
      if (!this.bleDevices.some((device) => device.id === deviceData.id)) {
        this.bleDevices.push(deviceData);
      }
    });
    eventbus.on("onUpdateStart", this.handleUpdateStart);
    eventbus.on("onUpdateProgress", this.handleUpdateProgress);
    eventbus.on("onUpdateComplete", this.handleUpdateComplete);
  },

  mounted() {
    eventbus.on("onSerialConnected", () => {
      this.btConnectColor = "primary";
    });
    eventbus.on("onSerialClosed", () => {
      this.btConnectColor = "grey";
      this.$q.notify('어썸보드 연결이 끊어졌습니다.');
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
    ...serial,
    ...bridgeIn,

    goHome() {
      this.$router.push({ path: `/` });
    },

    connect() {
      seiral.connect();
      this.currentConnectImg = this.connect_click;
    },
    disconnect() {
      seiral.disconnect();
      this.currentConnectImg = this.connect_default;
    },

    onConnectBtnHover() {
      this.currentConnectImg = this.connect_hover;
    },
    onConnectBtnLeave() {
      this.currentConnectImg = this.connect_default;
    },

    onConnectedBtnHover() {
      this.currentConnectImg = this.connect_variant;
    },
    onConnectedBtnLeave() {
      this.currentConnectImg = this.connect_click;
    },

    onStopBtnHover() {
      this.navstopImg = images.stop_hover;
    },
    onStopBtnLeave() {
      this.navstopImg = images.stop_default;
    },
    onStopBtnActive() {
      this.navstopImg = images.stop_click;
    },

    async update(mode) {
      if (this.connectionState !== 'connected') {
        this.$q.notify({
          type: 'warning',
          message: '교구가 연결되어 있지 않습니다. 연결을 시도해주세요.',
        });
        this.startScan();
        return;
      }
      this.toggleUpdateModal();
      boardUpdater.start(mode);
    },

    startScan() {
      this.showModal = true;
      this.bleDevices = [];
      ble.bleScan();
    },
    cancelScan() {
      this.showModal = false;
      this.bleDevices = [];
      this.selectedDevice = null;
      ble.stopScanning();
    },
    selectDevice() {
      if (this.selectedDevice) {
        ble.connectToSelectedDevice(this.selectedDevice);
      }
    },

    installDriver() {
      window.location.href = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/driver/CH341SER.zip";
    },

    toggleUpdateModal() {
      this.updateModal = !this.updateModal;
    },

    goToDownload() {
      window.open("https://asomeit.kr/download");
    },
    goToQna() {
      window.open("https://asomeit.imweb.me/faq");
    },
    goToBlockCoding() {
      localStorage.removeItem("lessonBlock");
      this.openRouterPath('/blockCoding');
    },

    handleUpdateStart() {
      this.isUpdating = true;
    },
    handleUpdateComplete() {
      this.isUpdating = false;
      this.$q.notify({
        type: 'positive',
        message: '업데이트가 완료되었습니다.',
      });
    },
    cancelUpdate() {
      this.isUpdating = false;
      this.$q.notify({
        type: 'warning',
        message: '업데이트가 취소되었습니다.',
      });
    },
  },
};
</script>

<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>

<style scoped>
/* BLE 모달 스타일 */
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

/* 업데이트 모달 스타일 */
.update-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 400px;
}
.modal-header {
  display: flex;
  justify-content: flex-end;
}
.close-button {
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
.modal-message {
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  color: #333;
}
.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.update-button {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}
.update-button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 10px;
}
.button-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.not-connected-message {
  text-align: center;
}
.not-connected-message p {
  margin-bottom: 20px;
  color: #ff5722;
}

/* 툴바의 중앙 버튼 영역: 항상 가운데 정렬 */
.control-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 기타 버튼 스타일 */
.connect-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  padding: 6px 12px;
  color: #fff;
  margin-right: 8px;
  transition: background-color 0.2s;
  width: auto;
}

.connect-btn:not(.connected) {
  background-color: #E4007F; 
}
.connect-btn:not(.connected):hover {
  background-color: #EF60AF;
}

.connect-btn.connected {
  background-color: #4F4F53;
}
.connect-btn.connected:hover {
  background-color: #7E7E83;
}

.connect-btn img {
  margin-right: 6px;
}

.stop-btn {
  display: inline-flex;
  align-items: center;
  background-color: #e0e0e0;
  color: #333;
  padding: 6px 12px;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.2s;
}

.indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 8px;
}
.indicator.disconnected {
  background-color: #fff;
}

.indicator.connected {
  background-color: #00ff00;
}

.stop-btn {
  display: inline-flex;
  align-items: center;
  background-color: #DEDEE2; 
  color: #4F4F53;           
  padding: 6px 12px;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.2s, color 0.2s;
}

.stop-btn img {
  fill: currentColor;
  transition: fill 0.2s;
}

.stop-btn:hover {
  background-color: #F0F0F0;
  color: #7E7E83;
}

.stop-btn:active {
  background-color: #AEAEB4;
  color: #4F4F53;
}
</style>
