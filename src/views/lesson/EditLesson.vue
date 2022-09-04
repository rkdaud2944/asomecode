<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="logo" />
        </a>
    </div>

    <div class="lesson-title">
        <q-input outlined v-model="text" label="제목" style="width: 50%;"/>
        <q-btn color="primary"  style="margin-left: 20px; height: 28px;">수정</q-btn>
    </div>

    <div class="editor">
        <q-card class="input">
            <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
                align="justify" narrow-indicator infinite>
                <q-tab name="md" label="md" />
                <q-tab name="style" label="style" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="md">
                    <textarea class="inputText" :value="input" @input="update"></textarea>
                </q-tab-panel>

                <q-tab-panel name="style">
                    <textarea class="inputText" :value="inputStyle"></textarea>
                </q-tab-panel>
            </q-tab-panels>
        </q-card>

        <div class="output" v-html="output"></div>
    </div>
</template>

<script>
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import lesson03 from "@/data/lesson03.js";

export default {
    data() {
        return {
            tab: "md",
            input: lesson03,
            inputStyle: "<style>\n\n</style>",
        };
    },

    computed: {
        output() {
            return marked(this.input)
        }
    },
    methods: {
        update: debounce(function (e) {
            this.input = e.target.value
        }, 200)
    }
}
</script>
    
<style>
@media (min-width: 883px) {
    .header {
        width: 100%;
        background: rgb(255, 129, 35);
        height: 70px;
    }
}

@media (min-width:783px) {
    .logo {
        bottom: 65px;
        left: 115px;
        width: 120px;
        height: 45px;
        position: relative;
    }

    .nav-padding {
        padding-top: 160px;
    }
}

.lesson-title {
    display: flex;
    margin: 20px;
    align-items: center;
}

.editor {
    height: 100vh;
    display: flex;
}

.input {
    width: 50%;
    height: 100vh;
    box-sizing: border-box;
}

.output {
    overflow: auto;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
}

.inputText {
    width: 100%;
    height: 100vh;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
}
</style>