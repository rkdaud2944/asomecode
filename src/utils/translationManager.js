// src/utils/translationManager.js - 완전한 파일

import { i18n } from '@/i18n'

class TranslationManager {
  constructor() {
    this.missingKeys = new Set()
    this.usageStats = new Map()
    this.isDevMode = process.env.NODE_ENV === 'development'
    this.initialized = false
    
    // 지원하는 언어 목록
    this.supportedLanguages = ['ko', 'en', 'vi']
    
    // 초기화
    this.init()
  }

  // 초기화 함수
  init() {
    if (this.initialized) return
    
    console.log('🌍 TranslationManager 초기화 중...')
    
    // 전역 이벤트 리스너 등록
    if (typeof window !== 'undefined') {
      window.addEventListener('language-changed', this.handleLanguageChange.bind(this))
    }
    
    this.initialized = true
    console.log('✅ TranslationManager 초기화 완료')
  }

  // 언어 변경 이벤트 핸들러
  handleLanguageChange(event) {
    const { language } = event.detail
    console.log(`🔄 번역 매니저: 언어 변경 감지 - ${language}`)
    
    // 사용량 통계 초기화 (선택사항)
    // this.usageStats.clear()
  }

  // 번역 키 사용량 추적
  trackKeyUsage(key) {
    if (!this.isDevMode) return
    
    const count = this.usageStats.get(key) || 0
    this.usageStats.set(key, count + 1)
  }

