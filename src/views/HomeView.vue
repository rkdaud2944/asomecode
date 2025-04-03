<template>
    <div class="main-wrap">
        <div class="main-mid">
            <div>
                <h3 class="Pretendard-ExtraBold">AsomeIT</h3>
                <p class="Pretendard-Regular">어썸코드는 어썸아이티만의 코딩 학습 전용 프로그램입니다.</p>
            </div>
        </div>
        <div class="main-cts-wrap">
            <div class="main-cts">
                <div> 
                    <!-- 여기는 원래 위에 main-mid가 217이어야 하는데 이부분 때문에 177로함, 폰트사이즈 20 상하 여백 10 -->
                    <div class="curriculum-title Pretendard-Medium">Curriculum</div>
                    <div class="curriculum">
                        <div class="card-wrap"
                            v-for="(card, index) in cards"
                            :key="index"
                            @mousedown="clicked = true"
                            @mouseup="clicked = false"
                        >
                            <div class="card" @click="goSelectCurriculum(card.id, card.title)">
                                <div class="card-front"
                                    :style="{ 
                                        'background': card.bgColor,
                                        'color': hoverIndex === index ? card.hoverTxtAge : '#000',
                                        transition: 'background-color 0.5s ease, color 0.5s ease',
                                        'backgroundImage': `url(${card.image})`
                                    }">
                                    <p class="age NotoSansKR-Regular"
                                        :style="{
                                            'color': card.txtAge,
                                            'border': `1px solid ${card.txtAge}`
                                        }">
                                        {{ card.age }}
                                    </p>
                                    <h4 class="title Pretendard-ExtraBold">{{ card.title }}</h4>
                                    <p class="description Pretendard-Regular">{{ card.description }}</p>
                                    <div class="home-chapter Pretendard-Regular" 
                                        :style="{ 'color': card.txtChapter, 'background-color': card.bgChapter }">
                                        {{ card.chapter }}
                                    </div>
                                </div>
                                <!-- hover -->
                                <div class="card-back"
                                    :style="{ 
                                        'background': clicked === true ? card.clickBgColor : card.hoverBgColor,
                                        'color': hoverIndex === index ? card.hoverTxtAge : '#000',
                                        transition: 'background-color 0.5s ease, color 0.5s ease',
                                        'backgroundImage': `url(${card.hoverImage})`
                                    }">
                                    <p class="age NotoSansKR-Regular"
                                        :style="{
                                            'color': clicked === true ? card.clickTxtAge : card.hoverTxtAge,
                                            'border': `1px solid ${clicked === true ? card.clickTxtAge : card.hoverTxtAge}`
                                        }">
                                        {{ card.age }}
                                    </p>
                                    <h4 class="title Pretendard-ExtraBold"
                                        :style="{
                                            'color': clicked === true ? card.clickTxtTitle : card.hoverTxtTitle,
                                            'text-shadow': '2px 2px 2px gray',
                                            'opacity': clicked === true ? '0.5' : '1'
                                        }">
                                        {{ card.title }}
                                    </h4>
                                    <p class="description Pretendard-Regular">{{ card.description }}</p>
                                    <div class="home-chapter Pretendard-Regular" 
                                        :style="{ 'color': card.hoverTxtChapter, 'background-color': card.hoverBgChapter }">
                                        {{ card.chapter }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <!-- TIP 텍스트는 그대로 영역을 유지하지만 보이지 않게 처리 -->
                    <div class="tip-title Pretendard-Medium" style="visibility: hidden;">TIP</div>
                    <div class="tip-wrap">
                        <div class="tip" 
                            v-for="(card, index) in tipCards"
                            :key="index"
                            @mousedown="clickedStates[index] = true"
                            @mouseup="clickedStates[index] = false"
                            @mouseover="hoveredStates[index] = true"
                            @mouseleave="hoveredStates[index] = false; clickedStates[index] = false"
                            @click="openLink(card.href)"
                        >
                            <div class="tip-link" :style="{ 'text-decoration': 'none' }">
                                <div :class="`tip-box box${index+1}`"
                                    :style="tipComputeStyle(card, index)">
                                    <div>
                                        <p class="NotoSansKR-Regular p1">{{ card.title }}</p>
                                        <p class="Pretendard-Regular p2">{{ card.description }}</p>
                                    </div>
                                    <div>
                                        <img :src="card.image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import images from "@/assets/images"; 
import apiSubjectSet from "@/api/subjectSet";
import { cards } from "@/data/main-cards";
import { tipCards } from "@/data/main-tip-cards";

// Electron의 shell 모듈을 불러옵니다.
const { shell } = require('electron');

export default {
    components: {
        // Subject,
    },

    setup() {
        return {
            selectedSubjectSetId: localStorage.getItem('selectedSubjectSetId'),
        }
    },

    data() {
        return {
            subjects: {},
            isMouseOverNotice: false,
            isMouseOverCommunity: false,
            isMouseOverLibrary: false,
            isMouseOverFaq: false,
            logo2: images.logo2,
            notice: images.notice,
            noticeHover: images.noticeHover,
            community: images.community,
            communityHover: images.communityHover,
            library: images.library,
            libraryHover: images.libraryHover,
            faq: images.faq,
            faqHover: images.faqHover,
            asomeitQuestionMark: images.asomeitQuestionMark,
            
            cards: cards,
            tipCards: tipCards,
            hoveredStates: {},
            clickedStates: {},
            clicked: false, // 클릭 상태 초기화
        }
    },
    computed: {
        noticeImage() {
            return this.isMouseOverNotice ? this.noticeHover : this.notice;
        },
        communityImage() {
            return this.isMouseOverCommunity ? this.communityHover : this.community;
        },
        libraryImage() {
            return this.isMouseOverLibrary ? this.libraryHover : this.library;
        },
        faqImage() {
            return this.isMouseOverFaq ? this.faqHover : this.faq;
        }
    },
    mounted() {
        this.getSubjectSet();
        window.addEventListener('mouseup', this.globalMouseUpHandler);
    },
    beforeUnmount() {
        window.removeEventListener('mouseup', this.globalMouseUpHandler);
    },
    methods: {
        onMouseOver(type) {
            if(type === 'notice') this.isMouseOverNotice = true;
            if(type === 'community') this.isMouseOverCommunity = true;
            if(type === 'library') this.isMouseOverLibrary = true;
            if(type === 'faq') this.isMouseOverFaq = true;
        },
        onMouseLeave(type) {
            if(type === 'notice') this.isMouseOverNotice = false;
            if(type === 'community') this.isMouseOverCommunity = false;
            if(type === 'library') this.isMouseOverLibrary = false;
            if(type === 'faq') this.isMouseOverFaq = false;
        },
        onClickNotice() {
            this.$router.push({ path: '/notice/list' });
        },
        getSubjectSet() {
            apiSubjectSet.getSubjectSet(this.selectedSubjectSetId)
                .then((response) => {
                    this.subjects = response.data.subjects;
                })
                .catch(this.showError);
        },
        tipComputeStyle(card, index) {
            if (this.clickedStates[index]) {
                return { background: card.clickBgColor, color: card.clickTxtColor };
            } else if (this.hoveredStates[index]) {
                return { background: card.hoverBgColor, color: card.hoverTxtColor };
            } else {
                return { background: card.bgColor, color: card.txtColor };
            }
        },
        goSelectCurriculum(id, title) {
            this.$router.push({ 
                path: `/curriculum`,
                query: { id: `${id}`, title: `${title}` }
            });
        },
        globalMouseUpHandler() {
            if (this.clicked) this.clicked = false;
        },
        openLink(url) {
            // TIP 카드의 경우 /AutomaticProgram이면 내부 라우터로 이동
            if (url === '/AutomaticProgram') {
                this.$router.push(url);
            } else {
                // 어썸코드 사용법, 어썸아이티 등은 Electron 창이 아닌 기본 브라우저로 엽니다.
                shell.openExternal(url);
            }
        },
    }
}
</script>

<style scoped src="@/assets/css/component/homeview.css"/>
<style scoped src="@/assets/css/font.css"/>
<style scoped>
.tip {
    cursor: pointer;
}
</style>
