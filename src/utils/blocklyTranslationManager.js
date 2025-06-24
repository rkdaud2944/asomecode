// src/utils/blocklyTranslationManager.js
// Blockly 블록들의 번역을 관리하는 시스템

import { i18n } from '@/i18n'

class BlocklyTranslationManager {
  constructor() {
    this.originalBlocks = new Map()
    this.translatedBlocks = new Map()
    this.initialized = false
    
    // 지원 언어
    this.supportedLanguages = ['ko', 'en', 'vi']
    
    // 블록 번역 데이터
    this.blockTranslations = {
      ko: {
        // 기본 동작 블록
        'basic_attention': '차렷',
        'walk_step_forward': '걸음 앞으로 걷기',
        'walk_step_back': '걸음 뒤로 걷기',
        'walk_step_left': '걸음 왼쪽으로 회전',
        'walk_right': '오른쪽으로 회전',
        'walk_left': '왼쪽으로 회전',
        'walk_back': '후진하기',
        
        // 메시지 관련 블록
        'code_car_4_msg_h': "메시지가 'H' 인가?",
        'code_car_4_msg_f': "메시지가 'F' 인가?",
        'code_car_4_msg_b': "메시지가 'B' 인가?",
        'code_car_4_msg_l': "메시지가 'L' 인가?",
        'code_car_4_msg_r': "메시지가 'R' 인가?",
        
        // AI 관련 블록
        'ai_stt': '음성인식 시작',
        'ai_tts_play': '음성파일 재생',
        'ai_tts_delete': '음성파일 삭제',
        
        // 공통 필드
        'speed': '속도',
        'number': '숫자',
        
        // 툴팁
        'basic_attention_tooltip': '어썸봇 차렷블록',
        'walk_step_forward_tooltip': '입력한 걸음 수 만큼 앞으로 걷는 블록',
        'walk_step_back_tooltip': '입력한 걸음 수 만큼 뒤로 걷는 블록',
        'walk_left_tooltip': '모터 움직임 속도를 제어하여 1회 좌회전하는 코드',
        'walk_right_tooltip': '모터 움직임 속도를 제어하여 1회 우회전하는 코드',
        'ai_stt_tooltip': '음성을 녹음하는 블록',
        'ai_tts_play_tooltip': 'TTS 지정 재생 블록'
      },
      en: {
        // 기본 동작 블록
        'basic_attention': 'Attention',
        'walk_step_forward': 'steps forward',
        'walk_step_back': 'steps backward',
        'walk_step_left': 'steps turn left',
        'walk_right': 'Turn right',
        'walk_left': 'Turn left',
        'walk_back': 'Move backward',
        
        // 메시지 관련 블록
        'code_car_4_msg_h': "Is message 'H'?",
        'code_car_4_msg_f': "Is message 'F'?",
        'code_car_4_msg_b': "Is message 'B'?",
        'code_car_4_msg_l': "Is message 'L'?",
        'code_car_4_msg_r': "Is message 'R'?",
        
        // AI 관련 블록
        'ai_stt': 'Start voice recognition',
        'ai_tts_play': 'Play voice file',
        'ai_tts_delete': 'Delete voice file',
        
        // 공통 필드
        'speed': 'Speed',
        'number': 'Number',
        
        // 툴팁
        'basic_attention_tooltip': 'AwesomeBot attention block',
        'walk_step_forward_tooltip': 'Walk forward by specified steps',
        'walk_step_back_tooltip': 'Walk backward by specified steps',
        'walk_left_tooltip': 'Turn left once with motor speed control',
        'walk_right_tooltip': 'Turn right once with motor speed control',
        'ai_stt_tooltip': 'Block for recording voice',
        'ai_tts_play_tooltip': 'Block for playing specified TTS'
      },
      vi: {
        // 기본 동작 블록
        'basic_attention': 'Nghiêm',
        'walk_step_forward': 'bước tiến',
        'walk_step_back': 'bước lùi',
        'walk_step_left': 'bước rẽ trái',
        'walk_right': 'Rẽ phải',
        'walk_left': 'Rẽ trái',
        'walk_back': 'Lùi lại',
        
        // 메시지 관련 블록
        'code_car_4_msg_h': "Tin nhắn là 'H'?",
        'code_car_4_msg_f': "Tin nhắn là 'F'?",
        'code_car_4_msg_b': "Tin nhắn là 'B'?",
        'code_car_4_msg_l': "Tin nhắn là 'L'?",
        'code_car_4_msg_r': "Tin nhắn là 'R'?",
        
        // AI 관련 블록
        'ai_stt': 'Bắt đầu nhận dạng giọng nói',
        'ai_tts_play': 'Phát file âm thanh',
        'ai_tts_delete': 'Xóa file âm thanh',
        
        // 공통 필드
        'speed': 'Tốc độ',
        'number': 'Số',
        
        // 툴팁
        'basic_attention_tooltip': 'Khối nghiêm AwesomeBot',
        'walk_step_forward_tooltip': 'Bước tiến theo số bước đã chỉ định',
        'walk_step_back_tooltip': 'Bước lùi theo số bước đã chỉ định',
        'walk_left_tooltip': 'Rẽ trái một lần với điều khiển tốc độ motor',
        'walk_right_tooltip': 'Rẽ phải một lần với điều khiển tốc độ motor',
        'ai_stt_tooltip': 'Khối ghi âm giọng nói',
        'ai_tts_play_tooltip': 'Khối phát TTS được chỉ định'
      }
    }
  }

