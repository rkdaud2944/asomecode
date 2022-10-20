
Blockly.Python['asomecar_ready'] = function(block) {
  let code = 'import asomecar\nimport hcsr04\nimport line_sensor\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\nline_sensor.ready()\n';
  return code;
};


Blockly.Python['asomecar_move_stop'] = function(block) {
  let code = 'asomecar.stop()\n';
  return code;
};

Blockly.Python['asomecar_move_forward'] = function(block) {
  let code = 'asomecar.forward()\n';
  return code;
};

Blockly.Python['asomecar_move_backward'] = function(block) {
  let code = 'asomecar.backward()\n';
  return code;
};

Blockly.Python['asomecar_rotate_left'] = function(block) {
  let code = 'asomecar.turn_left()\n';
  return code;
};

Blockly.Python['asomecar_rotate_right'] = function(block) {
  let code = 'asomecar.turn_right()\n';
  return code;
};

Blockly.Python['asomecar_turn_left'] = function(block) {
  let code = 'asomecar.to_left()\n';
  return code;
};

Blockly.Python['asomecar_turn_right'] = function(block) {
  let code = 'asomecar.to_right()\n';
  return code;
};

Blockly.Python['asomecar_set_speed_of_motor'] = function(block) {
  let number_motor_number = block.getFieldValue('motor_number');
  let number_motor_speed = block.getFieldValue('motor_speed');
  let code = 'asomecar.servos['+number_motor_number+'].duty('+number_motor_speed+')\n';
  return code;
};

Blockly.Python['asomecar_move'] = function(block) {
  let number_move1 = block.getFieldValue('move1');
  let number_move2 = block.getFieldValue('move2');
  let number_move3 = block.getFieldValue('move3');
  let number_move4 = block.getFieldValue('move4');
  let code = 'asomecar.move('+number_move1+','+number_move2+','+number_move3+','+number_move4+')\n';
  return code;
};


// Sensor

Blockly.Python['asomecar_prepare_motion_detect'] = function(block) {
  let code = 'import motion_detect\nmotion_detect.start()\n';
  return code;
};

Blockly.Python['asomecar_check_motion'] = function(block) {
  var motion = Blockly.Python.variableDB_.getName('motion', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(motion);
  let code = 'cm = hcsr04.get_distance()\nmotion = motion_detect.get(cm)\n';
  return code;
};

Blockly.Python['asomecar_measure_distance'] = function(block) {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Python['asomecar_measure_light_intensity'] = function(block) {
  var light = Blockly.Python.variableDB_.getName('light', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(light);
  let code = 'light = line_sensor.right.read()\n';
  return code;
};

Blockly.Python['asomecar_check_line_sensor'] = function(block) {
  var line = Blockly.Python.variableDB_.getName('line', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(line);
  let code = 'line = line_sensor.read()\n';
  return code;
};
