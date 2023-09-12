<template>
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
        <!-- 에이스에디터 버튼 -->
        <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>
        <div id="code" class="cursor-pointer">
            <img :src="sourceView" @click="toggleCodeVisibility" />
        </div>
    </div>
    <!-- 어썸블록, 에이스에디터 -->
    <div class="container">
        <div ref="blocklyDiv" class="blockly-container">
        </div>
        <!-- 에이스 에디터 -->
        <div v-if="isCodeVisible" class="code-container">
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

<script setup>
// 에이스 에디터 선언
import { VAceEditor } from "vue3-ace-editor";
import 'ace-builds/src-noconflict/mode-python';

const showCode = () => (code.value = javascriptGenerator.workspaceToCode(foo.value.workspace));
const foo = ref();
const code = ref();
const isCodeVisible = ref(false);
const store = useStore();

// 아래 toggleCodeVisibility는 수정해야하는 코드
// 이 버튼은 에이스에디터를 여닫는 버튼인데, 단순히 display를 none,block하는게 아니라,
// 에디터 자체를 숨겨버리는 기능이라 에디터를 숨기고 블록을 생성하면,
// 코드 자체가 만들어지지 않음.
const toggleCodeVisibility = () => {
  isCodeVisible.value = !isCodeVisible.value;
  if (isCodeVisible.value) {
    showCode();
  }
};

// 에이스 에디터 옵션 설정하는곳
const editorOptions = ref({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
});

// 에이스 에디터 값 바뀌면 뮤테이션 호출해서 코드 업뎃하는곳
watch(code, (newCode) => {
  if (isCodeVisible.value) {
    store.commit('setCode', newCode);
  }
});

</script>

<script>

// 각종 선언코드
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
            // 이미지 호출코드들
            asomebotIcon: images.asomebotIcon,
            asomebotIconClick: images.asomebotIconClick,
            asomekitIcon: images.asomekitIcon,
            asomekitIconClick: images.asomekitIconClick,
            asomecarIcon: images.asomecarIcon,
            asomecarIconClick: images.asomecarIconClick,
            sourceView: images.sourceView,
            // 에이스 에디터 기본값 : null
            workspace: null,
            // 교구 선택 버튼 기본값 : BOT
            selectedField: 'BOT',
            // 에이스 에디터 초기값
            isCodeVisible: true
        }
    },
    beforeUnmount() {
        // 에이스에디터 코드 뷰엑스로 넘겨줌
        this.SetCode(null)
    },
    mounted() {
        this.toggleCodeVisibility();
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
                toolbox: this.getFilteredToolboxByField('BOT'),
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
                trashcan: true
            });
            // 에이스에디터 변경 감지용 코드
            this.workspace.addChangeListener(() => {
                this.handleWorkspaceChange(this.workspace);
                this.showCode(); 
            });
        });
    },

    methods: {
        // 뷰엑스 뮤테이션 선언
        ...mapMutations({
            setCode :'setCode',
        }),
        handleWorkspaceChange() {

        },
        // 에이스 에디터 코드(소스편집에서 따온거)
        getFilteredToolboxByField(field) {
            return {
                kind: "categoryToolbox",
                contents: BotToolbox.contents.filter(category => category.field === field)
            };
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
        },
    },
}
</script>

<style src="@/assets/css/block/blockcontents.css" />

