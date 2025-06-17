<template>
    <q-layout view="hHh lpr fFf" style=" height: calc(100vh - 36px);">
      <q-header v-if="showHeaderMain">
        <HeaderMain />
      </q-header>
  
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
  import { watch } from "vue";
  
  import * as Blockly from "blockly";
  import { useI18n } from "vue-i18n";
  
  export default {
    components: {
      HeaderMain,
      ConsoleLog,
    },
  
    setup() {
      // 기존 초기화
      bridgeIn.init();
      jsControl.init();
      editorControl.init();
  
      // Vue-i18n
      const { t, locale } = useI18n();
  
      // Blockly 메시지 갱신 함수
      const setBlocklyMessages = () => {
        // 예시: 두 개 키만 갱신, 실제 등록한 Msg 키 모두 나열하세요.
        Blockly.Msg.WALK_STEP_FORWARD_TITLE   = t("WALK_STEP_FORWARD_TITLE");
        Blockly.Msg.WALK_STEP_FORWARD_TOOLTIP = t("WALK_STEP_FORWARD_TOOLTIP");
        Blockly.Msg.MORE_INFO                 = t("더 알아보기");
        // … 그 외 Blockly.Msg.키 모두 갱신 …
  
        // workspace 레이아웃 다시 맞추기 (workspace 변수는 실제 참조로 바꿔주세요)
        if (window.blocklyWorkspace) {
          Blockly.svgResize(window.blocklyWorkspace);
        }
      };
  
      // 초기 로드 시
      setBlocklyMessages();
  
      // 언어가 바뀔 때마다 호출
      locale.value; // watch를 걸기 위해 참조
      watch(() => locale.value, () => {
          setBlocklyMessages();
          // 워크스페이스를 완전 재초기화하거나
          // toolbox를 다시 렌더링
          const ws = Blockly.getMainWorkspace();
          const xml = Blockly.Xml.workspaceToDom(ws);
          Blockly.Xml.clearWorkspaceAndLoadFromDom(xml, ws);
      });
  
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
        globals.currentPath = to.path;
        this.showHeaderMain = true;
        this.showFooterMain = true;
        const skipHeaderMains = [
          "/editor",
          "/help",
          "/backOffice",
          "/blockCoding",
          "/simulation",
        ];
        skipHeaderMains.forEach((path) => {
          if (to.path.startsWith(path)) {
            this.showHeaderMain = false;
            this.showFooterMain = false;
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
      console.log(window.versions);
    },
  };
  </script>
  
  <style>
  body::-webkit-scrollbar {
    /* display: none; */
  }
  </style>
  