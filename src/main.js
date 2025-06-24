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

const app = createApp(App)

// ✅ 중요: Pinia를 가장 먼저 등록해야 함!
const pinia = createPinia()
app.use(pinia)

// 나머지 플러그인들 등록
app.use(router)
app.use(Quasar, quasarUserOptions)
app.use(store)
app.use(i18n)  // i18n을 마지막에 등록

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
            // 영어용 폰트 로딩 (이미 있다면 스킵)
            break
        case 'ko':
        default:
            // 한국어용 Pretendard 폰트는 이미 로딩됨
            break
    }
}

// 동적 폰트 로딩 함수
function loadFont(fontUrl) {
    const link = document.createElement('link')
    link.href = fontUrl
    link.rel = 'stylesheet'
    document.head.appendChild(link)
}

// 언어별 스타일 업데이트
function updateLanguageSpecificStyles(language) {
    const root = document.documentElement
    
    switch (language) {
        case 'vi':
            root.style.setProperty('--primary-font', "'Inter', sans-serif")
            root.style.setProperty('--text-scale', '0.95')
            root.style.setProperty('--line-height-scale', '1.6')
            break
        case 'en':
            root.style.setProperty('--primary-font', "'Pretendard', sans-serif")
            root.style.setProperty('--text-scale', '1.0')
            root.style.setProperty('--line-height-scale', '1.5')
            break
        case 'ko':
        default:
            root.style.setProperty('--primary-font', "'Pretendard', sans-serif")
            root.style.setProperty('--text-scale', '1.0')
            root.style.setProperty('--line-height-scale', '1.5')
            break
    }
}

app.mount('#app')