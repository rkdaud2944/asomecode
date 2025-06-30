// src/blocks/translatedStocks.js
// 기존 stocks.js를 번역 시스템과 연동하여 개선한 버전

import { blocklyTranslationManager } from '@/utils/blocklyTranslationManager'
import { i18n } from '@/i18n'

// 번역 도우미 함수
function getBlockTranslation(key, fallback = key) {
  const currentLocale = i18n.global.locale.value
  return blocklyTranslationManager.getTranslation(key, currentLocale) || fallback
}

// 이미지 URL 도우미
function getBlockIcon(iconName) {
  const baseUrl = 'https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images'
  return `${baseUrl}/${iconName}`
}

// 동적 번역이 적용된 블록들

// ====== 기본 동작 블록들 ======

Blockly.Blocks["basic_attention"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('asomebot/clarify.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('basic_attention', '차렷'))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip(() => getBlockTranslation('basic_attention_tooltip', '어썸봇 차렷블록'));
  },
  
  // 언어 변경 시 업데이트
  updateLanguage: function() {
    // 필드 텍스트 업데이트
    const field = this.getField('FIELD_NAME')
    if (field) {
      field.setValue(getBlockTranslation('basic_attention', '차렷'))
    }
    this.setTooltip(getBlockTranslation('basic_attention_tooltip', '어썸봇 차렷블록'))
  }
};

javascriptGenerator["basic_attention"] = function () {
  return 'asomebot.home()\n';
};

Blockly.Blocks["walk_step_forward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('block_icons/asomebot/move_forward.png'), 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField(() => getBlockTranslation('walk_step_forward', '걸음 앞으로 걷기'));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip(() => getBlockTranslation('walk_step_forward_tooltip', '입력한 걸음 수 만큼 앞으로 걷는 블록'));
  },
  
  updateLanguage: function() {
    // 동적으로 텍스트 업데이트하는 로직
    this.inputList.forEach(input => {
      input.fieldRow.forEach(field => {
        if (field instanceof Blockly.FieldLabel && field.class_ === 'blockly-text') {
          field.setValue(getBlockTranslation('walk_step_forward', '걸음 앞으로 걷기'))
        }
      })
    })
    this.setTooltip(getBlockTranslation('walk_step_forward_tooltip', '입력한 걸음 수 만큼 앞으로 걷는 블록'))
  }
};

javascriptGenerator["walk_step_forward"] = function (block) {
  let number = block.getFieldValue('number');
  return `for i in range(${number}): asomebot.forward()\n`;
};

Blockly.Blocks["walk_step_back"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('asomebot/move_backward.png'), 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField(() => getBlockTranslation('walk_step_back', '걸음 뒤로 걷기'));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip(() => getBlockTranslation('walk_step_back_tooltip', '입력한 걸음 수 만큼 뒤로 걷는 블록'));
  }
};

javascriptGenerator["walk_step_back"] = function (block) {
  let number = block.getFieldValue('number');
  return `for i in range(${number}): asomebot.backward()\n`;
};

Blockly.Blocks["walk_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('asomebot/turn_left.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('walk_left', '왼쪽으로 회전'))
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('speed', '속도'))
      .appendField(new Blockly.FieldNumber(300), "speed")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip(() => getBlockTranslation('walk_left_tooltip', '모터 움직임 속도를 제어하여 1회 좌회전하는 코드'));
  }
};

javascriptGenerator["walk_left"] = function (block) {
  let number_speed = block.getFieldValue('speed');
  return `for i in range(1): asomebot.turn_left(20,30,40,${number_speed})\n`;
};

Blockly.Blocks["walk_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('asomebot/turn_right.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('walk_right', '오른쪽으로 회전'))
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('speed', '속도'))
      .appendField(new Blockly.FieldNumber(300), "speed")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip(() => getBlockTranslation('walk_right_tooltip', '모터 움직임 속도를 제어하여 1회 우회전하는 코드'));
  }
};

javascriptGenerator["walk_right"] = function (block) {
  let number_speed = block.getFieldValue('speed');
  return `for i in range(1): asomebot.turn_right(20,30,40,${number_speed})\n`;
};

// ====== AI 관련 블록들 ======

Blockly.Blocks["ai_stt"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('images/block_icons/common/internet.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('ai_stt', '음성인식 시작'))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("5058D1");
    this.setTooltip(() => getBlockTranslation('ai_stt_tooltip', '음성을 녹음하는 블록'));
    this.setHelpUrl("https://example.com");
  }
};

javascriptGenerator["ai_stt"] = function () {
  return 'import stt;\nsttMSG=stt.start()\n';
};

