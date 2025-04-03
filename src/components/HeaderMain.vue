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
        @click="startScan"
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
            <li class="menu-cts" @click="openUpdateModal">
              <img :src="updateImg" />
              <p>업데이트</p>
            </li>
            <li class="menu-cts" @click="installDriver">
              <img :src="settingImg" />
              <p>드라이버 설치</p>
            </li>
            <!-- <li class="menu-cts" @click="goToAutomaticProgram">
              <img :src="settingImg" />
              <p>자동실행</p>
            </li> -->
          </ul>
        </div>
      </span>

      <div class="darken-background"></div>
    </div>
  </q-toolbar>

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

  
  <div v-if="isUpdating" class="update-modal">
    <div class="update-modal-content">
      <!-- 상단 제목 -->
      <h2 class="update-title" style="font-family: 'Pretendard-Regular';">업데이트 진행 중</h2>
      
      <div style="width: 80%; border-bottom: 1px solid #D8D8D8; margin: 16px 0; text-align: center; display: block; margin-left: auto; margin-right: auto;"></div>
      <!-- 구분선 -->
      <div class="update-divider"></div>
      <!-- 물방울 애니메이션 -->
      <div class="animation">
        <div class="anim3"></div>
      </div>
      <!-- 안내 문구 -->
      <p class="update-desc" style="font-family: 'Pretendard-Regular';">
        업데이트를 진행합니다.<br />
        잠시만 기다려주세요.
      </p>
    </div>
  </div>

</template>

<script>
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
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

