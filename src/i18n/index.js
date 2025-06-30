// src/i18n/index.js - 높이 확장 문제 해결된 완전한 파일

import { createI18n } from 'vue-i18n'

// 번역 파일 로딩
import ko from './locales/ko.json'
import en from './locales/en.json'
import vi from './locales/vi.json'

// 브라우저 언어 감지 함수
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang.split('-')[0] // 'ko-KR' -> 'ko'
  
  // 지원하는 언어인지 확인
  const supportedLanguages = ['ko', 'en', 'vi']
  return supportedLanguages.includes(langCode) ? langCode : 'ko'
}

// 안전한 로컬 스토리지 접근
function getSavedLanguage() {
  try {
    return localStorage.getItem('awesome-board-language') || null
  } catch (error) {
    console.warn('localStorage 접근 불가:', error)
    return null
  }
}

// 언어 저장 함수
function saveLanguage(language) {
  try {
    localStorage.setItem('awesome-board-language', language)
  } catch (error) {
    console.warn('localStorage 저장 불가:', error)
  }
}

// 초기 언어 설정 결정
function getInitialLanguage() {
  const savedLang = getSavedLanguage()
  if (savedLang) return savedLang
  
  const browserLang = detectBrowserLanguage()
  return browserLang
}

// i18n 인스턴스 생성
export const i18n = createI18n({
  legacy: false,
  locale: getInitialLanguage(),
  fallbackLocale: 'ko',
  messages: { ko, en, vi },
  missingWarn: false,
  fallbackWarn: false,
  silentTranslationWarn: true,
  globalInjection: true
})

// 🔧 DOM 조작 함수들 - 높이 확장 방지
function updateDOMLanguage(language) {
  // HTML lang 속성 업데이트
  document.documentElement.lang = language
  
  // CSS 변수 즉시 적용을 위한 클래스 추가
  document.body.setAttribute('data-language', language)
  
  // 언어별 폰트 로딩 최적화
  updateFontLoading(language)
}

function updateFontLoading(language) {
  const fontMap = {
    ko: 'Pretendard, "Noto Sans KR", sans-serif',
    en: 'Pretendard, Inter, sans-serif', 
    vi: 'Inter, Roboto, sans-serif'
  }
  
  // 메인 폰트 패밀리 업데이트
  document.documentElement.style.setProperty('--primary-font', fontMap[language])
}

// 🔧 레이아웃 안정화 함수
function stabilizeLayout() {
  // 레이아웃 재계산 강제 실행
  if (typeof window !== 'undefined') {
    // 다음 프레임에서 실행하여 CSS 적용 완료 보장
    requestAnimationFrame(() => {
      // 모든 chapter 요소의 크기 재계산
      const chapterElements = document.querySelectorAll('.home-chapter, .curriculum-chapter')
      chapterElements.forEach(element => {
        // 강제 reflow를 통한 레이아웃 안정화
        element.style.display = 'none'
        element.offsetHeight // reflow 강제 실행
        element.style.display = ''
      })
    })
  }
}

// 🔧 디바운스된 레이아웃 안정화
let layoutStabilizeTimeout
function debouncedStabilizeLayout() {
  clearTimeout(layoutStabilizeTimeout)
  layoutStabilizeTimeout = setTimeout(stabilizeLayout, 100)
}

// 🔧 언어 변경 유틸리티 함수 개선
export function changeLanguage(newLanguage) {
  if (!['ko', 'en', 'vi'].includes(newLanguage)) {
    console.error('지원하지 않는 언어:', newLanguage)
    return false
  }
  
  const oldLanguage = i18n.global.locale.value
  if (oldLanguage === newLanguage) {
    console.log('이미 선택된 언어입니다:', newLanguage)
    return true
  }
  
  console.log(`🌍 언어 변경 시작: ${oldLanguage} → ${newLanguage}`)
  
  try {
    // 🔧 1. DOM 언어 속성 즉시 업데이트
    updateDOMLanguage(newLanguage)
    
    // 🔧 2. i18n 언어 설정
    i18n.global.locale.value = newLanguage
    
    // 🔧 3. 로컬 스토리지 저장
    saveLanguage(newLanguage)
    
    // 🔧 4. 레이아웃 안정화 (디바운스)
    debouncedStabilizeLayout()
    
    // 🔧 5. 사용자 정의 이벤트 발생 (지연)
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { 
          language: newLanguage,
          previousLanguage: oldLanguage,
          timestamp: Date.now()
        }
      }))
    }, 150) // CSS 전환 시간보다 짧게 설정
    
    console.log(`✅ 언어 변경 완료: ${newLanguage}`)
    return true
    
  } catch (error) {
    console.error('❌ 언어 변경 중 오류:', error)
    return false
  }
}

// 현재 언어 가져오기
export function getCurrentLanguage() {
  return i18n.global.locale.value
}

