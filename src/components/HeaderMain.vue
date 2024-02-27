<template>
    <nav class="header-nav">
        <div class="main-logo">
            <img :src="logo" alt="logo" class="logo"/>
        </div>
        <div class="nav">
            <span class="Pretendard-Light nav-txt">자료실</span>
            <span class="Pretendard-Light nav-txt">도움말</span>
            <span class="Pretendard-Light">토글</span>
        </div>
    </nav>
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
            editor: images.editor,
            home: images.home,
            formatImg: images.format,
            mobileM: images.mobileM,
            rebootImg: images.reboot,
            stopImg: images.stop,
            updateImg: images.update,
            help: images.help,
            codes: null,
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

        function slide_menu() {
            if (subToggle){
                subBar.style.display="block";
                subBar.classList.remove("up");
                subBar.classList.add("down");
                subToggle=!subToggle;
            } else {
                subBar.classList.remove("down");
                subBar.classList.add("up");
                subToggle=!subToggle;
            }
            console.log(subBar.classList);
        }
        menu.addEventListener("click",slide_menu);

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

        gotoBackOffice() {
            this.$router.push("/backOffice");

            // 빌드 실행 시에 필요한 코드
            this.openUrl('BO', 'app://./index.html?goto=backOffice');
        },

        openEditor() {
            bridgeIn.openEditor('')
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
        }
    }
}
</script>

<!-- <style scoped src="@/assets/css/component/nav_bar.css"/> -->
<style scoped src="@/assets/css/component/header.css"/>
<style scoped src="@/assets/css/font.css"/>