<template>
    <div class="header nav-padding">
        <a href="/">
            <img src="/images/common/logom.png" class="logo" />
        </a>
    </div>

    <div class="lesson-title">
        <q-input outlined v-model="text" label="제목" style="width: 50%;" />
        <q-btn color="primary" style="margin-left: 20px; height: 28px;">수정</q-btn>
    </div>

    <div class="editor">
        <q-card class="input">
            <q-btn-group>
                <q-btn color="secondary" @click="onImageUploadDialog" glossy label="이미지 삽입" />
                <q-btn color="secondary" @click="onVideoUploadDialog" glossy label="동영상 삽입" />
            </q-btn-group>
            <textarea ref="inputTextarea" class="inputText" :value="input" @input="update"></textarea>
        </q-card>

        <div class="markdown_output" v-html="output"></div>
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
                    <q-btn class="uploadDialog-btn" label="등록" type="submit" color="positive"
                        @click="uploadLessonVideo" />
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { debounce } from 'lodash-es'
import lesson03 from "@/data/lesson03.js";
import markdown from "@/utils/markdown.js";
import { ref } from 'vue'
import apiAwsS3 from "@/api/awsS3";
export default {
    data() {
        return {
            input: lesson03,
        };
    },

    setup() {
        return {
            imageUploadDialog: ref(false),
            image: ref(null),

            videoUploadDialog: ref(false),
            video: ref(null),
        }
    },

    mounted() {
        markdown.markedInput(lesson03)
    },

    computed: {
        output() {
            return markdown.markedInput(this.input)
        }
    },

    methods: {
        update: debounce(function (e) {
            this.input = e.target.value
        }, 200),

        onImageUploadDialog() {
            this.imageUploadDialog = true
        },

        insertImage(insert) {
            var markedImage = `![](${insert})`
            var value = this.$refs.inputTextarea.value;
            var selectionStart = this.$refs.inputTextarea.selectionStart;
            var output = [value.slice(0, selectionStart), markedImage, value.slice(selectionStart)].join('')
            this.input = output
        },

        onVideoUploadDialog() {
            this.videoUploadDialog = true
        },

        insertVideo(insert) {
            var markedVideo =
                `<video controls width="100%">\n    <source src="${insert}" type="video/webm">\n</video>`
            var value = this.$refs.inputTextarea.value;
            var selectionStart = this.$refs.inputTextarea.selectionStart;
            var output = [value.slice(0, selectionStart), markedVideo, value.slice(selectionStart)].join('')
            this.input = output
        },

        uploadLessonImage() {
            apiAwsS3
                .uploadLessonImage(this.image, this.$route.query.id)
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
                .uploadLessonVideo(this.video, this.$route.query.id)
                .then((response) => {
                    this.insertVideo(response)
                    this.videoUploadDialog = false
                })
                .catch(function (e) {
                    console.log(e);
                });
        }
    }
}
</script>
    








<style src="@/assets/css/component/markdown_content.css"/>
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