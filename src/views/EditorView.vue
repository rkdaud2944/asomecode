<template>
    <q-layout class="body" view="lhh LpR lff" container sclass="shadow-2 rounded-borders">
        <q-header reveal class="header" style="background: #353543;">
            <q-toolbar>
                    <ul style="width: auto; height: 30px; float: left; overflow: hidden;">
                       
                        <li class="button" @click="run" label="Run">
                            <img src="../../public/images/common/editor/run.png" class="button-img">
                        </li>
                        <li class="button" @click="stop()" label="Stop">
                            <img src="../../public/images/common/editor/stop.png" class="button-img">
                        </li>
                        <li class="button" @click="upload" label="Upload">
                            <img src="../../public/images/common/editor/update.png" class="button-img">
                        </li>
                        <li class="button" @click="open" label="Open">
                            <img src="../../public/images/common/editor/open.png" class="button-img">
                        </li>
                        <li class="button" @click="save" label="Save">
                            <img src="../../public/images/common/editor/save.png" class="button-img">
                        </li>


                        <!-- <q-btn @click="run" icon="play_arrow" class="q-mt-md q-mb-md" color="primary" label="Run" />
                        <q-btn @click="stop()" icon="stop_circle" class="q-mt-md q-mb-md q-ml-sm" color="deep-orange" label="Stop" />     
                        <q-btn @click="upload" icon="upload_file" class="q-mt-md q-mb-md" color="secondary" label="Upload" />
                        <q-btn @click="open" icon="folder_open" class="q-mt-md q-mb-md q-ml-sm" color="purple" label="Open" />
                        <q-btn @click="save" icon="save" label="Save" /> -->
                        </ul>
            </q-toolbar>
        </q-header>

        <q-footer class="footer">
            <q-toolbar>
                <q-toolbar-title></q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <q-page>
                <v-ace-editor
                    v-model:value="content" 
                    @update:value="onChanged" 
                    class="editor" 
                    lang="python" 
                    theme="monokai"
                    :options="{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true
                    }"/>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import localfile from "@/globals/localfile";
import { Dialog } from 'quasar'
import { VAceEditor } from "vue3-ace-editor";
import VueBase from "@/mixin/vue-base";
import remoteSerial from "@/globals/remote-serial";
import LatencyTimer from "@/utils/latency-timer";
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';


export default {
    mixins: [VueBase],

    components: { VAceEditor },

    data() {
        return {
            content: '',
            savedContent: '',
        }
    },
    
    beforeMount(){
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
    },

    mounted() {
        this.content = localStorage.getItem("code");
        this.timer = new LatencyTimer(5000, () => this.saveToLocalStorage());
        this.timer.start();
    },

    methods: {
        ...remoteSerial,

        run() {
            this.runCode(this.content);
            this.saveToLocalStorage();
        },

        upload() {
            Dialog.create({
                dark: true,
                title: '파일이름을 입력해주세요',
                message: '파일이름',
                prompt: {
                    type: 'text',
                    model: ''
                },
                cancel: true,
                persistent: true
            }).onOk(filename => {
                if (!filename) return;
                if (!filename.endsWith('.py')) {
                    filename += '.py';
                }
                remoteSerial.uploadTextToBoard(filename, this.content);
            });
        },

        async open() {
            this.content = await localfile.loadFileAsText('Python', 'py');
        },

        save() {
            localfile.saveTextToFile('Python', 'py', this.content);
        },

        onChanged() {
            this.timer.reset();
        },

        saveToLocalStorage() {
            if (this.content == this.savedContent) return;
            this.savedContent = this.content;
            localStorage.setItem("code", this.content);
        }
    }
};
</script>

<style scoped src="@/assets/css/component/editorview.css"/>
