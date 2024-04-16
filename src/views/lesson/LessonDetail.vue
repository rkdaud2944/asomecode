<template>

    <div class="container-wrap">
        <div class="container">
            <div class="container-top">
                <div class="back-button" @click="historyBack">
                    <div class="ico_arrow"></div>
                </div>

                <div class="container-top-txt">                    
                    <p class="subject-title Pretendard-Regular"> {{ this.$route.query.subjectTitle }} </p>
                    <p class="lesson-chapter Pretendard-Regular"
                    :style="chapterStyleHandler"> {{ this.$route.query.index }}차시 </p>
                    <p class="chapter-title Pretendard-Regular"> {{ this.$route.query.title }} </p>
                </div>
            </div>

            <div class="cts-wrap">
                <div class="objectives Pretendard-Medium">
                    <div @click="moveTo(title.tag)" 
                        :class="`detail-title tag-${title.tag} defaultTag`"
                        v-for="(title, index) in titles" :key="index"
                        :title="title.name"
                        :style="detailTitleStyleHandler">
                        <p>{{title.name}}</p>                        
                    </div>
                </div>

                <div class="cts" :class="{c9contents: scrollPosition > 10}"><br>
                    <div class="markdown_output" v-html="output"></div>
                    <div v-for="editor in editors" :key="editor.id">
                        <v-ace-editor 
                            v-model:value="editor.content" 
                            @update:value="onChanged" 
                            class="editor" 
                            lang="python" 
                            theme="monokai"
                            :options="{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true
                            }"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import VueBase from '@/mixin/vue-base';
import markdown from "@/utils/markdown";
import apiLesson from "@/api/lesson";
import images from "@/assets/images" 
import { VAceEditor } from "vue3-ace-editor";
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import LatencyTimer from "@/utils/latency-timer";

export default {
    mixins: [VueBase],
    
    components: { VAceEditor },
    
    data() {
        return {
            lesson: {},
            titles: [],
            output: null,
            scrollPosition: null,

            logom: images.logom,
            lectureList: images.lectureList,
            contentsList: images.contentsList,
            arrow2: images.arrow2,
            
            debouncedScrollHandler: null,
            editors: [],
            test: "123123"
        };
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
        // this.timer = new LatencyTimer(5000, () => this.saveToLocalStorage());
        // this.timer.start();

        this.debouncedScrollHandler = this.debounce(this.handleScroll, 1);
        window.addEventListener('scroll', this.debouncedScrollHandler);
        window.scrollTo(0, 0);
        this.getLesson(this.$route.query.id);
        this.markdownStyle();

    },
    
    updated() {
        hljs.highlightAll();
    },

    
    beforeUnmount() {
        if (this.debouncedScrollHandler) {
            window.removeEventListener('scroll', this.debouncedScrollHandler);
        }
    },

    computed: {
        chapterStyleHandler() {
            return {
                '--cahpter-border-color': this.$route.query.color,
                '--cahpter-background-color': this.$route.query.color,                

            }
        },

        detailTitleStyleHandler() {
            return {        
                '--detail-title-background-color-first': this.$route.query.color,
                '--detail-title-background-color-active': this.$route.query.color,
                '--detail-title-background-color-tag-active': this.$route.query.color,

                '--markdown-h2': this.$route.query.color,
            }
        },
    },

    methods: {
        moveTo(tag) {
            const element = window.document.getElementById(tag);
            const top = element.offsetTop - 0; 

            // 현재 항목의 클래스를 추가
            if (element) {
                element.classList.add("active");
            }

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        },

        getLesson(id) {
            apiLesson.lessonDetail(id)
                .then((response) => {
                    this.lesson = response.data;
                    this.output = markdown.parse(this.lesson.content)

                    let domparser = new DOMParser()
                    let doc = domparser.parseFromString(this.output, 'text/html')
                    
                    // editorDiv 클래스를 가진 div 요소를 찾아 데이터로 변환
                    const editorDivs = doc.querySelectorAll(".editorDiv");
                    this.editors = Array.from(editorDivs).map((div, index) => ({
                        id: index,
                        content: div.textContent.trim(),
                        language: 'python',  // 이 부분은 적절히 조정 필요
                    }));

                    console.log("aa : "+this.editors[0].content)

                    // 원본 HTML에서 editorDiv들을 제거
                    editorDivs.forEach(div => div.remove());


                    const elements = doc.getElementsByTagName("h2");
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].id = i
                        this.titles.push({
                            name: elements[i].innerText,
                            tag: elements[i].id,
                        });
                    }
                    
                    let serializer = new XMLSerializer();
                    this.output = serializer.serializeToString(doc);
                })
            .catch(this.showError);
        },        
        
        historyBack(){
            this.$router.go(-1);

        },

        handleScroll(){
            const h2Elements = document.querySelectorAll('h2');
            let activeFound = false;
            
            h2Elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;

                // 상단에서부터 200px~400px 내에 있는 요소에만 .active 클래스 적용
                if (elementTop >= 190 && elementTop <= 400 && !activeFound) {
                const id = element.id;
                const activeTag = document.querySelector(`.tag-${id}`);
                if (activeTag && !activeTag.classList.contains('tag-active')) {
                    // 첫번째 목차 활성화 제거
                    document.querySelectorAll('.defaultTag').forEach(element => {
                        element.classList.remove('defaultTag');
                    });
                    // 이전 .active 클래스 제거
                    document.querySelectorAll('.tag-active').forEach(tag => {
                        tag.classList.remove('tag-active');
                    });
                    // 현재 요소에 .active 클래스 추가
                    activeTag.classList.add('tag-active');
                    
                    // .objectives 스크롤 조정
                    const objectives = document.querySelector('.objectives');
                    const activeTagTop = activeTag.offsetTop;
                    if (activeTagTop < 140 ){
                        objectives.scrollTop = activeTagTop;
                    }
                }
                activeFound = true; // 활성 상태 요소를 찾았음을 표시
                }
            });

            const objectives = document.querySelector('.objectives');
            // 목차 위치
            if(window.scrollY > 50) {
                // 애니메이션 효과
                if (!objectives.classList.contains('animated')) {
                    objectives.classList.add('animated');
                    objectives.style.animation = 'moveUp 1s forwards';
                    objectives.classList.remove('animated');
                }
            } else {
                objectives.classList.add('animated');
                objectives.style.animation = 'moveDown 1s forwards';
                objectives.classList.remove('animated');
            }
        },

        // 디바운스 함수
        debounce(func, wait) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                func.apply(context, args);
                }, wait);
            };
        },

        // h2 스타일 동적 변경
        markdownStyle() {            
            var mkColor =document.querySelectorAll('.markdown_output');
            for ( var i = 0; i < mkColor.length; i++ ) {
                mkColor[i].style.color = this.$route.query.color;
            }
        },

        
        onChanged() {
            this.timer.reset();
        },

    },
};
</script>

<!-- <style scoped src="@/assets/css/component/lesson.css"/> -->
<style src="@/assets/css/component/markdown_content.css"/>
<style scoped src="@/assets/css/component/lesson_detail.css"/>
<style scoped src="@/assets/css/font.css"/>