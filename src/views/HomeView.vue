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
              >
                <div class="card" @click="goSelectCurriculum(card.id, card.title)">
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
                    <div
                      class="home-chapter Pretendard-Regular"
                      :style="{ color: card.txtChapter, backgroundColor: card.bgChapter }"
                    >
                      {{ card.chapter }}
                    </div>
                  </div>
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
                    <div
                      class="home-chapter Pretendard-Regular"
                      :style="{ color: card.hoverTxtChapter, backgroundColor: card.hoverBgChapter }"
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
  import { useI18n } from 'vue-i18n'
  import apiSubjectSet from '@/api/subjectSet'
  import { rawCards } from '@/data/main-cards'
  import { tipCards } from '@/data/main-tip-cards'
  const { shell } = require('electron')
  
  export default {
    setup() {
      const { t } = useI18n()
      const selectedSubjectSetId = localStorage.getItem('selectedSubjectSetId')
      return { t, selectedSubjectSetId }
    },
  
    data() {
      return {
        hoverIndex: null,
        subjects: {},
        tipCards,
        hoveredStates: {},
        clickedStates: {},
        clicked: false,
        // … 기타 기존 데이터(이미지, notice 등) 그대로 유지 …
      }
    },
  
    computed: {
      // **여기서** rawCards 키를 t()로 번역해 반응형 cards 생성
      cards() {
        return rawCards.map(c => ({
          ...c,
          age: this.t(c.ageKey),
          title: this.t(c.titleKey),
          description: this.t(c.descriptionKey),
          chapter: this.t(c.chapterKey)
        }))
      }
    },
  
    mounted() {
      this.getSubjectSet()
      window.addEventListener('mouseup', this.globalMouseUpHandler)
    },
  
    beforeUnmount() {
      window.removeEventListener('mouseup', this.globalMouseUpHandler)
    },
  
    methods: {
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
      }
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
  