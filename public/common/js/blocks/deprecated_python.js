// Advance
Blockly.Python['asomecar_at_the_side'] = function(block) {
    var string_key = Blockly.Python.variableDB_.getName(block.getFieldValue('if_key'), Blockly.VARIABLE_CATEGORY_NAME);
    var dropdown_condition = block.getFieldValue('if_condition');
    var number_side = block.getFieldValue('side');
    var statements_if = Blockly.Python.statementToCode(block, 'if_state');
    var code = 'if '+string_key+' '+dropdown_condition+' '+number_side+':\n'+statements_if;
    return code;
};

Blockly.Msg["COMMON_INTERNET_GET_WEATHER"] = "Get weather data %2";
Blockly.Python['common_internet_get_weather'] = function(block) {
    let string_location_name = block.getFieldValue('location_name');
    let code = 'import internet\ninternet.get_weather("'+string_location_name.trim()+'")\n';
    return code;
};

Blockly.Msg["COMMON_WAIT_FOR_SECS"] = "Wait for %1 secs.";
Blockly.Python['common_wait_for_secs'] = function(block) {
    let number_secs = block.getFieldValue('secs');
    let code = 'timer.wait(' + number_secs + '*1000)\n';
    return code;
};

Blockly.Msg["COMMON_START_TIMER"] = "Start timer";
Blockly.Python['common_start_timer'] = function(block) {
    let code = 'import scheduler\ntimer = scheduler.create()\ntimer.start()\n';
    return code;
};
