<template>
<div class="pre-setting">
<!-- 교구 선택 버튼, 에이스에디터 여닫이버튼 -->
    <div>
        <!-- <p>입력된 음성값 : {{ recognizedTextFromModal }}</p> -->
        <!-- 교구선택버튼 -->
        <button v-show='!lessonBlockVisible' class="b-button">
            <img class="img-button" />기능 블록
        </button>
        <button v-show='lessonBlockVisible' class="b-button" :class="{ selected: selectedField === 'BOT' }" @click="showAndClearCategoriesByField('BOT')">
            <img class="img-button" :src="selectedField === 'BOT' ? asomebotIconClick : asomebotIcon"/> Asomebot
        </button>
        <button v-show='lessonBlockVisible' :class="{ selected: selectedField === 'KIT' }" @click="showAndClearCategoriesByField('KIT')">
            <img class="img-button" :src="selectedField === 'KIT' ? asomekitIconClick : asomekitIcon"/> Asomekit
        </button>
        <button v-show='lessonBlockVisible' class="c-button" :class="{ selected: selectedField === 'CAR' }" @click="showAndClearCategoriesByField('CAR')">
            <img class="img-button" :src="selectedField === 'CAR' ? asomecarIconClick : asomecarIcon"  :style="{ height: '16px', width: '14px' }"/> Asomecar
        </button>
        <!-- stt 모달창 -->
        <!-- <button @click="openModal">test</button> -->
        <Modal :isVisible="showModal" @text-updated="updateRecognizedText" @close="closeModal" />
        <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
        <!-- 에이스에디터 띄우는 버튼 -->
        <div id="code" class="cursor-pointer">
            <img :src="sourceView" @click="toggleCodeVisibility" />
        </div>
    </div> 
    <div class="blockcoding-container">
        <!-- Blockly -->
        <div class="blockly-container" ref="blocklyDiv" :style="{ width: isCodeVisible ? '70%' : '100%' }"></div>
        <!-- 에이스 에디터 -->
        <div class="code-container" :style="{ width: isCodeVisible ? '30%' : '0%' }">
            <VAceEditor
                v-if="isCodeVisible"
                class="code-preview"
                lang="python"
                v-model:value="code"
                :options="editorOptions"
                :style="{ height: '100%', width: '95%' }"/>
    </div>
    </div>
</div>

</template>


<script>