// Electron의 shell 모듈을 불러옵니다.
const { shell } = require('electron');

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
      // asomecarBtnImg: images.asomecarBtnImg,
      isMenuOpen: false,
      connected: false,

      // BLE 관련
      bleDevices: [],
      selectedDevice: null,
      showModal: false,

      // 업데이트 관련
      isUpdating: false,
      canCancel: false,
    };
  },
  created() {
    // BLE 스캔 이벤트
    eventbus.on("onBleScan", (deviceData) => {
      if (!this.bleDevices.some((device) => device.id === deviceData.id)) {
        this.bleDevices.push(deviceData);
      }
    });
    // 업데이트 이벤트
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
    eventbus.on("onSerialpp", () => {
      this.btConnectColor = "grey";
      this.$q.notify('어썸보드가 다른곳에 연결되어있습니다 다시 연결해주세요.');
    });

    eventbus.on('simulationOpen', (path) => {
      this.openRouterPath(path);
    });

    eventbus.on('simulationBus', (params) => {
      window.parent.postMessage(JSON.stringify(params), '*');
      this.simulJS(params);
    });
    
    eventbus.on('aiContentsOpen', (path) => {
      console.log(9999)
      this.openRouterPath(path);
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
    });

    eventbus.on("bleDisconnect", () => {
      this.btConnectColor = "grey";
      this.$q.notify('무선 연결이 끊어졌습니다.');
    });

    eventbus.on("onBleConnectError", (error) => {
      this.btConnectColor = "grey";
      this.$q.notify('연결 실패 : ' + error);
    });

    eventbus.on("bleSendDataError", (error) => {
      this.btConnectColor = "grey";
      this.$q.notify('데이터 전송 실패 : ' + error);
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
      this.$router.push({ path: '/' });
    },
    // 연결하기
    connect() {
      seiral.connect();
      this.currentConnectImg = this.connect_click;
      // 1초 후 멈추기 버튼 효과 (>>> 표시때문)
      setTimeout(() => {
        this.onStopBtnActive();
        setTimeout(() => {
          this.onStopBtnHover();
        }, 200);
        this.stop();
      }, 50);
    },
    // 연결해제
    disconnect() {
      seiral.disconnect();
      this.currentConnectImg = this.connect_default;
    },
    // 호버/리브
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
      this.navstopImg = this.stop_hover;
    },
    onStopBtnLeave() {
      this.navstopImg = this.stop_default;
    },
    onStopBtnActive() {
      this.navstopImg = this.stop_click;
    },
    // 멈추기
    // stop() {
    //   console.log("Stop command triggered.");
    // },
    // 업데이트 모달 열기
    openUpdateModal() {
      if (this.connectionState !== 'connected') {
        Swal.fire({
          icon: undefined,
          html: `<h2 style="font-size: 18px; font-weight: 600; color: #E4007F; margin-bottom: 10px; font-family: 'Pretendard-Regular';">업데이트할 교구를 연결하세요.</h2>
                 <div style="width: 100%; border-bottom: 1px solid #D8D8D8; margin: 16px 0;"></div>
                 <p style="color: #979797; line-height: 1.4; margin-bottom: 24px; font-size: 14px; font-family: 'Pretendard-Regular';">
                   교구가 연결되어 있지 않습니다.<br/>업데이트를 진행하려면 교구를 연결해주세요.
                 </p>`,
          showConfirmButton: true,
          confirmButtonText: '연결하기',
          showCancelButton: true,
          cancelButtonText: '닫기',
          buttonsStyling: false,
          customClass: {
            popup: 'swal-custom-popup',
            confirmButton: 'swal-connect-button',
            cancelButton: 'swal-stop-button',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            this.connect();
          }
        });
      } else {
        // 업데이트 진행 전 교구 선택 모달
        let selectedTool = null;
        Swal.fire({
          width: 560,
          title: '',
          html: `<h2 style="font-family: 'Pretendard-Regular'; font-size: 18px; font-weight: 600; color: #E4007F; margin: 0 0 10px 0;">업데이트할 교구를 선택하세요.</h2>
                 <div style="width: 100%; border-bottom: 1px solid #D8D8D8; margin: 16px 0;"></div>
                 <div style="margin-bottom: 16px; display: flex; justify-content: center;">
                   <div style="position: relative; width: 60%; max-width: 280px;">
                     <input id="searchInput" type="text" placeholder="교구명, 프로젝트명 검색" style="font-family: 'Pretendard-Regular'; width: 100%; box-sizing: border-box; padding: 8px 36px 8px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px;" />
                     <img src="https://cdn-icons-png.flaticon.com/512/49/49116.png" alt="search" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; opacity: 0.6;" />
                   </div>
                 </div>
                 <div class="swal-update-grid" style="display: grid; grid-template-columns: repeat(3, 180px); grid-row-gap: 16px; grid-column-gap: 16px; justify-content: center; min-height: 136px; overflow: hidden;">
                   <div id="btnAsomeBot" class="swal-update-item" style="border: 1px solid #D8D8D8; border-radius: 8px; width: 180px; height: 60px; display: flex; align-items: center; padding: 8px 10px; cursor: pointer;">
                     <img src="${this.asomebotBtnImg}" alt="asomebot" style="width: 36px; height: 36px;" />
                     <div style="margin-left: 10px; display: flex; flex-direction: column;">
                       <div style="font-family: 'Pretendard-Regular'; font-size: 12px; color: #979797;">AsomeIT</div>
                       <div style="font-family: 'Pretendard-Regular'; font-size: 14px; color: #4F4F53;">어썸봇</div>
                     </div>
                   </div>
                   <div id="btnAsomeKit" class="swal-update-item" style="border: 1px solid #D8D8D8; border-radius: 8px; width: 180px; height: 60px; display: flex; align-items: center; padding: 8px 10px; cursor: pointer;">
                     <img src="${this.asomekitBtnImg}" alt="asomekit" style="width: 36px; height: 36px;" />
                     <div style="margin-left: 10px; display: flex; flex-direction: column;">
                       <div style="font-family: 'Pretendard-Regular'; font-size: 12px; color: #979797;">AsomeIT</div>
                       <div style="font-family: 'Pretendard-Regular'; font-size: 14px; color: #4F4F53;">어썸키트</div>
                     </div>
                   </div>
                 </div>`,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonText: '진행하기',
          cancelButtonText: '닫기',
          buttonsStyling: false,
          customClass: {
            popup: 'swal-update-popup',
            confirmButton: 'swal-connect-button',
            cancelButton: 'swal-stop-button',
          },
          didOpen: () => {
            // 카드 클릭 시 선택 효과 처리
            const onClickTool = (toolName) => {
              selectedTool = toolName;
              document.querySelectorAll('.swal-update-item').forEach(el => {
                el.classList.remove('swal-item-selected');
              });
              const elem = document.getElementById('btn' + toolName);
              if (elem) {
                elem.classList.add('swal-item-selected');
              }
            };

            document.getElementById('btnAsomeBot')
              .addEventListener('click', () => onClickTool('AsomeBot'));
            document.getElementById('btnAsomeKit')
              .addEventListener('click', () => onClickTool('AsomeKit'));

            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
              const filter = searchInput.value.trim().toLowerCase();
              document.querySelectorAll('.swal-update-item').forEach(item => {
                if (item.innerText.toLowerCase().includes(filter)) {
                  item.style.display = 'flex';
                } else {
                  item.style.display = 'none';
                }
              });
            });
          },
        }).then((result) => {
          if (result.isConfirmed) {
            if (!selectedTool) {
              Swal.fire({
                icon: 'warning',
                text: '교구를 선택해주세요.',
                confirmButtonText: '확인',
                buttonsStyling: false,
                customClass: {
                  popup: 'swal-custom-popup',
                  confirmButton: 'swal-connect-button'
                },
              });
              return;
            }
            let mode;
            switch (selectedTool) {
              case 'AsomeBot':    mode = 'asomebot';    break;
              case 'AsomeKit':    mode = 'asomekit';    break;
              default:            mode = 'asomebot';
            }
            this.update(mode);
          }
        });
      }
    },
    // 실제 업데이트
    update(mode) {
      boardUpdater.start(mode);
    },
    // BLE 스캔
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
    showConnectOptions() {
      this.showOptions = true;
    },
    hideConnectOptions() {
      this.showOptions = false;
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
      ble.writeLn(code);
    },
    bleStop() {
      ble.writeLn(String.fromCharCode(3));
    },
    
    installDriver() {
      window.location.href = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/driver/CH341SER.zip";
    },
    goToDownload() {
      // 자료실을 외부 브라우저로 엽니다.
      shell.openExternal("https://asomeit.kr/download");
    },
    goToQna() {
      // 도움말을 외부 브라우저로 엽니다.
      shell.openExternal("https://asomeit.imweb.me/faq");
    },
    goToBlockCoding() {
      localStorage.removeItem("lessonBlock");
      this.openRouterPath('/blockCoding');
    },
    goToAutomaticProgram() {
      // localStorage.removeItem("lessonBlock");
      this.$router.push('/AutomaticProgram');
    },

    handleUpdateStart() {
      this.isUpdating = true;
    },
    handleUpdateProgress(progress) {
      console.log("Progress:", progress);
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
/* BLE 모달 */
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
.ble-modal-content select {
    display: block;
    max-height: 30px; /* 안먹히는 것 같음 */
    overflow-y: auto;
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.ble-modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* 업데이트 모달 */
.update-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}


.update-modal-content {
  background-color: #fff;
  width: 300px;
  padding: 20px 16px;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
}


/* ----- 제목, 본문 스타일 ----- */
.update-title {
  margin: 0 0 16px 0;
  color: #E4007F;
  font-size: 18px;
  font-weight: 600;
}
.update-desc {
  margin: 16px 0 0 0;
  color: #4F4F53;
  line-height: 1.4;
  font-size: 14px;
}

/* ----- 물방울 애니메이션 컨테이너 ----- */
.animation {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  border: none;
  float: none;
}

/* ----- 물방울 애니메이션 (기존 .anim3 그대로 유지) ----- */
.anim3:before {
  display: block;
  width: 24px;
  height: 24px;
  margin-top: -5px;
  border: 2px solid #e4007f;
  background-color: #e4007f;
  content: "";
  -webkit-animation: anim3 0.5s ease infinite alternate;
          animation: anim3 0.5s ease infinite alternate;
  border-radius: 100% 100% 0 100%;
  transform: rotate(45deg);
}
.anim3:after {
  display: block;
  height: 8px;
  margin-top: 8px;
  background-color: #C9C9C9;
  content: "";
  border-radius: 100%;
}

@-webkit-keyframes anim3 {
  to {
    transform: rotate(45deg) translate(3px, 3px);
  }
}
@keyframes anim3 {
  to {
    transform: rotate(45deg) translate(3px, 3px);
  }
}

/* SweetAlert2 커스텀 */
.swal-custom-popup {
  border-radius: 10px !important;
  padding: 24px !important;
  width: 400px !important;
  text-align: center !important;
}
.swal-connect-button {
  background-color: #E4007F !important;
  color: #fff !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 30px !important;
  padding: 8px 20px !important;
  margin-right: 12px;
  cursor: pointer;
  font-size: 14px !important;
  transition: background-color 0.2s;
}
.swal-connect-button:hover {
  background-color: #EF60AF !important;
}
.swal-stop-button {
  background-color: #DEDEE2 !important;
  color: #4F4F53 !important;
  border-radius: 30px !important;
  border: none !important;
  font-weight: 600 !important;
  padding: 8px 20px !important;
  cursor: pointer;
  font-size: 14px !important;
  transition: background-color 0.2s, color 0.2s;
}
.swal-stop-button:hover {
  background-color: #F0F0F0 !important;
  color: #7E7E83 !important;
}

/* 툴바 중앙 버튼 영역 */
.control-btn-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
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

<style>
.swal-update-popup {
  width: 720px !important;
  max-width: 90% !important;
  border-radius: 10px !important;
  padding: 24px !important;
  text-align: center !important;
}
.swal-custom-popup {
  border-radius: 8px !important;
  padding: 16px !important;
  width: 360px !important;
  text-align: center !important;
}
.swal-custom-popup .swal2-title {
  margin: 0 !important;
  margin-bottom: 12px !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: #E4007F !important;
}
.swal-custom-popup .swal2-html-container {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 14px !important;
  line-height: 1.4 !important;
  color: #979797 !important;
}
.swal-custom-popup .swal2-actions {
  margin: 0 !important;
  padding-top: 14px !important;
}
.swal-connect-button {
  background-color: #E4007F !important;
  color: #fff !important;
  font-weight: 600 !important;
  border: none !important;
  border-radius: 30px !important;
  padding: 8px 20px !important;
  margin-right: 12px;
  cursor: pointer;
  font-size: 14px !important;
  transition: background-color 0.2s;
}
.swal-connect-button:hover {
  background-color: #EF60AF !important;
}
.swal-stop-button {
  background-color: #DEDEE2 !important;
  color: #4F4F53 !important;
  border-radius: 30px !important;
  border: none !important;
  font-weight: 600 !important;
  padding: 8px 20px !important;
  cursor: pointer;
  font-size: 14px !important;
  transition: background-color 0.2s, color 0.2s;
}
.swal-stop-button:hover {
  background-color: #F0F0F0 !important;
  color: #7E7E83 !important;
}
.swal-item-selected {
  border: 2px solid #E4007F !important;
  background-color: #FFE6F2 !important;
  color: #E4007F !important;
  transition: background-color 0.2s;
}
.swal-item-selected,
.swal-item-selected * {
  color: #E4007F !important;
}
</style>