  // 초기화
  init() {
    if (this.initialized) return
    
    console.log('🧩 BlocklyTranslationManager 초기화 중...')
    
    // 언어 변경 이벤트 리스너
    if (typeof window !== 'undefined') {
      window.addEventListener('language-changed', this.handleLanguageChange.bind(this))
    }
    
    this.initialized = true
    console.log('✅ BlocklyTranslationManager 초기화 완료')
  }

  // 언어 변경 핸들러
  handleLanguageChange(event) {
    const { language } = event.detail
    console.log(`🔄 Blockly 번역: 언어 변경 감지 - ${language}`)
    
    // Blockly 워크스페이스가 있으면 블록들을 재번역
    if (typeof Blockly !== 'undefined' && Blockly.getMainWorkspace) {
      setTimeout(() => {
        this.updateAllBlocks(language)
      }, 100)
    }
  }

  // 번역 텍스트 가져오기
  getTranslation(key, locale = null) {
    const currentLocale = locale || i18n.global.locale.value
    const translations = this.blockTranslations[currentLocale]
    return translations ? translations[key] : key
  }

  // Blockly 메시지 객체에 번역 적용
  applyBlocklyMessages(locale = null) {
    const currentLocale = locale || i18n.global.locale.value
    
    if (typeof Blockly === 'undefined') {
      console.warn('Blockly가 로드되지 않았습니다.')
      return
    }

    // Blockly.Msg 객체에 번역 적용
    if (!Blockly.Msg) {
      Blockly.Msg = {}
    }

    const translations = this.blockTranslations[currentLocale] || this.blockTranslations.ko
    
    // 번역을 Blockly.Msg에 적용
    Object.entries(translations).forEach(([key, value]) => {
      const msgKey = key.toUpperCase()
      Blockly.Msg[msgKey] = value
      
      // 특별한 키들에 대한 처리
      if (key === 'walk_step_forward') {
        Blockly.Msg.WALK_STEP_FORWARD_TITLE = value
      }
      if (key === 'walk_step_forward_tooltip') {
        Blockly.Msg.WALK_STEP_FORWARD_TOOLTIP = value
      }
    })

    console.log(`✅ Blockly 메시지 번역 적용: ${currentLocale}`)
  }

  // 모든 블록 업데이트
  updateAllBlocks(locale = null) {
    const currentLocale = locale || i18n.global.locale.value
    
    if (typeof Blockly === 'undefined' || !Blockly.getMainWorkspace) {
      return
    }

    try {
      const workspace = Blockly.getMainWorkspace()
      if (!workspace) return

      // 기존 블록들의 텍스트를 업데이트
      const allBlocks = workspace.getAllBlocks()
      
      allBlocks.forEach(block => {
        this.updateBlockText(block, currentLocale)
      })

      // 워크스페이스 다시 렌더링
      workspace.render()
      
      console.log(`✅ ${allBlocks.length}개 블록 번역 업데이트 완료`)
      
    } catch (error) {
      console.error('블록 업데이트 오류:', error)
    }
  }

