// src/utils/enhancedTranslationManager.js
// 기존 TranslationManager를 확장한 개선된 버전

import { i18n } from '@/i18n'

class EnhancedTranslationManager {
  constructor() {
    this.missingKeys = new Set()
    this.usageStats = new Map()
    this.isDevMode = process.env.NODE_ENV === 'development'
    this.initialized = false
    
    // 지원하는 언어 목록
    this.supportedLanguages = ['ko', 'en', 'vi']
    
    // 캐시된 번역들
    this.translationCache = new Map()
    
    // 실시간 번역 추가를 위한 임시 저장소
    this.pendingTranslations = {
      ko: {},
      en: {},
      vi: {}
    }
    
    // 초기화
    this.init()
  }

  // 초기화 함수
  init() {
    if (this.initialized) return
    
    console.log('🌍 EnhancedTranslationManager 초기화 중...')
    
    // 전역 이벤트 리스너 등록
    if (typeof window !== 'undefined') {
      window.addEventListener('language-changed', this.handleLanguageChange.bind(this))
      
      // 개발 모드에서 실시간 번역 추가 기능
      if (this.isDevMode) {
        window.addTranslation = this.addTranslationRuntime.bind(this)
        window.batchAddTranslations = this.batchAddTranslations.bind(this)
      }
    }
    
    this.initialized = true
    console.log('✅ EnhancedTranslationManager 초기화 완료')
  }

  // 언어 변경 이벤트 핸들러
  handleLanguageChange(event) {
    const { language } = event.detail
    console.log(`🔄 번역 매니저: 언어 변경 감지 - ${language}`)
    
    // 캐시 초기화
    this.translationCache.clear()
    
    // 대기 중인 번역이 있으면 적용
    this.applyPendingTranslations()
  }

  // 실시간 번역 추가
  addTranslationRuntime(key, translations) {
    if (typeof key === 'string' && typeof translations === 'object') {
      this.supportedLanguages.forEach(lang => {
        if (translations[lang]) {
          this.pendingTranslations[lang][key] = translations[lang]
          
          // 즉시 i18n에 적용
          const currentMessages = i18n.global.messages.value[lang] || {}
          currentMessages[key] = translations[lang]
          i18n.global.setLocaleMessage(lang, currentMessages)
        }
      })
      
      console.log(`✅ 실시간 번역 추가: ${key}`)
      return true
    }
    return false
  }

  // 일괄 번역 추가
  batchAddTranslations(translationsMap) {
    let addedCount = 0
    
    Object.entries(translationsMap).forEach(([key, translations]) => {
      if (this.addTranslationRuntime(key, translations)) {
        addedCount++
      }
    })
    
    console.log(`✅ 일괄 번역 추가 완료: ${addedCount}개`)
    return addedCount
  }

  // 대기 중인 번역들을 적용
  applyPendingTranslations() {
    this.supportedLanguages.forEach(lang => {
      const pending = this.pendingTranslations[lang]
      if (Object.keys(pending).length > 0) {
        const currentMessages = i18n.global.messages.value[lang] || {}
        const updatedMessages = { ...currentMessages, ...pending }
        i18n.global.setLocaleMessage(lang, updatedMessages)
        
        // 적용 후 대기 목록 초기화
        this.pendingTranslations[lang] = {}
      }
    })
  }

  // 번역 키 사용량 추적
  trackKeyUsage(key) {
    if (!this.isDevMode) return
    
    const count = this.usageStats.get(key) || 0
    this.usageStats.set(key, count + 1)
  }

  // 누락된 번역 키 추적 및 자동 생성
  trackMissingKey(key, locale) {
    if (!this.isDevMode) return
    
    const missingKey = `${locale}:${key}`
    if (!this.missingKeys.has(missingKey)) {
      this.missingKeys.add(missingKey)
      console.warn(`🚨 누락된 번역: ${key} (${locale})`)
      
      // 자동으로 누락된 키를 추가 (한국어 기준)
      this.autoGenerateMissingTranslation(key, locale)
    }
  }

  // 누락된 번역 자동 생성
  autoGenerateMissingTranslation(key, locale) {
    // 한국어 번역이 있으면 다른 언어에 임시 번역 추가
    const koMessages = i18n.global.messages.value.ko || {}
    if (koMessages[key]) {
      const koText = koMessages[key]
      
      // 임시 번역 생성
      const tempTranslations = {
        en: `[EN] ${koText}`,
        vi: `[VI] ${koText}`
      }
      
      if (tempTranslations[locale]) {
        this.addTranslationRuntime(key, {
          [locale]: tempTranslations[locale]
        })
        console.log(`🔄 임시 번역 자동 생성: ${key} (${locale})`)
      }
    }
  }

