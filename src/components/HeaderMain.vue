<template>
    <nav class="header-nav">
        <div class="logo_box">
            <img src="../../public/images/common/logom.png" class="main-logo">
        </div>

        <div class="menulist">
            <ul class="ui-left">
                <li class="ui-left-bt" @click="connect()">
                    <img src="../../public/images/common/connect.png" class="ui-img">
                    <p class="ui-left-font" id="fs-four">연결하기</p>
                </li>
                <li class="ui-left-bt" @click="goTo('/')">
                    <img src="../../public/images/common/home.png" class="ui-img">
                    <p class="ui-left-font" id="fs-one">홈</p>
                </li>
                <li class="ui-left-bt" @click="openEditor()">
                    <img src="../../public/images/common/editor.png" class="ui-img">
                    <p class="ui-left-font" id="fs-four">소스편집</p>
                </li>
                <li class="ui-left-bt" @click="stop()">
                    <img src="../../public/images/common/stop.png" class="ui-img">
                    <p class="ui-left-font" id="fs-three">멈추기</p>
                </li>
                <li class="ui-left-bt" @click="handleClick()">
                    <img src="../../public/images/common/stop.png" class="ui-img">
                    <p class="ui-left-font" id="fs-three"> {{ isRecording ? 'Stop' : 'Start' }} </p>
                </li>
            </ul>

            <ul class="ui-right">
                <li class="ui-right-bt" @click="reboot()">
                    <img src="../../public/images/common/reboot.png" class="ui-img">
                    <p class="ui-right-font" id="fs-three">재부팅</p>
                </li>
                <li class="ui-right-bt" @click="format()">
                    <img src="../../public/images/common/format.png" class="ui-img">
                    <p class="ui-right-font" id="fs-two">포맷</p>
                </li>
                <li class="ui-right-bt" @click="update()">
                    <img src="../../public/images/common/update.png" class="ui-img">
                    <p class="ui-right-font" id="fs-four">업데이트</p>
                </li>
                <li class="ui-right-bt" @click="openRouterPath('/help')">
                    <img src="../../public/images/common/help.png" class="ui-img">
                    <p class="ui-right-font" id="fs-three">HELP</p>
                </li>
                <li @click="openUrl('AsomeBlock', '/AsomeBlock/AsomeBlock.html?language=Korean')">
                    Block
                </li>
                <!-- <li @click="openUrl('metaverse', 'http://www.metalive.be:13300/')">
                    M
                </li> -->
                <li @click="openRouterPath('/backOffice')">
                    BO
                </li>
            </ul>
        </div>

    <div class="menu widht-100">
            <img src="../../public/images/common/mobile_m.png" class="toggle toggle-img">
            <ul class="align-center sub">
                <div>
                    <li class="mobile-top" @click="goTo('/')">
                        <div>
                            <img src="../../public/images/common/home.png" class="ui-img">
                            <p class="ui-left-font" id="fs-one">홈</p>
                        </div>
                    </li>
                    <li class="mobile-top" @click="connect()">
                        <div>
                            <img src="../../public/images/common/connect.png" class="ui-img2">
                            <p class="ui-left-font" id="fs-four">연결하기</p>
                        </div>
                    </li>          
                    <li class="mobile-top" @click="openEditor()">
                        <div>
                            <img src="../../public/images/common/editor.png" class="ui-img2">
                            <p class="ui-left-font" id="fs-four">소스편집</p>
                        </div>
                    </li>
                    <li class="mobile-top" @click="stop()">
                        <div>
                            <img src="../../public/images/common/stop.png" class="ui-img2 mobile-top-margin">
                            <p class="ui-left-font" id="fs-three">멈추기</p>
                        </div>
                    </li>
                </div>
                <div>
                    <li class="mobile-bottom" @click="reboot()">
                        <div>
                            <img src="../../public/images/common/reboot.png" class="ui-img2 mobile-top-margin">
                            <p class="ui-bottom-font" id="fs-three">재부팅</p>
                        </div>
                    </li>
                    <li class="mobile-bottom" @click="format()">
                        <div>
                            <img src="../../public/images/common/format.png" class="ui-img2 mobile-top-margin">
                            <p class="ui-bottom-font" id="fs-two">포맷</p>
                        </div>
                    </li>
                    <li class="mobile-bottom" @click="update()">
                        <div>
                            <img src="../../public/images/common/update.png" class="ui-img2 mobile-top-margin">
                            <p class="ui-bottom-font" id="fs-four">업데이트</p>
                        </div>
                    </li>
                    <li class="mobile-bottom" @click="openUrl('help', '/help')">
                        <div>
                            <img src="../../public/images/common/help.png" class="ui-img2 mobile-top-margin">
                            <p class="ui-bottom-font" id="fs-three">HELP</p>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>
import serial from "@/globals/serial";
import VueBase from "@/mixin/vue-base";
import bridgeIn from "@/globals/bridge-in";
import eventbus from "@/globals/eventbus";
import boardUpdater from "@/globals/board-updater";
import {stt} from '@/globals/stt.js';
const fs = require('fs');

export default {
    mixins: [VueBase, bridgeIn],

    data() {
        return {
            btConnectColor: "grey",            
            mediaRecorder: null,
            audioChunks: [],
            isRecording: false,  // 녹음 상태를 추적하는 데이터 속성
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
        


        const menu=document.querySelector(".toggle");
        const subBar=document.querySelector(".menu>.sub");

        let subToggle=true

        function slide_menu(){
        if(subToggle){
            subBar.style.display="block";
            subBar.classList.remove("up");
            subBar.classList.add("down");
            subToggle=!subToggle;
            
        }else{
            subBar.classList.remove("down");
            subBar.classList.add("up");
            subToggle=!subToggle;
        }
        console.log(subBar.classList);
        }
        menu.addEventListener("click",slide_menu);
    },

    methods: {
        ...serial,

        update() {
            boardUpdater.start();
        },

        gotoBackOffice() {
            this.$router.push("/backOffice");

            // 빌드 실행 시에 필요한 코드
            this.openUrl('BO', 'app://./index.html?goto=backOffice');
        },

        
        // stt 테스트 코드
        async handleClick() {
            if (this.isRecording) {
                this.stopRecording();
            } else {
                this.startRecording();
            }
        },

        async startRecording() {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.ondataavailable = event => {
                this.audioChunks.push(event.data);
            };
            this.mediaRecorder.start();
            this.isRecording = true;  // 녹음 시작을 표시
        },

        async stopRecording() {
            if (!this.mediaRecorder) return;

            this.mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                const filePath = '/sttaudiofile.wav'; // 실제 저장 경로로 변경하세요
                fs.writeFile(filePath, Buffer.from(await audioBlob.arrayBuffer()), (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    // stt 함수 호출
                    stt('Kor', filePath).then(() => {
                        // STT 호출이 완료되면 파일 삭제
                        fs.unlink(filePath, (err) => {
                            if (err) {
                                console.error('Error deleting the file:', err);
                                return;
                            }
                            console.log('File deleted successfully');
                        });
                    });
                });
        };
        this.mediaRecorder.stop();
        this.isRecording = false;  // 녹음 중지를 표시
    },
        
        
    }
}
</script>

<style scoped src="@/assets/css/component/nav_bar.css"/>