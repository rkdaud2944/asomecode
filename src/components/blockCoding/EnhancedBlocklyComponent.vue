<!-- src/components/blockCoding/EnhancedBlocklyComponent.vue -->
<!-- 번역 시스템이 통합된 개선된 Blockly 컴포넌트 -->

<template>
  <div class="enhanced-blockly-wrapper">
    <!-- 상단 툴바 -->
    <div class="blockly-toolbar">
      <div class="toolbar-left">
        <button @click="newProject" class="toolbar-btn" :title="$t('create_new')">
          <i class="icon-new"></i>
          {{ $t('create_new') }}
        </button>
        <button @click="saveProject" class="toolbar-btn" :title="$t('save')">
          <i class="icon-save"></i>
          {{ $t('save') }}
        </button>
        <button @click="loadProject" class="toolbar-btn" :title="$t('load')">
          <i class="icon-load"></i>
          {{ $t('load') }}
        </button>
      </div>
      
      <div class="toolbar-center">
        <button @click="runCode" class="toolbar-btn run-btn" :title="$t('run')">
          <i class="icon-play"></i>
          {{ $t('run') }}
        </button>
        <button @click="stopCode" class="toolbar-btn stop-btn" :title="$t('stop')">
          <i class="icon-stop"></i>
          {{ $t('stop') }}
        </button>
      </div>
      
      <div class="toolbar-right">
        <!-- 언어 전환기 -->
        <EnhancedLanguageSwitcher 
          display-type="compact"
          :show-flag="true"
          @language-changed="onLanguageChanged"
        />
        
        <button @click="toggleCodeView" class="toolbar-btn" :title="$t('toggle_code_view')">
          <i class="icon-code"></i>
          {{ $t('code_view') }}
        </button>
        
        <button @click="toggleFullscreen" class="toolbar-btn" :title="$t('fullscreen')">
          <i class="icon-fullscreen"></i>
        </button>
      </div>
    </div>
    
    <!-- 메인 영역 -->
    <div class="blockly-main" :class="{ 'code-visible': showCode }">
      <!-- Blockly 워크스페이스 -->
      <div class="blockly-workspace" ref="blocklyDiv">
        <!-- Blockly가 여기에 렌더링됩니다 -->
      </div>
      
      <!-- 툴박스 (번역된 카테고리) -->
      <xml ref="blocklyToolbox" style="display: none">
        <category :name="$t('category_logic')" colour="#5C81A6">
          <block type="controls_if"></block>
          <block type="logic_compare"></block>
          <block type="logic_operation"></block>
          <block type="logic_negate"></block>
          <block type="logic_boolean"></block>
        </category>
        
        <category :name="$t('category_loops')" colour="#5CA68D">
          <block type="controls_repeat_ext"></block>
          <block type="controls_whileUntil"></block>
          <block type="controls_for"></block>
        </category>
        
        <category :name="$t('category_math')" colour="#5C68A6">
          <block type="math_number"></block>
          <block type="math_arithmetic"></block>
          <block type="math_single"></block>
        </category>
        
        <category :name="$t('category_text')" colour="#5CA65C">
          <block type="text"></block>
          <block type="text_length"></block>
          <block type="text_print"></block>
        </category>
        
        <category :name="$t('category_variables')" custom="VARIABLE" colour="#A65C81">
        </category>
        
        <category :name="$t('category_functions')" custom="PROCEDURE" colour="#995BA6">
        </category>
        
        <!-- 어썸보드 전용 카테고리들 -->
        <category :name="$t('category_movement')" colour="#FF9A00">
          <block type="walk_step_forward"></block>
          <block type="walk_step_back"></block>
          <block type="walk_left"></block>
          <block type="walk_right"></block>
          <block type="basic_attention"></block>
        </category>
        
        <category :name="$t('category_ai')" colour="#5058D1">
          <block type="ai_stt"></block>
          <block type="ai_tts_play"></block>
          <block type="ai_tts_delete"></block>
        </category>
        
        <category :name="$t('category_messages')" colour="#B666FC">
          <block type="code_car_4_msg_h"></block>
          <block type="code_car_4_msg_f"></block>
          <block type="code_car_4_msg_b"></block>
          <block type="code_car_4_msg_l"></block>
          <block type="code_car_4_msg_r"></block>
        </category>
        
        <category :name="$t('category_sensors')" colour="#4CAF50">
          <block type="sensor_distance"></block>
        </category>
        
        <category :name="$t('category_sound')" colour="#FF5722">
          <block type="sound_beep"></block>
        </category>
        
        <category :name="$t('category_led')" colour="#FFC107">
          <block type="led_on"></block>
        </category>
      </xml>
      
      <!-- 코드 뷰어 -->
      <div v-if="showCode" class="code-viewer">
        <div class="code-header">
          <h3>{{ $t('generated_code') }}</h3>
          <button @click="copyCode" class="copy-btn" :title="$t('copy_code')">
            <i class="icon-copy"></i>
            {{ $t('copy') }}
          </button>
        </div>
        <pre class="code-content"><code>{{ generatedCode }}</code></pre>
      </div>
    </div>
    
    <!-- 하단 상태바 -->
    <div class="blockly-statusbar">
      <div class="status-left">
        <span class="status-item">
          <i class="icon-blocks"></i>
          {{ $t('blocks_count', { count: blockCount }) }}
        </span>
        <span class="status-item">
          <i class="icon-device"></i>
          {{ connectionStatus }}
        </span>
      </div>
      
      <div class="status-right">
        <span class="status-item">
          {{ $t('language') }}: {{ currentLanguageLabel }}
        </span>
        <span v-if="lastSaved" class="status-item">
          {{ $t('last_saved') }}: {{ lastSaved }}
        </span>
      </div>
    </div>
    
    <!-- 번역 상태 개발 패널 (개발 모드) -->
    <div v-if="showTranslationPanel && isDevMode" class="translation-panel">
      <div class="panel-header">
        <h4>{{ $t('translation_status') }}</h4>
        <button @click="showTranslationPanel = false" class="close-btn">×</button>
      </div>
      
      <div class="panel-content">
        <div class="translation-stats">
          <div v-for="(stat, lang) in translationStats" :key="lang" class="stat-row">
            <span class="lang-name">{{ getLanguageLabel(lang) }}</span>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: stat.completion + '%' }"></div>
            </div>
            <span class="completion">{{ stat.completion }}%</span>
          </div>
        </div>
        
        <div class="panel-actions">
          <button @click="refreshTranslationStats" class="panel-btn">
            {{ $t('refresh') }}
          </button>
          <button @click="updateAllBlocksLanguage" class="panel-btn">
            {{ $t('update_blocks') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import EnhancedLanguageSwitcher from '@/components/EnhancedLanguageSwitcher.vue'
import { blocklyTranslationManager } from '@/utils/blocklyTranslationManager'
import { updateAllBlocksLanguage } from '@/blocks/translatedStocks'

export default {
  name: 'EnhancedBlocklyComponent',
  components: {
    EnhancedLanguageSwitcher
  },
  props: {
    toolboxXml: {
      type: String,
      default: null
    },
    initialCode: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    showDevTools: {
      type: Boolean,
      default: false
    }
  },
  emits: ['codeChanged', 'workspaceChanged', 'languageChanged'],
  setup(props, { emit }) {
    const { t, locale } = useI18n()
    
    // Refs
    const blocklyDiv = ref(null)
    const blocklyToolbox = ref(null)
    const workspace = ref(null)
    const showCode = ref(false)
    const showTranslationPanel = ref(false)
    const generatedCode = ref('')
    const blockCount = ref(0)
    const lastSaved = ref(null)
    const translationStats = ref({})
    
    // Computed
    const isDevMode = computed(() => process.env.NODE_ENV === 'development')
    const currentLanguageLabel = computed(() => {
      const labels = {
        ko: '한국어',
        en: 'English',
        vi: 'Tiếng Việt'
      }
      return labels[locale.value] || locale.value
    })
    
    const connectionStatus = computed(() => {
      // 실제 연결 상태는 상위 컴포넌트나 store에서 관리
      return t('disconnected')
    })
    
    // Blockly 초기화
    const initializeBlockly = async () => {
      if (!blocklyDiv.value) return
      
      try {
        // Blockly 번역 메시지 적용
        blocklyTranslationManager.applyBlocklyMessages()
        
        // 워크스페이스 옵션
        const options = {
          toolbox: blocklyToolbox.value,
          collapse: true,
          comments: true,
          disable: true,
          maxBlocks: Infinity,
          trashcan: true,
          horizontalLayout: false,
          toolboxPosition: 'start',
          css: true,
          media: 'https://unpkg.com/blockly/media/',
          rtl: false,
          scrollbars: true,
          sounds: true,
          oneBasedIndex: true,
          readOnly: props.readOnly,
          zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
          },
          grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
          }
        }
        
        // 워크스페이스 생성
        workspace.value = Blockly.inject(blocklyDiv.value, options)
        
        // 이벤트 리스너 등록
        workspace.value.addChangeListener(onWorkspaceChange)
        
        // 초기 코드 로드
        if (props.initialCode) {
          loadCode(props.initialCode)
        }
        
        // 번역 상태 업데이트
        refreshTranslationStats()
        
        console.log('✅ Blockly 워크스페이스 초기화 완료')
        
      } catch (error) {
        console.error('❌ Blockly 초기화 실패:', error)
      }
    }
    
    // 워크스페이스 변경 이벤트 핸들러
    const onWorkspaceChange = (event) => {
      if (event.type === Blockly.Events.FINISHED_LOADING) {
        return
      }
      
      // 코드 생성
      if (workspace.value) {
        try {
          const code = Blockly.JavaScript.workspaceToCode(workspace.value)
          generatedCode.value = code
          
          // 블록 개수 업데이트
          const allBlocks = workspace.value.getAllBlocks()
          blockCount.value = allBlocks.length
          
          // 이벤트 발생
          emit('codeChanged', code)
          emit('workspaceChanged', workspace.value)
          
        } catch (error) {
          console.error('코드 생성 오류:', error)
        }
      }
    }
    
    // 언어 변경 핸들러
    const onLanguageChanged = async (languageInfo) => {
      console.log('🧩 Blockly 컴포넌트: 언어 변경 -', languageInfo.language)
      
      if (!workspace.value) return
      
      try {
        // 현재 워크스페이스 상태 저장
        const xml = Blockly.Xml.workspaceToDom(workspace.value)
        const xmlText = Blockly.Xml.domToPrettyText(xml)
        
        // Blockly 번역 메시지 업데이트
        blocklyTranslationManager.applyBlocklyMessages(languageInfo.language)
        
        // 툴박스 재생성 (번역된 카테고리명 적용)
        await nextTick()
        
        // 워크스페이스 새로고침
        workspace.value.updateToolbox(blocklyToolbox.value)
        
        // 기존 블록들 업데이트
        setTimeout(() => {
          updateAllBlocksLanguage()
          refreshTranslationStats()
        }, 200)
        
        // 이벤트 발생
        emit('languageChanged', languageInfo)
        
      } catch (error) {
        console.error('Blockly 언어 변경 오류:', error)
      }
    }
    
    // 번역 통계 새로고침
    const refreshTranslationStats = () => {
      if (blocklyTranslationManager) {
        const analysis = blocklyTranslationManager.blockTranslations
        // 간단한 완성도 계산
        const stats = {}
        Object.keys(analysis).forEach(lang => {
          const count = Object.keys(analysis[lang] || {}).length
          stats[lang] = {
            translated: count,
            completion: lang === 'ko' ? 100 : Math.min(100, Math.round((count / 50) * 100))
          }
        })
        translationStats.value = stats
      }
    }
    
    // 언어 라벨 가져오기
    const getLanguageLabel = (lang) => {
      const labels = {
        ko: '한국어',
        en: 'English',
        vi: 'Tiếng Việt'
      }
      return labels[lang] || lang
    }
    
    // 툴바 액션들
    const newProject = () => {
      if (workspace.value && confirm(t('confirm_new_project'))) {
        workspace.value.clear()
        generatedCode.value = ''
      }
    }
    
    const saveProject = () => {
      if (!workspace.value) return
      
      try {
        const xml = Blockly.Xml.workspaceToDom(workspace.value)
        const xmlText = Blockly.Xml.domToPrettyText(xml)
        
        // 파일 다운로드
        const blob = new Blob([xmlText], { type: 'application/xml' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `blockly-project-${new Date().toISOString().split('T')[0]}.xml`
        a.click()
        URL.revokeObjectURL(url)
        
        lastSaved.value = new Date().toLocaleTimeString()
        
      } catch (error) {
        console.error('프로젝트 저장 오류:', error)
        alert(t('save_failed'))
      }
    }
    
    const loadProject = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.xml'
      input.onchange = (e) => {
        const file = e.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            try {
              loadCode(e.target.result)
            } catch (error) {
              console.error('프로젝트 로드 오류:', error)
              alert(t('load_failed'))
            }
          }
          reader.readAsText(file)
        }
      }
      input.click()
    }
    
    const loadCode = (xmlText) => {
      if (!workspace.value || !xmlText) return
      
      try {
        workspace.value.clear()
        const xml = Blockly.Xml.textToDom(xmlText)
        Blockly.Xml.domToWorkspace(xml, workspace.value)
      } catch (error) {
        console.error('코드 로드 오류:', error)
      }
    }
    
    const runCode = () => {
      if (!generatedCode.value) {
        alert(t('no_code_to_run'))
        return
      }
      
      // 실제 코드 실행 로직은 상위 컴포넌트에서 처리
      emit('runCode', generatedCode.value)
    }
    
    const stopCode = () => {
      // 코드 실행 중지 로직
      emit('stopCode')
    }
    
    const toggleCodeView = () => {
      showCode.value = !showCode.value
      
      // 레이아웃 조정
      nextTick(() => {
        if (workspace.value) {
          Blockly.svgResize(workspace.value)
        }
      })
    }
    
    const toggleFullscreen = () => {
      const element = document.querySelector('.enhanced-blockly-wrapper')
      if (element.requestFullscreen) {
        element.requestFullscreen()
      }
    }
    
    const copyCode = async () => {
      try {
        await navigator.clipboard.writeText(generatedCode.value)
        // 성공 피드백
        const btn = document.querySelector('.copy-btn')
        const originalText = btn.textContent
        btn.textContent = t('copied')
        setTimeout(() => {
          btn.textContent = originalText
        }, 2000)
      } catch (error) {
        console.error('클립보드 복사 실패:', error)
      }
    }
    
    // 라이프사이클
    onMounted(() => {
      // Blockly 라이브러리 로드 확인
      if (typeof Blockly === 'undefined') {
        console.error('Blockly 라이브러리가 로드되지 않았습니다.')
        return
      }
      
      // 번역 매니저 초기화
      blocklyTranslationManager.init()
      
      // Blockly 초기화
      setTimeout(initializeBlockly, 100)
    })
    
    onUnmounted(() => {
      if (workspace.value) {
        workspace.value.dispose()
      }
    })
    
    // 언어 변경 감시
    watch(locale, (newLocale) => {
      onLanguageChanged({ language: newLocale })
    })
    
    return {
      // Refs
      blocklyDiv,
      blocklyToolbox,
      showCode,
      showTranslationPanel,
      generatedCode,
      blockCount,
      lastSaved,
      translationStats,
      
      // Computed
      isDevMode,
      currentLanguageLabel,
      connectionStatus,
      
      // Methods
      onLanguageChanged,
      refreshTranslationStats,
      getLanguageLabel,
      newProject,
      saveProject,
      loadProject,
      runCode,
      stopCode,
      toggleCodeView,
      toggleFullscreen,
      copyCode,
      updateAllBlocksLanguage
    }
  }
}
</script>