  // 누락된 번역 키 추적
  trackMissingKey(key, locale) {
    if (!this.isDevMode) return
    
    const missingKey = `${locale}:${key}`
    if (!this.missingKeys.has(missingKey)) {
      this.missingKeys.add(missingKey)
      console.warn(`🚨 누락된 번역: ${key} (${locale})`)
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

  // 안전한 번역 함수 (키가 없을 때 대체 텍스트 제공)
  safeTranslate(key, fallback = null, params = {}) {
    try {
      this.trackKeyUsage(key)
      
      if (!this.hasTranslation(key)) {
        this.trackMissingKey(key, i18n.global.locale.value)
        return fallback || key
      }
      
      const { t } = i18n.global
      return t(key, params)
    } catch (error) {
      console.error(`번역 오류: ${key}`, error)
      return fallback || key
    }
  }

  // 번역 완성도 리포트 생성
  generateCompletionReport() {
    try {
      const messages = i18n.global.messages.value
      const koKeys = Object.keys(messages.ko || {})
      const totalKeys = koKeys.length
      
      const report = {
        totalKeys,
        languages: {},
        summary: {},
        generatedAt: new Date().toISOString()
      }
      
      // 각 언어별 완성도 계산
      this.supportedLanguages.forEach(locale => {
        if (locale === 'ko') return // 기준 언어 제외
        
        const localeKeys = Object.keys(messages[locale] || {})
        const translatedCount = localeKeys.length
        const missingCount = totalKeys - translatedCount
        const completionRate = Math.round((translatedCount / totalKeys) * 100)
        
        const missingKeys = koKeys.filter(key => !localeKeys.includes(key))
        
        report.languages[locale] = {
          translated: translatedCount,
          missing: missingCount,
          completionRate,
          missingKeys: missingKeys.slice(0, 10), // 처음 10개만 표시
          totalMissingKeys: missingKeys.length
        }
      })
      
      // 전체 요약
      const completionRates = Object.values(report.languages).map(lang => lang.completionRate)
      const avgCompletion = completionRates.reduce((sum, rate) => sum + rate, 0) / completionRates.length
      
      report.summary = {
        averageCompletion: Math.round(avgCompletion || 0),
        totalMissingTranslations: Object.values(report.languages)
          .reduce((sum, lang) => sum + lang.missing, 0),
        languageCount: this.supportedLanguages.length - 1 // ko 제외
      }
      
      return report
    } catch (error) {
      console.error('번역 리포트 생성 오류:', error)
      return { error: error.message }
    }
  }

  // 자주 사용되는 번역 키 리스트
  getMostUsedKeys(limit = 20) {
    try {
      return Array.from(this.usageStats.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([key, count]) => ({ key, count }))
    } catch (error) {
      console.error('사용 통계 조회 오류:', error)
      return []
    }
  }

  // 사용되지 않는 번역 키 찾기
  getUnusedKeys() {
    try {
      const messages = i18n.global.messages.value.ko || {}
      const allKeys = Object.keys(messages)
      const usedKeys = Array.from(this.usageStats.keys())
      
      return allKeys.filter(key => !usedKeys.includes(key))
    } catch (error) {
      console.error('미사용 키 조회 오류:', error)
      return []
    }
  }

  // 번역 키 일괄 검증
  validateAllTranslations() {
    const issues = []
    
    try {
      const messages = i18n.global.messages.value
      
      Object.entries(messages).forEach(([locale, translations]) => {
        if (locale === 'ko') return // 기준 언어 제외
        
        Object.entries(translations).forEach(([key, value]) => {
          // 빈 번역 체크
          if (!value || value.trim() === '') {
            issues.push({
              type: 'empty',
              locale,
              key,
              message: '빈 번역값',
              severity: 'high'
            })
          }
          
          // HTML 태그 불일치 체크
          const koValue = messages.ko[key]
          if (koValue && locale !== 'ko') {
            const koTags = (koValue.match(/<[^>]+>/g) || []).sort()
            const localeTags = (value.match(/<[^>]+>/g) || []).sort()
            
            if (JSON.stringify(koTags) !== JSON.stringify(localeTags)) {
              issues.push({
                type: 'html_mismatch',
                locale,
                key,
                message: 'HTML 태그 불일치',
                expected: koTags,
                actual: localeTags,
                severity: 'medium'
              })
            }
          }
          
          // 변수 플레이스홀더 체크 ({variable} 형태)
          if (koValue && locale !== 'ko') {
            const koVars = (koValue.match(/\{[^}]+\}/g) || []).sort()
            const localeVars = (value.match(/\{[^}]+\}/g) || []).sort()
            
            if (JSON.stringify(koVars) !== JSON.stringify(localeVars)) {
              issues.push({
                type: 'variable_mismatch',
                locale,
                key,
                message: '변수 플레이스홀더 불일치',
                expected: koVars,
                actual: localeVars,
                severity: 'high'
              })
            }
          }
          
          // 문자열 길이 체크 (너무 짧거나 긴 번역)
          if (koValue && locale !== 'ko') {
            const koLength = koValue.length
            const valueLength = value.length
            const ratio = valueLength / koLength
            
            if (ratio < 0.3 || ratio > 3) {
              issues.push({
                type: 'length_suspicious',
                locale,
                key,
                message: '의심스러운 번역 길이',
                koLength,
                translatedLength: valueLength,
                ratio: Math.round(ratio * 100) / 100,
                severity: 'low'
              })
            }
          }
        })
      })
      
      // 심각도별 정렬
      const severityOrder = { high: 3, medium: 2, low: 1 }
      issues.sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity])
      
