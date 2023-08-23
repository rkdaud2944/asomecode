<template>
    <div ref="blocklyDiv" style="
        height: 800px;
        width: 97%;
        margin-left: auto;
        margin-right: auto;
        display: block;
    ">
    <h3>블록코딩 화면</h3>
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
        </div>
    </div>
    
</template>

<script>
    import images from "@/assets/images";
    import Blockly from "blockly";
    
    const initialToolbox  = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "BASIC",
                "filed" : "BOT",
                "colour": "14A2FF",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_reday" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "WALK",
                "filed" : "BOT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "DANCE",
                "filed" : "BOT",
                "colour": "FF61FF",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "SENSOR",
                "filed" : "BOT",
                "colour": "FFCD00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "SOUND",
                "filed" : "BOT",
                "colour": "EC1961",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "ADVANCE",
                "filed" : "BOT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "INTERNET",
                "filed" : "BOT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },


            {
                "kind": "category",
                "name": "BASIC",
                "filed" : "KIT",
                "colour": "FF9A01",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "PREPARE",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "LED",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "BUTTON",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "SENSOR",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "SOUND",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "ADVANCE",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "INTERNET",
                "filed" : "KIT",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },


            {
                "kind": "category",
                "name": "BASIC",
                "filed" : "CAR",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "MOVE",
                "filed" : "CAR",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "SENSOR",
                "filed" : "CAR",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "ADVENCE",
                "filed" : "CAR",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "INTERNET",
                "filed" : "CAR",
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
        ]
    };

    const initialToolbox2 = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "BASIC",
                "filed" : "BOT",
                "colour": "14A2FF",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_reday" },
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                    { "kind": "block", "gap": "8", "type": "Motor_angle" },
                ],
            },
        ]
    };


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
                selectedField: 'BOT'
            }
        },

        beforeMount() {
            this.$nextTick(() => {
                 this.workspace = Blockly.inject(this.$refs.blocklyDiv, {
                    toolbox: this.getFilteredToolboxByField('BOT') // 처음에 BOT 카테고리만 표시합니다.
                });

                this.workspace.addChangeListener(() => {
                    this.handleWorkspaceChange(this.workspace);
                });
            });
        },

        methods: {
            handleWorkspaceChange(workspace) {
                console.log("작업공간 변경사항 처리 로직 실행" + workspace);
                console.log("initialToolbox2" + initialToolbox)
            },

            getFilteredToolboxByField(field) {
                return {
                    kind: "categoryToolbox",
                    contents: initialToolbox2.contents.filter(category => category.filed === field)
                };
            },

            showAndClearCategoriesByField(field) {
                this.workspace.clear();
                this.selectedField = field;
                const filteredToolbox = this.getFilteredToolboxByField(field);
                this.workspace.updateToolbox(filteredToolbox);
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
</style>
