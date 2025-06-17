import { createI18n } from 'vue-i18n'

// 빌드 단계에서 생성된 번역 JSON을 직접 로드
import ko from './locales/ko.json'
import en from './locales/en.json'
import vi from './locales/vi.json'
import ja from './locales/ja.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'ko',          // 초기 표시 언어 설정
  fallbackLocale: 'ko',  // 번역이 없을 경우 한국어로 폴백
  messages: { ko, en, vi, ja },
  missingWarn: false,
  fallbackWarn: false
})