// 각종 선언코드
import {  mapMutations  } from 'vuex';
import "../../blocks/stocks";
import { javascriptGenerator } from "blockly/javascript";
import images from "@/assets/images";
import Blockly from "blockly";
import { BotToolbox } from "@/blocks/blockcontents_bot";
import { KitToolbox } from "@/blocks/blockcontents_kit";
import { CarToolbox } from "@/blocks/blockcontents_car";
import { LessonToolbox } from "@/blocks/lessonBlock";
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-python';
import Modal from '@/components/SttModal.vue';
import eventbus from "@/globals/eventbus"; 

    
export default {
    watch: {
        // 에이스 에디터의 내용(code)을 감시
        code(newCode) {
            // 에이스 에디터의 내용이 변경될 때마다 Vuex 스토어의 code 상태를 업데이트
            this.setCode(newCode);
        },
    },
    components: {
        VAceEditor,
        Modal
    },
    data() {
        return {
            // 이미지 호출코드들
            asomebotIcon: images.asomebotIcon,
            asomebotIconClick: images.asomebotIconClick,
            asomekitIcon: images.asomekitIcon,
            asomekitIconClick: images.asomekitIconClick,
            asomecarIcon: images.asomecarIcon,
            asomecarIconClick: images.asomecarIconClick,
            sourceView: images.sourceView,
            
            advance: images.advance,
            advanceClick: images.advanceClick,
            basic: images.basic,
            basicClick: images.basicClick,
            button: images.button,
            buttonClick: images.buttonClick,
            dance: images.dance,
            danceClick: images.danceClick,
            internet: images.internet,
            internetClick: images.internetClick,
            led: images.led,
            ledClick: images.ledClick,
            move: images.move,
            moveClick: images.moveClick,
            prepare: images.prepare,
            prepareClick: images.prepareClick,
            sensor: images.sensor,
            sensorClick: images.sensorClick,
            sound: images.sound,
            soundClick: images.soundClick,
            walk: images.walk,
            walkClick: images.walkClick,
            ai: images.ai,
            aiClick: images.aiClick,
            selectedField: 'BOT',
            workspaces: {},
            isCodeVisible: false,
            code: null,
            editorOptions: {
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            },
            showModal: false,
            recognizedTextFromModal: '',
        }
    },

    computed: {
        // 블록콘텐츠에서 레슨블록이 보이게 할지 안보이게 할지
        lessonBlockVisible(){
            if(localStorage.getItem("lessonBlock")){
                return false
            }else{
                return true
            }
        }
    },

    beforeMount() {
        // 타이핑 자동완성
        const keywords = [
            "asomebot",
                "ready", "align", "angle", "angles", "turn_off", "home", "leg_up", "forward",
                "backward", "turn_left", "turn_right", "foot_wave", "mouse", "flap", "warigari",
                "tock", "tick_tock", "wiggle", "ballet", "left_swing", "right_swing", "yaho", "swing", "moonwalk",

            "asomecar",
                "ready", "stop", "to_left", "to_right",

            "boot",
                "random", "delay", "OutputPin", "InputPin", "InputPullUp", "AnalogPin", "ServoPin", "turnoff_pins",
            
            "button",
                "create", "is_clicked", "do_click", "setOnClick",
            
            "cannon",
                "show", "set_angle", "set_power", "power_x", "power_y", "bullet_moveto", "target_moveto", "fire", "target_explode",

            "car_race",
                "show_time", "start", "move", "is_finished",
            
            "clock",
                "set", "datetime", "year", "month", "day", "week", "hour", "minute", "second", "millis", "text",

            "dth_screen",
                "display",

            "dht11",
                "measure", "temperature", "humidity",
            
            "dice",
                "roll",

            "disk",
                "list", "view", "run",
            
            "door",
                "close",

            "flag_game",
                'join', "is_ready", "count_down", "win",

            "hcsr04",
                "get_distance",
            
            "internet",
                "connect", "ifconfig", "open_ap", "get_http", "get_time", "send_msg",
            
            "interval",
            
            "line_sensor",
                "ready", "read",

            "lunar_lander",
                "ship_move", "ship_speed_up", "ship_speed_down", "fule_is_empty", "engine_on", "engine_off", "is_landed", "ship_explode",
            
            "maze",
                "move_xy", "can_move",

            "maze_maker",
                "set_cell_type", "get_left", "get_right", "get_up", "get_down", "find_next_move",

            "music",
                "get_tone", "tone", "mute", "note",

            "rotary",
                "direction", "has_changed",

            "scheduler",
                "check", "wait",

            "sliding_puzzle",
                "blank_left", "blank_right", "blank_up", "blank_down",

            "sound_effect",
                "level_up", "so_sad", "ariel", "laugh", "sad", "victory", "get_ready",

            "spacecraft",
                "move_left", "move_right", "set_speed",

            "stove",
                "on", "off",

            "timer",
                "number", "update", "set_mode", "mode", "set_value", "value", "duration",

            "tm1637",
                "set_brightness", "write_str", "time",

            "udp_socket",
                "read_text", "send_text",

            "vibration_sensor",
                "is_active",
        ];

        // 에이스 에디터 코드(소스편집에서 따온거)
        const ace = require("ace-builds/src-noconflict/ext-language_tools.js")
        ace.addCompleter({
            getCompletions: function (editor, session, pos, prefix, callback) {
                var completions = [];
                keywords.forEach(function (w) {
                    completions.push({
                        value: w,
                        meta: "AsomeIT",
                        score: 1000,
                    });
                });
                callback(null, completions);
            }
        })
        
        if (localStorage.getItem("lessonBlock")){
            // 블록코드 워크스페이스 코드
            this.$nextTick(() => {
                this.workspace = Blockly.inject(this.$refs.blocklyDiv, {
                    toolbox: 
                        {kind: "categoryToolbox",
                        contents: LessonToolbox[localStorage.getItem("lessonBlock")]},
                    grid:
                        {spacing: 25,
                        length: 2,
                        colour: '#ccc',
                        snap: true},
                    zoom:
                        {controls: true,
                        wheel: true, 
                        startScale: 1.0,
                        maxScale: 3,
                        minScale: 0.3,
                        scaleSpeed: 1.2,
                        pinch: true},
                    trashcan: true,
                    width:"100%",
                    height:"100%",
                });
                // 에이스 에디터 코드 초기화
                this.workspace.addChangeListener(this.handleWorkspaceChange);
                // 에이스에디터 변경 감지용 코드
                this.updateAceEditorCode();
                // zoom 시 카테고리(flyout) 영역 영향 안받게하는 코드
                Blockly.Flyout.prototype.getFlyoutScale = function() {
                    return 1.0; 
                };
            });
        }else{
            // 블록코드 워크스페이스 코드(점박이 백그라운드 넣은곳)
            this.$nextTick(() => {
                this.workspace = Blockly.inject(this.$refs.blocklyDiv, {
                    toolbox: 
                        {kind: "categoryToolbox",
                        contents: BotToolbox.contents},
                    grid:
                        {spacing: 25,
                        length: 2,
                        colour: '#ccc',
                        snap: true},
                    zoom:
                        {controls: true,
                        wheel: true, 
                        startScale: 1.0,
                        maxScale: 3,
                        minScale: 0.3,
                        scaleSpeed: 1.2,
                        pinch: true},
                    trashcan: true,
                    width:"100%",
                    height:"100%",
                });
                // 에이스 에디터 코드 초기화
                this.workspace.addChangeListener(this.handleWorkspaceChange);
                // 에이스에디터 변경 감지용 코드
                this.updateAceEditorCode();
                // zoom 시 카테고리(flyout) 영역 영향 안받게하는 코드
                Blockly.Flyout.prototype.getFlyoutScale = function() {
                    return 1.0; 
                };
            });

        }


        
        
        this.$nextTick(() => {
            this.insertIcon();
        });
    },
    
    mounted() {
    const this2 = this;

    // eventbus를 사용하여 이벤트 수신
    eventbus.on("sttReceived", function () {
        this2.openModal();
    });

        // 브라우저 storage 이벤트를 추가
        window.addEventListener("storage", function (event) {
            if (event.key === "stt") {
                this2.openModal();
                localStorage.removeItem("stt");
            }
        });

        
        eventbus.on("blocksSave", () =>{
            this.saveTextAsFile('default');
        });

        
        eventbus.on("blocksLoad", () =>{
            this.importBlocksFromFile();
        });
    
    },
    beforeUnmount() {
        // 에이스에디터 코드 뷰엑스로 넘겨줌
        this.SetCode(null)
        
        localStorage.removeItem("lessonBlock");
        
    },

    methods: {
        // 뷰엑스 뮤테이션 선언
        ...mapMutations({
            setCode :'setCode',
        }),

        //카테고리(flyout 변경해도 데이터 유지)
        loadWorkspace(field) {
            const xmlText = this.workspaces[field];
                if (xmlText) {
                const xml = Blockly.Xml.textToDom(xmlText);
                Blockly.Xml.domToWorkspace(xml, this.workspace);
            }
        },
        saveWorkspace(field) {
            const xml = Blockly.Xml.workspaceToDom(this.workspace);
            this.workspaces[field] = Blockly.Xml.domToText(xml);
        },

        handleWorkspaceChange() {
            this.updateAceEditorCode();

            // 카테고리(flyout) 선택 후 다른 곳 클릭해도 안꺼지는 코드
            this.workspace.toolbox_.flyout_.autoClose = false;
        },

        // 에이스 에디터에 그려지게하는 코드 (준비블록에 붙여야만 표시하는 코드 포함)
        // 변수선언 관련 블록들 선언문 최상단에 선언하게 하는거
        updateAceEditorCode() {
            let initCodes = new Set();  // 중복값 허용하지 않는 Set 객체 사용
            const allBlocks = this.workspace.getAllBlocks();
            const targetBlockTypesToCheck = ["advance_if", "advance_elseif", "screen", "variable", "led_ledtube_ready", "led_ledtube_time"];

            const targetBlockTypes = ["basic_ready", "basic_kit_ready", "basic_car_ready"];

            targetBlockTypesToCheck.forEach(blockType => {
                const blocks = allBlocks.filter(block => block.type === blockType);

                blocks.forEach(targetBlock => {
                    const isConnectedToTarget = this.isConnectedToBlocks(targetBlock, targetBlockTypes);

                    if (isConnectedToTarget) {
                        const variableFieldValue = targetBlock.getFieldValue("variable");
                        const variable2FieldValue = targetBlock.getFieldValue("variable2");
                        
                        if (variableFieldValue) {
                            initCodes.add(`${variableFieldValue} = None\n`);
                        }

                        if (variable2FieldValue) {
                            initCodes.add(`${variable2FieldValue} = None\n`);
                        }
                    }
                });
            });

            let codeForTargetBlock = "";
            allBlocks.forEach(block => {
                if (targetBlockTypes.includes(block.type)) {
                    codeForTargetBlock += javascriptGenerator.blockToCode(block);
                }
            });

            // 생성된 초기화 코드들을 시작 부분에 추가
            let combinedInitCode = [...initCodes].join('');
            if (!codeForTargetBlock.startsWith(combinedInitCode)) {
                codeForTargetBlock = combinedInitCode + codeForTargetBlock;
            }

            if (this.code !== codeForTargetBlock) {
                this.code = codeForTargetBlock;
                this.setCode(codeForTargetBlock);
            }
        },

        // 연결된 블록 확인을 위한 추가 메서드
        isConnectedToBlocks(block, targetTypes) {
            let parent = block.getParent();
            while (parent) {
                if (targetTypes.includes(parent.type)) {
                    return true;
                }
                parent = parent.getParent();
            }
            return false;
        },
        // 교구 선택 버튼들
        getToolboxByField(field) {
            switch (field) {
                case 'BOT':
                    return BotToolbox;
                case 'KIT':
                    return KitToolbox;
                case 'CAR':
                    return CarToolbox;
                case 'LESSON':
                    return LessonToolbox;
                default:
                    return {};
            }
        },

        // 교구 선택 버튼을 눌렀을 때 데이터 초기화 후 누른버튼 카테고리 불러온다는 내용
        showAndClearCategoriesByField(field) {

            // 현재 workspace의 상태 저장
            this.saveWorkspace(this.selectedField);
            Blockly.getMainWorkspace().clear();
            this.selectedField = field;
            const toolbox = this.getToolboxByField(field);
            Blockly.getMainWorkspace().updateToolbox(toolbox);
            this.loadWorkspace(this.selectedField);

            // 카테고리(flyout 이미지 추가)
            this.insertIcon();

            // 카테고리(flyout) 닫기
            Blockly.getMainWorkspace().toolbox_.flyout_.hide();
        },

        //카테고리에 이미지 넣는 부분
        insertIcon() {
            const toolboxes = document.querySelectorAll(".blocklyTreeLabel");
            let prevSelectedElement = null;

            toolboxes.forEach((toolbox) => {
                const img = document.createElement("img");
                const imgName = toolbox.textContent.toLowerCase()
                
                img.src = this[imgName]
                
                img.style.width = '70%';
                img.style.display = 'block';
                img.style.margin = '0 auto';
                toolbox.parentNode.insertBefore(img, toolbox);
            });

            const toolboxContents = document.querySelector('.blocklyToolboxContents');
            
            if (toolboxContents) {
                // Dom 변화를 감지하는 observer 생성
                const observer = new MutationObserver((mutationsList) => {
                    for (const mutation of mutationsList) {
                        // 반환 유형이 'attributes'이고 변환된 속성 이름이 'class'인 경우
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            // 이전에 선택된 요소가 있으면
                            if (prevSelectedElement) {
                                const imgElement = prevSelectedElement.querySelector('img');
                                const spanElement = prevSelectedElement.querySelector('.blocklyTreeRowContentContainer .blocklyTreeLabel');
                                if (imgElement) {
                                    const clickName = spanElement.textContent.toLowerCase();
                                    imgElement.src = this[clickName];
                                }
                            }
                            // 현재 선택된 요소를 찾음
                            const selectedElement = toolboxContents.querySelector('.blocklyTreeSelected');
                            if (selectedElement) {
                                const imgElement = selectedElement.querySelector('img');
                                const spanElement = selectedElement.querySelector('.blocklyTreeRowContentContainer .blocklyTreeLabel');
                                if (imgElement) {
                                    const clickName = spanElement.textContent.toLowerCase() + "Click";
                                    imgElement.src = this[clickName];
                                }
                            }
                            // 현재 선택된 요소를 변수에 저장 (이것은 위의 이전에 선택된 요소에서 활용)
                            prevSelectedElement = selectedElement;
                        }
                    }
                });
                observer.observe(toolboxContents, { attributes: true, subtree: true });
            }
        },
        
        toggleCodeVisibility() {
            this.isCodeVisible = !this.isCodeVisible;
            const codeContainer = document.querySelector(".code-container");
            if (codeContainer) {
                if (this.isCodeVisible) {
                    codeContainer.classList.add("show");
                } else {
                    codeContainer.classList.remove("show");
                }
            }
            
            this.$nextTick(() => {
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 0);
            });
        },

        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },

        updateRecognizedText(text) {
            this.recognizedTextFromModal = text;
        },

        exportBlocks(){            
            let xml = Blockly.Xml.workspaceToDom(this.workspace);
            let xmlText = Blockly.Xml.domToPrettyText(xml);
            return xmlText;

        },

        saveTextAsFile(filename) {
            let text = this.exportBlocks()
            const blob = new Blob([text], { type: 'text/xml;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = filename;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        },

        //블록코딩 import
        cleanBlockWorkspace() {
            Blockly.getMainWorkspace().clear();
        },

        importBlocks(xmlText) {
            this.cleanBlockWorkspace(); // 기존 작업 공간을 정리
            let xml = Blockly.Xml.textToDom(xmlText); // 문자열에서 XML DOM으로 변환
            Blockly.Xml.domToWorkspace(xml, this.workspace); // XML을 작업 공간으로 가져오기
        },

        importBlocksFromFile() {
            this.loadTextFile(this.importBlocks.bind(this)); 
            // this.importBlocks 함수에 현재 컨텍스트(this)를 바인딩하여 전달
        },

        loadTextFile(func) {
            let fileInput = document.createElement("input");

            fileInput.type = 'file';
            fileInput.style.display = 'none';
            fileInput.onchange = function(e) {
                let file = e.target.files[0];
                if (!file) {
                    return;
                }
                let reader = new FileReader();
                reader.onload = function(e) {
                    let contents = e.target.result;
                    func(contents); // 파일의 내용을 func 함수에 전달하여 호출
                    document.body.removeChild(fileInput); // input 요소를 DOM에서 제거
                };
                reader.readAsText(file);
            };

            document.body.appendChild(fileInput);
            fileInput.click(); // 사용자 대신 file input을 클릭하는 행위를 프로그래매틱하게 실행
        }


    },
}
</script>

<style src="@/assets/css/block/blockcontents.css" />