// 지원 언어 목록
export const supportedLanguages = {
  ko: { label: '한국어', flag: '🇰🇷', rtl: false },
  en: { label: 'English', flag: '🇺🇸', rtl: false },
  vi: { label: 'Tiếng Việt', flag: '🇻🇳', rtl: false }
}

// 번역 키 누락 감지 및 리포팅
export function checkMissingTranslations() {
  const messages = i18n.global.messages.value
  const koKeys = Object.keys(messages.ko || {})
  const missingTranslations = {}
  
  Object.keys(supportedLanguages).forEach(lang => {
    if (lang === 'ko') return // 기준 언어 제외
    
    const langKeys = Object.keys(messages[lang] || {})
    const missing = koKeys.filter(key => !langKeys.includes(key))
    
    if (missing.length > 0) {
      missingTranslations[lang] = missing
    }
  })
  
  return missingTranslations
}

// 번역 완성도 체크
export function getTranslationProgress() {
  const messages = i18n.global.messages.value
  const koKeysCount = Object.keys(messages.ko || {}).length
  const progress = {}
  
  Object.keys(supportedLanguages).forEach(lang => {
    const langKeysCount = Object.keys(messages[lang] || {}).length
    progress[lang] = {
      translated: langKeysCount,
      total: koKeysCount,
      percentage: Math.round((langKeysCount / koKeysCount) * 100)
    }
  })
  
  return progress
}

// 안전한 번역 함수
export function safeTranslate(key, fallback = null, params = {}) {
  try {
    const { t, te } = i18n.global
    
    if (te(key)) {
      return t(key, params)
    } else {
      console.warn(`번역 키 누락: ${key}`)
      return fallback || key
    }
  } catch (error) {
    console.error(`번역 오류: ${key}`, error)
    return fallback || key
  }
}

// 🔧 언어 변경 감지 및 자동 최적화
export function setupLanguageOptimization() {
  // 브라우저 언어 변경 감지
  window.addEventListener('languagechange', () => {
    const browserLang = detectBrowserLanguage()
    const currentLang = getCurrentLanguage()
    
    if (browserLang !== currentLang && 
        supportedLanguages[browserLang] && 
        !getSavedLanguage()) {
      console.log('🔄 브라우저 언어 변경 감지:', browserLang)
      changeLanguage(browserLang)
    }
  })
  
  // 페이지 가시성 변경 시 레이아웃 최적화
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      debouncedStabilizeLayout()
    }
  })
  
  // 윈도우 리사이즈 시 레이아웃 최적화
  window.addEventListener('resize', debouncedStabilizeLayout)
  
  // 폰트 로딩 완료 시 레이아웃 최적화
  if (document.fonts) {
    document.fonts.ready.then(() => {
      debouncedStabilizeLayout()
    })
  }
}

// 🔧 초기화 시 DOM 설정
function initializeDOMSettings() {
  const currentLang = getCurrentLanguage()
  updateDOMLanguage(currentLang)
  
  // 초기 레이아웃 안정화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', stabilizeLayout)
  } else {
    stabilizeLayout()
  }
}

// 🔧 언어별 최적화 설정
export function getLanguageOptimizations(language = getCurrentLanguage()) {
  const optimizations = {
    ko: {
      fontSize: '14px',
      lineHeight: '1.5',
      letterSpacing: '0',
      wordBreak: 'keep-all'
    },
    en: {
      fontSize: '13px', 
      lineHeight: '1.4',
      letterSpacing: '-0.1px',
      wordBreak: 'break-word'
    },
    vi: {
      fontSize: '12px',
      lineHeight: '1.5', 
      letterSpacing: '-0.2px',
      wordBreak: 'break-word'
    }
  }
  
  return optimizations[language] || optimizations.ko
}

// 🔧 메모리 정리 함수
export function cleanup() {
  clearTimeout(layoutStabilizeTimeout)
  window.removeEventListener('resize', debouncedStabilizeLayout)
  document.removeEventListener('visibilitychange', debouncedStabilizeLayout)
}

// 개발 모드에서만 번역 상태 로깅
if (process.env.NODE_ENV === 'development') {
  // 초기화 완료 후 상태 출력
  setTimeout(() => {
    console.log('🌍 i18n 번역 상태:')
    console.table(getTranslationProgress())
    
    const missing = checkMissingTranslations()
    if (Object.keys(missing).length > 0) {
      console.warn('⚠️ 누락된 번역:', missing)
    }
    
    console.log('🎯 현재 언어 최적화 설정:', getLanguageOptimizations())
  }, 2000)
  
  // 언어 변경 이벤트 감지
  window.addEventListener('language-changed', (event) => {
    console.log('🔄 언어 변경 이벤트:', event.detail)
    console.log('🎯 새 언어 최적화 설정:', getLanguageOptimizations(event.detail.language))
  })
}

// 🔧 초기 설정 실행
initializeDOMSettings()

// 🔧 최적화 설정 (브라우저 환경에서만)
if (typeof window !== 'undefined') {
  setupLanguageOptimization()
}

export default i18n