<template>
    <q-form @submit="createLesson" greedy>
        <div class="lesson-title">
            <q-input outlined v-model="lessonTitle" label="제목" style="width: 50%;"
                :rules="[val => !!val || '제목을 입력해 주세요']" />
            <q-btn color="positive" style="margin-left: 20px; height: 28px;" type="submit">생성</q-btn>
            <q-btn color="warning" style="margin-left: 20px; height: 28px;" @click="clearForm">초기화</q-btn>
        </div>
        <div class="select-subject">
            <q-select outlined v-model="selectedDefaultSubject" :options="defaultSubjectSet" option-value="id"
                option-label="title" label="과목" :rules="[val => !!val || '과목을 선택해 주세요']" />
        </div>

        <div class="editor">
            <q-card class="input">
                <q-btn-group>
                    <q-btn color="secondary" @click="onImageUploadDialog" glossy label="이미지 삽입" />
                    <q-btn color="secondary" @click="onVideoUploadDialog" glossy label="동영상 삽입" />
                    <q-btn color="secondary" @click="onFunctionBtnDialog" glossy label="함수 버튼 생성" />
                    <q-btn color="secondary" @click="onCodeEditorDialog" glossy label="코드 에디터 생성" />
                </q-btn-group>
                <textarea ref="inputTextarea" class="inputText" :value="lessonContent" @input="update"></textarea>
            </q-card>

            <div class="markdown_output" v-html="markedOutput"></div>
        </div>

        <q-dialog v-model="imageUploadDialog">
            <q-card style="width: 600px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">이미지 업로드</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-file filled bottom-slots v-model="image" label="Label" counter>
                        <template v-slot:prepend>
                            <q-icon name="cloud_upload" @click.stop.prevent />
                        </template>
                        <template v-slot:append>
                            <q-icon name="close" @click.stop.prevent="image = null" class="cursor-pointer" />
                        </template>

                        <template v-slot:hint>
                            Field hint
                        </template>
                    </q-file>
                    <div>
                        <q-btn class="uploadDialog-btn" label="취소" color="primary" v-close-popup />
                        <q-btn class="uploadDialog-btn" label="등록" type="submit" color="positive"
                            @click="uploadLessonImage" />
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="videoUploadDialog">
            <q-card style="width: 600px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">비디오 업로드</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-file filled bottom-slots v-model="video" label="Label" counter>
                        <template v-slot:prepend>
                            <q-icon name="cloud_upload" @click.stop.prevent />
                        </template>
                        <template v-slot:append>
                            <q-icon name="close" @click.stop.prevent="video = null" class="cursor-pointer" />
                        </template>

                        <template v-slot:hint>
                            Field hint
                        </template>
                    </q-file>
                    <div>
                        <q-btn class="uploadDialog-btn" label="취소" color="primary" v-close-popup />
                        <q-btn class="uploadDialog-btn" label="생성" type="submit" color="positive"
                            @click="uploadLessonVideo" />
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>

        <q-dialog v-model="functionBtnDialog">
            <q-card style="width: 600px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">함수 버튼 생성</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <q-input v-model="functionName" label="버튼 이름" stack-label />
                    <div class="q-mt-md">
                        <CodeEditor v-model="functionCode" style="width: 100%;" :languages="[['python', 'Python']]" />
                    </div>
                    <div>
                        <q-btn class="uploadDialog-btn" label="취소" color="primary" v-close-popup />
                        <q-btn class="uploadDialog-btn" label="생성" type="submit" color="positive"
                            @click="createfunctionBtn" />
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-form>
</template>

<script>
/* eslint-disable */

import VueBase from "@/globals/vue-base";
import markdown from "@/globals/markdown.js";
import { debounce } from 'lodash-es'
import { ref } from 'vue'
import apiAwsS3 from "@/api/aws-s3";
import apiLesson from "@/api/lesson";
import apiSubject from "@/api/subject";
import CodeEditor from 'simple-code-editor';

