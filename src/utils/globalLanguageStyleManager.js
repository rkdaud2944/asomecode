// src/utils/globalLanguageStyleManager.js
// 전역 언어 변경 시 스타일을 자동으로 조정하는 매니저

class GlobalLanguageStyleManager {
  constructor() {
    this.currentLanguage = 'ko'
    this.observers = new Set()
    this.styleRules = new Map()
    this.debounceTimeout = null
    this.init()
  }

  init() {
    // 언어 변경 이벤트 리스너
    if (typeof window !== 'undefined') {
      window.addEventListener('language-changed', (event) => {
        this.handleLanguageChange(event.detail.language)
      })
      
      // 초기 언어 설정
      const savedLanguage = this.getSavedLanguage()
      if (savedLanguage && savedLanguage !== this.currentLanguage) {
        this.currentLanguage = savedLanguage
        this.updateCSSCustomProperties(savedLanguage)
      }
    }
  }

  // 저장된 언어 가져오기
  getSavedLanguage() {
    try {
      return localStorage.getItem('awesome-board-language') || 'ko'
    } catch (error) {
      console.warn('localStorage 접근 불가:', error)
      return 'ko'
    }
  }

  // 언어별 스타일 규칙 등록
  registerStyleRule(selector, languageStyles) {
    this.styleRules.set(selector, languageStyles)
    this.applyStyleRule(selector, this.currentLanguage)
  }

