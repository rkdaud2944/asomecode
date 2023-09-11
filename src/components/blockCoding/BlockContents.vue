<template>
<div>
    <div>
        <button class="b-button" :class="{ selected: selectedField === 'BOT' }" @click="showAndClearCategoriesByField('BOT')">
            <img class="img-button" :src="selectedField === 'BOT' ? asomebotIconClick : asomebotIcon"/> Asomebot
        </button>
        <button :class="{ selected: selectedField === 'KIT' }" @click="showAndClearCategoriesByField('KIT')">
            <img class="img-button" :src="selectedField === 'KIT' ? asomekitIconClick : asomekitIcon"/> Asomekit
        </button>
        <button class="c-button" :class="{ selected: selectedField === 'CAR' }" @click="showAndClearCategoriesByField('CAR')">
            <img class="img-button" :src="selectedField === 'CAR' ? asomecarIconClick : asomecarIcon"/> Asomecar
        </button>
        <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
        <div style="width: 43px; height: 33px; float: right; " id="code" class="cursor-pointer">
            <img :src="sourceView" @click="toggleCodeVisibility" />
        </div>
    </div>
    <div class="container">
        <div ref="blocklyDiv" class="blockly-container">
        </div>

        <div v-if="isCodeVisible" class="code-container">
    <div class="code-preview-container">
        <div class="line-numbers">
        <span v-for="(line, index) in code.split('\n')" :key="index" class="line-number">{{ index + 1 }}</span>
      </div>
        <pre v-html="code" class="code-preview"></pre>

    </div>
  </div>
    </div>
</div>

</template>

<script setup>
const showCode = () => (code.value = javascriptGenerator.workspaceToCode(foo.value.workspace));
const foo = ref();
const code = ref();
const isCodeVisible = ref(false);
const store = useStore();

const toggleCodeVisibility = () => {
  isCodeVisible.value = !isCodeVisible.value;
  if (isCodeVisible.value) {
    showCode();
  }
};

watch(code, (newCode) => {
  if (isCodeVisible.value) {
    store.commit('setCode', newCode);
  }
});

</script>

<script>

import {  mapMutations  } from 'vuex';
import { useStore } from 'vuex';
import { ref , watch  } from "vue";
import "../../blocks/stocks";
import { javascriptGenerator } from "blockly/javascript";
import images from "@/assets/images";
import Blockly from "blockly";
import { BotToolbox } from "@/blocks/B_BlockContents";
import { KitToolbox } from "@/blocks/K_BlockContents";
import { CarToolbox } from "@/blocks/C_BlockContents";

export default {
    
    data() {
        return {
            asomebotIcon: images.asomebotIcon,
            asomebotIconClick: images.asomebotIconClick,
            asomekitIcon: images.asomekitIcon,
            asomekitIconClick: images.asomekitIconClick,
            asomecarIcon: images.asomecarIcon,
            asomecarIconClick: images.asomecarIconClick,
            sourceView: images.sourceView,
            workspace: null,
            selectedField: 'BOT',
            isCodeVisible: false
        }
    },
    beforeUnmount() {
        this.SetCode(null)
    },
    mounted() {
        this.toggleCodeVisibility(); // 컴포넌트가 DOM에 부착된 후에 toggleCodeView 함수를 호출합니다.
        // 여기에 다른 코드를 추가할 수도 있습니다.
    },
    beforeMount() {
        this.$nextTick(() => {
                this.workspace = Blockly.inject(this.$refs.blocklyDiv, {
                toolbox: this.getFilteredToolboxByField('BOT')
            });

            this.workspace.addChangeListener(() => {
                this.handleWorkspaceChange(this.workspace);
                this.showCode(); 
            });
        });
    },

    methods: {
        toggleCodeView() {
            // this.isCodeVisible = !this.isCodeVisible;
        },
        ...mapMutations({
            setCode :'setCode',
        }),

        handleWorkspaceChange() {

        },

        getFilteredToolboxByField(field) {
            return {
                kind: "categoryToolbox",
                contents: BotToolbox.contents.filter(category => category.filed === field)
            };
        },

        getToolboxByField(field) {
            switch (field) {
                case 'BOT':
                    return BotToolbox;
                case 'KIT':
                    return KitToolbox;
                case 'CAR':
                    return CarToolbox;
                default:
                    return {};
            }
        },

        showAndClearCategoriesByField(field) {
            this.workspace.clear();
            this.selectedField = field;
            const toolbox = this.getToolboxByField(field);
            this.workspace.updateToolbox(toolbox);
            console.log("KitToolbox" + KitToolbox)
            console.log("CarToolbox" + CarToolbox)
        },
    },
}
</script>

