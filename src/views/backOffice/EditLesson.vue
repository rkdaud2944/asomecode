<template>
    <div class="lesson-title">
        <q-input outlined v-model="lesson.title" label="제목" style="width: 50%;" />
        <q-btn color="positive" style="margin-left: 20px; height: 28px;" @click="updateLesson">수정</q-btn>
        <q-btn color="primary" style="margin-left: 10px; height: 28px;" @click="goBack()">취소</q-btn>
    </div>

    <div class="editor">
        <q-card class="input">
            <q-btn-group>
                <q-btn color="secondary" @click="onImageUploadDialog" glossy label="이미지 삽입" />
                <q-btn color="secondary" @click="onVideoUploadDialog" glossy label="동영상 삽입" />
            </q-btn-group>
            <textarea ref="inputTextarea" class="inputText" :value="lesson.content" @input="update"></textarea>
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
import VueBase from "@/VueBase";
import { debounce } from 'lodash-es'
import markdown from "@/utils/markdown.js";
import { ref } from 'vue'
import { Notify } from 'quasar'
import apiAwsS3 from "@/api/awsS3";
import apiLesson from "@/api/lesson";
export default {
    mixins: [VueBase],

    data() {
        return {
            lesson: null,
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
        this.getLesson(this.$route.query.id)
        markdown.markedInput(this.lesson.content)
    },

    computed: {
        output() {
            return markdown.markedInput(this.lesson.content)
        }
    },

    methods: {
        updateLesson() {
            let param = {
                title: this.lesson.title,
                content: this.lesson.content,
                htmlUrl: this.lesson.htmlUrl,
                description: this.lesson.description
            }
            apiLesson.updateLesson(param, this.$route.query.id)
                .then(() => {
                    Notify.create({
                        color: "blue",
                        textColor: "white",
                        message: '수정 완료!',
                    });
                })
                .catch(this.showError);
        },

        getLesson(id) {
            apiLesson.lessonDetail(id)
                .then((response) => {
                    this.lesson = response.data;
                })
                .catch(this.showError);
        },

        update: debounce(function (e) {
            this.lesson.content = e.target.value
        }, 200),

        onImageUploadDialog() {
            this.imageUploadDialog = true
        },

        insertImage(insert) {
            var markedImage = `![](${insert})`
            var value = this.$refs.inputTextarea.value;
            var selectionStart = this.$refs.inputTextarea.selectionStart;
            var output = [value.slice(0, selectionStart), markedImage, value.slice(selectionStart)].join('')
            this.lesson.content = output
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
            this.lesson.content = output
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