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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("손동작 감지 준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sensor_hand_detection"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_hand_check"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("손동작 체크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sensor_hand_check"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// BOT SOUND CODE

Blockly.Blocks["sound_buzzer_on"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
  console.log(repeat_times)
  if (typeof javascriptGenerator === 'undefined' || javascriptGenerator === null) {
    console.error("javascriptGenerator is not defined!");
    return;
  }

  var branch = javascriptGenerator.statementToCode(block, 'do_state');

  let code = '';
  code += 'for (var i = 0; i < ' + repeat_times + '; i++) {\n';
  code += branch; // 내부 코드 블록 추가
  code += '}\n';
    
  return code;
};

Blockly.Blocks["advance_endless_repeat"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('무한 반복')
    this.appendStatementInput('DO')
      .appendField('');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
  },
};

javascriptGenerator["advance_endless_repeat"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["advance_if"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('만약에')
      .appendField(new Blockly.FieldVariable("i"))
      .appendField(new Blockly.FieldVariable("=="))
    this.appendValueInput("Fetch")
      .setCheck("Number")
    this.appendStatementInput('DO')
      .appendField('')
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};

javascriptGenerator["advance_if"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
 };

Blockly.Blocks["advance_elseif"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('만약에')
      .appendField(new Blockly.FieldVariable("i"))
      .appendField(new Blockly.FieldVariable("=="))
    this.appendValueInput("Fetch")
      .setCheck("Number")
    this.appendStatementInput('DO')
      .appendField('')
    this.appendStatementInput('DO')
      .appendField('아니라면');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setInputsInline(true);
  },
};

javascriptGenerator["advance_elseif"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldNumber("1"))
    this.setOutput(true, 'Number');
    this.setColour("55A55B");
  },
};

