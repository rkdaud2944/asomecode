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
    this.setTooltip("어썸봇 준비블록");
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
    this.setTooltip("어썸봇 차렷블록");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    .appendField("프로그램 준비 및 시작")
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

Blockly.Blocks["pro_kit1_4_turnoff_pins"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("모든 핀 전기공급 중단")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_4_turnoff_pins"] = function () {
  let code = 'turnoff_pins()\n';
  return code;
};

Blockly.Blocks["zet_kit1_4_red_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/block_icons/asomekit/led.png', 23, 23, '*'))
    .appendField("빨강 LED 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    .appendField("프로그램 준비 및 시작")
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
    .appendField("프로그램 준비 및 시작")
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

Blockly.Blocks["pro_kit1_6_mute"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('소리 멈추기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_6_mute"] = function () {
  let code = 'music.mute()\n';
  return code;
};

Blockly.Blocks["pro_kit1_6_tone_400"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('1초당 400번 진동수 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_6_tone_400"] = function () {
  let code = 'music.tone(400)\n';
  return code;
};

Blockly.Blocks["zet_kit1_6_do"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"도" 소리 내기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    .appendField("프로그램 준비 및 시작")
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

Blockly.Blocks["pro_kit1_7_red_max"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('빨간색 최대 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_red_max"] = function () {
  let code = 'red.duty(1023)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_green_max"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('초록색 최대 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_green_max"] = function () {
  let code = 'green.duty(1023)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_blue_max"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('파란색 최대 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_blue_max"] = function () {
  let code = 'blue.duty(1023)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_red_mid"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('빨간색 중간 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_red_mid"] = function () {
  let code = 'red.duty(64)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_green_mid"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('초록색 중간 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_green_mid"] = function () {
  let code = 'green.duty(64)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_blue_mid"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('파란색 중간 밝기로 켜기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_blue_mid"] = function () {
  let code = 'blue.duty(64)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_red_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('빨간색 끄기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_red_off"] = function () {
  let code = 'red.duty(0)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_green_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('초록색 끄기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_green_off"] = function () {
  let code = 'green.duty(0)\n';
  return code;
};

Blockly.Blocks["pro_kit1_7_blue_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('파란색 끄기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_7_blue_off"] = function () {
  let code = 'blue.duty(0)\n';
  return code;
};

Blockly.Blocks["zet_kit1_7_rgb_red_random"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('빨간색 LED 밝기 무작위 변경')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    this.setColour("FF61FF");
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
    .appendField("프로그램 준비 및 시작")
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
    this.setColour("ec1961");
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
    this.setColour("ec1961");
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
    this.setColour("FFCD00");
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
    .appendField('센서 값이 20이 넘는가?')
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
  var code = 'if value > 20:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.09

Blockly.Blocks["zet_kit1_9_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_9_ready"] = function () {
  let code = 'import dht_screen\nimport dht11\ndh = dht11.create(5)\n';
  return code;
};

Blockly.Blocks["zet_kit1_9_dht_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("온도와 습도 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_9_dht_read"] = function () {
  let code = 'dh.measure()\n';
  return code;
};

Blockly.Blocks["zet_kit1_9_dht_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("온습도계 화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_9_dht_show"] = function () {
  let code = 'dht_screen.show()\n';
  return code;
};

Blockly.Blocks["zet_kit1_9_display"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("온도와 습도를 화면에 표시하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_9_display"] = function () {
  let code = 'dht_screen.display( dh.temperature(), dh.humidity() )\n';
  return code;
};

// Session 01.10

Blockly.Blocks["pro_kit1_10_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_10_ready"] = function () {
  let code = 'sensor = AnalogPin(1)\nled = OutputPin(20)\n';
  return code;
};

Blockly.Blocks["pro_kit1_10_20pin_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("20번 핀에 전기 공급하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_10_20pin_led_on"] = function () {
  let code = 'led.on()\n';
  return code;
};

Blockly.Blocks["pro_kit1_10_20pin_led_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("20번 핀에 전기 중단하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_10_20pin_led_off"] = function () {
  let code = 'led.off()\n';
  return code;
};

Blockly.Blocks["zet_kit1_10_illuminance_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("조도 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_10_illuminance_sensor_read"] = function () {
  let code = 'value = sensor.read()\nprint(value)\n';
  return code;
};

Blockly.Blocks["pro_kit1_10_sensor_2000_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 2000보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["pro_kit1_10_sensor_2000_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value > 2000:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.11.01

Blockly.Blocks["pro_kit1_11_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_11_1_ready"] = function () {
  let code = 'sensor = AnalogPin(2)\nled = OutputPin(13)\n';
  return code;
};

Blockly.Blocks["zet_kit1_11_1_sound_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("소리 크기 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_11_1_sound_sensor_read"] = function () {
  let code = 'value = sensor.read()\nprint(value)\n';
  return code;
};

Blockly.Blocks["pro_kit1_11_1_sensor_4000_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 4000보다 작은가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["pro_kit1_11_1_sensor_4000_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value < 4000:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.11.02

Blockly.Blocks["zet_kit1_11_2_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_11_2_ready"] = function () {
  let code = 'import button\nimport stove\nbt = button.create(6)\n';
  return code;
};

Blockly.Blocks["zet_kit1_11_2_stove_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("가상 난로 화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_11_2_stove_show"] = function () {
  let code = 'stove.show()\n';
  return code;
};

Blockly.Blocks["zet_kit1_11_2_stove_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("난로 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_11_2_stove_off"] = function () {
  let code = 'stove.off()\n';
  return code;
};

Blockly.Blocks["zet_kit1_11_2_down"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("난로가 쓰러지면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit1_11_2_down"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt.value() == 1:\n' + branch;
  return code;
};

// Session 01.12

Blockly.Blocks["zet_kit1_12_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_12_ready"] = function () {
  let code = 'import udp_socket\nsocket = udp_socket.Server()\nsocket.open(1234)\n';
  return code;
};

Blockly.Blocks["zet_kit1_12_message_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_12_message_read"] = function () {
  let code = 'msg = socket.read_text()\n';
  return code;
};

Blockly.Blocks["zet_kit1_12_message_print"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 출력하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_12_message_print"] = function () {
  let code = 'print(msg)\n';
  return code;
};

Blockly.Blocks["zet_kit1_12_if_message_receice"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("수신된 메시지가 있으면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit1_12_if_message_receice"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if msg:\n' + branch;
  return code;
};

// Session 01.13

Blockly.Blocks["pro_kit1_13_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_13_ready"] = function () {
  let code = 'import vibration_sensor\nimport http_utils\nsensor = vibration_sensor.create(1, 1000)\n';
  return code;
};

Blockly.Blocks["pro_kit1_13_bibration_active"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('진동센서 값 확인')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_13_bibration_active"] = function () {
  let code = 'sensor.is_active()\n';
  return code;
};

Blockly.Blocks["zet_kit1_13_vibration_detection"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("진동이 감지되면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit1_13_vibration_detection"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if sensor.is_active():\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit1_13_message_send"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 보내기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_13_message_send"] = function () {
  let code = `print('http_utils.send_msg("접속코드", "vibration detected!")')\ndelay(5)\n`;
  return code;
};

// Session 01.14

Blockly.Blocks["pro_kit1_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_14_ready"] = function () {
  let code = 'import http_utils\nimport soil_sensor\n';
  return code;
};

Blockly.Blocks["pro_kit1_14_soil_sensor_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("토양습도센서 화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_14_soil_sensor_show"] = function () {
  let code = 'soil_sensor.show()\n';
  return code;
};

Blockly.Blocks["pro_kit1_14_soil_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('토양습도센서 값 확인')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit1_14_soil_read"] = function () {
  let code = 'soil_sensor.read()\n';
  return code;
};

Blockly.Blocks["pro_kit1_14_need_water"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("화분에 물이 필요하면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["pro_kit1_14_need_water"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if soil_sensor.read() <100:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit1_14_message_send"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 보내기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_14_message_send"] = function () {
  let code = `print('http_utils.send_msg("접속코드", "flower pot needs water!")')\n`;
  return code;
};

// Session 01.15

Blockly.Blocks["zet_kit1_15_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_15_ready"] = function () {
  let code = 'import tm1637\nimport button\n\ntm1637.open(3, 4)\nswitch = button.create(6)\n';
  return code;
};

Blockly.Blocks["zet_kit1_15_led_tube_count"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변수 값 LED 튜브에 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_15_led_tube_count"] = function () {
  let code = 'tm1637.number(count)\n';
  return code;
};

Blockly.Blocks["zet_kit1_15_button_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("버튼이 눌러졌으면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit1_15_button_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if switch.value() == 0:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit1_15_count_100"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시작할 숫자(100)를 변수에 넣기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_15_count_100"] = function () {
  let code = 'count = 100\n';
  return code;
};

Blockly.Blocks["zet_kit1_15_count_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변수 값에서 1씩 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_15_count_minus"] = function () {
  let code = 'count = count - 1\n';
  return code;
};

Blockly.Blocks["zet_kit1_break"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복 탈출")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_break"] = function () {
  let code = 'break\n';
  return code;
};

Blockly.Blocks["zet_kit1_15_if_0"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변수 값이 0보다 작으면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit1_15_if_0"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if count <= 0:\n' + branch;
  return code;
};

// Session 02.01

Blockly.Blocks["pro_kit2_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_1_ready"] = function () {
  let code = 'import sound_effect\nred = ServoPin(17)\ngreen = ServoPin(18)\nblue = ServoPin(19)\nsound_effect.open(12)\n';
  return code;
};

Blockly.Blocks["zet_kit2_1_light_down"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("조금씩 어두워지는 빛 내기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_1_light_down"] = function () {
  let code = 'red.duty(99 - i)\ngreen.duty(99 - i)\nblue.duty(99 - i)\n';
  return code;
};

Blockly.Blocks["zet_kit2_1_sound_down"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("조금씩 낮아지는 소리 내기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_1_sound_down"] = function () {
  let code = 'sound_effect.tone(1000 - i * 10)\n';
  return code;
};

Blockly.Blocks["zet_kit2_1_sound_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("소리 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_1_sound_off"] = function () {
  let code = 'sound_effect.mute()\n';
  return code;
};

Blockly.Blocks["zet_kit2_1_for_100"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("100번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_1_for_100"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'for i in range(100):\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_1_for_10"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("10번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_1_for_10"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'for i in range(10):\n' + branch;
  return code;
};

// Session 02.02

Blockly.Blocks["pro_kit2_2_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_2_ready"] = function () {
  let code = 'import car_race\nimport rotary\nencoder = rotary.create(9, 10)\nold_value = 0\n';
  return code;
};

Blockly.Blocks["zet_kit2_2_car_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_2_car_show"] = function () {
  let code = 'car_race.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_2_car_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변화량만큼 자동차 움직이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_2_car_move"] = function () {
  let code = 'car_race.move(encoder.value() - old_value)\n';
  return code;
};

Blockly.Blocks["zet_kit2_2_encoder_update"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("로터리 인코더 상태 갱신하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_2_encoder_update"] = function () {
  let code = 'encoder.update()\n';
  return code;
};

Blockly.Blocks["zet_kit2_2_encoder_save"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("이전 값 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_2_encoder_save"] = function () {
  let code = 'old_value = encoder.value()\n';
  return code;
};

Blockly.Blocks["zet_kit2_2_encoder_changed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("로터리 인코더에 변화가 있는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_2_encoder_changed"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if encoder.has_changed():\n' + branch;
  return code;
};

// Session 02.03

Blockly.Blocks["pro_kit2_3_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_3_ready"] = function () {
  let code = 'import tm1637\nimport hcsr04\ntm1637.open(3, 4)\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Blocks["zet_kit2_3_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_3_ready"] = function () {
  let code = 'import tm1637\nimport hcsr04\ntm1637.open(3, 4)\nhcsr04.open(5, 6)\n';
  return code;
};

Blockly.Blocks["zet_kit2_3_led_tube_cm"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리를 LED 튜브에 표시하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_3_led_tube_cm"] = function () {
  let code = 'tm1637.number(cm)\n';
  return code;
};

Blockly.Blocks["zet_kit2_3_get_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_3_get_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

// Session 02.04

Blockly.Blocks["pro_kit2_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_4_ready"] = function () {
  let code = 'import door\nimport hcsr04\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Blocks["zet_kit2_4_door_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("자동문 가상화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_4_door_show"] = function () {
  let code = 'door.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_4_door_open"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("문 열기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_4_door_open"] = function () {
  let code = 'door.open()\n';
  return code;
};

Blockly.Blocks["zet_kit2_4_door_close"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("문 닫기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_4_door_close"] = function () {
  let code = 'door.close()\n';
  return code;
};

Blockly.Blocks["zet_kit2_4_get_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_4_get_distance"] = function () {
  let code = `cm = hcsr04.get_distance()
if cm < 0:
  continue
`;
  return code;
};

Blockly.Blocks["zet_kit2_4_20_cm"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('거리가 20cm 미만인가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit2_4_20_cm"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if cm < 20:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 02.05

Blockly.Blocks["pro_kit2_5_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_5_ready"] = function () {
  let code = 'import button\nimport flag_game\nbt1 = button.Button(6)\nbt2 = button.Button(2)\n';
  return code;
};

Blockly.Blocks["zet_kit2_5_flag_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_flag_show"] = function () {
  let code = 'flag_game.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_5_situation_wait"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("선수입장 기다리기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_situation_wait"] = function () {
  let code = `while True:
  if bt1.is_clicked():
    flag_game.join(1)
  if bt2.is_clicked():
    flag_game.join(2)
  if flag_game.is_ready():
    break
`;
  return code;
};

Blockly.Blocks["zet_kit2_5_countdown"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("카운트다운 하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_countdown"] = function () {
  let code = `for i in range(4):
  print('Countdown: ', 3-i)
  flag_game.count_down(3-i)
  delay(1)
`;
  return code;
};

Blockly.Blocks["zet_kit2_5_1_win"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("1번 플레이어 승리")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_1_win"] = function () {
  let code = `flag_game.win(1)\n`;
  return code;
};

Blockly.Blocks["zet_kit2_5_2_win"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("2번 플레이어 승리")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_2_win"] = function () {
  let code = `flag_game.win(2)\n`;
  return code;
};

Blockly.Blocks["zet_kit2_5_1_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("1번 버튼이 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit2_5_1_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt1.is_clicked():\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_5_2_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("2번 버튼이 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit2_5_2_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt2.is_clicked():\n' + branch;
  return code;
};

// Session 02.06

Blockly.Blocks["pro_kit2_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_6_ready"] = function () {
  let code = 'import spacecraft\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_spacecraft_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_spacecraft_show"] = function () {
  let code = 'spacecraft.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_spacecraft_start"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임 시작하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_spacecraft_start"] = function () {
  let code = 'spacecraft.start()\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_spacecraft_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("우주선 왼쪽으로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_spacecraft_left"] = function () {
  let code = 'spacecraft.move_left()\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_spacecraft_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("우주선 오른쪽으로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_spacecraft_right"] = function () {
  let code = 'spacecraft.move_right()\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_encoder_update"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("로터리 인코더 상태 갱신하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_encoder_update"] = function () {
  let code = 'encoder.update()\ndirection = encoder.direction()\n';
  return code;
};

Blockly.Blocks["zet_kit2_6_button_clicked_wait"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("버튼이 눌러질 때까지 기다리기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4cc1b9");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_button_clicked_wait"] = function () {
  let code = `while True:
  if bt.value() == 0:
    break
`;
  return code;
};

Blockly.Blocks["zet_kit2_6_direction_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전했다면?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit2_6_direction_left"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if direction < 0:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_6_direction_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전했다면?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
  },
};  

javascriptGenerator["zet_kit2_6_direction_right"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if direction > 0:\n' + branch;
  return code;
};

// Session 02.07

Blockly.Blocks["pro_kit2_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_7_ready"] = function () {
  let code = 'import maze\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nx = 0\ny = 0\nhori_vert = 1\n';
  return code;
};

Blockly.Blocks["zet_kit2_7_maze_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_maze_show"] = function () {
  let code = 'maze.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_7_maze_apply"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("로봇 위치 화면에 적용")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_maze_apply"] = function () {
  let code = `if direction != 0:
  maze.move_xy(x, y)
`;
  return code;
};

Blockly.Blocks["zet_kit2_7_hori_vert"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("세로/가로 방향 전환")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_hori_vert"] = function () {
  let code = 'hori_vert = hori_vert * -1\n';
  return code;
};

Blockly.Blocks["zet_kit2_7_hori_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("가로방향 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_hori_move"] = function () {
  let code = 'x = x + direction\n';
  return code;
};

Blockly.Blocks["zet_kit2_7_vert_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("세로방향 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_vert_move"] = function () {
  let code = 'y = y + direction\n';
  return code;
};

Blockly.Blocks["zet_kit2_7_if_button_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("스위치가 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_7_if_button_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt.is_clicked():\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_7_if_hori"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("가로방향 상태인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_7_if_hori"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if hori_vert == -1:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_7_if_vert"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("세로방향 상태인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_7_if_vert"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if hori_vert == 1:\n' + branch;
  return code;
};

// Session 02.08

Blockly.Blocks["pro_kit2_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_8_ready"] = function () {
  let code = 'import sliding_puzzle\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nhori_vert = 1\n';
  return code;
};

Blockly.Blocks["zet_kit2_8_puzzle_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_8_puzzle_show"] = function () {
  let code = 'sliding_puzzle.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_8_puzzle_shuffle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("퍼즐 썪기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_8_puzzle_shuffle"] = function () {
  let code = `for i in range(1000):
  temp = random(4)
  if temp == 0:
    sliding_puzzle.blank_left()
  if temp == 1:
    sliding_puzzle.blank_right()
  if temp == 2:
    sliding_puzzle.blank_up()
  if temp == 3:
    sliding_puzzle.blank_down()
`;
  return code;
};

Blockly.Blocks["zet_kit2_8_hori_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("가로방향 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_8_hori_move"] = function () {
  let code = `if direction == -1:
  sliding_puzzle.blank_right()
if direction == 1:
  sliding_puzzle.blank_left()
`;
  return code;
};

Blockly.Blocks["zet_kit2_8_vert_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("세로방향 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_8_vert_move"] = function () {
  let code = `if direction == -1:
  sliding_puzzle.blank_up()
if direction == 1:
  sliding_puzzle.blank_down()
`;
  return code;
};

// Session 02.09

Blockly.Blocks["pro_kit2_9_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_9_ready"] = function () {
  let code = 'import timer\nimport button\nimport rotary\nbt1 = button.create(6)\ntimer.open(3, 4)\nbt2 = button.create(2)\nencoder = rotary.create(9, 10)\nbuzzer = OutputPin(11)\n';
  return code;
};

Blockly.Blocks["zet_kit2_9_if_bt1_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("카운트 다운 스위치가 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_9_if_bt1_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt1.is_clicked():\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_9_if_bt2_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모드 변환 스위치가 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_9_if_bt2_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt2.is_clicked():\n' + branch;
  return code;
};

Blockly.Blocks["pro_kit2_9_nomal_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("평상시 모드")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_9_nomal_mode"] = function () {
  let code = 'timer.set_mode(2)\n';
  return code;
};

Blockly.Blocks["pro_kit2_9_min_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("분 수정 모드")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_9_min_mode"] = function () {
  let code = 'timer.set_mode(0)\n';
  return code;
};

Blockly.Blocks["pro_kit2_9_sec_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("초 수정 모드")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_9_sec_mode"] = function () {
  let code = 'timer.set_mode(1)\n';
  return code;
};

Blockly.Blocks["pro_kit2_9_mode_plus_1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("현재 모드의 숫자 1만큼 더하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_9_mode_plus_1"] = function () {
  let code = 'timer.set_value(timer.value() + 1)\n';
  return code;
};

Blockly.Blocks["zet_kit2_9_change_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모드 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_change_mode"] = function () {
  let code = 'timer.set_mode(timer.mode() + 1)\n';
  return code;
};

Blockly.Blocks["zet_kit2_9_timer_change"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("타이머 숫자 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_timer_change"] = function () {
  let code = 'timer.set_value(timer.value() + encoder.direction())\n';
  return code;
};

Blockly.Blocks["zet_kit2_9_timer_update"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("타이머 상태 갱신하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_timer_update"] = function () {
  let code = 'timer.update()\n';
  return code;
};

Blockly.Blocks["zet_kit2_9_countdown"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("카운트 다운하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_countdown"] = function () {
  let code = `for i in range(timer.duration() + 1):
  timer.number(timer.duration() - i)
  delay(1)
`;
  return code;
};

Blockly.Blocks["zet_kit2_9_buzzer_2sec"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("부저 울리기(2초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_buzzer_2sec"] = function () {
  let code = 'buzzer.on()\ndelay(2)\nbuzzer.off()\n';
  return code;
};

// Session 02.10

Blockly.Blocks["zet_kit2_10_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_10_ready"] = function () {
  let code = 'import lunar_lander\nimport button\nbt = button.create(6)\n';
  return code;
};

Blockly.Blocks["zet_kit2_10_lunar_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_10_lunar_show"] = function () {
  let code = 'lunar_lander.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_10_lunar_start"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선 준비하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_10_lunar_start"] = function () {
  let code = 'lunar_lander.start()\n';
  return code;
};

Blockly.Blocks["zet_kit2_10_lunar_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선 낙하속도 입력")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_10_lunar_speed"] = function () {
  let code = 'lunar_lander.speed = 0.1\n';
  return code;
};

Blockly.Blocks["zet_kit2_10_lunar_down"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선 하강")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_10_lunar_down"] = function () {
  let code = 'lunar_lander.ship_down()\n';
  return code;
};

Blockly.Blocks["zet_kit2_10_if_landed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선이 착지했는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_10_if_landed"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if lunar_lander.is_landed():\n' + branch;
  return code;
};

// Session 02.11

Blockly.Blocks["zet_kit2_11_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_11_ready"] = function () {
  let code = 'import lunar_lander\nimport button\nbt = button.create(6)\nlunar_lander.show()\nlunar_lander.start()\n';
  return code;
};

Blockly.Blocks["zet_kit2_11_bt_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('버튼이 눌러졌는가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit2_11_bt_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if bt.value() == 0:\n'+variable+'else:\n'+ineq;
  return code;
};

Blockly.Blocks["zet_kit2_11_engine_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("엔진을 켠다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_11_engine_on"] = function () {
  let code = 'lunar_lander.engine_on()\n';
  return code;
};

Blockly.Blocks["zet_kit2_11_engine_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("엔진을 끈다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_11_engine_off"] = function () {
  let code = 'lunar_lander.engine_off()\n';
  return code;
};

Blockly.Blocks["zet_kit2_11_ship_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선을 움직인다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_11_ship_move"] = function () {
  let code = 'lunar_lander.ship_move()\n';
  return code;
};

Blockly.Blocks["zet_kit2_11_ship_explode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선 폭발시키기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_11_ship_explode"] = function () {
  let code = 'lunar_lander.ship_explode()\n';
  return code;
};

Blockly.Blocks["zet_kit2_11_if_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("착륙선 속도가 1을 넘는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_11_if_speed"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if lunar_lander.speed > 1:\n' + branch;
  return code;
};

// Session 02.12

Blockly.Blocks["pro_kit2_12_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_12_ready"] = function () {
  let code = 'import cannon\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\npower = 300\npower_x = 0\npower_y = 0\nx = 0\ny = 0\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_if_bt_clicked"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("버튼이 눌러졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_12_if_bt_clicked"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if bt.is_clicked():\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("게임화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_show"] = function () {
  let code = 'cannon.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_power"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("대포 발사 속도(힘) 입력")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_power"] = function () {
  let code = 'cannon.set_power(power)\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_angle_45"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("대포 각도 변경 (-45도)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_angle_45"] = function () {
  let code = 'cannon.set_angle(-45)\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_angle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변화량만큼 각도 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_angle"] = function () {
  let code = 'cannon.set_angle(encoder.value())\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_fire"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("대포 발사")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_fire"] = function () {
  let code = 'cannon.fire()\npower_x = cannon.power_x()\npower_y = cannon.power_y()\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_cannon_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("대포알 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_cannon_move"] = function () {
  let code = 'x = x + (power_x / power)\ny = y + (power_y / power)\ncannon.bullet_moveto(x, y)\npower_y = power_y - 1\n';
  return code;
};

Blockly.Blocks["zet_kit2_12_y_0"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("대포알이 땅에 닿았는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_12_y_0"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if y < 0:\n' + branch;
  return code;
};

// Session 02.13

Blockly.Blocks["zet_kit2_13_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_13_ready"] = function () {
  let code = 'import tm1637\nimport clock\ntm1637.open(3, 4)\n';
  return code;
};

Blockly.Blocks["zet_kit2_13_led_tube_time_true"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("LED 튜브에 시간 표시하기 (00:00)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_13_led_tube_time_true"] = function () {
  let code = 'tm1637.time(clock.hour(), clock.minute(), True)\n';
  return code;
};

Blockly.Blocks["zet_kit2_13_led_tube_time_false"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("LED 튜브에 시간 표시하기 (00 00)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_13_led_tube_time_false"] = function () {
  let code = 'tm1637.time(clock.hour(), clock.minute(), False)\n';
  return code;
};

Blockly.Blocks["zet_kit2_13_print_time"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("어썸보드 시간 확인하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_13_print_time"] = function () {
  let code = 'print(clock.text())\n';
  return code;
};

// Session 02.14

Blockly.Blocks["pro_kit2_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_14_ready"] = function () {
  let code = 'import button\nimport tm1637\nimport clock\nimport dht11\nimport internet\nbt = button.create(6)\ntm1637.open(3, 4)\ndh = dht11.create(5)\nled_index = 1\nleds = [OutputPin(13), OutputPin(14), OutputPin(15)]\nclock.set( internet.get_time(@@NOW) )\n';
  return code;
};

Blockly.Blocks["zet_kit2_14_leds_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("현재 모드에 해당하는 LED 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_leds_on"] = function () {
  let code = 'leds[led_index-1].on()\n';
  return code;
};

Blockly.Blocks["zet_kit2_14_clock_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시계 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_clock_mode"] = function () {
  let code = 'display_dot = clock.millis() > 500\ntm1637.time(clock.hour(), clock.minute(), display_dot)\n';
  return code;
};

Blockly.Blocks["zet_kit2_14_temp_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("온도계 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_temp_mode"] = function () {
  let code = 'dh.measure()\ntm1637.number(dh.temperature())\n';
  return code;
};

Blockly.Blocks["zet_kit2_14_humi_mode"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("습도계 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_humi_mode"] = function () {
  let code = 'dh.measure()\ntm1637.number(dh.humidity())\n';
  return code;
};

Blockly.Blocks["zet_kit2_14_mode_change"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모드 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_mode_change"] = function () {
  let code = `leds[led_index-1].off()
led_index = led_index + 1
if led_index > 3:
  led_index = 1
print(led_index)
`;
  return code;
};

Blockly.Blocks["zet_kit2_14_if_clock"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시계 모드인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_14_if_clock"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if led_index == 1:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_14_if_temp"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("온도계 모드인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_14_if_temp"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if led_index == 2:\n' + branch;
  return code;
};

Blockly.Blocks["zet_kit2_14_if_humi"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("습도계 모드인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_14_if_humi"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if led_index == 3:\n' + branch;
  return code;
};

// Session 02.15

Blockly.Blocks["pro_kit2_15_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_15_ready"] = function () {
  let code = 'import tm1637\nimport hcsr04\nimport water_sensor\ntm1637.open(3, 4)\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_sun"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("'Sun' 표시하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_sun"] = function () {
  let code = 'tm1637.write([0b00000000, 0b01101101, 0b00011100, 0b01010100])\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_rain"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("'rAIn' 표시하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_rain"] = function () {
  let code = 'tm1637.write([0b01010000, 0b01110111, 0b00000110, 0b01010100])\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("LED 튜브 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_off"] = function () {
  let code = 'tm1637.write([0, 0, 0, 0])\n';
  return code;
};

Blockly.Blocks["pro_kit2_15_water_sensor_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("워터 센서 화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_15_water_sensor_show"] = function () {
  let code = 'water_sensor.show()\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_continue"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복문 처음으로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_continue"] = function () {
  let code = 'continue\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_if_50"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리가 50cm보다 큰가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_15_if_50"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if cm > 50:\n' + branch;
  return code;
};

Blockly.Blocks["pro_kit2_15_water_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 20보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["pro_kit2_15_water_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if water_sensor.read() > 20:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 02.16

Blockly.Blocks["pro_kit2_16_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_16_ready"] = function () {
  let code = 'import hcsr04\nhcsr04.open(7, 8)\nbuzzer = OutputPin(11)\ncm = 0\nold_cm = 0\n';
  return code;
};

Blockly.Blocks["zet_kit2_16_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_16_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["zet_kit2_16_change_value"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변화량 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_16_change_value"] = function () {
  let code = 'cm = hcsr04.get_distance()\nprint(abs(cm - old_cm))\nold_cm = cm\n';
  return code;
};

Blockly.Blocks["zet_kit2_16_buzzer_2sec"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("부저 소리내기 (2초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_16_buzzer_2sec"] = function () {
  let code = 'buzzer.on()\ndelay(2)\nbuzzer.off()\n';
  return code;
};

Blockly.Blocks["zet_kit2_16_distance_save"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("현재 거리 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_16_distance_save"] = function () {
  let code = 'old_cm = cm\n';
  return code;
};

Blockly.Blocks["zet_kit2_16_if_30"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변화량이 30cm 이상인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["zet_kit2_16_if_30"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if abs(cm - old_cm) > 30:\n' + branch;
  return code;
};

// Session 02.17

Blockly.Blocks["pro_kit2_17_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["pro_kit2_17_ready"] = function () {
  let code = 'import tm1637\nimport button\nimport rotary\nsensor = AnalogPin(1)\ntm1637.open(3, 4)\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nbuzzer = OutputPin(11)\nencoder.set(300)\n';
  return code;
};

Blockly.Blocks["zet_kit2_17_led_tube_encoder"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("LED 튜브에 기준값 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_17_led_tube_encoder"] = function () {
  let code = 'tm1637.number(encoder.value())\n';
  return code;
};

Blockly.Blocks["zet_kit2_17_buzzer_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("부저 켜기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_17_buzzer_on"] = function () {
  let code = 'buzzer.on()\n';
  return code;
};

Blockly.Blocks["zet_kit2_17_buzzer_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("부저 끄기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_17_buzzer_off"] = function () {
  let code = 'buzzer.off()\n';
  return code;
};

Blockly.Blocks["zet_kit2_17_sensor_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서의 수치가 기준값보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit2_17_sensor_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if sensor.read() > encoder.value():\n'+variable+'else:\n'+ineq;
  return code;
};

Blockly.Blocks["zet_kit1_3_4pin_led_connect"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("4번 핀에 LED 연결하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_3_4pin_led_connect"] = function () {
  let code = 'led = OutputPin(4)\n';
  return code;
};

Blockly.Blocks["zet_kit1_3_4pin_led_on"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("4번 핀에 전기 공급하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_3_4pin_led_on"] = function () {
  let code = 'led.on()\n';
  return code;
};

Blockly.Blocks["zet_kit1_3_4pin_led_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("4번 핀에 전기 중단하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_3_4pin_led_off"] = function () {
  let code = 'led.off()\n';
  return code;
};

// Session 01.04-Zet

Blockly.Blocks["zet_kit1_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_4_ready"] = function () {
  let code = 'red = OutputPin(4)\nyellow = OutputPin(5)\ngreen = OutputPin(6)\n';
  return code;
};

// Session 01.06-Zet

Blockly.Blocks["zet_kit1_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_6_ready"] = function () {
  let code = 'import music\nmusic.open(8)\n';
  return code;
};

// Session 01.07-Zet

Blockly.Blocks["zet_kit1_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_7_ready"] = function () {
  let code = 'red = ServoPin(5)\ngreen = ServoPin(6)\nblue = ServoPin(7)\n';
  return code;
};

// Session 01.08-Zet

Blockly.Blocks["zet_kit1_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_8_ready"] = function () {
  let code = 'sensor = AnalogPin()\nbuzzer = OutputPin(8)\n';
  return code;
};

Blockly.Blocks["zet_kit1_8_water_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("워터센서 값 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_8_water_sensor_read"] = function () {
  let code = 'value = sensor.read()\n';
  return code;
};

Blockly.Blocks["zet_kit1_8_sensor_50_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 50이 넘는가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit1_8_sensor_50_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value > 50:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.10-Zet

Blockly.Blocks["zet_kit1_10_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_10_ready"] = function () {
  let code = 'sensor = AnalogPin()\nled = OutputPin(4)\n';
  return code;
};

Blockly.Blocks["zet_kit1_10_sensor_200_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 200보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit1_10_sensor_200_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value > 200:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.11.01-Zet

Blockly.Blocks["zet_kit1_11_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_11_1_ready"] = function () {
  let code = 'sensor = AnalogPin()\nled = OutputPin(4)\n';
  return code;
};

Blockly.Blocks["zet_kit1_11_1_sensor_50_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('센서 값이 50보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit1_11_1_sensor_50_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if value > 50:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 01.13-Zet

Blockly.Blocks["zet_kit1_13_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_13_ready"] = function () {
  let code = 'import vibration_sensor\nimport http_utils\nsensor = vibration_sensor.create(7, 1000)\n';
  return code;
};

// Session 01.14-Zet

Blockly.Blocks["zet_kit1_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit1_14_ready"] = function () {
  let code = 'import http_utils\nsensor = AnalogPin()\n';
  return code;
};

Blockly.Blocks["zet_kit1_14_need_water"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("화분에 물이 필요하면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4cc1b9");
  },
};  

javascriptGenerator["zet_kit1_14_need_water"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if sensor.read() > 600:\n' + branch;
  return code;
};

// Session 02.01-Zet

Blockly.Blocks["zet_kit2_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_1_ready"] = function () {
  let code = 'import sound_effect\nred = ServoPin(5)\ngreen = ServoPin(6)\nblue = ServoPin(7)\nsound_effect.open(1)\n';
  return code;
};

// Session 02.02-Zet

Blockly.Blocks["zet_kit2_2_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_2_ready"] = function () {
  let code = 'import car_race\nimport rotary\nencoder = rotary.create(6, 7)\nold_value = 0\n';
  return code;
};

// Session 02.03-Zet

Blockly.Blocks["zet_kit2_3_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_3_ready"] = function () {
  let code = 'import tm1637\nimport hcsr04\ntm1637.open(3, 4)\nhcsr04.open(5, 6)\n';
  return code;
};

// Session 02.04-Zet

Blockly.Blocks["zet_kit2_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_4_ready"] = function () {
  let code = 'import door\nimport hcsr04\nhcsr04.open(5, 6)\n';
  return code;
};

// Session 02.05-Zet

Blockly.Blocks["zet_kit2_5_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_5_ready"] = function () {
  let code = 'import button\nimport flag_game\nbt1 = button.Button(6)\nbt2 = button.Button(7)\n';
  return code;
};

// Session 02.06-Zet

Blockly.Blocks["zet_kit2_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_6_ready"] = function () {
  let code = 'import spacecraft\nimport button\nimport rotary\nbt = button.create(5)\nencoder = rotary.create(6, 7)\n';
  return code;
};

// Session 02.07-Zet

Blockly.Blocks["zet_kit2_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_7_ready"] = function () {
  let code = 'import maze\nimport button\nimport rotary\nbt = button.create(5)\nencoder = rotary.create(6, 7)\nx = 0\ny = 0\nhori_vert = 1\n';
  return code;
};

// Session 02.08-Zet

Blockly.Blocks["zet_kit2_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_8_ready"] = function () {
  let code = 'import sliding_puzzle\nimport button\nimport rotary\nbt = button.create(5)\nencoder = rotary.create(6, 7)\nhori_vert = 1\n';
  return code;
};

// Session 02.09-Zet

Blockly.Blocks["zet_kit2_9_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_9_ready"] = function () {
  let code = 'import timer\nimport button\nimport rotary\nbt1 = button.create(1)\ntimer.open(3, 4)\nbt2 = button.create(5)\nencoder = rotary.create(6, 7)\nbuzzer = OutputPin(8)\n';
  return code;
};

// Session 02.12-Zet

Blockly.Blocks["zet_kit2_12_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_12_ready"] = function () {
  let code = 'import cannon\nimport button\nimport rotary\nbt = button.create(5)\nencoder = rotary.create(6, 7)\npower = 300\npower_x = 0\npower_y = 0\nx = 0\ny = 0\n';
  return code;
};

// Session 02.14-Zet

Blockly.Blocks["zet_kit2_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_14_ready"] = function () {
  let code = 'import button\nimport tm1637\nimport clock\nimport dht11\nimport internet\nbt = button.create(2)\ntm1637.open(3, 4)\ndh = dht11.create(5)\nled_index = 1\nleds = [OutputPin(7), OutputPin(8), OutputPin(12)]\nclock.set( internet.get_time(@@NOW) )\n';
  return code;
};

// Session 02.15-Zet

Blockly.Blocks["zet_kit2_15_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_15_ready"] = function () {
  let code = 'import tm1637\nimport hcsr04\nsensor = AnalogPin()\ntm1637.open(3, 4)\nhcsr04.open(5, 6)\n';
  return code;
};

Blockly.Blocks["zet_kit2_15_water_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('워터 센서 값이 50보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["zet_kit2_15_water_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if sensor.read() > 50:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 02.16-Zet

Blockly.Blocks["zet_kit2_16_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_16_ready"] = function () {
  let code = 'import hcsr04\nhcsr04.open(5, 6)\nbuzzer = OutputPin(8)\ncm = 0\nold_cm = 0\n';
  return code;
};

// Session 02.17-Zet

Blockly.Blocks["zet_kit2_17_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["zet_kit2_17_ready"] = function () {
  let code = 'import tm1637\nimport button\nimport rotary\nsensor = AnalogPin()\ntm1637.open(3, 4)\nbt = button.create(5)\nencoder = rotary.create(6, 7)\nbuzzer = OutputPin(8)\nencoder.set(300)\n';
  return code;
};

// Session 03.01

Blockly.Blocks["code_bot_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_ready"] = function () {
  let code = 'import hcsr04\ns = ServoPin(8)\nhcsr04.open(3, 2)\n';
  return code;
};

Blockly.Blocks["code_bot_1_cm_angle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("서모보터 각도 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_cm_angle"] = function () {
  let code = 's.angle(cm * 5)\n';
  return code;
};

Blockly.Blocks["code_bot_1_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_left"] = function () {
  let code = 's.angle(0)\n';
  return code;
};

Blockly.Blocks["code_bot_1_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_right"] = function () {
  let code = 's.angle(180)\n';
  return code;
};

Blockly.Blocks["code_bot_1_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_stop"] = function () {
  let code = 's.duty(0)\n';
  return code;
};

Blockly.Blocks["code_bot_1_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["code_bot_1_continue"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복문 처음으로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_1_continue"] = function () {
  let code = 'continue\n';
  return code;
};

Blockly.Blocks["code_bot_1_if_dis_err"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리재기 에러인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_1_if_dis_err"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if cm < 0:\n' + branch;
  return code;
};

// Session 03.02

Blockly.Blocks["code_bot_2_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Blocks["code_bot_2_home"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("차렷하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_home"] = function () {
  let code = 'asomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_2_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("앞으로 전진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_forward"] = function () {
  let code = 'asomebot.forward()\n';
  return code;
};

Blockly.Blocks["code_bot_2_backward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("뒤로 후진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_backward"] = function () {
  let code = 'asomebot.backward()\n';
  return code;
};

Blockly.Blocks["code_bot_2_turn_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_turn_left"] = function () {
  let code = 'asomebot.turn_left()\n';
  return code;
};

Blockly.Blocks["code_bot_2_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_2_turn_right"] = function () {
  let code = 'asomebot.turn_right()\n';
  return code;
};

Blockly.Blocks["code_bot_2_for_10"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("10번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_2_for_10"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'for i in range(10):\n' + branch;
  return code;
};

// Session 03.03

Blockly.Blocks["code_bot_3_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_3_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

// Session 03.04

Blockly.Blocks["code_bot_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_4_ready"] = function () {
  let code = 'import asomebot\nimport hcsr04\nasomebot.ready(5, 6, 7, 8)\nhcsr04.open(3, 2)\n';
  return code;
};

Blockly.Blocks["code_bot_4_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_4_distance"] = function () {
  let code = `cm = hcsr04.get_distance()
if cm < 0:
  continue
`;
  return code;
};

Blockly.Blocks["code_bot_4_distance_print"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 화면 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_bot_4_distance_print"] = function () {
  let code = 'print(hcsr04.get_distance())\n';
  return code;
};

Blockly.Blocks["code_bot_4_if_cm_10"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리가 10cm 보다 짧은가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_4_if_cm_10"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = 'if cm < 10:\n' + branch;
  return code;
};

// Session 03.05

Blockly.Blocks["code_bot_5_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_5_ready"] = function () {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_bot_5_turn_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_5_turn_left"] = function () {
  let code = 'asomebot.turn_left()\n';
  return code;
};

Blockly.Blocks["code_bot_5_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_5_turn_right"] = function () {
  let code = 'asomebot.turn_right()\n';
  return code;
};

Blockly.Blocks["code_bot_5_read_text"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_5_read_text"] = function () {
  let code = 'msg = s.read_text()\n';
  return code;
};

Blockly.Blocks["code_bot_5_if_msg"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지를 받았는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_msg"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_if_h"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'H' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_h"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'H':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_if_f"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'F' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_f"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'F':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_if_b"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'B' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_b"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'B':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_if_l"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'L' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_l"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'L':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_if_r"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'R' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_5_if_r"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'R':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_5_print_msg"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 화면 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_5_print_msg"] = function () {
  let code = 'print(msg)\n';
  return code;
};

// Session 03.06

Blockly.Blocks["code_bot_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\na2 = 90\na3 = 90\n';
  return code;
};

Blockly.Blocks["code_bot_6_turn_off"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모든 모터 정지")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_turn_off"] = function () {
  let code = 'asomebot.turn_off()\n';
  return code;
};

Blockly.Blocks["code_bot_6_2m_plus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("2번 모터의 각도 1만큼 키우기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_2m_plus"] = function () {
  let code = 'a2 = a2 + 1\nasomebot.angle(2, a2)\n';
  return code;
};

Blockly.Blocks["code_bot_6_2m_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("2번 모터의 각도 1만큼 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_2m_minus"] = function () {
  let code = 'a2 = a2 - 1\nasomebot.angle(2, a2)\n';
  return code;
};

Blockly.Blocks["code_bot_6_3m_plus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("3번 모터의 각도 1만큼 키우기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_3m_plus"] = function () {
  let code = 'a3 = a3 + 1\nasomebot.angle(3, a3)\n';
  return code;
};

Blockly.Blocks["code_bot_6_3m_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("3번 모터의 각도 1만큼 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_3m_minus"] = function () {
  let code = 'a3 = a3 - 1\nasomebot.angle(3, a3)\n';
  return code;
};

Blockly.Blocks["code_bot_6_right_out"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른발을 바깥쪽으로 최대 접기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_right_out"] = function () {
  let code = 'asomebot.angle(3, 0)\n';
  return code;
};

Blockly.Blocks["code_bot_6_right_in"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른발을 안쪽으로 최대 접기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_right_in"] = function () {
  let code = 'asomebot.angle(3, 180)\n';
  return code;
};

Blockly.Blocks["code_bot_6_right_home"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른발을 원래 위치로")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_right_home"] = function () {
  let code = 'asomebot.angle(3, 180)\n';
  return code;
};

Blockly.Blocks["code_bot_6_left_out"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼발을 바깥쪽으로 최대 접기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_left_out"] = function () {
  let code = 'asomebot.angle(2, 0)\n';
  return code;
};

Blockly.Blocks["code_bot_6_left_in"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼발을 안쪽으로 최대 접기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_left_in"] = function () {
  let code = 'asomebot.angle(2, 180)\n';
  return code;
};

Blockly.Blocks["code_bot_6_left_home"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼발을 원래 위치로")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_6_left_home"] = function () {
  let code = 'asomebot.angle(2, 180)\n';
  return code;
};

Blockly.Blocks["code_bot_6_for_60"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("60번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_6_for_60"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for i in range(60):\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_6_for_30"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("30번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_6_for_30"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for i in range(30):\n" + branch;
  return code;
};

// Session 03.07

Blockly.Blocks["code_bot_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_7_ready"] = function () {
  let code = 'import asomebot\nimport utime\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Blocks["code_bot_7_ticks_ms"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("어썸보드 사용시간 구하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_7_ticks_ms"] = function () {
  let code = 'utime.ticks_ms()\n';
  return code;
};

Blockly.Blocks["code_bot_7_start_tick"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시작 시간 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_7_start_tick"] = function () {
  let code = 'start_tick = utime.ticks_ms()\n';
  return code;
};

Blockly.Blocks["code_bot_7_tick"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("종료 시간 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_7_tick"] = function () {
  let code = 'tick = utime.ticks_ms()\n';
  return code;
};

Blockly.Blocks["code_bot_7_print_tick"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시간 차이를 표시하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_7_print_tick"] = function () {
  let code = 'print(tick-start_tick)\n';
  return code;
};

// Session 03.08

Blockly.Blocks["code_bot_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_8_ready"] = function () {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_bot_8_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("전진하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_8_forward"] = function () {
  let code = 'asomebot.forward()\n';
  return code;
};

Blockly.Blocks["code_bot_8_backward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("후진하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_8_backward"] = function () {
  let code = 'asomebot.backward()\n';
  return code;
};

Blockly.Blocks["code_bot_8_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_8_turn_right"] = function () {
  let code = 'asomebot.turn_right()\n';
  return code;
};

Blockly.Blocks["code_bot_8_if_h"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("읽은 메시지가 'H' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_8_if_h"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'H':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_8_if_f"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("읽은 메시지가 'F' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_8_if_f"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'F':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_8_if_b"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("읽은 메시지가 'B' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_8_if_b"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'B':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_8_if_l"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("읽은 메시지가 'L' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_8_if_l"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'L':\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_8_if_r"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("읽은 메시지가 'R' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_bot_8_if_r"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'R':\n" + branch;
  return code;
};

// Session 03.09

Blockly.Blocks["code_bot_9_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_ready"] = function () {
  let code = 'import music_player\nmusic_player.open(1)\n';
  return code;
};

Blockly.Blocks["code_bot_9_music_play"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("연주 시작하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_music_play"] = function () {
  let code = 'music_player.play()\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_do"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "도" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_do"] = function () {
  let code = 'music_player.add("C4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_re"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "레" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_re"] = function () {
  let code = 'music_player.add("D4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_mi"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "미" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_mi"] = function () {
  let code = 'music_player.add("E4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_fa"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "파" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_fa"] = function () {
  let code = 'music_player.add("F4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_so"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "솔" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_so"] = function () {
  let code = 'music_player.add("G4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_la"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "라" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_la"] = function () {
  let code = 'music_player.add("A4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_ti"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('4옥타브 "시" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_ti"] = function () {
  let code = 'music_player.add("B4", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_add_h_do"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('5옥타브 "도" 한 박자 음표 추가')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_add_h_do"] = function () {
  let code = 'music_player.add("C5", 300)\n';
  return code;
};

Blockly.Blocks["code_bot_9_music_update"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시간이 되면 다음 음계 연주하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("ec1961");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_9_music_update"] = function () {
  let code = 'music_player.update()\n';
  return code;
};

// Session 03.10

Blockly.Blocks["code_bot_10_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_10_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\ninput()\n';
  return code;
};

Blockly.Blocks["code_bot_10_motor_duty0"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모터의 전원을 끈다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_10_motor_duty0"] = function () {
  let code = 'asomebot.servos[index].duty(0)\n';
  return code;
};

Blockly.Blocks["code_bot_10_angle_index_angle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("입력된 번호의 모터 각도를 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_10_angle_index_angle"] = function () {
  let code = 'asomebot.angle( index, angle )\n';
  return code;
};

Blockly.Blocks["code_bot_10_input_index_angle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("입력창에서 모터 번호와 각도를 입력받는다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_10_input_index_angle"] = function () {
  let code = `line = input()\nvalues = line.split(',')\nindex = int(values[0])\nangle = int(values[1])\nprint('index =', index, ', angle =', angle)\n`;
  return code;
};

Blockly.Blocks["code_bot_10_angle_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('각도가 0보다 작으면')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_bot_10_angle_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if angle < 0:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 03.11

Blockly.Blocks["code_bot_11_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_11_home"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("차렷하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_home"] = function () {
  let code = 'asomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_11_forward_1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("걷기동작 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_forward_1"] = function () {
  let code = 'asomebot.angle(2, 90 - 30)\nasomebot.angle(3, 90 - 15)\n';
  return code;
};

Blockly.Blocks["code_bot_11_forward_2"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("걷기동작 2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_forward_2"] = function () {
  let code = 'asomebot.angle(0, 90 - 30)\nasomebot.angle(1, 90 - 30)\n';
  return code;
};

Blockly.Blocks["code_bot_11_forward_3"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("걷기동작 3")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_forward_3"] = function () {
  let code = 'asomebot.angle(2, 90 + 15)\nasomebot.angle(3, 90 + 30)\n';
  return code;
};

Blockly.Blocks["code_bot_11_forward_4"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("걷기동작 4")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_forward_4"] = function () {
  let code = 'asomebot.angle(0, 90 + 30)\nasomebot.angle(1, 90 + 30)\n';
  return code;
};

Blockly.Blocks["code_bot_11_delay_0.2"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("0.2초 기다린다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_11_delay_0.2"] = function () {
  let code = 'delay(0.2)\n';
  return code;
};

// Session 03.12

Blockly.Blocks["code_bot_12_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_ready"] = function () {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_12_home"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("차렷하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_home"] = function () {
  let code = 'asomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_12_turn_1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("회전동작 1")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_turn_1"] = function () {
  let code = 'asomebot.angle(3, 90 + 30)\n';
  return code;
};

Blockly.Blocks["code_bot_12_turn_2"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("회전동작 2")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_turn_2"] = function () {
  let code = 'asomebot.angle(1, 90 + 30)\n';
  return code;
};

Blockly.Blocks["code_bot_12_turn_3"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("회전동작 3")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_turn_3"] = function () {
  let code = 'asomebot.angle(2, 90 - 30)\nasomebot.angle(3, 90 - 20)\n';
  return code;
};

Blockly.Blocks["code_bot_12_turn_4"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("회전동작 4")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_12_turn_4"] = function () {
  let code = `for i in range(30):
  asomebot.angle(1, 90 + 30 - i)
  delay(0.008)
`;
  return code;
};

// Session 03.13

Blockly.Blocks["code_bot_13_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_13_ready"] = function () {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\ns = udp_socket.create()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_bot_13_for_4"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("4번 반복")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_13_for_4"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for i in range(4):\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_13_for_10"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("10번 반복")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_13_for_10"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for i in range(10):\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_13_msg_wait"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 기다리기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_13_msg_wait"] = function () {
  let code = `msg = s.read_text()
if msg:
  break
`;
  return code;
};

// Session 03.14

Blockly.Blocks["code_bot_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_ready"] = function () {
  let code = 'import hcsr04\nhcsr04.open(3, 2)\nready = 0\nclose = 1\nstate = ready\n';
  return code;
};

Blockly.Blocks["code_bot_14_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 측정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_distance"] = function () {
  let code = `cm = hcsr04.get_distance()
if cm < 0:
  continue
`;
  return code;
};

Blockly.Blocks["code_bot_14_pass"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("무시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_pass"] = function () {
  var code = "pass\n";
  return code;
};

Blockly.Blocks["code_bot_14_change_close"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("close 상태로 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_change_close"] = function () {
  var code = "state = close\n";
  return code;
};

Blockly.Blocks["code_bot_14_change_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("ready 상태로 변경")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_change_ready"] = function () {
  var code = "state = ready\n";
  return code;
};

Blockly.Blocks["code_bot_14_print_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"stop"표시')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_print_stop"] = function () {
  var code = 'print("stop")\n';
  return code;
};

Blockly.Blocks["code_bot_14_100_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("100 cm 이상이면 ready 상태로")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_100_ready"] = function () {
  let code = `if cm > 100:
  print("to ready state")
  state = ready
`;
  return code;
};

Blockly.Blocks["code_bot_14_20_close"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("20 cm 이하이면 close 상태로")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_14_20_close"] = function () {
  let code = `if cm > 100:
  pass
elif cm < 20:
  print("to close state")
  state = close
`;
  return code;
};

Blockly.Blocks["code_bot_14_if_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("ready 상태이면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_14_if_ready"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if state == ready:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_14_if_close"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("close 상태이면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_14_if_close"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if state == close:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_14_if_100"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리가 100cm 보다 큰가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_14_if_100"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if cm > 100:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_14_if_elif"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('거리가 100cm보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면 20cm보다 작은가?');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_bot_14_if_elif"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if cm > 100:\n'+variable+'elif cm < 20:\n'+ineq;
  return code;
};

// Session 03.15

Blockly.Blocks["code_bot_15_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_ready"] = function () {
  let code = 'import asomebot\nimport motion\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Blocks["code_bot_15_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_stop"] = function () {
  let code = 'asomebot.home()\nasomebot.turn_off()\n';
  return code;
};

Blockly.Blocks["code_bot_15_moonwalk"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("문워크 춤추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_moonwalk"] = function () {
  let code = 'asomebot.moonwalk()\n';
  return code;
};

Blockly.Blocks["code_bot_15_motion_start"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("동작 인식을 준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_motion_start"] = function () {
  let code = 'motion.start()\n';
  return code;
};

Blockly.Blocks["code_bot_15_motion_get"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("인식된 동작을 가져온다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_motion_get"] = function () {
  let code = 'command = motion.get()\n';
  return code;
};

Blockly.Blocks["code_bot_15_command_3"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("모션 화면 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_bot_15_command_3"] = function () {
  let code = 'if command > 3:\n\tprint(command)\n';
  return code;
};

Blockly.Blocks["code_bot_15_if_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기 명령인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_15_if_stop"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if command == motion.stop:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_15_if_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("전진하기 명령인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_15_if_forward"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if command == motion.forward:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_15_if_backward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("후진하기 명령인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_15_if_backward"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if command == motion.backward:\n" + branch;
  return code;
};

Blockly.Blocks["code_bot_15_if_moonwalk"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("문워크 명령인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_bot_15_if_moonwalk"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if command == motion.moonwalk:\n" + branch;
  return code;
};

// Session 04.01

Blockly.Blocks["code_car_1_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_ready"] = function () {
  let code = 'import hcsr04\ns = ServoPin(8)\nhcsr04.open(5, 6)\n';
  return code;
};

Blockly.Blocks["code_car_1_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_stop"] = function () {
  let code = 's.duty(0)\n';
  return code;
};

Blockly.Blocks["code_car_1_turn_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_turn_left"] = function () {
  let code = 's.duty(1)\n';
  return code;
};

Blockly.Blocks["code_car_1_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_turn_right"] = function () {
  let code = 's.duty(128)\n';
  return code;
};

Blockly.Blocks["code_car_1_get_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_get_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["code_car_1_continue"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복문 처음으로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_1_continue"] = function () {
  let code = 'continue\n';
  return code;
};

Blockly.Blocks["code_car_1_distance_error"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리재기 에러인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_car_1_distance_error"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if cm < 0:\n" + branch;
  return code;
};

Blockly.Blocks["code_car_1_cm_10_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('거리가 10cm 미만인가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_car_1_cm_10_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if cm < 10:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 04.02

Blockly.Blocks["code_car_2_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_ready"] = function () {
  let code = 'import asomecar\nasomecar.ready(1, 2, 7, 8)\n';
  return code;
};

Blockly.Blocks["code_car_2_move_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_move_stop"] = function () {
  let code = 'asomecar.stop()\n';
  return code;
};

Blockly.Blocks["code_car_2_move_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("앞으로 전진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_move_forward"] = function () {
  let code = 'asomecar.forward()\n';
  return code;
};

Blockly.Blocks["code_car_2_move_backward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("뒤로 후진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_move_backward"] = function () {
  let code = 'asomecar.backward()\n';
  return code;
};

Blockly.Blocks["code_car_2_rotate_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_rotate_left"] = function () {
  let code = 'asomecar.turn_left()\n';
  return code;
};

Blockly.Blocks["code_car_2_rotate_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_rotate_right"] = function () {
  let code = 'asomecar.turn_right()\n';
  return code;
};

Blockly.Blocks["code_car_2_turn_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_turn_left"] = function () {
  let code = 'asomecar.to_left()\n';
  return code;
};

Blockly.Blocks["code_car_2_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_2_turn_right"] = function () {
  let code = 'asomecar.to_right()\n';
  return code;
};

// Session 04.03

Blockly.Blocks["code_car_3_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_ready"] = function () {
  let code = 'import asomecar\nimport hcsr04\nimport interval\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\ntimer = interval.create(100)\n';
  return code;
};

Blockly.Blocks["code_car_3_move_count"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("count 값에 따라 어썸카 움직이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_move_count"] = function () {
  let code = `if count == 30:
  asomecar.backward()
if count == 5:
  asomecar.turn_left()
if count == 0:
  asomecar.forward()
`;
  return code;
};

Blockly.Blocks["code_car_3_get_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 측정하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_get_distance"] = function () {
  let code = `cm = hcsr04.get_distance()
if cm < 0:
  continue
`;
  return code;
};

Blockly.Blocks["code_car_3_count_0"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("count 변수에 0 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_count_0"] = function () {
  let code = 'count = 0\n';
  return code;
};

Blockly.Blocks["code_car_3_count_30"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("count 변수에 30 저장하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_count_30"] = function () {
  let code = 'count = 30\n';
  return code;
};

Blockly.Blocks["code_car_3_count_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("0.1초마다 count의 값을 1만큼 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_3_count_minus"] = function () {
  let code = `if timer.is_active() and (count > 0):
  count = count - 1
`;
  return code;
};

Blockly.Blocks["code_car_3_10_if"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리가 10cm보다 짧은가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_car_3_10_if"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if cm < 10:\n" + branch;
  return code;
};

// Session 04.04

Blockly.Blocks["code_car_4_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_4_ready"] = function () {
  let code = 'import asomecar\nimport udp_socket\nasomecar.ready(1, 2, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_car_4_read_text"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_4_read_text"] = function () {
  let code = 'msg = s.read_text()\n';
  return code;
};

Blockly.Blocks["code_car_4_if_msg"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지를 받았는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_if_msg"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg:\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_msg_h"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'H' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_msg_h"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'H':\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_msg_f"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'F' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_msg_f"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'F':\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_msg_b"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'B' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_msg_b"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'B':\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_msg_l"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'L' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_msg_l"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'L':\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_msg_r"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 'R' 인가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("b666fc");
  },
};  

javascriptGenerator["code_car_4_msg_r"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg == 'R':\n" + branch;
  return code;
};

Blockly.Blocks["code_car_4_print_msg"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지 화면 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_4_print_msg"] = function () {
  let code = 'print(msg)\n';
  return code;
};

// Session 04.05

Blockly.Blocks["code_car_5_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_5_ready"] = function () {
  let code = 'servo = ServoPin(8)\nsensor = AnalogPin()\n';
  return code;
};

Blockly.Blocks["code_car_5_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("센서 측정값 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_5_sensor_read"] = function () {
  let code = 'print(sensor.read())\n';
  return code;
};

Blockly.Blocks["code_car_5_turn_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_5_turn_left"] = function () {
  let code = 'servo.duty(1)\n';
  return code;
};

Blockly.Blocks["code_car_5_turn_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_5_turn_right"] = function () {
  let code = 'servo.duty(128)\n';
  return code;
};

Blockly.Blocks["code_car_5_read_300_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('측정량이 300보다 큰가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_car_5_read_300_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if sensor.read() > 300:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 04.06

Blockly.Blocks["code_car_6_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_6_ready"] = function () {
  let code = 'import asomecar\nimport line_sensor\nasomecar.ready(1, 2, 7, 8)\nline_sensor.ready()\n';
  return code;
};

Blockly.Blocks["code_car_6_sensor_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("라인 트래킹 센서값 확인하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_6_sensor_read"] = function () {
  let code = 'print(line_sensor.read())\n';
  return code;
};

Blockly.Blocks["code_car_6_move_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("앞으로 직진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_6_move_forward"] = function () {
  let code = 'asomecar.forward()\n';
  return code;
};

Blockly.Blocks["code_car_6_if_both"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("선 위에 있거나 벗어났는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_car_6_if_both"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if line_sensor.read() >= line_sensor.BOTH:\n" + branch;
  return code;
};

Blockly.Blocks["code_car_6_if_left"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("왼쪽으로 기울어졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};  

javascriptGenerator["code_car_6_if_left"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if line_sensor.read() == line_sensor.LEFT:\n" + branch;
  return code;
};

Blockly.Blocks["code_car_6_if_right"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("오른쪽으로 기울어졌는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_6_if_right"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if line_sensor.read() == line_sensor.RIGHT:\n" + branch;
  return code;
};

// Session 04.07

Blockly.Blocks["code_car_7_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_ready"] = function () {
  let code = 'import asomecar\nasomecar.ready(1, 2, 7, 8)\n';
  return code;
};

Blockly.Blocks["code_car_7_move_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_7_move_stop"] = function () {
  let code = 'asomecar.stop()\n';
  return code;
};

Blockly.Blocks["code_car_7_move_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("앞으로 전진")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_7_move_forward"] = function () {
  let code = 'asomecar.forward()\n';
  return code;
};

Blockly.Blocks["code_car_7_fast_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("최대 속도로 설정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_7_fast_speed"] = function () {
  let code = 'forward_speed = (140, 1, 140, 1)\nbackward_speed = (1, 140, 1, 140)\n';
  return code;
};

Blockly.Blocks["code_car_7_slow_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("느린속도로 설정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["code_car_7_slow_speed"] = function () {
  let code = 'forward_speed = (80, 60, 80, 60)\nbackward_speed = (60, 80, 60, 80)\n';
  return code;
};

Blockly.Blocks["code_car_7_fasts_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("첫 번째 모터 속도 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_fasts_minus"] = function () {
  let code = 'asomecar.forward_fasts = (140 - (i * 10),  0,  0,  0)\n';
  return code;
};

Blockly.Blocks["code_car_7_fasts"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변경된 속도로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_fasts"] = function () {
  let code = 'asomecar.forward(asomecar.forward_fasts)\n';
  return code;
};

Blockly.Blocks["code_car_7_print_fasts"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변경된 속도 결과창에 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_print_fasts"] = function () {
  let code = 'print(asomecar.forward_fasts)\n';
  return code;
};

Blockly.Blocks["code_car_7_print_i"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복 횟수 결과창에 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_print_i"] = function () {
  let code = 'print(print(i+1))\n';
  return code;
};

Blockly.Blocks["code_car_7_print_forward_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("앞으로 전진하기에 대한 현재 설정값 확인")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_print_forward_speed"] = function () {
  let code = 'print(forward_speed)\n';
  return code;
};

Blockly.Blocks["code_car_7_print_backward_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("뒤로 후진하기에 대한 현재 설정값 확인")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_7_print_backward_speed"] = function () {
  let code = 'print(backward_speed)\n';
  return code;
};

Blockly.Blocks["code_car_7_for_15"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("15번 반복하기")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_7_for_15"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for i in range(15):\n" + branch;
  return code;
};

// Session 04.08

Blockly.Blocks["code_car_8_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_8_ready"] = function () {
  let code = 'import asomecar\nimport udp_socket\nasomecar.ready(1, 2, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_car_8_move_stop"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("어썸카 멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_8_move_stop"] = function () {
  let code = 'asomecar.stop()\n';
  return code;
};

Blockly.Blocks["code_car_8_break"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("반복 멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_8_break"] = function () {
  let code = 'break\n';
  return code;
};

Blockly.Blocks["code_car_8_if_msg"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("메시지가 수신되었는가?")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_8_if_msg"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if msg:\n" + branch;
  return code;
};

// Session 04.09

Blockly.Blocks["code_car_9_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_ready"] = function () {
  let code = 'import asomecar\nimport udp_socket\nasomecar.ready(1, 2, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Blocks["code_car_9_move_speed"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("지정된 속도로 어썸카를 움직인다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_move_speed"] = function () {
  let code = 'asomecar.forward( (speed_left, speed_right, speed_left, speed_right) )\n';
  return code;
};

Blockly.Blocks["code_car_9_speed_0"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("정지 속도로 지정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_speed_0"] = function () {
  let code = 'speed_left  = 0\nspeed_right = 0\n';
  return code;
};

Blockly.Blocks["code_car_9_speed_max"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("최대 속도로 지정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_speed_max"] = function () {
  let code = 'speed_left  = 140\nspeed_right = 1\n';
  return code;
};

Blockly.Blocks["code_car_9_speed_down"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리에 따라 속도를 줄인다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_speed_down"] = function () {
  let code = 'slow_down = 70 - cm\nspeed_left  = speed_left  - slow_down\nspeed_right = speed_right + slow_down\n';
  return code;
};

Blockly.Blocks["code_car_9_get_distance"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리 측정")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_9_get_distance"] = function () {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Blocks["code_car_9_cm_70_if"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("거리가 70cm 이하이면")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_9_cm_70_if"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if cm < 70:\n" + branch;
  return code;
};

Blockly.Blocks["code_car_9_cm_10_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('거리가 10cm 이하이면')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_car_9_cm_10_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if cm < 10:\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 04.10

Blockly.Blocks["code_car_10_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_10_ready"] = function () {
  let code = 'motors = [ServoPin(1), ServoPin(2), ServoPin(7), ServoPin(8)]\n';
  return code;
};

Blockly.Blocks["code_car_10_motor_duty"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("입력된 번호의 모터를 입력된 속도로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_10_motor_duty"] = function () {
  let code = 'motors[ index ].duty( duty )\n';
  return code;
};

Blockly.Blocks["code_car_10_input"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("입력창에서 정보를 받는다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_10_input"] = function () {
  let code = "input()\nline = input()\nvalues = line.split(',')\nindex = int(values[0])\nduty  = int(values[1])\n";
  return code;
};

Blockly.Blocks["code_car_10_print"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("입력받은 정보 결과창에 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_10_print"] = function () {
  let code = "print('index =', index, ', duty =', duty)\n";
  return code;
};

// Session 04.11

Blockly.Blocks["code_car_11_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_11_ready"] = function () {
  let code = 'import asomecar\nimport hcsr04\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\nline = AnalogPin()\n';
  return code;
};

Blockly.Blocks["code_car_11_move_forward"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("전진하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_11_move_forward"] = function () {
  let code = 'asomecar.forward()\n';
  return code;
};

Blockly.Blocks["code_car_11_turn"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("방향을 바꾼다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_11_turn"] = function () {
  let code = 'asomecar.backward()\ndelay(2)\nasomecar.turn_left()\ndelay(1)\n';
  return code;
};

Blockly.Blocks["code_car_11_print_yes"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"Yes"를 결과창에 표시하기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_11_print_yes"] = function () {
  let code = 'print("Yes")\n';
  return code;
};

Blockly.Blocks["code_car_11_print_no"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('"No"를 결과창에 표시하기')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_11_print_no"] = function () {
  let code = 'print("No")\n';
  return code;
};

Blockly.Blocks["code_car_11_obstacle"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("장애물 발견 또는 바닥에 검은 부분 발견")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_11_obstacle"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if (cm < 10) or (line.read() < 100):\n" + branch;
  return code;
};

Blockly.Blocks["code_car_11_cm_line_if_else"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField('장애물의 거리가 짧거나 바닥이 어두운가?')
    this.setPreviousStatement(true, null);
    // this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
    
    // this.appendValueInput("if_value")
    //   .setCheck("센서 값이 50이 넘는가?")
    this.appendStatementInput('if_state')
      .appendField('')
    this.appendStatementInput('if_state_else')
      .appendField('아니면');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};  

javascriptGenerator["code_car_11_cm_line_if_else"] = function (block) {
  const variable = javascriptGenerator.statementToCode(block, 'if_state');
  const ineq = javascriptGenerator.statementToCode(block, 'if_state_else');
  var code = 'if (cm < 10) or (line.read() < 100):\n'+variable+'else:\n'+ineq;
  return code;
};

// Session 04.12

Blockly.Blocks["code_car_12_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_ready"] = function () {
  let code = 'import interval\ns = InputPin(12)\ntimer = interval.create()\ncount = 0\nold_value = 0\n';
  return code;
};

Blockly.Blocks["code_car_12_line_read"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("라인센서 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_line_read"] = function () {
  let code = 'value = s.value()\n';
  return code;
};

Blockly.Blocks["code_car_12_print_count"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("검은 선 개수 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_print_count"] = function () {
  let code = 'print(count)\ntimer.start()\ncount = 0\n';
  return code;
};

Blockly.Blocks["code_car_12_timer_start"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("시간 측정 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_timer_start"] = function () {
  let code = 'timer.start()\n';
  return code;
};

Blockly.Blocks["code_car_12_timer_reset"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("검은 선 위면 시간 측정을 초기화")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_timer_reset"] = function () {
  let code = `if value == 1:
  timer.start()
`;
  return code;
};

Blockly.Blocks["code_car_12_count_1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("변화 감지 이후 검은 선이면 count 값 증가")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_count_1"] = function () {
  let code = `if value != old_value:
  if value == 1:
    count = count + 1
`;
  return code;
};

Blockly.Blocks["code_car_12_count_1_minus"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("0.1초마다 count의 값을 1만큼 줄이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_count_1_minus"] = function () {
  let code = `if timer.is_active() and (count > 0):
  count = count - 1
`;
  return code;
};

Blockly.Blocks["code_car_12_save_value"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("현재 상태를 저장")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_12_save_value"] = function () {
  let code = 'old_value = value\n';
  return code;
};

Blockly.Blocks["code_car_12_line_out"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("1초 동안 검은 선이 없었나")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_12_line_out"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "if timer.get() > 1000:\n" + branch;
  return code;
};

// Session 04.13

Blockly.Blocks["code_car_13_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_ready"] = function () {
  let code = 'import maze_maker\nimport button\nbt = button.create(6)\npath = [\n[0, 9, 9, 9, 9, 0, 0, 0, 0, 0],\n[0, 9, 9, 9, 9, 0, 9, 9, 9, 0],\n[0, 0, 0, 0, 0, 0, 9, 0, 0, 0],\n[9, 0, 9, 0, 9, 0, 9, 9, 9, 9],\n[9, 0, 9, 0, 9, 0, 0, 0, 0, 9],\n[9, 0, 9, 0, 9, 9, 9, 9, 0, 9],\n[9, 0, 9, 0, 9, 9, 9, 9, 0, 0],\n[0, 0, 9, 0, 0, 0, 0, 0, 9, 0]\n]\n';
  return code;
};

Blockly.Blocks["code_car_13_maze_show"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("미로 가상화면 보이기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_maze_show"] = function () {
  let code = 'maze_maker.show()\n';
  return code;
};

Blockly.Blocks["code_car_13_maze_set_009"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("(0, 0) 좌표를 벽으로 변경하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_maze_set_009"] = function () {
  let code = 'maze_maker.set_cell_type(0, 0, 9)\n';
  return code;
};

Blockly.Blocks["code_car_13_maze_set_119"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("(1, 1) 좌표를 벽으로 변경하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_maze_set_119"] = function () {
  let code = 'maze_maker.set_cell_type(1, 1, 9)\n';
  return code;
};

Blockly.Blocks["code_car_13_maze_set_110"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("(1, 1) 좌표의 벽을 제거하기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_maze_set_110"] = function () {
  let code = 'maze_maker.set_cell_type(1, 1, 0)\n';
  return code;
};

Blockly.Blocks["code_car_13_set_maze"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("현재 위치의 미로를 그린다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_set_maze"] = function () {
  let code = 'maze_maker.set_cell_type(x, y, path[y][x])\n';
  return code;
};

Blockly.Blocks["code_car_13_bt_wait"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("버튼이 클릭될 때까지 기다린다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_13_bt_wait"] = function () {
  let code = `while True:
  if bt.is_clicked():
    break
`;
  return code;
};

Blockly.Blocks["code_car_13_for_x"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("가로 축 반복")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_13_for_x"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for x in range(10):\n" + branch;
  return code;
};

Blockly.Blocks["code_car_13_for_y"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("세로 축 반복")
    this.appendStatementInput('while_state')
    .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
  },
};

javascriptGenerator["code_car_13_for_y"] = function (block) {
  let branch = javascriptGenerator.statementToCode(block, 'while_state');
  var code = "for y in range(8):\n" + branch;
  return code;
};

// Session 04.14

Blockly.Blocks["code_car_14_ready"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("프로그램 준비 및 시작")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_ready"] = function () {
  let code = `import maze_maker
import button
bt = button.create(6)
path = [
  [0, 9, 9, 9, 9, 0, 0, 0, 0, 0],
  [0, 9, 9, 9, 9, 0, 9, 9, 9, 0],
  [0, 0, 0, 0, 0, 0, 9, 0, 0, 0],
  [9, 0, 9, 0, 9, 0, 9, 9, 9, 9],
  [9, 0, 9, 0, 9, 0, 0, 0, 0, 9],
  [9, 0, 9, 0, 9, 9, 9, 9, 0, 9],
  [9, 0, 9, 0, 9, 9, 9, 9, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 9, 0]
]
`;
  return code;
};

Blockly.Blocks["code_car_14_set_maze"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("배열 정보대로 미로를 그린다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_set_maze"] = function () {
  let code = `for y in range(8):
  for x in range(10):
    maze_maker.set_cell_type(x, y, path[y][x])
`;
  return code;
};

Blockly.Blocks["code_car_14_cell_type_break"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("다음 이동할 곳이 벽이면 반복을 중단")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_cell_type_break"] = function () {
  let code = `if cell_type >= 9:
  break
`;
  return code;
};

Blockly.Blocks["code_car_14_find_next_move"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("다음에 이동할 곳 검색")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_find_next_move"] = function () {
  let code = '(cell_type, dx, dy) = maze_maker.find_next_move(path, dx, dy)\n';
  return code;
};

Blockly.Blocks["code_car_14_move_xy"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("찾아낸 위치로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_move_xy"] = function () {
  let code = 'maze_maker.move_xy(dx, dy)\n';
  return code;
};

Blockly.Blocks["code_car_14_path"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("이미 지나간 자리에 표시")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_path"] = function () {
  let code = 'path[dy][dx] = path[dy][dx] + 1\n';
  return code;
};

Blockly.Blocks["code_car_14_star"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("별을 시작 위치로 이동")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_star"] = function () {
  let code = 'dx = 0\ndy = 0\npath[dy][dx] = path[dy][dx] + 1\n';
  return code;
};

Blockly.Blocks["code_car_14_delay"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("0.2초 기다린다")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["code_car_14_delay"] = function () {
  let code = 'delay(0.2)\n';
  return code;
};

Blockly.Blocks["common_delay_0.01"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (0.01초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_0.01"] = function () {
  let code = 'delay(0.01)\n';
  return code;
};

Blockly.Blocks["common_delay_0.02"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (0.02초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_0.02"] = function () {
  let code = 'delay(0.02)\n';
  return code;
};

Blockly.Blocks["common_delay_0.1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (0.1초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_0.1"] = function () {
  let code = 'delay(0.1)\n';
  return code;
};

Blockly.Blocks["common_delay_0.2"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (0.2초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_0.2"] = function () {
  let code = 'delay(0.2)\n';
  return code;
};

Blockly.Blocks["common_delay_0.5"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (0.5초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_0.5"] = function () {
  let code = 'delay(0.5)\n';
  return code;
};

Blockly.Blocks["common_delay_1"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (1초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_1"] = function () {
  let code = 'delay(1)\n';
  return code;
};

Blockly.Blocks["common_delay_2"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (2초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_2"] = function () {
  let code = 'delay(2)\n';
  return code;
};

Blockly.Blocks["common_delay_3"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (3초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_3"] = function () {
  let code = 'delay(3)\n';
  return code;
};

Blockly.Blocks["common_delay_5"] = {
  init: function () {
    this.appendDummyInput()
    // .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/icons/asomekit.png', 23, 23, '*'))
    .appendField("기다리기 (5초)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("50a560");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["common_delay_5"] = function () {
  let code = 'delay(5)\n';
  return code;
};