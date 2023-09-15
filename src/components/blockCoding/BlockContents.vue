<template>BOT
<div class="pre-setting">
    <!-- 교구 선택 버튼, 에이스에디터 여닫이버튼 -->
    <div>
        <!-- 교구선택버튼 -->
        <button class="b-button" :class="{ selected: selectedField === 'BOT' }" @click="showAndClearCategoriesByField('BOT')">
            <img class="img-button" :src="selectedField === 'BOT' ? asomebotIconClick : asomebotIcon"/> Asomebot
        </button>
        <button :class="{ selected: selectedField === 'KIT' }" @click="showAndClearCategoriesByField('KIT')">
            <img class="img-button" :src="selectedField === 'KIT' ? asomekitIconClick : asomekitIcon"/> Asomekit
        </button>
        <button class="c-button" :class="{ selected: selectedField === 'CAR' }" @click="showAndClearCategoriesByField('CAR')">
            <img class="img-button" :src="selectedField === 'CAR' ? asomecarIconClick : asomecarIcon"/> Asomecar
        </button>
        <!-- 아래 코드 주석해도 영향 없음. options 변수 없음. 확인 바람 -->
        <!-- <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent> -->
        <!-- 에이스에디터 버튼 -->
        <div id="code" class="cursor-pointer">
            <img :src="sourceView" @click="toggleCodeVisibility" />
        </div>
    </div>
    <div class="container">
        <!-- Blockly -->
        <div ref="blocklyDiv" class="blockly-container" :style="{flex: flexValue1}">
        </div>
        <!-- 에이스 에디터 -->
        <div class="code-container" :style="{flex: flexValue2}"> 
            <VAceEditor
                class="code-preview"
                lang="python"
                v-model:value="code" 
                :options="editorOptions"
                :style="{height: '100%', width: '90%'}">
            </VAceEditor>
        </div>
    </div>
</div>

</template>


<script>

// 각종 선언코드
import {  mapMutations  } from 'vuex';
// import { useStore } from 'vuex';
// import {  watch  } from "vue";
import "../../blocks/stocks";
// import { javascriptGenerator } from "blockly/javascript";
import images from "@/assets/images";
import Blockly from "blockly";
import { BotToolbox } from "@/blocks/B_BlockContents";
import { KitToolbox } from "@/blocks/K_BlockContents";
import { CarToolbox } from "@/blocks/C_BlockContents";
import { VAceEditor } from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-python';


export default {
    components: {
        VAceEditor
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
            
            // 에이스 에디터 기본값 : null
            workspace: null,
            // 교구 선택 버튼 기본값 : BOT
            selectedField: 'BOT',
            // 에이스 에디터 초기값
            isCodeVisible: true,

            
            code: null,
            // isCodeVisible: true,
            flexValue1: 3,
            flexValue2: 0,
            editorOptions: {
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
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
                height:"100%"
            });
            // 에이스에디터 변경 감지용 코드
            this.workspace.addChangeListener(() => {
                this.handleWorkspaceChange(this.workspace);
                this.showCode(); 
            });
        });
        
        this.$nextTick(() => {
            this.insertIcon();
        });

    },
    
    mounted() {
        // this.toggleCodeVisibility();
    },
    
    beforeUnmount() {
        // 에이스에디터 코드 뷰엑스로 넘겨줌
        this.SetCode(null)
    },

    methods: {
        // 뷰엑스 뮤테이션 선언
        ...mapMutations({
            setCode :'setCode',
        }),
        handleWorkspaceChange() {

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
                default:
                    return {};
            }
        },
        // 교구 선택 버튼을 눌렀을 때 데이터 초기화 후 누른버튼 카테고리 불러온다는 내용
        showAndClearCategoriesByField(field) {
            this.workspace.clear();
            this.selectedField = field;
            const toolbox = this.getToolboxByField(field);
            this.workspace.updateToolbox(toolbox);
            console.log("KitToolbox" + KitToolbox)
            console.log("CarToolbox" + CarToolbox)
            this.insertIcon()
        },

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

                                console.log("atd : "+spanElement.textContent)
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
            console.log("test");
            this.flexValue1 = this.flexValue1 === 3 ? 2 : 3;
            this.flexValue2 = this.flexValue2 === 0 ? 1 : 0;
            this.isCodeVisible = !this.isCodeVisible;
            
            Blockly.svgResize(this.workspace)

            // this.$nextTick(() => {
            //     console.log(11)
            //     if (this.workspace) {
            //         // Blockly.svgResize(this.workspace);
            //         Blockly.svgResize(this.workspace)
            //     }
            // });
        },


    },
    
    setup() {
        // const store = useStore();

        // watch(() => this.code, (newCode) => {
        //     if (this.isCodeVisible) {
        //         store.commit('setCode', newCode);
        //     }
        // });
        // watch(
        //     () => [this.isCodeVisible],
        //     () => {
        //         console.log("변경됨")
        //         this.$nextTick(() => {
        //             if (this.workspace) {
        //                 Blockly.svgResize(this.workspace);
        //             }
        //         });
        //     }
        // );
    },
}
</script>

<style src="@/assets/css/block/blockcontents.css" />