  // 개별 블록 텍스트 업데이트
  updateBlockText(block, locale = null) {
    const currentLocale = locale || i18n.global.locale.value
    const blockType = block.type
    
    // 블록 타입에 따른 번역 적용
    if (this.blockTranslations[currentLocale] && this.blockTranslations[currentLocale][blockType]) {
      const translatedText = this.blockTranslations[currentLocale][blockType]
      
      // 블록의 필드들을 찾아서 업데이트
      const inputList = block.inputList
      
      inputList.forEach(input => {
        input.fieldRow.forEach(field => {
          if (field.constructor === Blockly.FieldLabel) {
            // 원본 텍스트와 매칭되는 번역이 있는지 확인
            const originalText = field.getValue()
            if (this.shouldTranslateField(originalText, blockType)) {
              field.setValue(translatedText)
            }
          }
        })
      })

      // 툴팁 업데이트
      const tooltipKey = blockType + '_tooltip'
      if (this.blockTranslations[currentLocale][tooltipKey]) {
        block.setTooltip(this.blockTranslations[currentLocale][tooltipKey])
      }
    }
  }

  // 필드가 번역되어야 하는지 확인
  shouldTranslateField(originalText, blockType) {
    // 한글이 포함된 텍스트만 번역 대상으로 간주
    return /[\u3131-\u318E\uAC00-\uD7A3]/.test(originalText)
  }

  // 새로운 번역 추가
  addTranslation(blockType, translations) {
    this.supportedLanguages.forEach(lang => {
      if (translations[lang]) {
        if (!this.blockTranslations[lang]) {
          this.blockTranslations[lang] = {}
        }
        this.blockTranslations[lang][blockType] = translations[lang]
      }
    })
    
    console.log(`✅ 블록 번역 추가: ${blockType}`)
  }

  // 번역 데이터 내보내기
  exportTranslations() {
    return {
      blockTranslations: this.blockTranslations,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    }
  }

  // 번역 데이터 가져오기
  importTranslations(data) {
    try {
      if (data.blockTranslations) {
        this.blockTranslations = data.blockTranslations
        console.log('✅ 블록 번역 데이터 가져오기 완료')
        return true
      }
      return false
    } catch (error) {
      console.error('블록 번역 가져오기 오류:', error)
      return false
    }
  }

  // 개발자 도구
  printTranslationStats() {
    if (process.env.NODE_ENV !== 'development') return
    
    console.group('🧩 Blockly 번역 통계')
    
    this.supportedLanguages.forEach(lang => {
      const count = Object.keys(this.blockTranslations[lang] || {}).length
      console.log(`${lang}: ${count}개 번역`)
    })
    
    // 누락된 번역 확인
    const koKeys = Object.keys(this.blockTranslations.ko || {})
    this.supportedLanguages.forEach(lang => {
      if (lang === 'ko') return
      
      const langKeys = Object.keys(this.blockTranslations[lang] || {})
      const missing = koKeys.filter(key => !langKeys.includes(key))
      
      if (missing.length > 0) {
        console.warn(`${lang} 누락 번역:`, missing)
      }
    })
    
    console.groupEnd()
  }
}

// 싱글톤 인스턴스
export const blocklyTranslationManager = new BlocklyTranslationManager()

// Vue 플러그인
export const BlocklyTranslationPlugin = {
  install(app) {
    app.config.globalProperties.$blocklyTM = blocklyTranslationManager
    
    // 전역에서 접근 가능하도록
    if (typeof window !== 'undefined') {
      window.blocklyTM = blocklyTranslationManager
    }
    
    console.log('🔌 BlocklyTranslationManager 플러그인 설치 완료')
  }
}

export default BlocklyTranslationManager