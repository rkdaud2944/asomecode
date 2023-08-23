import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

// BOT BASIC CODE

Blockly.Blocks["basic_reday"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("준비")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
    
  },
};

javascriptGenerator["basic_reday"] = function (block) {
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

Blockly.Blocks["basic_attention"] = {
  init: function () {
    
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("차렷")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("buy id");
  },
};

javascriptGenerator["basic_attention"] = function (block) {
  var value_number = javascriptGenerator.valueToCode(
    block,
    "Number",
    javascriptGenerator.ORDER_ATOMIC
  );
  var value_name = javascriptGenerator.valueToCode(
    block,
    "NAME",
    javascriptGenerator.ORDER_ATOMIC
  );
  var code = `buy(${value_number},${value_name},${value_name});\n`;
  return code;
};

Blockly.Blocks["Motor_angle"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents2/coding/html/common/images/asomebot/clarify.png', 23, 23, '*'))
      .appendField("모터 각도 조절");

    this.appendDummyInput()
      .appendField(new Blockly.FieldNumber(90))
      .appendField(new Blockly.FieldNumber(90))
      .appendField(new Blockly.FieldNumber(90))
      .appendField(new Blockly.FieldNumber(90))
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, "String");
    this.setColour("14A2FF");
    this.setTooltip("4개의 모터 각도를 입력하는 블록");
  },
};

javascriptGenerator["Motor_angle"] = function (block) {
  var value_fetch = javascriptGenerator.valueToCode(
    block,
    "Fetch",
    javascriptGenerator.ORDER_ATOMIC
  );
  var variable_variable = javascriptGenerator.nameDB_.getName(
    block.getFieldValue("variable"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  var code = `fetch_price(${value_fetch},${variable_variable});\n`;
  return code;
};


// BOT WALK CODE

Blockly.Blocks["walk_forward"] = {
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