  // 번역 키의 존재 여부 확인
  hasTranslation(key, locale = null) {
    try {
      const targetLocale = locale || i18n.global.locale.value
      const messages = i18n.global.messages.value[targetLocale]
      return messages && Object.prototype.hasOwnProperty.call(messages, key)
    } catch (error) {
      console.error('번역 키 확인 오류:', error)
      return false
    }
  }

  // 안전한 번역 함수 (캐시 적용)
  safeTranslate(key, fallback = null, params = {}) {
    try {
      this.trackKeyUsage(key)
      
      // 캐시 확인
      const cacheKey = `${i18n.global.locale.value}:${key}:${JSON.stringify(params)}`
      if (this.translationCache.has(cacheKey)) {
        return this.translationCache.get(cacheKey)
      }
      
      if (!this.hasTranslation(key)) {
        this.trackMissingKey(key, i18n.global.locale.value)
        const result = fallback || key
        this.translationCache.set(cacheKey, result)
        return result
      }
      
      const { t } = i18n.global
      const result = t(key, params)
      
      // 결과 캐시
      this.translationCache.set(cacheKey, result)
      return result
      
    } catch (error) {
      console.error(`번역 오류: ${key}`, error)
      const result = fallback || key
      return result
    }
  }

  // 번역 완성도 분석
  analyzeCompleteness() {
    const messages = i18n.global.messages.value
    const koKeys = Object.keys(messages.ko || {})
    const analysis = {}
    
    this.supportedLanguages.forEach(lang => {
      const langKeys = Object.keys(messages[lang] || {})
      const missing = koKeys.filter(key => !langKeys.includes(key))
      const extra = langKeys.filter(key => !koKeys.includes(key))
      
      analysis[lang] = {
        total: koKeys.length,
        translated: langKeys.length,
        missing: missing.length,
        extra: extra.length,
        completion: Math.round((langKeys.length / koKeys.length) * 100),
        missingKeys: missing.slice(0, 10), // 처음 10개만
        extraKeys: extra.slice(0, 10)
      }
    })
    
    return analysis
  }

  // 번역 키 자동 정리
  cleanupTranslations() {
    const messages = i18n.global.messages.value
    const koKeys = new Set(Object.keys(messages.ko || {}))
    let cleanedCount = 0
    
    this.supportedLanguages.forEach(lang => {
      if (lang === 'ko') return
      
      const langMessages = messages[lang] || {}
      const cleanedMessages = {}
      
      Object.keys(langMessages).forEach(key => {
        if (koKeys.has(key)) {
          cleanedMessages[key] = langMessages[key]
        } else {
          cleanedCount++
          console.log(`🗑️ 불필요한 키 제거: ${key} (${lang})`)
        }
      })
      
      i18n.global.setLocaleMessage(lang, cleanedMessages)
    })
    
    console.log(`✅ 번역 정리 완료: ${cleanedCount}개 키 제거`)
    return cleanedCount
  }