Blockly.Blocks["ai_tts_play"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('images/block_icons/common/internet.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('ai_tts_play', '음성파일 재생'))
    this.appendValueInput("tts_text")
      .setCheck("null")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
    this.setColour("5058D1");
    this.setTooltip(() => getBlockTranslation('ai_tts_play_tooltip', 'TTS 지정 재생 블록'));
    this.setHelpUrl("https://example.com");
  }
};

javascriptGenerator["ai_tts_play"] = function (block) {
  let asd = javascriptGenerator.valueToCode(block, 'tts_text', javascriptGenerator.ORDER_ATOMIC);
  return `import tts;\ntts.play(${asd})\n`;
};

// ====== 메시지 처리 블록들 ======

function createMessageBlock(blockName, message, color = "b666fc") {
  Blockly.Blocks[blockName] = {
    init: function () {
      this.appendDummyInput()
        .appendField(() => getBlockTranslation(blockName, `메시지가 '${message}' 인가?`))
      this.appendStatementInput('while_state')
        .appendField('');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, "String");
      this.setColour(color);
    }
  };

  javascriptGenerator[blockName] = function (block) {
    let branch = javascriptGenerator.statementToCode(block, 'while_state');
    return `if msg == '${message}':\n${branch}`;
  };
}

// 메시지 블록들 생성
createMessageBlock("code_car_4_msg_h", "H");
createMessageBlock("code_car_4_msg_f", "F");
createMessageBlock("code_car_4_msg_b", "B");
createMessageBlock("code_car_4_msg_l", "L");
createMessageBlock("code_car_4_msg_r", "R");

// 봇 메시지 블록들
createMessageBlock("code_bot_5_if_h", "H");
createMessageBlock("code_bot_5_if_f", "F");
createMessageBlock("code_bot_5_if_b", "B");
createMessageBlock("code_bot_5_if_l", "L");
createMessageBlock("code_bot_5_if_r", "R");

// ====== 전역 번역 업데이트 함수 ======

// 모든 블록의 언어를 업데이트하는 함수
function updateAllBlocksLanguage() {
  if (typeof Blockly === 'undefined' || !Blockly.getMainWorkspace) {
    return;
  }

  try {
    const workspace = Blockly.getMainWorkspace();
    if (!workspace) return;

    const allBlocks = workspace.getAllBlocks();
    
    allBlocks.forEach(block => {
      if (typeof block.updateLanguage === 'function') {
        block.updateLanguage();
      }
    });

    // 툴박스도 업데이트
    updateToolboxLanguage();
    
    // 워크스페이스 재렌더링
    workspace.render();
    
    console.log(`✅ ${allBlocks.length}개 Blockly 블록 언어 업데이트 완료`);
    
  } catch (error) {
    console.error('Blockly 블록 언어 업데이트 오류:', error);
  }
}

// 툴박스 언어 업데이트
function updateToolboxLanguage() {
  // 툴박스의 카테고리명 번역
  const toolboxCategories = {
    'Logic': () => getBlockTranslation('category_logic', '논리'),
    'Loops': () => getBlockTranslation('category_loops', '반복'),
    'Math': () => getBlockTranslation('category_math', '수학'),
    'Text': () => getBlockTranslation('category_text', '텍스트'),
    'Variables': () => getBlockTranslation('category_variables', '변수'),
    'Functions': () => getBlockTranslation('category_functions', '함수'),
    'Movement': () => getBlockTranslation('category_movement', '움직임'),
    'AI': () => getBlockTranslation('category_ai', 'AI'),
    'Messages': () => getBlockTranslation('category_messages', '메시지')
  };

  // 툴박스 DOM 업데이트 (실제 구현은 프로젝트 구조에 따라 조정)
  Object.entries(toolboxCategories).forEach(([originalName, translateFn]) => {
    const categoryElements = document.querySelectorAll(`[name="${originalName}"]`);
    categoryElements.forEach(element => {
      element.setAttribute('name', translateFn());
    });
  });
}

// ====== 언어 변경 이벤트 리스너 ======

// 언어 변경 시 모든 블록 업데이트
if (typeof window !== 'undefined') {
  window.addEventListener('language-changed', (event) => {
    console.log('🧩 Blockly: 언어 변경 감지 -', event.detail.language);
    
    // 약간의 지연 후 업데이트 (Blockly 초기화 대기)
    setTimeout(() => {
      updateAllBlocksLanguage();
      blocklyTranslationManager.applyBlocklyMessages(event.detail.language);
    }, 200);
  });
}

// ====== 고급 블록들 ======

