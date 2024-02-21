<template>
    <div style="position: fixed; width: 100%; height: 36px; -webkit-app-region: drag; background-color: #29292c; color: #fff; z-index: 9999; display: flex; justify-content: space-between; align-items: center;">
        <div style="margin-left: 15px">
            ㅇ AsomeCode-Student
        </div>

        <div style="margin-right: 15px">
            <span id="min" style="left:0; -webkit-app-region: no-drag;">min</span>
            <span id="max" style="left:0; -webkit-app-region: no-drag;">max</span>
            <span id="close" style="left:0; -webkit-app-region: no-drag;">close</span>
        </div>
    </div>
    <q-layout view="hHh lpr fFf" style=" overflow: auto; height: calc(100vh - 36px);">

        <div v-if="showHeaderMain">
            <HeaderMain />
        </div>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer v-if="showFooterMain" class="bg-grey-4 text-black">
            <ConsoleLog />
        </q-footer>
    </q-layout>
</template>

<script>
import globals from "@/globals/globals";
import bridgeIn from "@/globals/bridge-in";
import jsControl from "@/globals/js-control";
import editorControl from "@/globals/editor-control";
import HeaderMain from "@/components/HeaderMain.vue";
import ConsoleLog from "@/components/ConsoleLog.vue";
import { useMemberStore } from "@/store/member";
import "./blocks/stocks";

export default {
    components: {
        HeaderMain, ConsoleLog
    },

    setup() {
        bridgeIn.init();
        jsControl.init();
        editorControl.init();

        const memberStore = useMemberStore();

        return {
            memberStore,
        };
    },

    data() {
        return {
            showHeaderMain: true,
            showFooterMain: true,
        };
    },

    watch: {
        $route(to) {
            console.log("App route", to);

            globals.currentPath = to.path;

            this.showHeaderMain = true;
            this.showFooterMain = true;
            const skipHeaderMains = ["/editor", "/help", "/backOffice", "/blockCoding"];
            skipHeaderMains.forEach((path) => {
                if (to.path.startsWith(path)) {
                    this.showHeaderMain = false;
                    this.showFooterMain = false;
                    console.log("skipHeaderMains", path);
                }
            });
        },
    },

    mounted() {
        window.goTo = (path, params) => {
            if (params) {
                this.$router.push({ path: path, query: params });
            } else {
                this.$router.push({ path: path });
            }
        };
        this.setTitleBar()
    },
    
    methods: {
        setTitleBar() {
            
            const { ipcRenderer } = require('electron');
            const ipc = ipcRenderer;

            var btnMin = document.getElementById("min"); // 최소화
            var btnMax = document.getElementById("max"); // 최대화
            var btnClose = document.getElementById("close"); // 닫기

            btnMin.addEventListener("click", ()=>{
                ipc.send('minimizeApp');
            });
            btnMax.addEventListener("click", ()=>{
                ipc.send('maximizeApp');
            });
            btnClose.addEventListener("click", ()=>{
                ipc.send('closeApp');
            });


            const menu = new window.Menu()

            // 메뉴 구성요소들을 추가한다
            menu.append(new window.MenuItem({
                label: '도구',
                submenu: [
                    {
                    label: '새로고침', // 화면 상에 보이는 UI
                    accelerator: 'Ctrl+R', // 단축키 설정
                    click (focusedWindow) { // 클릭 이벤트 처리
                        if (focusedWindow) focusedWindow.reload()
                    }
                    },
                    {
                    type: 'separator' // 구분선 UI
                    },
                    {
                    label: '전체 화면',
                    role: 'togglefullscreen'
                    }
                ]
            }))
        },
    }
};
</script>