  // 언어 변경 처리 (디바운스 적용)
  handleLanguageChange(newLanguage) {
    // 디바운스 처리
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout)
    }
    
    this.debounceTimeout = setTimeout(() => {
      this.processLanguageChange(newLanguage)
    }, 100)
  }

  // 실제 언어 변경 처리
  processLanguageChange(newLanguage) {
    const oldLanguage = this.currentLanguage
    this.currentLanguage = newLanguage
    
    console.log(`🎨 언어별 스타일 변경: ${oldLanguage} → ${newLanguage}`)
    
    // HTML lang 속성 업데이트
    if (document.documentElement) {
      document.documentElement.setAttribute('lang', newLanguage)
    }
    
    // 모든 등록된 스타일 규칙 적용
    this.styleRules.forEach((languageStyles, selector) => {
      this.applyStyleRule(selector, newLanguage)
    })
    
    // CSS 커스텀 속성 업데이트
    this.updateCSSCustomProperties(newLanguage)
    
    // 컴포넌트별 스타일 업데이트
    this.updateComponentStyles(newLanguage)
    
    // 관찰자들에게 알림
    this.notifyObservers(newLanguage, oldLanguage)
  }

  // 특정 스타일 규칙 적용
  applyStyleRule(selector, language) {
    const languageStyles = this.styleRules.get(selector)
    if (!languageStyles || !languageStyles[language]) return

    const elements = document.querySelectorAll(selector)
    const styles = languageStyles[language]
    
    elements.forEach(element => {
      Object.assign(element.style, styles)
    })
  }

  // CSS 커스텀 속성으로 언어별 스타일 적용
  updateCSSCustomProperties(language) {
    const root = document.documentElement
    
    // 언어별 폰트 설정
     const fontSettings = {
      ko: {
        '--primary-font': "'Pretendard', 'Noto Sans KR', sans-serif",
        '--chapter-font-size': '14px',  // 12px → 14px
        '--chapter-padding': '6px 10px',  // 5px 8px → 6px 10px
        '--chapter-min-width': '60px',  // 50px → 60px
        '--chapter-letter-spacing': '0',
        '--text-scale': '1.0',
        '--line-height-scale': '1.5'
      },
      en: {
        '--primary-font': "'Pretendard', 'Inter', sans-serif",
        '--chapter-font-size': '13px',  // 11px → 13px
        '--chapter-padding': '5px 8px',  // 4px 6px → 5px 8px
        '--chapter-min-width': '85px',  // 80px → 85px
        '--chapter-letter-spacing': '-0.1px',  // -0.2px → -0.1px
        '--text-scale': '1.0',  // 0.98 → 1.0
        '--line-height-scale': '1.4'
      },
      vi: {
        '--primary-font': "'Inter', 'Roboto', sans-serif",
        '--chapter-font-size': '12px',  // 10px → 12px
        '--chapter-padding': '4px 7px',  // 3px 5px → 4px 7px
        '--chapter-min-width': '90px',  // 85px → 90px
        '--chapter-letter-spacing': '-0.2px',  // -0.3px → -0.2px
        '--text-scale': '1.0',  // 0.95 → 1.0
        '--line-height-scale': '1.5'  // 1.6 → 1.5
      }
    }
    
    const settings = fontSettings[language] || fontSettings.ko
    Object.entries(settings).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }

  // 컴포넌트별 스타일 업데이트
  updateComponentStyles(language) {
    // requestAnimationFrame으로 성능 최적화
    requestAnimationFrame(() => {
      this.updateChapterStyles(language)
      this.updateButtonStyles(language)
      this.updateCardStyles(language)
      this.updateTextStyles(language)
    })
  }

  // Chapter 관련 스타일 업데이트
  updateChapterStyles(language) {
    const chapterElements = document.querySelectorAll('.home-chapter, .curriculum-chapter')
    
    const chapterStyles = {
      ko: {
        fontSize: '14px',  // 12px → 14px
        padding: '6px 10px',  // 5px 8px → 6px 10px
        minWidth: '60px',  // 50px → 60px
        letterSpacing: '0',
        whiteSpace: 'normal',
        overflow: 'visible',
        textOverflow: 'clip'
      },
      en: {
        fontSize: '13px',  // 11px → 13px
        padding: '5px 8px',  // 4px 6px → 5px 8px
        minWidth: '85px',  // 80px → 85px
        letterSpacing: '-0.1px',  // -0.2px → -0.1px
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '110px'  // 100px → 110px
      },
      vi: {
        fontSize: '12px',  // 10px → 12px
        padding: '4px 7px',  // 3px 5px → 4px 7px
        minWidth: '90px',  // 85px → 90px
        letterSpacing: '-0.2px',  // -0.3px → -0.2px
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '105px',  // 95px → 105px
        lineHeight: '1.2'  // 1.1 → 1.2
      }
    }
    
    const styles = chapterStyles[language] || chapterStyles.ko
    chapterElements.forEach(element => {
      Object.assign(element.style, styles)
      
      // 언어별 클래스 추가
      this.addLanguageClass(element, 'chapter')
    })
  }

  // 버튼 스타일 업데이트
  updateButtonStyles(language) {
    const buttonElements = document.querySelectorAll('.tip-box, .toolbar-btn')
    
    const buttonStyles = {
      ko: { 
        letterSpacing: '0',
        wordSpacing: 'normal'
      },
      en: { 
        letterSpacing: '-0.1px',
        wordSpacing: '-1px'
      },
      vi: { 
        letterSpacing: '-0.2px',
        wordSpacing: '-1px'
      }
    }
    
    const styles = buttonStyles[language] || buttonStyles.ko
    buttonElements.forEach(element => {
      Object.assign(element.style, styles)
    })
  }

  // 카드 스타일 업데이트
  updateCardStyles(language) {
    const cardElements = document.querySelectorAll('.card')
    
    // 언어별 카드 내 텍스트 조정
    cardElements.forEach(card => {
      const titleElements = card.querySelectorAll('.title')
      const descriptionElements = card.querySelectorAll('.description')
      
      // 제목 스타일 조정
      titleElements.forEach(title => {
        switch(language) {
          case 'en':
            // title.style.fontSize = '1.2em' 
            title.style.lineHeight = '1.3'
            title.style.letterSpacing = '-0.05px'  // -0.1px → -0.05px
            break
          case 'vi':
            // title.style.fontSize = '1.15em'  // 1.0em → 1.15em
            title.style.lineHeight = '1.3'  // 1.4 → 1.45
            title.style.letterSpacing = '-0.05px'  // -0.1px → -0.05px
            break
          default: // ko
            // title.style.fontSize = '1.2em'
            title.style.lineHeight = '1.3'  // 1.2 → 1.3
            title.style.letterSpacing = '-0.05px'  // -0.1px → -0.05px
        }
      })
      
      // 설명 스타일 조정
      descriptionElements.forEach(desc => {
        switch(language) {
          case 'en':
            desc.style.fontSize = '0.95em'  // 0.9em → 0.95em
            desc.style.lineHeight = '1.45'  // 1.4 → 1.45
            break
          case 'vi':
            desc.style.fontSize = '0.9em'  // 0.85em → 0.9em
            desc.style.lineHeight = '1.5'
            break
          default: // ko
            desc.style.fontSize = '1.0em'
            desc.style.lineHeight = '1.35'  // 1.3 → 1.35
        }
      })
    })
  }

  // 텍스트 스타일 업데이트
  updateTextStyles(language) {
    const ageElements = document.querySelectorAll('.age')
    
    const ageStyles = {
      ko: {
        fontSize: '13px',  // 12px → 13px
        padding: '5px 10px'  // 4px 9px → 5px 10px
      },
      en: {
        fontSize: '12px',  // 11px → 12px
        padding: '4px 9px'  // 3px 8px → 4px 9px
      },
      vi: {
        fontSize: '11px',  // 10px → 11px
        padding: '3px 8px'  // 2px 7px → 3px 8px
      }
    }
    
    const styles = ageStyles[language] || ageStyles.ko
    ageElements.forEach(element => {
      Object.assign(element.style, styles)
    })
  }

  // 관찰자 패턴
  addObserver(callback) {
    this.observers.add(callback)
  }

  removeObserver(callback) {
    this.observers.delete(callback)
  }

  notifyObservers(newLanguage, oldLanguage) {
    this.observers.forEach(callback => {
      try {
        callback(newLanguage, oldLanguage)
      } catch (error) {
        console.error('언어 변경 관찰자 에러:', error)
      }
    })
  }

  // 현재 언어 반환
  getCurrentLanguage() {
    return this.currentLanguage
  }

  // 특정 요소에 언어별 클래스 추가
  addLanguageClass(element, baseClass) {
    if (!element) return
    
    // 기존 언어 클래스 제거
    element.classList.remove(`${baseClass}-ko`, `${baseClass}-en`, `${baseClass}-vi`)
    
    // 새 언어 클래스 추가
    element.classList.add(`${baseClass}-${this.currentLanguage}`)
  }

  // 텍스트 길이 기반 클래스 반환
  getChapterClass(text) {
    const textLength = text.length
    const currentLang = this.currentLanguage
    
    const lengthThresholds = {
      ko: { short: 3, medium: 5 },
      en: { short: 8, medium: 12 },
      vi: { short: 10, medium: 15 }
    }
    
    const thresholds = lengthThresholds[currentLang] || lengthThresholds.ko
    
    if (textLength <= thresholds.short) {
      return 'chapter-short'
    } else if (textLength <= thresholds.medium) {
      return 'chapter-medium'
    } else {
      return 'chapter-long'
    }
  }

  // 언어별 스타일 객체 반환
  getLanguageSpecificStyle(type = 'chapter') {
    const currentLang = this.currentLanguage
    
    const styleMap = {
      chapter: {
        ko: {
          fontSize: '12px',
          padding: '5px 8px',
          minWidth: '50px',
          letterSpacing: '0'
        },
        en: {
          fontSize: '11px',
          padding: '4px 6px',
          minWidth: '80px',
          letterSpacing: '-0.2px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        vi: {
          fontSize: '10px',
          padding: '3px 5px',
          minWidth: '85px',
          letterSpacing: '-0.3px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
    
    return styleMap[type]?.[currentLang] || styleMap[type]?.ko || {}
  }

  // 디버깅용 메서드
  printCurrentStyles() {
    console.log('🎨 현재 언어별 스타일 상태:')
    console.log(`언어: ${this.currentLanguage}`)
    console.log(`등록된 스타일 규칙: ${this.styleRules.size}개`)
    console.log(`관찰자: ${this.observers.size}개`)
    
    // CSS 커스텀 속성 확인
    const root = document.documentElement
    const computedStyles = getComputedStyle(root)
    console.log('CSS 커스텀 속성:')
    console.log(`--chapter-font-size: ${computedStyles.getPropertyValue('--chapter-font-size')}`)
    console.log(`--chapter-padding: ${computedStyles.getPropertyValue('--chapter-padding')}`)
    console.log(`--chapter-min-width: ${computedStyles.getPropertyValue('--chapter-min-width')}`)
    
    // Chapter 요소들 확인
    const chapterElements = document.querySelectorAll('.home-chapter')
    console.log(`Chapter 요소 개수: ${chapterElements.length}`)
  }

  // 성능 모니터링
  getPerformanceStats() {
    return {
      currentLanguage: this.currentLanguage,
      styleRulesCount: this.styleRules.size,
      observersCount: this.observers.size,
      chapterElementsCount: document.querySelectorAll('.home-chapter, .curriculum-chapter').length,
      lastUpdateTime: this.lastUpdateTime || null
    }
  }

  // 강제 스타일 업데이트
  forceStyleUpdate() {
    console.log('🔄 강제 스타일 업데이트 실행')
    this.processLanguageChange(this.currentLanguage)
  }

  // 매니저 정리
  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('language-changed', this.handleLanguageChange)
    }
    
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout)
    }
    
    this.observers.clear()
    this.styleRules.clear()
    console.log('🗑️ GlobalLanguageStyleManager 정리 완료')
  }
}

