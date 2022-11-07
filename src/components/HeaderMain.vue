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
                <li class="ui-left-bt" @click="openUrl('editor', '/editor')">
                    <img src="../../public/images/common/editor.png" class="ui-img">
                    <p class="ui-left-font" id="fs-four">소스편집</p>
                </li>
                <li class="ui-left-bt" @click="stop()">
                    <img src="../../public/images/common/stop.png" class="ui-img">
                    <p class="ui-left-font" id="fs-three">멈추기</p>
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
                <li class="ui-right-bt" @click="openUrl('help', '/help')">
                    <img src="../../public/images/common/help.png" class="ui-img">
                    <p class="ui-right-font" id="fs-three">HELP</p>
                </li>
                <li @click="openUrl('AsomeBlock', '/AsomeBlock/AsomeBlock.html?language=Korean')">
                    Block
                </li>
                <li @click="openUrl('metaverse', 'http://www.metalive.be:13300/')">
                    M
                </li>
                <li @click="gotoBackOffice">
                    BO
                </li>
            </ul>
        </div>

        <a class="toggle">
            <img src="../../public/images/common/mobile_m.png" class="toggle-img">
        </a>
    </nav>
</template>

<script>
import serial from "@/globals/serial";
import VueBase from "@/mixin/vue-base";
import eventbus from "@/globals/eventbus";
import updateBoard from "@/globals/update-board";

export default {
    mixins: [VueBase],

    data() {
        return {
            btConnectColor: "grey",
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

        const toggleBtn = document.querySelector('.toggle');
        const menu = document.querySelector('.menulist');

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        })
    },

    methods: {
        ...serial,

        update() {
            updateBoard.start();
        },

        gotoBackOffice() {
            this.$router.push("/backOffice");

            // 빌드 실행 시에 필요한 코드
            // this.openUrl('BO', 'app://./index.html?goto=backOffice');
        },
    }
}
</script>

<style scoped src="@/assets/css/component/nav_bar.css"/>