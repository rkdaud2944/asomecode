<template>
  <div class="main-wrap">
    <div class="main-mid">
      <div>
        <h3 class="Pretendard-ExtraBold">AsomeIT</h3>
        <p class="Pretendard-Regular">
          {{ $t('어썸코드는 어썸아이티만의 코딩 학습 전용 프로그램입니다.') }}
        </p>
      </div>
    </div>
    <div class="main-cts-wrap">
      <div class="main-cts">
        <div>
          <div class="curriculum-title Pretendard-Medium">Curriculum</div>
          <div class="curriculum">
            <div
              class="card-wrap"
              v-for="(card, index) in cards"
              :key="card.id"
              @mousedown="clicked = true"
              @mouseup="clicked = false"
              @mouseenter="hoverIndex = index"
              @mouseleave="hoverIndex = null"
            >
              <div class="card" @click="goSelectCurriculum(card.id, card.title)">
                <!-- Front Card -->
                <div
                  class="card-front"
                  :style="{
                    background: card.bgColor,
                    color: hoverIndex === index ? card.hoverTxtAge : '#000',
                    'background-image': `url(${card.image})`,
                    transition: 'background-color 0.5s, color 0.5s'
                  }"
                >
                  <p
                    class="age NotoSansKR-Regular"
                    :style="{ color: card.txtAge, border: `1px solid ${card.txtAge}` }"
                  >
                    {{ card.age }}
                  </p>
                  <h4 class="title Pretendard-ExtraBold">{{ card.title }}</h4>
                  <p class="description Pretendard-Regular">{{ card.description }}</p>
                  
                  <!-- 📍 핵심: 언어별 반응형 Chapter 스타일 -->
                  <div
                    class="home-chapter Pretendard-Regular"
                    :class="getChapterClass(card.chapter)"
                    :style="chapterStyle(card)"
                  >
                    {{ card.chapter }}
                  </div>
                </div>
                
                <!-- Back Card -->
                <div
                  class="card-back"
                  :style="{
                    background: clicked ? card.clickBgColor : card.hoverBgColor,
                    color: hoverIndex === index ? card.hoverTxtAge : '#000',
                    'background-image': `url(${card.hoverImage})`,
                    transition: 'background-color 0.5s, color 0.5s'
                  }"
                >
                  <p
                    class="age NotoSansKR-Regular"
                    :style="{
                      color: clicked ? card.clickTxtAge : card.hoverTxtAge,
                      border: `1px solid ${clicked ? card.clickTxtAge : card.hoverTxtAge}`
                    }"
                  >
                    {{ card.age }}
                  </p>
                  <h4
                    class="title Pretendard-ExtraBold"
                    :style="{
                      color: clicked ? card.clickTxtTitle : card.hoverTxtTitle,
                      textShadow: '2px 2px 2px gray',
                      opacity: clicked ? 0.5 : 1
                    }"
                  >
                    {{ card.title }}
                  </h4>
                  <p class="description Pretendard-Regular">{{ card.description }}</p>
                  
                  <!-- 📍 핵심: 언어별 반응형 Chapter 스타일 (Hover) -->
                  <div
                    class="home-chapter Pretendard-Regular"
                    :class="getChapterClass(card.chapter)"
                    :style="chapterHoverStyle(card)"
                  >
                    {{ card.chapter }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="tip-title Pretendard-Medium" style="visibility: hidden;">TIP</div>
          <div class="tip-wrap">
            <div
              class="tip"
              v-for="(card, index) in tipCards"
              :key="index"
              @mousedown="clickedStates[index] = true"
              @mouseup="clickedStates[index] = false"
              @mouseover="hoveredStates[index] = true"
              @mouseleave="() => { hoveredStates[index] = false; clickedStates[index] = false }"
              @click="openLink(card.href)"
            >
              <div class="tip-link" style="text-decoration: none">
                <div
                  :class="`tip-box box${index + 1}`"
                  :style="tipComputeStyle(card, index)"
                >
                  <div>
                    <!-- 📍 번역 함수 적용 -->
                    <p class="NotoSansKR-Regular p1">{{ $t(card.titleKey) }}</p>
                    <p class="Pretendard-Regular p2">{{ $t(card.descriptionKey) }}</p>
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
import { useI18n } from 'vue-i18n'
import apiSubjectSet from '@/api/subjectSet'
import { rawCards } from '@/data/main-cards'
import { tipCards } from '@/data/main-tip-cards'
const { shell } = require('electron')

export default {
  name: 'HomeView',
  
  setup() {
    const { t, locale } = useI18n()
    const selectedSubjectSetId = localStorage.getItem('selectedSubjectSetId')
    return { t, locale, selectedSubjectSetId }
  },

  data() {
    return {
      hoverIndex: null,
      subjects: {},
      tipCards,
      hoveredStates: {},
      clickedStates: {},
      clicked: false,
    }
  },

  computed: {
    // 📍 번역된 카드 데이터
    cards() {
      return rawCards.map(c => ({
        ...c,
        age: this.t(c.ageKey),
        title: this.t(c.titleKey),
        description: this.t(c.descriptionKey),
        chapter: this.t(c.chapterKey)
      }))
    },

    // 📍 현재 언어 확인
    currentLanguage() {
      return this.locale
    }
  },

  mounted() {
    this.getSubjectSet()
    window.addEventListener('mouseup', this.globalMouseUpHandler)
    

    const debugMode = localStorage.getItem('awesome-debug-mode') === 'true'
    if (debugMode && process.env.NODE_ENV === 'development') {
      document.documentElement.setAttribute('data-debug', 'true')
      console.log('🔧 디버그 모드 활성화됨')
    } else {
      document.documentElement.removeAttribute('data-debug')
    }
  },

  beforeUnmount() {
    window.removeEventListener('mouseup', this.globalMouseUpHandler)
  },

  methods: {
    // 📍 핵심: Chapter 텍스트 길이에 따른 CSS 클래스 반환
    getChapterClass(chapterText) {
      const textLength = chapterText.length
      const currentLang = this.currentLanguage
      
      // 언어별 길이 기준 설정
      const lengthThresholds = {
        ko: { short: 3, medium: 5 },      // "32차" = 3글자
        en: { short: 9, medium: 14 },     // 8 → 9, 12 → 14 (여유 증가)
        vi: { short: 11, medium: 17 }     // 10 → 11, 15 → 17 (여유 증가)
      }
      
      const thresholds = lengthThresholds[currentLang] || lengthThresholds.ko
      
      if (textLength <= thresholds.short) {
        return 'chapter-short'
      } else if (textLength <= thresholds.medium) {
        return 'chapter-medium'
      } else {
        return 'chapter-long'
      }
    },

    // 📍 동적 Chapter 스타일 (일반)
    chapterStyle(card) {
      return {
        color: card.txtChapter,
        backgroundColor: card.bgChapter,
        // 언어별 추가 스타일
        ...this.getLanguageSpecificChapterStyle()
      }
    },

    // 📍 동적 Chapter 스타일 (호버)
    chapterHoverStyle(card) {
      return {
        color: card.hoverTxtChapter,
        backgroundColor: card.hoverBgChapter,
        // 언어별 추가 스타일
        ...this.getLanguageSpecificChapterStyle()
      }
    },

    // 📍 언어별 특정 스타일 반환
     getLanguageSpecificChapterStyle() {
      const currentLang = this.currentLanguage
      
      switch(currentLang) {
        case 'en':
          return {
            fontSize: '13px',  // 11px → 13px
            padding: '5px 8px',  // 4px 6px → 5px 8px
            minWidth: '85px',  // 80px → 85px
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: '-0.1px'  // -0.2px → -0.1px
          }
        case 'vi':
          return {
            fontSize: '12px',  // 10px → 12px
            padding: '4px 7px',  // 3px 5px → 4px 7px
            minWidth: '90px',  // 85px → 90px
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: '-0.2px'  // -0.3px → -0.2px
          }
        case 'ko':
        default:
          return {
            fontSize: '14px',  // 12px → 14px
            padding: '6px 10px',  // 5px 8px → 6px 10px
            minWidth: '60px',  // 50px → 60px
            textAlign: 'center',
            letterSpacing: '0'
          }
      }
    },

    // 📍 기존 메서드들
    getSubjectSet() {
      apiSubjectSet
        .getSubjectSet(this.selectedSubjectSetId)
        .then(res => (this.subjects = res.data.subjects))
        .catch(this.showError)
    },

    globalMouseUpHandler() {
      if (this.clicked) this.clicked = false
    },

    goSelectCurriculum(id, title) {
      this.$router.push({ path: '/curriculum', query: { id, title } })
    },

    tipComputeStyle(card, index) {
      if (this.clickedStates[index]) {
        return { background: card.clickBgColor, color: card.clickTxtColor }
      } else if (this.hoveredStates[index]) {
        return { background: card.hoverBgColor, color: card.hoverTxtColor }
      } else {
        return { background: card.bgColor, color: card.txtColor }
      }
    },

    openLink(url) {
      if (url === '/AutomaticProgram') this.$router.push(url)
      else shell.openExternal(url)
    },

    showError(error) {
      console.error('Error:', error)
      // 에러 처리 로직
    }
  }
}
</script>

<style scoped src="@/assets/css/component/homeview.css"/>
<style scoped src="@/assets/css/font.css"/>

<style scoped>
/* 📍 컴포넌트별 추가 스타일 */
.tip {
  cursor: pointer;
}

/* Chapter 기본 스타일 보강 */
.home-chapter {
  border-radius: 20px;
  display: inline-block;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  box-sizing: border-box;
}

/* 호버 효과 개선 */
.card:hover .home-chapter {
  transform: scale(1.02);
}

/* 클릭 효과 */
.card:active .home-chapter {
  transform: scale(0.98);
}

/* 반응형 추가 조정 */
@media (max-width: 768px) {
  .home-chapter {
    font-size: 10px !important;
    padding: 3px 5px !important;
    min-width: 45px !important;
  }
}

@media (max-width: 480px) {
  .home-chapter {
    font-size: 8px !important;
    padding: 2px 3px !important;
    min-width: 40px !important;
  }
}
</style>