javascriptGenerator["int"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["mark_int"] = {
  init: function () {
    this.appendDummyInput('VALUE')
      .appendField(new Blockly.FieldTextInput("가"))
    this.setOutput(true);
    this.setColour("55A55B");
  },
};

javascriptGenerator["mark_int"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["screen"] = {
  init: function () {
    this.appendDummyInput()
    .appendField("화면 표시")
    .appendField(new Blockly.FieldNumber(1))
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, "String");
  this.setColour("55A55B");
  this.setTooltip("buy id");
  this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["screen"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["break"] = {
  init: function () {
    this.appendDummyInput()
    .appendField("Break")
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, "String");
  this.setColour("55A55B");
  this.setTooltip("buy id");
  this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["break"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["variable"] = {
  init: function () {
  this.appendDummyInput()
    .appendField('변수')
    .appendField(new Blockly.FieldVariable("i"))
    .appendField('=')
  this.appendValueInput("Fetch")
    .setCheck("Number")
  this.setColour("55A55B");
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, "String");
  this.setInputsInline(true);
  },
};

javascriptGenerator["variable"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// BOT INTERNET CODE

Blockly.Blocks["internet_connect"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("인터넷 접속하기")
    this.appendDummyInput()
      .appendField("아이디")
      .appendField(new Blockly.FieldNumber(''))
    this.appendDummyInput()
      .appendField("비밀번호")
      .appendField(new Blockly.FieldNumber(''))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["internet_connect"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["nonpass_wifi"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("비밀번호 없는 와이파이 연결하기")
    this.appendDummyInput()
      .appendField("아이디")
      .appendField(new Blockly.FieldNumber(''))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["nonpass_wifi"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["get_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("메세지 받을 준비")
      .appendField(new Blockly.FieldNumber('1234'))
      .appendField("포트")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["get_message"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("메세지 읽어오기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["message"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["send_message"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("메세지 보내기")
    this.appendDummyInput()
      .appendField("보낼 메세지")
      .appendField(new Blockly.FieldNumber())
      .appendField(",보낼 대상")
      .appendField(new Blockly.FieldNumber())
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["send_message"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["get_weather"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("날씨 데이터 가져오기 [")
      .appendField(new Blockly.FieldNumber())
      .appendField(new Blockly.FieldNumber())
      .appendField("]")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("B666FC");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["get_weather"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// KIT BASIC CODE

Blockly.Blocks["basic_kit_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("LED 준비")
      .appendField(new Blockly.FieldNumber(4))
      .appendField(new Blockly.FieldNumber(5))
      .appendField(new Blockly.FieldNumber(6))
      .appendField(new Blockly.FieldNumber(7))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};  

javascriptGenerator["prepare_led_ready"] = function () {
  var code = 'turnoff_pins()\n';
  return code;
};

Blockly.Blocks["prepare_RGBled_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("RGB LED 준비")
      .appendField(new Blockly.FieldNumber(5))
      .appendField(new Blockly.FieldNumber(6))
      .appendField(new Blockly.FieldNumber(7))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_RGBled_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_button_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("버튼 준비")
      .appendField(new Blockly.FieldNumber(6))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_button_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_music_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("음악 준비")
      .appendField(new Blockly.FieldNumber(8))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_music_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_buzzer_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("부저 준비")
      .appendField(new Blockly.FieldNumber(8))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_buzzer_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_tm_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("온습도 센서 준비")
      .appendField(new Blockly.FieldNumber(5))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_tm_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_ledtube_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("LED 튜브 준비")
      .appendField(new Blockly.FieldNumber(3))
      .appendField(new Blockly.FieldNumber(4))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_ledtube_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_vibration_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("진동 센서 준비")
      .appendField(new Blockly.FieldNumber(7))
      .appendField(new Blockly.FieldNumber(1000))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_vibration_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["prepare_ultrasonic_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("초음파 센서 준비")
      .appendField(new Blockly.FieldNumber(5))
      .appendField(new Blockly.FieldNumber(6))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["prepare_ultrasonic_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// KIT LED CODE

Blockly.Blocks["led_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldVariable("Red"))
      .appendField("LED")
      .appendField(new Blockly.FieldVariable("On"))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["led_setting"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldVariable("Red"))
      .appendField("밝기 설정")
      .appendField(new Blockly.FieldNumber(0))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["led_setting"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["led_ledtube_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("LED 튜브에 표시")
      .appendField(new Blockly.FieldVariable("i"))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_ready"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["led_ledtube_time"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("LED 튜브에 시간표시")
      .appendField(new Blockly.FieldVariable("h"))
      .appendField(new Blockly.FieldVariable("m"))
      .appendField(new Blockly.FieldVariable("True"))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// KIT BUTTON CODE

Blockly.Blocks["button_push"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("버튼이 눌러졌는가?")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4CC1B9");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["button_info"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("버튼 정보 읽기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("4CC1B9");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// KIT SENSOR CODE

Blockly.Blocks["sensor_humidity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("습도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_temperature"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("온도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_water_level"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("수위 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_brightness"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("밝기 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_sound"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("소리 감지")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sensor_ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_soil_humidity"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("토양 습도 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_vibration_sensor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("진동 센서 감지")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// KIT SOUND CODE

Blockly.Blocks["sound_buzzer_onoff"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("부저")
      .appendField(new Blockly.FieldVariable("On"))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// CAR BASIC CODE

Blockly.Blocks["basic_ready"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// CAR MOVE CODE

Blockly.Blocks["move_stop"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("멈추기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_forward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("앞으로 가기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_back"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("뒤로 가기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_left_fixed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("왼쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_right_fixed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("오른쪽으로 제자리 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_speed_one"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("속도 조절")
      .appendField(new Blockly.FieldVariable("0"))
      .appendField("번")
      .appendField(new Blockly.FieldNumber(60))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["move_speed_all"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("속도 조절")
      .appendField(new Blockly.FieldNumber(0))
      .appendField(new Blockly.FieldNumber(0))
      .appendField(new Blockly.FieldNumber(0))
      .appendField(new Blockly.FieldNumber(0))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

// CAR SENSOR CODE

Blockly.Blocks["sensor_light"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("밝기 재기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["sensor_linesensor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("라인센서 체크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FFCD00");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["ledtube_time"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};
