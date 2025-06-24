// src/i18n/index.js - 완전한 파일

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

// 언어 변경 유틸리티 함수
export function changeLanguage(newLanguage) {
  if (!['ko', 'en', 'vi'].includes(newLanguage)) {
    console.error('지원하지 않는 언어:', newLanguage)
    return false
  }
  
  i18n.global.locale.value = newLanguage
  saveLanguage(newLanguage)
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = newLanguage
  
  // 사용자 정의 이벤트 발생
  window.dispatchEvent(new CustomEvent('language-changed', {
    detail: { language: newLanguage }
  }))
  
  console.log(`🌍 언어 변경: ${newLanguage}`)
  return true
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

// 개발 모드에서만 번역 상태 로깅 (Pinia 초기화 대기)
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    console.log('🌍 i18n 번역 상태:')
    console.table(getTranslationProgress())
    
    const missing = checkMissingTranslations()
    if (Object.keys(missing).length > 0) {
      console.warn('⚠️ 누락된 번역:', missing)
    }
  }, 2000) // 2초 지연으로 Pinia 초기화 완료 대기
}

export default i18n