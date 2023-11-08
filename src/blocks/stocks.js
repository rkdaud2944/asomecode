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
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1))
      .appendField("걸음 앞으로 걷기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["walk_step_forward"] = function () {
  var code = 'for i in range(1): asomebot.forward()\n';
  return code;
};


Blockly.Blocks["walk_step_back"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1))
      .appendField("걸음 뒤로 걷기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["walk_step_back"] = function () {
  var code = 'for i in range(1): asomebot.backward()\n';
  return code;
};

Blockly.Blocks["walk_step_left"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1))
      .appendField("걸음 왼쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["walk_step_left"] = function (block) {
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

Blockly.Blocks["walk_step_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1))
      .appendField("걸음 오른쪽으로 회전")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["walk_step_right"] = function (block) {
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

Blockly.Blocks["walk_motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField(new Blockly.FieldNumber(1))
      .appendField("번 모터")
    this.appendDummyInput()
      .appendField("각도")
      .appendField(new Blockly.FieldNumber(90))
      .appendField(", 회전시간")
      .appendField(new Blockly.FieldNumber(1))
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["walk_motor_angle"] = function (block) {
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

Blockly.Blocks["walk_all_motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("각 모터의 각도")
    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(90))
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90))
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90))
      .appendField(",")
      .appendField(new Blockly.FieldNumber(90))
    this.appendDummyInput()
      .appendField("회전시간")
      .appendField(new Blockly.FieldNumber(1))
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_all_motor_angle"] = function (block) {
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

Blockly.Blocks["walk_forward"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("앞으로 걷기")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(150))
      .appendField(new Blockly.FieldNumber(300))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_forward"] = function (block) {
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

Blockly.Blocks["walk_back"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("뒤로 걷기")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(150))
      .appendField(new Blockly.FieldNumber(300))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_back"] = function (block) {
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

Blockly.Blocks["walk_left"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("왼쪽으로 회전")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(300))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_left"] = function (block) {
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

Blockly.Blocks["walk_right"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("오른쪽으로 회전")
    this.appendDummyInput()
      .appendField("속도")
      .appendField(new Blockly.FieldNumber(300))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF9A00");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["walk_right"] = function (block) {
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

// BOT DANCE CODE

Blockly.Blocks["dance_ballet"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("발레")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_ballet"] = function (block) {
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

Blockly.Blocks["dance_wiggle"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("위글")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_wiggle"] = function (block) {
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

Blockly.Blocks["dance_flap"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("플랩")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_flap"] = function (block) {
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

Blockly.Blocks["dance_mouse"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("마우스")
      .appendField(new Blockly.FieldTextInput("left"))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_mouse"] = function (block) {
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

Blockly.Blocks["dance_warigari"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("와리가기")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_warigari"] = function (block) {
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

Blockly.Blocks["dance_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_swing"] = function (block) {
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

Blockly.Blocks["dance_right_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("오른쪽 스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_right_swing"] = function (block) {
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

Blockly.Blocks["dance_left_swing"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("왼쪽 스윙")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_left_swing"] = function (block) {
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

Blockly.Blocks["dance_tick_tock"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("틱톡")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_tick_tock"] = function (block) {
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

Blockly.Blocks["dance_yaho"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("야호")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_yaho"] = function (block) {
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

Blockly.Blocks["dance_moonwalk"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("문워크")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("FF61FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["dance_moonwalk"] = function (block) {
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

javascriptGenerator["sensor_ultrasonic"] = function (block) {
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

javascriptGenerator["sound_buzzer_on"] = function (block) {
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

Blockly.Blocks["sound_buzzer_off"] = {
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

javascriptGenerator["sound_buzzer_off"] = function (block) {
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

Blockly.Blocks["sound_bot_hz"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("주파수로 소리내기")
    this.appendDummyInput()
      .appendField("주파수")
      .appendField(new Blockly.FieldNumber(0))
      .appendField("Hz, 연주시간")
      .appendField(new Blockly.FieldNumber(1))
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["sound_bot_hz"] = function (block) {
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

Blockly.Blocks["sound_bot_scale"] = {
  init: function () { 
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("음계로 소리내기")
    this.appendDummyInput()
      .appendField("음계")
      .appendField(new Blockly.FieldNumber(0))
      .appendField(",옥타브")
      .appendField(new Blockly.FieldNumber(1))
      .appendField(",연주시간")
      .appendField(new Blockly.FieldNumber(1))
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("EC1961");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  },
};

javascriptGenerator["sound_bot_scale"] = function (block) {
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

// BOT ADVANCE CODE

Blockly.Blocks["advance_waiting"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField("기다리기")
      .appendField(new Blockly.FieldNumber(1))
      .appendField("초")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("55A55B");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["advance_waiting"] = function (block) {
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

Blockly.Blocks["advance_repeat"] = {
  init: function () {
    this.appendDummyInput()
      .appendField('반복하기')
      .appendField(new Blockly.FieldNumber(1))
      .appendField('번')
    this.appendStatementInput('DO')
      .appendField('');
    this.setColour("55A55B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
  },
};

javascriptGenerator["advance_repeat"] = function (block) {
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
