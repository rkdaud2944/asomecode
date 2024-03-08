<template>

    <div class="main-wrap">
        <div class="main-mid">
            <div>
                <h3 class="Pretendard-Medium">AsomeIT</h3>
                <p class="Pretendard-Regular">어썸코드는 어썸아이티만의 코딩 학습 전용 프로그램입니다.</p>
            </div>
        </div>
        <div class="cts-wrap">
            <div class="cts">
                <div > 
                    <!-- 여기는 원래 위에 main-mid가 217이어야 하는데 이부분 때문에 177로함, 폰트사이즈 20 상하 여백 10 -->
                    <div class="curriculum-title Pretendard-Medium">Curriculum</div>
                    <div class="curriculum">
                        <div class="card-wrap"
                            v-for="(card, index) in cards"
                            :key="index"
                            @mousedown="clicked = true"
                            @mouseup ="clicked = false"
                        >
                            <div class="card">
                                <div class="card-front"
                                    :style="{ 
                                        'background': card.bgColor,
                                        'color': hoverIndex === index ? card.hoverTxtAge : '#000',
                                        transition: 'background-color 0.5s ease, color 0.5s ease',
                                        'backgroundImage': `url(${card.image})`
                                }">
                                    <p class="age"
                                        :style="{'color': card.txtAge,
                                        'border': `1px solid ${card.txtAge}`
                                    }">
                                        {{ card.age }}
                                    </p>
                                    <h4 class="title">{{ card.title }}</h4>
                                    <p class="description">{{ card.description }}</p>
                                    <div class="chapter" 
                                        :style="{
                                            'color': card.txtChapter,
                                            'background-color': card.bgChapter,

                                    }">
                                        {{ card.chapter }}
                                    </div>
                                </div>

                                <!-- hover -->
                                <div class="card-back"
                                    :style="{ 
                                        'background': clicked === true ? card.clickBgColor : card.hoverBgColor,
                                        'color': hoverIndex === index ? card.hoverTxtAge : '#000',
                                        transition: 'background-color 0.5s ease, color 0.5s ease',
                                        'backgroundImage': `url(${card.image})`
                                }">
                                    <p class="age NotoSansKR-Regular"
                                        :style="{'color': clicked === true ? card.clickTxtAge : card.hoverTxtAge,
                                        'border': `1px solid ${clicked === true ? card.clickTxtAge : card.hoverTxtAge}`
                                    }">
                                        {{ card.age }}
                                    </p>
                                    <h4 class="title"
                                        :style="{
                                            'color': clicked === true ? card.clickTxtTitle : card.hoverTxtTitle,
                                            'text-shadow': '2px 2px 2px gray',
                                            'opacity': clicked === true ? '0.5' : '1',
                                        }
                                        ">
                                        {{ card.title }}
                                    </h4>
                                    <p class="description Pretendard-Medium">{{ card.description }}</p>
                                    <div class="chapter Pretendard-Medium" 
                                        :style="{
                                            'color': card.hoverTxtChapter,
                                            'background-color': card.hoverBgChapter,
                                    }">
                                        {{ card.chapter }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="tip-title Pretendard-Medium">TIP</div>
                    <div class="tip">
                        <div class="tip-box box1">
                            <div>
                                <p class="NotoSansKR-Regular p1">어썸코드 사용법</p>
                                <p class="Pretendard-Regular p2">올인원 학습 프로그램</p>
                            </div>
                            <div>
                                <img src="@/assets/images/common/main_tip_1.png"/>
                            </div>
                        </div>

                        <div class="tip-box box2">
                            <div>
                                <p class="NotoSansKR-Regular p1">커리큘럼 가이드</p>
                                <p class="Pretendard-Regular p2">코딩을 재밌게!</p>
                            </div>
                            <div>
                                <img src="@/assets/images/common/main_tip_2.png"/>
                            </div>
                        </div>

                        <div class="tip-box box3">
                            <div>
                                <p class="NotoSansKR-Regular p1">어썸아이티</p>
                                <p class="Pretendard-Regular p2">홈페이지 바로가기</p>
                            </div>
                            <div>
                                <img src="@/assets/images/common/main_tip_3.png"/>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import images from "@/assets/images";
import apiSubjectSet from "@/api/subjectSet";
// import Subject from '@/components/SubjectComponent.vue'
import { cards } from "@/data/main-cards";

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
        this.getSubjectSet()
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
            this.$router.push({ path: '/notice/list'});
        },

        getSubjectSet() {
            apiSubjectSet.getSubjectSet(this.selectedSubjectSetId)
                .then((response) => {
                    this.subjects = response.data.subjects
                })
                .catch(this.showError);
        },
        
        handleCardClick(card) {
            card.clicked = !card.clicked; // 클릭 상태 토글
        },
    }
}
</script>

<style scoped src="@/assets/css/component/homeview.css"/>
<style scoped src="@/assets/css/font.css"/>
