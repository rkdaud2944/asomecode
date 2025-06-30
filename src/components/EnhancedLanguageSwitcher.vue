<template>
  <div 
    :class="['language-switcher', `style-${displayType}`, { 'dev-mode': showDevPanel && isDevMode }]"
    @click.stop
  >
    <!-- 버튼 스타일 -->
    <div v-if="displayType === 'buttons'" class="language-buttons">
      <button
        v-for="(info, code) in localesWithFlags"
        :key="code"
        @click="setLanguage(code)"
        :class="['lang-btn', { active: currentLocale === code }]"
        :aria-pressed="currentLocale === code"
        :title="`${info.label}로 변경`"
      >
        <span class="flag">{{ info.flag }}</span>
        <span class="lang-text">{{ info.label }}</span>
        <div v-if="showProgress && isDevMode" class="mini-progress">
          <div 
            class="mini-progress-fill" 
            :style="{ width: getCompletionForLanguage(code) + '%' }"
          ></div>
        </div>
      </button>
    </div>

    <!-- 플래그 스타일 -->
    <div v-else-if="displayType === 'flags'" class="language-flags">
      <div
        v-for="(info, code) in localesWithFlags"
        :key="code"
        @click="setLanguage(code)"
        :class="['flag-item', { active: currentLocale === code }]"
        :title="`${info.label}로 변경`"
      >
        <span class="flag">{{ info.flag }}</span>
        <span class="lang-text">{{ info.label }}</span>
        <div v-if="showProgress && isDevMode" class="mini-progress">
          <div 
            class="mini-progress-fill" 
            :style="{ width: getCompletionForLanguage(code) + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 컴팩트 스타일 -->
    <div v-else-if="displayType === 'compact'" class="language-compact">
      <div class="current-language" @click="toggleDropdown">
        <span class="flag">{{ localesWithFlags[currentLocale].flag }}</span>
        <span class="label">{{ localesWithFlags[currentLocale].label }}</span>
        <span class="arrow" :class="{ open: dropdownOpen }">▼</span>
      </div>
      
      <div v-if="dropdownOpen" class="compact-dropdown">
        <div
          v-for="(info, code) in localesWithFlags"
          :key="code"
          @click="setLanguage(code)"
          :class="['compact-option', { active: currentLocale === code }]"
        >
          <span class="flag">{{ info.flag }}</span>
          <span class="label">{{ info.label }}</span>
          <span v-if="showProgress && isDevMode" class="completion">
            {{ getCompletionForLanguage(code) }}%
          </span>
        </div>
      </div>
    </div>

    <!-- 개발 모드 전용: 번역 상태 패널 -->
    <div v-if="showDevPanel && isDevMode" class="dev-panel">
      <div class="dev-header">
        <h4>{{ $t('번역 개발 정보') }}</h4>
        <button @click="toggleDevPanel" class="close-btn">×</button>
      </div>
      
      <div class="dev-content">
        <div class="stats-grid">
          <div 
            v-for="(info, code) in localesWithFlags" 
            :key="code" 
            class="stat-item"
          >
            <div class="stat-header">
              <span class="flag">{{ info.flag }}</span>
              <span class="name">{{ info.label }}</span>
            </div>
            <div class="stat-details">
              <div class="progress-line">
                <span class="label">완성도:</span>
                <div class="mini-bar">
                  <div 
                    class="mini-fill" 
                    :style="{ width: getCompletionForLanguage(code) + '%' }"
                  ></div>
                </div>
                <span class="percentage">{{ getCompletionForLanguage(code) }}%</span>
              </div>
              <div class="counts">
                <span>번역: {{ getTranslationStats(code).translated }}</span>
                <span>전체: {{ getTranslationStats(code).total }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="dev-actions">
          <button @click="checkMissingKeys" class="dev-btn">누락 키 확인</button>
          <button @click="exportProgress" class="dev-btn">진행률 내보내기</button>
        </div>
      </div>
    </div>

    <!-- 개발 토글 버튼 -->
    <button 
      v-if="isDevMode" 
      @click="toggleDevPanel"
      class="dev-toggle"
      title="개발 패널 토글"
    >
      🔧
    </button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { changeLanguage, getCurrentLanguage, getTranslationProgress, checkMissingTranslations } from '@/i18n'

export default {
  name: 'EnhancedLanguageSwitcher',
  
  props: {
    displayType: {
      type: String,
      default: 'flags', // 'buttons', 'flags', 'compact'
      validator: value => ['buttons', 'flags', 'compact'].includes(value)
    },
    showProgress: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const { t, locale } = useI18n()
    
    // 반응형 데이터
    const dropdownOpen = ref(false)
    const showDevPanel = ref(false)
    const isDevMode = ref(process.env.NODE_ENV === 'development')
    
    // 🔧 언어 전환 상태 추가
    const isLanguageChanging = ref(false)
    
    // 지원 언어 정보
    const localesWithFlags = {
      ko: { label: '한국어', flag: '🇰🇷' },
      en: { label: 'English', flag: '🇺🇸' },
      vi: { label: 'Tiếng Việt', flag: '🇻🇳' }
    }

    // 현재 언어
    const currentLocale = computed(() => locale.value)

    // 🔧 언어 변경 함수 개선 - 높이 확장 방지
    const setLanguage = async (newLanguage) => {
      if (newLanguage === currentLocale.value) return
      
      console.log(`🌍 언어 변경 시작: ${currentLocale.value} → ${newLanguage}`)
      
      try {
        // 🔧 1. 언어 변경 시작 표시
        isLanguageChanging.value = true
        document.body.classList.add('language-changing')
        
        // 🔧 2. DOM 업데이트를 위한 약간의 지연
        await nextTick()
        
        // 🔧 3. HTML lang 속성 즉시 변경
        document.documentElement.lang = newLanguage
        
        // 🔧 4. 언어 변경 실행
        const success = changeLanguage(newLanguage)
        
        if (success) {
          // 🔧 5. 드롭다운 닫기
          dropdownOpen.value = false
          
          // 🔧 6. DOM 재렌더링을 위한 대기
          await nextTick()
          
          // 🔧 7. 추가 대기로 CSS 적용 완료 보장
          setTimeout(() => {
            isLanguageChanging.value = false
            document.body.classList.remove('language-changing')
            console.log(`✅ 언어 변경 완료: ${newLanguage}`)
          }, 200) // CSS transition 시간과 맞춤
          
          // 이벤트 발생
          emit('language-changed', { 
            from: currentLocale.value, 
            to: newLanguage,
            timestamp: Date.now()
          })
          
        } else {
          console.error('❌ 언어 변경 실패')
          isLanguageChanging.value = false
          document.body.classList.remove('language-changing')
        }
        
      } catch (error) {
        console.error('❌ 언어 변경 중 오류:', error)
        isLanguageChanging.value = false
        document.body.classList.remove('language-changing')
      }
    }

    // 드롭다운 토글
    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value
    }

    // 개발 패널 토글
    const toggleDevPanel = () => {
      showDevPanel.value = !showDevPanel.value
    }

    // 번역 완성도 계산
    const getCompletionForLanguage = (langCode) => {
      const progress = getTranslationProgress()
      return progress[langCode]?.percentage || 0
    }

    // 번역 통계
    const getTranslationStats = (langCode) => {
      const progress = getTranslationProgress()
      return {
        translated: progress[langCode]?.translated || 0,
        total: progress[langCode]?.total || 0
      }
    }

    // 누락 키 확인
    const checkMissingKeys = () => {
      const missing = checkMissingTranslations()
      console.log('🔍 누락된 번역 키:', missing)
      
      if (Object.keys(missing).length === 0) {
        alert('모든 번역이 완료되었습니다! 🎉')
      } else {
        const report = Object.entries(missing)
          .map(([lang, keys]) => `${lang}: ${keys.length}개 누락`)
          .join('\n')
        alert(`누락된 번역:\n${report}\n\n자세한 내용은 콘솔을 확인하세요.`)
      }
    }

    // 진행률 내보내기
    const exportProgress = () => {
      const progress = getTranslationProgress()
      const data = JSON.stringify(progress, null, 2)
      
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = `translation-progress-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      URL.revokeObjectURL(url)
      console.log('📊 번역 진행률 내보내기 완료')
    }

    // 🔧 외부 클릭 시 드롭다운 닫기
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-switcher')) {
        dropdownOpen.value = false
      }
    }

    // 🔧 마운트/언마운트 시 이벤트 처리
    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
      console.log('🚀 언어 스위처 초기화 완료')
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
      // 🔧 정리 작업
      if (isLanguageChanging.value) {
        document.body.classList.remove('language-changing')
      }
    })

    return {
      // 데이터
      currentLocale,
      dropdownOpen,
      showDevPanel,
      isDevMode,
      isLanguageChanging,
      localesWithFlags,
      
      // 메서드
      setLanguage,
      toggleDropdown,
      toggleDevPanel,
      getCompletionForLanguage,
      getTranslationStats,
      checkMissingKeys,
      exportProgress,
      
      // 유틸리티
      t
    }
  }
}
</script>

<style scoped>
/* 기본 컨테이너 */
.language-switcher {
  position: relative;
  display: inline-block;
  user-select: none;
}

/* 버튼 스타일 */
.language-buttons {
  display: flex;
  gap: 8px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.lang-btn:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

.lang-btn.active {
  background: #007bff;
  border-color: #007bff;
  color: white;
}

.lang-btn .flag {
  font-size: 16px;
}

.lang-btn .lang-text {
  font-size: 13px;
  font-weight: 500;
}

/* 플래그 스타일 */
.language-flags {
  display: flex;
  gap: 4px;
  align-items: center;
}

.flag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.flag-item:hover {
  background: #f0f0f0;
}

.flag-item.active {
  background: #e3f2fd;
  color: #1976d2;
}

.flag-item .flag {
  font-size: 18px;
}

.flag-item .lang-text {
  font-size: 12px;
  font-weight: 500;
}

/* 미니 진행률 표시 */
.mini-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.mini-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #dc3545 0%, #ffc107 50%, #28a745 100%);
  transition: width 0.3s ease;
}

/* 컴팩트 스타일 */
.language-compact {
  position: relative;
  min-width: 120px;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.current-language:hover {
  background: #f8f9fa;
}

.current-language .arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.current-language .arrow.open {
  transform: rotate(180deg);
}

.compact-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 4px;
}

.compact-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.compact-option:hover {
  background: #f8f9fa;
}

.compact-option.active {
  background: #e3f2fd;
  color: #1976d2;
}

.compact-option .completion {
  margin-left: auto;
  font-size: 11px;
  color: #6c757d;
}

/* 개발 패널 */
.dev-panel {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  margin-top: 8px;
  min-width: 320px;
  max-width: 480px;
}

.dev-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
}

.dev-header h4 {
  margin: 0;
  font-size: 14px;
  color: #495057;
}

.close-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #6c757d;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #495057;
}

.dev-content {
  padding: 16px;
}

.stats-grid {
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
}

.stat-item {
  padding: 12px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #f8f9fa;
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.stat-header .flag {
  font-size: 16px;
}

.stat-header .name {
  font-weight: 500;
  color: #495057;
}

.stat-details {
  font-size: 12px;
  color: #6c757d;
}

.progress-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.mini-bar {
  flex: 1;
  height: 4px;
  background: #e9ecef;
  border-radius: 2px;
  overflow: hidden;
}

.mini-fill {
  height: 100%;
  background: linear-gradient(90deg, #dc3545 0%, #ffc107 50%, #28a745 100%);
  transition: width 0.3s ease;
}

.counts {
  display: flex;
  gap: 12px;
}

.dev-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.dev-btn {
  padding: 6px 12px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background: white;
  color: #007bff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
}

.dev-btn:hover {
  background: #007bff;
  color: white;
}

/* 개발 토글 버튼 */
.dev-toggle {
  position: absolute;
  top: 0;
  right: -32px;
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dev-toggle:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

/* 🔧 언어 변경 중 표시 */
.language-changing .lang-btn,
.language-changing .flag-item,
.language-changing .current-language {
  pointer-events: none;
  opacity: 0.7;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .language-buttons {
    flex-direction: column;
  }
  
  .language-flags {
    justify-content: center;
  }
  
  .dev-panel {
    left: -100px;
    right: -100px;
    min-width: auto;
  }
}

/* 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
  .language-select,
  .lang-btn,
  .current-language,
  .compact-dropdown,
  .dev-panel {
    background: #2d3748;
    border-color: #4a5568;
    color: #e2e8f0;
  }
  
  .lang-btn:hover,
  .current-language:hover,
  .compact-option:hover {
    background: #4a5568;
  }
  
  .lang-btn.active {
    background: #3182ce;
    border-color: #3182ce;
  }
  
  .flag-item:hover {
    background: #4a5568;
  }
  
  .flag-item.active {
    background: #2a4365;
  }
  
  .dev-header {
    background: #4a5568;
  }
  
  .stat-item {
    background: #4a5568;
    border-color: #718096;
  }
}

/* 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.compact-dropdown,
.dev-panel {
  animation: fadeIn 0.2s ease;
}

/* 접근성 개선 */
.language-select:focus,
.lang-btn:focus,
.current-language:focus,
.compact-option:focus,
.dev-btn:focus,
.dev-toggle:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* 고대비 모드 지원 */
@media (prefers-contrast: high) {
  .language-select,
  .lang-btn,
  .current-language {
    border-width: 2px;
  }
  
  .lang-btn.active {
    border-width: 3px;
  }
}
</style>