<style>
.blocklyToolboxDiv .blocklyTreeRow {
    height: 70px;
    width: 70px;
    padding: 0px !important;
    border-left: 1px solid #D6E9F4 !important;
    border-right: 1px solid #D6E9F4 !important;
    border-bottom: 1px solid #D6E9F4 !important;
    background-color: #F1FAFF;
    margin: 0;
    
}
.blocklyToolboxDiv{
    padding: 0px !important;
}
.blocklyTreeLabel {
    color: black;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 12px;
    line-height: 75px;
}
button {
    transition: background-color 0.1s;
    height: 35px;
    width: 110px;
    border: 1px solid #44ADF3 ;
    background-color: #F1FAFF;
    margin-bottom: 7px;
    color: #95C8EA;
    cursor: pointer;
}
button.selected {
    background-color: #FCD102;
    color: white;
    border: 1px solid #9E8302 ;
    text-shadow: 3px 3px 15px gray;
}
.b-button {
    border-top-left-radius: 10px;
}
.c-button {
    border-top-right-radius: 10px;
}
.img-button {
    margin-right: 3%;
}
.blockly-container {
    flex-direction: row;
}

.blockly-div {
    flex: 1;
    height: 800px; 
    width: 70%;
    margin: 0 auto;
}

.code-display {
    flex: 1;
    max-width: 70%;
    background-color: #f9f9f9;
    padding: 10px;
    box-sizing: border-box;
}

.code-toggle {
    width: 43px;
    height: 33px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
}
.code-preview {
    width: 300px;
    position: relative;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 10px;
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 14px;
}
.code-preview-container {
  display: flex;
}
.container {
    display: flex;
    align-items: stretch; /* Adjust as needed */
}

.blockly-container, .code-container {
    flex: 1;
    height: 600px;
    /* Add other styling as needed */
}

/*에니메이션 .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s; 
}

.fade-enter, .fade-leave-to {
    opacity: 0;
} */
.code-preview {
  width: 100%; /* 전체 너비를 사용하도록 조정 */
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 20px; /* 내용과 여백 사이 간격을 늘릴 수 있습니다. */
  margin-top: 0;
  flex: 1; /* 미리 보기 컨테이너가 남은 공간을 차지하도록 설정 */
  white-space: pre-wrap;
  font-family: monospace;
  font-size: 14px;
  line-height: 1.5; /* 줄 간격을 조정할 수 있습니다. */
  overflow-x: auto; /* 가로 스크롤을 표시하도록 설정 */
  border-radius: 5px; /* 둥근 모서리를 적용합니다. */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

/* 코드 부분에 색상 구문 강조를 적용할 수도 있습니다. */
.code-preview code {
  color: #333; /* 텍스트 색상 */
}

/* 스크롤바 스타일링 (선택 사항) */
.code-preview::-webkit-scrollbar {
  width: 8px; /* 스크롤바 너비 조정 */
}

.code-preview::-webkit-scrollbar-thumb {
  background-color: #888; /* 스크롤바 색상 */
  border-radius: 4px; /* 둥근 모서리를 적용합니다. */
}

.code-preview::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* 스크롤바 호버 시 색상 변경 */
}
.line-numbers {
  /* 줄 번호 영역 스타일링 */
  padding: 20px 10px; /* 여백 조절 */
  background-color: #f5f5f5; /* 배경 색상 지정 */
  border-left: 1px solid #ccc; /* 오른쪽에 선 추가 */
  box-sizing: border-box;
}

.line-number {
  /* 줄 번호 스타일링 */
  display: block;
  text-align: right;
  color: #999; /* 줄 번호 색상 설정 */
  font-size: 14px; /* 줄 번호 글꼴 크기 */
  line-height: 1.5; /* 줄 간격 조절 */
}
</style>