// 조건문 블록
Blockly.Blocks["advance_if"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('advance_if_title', '만약에'))
      .appendField(new Blockly.FieldDropdown([
        [() => getBlockTranslation('variable_i', 'i'), "i"],
        [() => getBlockTranslation('variable_count', 'count'), "count"],
        [() => getBlockTranslation('variable_cm', 'cm'), "cm"]
      ]), "variable")
      .appendField(new Blockly.FieldDropdown([
        ["==", "=="], [">", ">"], ["<", "<"], 
        [">=", ">="], ["<=", "<="], ["!=", "!="]
      ]), "inequality")
    this.appendValueInput("if_value")
      .setCheck("null")
    this.appendStatementInput('if_state')
      .appendField('')
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
    this.setTooltip(() => getBlockTranslation('advance_if_tooltip', '조건에 따라 코드를 실행하는 블록'));
  }
};

javascriptGenerator["advance_if"] = function (block) {
  const variable = block.getFieldValue("variable");
  const inq = block.getFieldValue('inequality');
  let value_if_value = javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC);
  let branch = javascriptGenerator.statementToCode(block, 'if_state');

  return `if ${variable} ${inq} ${value_if_value}:\n${branch}`;
};

// 숫자 입력 블록
Blockly.Blocks["int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldNumber(1), "int_key")
    this.setOutput(true, 'null');
    this.setColour("55A55B");
    this.setTooltip(() => getBlockTranslation('int_tooltip', '숫자 값을 입력하는 블록'));
  }
};

javascriptGenerator["int"] = function (block) {
  let int_key = block.getFieldValue('int_key');
  return [int_key, javascriptGenerator.ORDER_ATOMIC];
};

// 문자열 입력 블록
Blockly.Blocks["mark_int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(() => getBlockTranslation('text_input_label', '텍스트:'))
      .appendField(new Blockly.FieldTextInput("가"), "string_key")
    this.setOutput(true);
    this.setColour("55A55B");
    this.setTooltip(() => getBlockTranslation('mark_int_tooltip', '문자열 값을 입력하는 블록'));
  }
};

javascriptGenerator["mark_int"] = function (block) {
  let string_key = block.getFieldValue('string_key');
  return [`'${string_key}'`, javascriptGenerator.ORDER_ATOMIC];
};

// ====== 댄스 블록들 ======

Blockly.Blocks["dance_ballet"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('asomebot/dance_ballet.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('dance_ballet', '발레 댄스'))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("9C27B0");
    this.setTooltip(() => getBlockTranslation('dance_ballet_tooltip', '발레 댄스 동작을 수행하는 블록'));
  }
};

javascriptGenerator["dance_ballet"] = function () {
  return 'asomebot.ballet()\n';
};

// ====== 센서 블록들 ======

Blockly.Blocks["sensor_distance"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('sensors/distance.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('sensor_distance', '거리 센서 값'))
    this.setOutput(true, "Number");
    this.setColour("4CAF50");
    this.setTooltip(() => getBlockTranslation('sensor_distance_tooltip', '거리 센서로 측정한 값을 반환하는 블록'));
  }
};

javascriptGenerator["sensor_distance"] = function () {
  return ['asomebot.get_distance()', javascriptGenerator.ORDER_ATOMIC];
};

// ====== 사운드 블록들 ======

Blockly.Blocks["sound_beep"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('sound/beep.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('sound_beep', '삐 소리내기'))
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('frequency', '주파수'))
      .appendField(new Blockly.FieldNumber(1000), "frequency")
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('duration', '지속시간'))
      .appendField(new Blockly.FieldNumber(500), "duration")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF5722");
    this.setTooltip(() => getBlockTranslation('sound_beep_tooltip', '지정된 주파수와 지속시간으로 삐 소리를 내는 블록'));
  }
};

javascriptGenerator["sound_beep"] = function (block) {
  let frequency = block.getFieldValue('frequency');
  let duration = block.getFieldValue('duration');
  return `asomebot.beep(${frequency}, ${duration})\n`;
};

// ====== LED 블록들 ======

Blockly.Blocks["led_on"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(getBlockIcon('led/led_on.png'), 23, 23, '*'))
      .appendField(() => getBlockTranslation('led_on', 'LED 켜기'))
    this.appendDummyInput()
      .appendField(() => getBlockTranslation('color', '색상'))
      .appendField(new Blockly.FieldDropdown([
        [() => getBlockTranslation('color_red', '빨간색'), "red"],
        [() => getBlockTranslation('color_green', '초록색'), "green"],
        [() => getBlockTranslation('color_blue', '파란색'), "blue"],
        [() => getBlockTranslation('color_yellow', '노란색'), "yellow"],
        [() => getBlockTranslation('color_white', '흰색'), "white"]
      ]), "color")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFC107");
    this.setTooltip(() => getBlockTranslation('led_on_tooltip', '지정된 색상으로 LED를 켜는 블록'));
  }
};

