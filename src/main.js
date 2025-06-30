// src/main.js - 완전한 파일

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import errorLog from "@/globals/error-log"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from "./store/store"

// i18n 설정
import { i18n } from './i18n'

// 📍 전역 언어 스타일 매니저 추가
import { GlobalLanguageStylePlugin } from './utils/globalLanguageStyleManager'

// 📍 전역 스타일 import
import '@/assets/css/global-language-styles.css'

const app = createApp(App)

// ✅ 중요: Pinia를 가장 먼저 등록해야 함!
const pinia = createPinia()
app.use(pinia)

// 나머지 플러그인들 등록
app.use(router)
app.use(Quasar, quasarUserOptions)
app.use(store)
app.use(i18n)  // i18n을 먼저 등록

// 📍 전역 언어 스타일 매니저 등록
app.use(GlobalLanguageStylePlugin)

// 에러 핸들러 설정
app.config.errorHandler = (e, vm, info) => {
    console.log("앱 에러:", e, info)
    
    // Pinia 관련 에러는 따로 처리
    if (e.message && e.message.includes('getActivePinia')) {
        console.error('🍍 Pinia 초기화 에러:', e)
        return
    }
    
    errorLog.sendMessage(JSON.stringify(e))
}

// 전역 Pinia 인스턴스 설정 (디버깅용)
if (process.env.NODE_ENV === 'development') {
    window.__PINIA__ = pinia
    console.log('🍍 Pinia 초기화 완료')
}

// 전역 언어 변경 이벤트 리스너
window.addEventListener('language-changed', (event) => {
    const { language } = event.detail
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = language
    
    // 언어별 에셋 로딩
    loadLanguageSpecificAssets(language)
    
    // 언어별 CSS 변수 설정
    updateLanguageSpecificStyles(language)
    
    console.log(`🌍 전역 언어 변경: ${language}`)
})

// 언어별 에셋 로딩 함수
function loadLanguageSpecificAssets(language) {
    switch (language) {
        case 'vi':
            // 베트남어용 폰트 로딩
            loadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap')
            break
        case 'en':
            // 영어용 폰트 로딩 (Inter는 이미 로딩됨)
            loadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap')
            break
        case 'ko':
        default:
            // 한국어용 Pretendard 폰트는 이미 로딩됨
            break
    }
}

// 동적 폰트 로딩 함수
function loadFont(fontUrl) {
    // 이미 로딩된 폰트인지 확인
    const existingLink = document.querySelector(`link[href="${fontUrl}"]`)
    if (existingLink) return
    
    const link = document.createElement('link')
    link.href = fontUrl
    link.rel = 'stylesheet'
    link.crossOrigin = 'anonymous'
    
    // 로딩 완료 이벤트
    link.onload = () => {
        console.log(`✅ 폰트 로딩 완료: ${fontUrl}`)
    }
    
    link.onerror = () => {
        console.warn(`⚠️ 폰트 로딩 실패: ${fontUrl}`)
    }
    
    document.head.appendChild(link)
}

// 언어별 스타일 업데이트
function updateLanguageSpecificStyles(language) {
    const root = document.documentElement
    
    switch (language) {
        case 'vi':
            root.style.setProperty('--primary-font', "'Inter', 'Roboto', sans-serif")
            root.style.setProperty('--text-scale', '1.0')  // 0.95 → 1.0
            root.style.setProperty('--line-height-scale', '1.5')  // 1.6 → 1.5
            root.style.setProperty('--chapter-font-size', '12px')  // 10px → 12px
            root.style.setProperty('--chapter-padding', '4px 7px')  // 3px 5px → 4px 7px
            root.style.setProperty('--chapter-min-width', '90px')  // 85px → 90px
            root.style.setProperty('--chapter-letter-spacing', '-0.2px')  // -0.3px → -0.2px
            break
        case 'en':
            root.style.setProperty('--primary-font', "'Pretendard', 'Inter', sans-serif")
            root.style.setProperty('--text-scale', '1.0')  // 0.98 → 1.0
            root.style.setProperty('--line-height-scale', '1.4')
            root.style.setProperty('--chapter-font-size', '13px')  // 11px → 13px
            root.style.setProperty('--chapter-padding', '5px 8px')  // 4px 6px → 5px 8px
            root.style.setProperty('--chapter-min-width', '85px')  // 80px → 85px
            root.style.setProperty('--chapter-letter-spacing', '-0.1px')  // -0.2px → -0.1px
            break
        case 'ko':
        default:
            root.style.setProperty('--primary-font', "'Pretendard', 'Noto Sans KR', sans-serif")
            root.style.setProperty('--text-scale', '1.0')
            root.style.setProperty('--line-height-scale', '1.5')
            root.style.setProperty('--chapter-font-size', '14px')  // 12px → 14px
            root.style.setProperty('--chapter-padding', '6px 10px')  // 5px 8px → 6px 10px
            root.style.setProperty('--chapter-min-width', '60px')  // 50px → 60px
            root.style.setProperty('--chapter-letter-spacing', '0')
            break
    }
}

// 앱 언마운트 시 정리 작업
window.addEventListener('beforeunload', () => {
    if (window.languageStyleManager) {
        window.languageStyleManager.destroy()
    }
})

// 성능 모니터링 (개발 모드)
if (process.env.NODE_ENV === 'development') {
    // Performance Observer 설정
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry) => {
                if (entry.entryType === 'measure' && entry.name.includes('language')) {
                    console.log(`⏱️ 언어 변경 성능: ${entry.name} - ${entry.duration.toFixed(2)}ms`)
                }
            })
        })
        
        observer.observe({ entryTypes: ['measure'] })
    }
    
    // 메모리 사용량 모니터링
    if ('memory' in performance) {
        setInterval(() => {
            const memory = performance.memory
            if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB 이상
                console.warn('⚠️ 메모리 사용량이 높습니다:', {
                    used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
                    total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
                    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
                })
            }
        }, 30000) // 30초마다 체크
    }
}

// 전역 에러 처리
window.addEventListener('error', (event) => {
    console.error('🚨 전역 에러 감지:', event.error)
    
    // 언어 관련 에러인지 확인
    if (event.error?.message?.includes('language') || 
        event.error?.message?.includes('translation')) {
        console.error('🌍 언어/번역 관련 에러:', event.error)
        
        // 언어 설정 초기화 시도
        try {
            localStorage.setItem('awesome-board-language', 'ko')
            window.location.reload()
        } catch (e) {
            console.error('언어 설정 초기화 실패:', e)
        }
    }
})

// 네트워크 상태 모니터링
window.addEventListener('online', () => {
    console.log('🌐 네트워크 연결됨')
})

window.addEventListener('offline', () => {
    console.log('🔌 네트워크 연결 끊김')
})

export default
app.mount('#app')

// 📍 초기 언어 설정 적용
setTimeout(() => {
    const savedLanguage = localStorage.getItem('awesome-board-language') || 'ko'
    updateLanguageSpecificStyles(savedLanguage)
    document.documentElement.lang = savedLanguage
    
    console.log('🚀 어썸코드 애플리케이션 초기화 완료')
    console.log(`🌍 초기 언어: ${savedLanguage}`)
    
    // 개발 모드에서 추가 정보 출력
    if (process.env.NODE_ENV === 'development') {
        console.log('🔧 개발 모드 활성화')
        console.log('📊 언어별 스타일 매니저 상태:')
        if (window.languageStyleManager) {
            window.languageStyleManager.printCurrentStyles()
        }
    }
}, 100)

// 앱