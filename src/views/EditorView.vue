<template>
    <q-layout class="body" view="lhh LpR lff" container sclass="shadow-2 rounded-borders">
        <q-header reveal class="header bg-black">
            <q-toolbar>
                <q-toolbar-title>
                    <div class="row" style="width: 100vh; height: 64px">
                        <q-btn @click="run" icon="play_arrow" class="q-mt-md q-mb-md" color="primary" label="Run"/>
                        <q-btn @click="stop()" icon="stop_circle" class="q-mt-md q-mb-md q-ml-sm" color="deep-orange" label="Stop"/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <q-btn icon="upload_file" class="q-mt-md q-mb-md" color="secondary" label="Upload"/>
                        <q-btn icon="folder_open" class="q-mt-md q-mb-md q-ml-sm" color="purple" label="Open"/>
                        <q-btn icon="save" class="q-mt-md q-mb-md q-ml-sm" color="brown" label="Save"/>

                        <q-btn @click="goTo('/')" icon="close" class="q-mt-md q-mb-md q-ml-sm" color="brown" label="Close"/>
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-footer class="footer">
            <q-toolbar>
                <q-toolbar-title></q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <q-page>
                <v-ace-editor v-model:value="content" @update:value="onChanged" class="editor" lang="python" theme="monokai" />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor";
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-monokai';
import VueBase from "@/vue-base";
import remoteSerial from "@/globals/remote-serial";
import LatencyTimer from "@/utils/latency-timer";

export default {
    mixins: [VueBase],

    components: { VAceEditor },

    data() {
        return {
            content: '',
            savedContent: '',
        }
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
            console.log('upload');
        },

        open() {
            console.log('open');
        },

        save() {
            console.log('save');
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