<style scoped>
.enhanced-blockly-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
  position: relative;
}

/* 툴바 스타일 */
.blockly-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: white;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toolbar-left,
.toolbar-center,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toolbar-btn {
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

.toolbar-btn:hover {
  background: #f8f9fa;
  border-color: #007bff;
}

.toolbar-btn i {
  font-size: 16px;
}

.run-btn {
  background: #28a745;
  color: white;
  border-color: #28a745;
}

.run-btn:hover {
  background: #218838;
}

.stop-btn {
  background: #dc3545;
  color: white;
  border-color: #dc3545;
}

.stop-btn:hover {
  background: #c82333;
}

/* 메인 영역 */
.blockly-main {
  display: flex;
  flex: 1;
  min-height: 0;
  transition: all 0.3s ease;
}

.blockly-workspace {
  flex: 1;
  min-height: 400px;
}

.code-viewer {
  width: 350px;
  border-left: 1px solid #ddd;
  background: white;
  display: flex;
  flex-direction: column;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.code-header h3 {
  margin: 0;
  font-size: 16px;
  color: #495057;
}

.copy-btn {
  padding: 6px 12px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background: white;
  color: #007bff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
}

.copy-btn:hover {
  background: #007bff;
  color: white;
}

.code-content {
  flex: 1;
  padding: 16px;
  margin: 0;
  overflow-y: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.4;
  background: #f8f9fa;
}

/* 상태바 */
.blockly-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #f8f9fa;
  border-top: 1px solid #ddd;
  font-size: 12px;
  color: #6c757d;
}

.status-left,
.status-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-item i {
  font-size: 14px;
}

/* 번역 패널 */
.translation-panel {
  position: absolute;
  top: 60px;
  right: 16px;
  width: 300px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
  border-radius: 8px 8px 0 0;
}

.panel-header h4 {
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

.panel-content {
  padding: 16px;
}

.translation-stats {
  margin-bottom: 16px;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.lang-name {
  width: 60px;
  font-size: 12px;
  color: #495057;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #dc3545 0%, #ffc107 50%, #28a745 100%);
  transition: width 0.3s ease;
}

.completion {
  width: 40px;
  text-align: right;
  font-size: 11px;
  color: #6c757d;
}

.panel-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.panel-btn {
  padding: 6px 12px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background: white;
  color: #007bff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
}

.panel-btn:hover {
  background: #007bff;
  color: white;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .toolbar-left,
  .toolbar-center,
  .toolbar-right {
    flex-wrap: wrap;
  }
  
  .toolbar-btn {
    padding: 6px 8px;
    font-size: 12px;
  }
  
  .blockly-main.code-visible {
    flex-direction: column;
  }
  
  .code-viewer {
    width: 100%;
    height: 200px;
    border-left: none;
    border-top: 1px solid #ddd;
  }
  
  .translation-panel {
    right: 8px;
    left: 8px;
    width: auto;
  }
}

/* 다크 모드 지원 */
@media (prefers-color-scheme: dark) {
  .enhanced-blockly-wrapper {
    background: #1a1a1a;
  }
  
  .blockly-toolbar,
  .code-viewer,
  .translation-panel {
    background: #2d2d2d;
    border-color: #404040;
  }
  
  .toolbar-btn,
  .copy-btn,
  .panel-btn {
    background: #2d2d2d;
    border-color: #404040;
    color: #e0e0e0;
  }
  
  .toolbar-btn:hover,
  .copy-btn:hover,
  .panel-btn:hover {
    background: #404040;
  }
  
  .blockly-statusbar {
    background: #2d2d2d;
    border-color: #404040;
    color: #b0b0b0;
  }
  
  .code-content {
    background: #1a1a1a;
    color: #e0e0e0;
  }
}

/* 애니메이션 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.translation-panel {
  animation: slideIn 0.3s ease;
}

/* Blockly 워크스페이스 커스터마이징 */
.enhanced-blockly-wrapper :deep(.blocklyToolboxDiv) {
  background: white !important;
  border-right: 1px solid #ddd !important;
}

.enhanced-blockly-wrapper :deep(.blocklyTreeLabel) {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif !important;
}

.enhanced-blockly-wrapper :deep(.blocklyScrollbarBackground) {
  fill: #f8f9fa !important;
}

/* 접근성 개선 */
.toolbar-btn:focus,
.copy-btn:focus,
.panel-btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* 로딩 상태 */
.blockly-workspace.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.blockly-workspace.loading::before {
  content: "Loading Blockly...";
  color: #6c757d;
  font-size: 16px;
}
</style>