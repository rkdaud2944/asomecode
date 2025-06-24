<!-- src/components/EnhancedLanguageSwitcher.vue -->
<template>
  <div class="enhanced-language-switcher">
    <!-- 드롭다운 스타일 -->
    <div v-if="displayType === 'dropdown'" class="dropdown-container">
      <select 
        v-model="currentLocale" 
        @change="changeLanguage"
        class="language-select"
        :class="{ 'with-flag': showFlag }"
      >
        <option v-for="(info, code) in localesWithFlags" :key="code" :value="code">
          {{ showFlag ? info.flag + ' ' : '' }}{{ info.label }}
        </option>
      </select>
      
      <!-- 번역 완성도 표시 (개발 모드) -->
      <div v-if="showProgress && isDevMode" class="progress-indicator">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: completionPercentage + '%' }"
          ></div>
        </div>
        <span class="progress-text">{{ completionPercentage }}%</span>
      </div>
    </div>

    <!-- 버튼 스타일 -->
    <div v-else-if="displayType === 'buttons'" class="language-buttons">
      <button
        v-for="(info, code) in localesWithFlags"
        :key="code"
        @click="setLanguage(code)"
        :class="['lang-btn', { active: currentLocale === code }]"
        :title="`${info.label} (${getCompletionForLanguage(code)}% 완성)`"
      >
        <span v-if="showFlag" class="flag">{{ info.flag }}</span>
        <span class="label">{{ info.label }}</span>
        <span v-if="showProgress && isDevMode" class="completion">
          {{ getCompletionForLanguage(code) }}%
        </span>
      </button>
    </div>

    <!-- 플래그 + 텍스트 스타일 -->
    <div v-else-if="displayType === 'flags'" class="language-flags">
      <div 
        v-for="(info, code) in localesWithFlags"
        :key="code"
        @click="setLanguage(code)"
        :class="['flag-item', { active: currentLocale === code }]"
        :title="`${info.label} (${getCompletionForLanguage(code)}% 완성)`"
      >
        <span class="flag">{{ info.flag }}</span>
        <span v-if="!flagOnly" class="lang-text">{{ info.label }}</span>
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
          <div v-for="(info, code) in translationStats" :key="code" class="stat-item">
            <div class="stat-header">
              <span class="flag">{{ localesWithFlags[code].flag }}</span>
              <span class="name">{{ localesWithFlags[code].label }}</span>
            </div>
            <div class="stat-details">
              <div class="progress-line">
                <span>완성도: {{ info.completion }}%</span>
                <div class="mini-bar">
                  <div class="mini-fill" :style="{ width: info.completion + '%' }"></div>
                </div>
              </div>
              <div class="counts">
                <span>번역됨: {{ info.translated }}</span>
                <span>누락: {{ info.missing }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="dev-actions">
          <button @click="refreshStats" class="dev-btn">새로고침</button>
          <button @click="exportTranslations" class="dev-btn">내보내기</button>
          <button @click="analyzeTranslations" class="dev-btn">분석</button>
        </div>
      </div>
    </div>

    <!-- 개발 모드 토글 버튼 -->
    <button 
      v-if="isDevMode && showDevToggle" 
      @click="toggleDevPanel"
      class="dev-toggle"
      :title="$t('번역 개발 패널 열기')"
    >
      🛠️
    </button>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { enhancedTranslationManager } from '@/utils/enhancedTranslationManager'

export default {
  name: 'EnhancedLanguageSwitcher',
  props: {
    displayType: {
      type: String,
      default: 'dropdown',
      validator: (value) => ['dropdown', 'buttons', 'flags', 'compact'].includes(value)
    },
    showFlag: {
      type: Boolean,
      default: true
    },
    flagOnly: {
      type: Boolean,
      default: false
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showDevPanel: {
      type: Boolean,
      default: false
    },
    showDevToggle: {
      type: Boolean,
      default: true
    },
    autoRefresh: {
      type: Boolean,
      default: true
    },
    refreshInterval: {
      type: Number,
      default: 30000 // 30초
    }
  },
  emits: ['languageChanged', 'translationStatsUpdated'],
  setup(props, { emit }) {
    const { locale, t } = useI18n()
    const currentLocale = ref(locale.value)
    const dropdownOpen = ref(false)
    const devPanelOpen = ref(false)
    const translationStats = ref({})
    const refreshTimer = ref(null)
    
    const isDevMode = computed(() => process.env.NODE_ENV === 'development')
    
    // 언어 목록 (플래그 포함)
    const localesWithFlags = {
      ko: { label: '한국어', flag: '🇰🇷', nativeName: '한국어' },
      en: { label: 'English', flag: '🇺🇸', nativeName: 'English' },
      vi: { label: 'Tiếng Việt', flag: '🇻🇳', nativeName: 'Tiếng Việt' }
    }

    // 현재 언어의 번역 완성도
    const completionPercentage = computed(() => {
      const stats = translationStats.value[currentLocale.value]
      return stats ? stats.completion : 100
    })

    // 특정 언어의 완성도 가져오기
    function getCompletionForLanguage(code) {
      const stats = translationStats.value[code]
      return stats ? stats.completion : 100
    }

    // 번역 통계 새로고침
    function refreshStats() {
      if (enhancedTranslationManager) {
        const analysis = enhancedTranslationManager.analyzeCompleteness()
        translationStats.value = analysis
        emit('translationStatsUpdated', analysis)
      }
    }

    // 언어 변경 함수
    function changeLanguage(event) {
      const newLocale = event.target.value
      setLanguage(newLocale)
    }

    function setLanguage(newLocale) {
      if (!localesWithFlags[newLocale]) {
        console.error('지원하지 않는 언어:', newLocale)
        return
      }

      currentLocale.value = newLocale
      locale.value = newLocale
      
      // 드롭다운 닫기
      dropdownOpen.value = false
      
      // 로컬 스토리지에 선택한 언어 저장
      try {
        localStorage.setItem('awesome-board-language', newLocale)
      } catch (error) {
        console.warn('localStorage 저장 실패:', error)
      }
      
      // 부모 컴포넌트에 언어 변경 알림
      emit('languageChanged', {
        language: newLocale,
        languageInfo: localesWithFlags[newLocale]
      })
      
      // 전역 이벤트 발생
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { 
          language: newLocale,
          languageInfo: localesWithFlags[newLocale]
        }
      }))
      
      console.log(`언어가 ${localesWithFlags[newLocale].label}로 변경되었습니다.`)
      
      // 통계 새로고침
      setTimeout(refreshStats, 100)
    }

    // 컴팩트 드롭다운 토글
    function toggleDropdown() {
      dropdownOpen.value = !dropdownOpen.value
    }

    // 개발 패널 토글
    function toggleDevPanel() {
      devPanelOpen.value = !devPanelOpen.value
      if (devPanelOpen.value) {
        refreshStats()
      }
    }

    // 번역 내보내기
    function exportTranslations() {
      if (enhancedTranslationManager && enhancedTranslationManager.exportTranslations) {
        const data = enhancedTranslationManager.exportTranslations()
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

    // 번역 분석
    function analyzeTranslations() {
      if (enhancedTranslationManager && enhancedTranslationManager.printDevReport) {
        enhancedTranslationManager.printDevReport()
      }
    }

    // 외부 클릭으로 드롭다운 닫기
    function handleClickOutside(event) {
      const switcher = event.target.closest('.enhanced-language-switcher')
      if (!switcher) {
        dropdownOpen.value = false
      }
    }

    // 컴포넌트 마운트 시 설정
    onMounted(() => {
      // 저장된 언어 설정 복원
      try {
        const savedLanguage = localStorage.getItem('awesome-board-language')
        if (savedLanguage && localesWithFlags[savedLanguage]) {
          currentLocale.value = savedLanguage
          if (locale.value !== savedLanguage) {
            locale.value = savedLanguage
          }
        }
      } catch (error) {
        console.warn('localStorage 접근 실패:', error)
      }

      // 초기 통계 로드
      refreshStats()

      // 자동 새로고침 설정
      if (props.autoRefresh && isDevMode.value) {
        refreshTimer.value = setInterval(refreshStats, props.refreshInterval)
      }

      // 외부 클릭 이벤트 리스너 등록
      document.addEventListener('click', handleClickOutside)
    })

    // 컴포넌트 언마운트 시 정리
    onUnmounted(() => {
      if (refreshTimer.value) {
        clearInterval(refreshTimer.value)
      }
      document.removeEventListener('click', handleClickOutside)
    })

    // 언어 변경 감시
    watch(locale, (newLocale) => {
      if (currentLocale.value !== newLocale) {
        currentLocale.value = newLocale
        refreshStats()
      }
    })

    return {
      currentLocale,
      dropdownOpen,
      devPanelOpen,
      translationStats,
      isDevMode,
      localesWithFlags,
      completionPercentage,
      changeLanguage,
      setLanguage,
      toggleDropdown,
      toggleDevPanel,
      refreshStats,
      exportTranslations,
      analyzeTranslations,
      getCompletionForLanguage
    }
  }
}
</script>

<style scoped>
.enhanced-language-switcher {
  position: relative;
  display: inline-block;
}

/* 드롭다운 스타일 */
.dropdown-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.language-select:hover {
  border-color: #007bff;
}

.language-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.progress-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.progress-bar {
  width: 40px;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%);
  transition: width 0.3s ease;
}

.progress-text {
  color: #6c757d;
  font-weight: 500;
}

/* 버튼 스타일 */
.language-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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
  font-size: 14px;
}

.lang-btn:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

.lang-btn.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.lang-btn .flag {
  font-size: 16px;
}

.lang-btn .completion {
  font-size: 11px;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 4px;
  border-radius: 3px;
}

/* 플래그 스타일 */
.language-flags {
  display: flex;
  gap: 8px;
  align-items: center;
}

.flag-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.flag-item:hover {
  background: #f8f9fa;
}

.flag-item.active {
  background: #e3f2fd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flag-item .flag {
  font-size: 24px;
  margin-bottom: 4px;
}

.flag-item .lang-text {
  font-size: 12px;
  color: #6c757d;
}

.mini-progress {
  position: absolute;
  bottom: 2px;
  left: 2px;
  right: 2px;
  height: 2px;
  background: #e9ecef;
  border-radius: 1px;
}

.mini-progress-fill {
  height: 100%;
  background: #28a745;
  border-radius: 1px;
  transition: width 0.3s ease;
}

/* 컴팩트 스타일 */
.language-compact {
  position: relative;
}

.current-language {
  display: flex;
  align-items: center;
  gap: 6px;
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