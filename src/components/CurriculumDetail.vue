<template>
    <div class="list-cts-wrap">
      <div class="list-cts">
        <div class="curriculum">
          <div
            class="card-wrap"
            v-for="card in filteredCards"
            :key="card.id"
            @mousedown="clicked = true"
            @mouseup="clicked = false"
            @click="goToLesson(card)"
          >
            <div class="card">
              <!-- front -->
              <div
                class="card-front"
                :style="{
                  background: card.bgColor,
                  transition: 'background-color 0.5s, color 0.5s',
                  'background-image': `url(${card.image})`
                }"
              >
                <p
                  class="age NotoSansKR-Regular"
                  :style="{
                    color: card.txtAge,
                    border: `1px solid ${card.txtAge}`
                  }"
                >
                  {{ card.age }}
                </p>
                <div class="title">
                  <span class="Pretendard-ExtraBold">{{ card.title }}</span>
                  <span
                    class="title-num Pretendard-ExtraBold"
                    :style="{ color: card.titleNumColor }"
                  >
                    {{ card.titleNum }}
                  </span>
                </div>
                <p class="description Pretendard-Regular">
                  {{ card.description }}
                </p>
                <div
                  class="curriculum-chapter"
                  :style="{
                    color: card.txtChapter,
                    backgroundColor: card.bgChapter
                  }"
                >
                  {{ card.chapter }}
                </div>
              </div>
              <!-- hover/back -->
              <div
                class="card-back"
                :style="{
                  background: card.hoverBgColor,
                  transition: 'background-color 0.5s, color 0.5s'
                }"
              >
                <p
                  class="age NotoSansKR-Regular"
                  :style="{
                    color: card.hoverTxtAge,
                    border: `1px solid ${card.hoverTxtAge}`
                  }"
                >
                  {{ card.age }}
                </p>
                <div class="title">
                  <span class="Pretendard-ExtraBold">{{ card.title }}</span>
                  <span
                    class="title-num Pretendard-ExtraBold"
                    :style="{ color: card.titleNumColor }"
                  >
                    {{ card.titleNum }}
                  </span>
                </div>
                <p class="description Pretendard-Medium">
                  {{ card.description }}
                </p>
  
                <div
                    class="hoverTxt"
                    v-html="card.hoverTxt"
                    :style="{ color: card.hoverTxtColor }"
                ></div>
  
                <div class="btn-info">{{ $t('더 알아보기') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="arrow-wrap"></div>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n'
  import { rawCurriculumCards } from '@/data/curriculum-detail'
  import VueBase from '@/mixin/vue-base'
  
  export default {
    mixins: [VueBase],
    setup() {
      const { t } = useI18n()
      return { t }
    },
    data() {
      return {
        clicked: false
      }
    },
    computed: {
      // route.query.title 으로 필터링
      filteredCards() {
        return rawCurriculumCards
          .map(c => ({
            ...c,
            age: this.t(c.ageKey),
            title: this.t(c.titleKey),
            description: this.t(c.descriptionKey),
            chapter: this.t(c.chapterKey),
            hoverTxt: this.t(c.hoverTxtKey),
          }))
          .filter(c => c.title === this.$route.query.title)
      }
    },
    methods: {
      goToLesson(card) {
        this.$router.push({
          path: '/lesson/list',
          query: {
            id: card.id,
            title: card.title,
            color: card.txtAge,
            clickColor: card.clickBgColor
          }
        })
      }
    }
  }
  </script>
  
  <style scoped src="@/assets/css/component/selectCurriculum.css"/>
  <style scoped src="@/assets/css/font.css"/>
  