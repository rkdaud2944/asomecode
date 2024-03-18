import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

// BOT BASIC CODE
Blockly.Blocks["basic_ready"] = {
  init: function () {  
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("준비");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("어썸 봇 준비블록");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["basic_ready"] = function () {
  var code = 'import asomebot\nimport hcsr04\nhcsr04.open(3, 2)\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Blocks["basic_attention"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("차렷")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("어썸 봇 차렷블록");
  },
};

javascriptGenerator["basic_attention"] = function () {
  var code = 'asomebot.home()\n';
  return code;
};

Blockly.Blocks["basic_motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("모터 각도 조절");

    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(90), "number1")
      .appendField(new Blockly.FieldNumber(90), "number2")
      .appendField(new Blockly.FieldNumber(90), "number3")
      .appendField(new Blockly.FieldNumber(90), "number4");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("4개의 모터 각도를 입력하는 블록");
  },
};

javascriptGenerator["basic_motor_angle"] = function (block) {
  let number1 = block.getFieldValue('number1');
  let number2 = block.getFieldValue('number2');
  let number3 = block.getFieldValue('number3');
  let number4 = block.getFieldValue('number4');
  let code = 'asomebot.align(' + number1 + ',' + number2 + ',' + number3 + ',' + number4 + ');\n';
  return code;
};

// BOT WALK CODE

Blockly.Blocks["walk_step_forward"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomebot/move_forward.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField("걸음 앞으로 걷기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("입력한 걸음 수 만큼 앞으로 걷는 블록");
  },
};

javascriptGenerator["walk_step_forward"] = function (block) {
  let number = block.getFieldValue('number');
  let code = 'for i in range(' + number + '): asomebot.forward()\n';
  return code;
};


Blockly.Blocks["walk_step_back"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/move_backward.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField("걸음 뒤로 걷기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("입력한 걸음 수 만큼 뒤로 걷는 블록");
  },
};

javascriptGenerator["walk_step_back"] = function (block) {
  let number = block.getFieldValue('number');
  let code = 'for i in range(' + number + '): asomebot.backward()\n';
  return code;
};


Blockly.Blocks["walk_step_left"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_left.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField("걸음 왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("입력한 걸음 수 만큼 왼쪽으로 회전하는 블록");    
  },
};

javascriptGenerator["walk_step_left"] = function (block) {
  let number = block.getFieldValue('number');
  let code = 'for i in range(' + number + '): asomebot.turn_left()\n';
  return code;
};


Blockly.Blocks["walk_step_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_right.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "number")
      .appendField("걸음 오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("입력한 걸음 수 만큼 오른쪽으로 회전하는 블록");
  },
};

javascriptGenerator["walk_step_right"] = function (block) {
  let number = block.getFieldValue('number');
  let code = 'for i in range(' + number + '): asomebot.turn_right()\n';
  return code;
};


Blockly.Blocks["walk_motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_right.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1), "count")
      .appendField("번 모터")
    this.appendDummyInput()
      .appendField("각도")
      .appendField(new Blockly.FieldNumber(90), "angle")
      .appendField(", 회전시간")
      .appendField(new Blockly.FieldNumber(1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");    
  },
};

javascriptGenerator["walk_motor_angle"] = function (block) {
  let number_count = block.getFieldValue('count');
  let number_angle = block.getFieldValue('angle');
  let number_secs = block.getFieldValue('secs');
  let code = 'asomebot.angles(['+number_count+'],['+number_angle+'-90],'+number_secs+'*1000)\n';
  return code;
};


Blockly.Blocks["walk_all_motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_right.png', 23, 23, '*'))
      .appendField("각 모터의 각도")
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(90), "angle1")
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90), "angle2")
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90), "angle3")
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90), "angle4")
    this.appendDummyInput()
      .appendField("회전시간")
      .appendField(new Blockly.FieldNumber(1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
  },
};

javascriptGenerator["walk_all_motor_angle"] = function (block) {
  let number_angle1 = block.getFieldValue('angle1');
  let number_angle2 = block.getFieldValue('angle2');
  let number_angle3 = block.getFieldValue('angle3');
  let number_angle4 = block.getFieldValue('angle4');
  let number_secs = block.getFieldValue('secs');
  let code = 'asomebot.angles([0,1,2,3],['+number_angle1+'-90,'+number_angle2+'-90,'+number_angle3+'-90,'+number_angle4+'-90],'+number_secs+'*1000)\n';
  return code;
};

Blockly.Blocks["walk_forward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomebot/move_forward.png', 23, 23, '*'))
      .appendField("앞으로 걷기")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(150), "speed1")
      .appendField(new Blockly.FieldNumber(300), "speed2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("모터 움직임 속도를 제어하여 1회 전진하는 코드 [허리모터,발모터]");
  },
};

javascriptGenerator["walk_forward"] = function (block) {
  let number_speed1 = block.getFieldValue('speed1');
  let number_speed2 = block.getFieldValue('speed2');
  let code = 'for i in range(1): asomebot.forward(20,30,40,0,'+number_speed1+','+ number_speed2+')\n';
  return code;
};

Blockly.Blocks["walk_back"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/move_backward.png', 23, 23, '*'))
      .appendField("뒤로 걷기")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(150), "speed1")
      .appendField(new Blockly.FieldNumber(300), "speed2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("모터 움직임 속도를 제어하여 1회 후진하는 코드 [허리모터,발모터]");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_back"] = function (block) {
  let number_speed1 = block.getFieldValue('speed1');
  let number_speed2 = block.getFieldValue('speed2');
  let code = 'for i in range(1): asomebot.backward(20,30,40,0,'+number_speed1+','+ number_speed2+')\n';
  return code;
};


Blockly.Blocks["walk_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_left.png', 23, 23, '*'))
      .appendField("왼쪽으로 회전")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(300), "speed")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("모터 움직임 속도를 제어하여 1회 좌회전하는 코드 [허리모터,발모터]");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_left"] = function (block) {
  let number_speed = block.getFieldValue('speed');
  let code = 'for i in range(1): asomebot.turn_left(20,30,40,'+number_speed+')\n';
  return code;
};

Blockly.Blocks["walk_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/turn_right.png', 23, 23, '*'))
      .appendField("오른쪽으로 회전")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(300), "speed")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("모터 움직임 속도를 제어하여 1회 우회전하는 코드 [허리모터,발모터]");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_right"] = function (block) {
  let number_speed = block.getFieldValue('speed');
  let code = 'for i in range(1): asomebot.turn_right(20,30,40,'+number_speed+')\n';
  return code;
};

// BOT DANCE CODE