export default {
    mixins: [VueBase],

    components: {
        CodeEditor
    },

    data() {
        return {
            lessonContentBaseUrl: process.env.VUE_APP_LESSON_CONTENT_BASEURL,

            defaultSubjectSet: null,
            defaultSubjectOptions: [],
            selectedDefaultSubject: null,

            lessonTitle: '',
            lessonContent: '',
        };
    },

    setup() {
        return {
            imageUploadDialog: ref(false),
            image: ref(null),

            videoUploadDialog: ref(false),
            video: ref(null),

            functionBtnDialog: ref(false),
            functionName: ref(''),
            functionCode: ref(''),
        }
    },

    updated() {
        hljs.highlightAll();
    },

    mounted() {
        this.getDefaultSubjectSet()
    },

    computed: {
        markedOutput() {
            return markdown.markedInput(this.lessonContent)
        }
    },

    methods: {
        update: debounce(function (e) {
            this.lessonContent = e.target.value
        }, 200),

        onImageUploadDialog() {
            this.imageUploadDialog = true
        },

        insertImage(insert) {
            let content = insert.replace(this.lessonContentBaseUrl + "lesson/images/", "")
            let markedImage = `[image () ${content}\n]`
            let value = this.$refs.inputTextarea.value;
            let selectionStart = this.$refs.inputTextarea.selectionStart;
            this.lessonContent = [value.slice(0, selectionStart), markedImage, value.slice(selectionStart)].join('')
        },

        onVideoUploadDialog() {
            this.videoUploadDialog = true
        },

        onFunctionBtnDialog() {
            this.functionBtnDialog = true
        },

        insertVideo(insert) {
            let content = insert.replace(this.lessonContentBaseUrl + "lesson/videos/", "")
            let markedVideo = `[video ${content}\n]`
            let value = this.$refs.inputTextarea.value;
            let selectionStart = this.$refs.inputTextarea.selectionStart;
            this.lessonContent = [value.slice(0, selectionStart), markedVideo, value.slice(selectionStart)].join('')
        },

        uploadLessonImage() {
            apiAwsS3
                .uploadLessonImage(this.image)
                .then((response) => {
                    this.insertImage(response)
                    this.imageUploadDialog = false
                })
                .catch(function (e) {
                    console.log(e);
                });
        },

        uploadLessonVideo() {
            apiAwsS3
                .uploadLessonVideo(this.video)
                .then((response) => {
                    this.insertVideo(response)
                    this.videoUploadDialog = false
                })
                .catch(function (e) {
                    console.log(e);
                });
        },

        createfunctionBtn() {
            let functionNameId = this.functionName.replaceAll(' ', '-')
            let functionBtnContent = `[button ${functionNameId}\n${this.functionCode}\n]`

            let value = this.$refs.inputTextarea.value;
            let selectionStart = this.$refs.inputTextarea.selectionStart;
            this.lessonContent = [value.slice(0, selectionStart), functionBtnContent, value.slice(selectionStart)].join('')

            this.functionName = ''
            this.functionCode = ''
            this.functionBtnDialog = false
        },

        onCodeEditorDialog() {
            let codeEditorContent = `#[code](${this.functionName})\n` +
                `<pre onclick="openEditor(getCode('code4'))">\n<code id="code4" class="python">` +
                `\n# 여기에 코드를 작성해 주세요.\n` +
                `</code>\n</pre>\n`

            let value = this.$refs.inputTextarea.value;
            let selectionStart = this.$refs.inputTextarea.selectionStart;
            this.lessonContent = [value.slice(0, selectionStart), codeEditorContent, value.slice(selectionStart)].join('')
        },

        getDefaultSubjectSet() {
            apiSubject.defaultSubjectSet()
                .then((response) => {
                    this.defaultSubjectSet = response.data;
                })
                .catch(this.showError);
        },

        createLesson() {
            let body = {
                title: this.lessonTitle,
                description: "",
                htmlUrl: "",
                content: this.lessonContent,
                defaultSubjectId: this.selectedDefaultSubject.id,
            }
            apiLesson.create(body)
                .then(() => {
                    this.showSuccess();
                    this.$router.push("/backOffice/lessons");
                })
                .catch(this.showError);
        },

        clearForm() {
            this.selectedDefaultSubject = null;
            this.input = '';
            this.lessonTitle = '';
            this.lessonContent = '';
        },
    }
}
</script>





<style src="@/assets/css/component/markdown_content.css"/>
<style>
.lesson-title {
    display: flex;
    margin: 20px 20px 0px 20px;
    align-items: center;
}

.select-subject {
    width: 30%;
    margin-left: 20px;
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

.markdown_output {
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

.uploadDialog-btn {
    float: right;
    margin: 10px 0px 10px 10px;
}
</style>