  // 실시간 번역 검증
  validateTranslations() {
    const issues = []
    const messages = i18n.global.messages.value
    
    this.supportedLanguages.forEach(lang => {
      const langMessages = messages[lang] || {}
      
      Object.entries(langMessages).forEach(([key, value]) => {
        // 빈 번역 확인
        if (!value || value.trim() === '') {
          issues.push({
            type: 'empty',
            language: lang,
            key: key,
            severity: 'high'
          })
        }
        
        // TODO 마커 확인
        if (typeof value === 'string' && value.includes('[TODO')) {
          issues.push({
            type: 'todo',
            language: lang,
            key: key,
            value: value,
            severity: 'medium'
          })
        }
        
        // 플레이스홀더 불일치 확인
        if (typeof value === 'string') {
          const placeholders = value.match(/\{[^}]+\}/g) || []
          const koValue = messages.ko[key]
          if (koValue) {
            const koPlaceholders = koValue.match(/\{[^}]+\}/g) || []
            if (placeholders.length !== koPlaceholders.length) {
              issues.push({
                type: 'placeholder_mismatch',
                language: lang,
                key: key,
                expected: koPlaceholders,
                actual: placeholders,
                severity: 'high'
              })
            }
          }
        }
      })
    })
    
    return issues
  }

  // 개발자 친화적 리포트
  printDevReport() {
    if (!this.isDevMode) return
    
    try {
      console.group('🌍 번역 시스템 개발 리포트')
      
      // 완성도 분석
      const completeness = this.analyzeCompleteness()
      console.log('📊 번역 완성도:')
      console.table(completeness)
      
      // 사용량 통계
      if (this.usageStats.size > 0) {
        const topUsed = Array.from(this.usageStats.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
        
        console.log('🔥 가장 많이 사용된 번역 키:')
        console.table(topUsed.map(([key, count]) => ({ key, count })))
      }
      
      // 검증 이슈
      const issues = this.validateTranslations()
      if (issues.length > 0) {
        const highIssues = issues.filter(issue => issue.severity === 'high')
        if (highIssues.length > 0) {
          console.error(`❌ 심각한 번역 이슈 (${highIssues.length}개):`)
          console.table(highIssues.slice(0, 10))
        }
        
        console.warn(`⚠️ 전체 번역 이슈: ${issues.length}개`)
      }
      
      // 누락된 키
      if (this.missingKeys.size > 0) {
        console.warn('🚨 누락된 번역 키들:')
        console.log([...this.missingKeys].slice(0, 20))
      }
      
      console.groupEnd()
    } catch (error) {
      console.error('개발 리포트 출력 오류:', error)
    }
  }

  // 번역 내보내기 (개선된 버전)
  exportTranslations() {
    try {
      const messages = i18n.global.messages.value
      const analysis = this.analyzeCompleteness()
      const issues = this.validateTranslations()
      
      const exportData = {
        exportDate: new Date().toISOString(),
        version: '2.0.0',
        appVersion: process.env.VUE_APP_VERSION || '2.0.9',
        messages,
        analysis,
        issues,
        usage: Object.fromEntries(this.usageStats),
        metadata: {
          totalKeys: Object.keys(messages.ko || {}).length,
          languages: this.supportedLanguages,
          highPriorityIssues: issues.filter(i => i.severity === 'high').length
        }
      }
      
      return JSON.stringify(exportData, null, 2)
    } catch (error) {
      console.error('번역 내보내기 오류:', error)
      return null
    }
  }

  // 번역 가져오기 (개선된 버전)
  importTranslations(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData
      
      if (!data.messages) {
        throw new Error('올바르지 않은 번역 데이터 형식: messages 필드가 없습니다')
      }
      
      // 백업 데이터 검증
      if (data.version) {
        const [major] = data.version.split('.').map(Number)
        if (major < 2) {
          console.warn('⚠️ 구버전 백업 파일입니다. 호환성 문제가 있을 수 있습니다.')
        }
      }
      
      // 번역 데이터 적용
      Object.entries(data.messages).forEach(([locale, translations]) => {
        if (this.supportedLanguages.includes(locale)) {
          i18n.global.setLocaleMessage(locale, translations)
          console.log(`✅ ${locale} 번역 데이터 적용 완료`)
        } else {
          console.warn(`⚠️ 지원하지 않는 언어: ${locale}`)
        }
      })
      
      console.log('✅ 번역 데이터 가져오기 완료')
      
      // 가져오기 후 검증
      setTimeout(() => {
        this.printDevReport()
      }, 1000)
      
      return true
    } catch (error) {
      console.error('❌ 번역 가져오기 실패:', error)
      return false
    }
  }

  // 통계 초기화
  clearStats() {
    this.usageStats.clear()
    this.missingKeys.clear()
    this.translationCache.clear()
    console.log('📊 번역 통계 초기화 완료')
  }

  // 인스턴스 정리
  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('language-changed', this.handleLanguageChange)
      delete window.addTranslation
      delete window.batchAddTranslations
    }
    this.clearStats()
    this.initialized = false
    console.log('🗑️ EnhancedTranslationManager 정리 완료')
  }
}

// 싱글톤 인스턴스 생성
export const enhancedTranslationManager = new EnhancedTranslationManager()

// Vue 글로벌 속성으로 등록하기 위한 플러그인
export const EnhancedTranslationManagerPlugin = {
  install(app) {
    app.config.globalProperties.$etm = enhancedTranslationManager
    app.config.globalProperties.$safeT = enhancedTranslationManager.safeTranslate.bind(enhancedTranslationManager)
    app.provide('enhancedTranslationManager', enhancedTranslationManager)
    
    console.log('🔌 EnhancedTranslationManager 플러그인 설치 완료')
  }
}

// 개발 모드에서 주기적으로 리포트 출력
if (process.env.NODE_ENV === 'development') {
  // 앱 로드 후 최초 리포트 출력
  setTimeout(() => {
    enhancedTranslationManager.printDevReport()
  }, 5000)
  
  // 개발 편의를 위한 전역 함수 등록
  if (typeof window !== 'undefined') {
    window.etm = enhancedTranslationManager
    window.printTranslationReport = () => enhancedTranslationManager.printDevReport()
    window.cleanupTranslations = () => enhancedTranslationManager.cleanupTranslations()
    window.analyzeTranslations = () => enhancedTranslationManager.analyzeCompleteness()
    window.exportTranslations = () => {
      const data = enhancedTranslationManager.exportTranslations()
      if (data) {
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `enhanced-translations-${new Date().toISOString().split('T')[0]}.json`
        a.click()
        URL.revokeObjectURL(url)
      }
    }
  }
}

export default EnhancedTranslationManager