// 싱글톤 인스턴스
export const globalLanguageStyleManager = new GlobalLanguageStyleManager()

// Vue 플러그인
export const GlobalLanguageStylePlugin = {
  install(app) {
    app.config.globalProperties.$languageStyleManager = globalLanguageStyleManager
    app.provide('languageStyleManager', globalLanguageStyleManager)
    
    console.log('🔌 GlobalLanguageStyleManager 플러그인 설치 완료')
  }
}

// 컴포저블 함수 (Vue 3 Composition API용)
export function useLanguageStyle() {
  return {
    languageStyleManager: globalLanguageStyleManager,
    getCurrentLanguage: () => globalLanguageStyleManager.getCurrentLanguage(),
    getChapterClass: (text) => globalLanguageStyleManager.getChapterClass(text),
    getLanguageSpecificStyle: (type) => globalLanguageStyleManager.getLanguageSpecificStyle(type)
  }
}

// 개발 모드에서 전역 접근
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  window.languageStyleManager = globalLanguageStyleManager
  window.printLanguageStyles = () => globalLanguageStyleManager.printCurrentStyles()
  window.forceStyleUpdate = () => globalLanguageStyleManager.forceStyleUpdate()
  
  console.log('🔧 개발 모드: 전역 언어 스타일 매니저 디버깅 도구 활성화')
  console.log('사용법: window.languageStyleManager, window.printLanguageStyles(), window.forceStyleUpdate()')
}

export default GlobalLanguageStyleManager