Blockly.Blocks["dance_ballet"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/ballet.png', 23, 23, '*'))
      .appendField("발레")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["dance_ballet"] = function () {
  let code = 'asomebot.ballet()\n';
  return code;
};

Blockly.Blocks["dance_wiggle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/wiggle.png', 23, 23, '*'))
      .appendField("위글")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["dance_wiggle"] = function () {
  let code = 'asomebot.wiggle()\n';
  return code;
};


Blockly.Blocks["dance_flap"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/flap.png', 23, 23, '*'))
      .appendField("플랩")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_flap"] = function () {
  let code = 'asomebot.flap()\n';
  return code;
};

Blockly.Blocks["dance_mouse"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/mouse.png', 23, 23, '*'))
      .appendField("마우스")
      .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"]]), "MOUSE_BUTTON");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("마우스 클릭");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["dance_mouse"] = function (block) {
  const mouseButton = block.getFieldValue("MOUSE_BUTTON");
  let code = `asomebot.mouse(${mouseButton === 'left' ? '1' : '-1'})\n`;
  return code;
};



Blockly.Blocks["dance_warigari"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/warigari.png', 23, 23, '*'))
      .appendField("와리가리")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_warigari"] = function () {
  let code = 'asomebot.warigari()\n';
  return code;
};

Blockly.Blocks["dance_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/swing.png', 23, 23, '*'))
      .appendField("스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_swing"] = function () {
  let code = 'asomebot.swing()\n';
  return code;
};

Blockly.Blocks["dance_right_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/right_swing.png', 23, 23, '*'))
      .appendField("오른쪽 스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_right_swing"] = function () {
  let code = 'asomebot.right_swing()\n';
  return code;
};

Blockly.Blocks["dance_left_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/left_swing.png', 23, 23, '*'))
      .appendField("왼쪽 스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_left_swing"] = function () {
  let code = 'asomebot.left_swing()\n';
  return code;
};

Blockly.Blocks["dance_tick_tock"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/tick_tock.png', 23, 23, '*'))
      .appendField("틱톡")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_tick_tock"] = function () {
  let code = 'asomebot.tick_tock()\n';
  return code;
};

Blockly.Blocks["dance_yaho"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/yaho.png', 23, 23, '*'))
      .appendField("야호")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_yaho"] = function () {
  var code = 'asomebot.yaho()\n';
  return code;
};

Blockly.Blocks["dance_moonwalk"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/moonwalk.png', 23, 23, '*'))
      .appendField("문워크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_moonwalk"] = function () {
  var code = 'asomebot.moonwalk()\n';
  return code;
};

// BOT SENSOR CODE

Blockly.Blocks["sensor_ultrasonic"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/measure_distance.png', 23, 23, '*'))
      .appendField("초음파 센서 거리측정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sensor_ultrasonic"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["sensor_hand_detection"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/measure_distance.png', 23, 23, '*'))
      .appendField("손동작 감지 준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sensor_hand_detection"] = function () {
  let code = 'import motion_detect\nmotion_detect.start()\n';
  return code;
};

Blockly.Blocks["sensor_hand_check"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/measure_distance.png', 23, 23, '*'))
      .appendField("손동작 체크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sensor_hand_check"] = function () {
  let code = 'cm = hcsr04.get_distance()\nmotion = motion_detect.get(cm)\n';
  return code;
};

// BOT SOUND CODE

Blockly.Blocks["sound_buzzer_on"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/asomebot/music.png', 23, 23, '*'))
      .appendField("부저 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sound_buzzer_on"] = function () {
  let code = 'asomebot.turn_off()\nimport music\nmusic.open(1)\n';
  return code;
};

Blockly.Blocks["sound_buzzer_off"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/asomebot/music.png', 23, 23, '*'))
      .appendField("부저 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sound_buzzer_off"] = function () {
  let code = '\nmusic.close()\nimport asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Blocks["sound_bot_hz"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/asomebot/music.png', 23, 23, '*'))
      .appendField("주파수로 소리내기")
    this.appendDummyInput()
      .appendField("주파수")
      .appendField(new Blockly.FieldNumber(0), "tone")
      .appendField("Hz, 연주시간")
      .appendField(new Blockly.FieldNumber(1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sound_bot_hz"] = function (block) {
  let number_tone = block.getFieldValue('tone');
  let number_secs = block.getFieldValue('secs');
  let code = 'music.tone('+number_tone+')\ndelay('+number_secs+')\nmusic.mute()\n';
  return code;
};

Blockly.Blocks["sound_bot_scale"] = {
  init: function () { 
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/asomebot/music.png', 23, 23, '*'))
      .appendField("음계로 소리내기")
    this.appendDummyInput()
      .appendField("음계")
      .appendField(new Blockly.FieldDropdown([
        ["C", "C"],["C#", "D#"],
        ["D", "D"],["D#", "D#"],
        ["Db", "Db"],["E", "E"],
        ["Eb", "Eb"],["F", "F"],
        ["F#", "F#"],["G", "G"],
        ["G#", "G#"],["Gb", "Gb"],
        ["A", "A"],["A#", "A#"],
        ["Ab", "Ab"],["B", "B"],
        ["Bb", "Bb"]]), "scale_button")
      .appendField(",옥타브")
      .appendField(new Blockly.FieldNumber(1), "octave")
      .appendField(",연주시간")
      .appendField(new Blockly.FieldNumber(1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sound_bot_scale"] = function (block) {
  const mouseButton = block.getFieldValue("scale_button");
  const number_octave = block.getFieldValue('octave');
  const number_secs = block.getFieldValue('secs');
  let note = '';

  switch (mouseButton) {
    case 'C':
      note = 'C';
      break;
    case 'C#':
      note = 'C#';
      break;
    case 'D':
      note = 'D';
      break;
    case 'D#':
      note = 'D#';
      break;
    case 'Db':
      note = 'Db';
      break;
    case 'E':
      note = 'E';
      break;
    case 'Eb':
      note = 'Eb';
      break;
    case 'F':
      note = 'F';
      break;
    case 'F#':
      note = 'F#';
      break;
    case 'G':
      note = 'G';
      break;
    case 'G#':
      note = 'G#';
      break;
    case 'Gb':
      note = 'Gb';
      break;
    case 'A':
      note = 'A';
      break;
    case 'A#':
      note = 'A#';
      break;
    case 'Ab':
      note = 'Ab';
      break;
    case 'B':
      note = 'B';
      break;
    case 'Bb':
      note = 'Bb';
      break;
    default:
  }
  const code = `music.note("${note}${number_octave}", ${number_secs} * 1000)\n`;

  return code;
};


// BOT ADVANCE CODE

Blockly.Blocks["advance_waiting"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_waiting_0.5"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(0.5), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_0.5"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_waiting_0.1"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(0.1), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_0.1"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_waiting_5"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(5), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_5"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};


Blockly.Blocks["advance_waiting_0.01"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(0.01), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_0.01"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_waiting_0.02"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(0.02), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_0.02"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_waiting_0.2"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(0.2), "secs")
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting_0.2"] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Blocks["advance_repeat"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('반복하기')
      .appendField(new Blockly.FieldNumber(1), "repeat_times")
      .appendField('번');
    this.appendStatementInput('do_state')
      .setCheck(null);
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
  }
};

javascriptGenerator["advance_repeat"] = function (block) {
  let repeat_times = block.getFieldValue('repeat_times');
  // console.log(repeat_times)
  // if (typeof javascriptGenerator === 'undefined' || javascriptGenerator === null) {
  //   console.error("javascriptGenerator is not defined!");
  //   return;
  // }

  let branch = javascriptGenerator.statementToCode(block, 'do_state');

  let code = '';
  code += 'for count in range(' + repeat_times + '):\n';
  code += branch;
    
  return code;
};

Blockly.Blocks["advance_endless_repeat"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('무한 반복')
    this.appendStatementInput('while_state')
      .appendField('');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
  },
};

javascriptGenerator["advance_endless_repeat"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  let code = 'while True:\n' + branch;
  return code;
};

Blockly.Blocks["advance_if"] = {
  init: function() {
     var dropdownGenerator = function() {
        let dropdownOptions = [
          ["k", "k"],["j", "j"],["l", "l"],["q", "q"],["sttMSG", "sttMSG"]
        ];
        let addlightOption = false;
        let addsoundOption = false;

        const workspaceBlocks = Blockly.mainWorkspace.getAllBlocks();
        for(let i = 0; i < workspaceBlocks.length; i++) {
          if(workspaceBlocks[i].type === 'sensor_ultrasonic') {
            dropdownOptions.push(["cm", "cm"]);
          } else if(workspaceBlocks[i].type === 'sensor_hand_detection') {
            dropdownOptions.push(["motion", "motion"]);
          } else if(workspaceBlocks[i].type === 'advance_repeat') {
            dropdownOptions.push(["count", "count"]);
          } else if(workspaceBlocks[i].type === 'message') {
            dropdownOptions.push(["msg", "msg"]);
          } else if(workspaceBlocks[i].type === 'get_weather') {
            dropdownOptions.push(["humidity", "humidity"],["temp", "temp"]["weather", "weather"]);
          } else if(workspaceBlocks[i].type === 'prepare_button_ready') {
            dropdownOptions.push(["bt", "bt"]);
          } else if(workspaceBlocks[i].type === 'prepare_buzzer_ready') {
            dropdownOptions.push(["buzzer", "buzzer"]);
          } else if(workspaceBlocks[i].type === 'prepare_tm_ready') {
            dropdownOptions.push(["bt", "bt"]);
          } else if(workspaceBlocks[i].type === 'prepare_vibration_ready') {
            dropdownOptions.push(["vs", "vs"]);
          } else if(workspaceBlocks[i].type === 'led_ledtube_time') {
            dropdownOptions.push(["h", "h"],["m", "m"]);
          } else if(workspaceBlocks[i].type === 'button_push') {
            dropdownOptions.push(["clicked", "clicked"]);
          } else if(workspaceBlocks[i].type === 'button_info') {
            dropdownOptions.push(["bt_value", "bt_value"]);
          } else if(workspaceBlocks[i].type === 'sensor_humidity') {
            dropdownOptions.push(["humidity", "humidity"]);
          } else if(workspaceBlocks[i].type === 'sensor_temperature') {
            dropdownOptions.push(["temperature", "temperature"]);
          } else if(workspaceBlocks[i].type === 'sensor_water_level') {
            dropdownOptions.push(["water", "water"]);
          } else if(workspaceBlocks[i].type === 'sensor_brightness' ||  workspaceBlocks[i].type === 'sensor_brightness_complete') {
            addlightOption = true;
          } else if(workspaceBlocks[i].type === 'sensor_sound' ||  workspaceBlocks[i].type === 'sensor_sound_complete') {
            addsoundOption = true;
          } else if(workspaceBlocks[i].type === 'sensor_soil_humidity') {
            dropdownOptions.push(["moisture", "moisture"]);
          } else if(workspaceBlocks[i].type === 'sensor_vibration_sensor') {
            dropdownOptions.push(["vibration", "vibration"]);
          }
        }
      if(addsoundOption) {
        dropdownOptions.push(["sound", "sound"]);
      }
      if(addlightOption) {
        dropdownOptions.push(["light", "light"]);
      }
      return dropdownOptions;
    };

    this.appendDummyInput()
      .appendField('만약에')
      .appendField(new Blockly.FieldDropdown(dropdownGenerator), "variable")
      .appendField(new Blockly.FieldDropdown([
        ["==", "=="],
        [">", ">"],
        ["<", "<"],
        [">=", ">="],
        ["<=", "<="],
        ["!=", "!="]
      ]), "inequality")
    this.appendValueInput("if_value")
      .setCheck("null");
    this.appendStatementInput('if_state')
      .appendField('');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  }
};

javascriptGenerator["advance_if"] = function(block) {
const variable = block.getFieldValue("variable");
const ineq = block.getFieldValue('inequality');

const code = `if ${variable} ${ineq} ` + javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC) + ':\n' + javascriptGenerator.statementToCode(block, 'if_state');

return code;
};


Blockly.Blocks["advance_elseif"] = {
  init: function() {
     var dropdownGenerator = function() {
        let dropdownOptions = [
          ["k", "k"],["j", "j"],["l", "l"],["q", "q"],["sttMSG", "sttMSG"]
        ];
        let addlightOption = false;
        let addsoundOption = false;

        const workspaceBlocks = Blockly.mainWorkspace.getAllBlocks();
        for(let i = 0; i < workspaceBlocks.length; i++) {
          if(workspaceBlocks[i].type === 'sensor_ultrasonic') {
            dropdownOptions.push(["cm", "cm"]);
          } else if(workspaceBlocks[i].type === 'sensor_hand_detection') {
            dropdownOptions.push(["motion", "motion"]);
          } else if(workspaceBlocks[i].type === 'advance_repeat') {
            dropdownOptions.push(["count", "count"]);
          } else if(workspaceBlocks[i].type === 'message') {
            dropdownOptions.push(["msg", "msg"]);
          } else if(workspaceBlocks[i].type === 'get_weather') {
            dropdownOptions.push(["humidity", "humidity"],["temp", "temp"]["weather", "weather"]);
          } else if(workspaceBlocks[i].type === 'prepare_button_ready') {
            dropdownOptions.push(["bt", "bt"]);
          } else if(workspaceBlocks[i].type === 'prepare_buzzer_ready') {
            dropdownOptions.push(["buzzer", "buzzer"]);
          } else if(workspaceBlocks[i].type === 'prepare_tm_ready') {
            dropdownOptions.push(["bt", "bt"]);
          } else if(workspaceBlocks[i].type === 'prepare_vibration_ready') {
            dropdownOptions.push(["vs", "vs"]);
          } else if(workspaceBlocks[i].type === 'led_ledtube_time') {
            dropdownOptions.push(["h", "h"],["m", "m"]);
          } else if(workspaceBlocks[i].type === 'button_push') {
            dropdownOptions.push(["clicked", "clicked"]);
          } else if(workspaceBlocks[i].type === 'button_info') {
            dropdownOptions.push(["bt_value", "bt_value"]);
          } else if(workspaceBlocks[i].type === 'sensor_humidity') {
            dropdownOptions.push(["humidity", "humidity"]);
          } else if(workspaceBlocks[i].type === 'sensor_temperature') {
            dropdownOptions.push(["temperature", "temperature"]);
          } else if(workspaceBlocks[i].type === 'sensor_water_level') {
            dropdownOptions.push(["water", "water"]);
          } else if(workspaceBlocks[i].type === 'sensor_brightness' ||  workspaceBlocks[i].type === 'sensor_brightness_complete') {
            addlightOption = true;
          } else if(workspaceBlocks[i].type === 'sensor_sound' ||  workspaceBlocks[i].type === 'sensor_sound_complete') {
            addsoundOption = true;
          } else if(workspaceBlocks[i].type === 'sensor_soil_humidity') {
            dropdownOptions.push(["moisture", "moisture"]);
          } else if(workspaceBlocks[i].type === 'sensor_vibration_sensor') {
            dropdownOptions.push(["vibration", "vibration"]);
          }
        }
      if(addsoundOption) {
        dropdownOptions.push(["sound", "sound"]);
      }
      if(addlightOption) {
        dropdownOptions.push(["light", "light"]);
      }
      return dropdownOptions;
    };

    this.appendDummyInput()
      .appendField('만약에')
      .appendField(new Blockly.FieldDropdown(dropdownGenerator), "variable")
      .appendField(new Blockly.FieldDropdown([
        ["==", "=="],
        [">", ">"], 
        ["<", "<"],
        [">=", ">="],
        ["<=", "<="],
        ["!=", "!="]
      ]), "inequality")
      this.appendValueInput("if_value")
      .setCheck("null")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니라면');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  }
};

javascriptGenerator["advance_elseif"] = function(block) {
const variable = block.getFieldValue("variable");
const ineq = block.getFieldValue('inequality');

const code = `if ${variable} ${ineq} ` + javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC) + ':\n' + javascriptGenerator.statementToCode(block, 'if_state') + 'else:\n' + javascriptGenerator.statementToCode(block, 'if_state_else');

return code;
};

// Blockly.Blocks["advance_elseif"] = {
//   init: function () {
//     this.appendDummyInput()
//     .appendField('만약에')
//     .appendField(new Blockly.FieldDropdown([
//       ["i", "i"],["count", "count"],["cm", "cm"]]), "variable")
//     .appendField(new Blockly.FieldDropdown([
//       ["==", "=="],[">", ">"],["<", "<"],[">=", ">="],["<=", "<="],["!=", "!="]]), "inequality")
//     this.appendValueInput("if_value")
//       .setCheck("null")
//     this.appendStatementInput('if_state')
//       .appendField('')
//     this.appendStatementInput('if_state')
//       .appendField('아니라면');
//     this.setColour("55A55B");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, "String");
//     this.setInputsInline(true);
//   },
// };

// javascriptGenerator["advance_elseif"] = function (block) {
  
//   const variable = block.getFieldValue("variable");
//   const inq = block.getFieldValue('inequality');
//   let vari = '';
//   let ineq = '';
//   let value_if_value = javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC);
//   let branch = javascriptGenerator.statementToCode(block, 'if_state');

//   switch (variable) {
//     case 'i':
//       vari = 'i';
//       break;
//     case 'count':
//       vari = 'count';
//       break;
//     case 'cm':
//       vari = 'cm';
//       break;
//     default:
//   }

//   switch (inq) {
//     case '==':
//       ineq = '==';
//       break;
//     case '>':
//       ineq = '>';
//       break;
//     case '<':
//       ineq = '<';
//       break;
//     case '>=':
//       ineq = '>=';
//       break;
//     case '<=':
//       ineq = '<=';
//       break;
//     case '!=':
//       ineq = '!=';
//       break;
//     default:
//   }

//   const code = `if ${vari} ${ineq} ` + value_if_value + ':\n' + branch;

//   return code;
// };

Blockly.Blocks["int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldNumber(1) ,"int_key")
    this.setOutput(true, 'null');
    this.setColour("55A55B");
  },
};

javascriptGenerator["int"] = function (block) {
  let int_key = block.getFieldValue('int_key');
  let code = int_key;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks["mark_int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldTextInput("가"), "string_key")
    this.setOutput(true);
    this.setColour("55A55B");
  },
};

javascriptGenerator["mark_int"] = function (block) {
  let string_key = block.getFieldValue('string_key');
  let code = "'" + string_key + "'";
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

Blockly.Blocks["screen"] = {
  init: function () {
    var dropdownGenerator = function() {
      let dropdownOptions = [
        ["k", "k"],["j", "j"],["l", "l"],["q", "q"],["sttMSG", "sttMSG"]
      ];
      let addlightOption = false;
      let addsoundOption = false;
      const workspaceBlocks = Blockly.mainWorkspace.getAllBlocks();
      for(let i = 0; i < workspaceBlocks.length; i++) {
        if(workspaceBlocks[i].type === 'sensor_ultrasonic') {
          dropdownOptions.push(["cm", "cm"]);
        } else if(workspaceBlocks[i].type === 'sensor_hand_detection') {
          dropdownOptions.push(["motion", "motion"]);
        } else if(workspaceBlocks[i].type === 'advance_repeat') {
          dropdownOptions.push(["count", "count"]);
        } else if(workspaceBlocks[i].type === 'message') {
          dropdownOptions.push(["msg", "msg"]);
        } else if(workspaceBlocks[i].type === 'get_weather') {
          dropdownOptions.push(["humidity", "humidity"],["temp", "temp"]["weather", "weather"]);
        } else if(workspaceBlocks[i].type === 'prepare_button_ready') {
          dropdownOptions.push(["bt", "bt"]);
        } else if(workspaceBlocks[i].type === 'prepare_buzzer_ready') {
          dropdownOptions.push(["buzzer", "buzzer"]);
        } else if(workspaceBlocks[i].type === 'prepare_tm_ready') {
          dropdownOptions.push(["bt", "bt"]);
        } else if(workspaceBlocks[i].type === 'prepare_vibration_ready') {
          dropdownOptions.push(["vs", "vs"]);
        } else if(workspaceBlocks[i].type === 'led_ledtube_time') {
          dropdownOptions.push(["h", "h"],["m", "m"]);
        } else if(workspaceBlocks[i].type === 'button_push') {
          dropdownOptions.push(["clicked", "clicked"]);
        } else if(workspaceBlocks[i].type === 'button_info') {
          dropdownOptions.push(["bt_value", "bt_value"]);
        } else if(workspaceBlocks[i].type === 'sensor_humidity') {
          dropdownOptions.push(["humidity", "humidity"]);
        } else if(workspaceBlocks[i].type === 'sensor_temperature') {
          dropdownOptions.push(["temperature", "temperature"]);
        } else if(workspaceBlocks[i].type === 'sensor_water_level') {
          dropdownOptions.push(["water", "water"]);
        } else if(workspaceBlocks[i].type === 'sensor_brightness' ||  workspaceBlocks[i].type === 'sensor_brightness_complete') {
          addlightOption = true;
        } else if(workspaceBlocks[i].type === 'sensor_sound' ||  workspaceBlocks[i].type === 'sensor_sound_complete') {
          addsoundOption = true;
        } else if(workspaceBlocks[i].type === 'sensor_soil_humidity') {
          dropdownOptions.push(["moisture", "moisture"]);
        } else if(workspaceBlocks[i].type === 'sensor_vibration_sensor') {
          dropdownOptions.push(["vibration", "vibration"]);
        }
      }
    if(addsoundOption) {
      dropdownOptions.push(["sound", "sound"]);
    }
    if(addlightOption) {
      dropdownOptions.push(["light", "light"]);
    }
    return dropdownOptions;
  };

    this.appendDummyInput()
      .appendField('화면 표시')
      .appendField(new Blockly.FieldDropdown(dropdownGenerator), "variable")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["screen"] = function(block) {
  const variable = block.getFieldValue("variable");
  const code = `print(${variable})` + javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC) + '\n' + javascriptGenerator.statementToCode(block, 'if_state');

  return code;
};

Blockly.Blocks["break"] = {
  init: function () {
    this.appendDummyInput()
    .appendField("반복 중단")
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, "String");
  this.setColour("55A55B");
  this.setTooltip("buy id");
  this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["break"] = function () {
  let code = 'break;\n';
  return code;
};

Blockly.Blocks["variable"] = {
  init: function () {
    var dropdownGenerator = function() {
      let dropdownOptions = [
        ["k", "k"],["j", "j"],["l", "l"],["q", "q"],["sttMSG", "sttMSG"]
      ];
      let addlightOption = false;
      let addsoundOption = false;
      const workspaceBlocks = Blockly.mainWorkspace.getAllBlocks();
      for(let i = 0; i < workspaceBlocks.length; i++) {
        if(workspaceBlocks[i].type === 'sensor_ultrasonic') {
          dropdownOptions.push(["cm", "cm"]);
        } else if(workspaceBlocks[i].type === 'sensor_hand_detection') {
          dropdownOptions.push(["motion", "motion"]);
        } else if(workspaceBlocks[i].type === 'advance_repeat') {
          dropdownOptions.push(["count", "count"]);
        } else if(workspaceBlocks[i].type === 'message') {
          dropdownOptions.push(["msg", "msg"]);
        } else if(workspaceBlocks[i].type === 'get_weather') {
          dropdownOptions.push(["humidity", "humidity"],["temp", "temp"]["weather", "weather"]);
        } else if(workspaceBlocks[i].type === 'prepare_button_ready') {
          dropdownOptions.push(["bt", "bt"]);
        } else if(workspaceBlocks[i].type === 'prepare_buzzer_ready') {
          dropdownOptions.push(["buzzer", "buzzer"]);
        } else if(workspaceBlocks[i].type === 'prepare_tm_ready') {
          dropdownOptions.push(["bt", "bt"]);
        } else if(workspaceBlocks[i].type === 'prepare_vibration_ready') {
          dropdownOptions.push(["vs", "vs"]);
        } else if(workspaceBlocks[i].type === 'led_ledtube_time') {
          dropdownOptions.push(["h", "h"],["m", "m"]);
        } else if(workspaceBlocks[i].type === 'button_push') {
          dropdownOptions.push(["clicked", "clicked"]);
        } else if(workspaceBlocks[i].type === 'button_info') {
          dropdownOptions.push(["bt_value", "bt_value"]);
        } else if(workspaceBlocks[i].type === 'sensor_humidity') {
          dropdownOptions.push(["humidity", "humidity"]);
        } else if(workspaceBlocks[i].type === 'sensor_temperature') {
          dropdownOptions.push(["temperature", "temperature"]);
        } else if(workspaceBlocks[i].type === 'sensor_water_level') {
          dropdownOptions.push(["water", "water"]);
        } else if(workspaceBlocks[i].type === 'sensor_brightness' ||  workspaceBlocks[i].type === 'sensor_brightness_complete') {
          addlightOption = true;
        } else if(workspaceBlocks[i].type === 'sensor_sound' ||  workspaceBlocks[i].type === 'sensor_sound_complete') {
          addsoundOption = true;
        } else if(workspaceBlocks[i].type === 'sensor_soil_humidity') {
          dropdownOptions.push(["moisture", "moisture"]);
        } else if(workspaceBlocks[i].type === 'sensor_vibration_sensor') {
          dropdownOptions.push(["vibration", "vibration"]);
        }
      }
    if(addsoundOption) {
      dropdownOptions.push(["sound", "sound"]);
    }
    if(addlightOption) {
      dropdownOptions.push(["light", "light"]);
    }
    return dropdownOptions;
  };

  this.appendDummyInput()
    .appendField('변수')
    .appendField(new Blockly.FieldDropdown(dropdownGenerator), "variable")
    .appendField('=')
  this.appendValueInput("if_value")
    .setCheck("null")
  this.setColour("55A55B");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, "String");
  this.setInputsInline(true);
  },
};

javascriptGenerator["variable"] = function (block) {
  let value_if_value = javascriptGenerator.valueToCode(block, 'if_value', javascriptGenerator.ORDER_ATOMIC);
  const variable = block.getFieldValue("variable");
  const code = `${variable}=`+value_if_value+'\n' ;

  return code;
};

// BOT INTERNET CODE

Blockly.Blocks["internet_connect"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("인터넷 접속하기")
    this.appendDummyInput()
      .appendField("아이디")
      .appendField(new Blockly.FieldTextInput(""), "ssid")
    this.appendDummyInput()
      .appendField("비밀번호")
      .appendField(new Blockly.FieldTextInput(""), "password")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("인터넷 접속하기");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["internet_connect"] = function (block) {
  let string_ssid = block.getFieldValue('ssid');
  let string_password = block.getFieldValue('password');
  let code = 'import internet\ninternet.connect("'+string_ssid+'","'+string_password+'")\n';
  return code;
};

Blockly.Blocks["nonpass_wifi"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("비밀번호 없는 와이파이 연결하기")
    this.appendDummyInput()
      .appendField("아이디")
      .appendField(new Blockly.FieldTextInput(""), "ssid")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("인터넷 접속하기");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["nonpass_wifi"] = function (block) {
  let string_ssid = block.getFieldValue('ssid');
  let code = 'import internet\ninternet.connect("'+string_ssid+'")\n';
  return code;
};

Blockly.Blocks["get_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("메세지 받을 준비")
      .appendField(new Blockly.FieldNumber('1234'), "port")
      .appendField("포트")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["get_message"] = function (block) {
  let number_port = block.getFieldValue('port');
  let code = 'import udp_socket\nudp_socket.open('+number_port+')\n';
  return code;
};

Blockly.Blocks["message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("메세지 읽어오기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["message"] = function () {
  let code = 'msg = udp_socket.read_text()\n';
  return code;
};

Blockly.Blocks["send_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("메세지 보내기")
    this.appendDummyInput()
      .appendField("보낼 메세지")
      .appendField(new Blockly.FieldTextInput(""), "msg")
      .appendField(",보낼 대상")
      .appendField(new Blockly.FieldTextInput(""), "code")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["send_message"] = function (block) {
  let string_msg = block.getFieldValue('msg');
  let string_code = block.getFieldValue('code');
  let code = 'import internet\ninternet.send_msg("'+string_code+'","'+string_msg+'")\n';
  return code;
};

Blockly.Blocks["get_weather"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("날씨 데이터 가져오기 [")
      .appendField(new Blockly.FieldTextInput(""), "dat1")
      .appendField(new Blockly.FieldTextInput(""), "dat2")
      .appendField("]")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["get_weather"] = function (block) {
  let dat1 = block.getFieldValue('dat1');
  let dat2 = block.getFieldValue('dat2');
  let code = 'import internet\nweather_data = internet.get_weather("'+dat1+'","'+dat2+'")\nweather = weather_data[0]\ntemp = weather_data[1]\nhumidity = weather_data[2]\n';
  return code;
};

// BOT ai CODE
Blockly.Blocks["ai_stt"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("음성인식 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("5058D1");
    this.setTooltip("음성을 녹음하는 블록");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ai_stt"] = function () {
  let code = 'import stt;\nsttMSG=stt.start()\n';
  return code;
};

// Blockly.Blocks["ai_tts"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
//       .appendField("TTS저장")
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, "String");
//     this.setColour("5058D1");
//     this.setTooltip("TTS를 저장하는 블록");
//     this.setHelpUrl("https://example.com");
//   },
// };

// javascriptGenerator["ai_tts"] = function () {
//   let code = 'import stt;\nstt.start()\n';
//   return code;
// };

Blockly.Blocks["ai_tts_play"] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
    .appendField("음성파일 재생")
    this.appendValueInput("tts_text")
    .setCheck("null")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
    this.setColour("5058D1");
    this.setTooltip("TTS 지정 재생 블록");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ai_tts_play"] = function (block) {
  let asd = javascriptGenerator.valueToCode(block, 'tts_text', javascriptGenerator.ORDER_ATOMIC);
  const code = `import tts;\ntts.play(${asd})`+'\n' ;
  return code;
};

Blockly.Blocks["ai_tts_delete"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/common/internet.png', 23, 23, '*'))
      .appendField("음성파일 삭제")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("5058D1");
    this.setHelpUrl("https://example.com");
  },
};

Blockly.Blocks["stt_mark_int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldTextInput("가"), "string_key")
    this.setOutput(true);
    this.setColour("5058D1");
  },
};

javascriptGenerator["stt_mark_int"] = function (block) {
  let string_key = block.getFieldValue('string_key');
  let code = "'" + string_key + "'";
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator["ai_tts_delete"] = function () {
  let code = 'import stt;\nstt.start()\n';
  return code;
};
// KIT BASIC CODE

Blockly.Blocks["basic_kit_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
      .appendField("준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["basic_kit_ready"] = function () {
  var code = '';
  return code;
};

Blockly.Blocks["basic_turnoff_pins"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
      .appendField("핀 초기화")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["basic_turnoff_pins"] = function () {
  var code = 'turnoff_pins()\n';
  return code;
};

// KIT PREPARE CODE

Blockly.Blocks["prepare_led_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField("LED 준비")
      .appendField(new Blockly.FieldNumber(13) ,"pin1_number")
      .appendField(new Blockly.FieldNumber(14) ,"pin2_number")
      .appendField(new Blockly.FieldNumber(15) ,"pin3_number")
      .appendField(new Blockly.FieldNumber(20) ,"pin4_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["prepare_led_ready"] = function (block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let number_pin3 = block.getFieldValue('pin3_number');
  let number_pin4 = block.getFieldValue('pin4_number');
  let code = 'red = OutputPin('+number_pin1+')\nyellow = OutputPin('+number_pin2+')\ngreen = OutputPin('+number_pin3+')\nbright = OutputPin('+number_pin4+')\n';
  return code;
};

Blockly.Blocks["prepare_RGBled_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField("RGB LED 준비")
      .appendField(new Blockly.FieldNumber(17), "pin1_number")
      .appendField(new Blockly.FieldNumber(18), "pin2_number")
      .appendField(new Blockly.FieldNumber(19), "pin3_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_RGBled_ready"] = function (block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let number_pin3 = block.getFieldValue('pin3_number');
  let code = 'r = ServoPin('+number_pin1+')\ng = ServoPin('+number_pin2+')\nb = ServoPin('+number_pin3+')\n';
  return code;
};

Blockly.Blocks["prepare_button_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/button.png', 23, 23, '*'))
      .appendField("버튼 준비")
      .appendField(new Blockly.FieldNumber(6), "pin_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_button_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import button\nbt = button.create('+number_pin+')\n';
  return code;
};

Blockly.Blocks["prepare_music_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sound_sensor.png', 23, 23, '*'))
      .appendField("음악 준비")
      .appendField(new Blockly.FieldNumber(12), "pin_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_music_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import music\nmusic.open('+number_pin+')\n';
  return code;
};

Blockly.Blocks["prepare_buzzer_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/buzzer.png', 23, 23, '*'))
      .appendField("부저 준비")
      .appendField(new Blockly.FieldNumber(11), "pin_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_buzzer_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin_number');
  let code = 'buzzer = OutputPin('+number_pin+')\n';
  return code;
};

Blockly.Blocks["prepare_tm_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/dht.png', 23, 23, '*'))
      .appendField("온습도 센서 준비")
      .appendField(new Blockly.FieldNumber(5) ,"pin_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_tm_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import dht11\nht = dht11.create('+number_pin+')\n';
  return code;
};

Blockly.Blocks["prepare_ledtube_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led_tube.png', 23, 23, '*'))
      .appendField("LED 튜브 준비")
      .appendField(new Blockly.FieldNumber(3), "pin1_number")
      .appendField(new Blockly.FieldNumber(4), "pin2_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_ledtube_ready"] = function (block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let code = 'import tm1637\ntm1637.open('+number_pin1+', '+number_pin2+')\n';
  return code;
};

Blockly.Blocks["prepare_vibration_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/vibration_sensor.png', 23, 23, '*'))
      .appendField("진동 센서 준비")
      .appendField(new Blockly.FieldNumber(1), "pin_number")
      .appendField(new Blockly.FieldNumber(1000), "secs")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_vibration_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin_number');
  let number_secs = block.getFieldValue('secs');
  let code = 'import vibration_sensor\nvs = vibration_sensor.create('+number_pin+', '+number_secs+')\n';
  return code;
};

Blockly.Blocks["prepare_ultrasonic_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/ultrasonic_sensor.png', 23, 23, '*'))
      .appendField("초음파 센서 준비")
      .appendField(new Blockly.FieldNumber(7), "pin1_number")
      .appendField(new Blockly.FieldNumber(8), "pin2_number")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_ultrasonic_ready"] = function (block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let code = 'import hcsr04\nhcsr04.open('+number_pin1+', '+number_pin2+')\n';
  return code;
};

Blockly.Blocks["prepare_photoresistor_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("조도 센서 준비")
      .appendField(new Blockly.FieldNumber(1), "pin1_number")
      .appendField("(완성형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_photoresistor_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin1_number');
  let code = 'light_sensor = AnalogPin('+number_pin+')\n';
  return code;
};

Blockly.Blocks["prepare_photoresistor2_ready"] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
    .appendField("조도 센서 준비")
    .appendField(new Blockly.FieldNumber(2), "pin1_number")
    .appendField("(완성형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_photoresistor2_ready"] = function (block) {
  let number_pin = block.getFieldValue('pin1_number');
  let code = 'sound_sensor = AnalogPin('+number_pin+')\n';
  return code;
};

// KIT LED CODE

Blockly.Blocks["led_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField(new Blockly.FieldDropdown([
        ["Red", "Red"],["Yellow", "Yellow"],["Green", "Green"],["Bright", "Bright"]]), "variable")
      .appendField("LED")
      .appendField(new Blockly.FieldDropdown([
        ["On", "On"],["Off", "Off"]]), "on,off")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_ready"] = function (block) {
  const variable = block.getFieldValue("variable");
  const power = block.getFieldValue('on,off');
  let vari = '';
  let pow = '';

  switch (variable) {
    case 'Red':
      vari = 'red';
      break;
    case 'Yellow':
      vari = 'yellow';
      break;
    case 'Green':
      vari = 'green';
      break;
    case 'Bright':
      vari = 'bright';
      break;
    default:
  }

  switch (power) {
    case 'On':
      pow = 'on';
      break;
    case 'Off':
      pow = 'off';
      break;
    default:
  }

  const code = `${vari}.${pow}() `+ '\n';

  return code;
};

Blockly.Blocks["led_setting"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField(new Blockly.FieldDropdown([
        ["Red", "Red"],["Green", "Green"],["Blue", "Blue"]]), "variable")
      .appendField("밝기 설정")
      .appendField(new Blockly.FieldNumber() ,"int_key")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_setting"] = function (block) {
  const variable = block.getFieldValue("variable");
  let int_key = block.getFieldValue('int_key');
  let vari = '';

  switch (variable) {
    case 'Red':
      vari = 'r';
      break;
    case 'Green':
      vari = 'g';
      break;
    case 'Blue':
      vari = 'b';
      break;
    default:
  }
  const code = `${vari}.duty` + "("+int_key+")" + '\n';

  return code;
};

Blockly.Blocks["led_ledtube_ready"] = {
  init: function () {
    var dropdownGenerator = function() {
    let dropdownOptions = [
      ["k", "k"],["j", "j"],["l", "l"],["q", "q"]
    ];
    let addlightOption = false;
    let addsoundOption = false;
    const workspaceBlocks = Blockly.mainWorkspace.getAllBlocks();
    for(let i = 0; i < workspaceBlocks.length; i++) {
      if(workspaceBlocks[i].type === 'sensor_ultrasonic') {
        dropdownOptions.push(["cm", "cm"]);
      } else if(workspaceBlocks[i].type === 'sensor_hand_detection') {
        dropdownOptions.push(["motion", "motion"]);
      } else if(workspaceBlocks[i].type === 'advance_repeat') {
        dropdownOptions.push(["count", "count"]);
      } else if(workspaceBlocks[i].type === 'message') {
        dropdownOptions.push(["msg", "msg"]);
      } else if(workspaceBlocks[i].type === 'get_weather') {
        dropdownOptions.push(["humidity", "humidity"],["temp", "temp"]["weather", "weather"]);
      } else if(workspaceBlocks[i].type === 'prepare_button_ready') {
        dropdownOptions.push(["bt", "bt"]);
      } else if(workspaceBlocks[i].type === 'prepare_buzzer_ready') {
        dropdownOptions.push(["buzzer", "buzzer"]);
      } else if(workspaceBlocks[i].type === 'prepare_tm_ready') {
        dropdownOptions.push(["bt", "bt"]);
      } else if(workspaceBlocks[i].type === 'prepare_vibration_ready') {
        dropdownOptions.push(["vs", "vs"]);
      } else if(workspaceBlocks[i].type === 'led_ledtube_time') {
        dropdownOptions.push(["h", "h"],["m", "m"]);
      } else if(workspaceBlocks[i].type === 'button_push') {
        dropdownOptions.push(["clicked", "clicked"]);
      } else if(workspaceBlocks[i].type === 'button_info') {
        dropdownOptions.push(["bt_value", "bt_value"]);
      } else if(workspaceBlocks[i].type === 'sensor_humidity') {
        dropdownOptions.push(["humidity", "humidity"]);
      } else if(workspaceBlocks[i].type === 'sensor_temperature') {
        dropdownOptions.push(["temperature", "temperature"]);
      } else if(workspaceBlocks[i].type === 'sensor_water_level') {
        dropdownOptions.push(["water", "water"]);
      } else if(workspaceBlocks[i].type === 'sensor_brightness' ||  workspaceBlocks[i].type === 'sensor_brightness_complete') {
        addlightOption = true;
      } else if(workspaceBlocks[i].type === 'sensor_sound' ||  workspaceBlocks[i].type === 'sensor_sound_complete') {
        addsoundOption = true;
      } else if(workspaceBlocks[i].type === 'sensor_soil_humidity') {
        dropdownOptions.push(["moisture", "moisture"]);
      } else if(workspaceBlocks[i].type === 'sensor_vibration_sensor') {
        dropdownOptions.push(["vibration", "vibration"]);
      }
    }
      if(addsoundOption) {
        dropdownOptions.push(["sound", "sound"]);
      }
      if(addlightOption) {
        dropdownOptions.push(["light", "light"]);
      }
      return dropdownOptions;
    };

      this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led_tube.png', 23, 23, '*'))
      .appendField("LED 튜브에 표시")
      .appendField(new Blockly.FieldDropdown(dropdownGenerator), "variable")
     this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_ledtube_ready"] = function (block) {
  const variable = block.getFieldValue("variable");
  const code = `tm1637.number(${variable})` + '\n';
  return code;
};

Blockly.Blocks["led_ledtube_time"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led_tube.png', 23, 23, '*'))
      .appendField("LED 튜브에 시간표시")
      .appendField(new Blockly.FieldDropdown([
        ["h", "h"],["buzzer", "buzzer"],["bt", "bt"],["ht", "ht"],["q", "q"],["m", "m"],["vs", "vs"]]), "variable")
      .appendField(new Blockly.FieldDropdown([
        ["m", "m"],["buzzer", "buzzer"],["h", "h"],["ht", "ht"],["q", "q"],["bt", "bt"],["vs", "vs"]]), "variable2")
      .appendField(new Blockly.FieldDropdown([
        ["True", "True"],["False", "False"]]), "toggle")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_ledtube_time"] = function (block) {
  
  const variable = block.getFieldValue("variable");
  const variable2 = block.getFieldValue("variable2");
  const toggle = block.getFieldValue('toggle');
  let vari = '';
  let vari2 = '';
  let tog = '';
  // const initCode = `${variable} = None\n${variable2} = None`;

  switch (variable) {
    case 'bt':
      vari = 'bt';
      break;
    case 'buzzer':
      vari = 'buzzer';
      break;
    case 'h':
      vari = 'h';
      break;
    case 'ht':
      vari = 'ht';
      break;
    case 'i':
      vari = 'i';
      break;
    case 'm':
      vari = 'm';
      break;
    case 'vs':
      vari = 'vs';
      break;
    default:
  }

  switch (variable2) {
    case 'bt':
      vari2 = 'bt';
      break;
    case 'buzzer':
      vari2 = 'buzzer';
      break;
    case 'h':
      vari2 = 'h';
      break;
    case 'ht':
      vari2 = 'ht';
      break;
    case 'i':
      vari2 = 'i';
      break;
    case 'm':
      vari2 = 'm';
      break;
    case 'vs':
      vari2 = 'vs';
      break;
    default:
  }

  switch (toggle) {
    case 'True':
      tog = 'True';
      break;
    case 'False':
      tog = 'False';
      break;
    default:
  }

  const code = `tm1637.time(${vari},${vari2},${tog})` + '\n';
  return code;
};

// KIT BUTTON CODE

Blockly.Blocks["button_push"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/button.png', 23, 23, '*'))
      .appendField("버튼이 눌러졌는가?")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4CC1B9");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["button_push"] = function () {
  let code = 'clicked = bt.is_clicked();\n';
  return code;
};

Blockly.Blocks["button_info"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/button.png', 23, 23, '*'))
      .appendField("버튼 정보 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4CC1B9");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["button_info"] = function () {
  let code = 'bt_value = bt.value()\n';
  return code;
};

// KIT SENSOR CODE

Blockly.Blocks["sensor_humidity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("습도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_humidity"] = function () {
  let code = 'ht.measure()\nhumidity = ht.humidity()\n';
  return code;
};

Blockly.Blocks["sensor_temperature"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("온도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_temperature"] = function () {
  let code = 'ht.measure()\ntemperature = ht.temperature()\n';
  return code;
};

Blockly.Blocks["sensor_water_level"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("수위 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_water_level"] = function () {
  let code = 'water = AnalogPin().read()\n';
  return code;
};

Blockly.Blocks["sensor_brightness"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("밝기 재기 (조립형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_brightness"] = function () {
  let code = 'light = AnalogPin().read()\n';
  return code;
};

Blockly.Blocks["sensor_sound"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("소리 감지 (조립형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_sound"] = function () {
  let code = 'sound = AnalogPin().read()\n';
  return code;
};

Blockly.Blocks["sensor_brightness_complete"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("밝기 재기 (완성형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_brightness_complete"] = function () {
  let code = 'light = light_sensor.read()\n';
  return code;
};

Blockly.Blocks["sensor_sound_complete"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("소리 감지 (완성형)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_sound_complete"] = function () {
  let code = 'sound = sound_sensor.read()\n';
  return code;
};

Blockly.Blocks["sensor_soil_humidity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("토양 습도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_soil_humidity"] = function () {
  let code = 'moisture = AnalogPin().read()\n';
  return code;
};

Blockly.Blocks["sensor_vibration_sensor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/vibration_sensor.png', 23, 23, '*'))
      .appendField("진동 센서 감지")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_vibration_sensor"] = function () {
  let code = 'vibration = vs.is_active()\n';
  return code;
};

// KIT SOUND CODE

Blockly.Blocks["sound_buzzer_onoff"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/images/block_icons/asomebot/music.png', 23, 23, '*'))
      .appendField("부저")
      .appendField(new Blockly.FieldDropdown([
        ["On", "On"],["Off", "Off"]]), "on,off")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sound_buzzer_onoff"] = function (block) {
  const power = block.getFieldValue("on,off");
  let pow = '';

  switch (power) {
    case 'On':
      pow = 'on';
      break;
    case 'Off':
      pow = 'off';
      break;
    default:
  }
  var code = `buzzer.${pow}();\n`;
  return code;
};

// CAR BASIC CODE

Blockly.Blocks["basic_car_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomecar.png', 23, 23, '*'))
      .appendField("준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["basic_car_ready"] = function () {
  var code = 'import asomecar\nimport hcsr04\nimport line_sensor\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\nline_sensor.ready()\n';
  return code;
};

// CAR MOVE CODE

Blockly.Blocks["move_stop"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomecar.png', 23, 23, '*'))
      .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_stop"] = function () {
  var code = 'asomecar.stop()\n';
  return code;
};

Blockly.Blocks["move_forward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/move_forward.png', 23, 23, '*'))
      .appendField("앞으로 가기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_forward"] = function () {
  var code = 'asomecar.forward()\n';
  return code;
};

Blockly.Blocks["move_back"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/move_backward.png', 23, 23, '*'))
      .appendField("뒤로 가기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_back"] = function () {
  var code = 'asomecar.backward()\n';
  return code;
};

Blockly.Blocks["move_left_fixed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/rotate_left.png', 23, 23, '*'))
      .appendField("왼쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_left_fixed"] = function () {
  var code = 'asomecar.turn_left()\n';
  return code;
};

Blockly.Blocks["move_right_fixed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/rotate_right.png', 23, 23, '*'))
      .appendField("오른쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_right_fixed"] = function () {
  var code = 'asomecar.turn_right()\n';
  return code;
};

Blockly.Blocks["move_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/turn_left.png', 23, 23, '*'))
      .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_left"] = function () {
  var code = 'asomecar.to_left()\n';
  return code;
};

Blockly.Blocks["move_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomecar/turn_right.png', 23, 23, '*'))
      .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_right"] = function () {
  var code = 'asomecar.to_right()\n';
  return code;
};

Blockly.Blocks["move_speed_one"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomecar.png', 23, 23, '*'))
      .appendField("속도 조절")
      .appendField(new Blockly.FieldDropdown([
        ["0", "0"],["1", "1"],
        ["2", "2"],["3", "3"]]), "motor_number")
      .appendField("번")
      .appendField(new Blockly.FieldNumber(60), "motor_speed")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_speed_one"] = function (block) {
  const motor_number = block.getFieldValue("motor_number");
  let motor_speed = block.getFieldValue('motor_speed');
  let number = '';

  switch (motor_number) {
    case '0':
      number = '0';
      break;
    case '1':
      number = '1';
      break;
    case '2':
      number = '2';
      break;
    case '3':
      number = '3';
      break;
    default:
  }
  const code = `asomecar.servos[${number}].duty` + "("+motor_speed+")" + '\n';

  return code;
};

Blockly.Blocks["move_speed_all"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomecar.png', 23, 23, '*'))
      .appendField("속도 조절")
      .appendField(new Blockly.FieldNumber(), "move1")
      .appendField(new Blockly.FieldNumber(), "move2")
      .appendField(new Blockly.FieldNumber(), "move3")
      .appendField(new Blockly.FieldNumber(), "move4")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["move_speed_all"] = function (block) {
  let number_move1 = block.getFieldValue('move1');
  let number_move2 = block.getFieldValue('move2');
  let number_move3 = block.getFieldValue('move3');
  let number_move4 = block.getFieldValue('move4');
  
  var code = 'asomecar.move(' + number_move1 + ',' + number_move2 + ',' + number_move3 + ',' + number_move4 + ')\n';
  return code;
};

// CAR SENSOR CODE

Blockly.Blocks["sensor_light"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("밝기 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_light"] = function () {
  var code = 'light = line_sensor.right.read()\n';
  return code;
};

Blockly.Blocks["sensor_linesensor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/sensor.png', 23, 23, '*'))
      .appendField("라인센서 체크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_linesensor"] = function () {
  var code = 'line = line_sensor.read()\n';
  return code;
};


// LESSON KIT

// Session 01.03

Blockly.Blocks["pro_kit1_3_13pin_led_connect"] = {
  init: function () {
    this.appendDummyInput()
      // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField("13번 핀에 LED 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_3_13pin_led_connect"] = function () {
  let code = 'led = OutputPin(13)\n';
  return code;
};

Blockly.Blocks["pro_kit1_3_13pin_led_on"] = {
  init: function () {
    this.appendDummyInput()
      // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField("13번 핀에 전기 공급하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_3_13pin_led_on"] = function () {
  let code = 'led.on()\n';
  return code;
};

Blockly.Blocks["pro_kit1_3_13pin_led_off"] = {
  init: function () {
    this.appendDummyInput()
      // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
      .appendField("13번 핀에 전기 중단하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_3_13pin_led_off"] = function () {
  let code = 'led.off()\n';
  return code;
};


// Session 01.04

Blockly.Blocks["pro_kit1_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("핀 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_4_ready"] = function () {
  let code = 'red = OutputPin(13)\nyellow = OutputPin(14)\ngreen = OutputPin(15)\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_red_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("빨강 LED 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_red_led_on"] = function () {
  let code = 'red.on()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_red_led_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("빨강 LED 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_red_led_off"] = function () {
  let code = 'red.off()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_yellow_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("노랑 LED 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_yellow_led_on"] = function () {
  let code = 'yellow.on()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_yellow_led_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("노랑 LED 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_yellow_led_off"] = function () {
  let code = 'yellow.off()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_green_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("초록 LED 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_green_led_on"] = function () {
  let code = 'green.on()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_green_led_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("초록 LED 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_green_led_off"] = function () {
  let code = 'green.off()\n';
  return code;
};

// Session 01.05

Blockly.Blocks["zet_kit1_5_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("핀 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_5_ready"] = function () {
  let code = 'import dice\nimport button\nbt = button.create(6)\n';
  return code;
};

Blockly.Blocks["zet_kit1_5_dice_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("주사위 화면 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_5_dice_show"] = function () {
  let code = 'dice.show()\n';
  return code;
};

Blockly.Blocks["zet_kit1_5_dice_roll"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("주사위 굴리기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_5_dice_roll"] = function () {
  let code = 'dice.roll()\n';
  return code;
};

Blockly.Blocks["zet_kit1_5_button_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("버튼이 눌러지면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit1_5_button_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt.value() == 0:\n' + branch;
  return code;
};

// Session 01.06

Blockly.Blocks["pro_kit1_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("핀 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_6_ready"] = function () {
  let code = 'import music\nmusic.open(12)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_do"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"도" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_do"] = function () {
  let code = 'music.note("C4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_re"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"레" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_re"] = function () {
  let code = 'music.note("D4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_mi"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"미" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_mi"] = function () {
  let code = 'music.note("E4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_fa"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"파" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_fa"] = function () {
  let code = 'music.note("F4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_so"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"솔" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_so"] = function () {
  let code = 'music.note("G4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_la"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"라" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_la"] = function () {
  let code = 'music.note("A4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_ti"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"시" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_ti"] = function () {
  let code = 'music.note("B4", 300)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_h_do"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"높은 도" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_h_do"] = function () {
  let code = 'music.note("C5", 300)\n';
  return code;
};


// Session 01.07

Blockly.Blocks["pro_kit1_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("핀 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_ready"] = function () {
  let code = 'red = ServoPin(17)\ngreen = ServoPin(18)\nblue = ServoPin(19)\n';
  return code;
};

Blockly.Blocks["zet_kit1_7_rgb_red_random"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('빨간색 LED 밝기 무작위 변경')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_7_rgb_red_random"] = function () {
  let code = 'red.duty( random(1024) )\n';
  return code;
};


Blockly.Blocks["zet_kit1_7_rgb_green_random"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('초록색 LED 밝기 무작위 변경')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_7_rgb_green_random"] = function () {
  let code = 'green.duty( random(1024) )\n';
  return code;
};

Blockly.Blocks["zet_kit1_7_rgb_blue_random"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('파란색 LED 밝기 무작위 변경')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_7_rgb_blue_random"] = function () {
  let code = 'blue.duty( random(1024) )\n';
  return code;
};

// Session 01.08

Blockly.Blocks["pro_kit1_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("핀 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_8_ready"] = function () {
  let code = 'import water_sensor\nbuzzer = OutputPin(11)\n';
  return code;
};

Blockly.Blocks["zet_kit1_8_active_buzzer_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('능동부저 소리내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_8_active_buzzer_on"] = function () {
  let code = 'buzzer.on()\n';
  return code;
};

Blockly.Blocks["zet_kit1_8_active_buzzer_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('능동부저 소리끄기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_8_active_buzzer_off"] = function () {
  let code = 'buzzer.off()\n';
  return code;
};

Blockly.Blocks["pro_kit1_8_water_sensor_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('워터 센서 화면 보이기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_8_water_sensor_show"] = function () {
  let code = 'water_sensor.show()\n';
  return code;
};

Blockly.Blocks["pro_kit1_8_water_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('워터센서 값 읽기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_8_water_sensor_read"] = function () {
  let code = 'value = water_sensor.read()\n';
  return code;
};


Blockly.Blocks["pro_kit1_8_sensor_20_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 50이 넘는가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니라면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["pro_kit1_8_sensor_20_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value > 50:\n'+variable+'else:\n'+ineq;

  
  return code;
  
};