      return issues
    } catch (error) {
      console.error('번역 검증 오류:', error)
      return [{ type: 'validation_error', message: error.message, severity: 'high' }]
    }
  }

  // 개발 도구용 콘솔 리포트 출력
  printDevReport() {
    if (!this.isDevMode) return
    
    try {
      console.group('🌍 번역 시스템 리포트')
      
      // 완성도 리포트
      const completionReport = this.generateCompletionReport()
      if (!completionReport.error) {
        console.log('📊 번역 완성도:')
        console.table(completionReport.languages)
        console.log('📈 전체 요약:', completionReport.summary)
      }
      
      // 가장 많이 사용된 키
      const mostUsed = this.getMostUsedKeys(10)
      if (mostUsed.length > 0) {
        console.log('🔥 가장 많이 사용된 번역 키:')
        console.table(mostUsed)
      }
      
      // 미사용 키
      const unusedKeys = this.getUnusedKeys()
      if (unusedKeys.length > 0) {
        console.log(`🗑️ 사용되지 않은 번역 키 (${unusedKeys.length}개):`, unusedKeys.slice(0, 10))
      }
      
      // 누락된 키
      if (this.missingKeys.size > 0) {
        console.warn('⚠️ 누락된 번역 키들:')
        console.log([...this.missingKeys].slice(0, 20))
      }
      
      // 검증 이슈
      const issues = this.validateAllTranslations()
      if (issues.length > 0) {
        const highIssues = issues.filter(issue => issue.severity === 'high')
        if (highIssues.length > 0) {
          console.error(`❌ 심각한 번역 검증 이슈 (${highIssues.length}개):`)
          console.table(highIssues.slice(0, 10))
        }
        
        console.warn(`⚠️ 전체 번역 검증 이슈: ${issues.length}개`)
      }
      
      console.groupEnd()
    } catch (error) {
      console.error('개발 리포트 출력 오류:', error)
    }
  }

  // 번역 백업 생성
  exportTranslations() {
    try {
      const messages = i18n.global.messages.value
      const timestamp = new Date().toISOString().split('T')[0]
      
      const backup = {
        exportDate: timestamp,
        version: '1.0.0',
        appVersion: process.env.VUE_APP_VERSION || '2.0.9',
        messages,
        metadata: {
          totalKeys: Object.keys(messages.ko || {}).length,
          languages: this.supportedLanguages,
          completionReport: this.generateCompletionReport()
        }
      }
      
      return JSON.stringify(backup, null, 2)
    } catch (error) {
      console.error('번역 내보내기 오류:', error)
      return null
    }
  }

  // 번역 가져오기
  importTranslations(jsonData) {
    try {
      const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData
      
      if (!data.messages) {
        throw new Error('올바르지 않은 번역 데이터 형식: messages 필드가 없습니다')
      }
      
      // 백업 데이터 검증
      if (data.version && !this.validateBackupVersion(data.version)) {
        console.warn('⚠️ 호환되지 않는 백업 버전:', data.version)
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

  // 백업 버전 호환성 검사
  validateBackupVersion(version) {
    const currentVersion = '1.0.0'
    const [currentMajor] = currentVersion.split('.').map(Number)
    const [backupMajor] = version.split('.').map(Number)
    
    return currentMajor === backupMajor
  }

  // 통계 초기화
  clearStats() {
    this.usageStats.clear()
    this.missingKeys.clear()
    console.log('📊 번역 통계 초기화 완료')
  }

  // 인스턴스 정리
  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('language-changed', this.handleLanguageChange)
    }
    this.clearStats()
    this.initialized = false
    console.log('🗑️ TranslationManager 정리 완료')
  }
}

// 싱글톤 인스턴스 생성
export const translationManager = new TranslationManager()

// Vue 글로벌 속성으로 등록하기 위한 플러그인
export const TranslationManagerPlugin = {
  install(app) {
    app.config.globalProperties.$tm = translationManager
    app.provide('translationManager', translationManager)
    
    console.log('🔌 TranslationManager 플러그인 설치 완료')
  }
}

// 개발 모드에서 주기적으로 리포트 출력
if (process.env.NODE_ENV === 'development') {
  // 앱 로드 후 최초 리포트 출력
  setTimeout(() => {
    translationManager.printDevReport()
  }, 5000)
  
  // 개발 편의를 위한 전역 함수 등록
  if (typeof window !== 'undefined') {
    window.translationManager = translationManager
    window.printTranslationReport = () => translationManager.printDevReport()
    window.exportTranslations = () => {
      const data = translationManager.exportTranslations()
      if (data) {
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `translations-${new Date().toISOString().split('T')[0]}.json`
        a.click()
        URL.revokeObjectURL(url)
      }
    }
  }
}

export default TranslationManager