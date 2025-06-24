<!-- src/components/LanguageSwitcher.vue - 완전한 파일 -->
<template>
  <div class="language-switcher">
    <!-- 드롭다운 스타일 -->
    <select 
      v-if="displayType === 'dropdown'"
      v-model="currentLocale" 
      @change="changeLanguage"
      class="language-select"
    >
      <option v-for="(label, code) in locales" :key="code" :value="code">
        {{ label }}
      </option>
    </select>

    <!-- 버튼 스타일 -->
    <div v-else-if="displayType === 'buttons'" class="language-buttons">
      <button
        v-for="(label, code) in locales"
        :key="code"
        @click="setLanguage(code)"
        :class="['lang-btn', { active: currentLocale === code }]"
      >
        {{ label }}
      </button>
    </div>

    <!-- 플래그 + 텍스트 스타일 -->
    <div v-else class="language-flags">
      <div 
        v-for="(info, code) in localesWithFlags"
        :key="code"
        @click="setLanguage(code)"
        :class="['flag-item', { active: currentLocale === code }]"
      >
        <span class="flag">{{ info.flag }}</span>
        <span class="lang-text">{{ info.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'LanguageSwitcher',
  props: {
    displayType: {
      type: String,
      default: 'dropdown',
      validator: (value) => ['dropdown', 'buttons', 'flags'].includes(value)
    },
    showFlag: {
      type: Boolean,
      default: true
    }
  },
  emits: ['languageChanged'],
  setup(props, { emit }) {
    const { locale } = useI18n()
    const currentLocale = ref(locale.value)
    
    // 기본 언어 목록
    const locales = {
      ko: '한국어',
      en: 'English', 
      vi: 'Tiếng Việt'
    }

    // 플래그와 함께 사용할 언어 정보
    const localesWithFlags = {
      ko: { label: '한국어', flag: '🇰🇷' },
      en: { label: 'English', flag: '🇺🇸' },
      vi: { label: 'Tiếng Việt', flag: '🇻🇳' }
    }

    // 언어 변경 함수
    function changeLanguage(event) {
      const newLocale = event.target.value
      setLanguage(newLocale)
    }

    function setLanguage(newLocale) {
      if (!locales[newLocale]) {
        console.error('지원하지 않는 언어:', newLocale)
        return
      }

      currentLocale.value = newLocale
      locale.value = newLocale
      
      // 로컬 스토리지에 선택한 언어 저장
      try {
        localStorage.setItem('preferred-language', newLocale)
      } catch (error) {
        console.warn('localStorage 저장 실패:', error)
      }
      
      // 부모 컴포넌트에 언어 변경 알림
      emit('languageChanged', newLocale)
      
      // 전역 이벤트 발생
      window.dispatchEvent(new CustomEvent('language-changed', {
        detail: { language: newLocale }
      }))
      
      console.log(`언어가 ${locales[newLocale]}로 변경되었습니다.`)
    }

    // 컴포넌트 마운트 시 저장된 언어 설정 복원
    onMounted(() => {
      try {
        const savedLanguage = localStorage.getItem('preferred-language')
        if (savedLanguage && locales[savedLanguage]) {
          currentLocale.value = savedLanguage
          if (locale.value !== savedLanguage) {
            locale.value = savedLanguage
          }
        }
      } catch (error) {
        console.warn('localStorage 접근 실패:', error)
      }
    })

    // 현재 언어 상태 감시
    watch(locale, (newLocale) => {
      currentLocale.value = newLocale
    })

    return {
      locales,
      localesWithFlags,
      currentLocale,
      changeLanguage,
      setLanguage
    }
  }
}
</script>

<style scoped>
.language-switcher {
  display: inline-block;
  margin: 0 1rem;
}

/* 드롭다운 스타일 */
.language-select {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
}

.language-select:hover {
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0,123,255,0.1);
}

.language-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

/* 버튼 스타일 */
.language-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.lang-btn {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.lang-btn:hover {
  background: #f8f9fa;
  border-color: #007bff;
  transform: translateY(-1px);
}

.lang-btn.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0,123,255,0.3);
}

/* 플래그 스타일 */
.language-flags {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.flag-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  white-space: nowrap;
}

.flag-item:hover {
  background: #f8f9fa;
  border-color: #ddd;
  transform: translateY(-1px);
}

.flag-item.active {
  background: #e3f2fd;
  border-color: #007bff;
  box-shadow: 0 2px 4px rgba(0,123,255,0.2);
}

.flag {
  font-size: 1.2rem;
  display: inline-block;
}

.lang-text {
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
}

.flag-item.active .lang-text {
  color: #007bff;
  font-weight: 600;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .language-switcher {
    margin: 0 0.5rem;
  }
  
  .language-flags {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  
  .flag-item {
    width: 100%;
    justify-content: center;
    padding: 0.6rem;
  }
  
  .language-buttons {
    flex-direction: column;
    gap: 0.4rem;
  }
  
  .lang-btn {
    width: 100%;
    text-align: center;
    padding: 0.6rem;
  }
  
  .language-select {
    width: 100%;
    padding: 0.6rem;
  }
}

/* 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
  .language-select {
    background: #2d3748;
    border-color: #4a5568;
    color: white;
  }
  
  .lang-btn {
    background: #2d3748;
    border-color: #4a5568;
    color: white;
  }
  
  .lang-btn:hover {
    background: #4a5568;
  }
  
  .flag-item:hover {
    background: #4a5568;
    border-color: #718096;
  }
  
  .flag-item.active {
    background: #2b6cb0;
    border-color: #3182ce;
  }
  
  .lang-text {
    color: #e2e8f0;
  }
  
  .flag-item.active .lang-text {
    color: white;
  }
}
</style>