javascriptGenerator["led_on"] = function (block) {
  let color = block.getFieldValue('color');
  return `asomebot.led_on('${color}')\n`;
};

// ====== 유틸리티 함수들 ======

// 번역이 필요한 새로운 블록을 쉽게 만들 수 있는 헬퍼 함수
function createTranslatableBlock(blockName, config) {
  Blockly.Blocks[blockName] = {
    init: function () {
      // 기본 설정 적용
      if (config.image) {
        this.appendDummyInput()
          .appendField(new Blockly.FieldImage(getBlockIcon(config.image), 23, 23, '*'))
          .appendField(() => getBlockTranslation(blockName, config.defaultText));
      } else {
        this.appendDummyInput()
          .appendField(() => getBlockTranslation(blockName, config.defaultText));
      }

      // 추가 입력 필드들
      if (config.inputs) {
        config.inputs.forEach(input => {
          if (input.type === 'number') {
            this.appendDummyInput()
              .appendField(() => getBlockTranslation(input.labelKey, input.defaultLabel))
              .appendField(new Blockly.FieldNumber(input.defaultValue), input.name);
          } else if (input.type === 'dropdown') {
            this.appendDummyInput()
              .appendField(() => getBlockTranslation(input.labelKey, input.defaultLabel))
              .appendField(new Blockly.FieldDropdown(input.options), input.name);
          } else if (input.type === 'value') {
            this.appendValueInput(input.name)
              .setCheck(input.check || "null");
          } else if (input.type === 'statement') {
            this.appendStatementInput(input.name)
              .appendField(input.label || '');
          }
        });
      }

      // 연결 설정
      if (config.previousStatement !== false) {
        this.setPreviousStatement(true, null);
      }
      if (config.nextStatement !== false) {
        this.setNextStatement(true, "String");
      }
      if (config.output) {
        this.setOutput(true, config.output);
      }

      // 스타일 설정
      this.setColour(config.color || "5C81A6");
      this.setTooltip(() => getBlockTranslation(`${blockName}_tooltip`, config.defaultTooltip || config.defaultText));
      
      if (config.helpUrl) {
        this.setHelpUrl(config.helpUrl);
      }
      
      if (config.inputsInline) {
        this.setInputsInline(true);
      }
    },
    
    updateLanguage: function() {
      // 모든 라벨 필드 업데이트
      this.inputList.forEach(input => {
        input.fieldRow.forEach(field => {
          if (field instanceof Blockly.FieldLabel && field.class_ === 'blockly-text') {
            // 해당 필드의 번역 키를 찾아서 업데이트
            // 이 부분은 실제 필드와 번역 키를 매핑하는 로직 필요
          }
        });
      });
      this.setTooltip(getBlockTranslation(`${blockName}_tooltip`, config.defaultTooltip || config.defaultText));
    }
  };

  // 코드 생성기가 제공된 경우 설정
  if (config.generator) {
    javascriptGenerator[blockName] = config.generator;
  }
}

// ====== 번역 업데이트 훅 ======

// Blockly 워크스페이스가 변경될 때 번역 업데이트
if (typeof Blockly !== 'undefined') {
  // 워크스페이스 변경 이벤트 리스너
  const originalAddChangeListener = Blockly.Events.setGroup;
  
  // 새 블록이 추가될 때 번역 적용
  document.addEventListener('blocklyWorkspaceChanged', (event) => {
    if (event.detail.type === 'create') {
      setTimeout(() => {
        updateAllBlocksLanguage();
      }, 100);
    }
  });
}

// ====== 개발자 도구 ======

if (process.env.NODE_ENV === 'development') {
  // 전역 함수로 등록
  if (typeof window !== 'undefined') {
    window.updateBlocklyLanguage = updateAllBlocksLanguage;
    window.printBlocklyTranslations = () => {
      blocklyTranslationManager.printTranslationStats();
    };
    
    // 개발자 콘솔에서 블록 번역 추가하기
    window.addBlockTranslation = (blockType, translations) => {
      blocklyTranslationManager.addTranslation(blockType, translations);
      updateAllBlocksLanguage();
    };
  }
}

// ====== 모듈 내보내기 ======

export {
  updateAllBlocksLanguage,
  updateToolboxLanguage,
  createTranslatableBlock,
  getBlockTranslation
};

// 모든 번역 데이터를 Blockly Translation Manager에 등록
setTimeout(() => {
  // 블록 번역 데이터가 제대로 로드되었는지 확인
  blocklyTranslationManager.init();
  console.log('🧩 Blockly 번역 블록들이 로드되었습니다.');
}, 1000);