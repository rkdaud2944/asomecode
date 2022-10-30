
Blockly.Python['asomebot_ready'] = function(block) {
  let number_steps = block.getFieldValue('steps');
  let code = 'import asomebot\nimport hcsr04\nhcsr04.open(3, 2)\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Python['asomebot_home'] = function(block) {
  let code = 'asomebot.home()\n';
  return code;
};

Blockly.Python['asomebot_set_align'] = function(block) {
  let number_align1 = block.getFieldValue('align1');
  let number_align2 = block.getFieldValue('align2');
  let number_align3 = block.getFieldValue('align3');
  let number_align4 = block.getFieldValue('align4');
  let code = 'asomebot.align('+number_align1+','+number_align2+','+number_align3+','+number_align4+')\n';
  return code;
};

Blockly.Python['asomebot_move_forward'] = function(block) {
  let number_steps = block.getFieldValue('steps');
  let code = 'for i in range('+number_steps+'): asomebot.forward()\n';
  return code;
};

Blockly.Python['asomebot_move_forward_advance'] = function(block) {
  let number_speed1 = block.getFieldValue('speed1');
  let number_speed2 = block.getFieldValue('speed2');
  let number_repeat = block.getFieldValue('repeat');

  let code = 'for i in range(1): asomebot.forward(20,30,40,0,'+number_speed1+','+ number_speed2+')\n';
  return code;
};

Blockly.Python['asomebot_move_backward'] = function(block) {
  let number_steps = block.getFieldValue('steps');
  let code = 'for i in range('+number_steps+'): asomebot.backward()\n';
  return code;
};

Blockly.Python['asomebot_move_backward_advance'] = function(block) {
  let number_speed1 = block.getFieldValue('speed1');
  let number_speed2 = block.getFieldValue('speed2');

  let code = 'for i in range(1): asomebot.backward(20,30,40,0,'+number_speed1+','+ number_speed2+')\n';
  return code;
};

Blockly.Python['asomebot_turn_left'] = function(block) {
  let number_steps = block.getFieldValue('steps');
  let code = 'for i in range('+number_steps+'): asomebot.turn_left()\n';
  return code;
};

Blockly.Python['asomebot_turn_left_advance'] = function(block) {
  let number_speed = block.getFieldValue('speed');
  let number_repeat = block.getFieldValue('repeat');

  let code = 'for i in range(1): asomebot.turn_left(20,30,40,'+number_speed+')\n';
  return code;
};

Blockly.Python['asomebot_turn_right'] = function(block) {
  let number_steps = block.getFieldValue('steps');
  let code = 'for i in range('+number_steps+'): asomebot.turn_right()\n';
  return code;
};

Blockly.Python['asomebot_turn_right_advance'] = function(block) {
  let number_speed = block.getFieldValue('speed');
  let number_repeat = block.getFieldValue('repeat');

  let code = 'for i in range(1): asomebot.turn_right(20,30,40,'+number_speed+')\n';
  return code;
};

Blockly.Python['asomebot_angle_of_motor'] = function(block) {
  let number_count = block.getFieldValue('count');
  let number_angle = block.getFieldValue('angle');
  let number_secs = block.getFieldValue('secs');
  let code = 'asomebot.angles(['+number_count+'],['+number_angle+'-90],'+number_secs+'*1000)\n';
  return code;
};

Blockly.Python['asomebot_angles'] = function(block) {
  let number_angle1 = block.getFieldValue('angle1');
  let number_angle2 = block.getFieldValue('angle2');
  let number_angle3 = block.getFieldValue('angle3');
  let number_angle4 = block.getFieldValue('angle4');
  let number_secs = block.getFieldValue('secs');
  let code = 'asomebot.angles([0,1,2,3],['+number_angle1+'-90,'+number_angle2+'-90,'+number_angle3+'-90,'+number_angle4+'-90],'+number_secs+'*1000)\n';
  return code;
};

// ----- Dance
Blockly.Python['asomebot_ballet'] = function(block) {
  let code = 'asomebot.ballet()\n';
  return code;
};

Blockly.Python['asomebot_wiggle'] = function(block) {
  let code = 'asomebot.wiggle()\n';
  return code;
};

Blockly.Python['asomebot_flap'] = function(block) {
  let code = 'asomebot.flap()\n';
  return code;
};

Blockly.Python['asomebot_mouse'] = function(block) {
  let number_direction = block.getFieldValue('direction');
  let code = 'asomebot.mouse('+number_direction+')\n';
  return code;
};

Blockly.Python['asomebot_warigari'] = function(block) {
  let code = 'asomebot.warigari()\n';
  return code;
};

Blockly.Python['asomebot_swing'] = function(block) {
  let code = 'asomebot.swing()\n';
  return code;
};

Blockly.Python['asomebot_right_swing'] = function(block) {
  let code = 'asomebot.right_swing()\n';
  return code;
};

Blockly.Python['asomebot_left_swing'] = function(block) {
  let code = 'asomebot.left_swing()\n';
  return code;
};

Blockly.Python['asomebot_tick_tock'] = function(block) {
  let code = 'asomebot.tick_tock()\n';
  return code;
};

Blockly.Python['asomebot_yaho'] = function(block) {
  var code = 'asomebot.yaho()\n';
  return code;
};

Blockly.Python['asomebot_moonwalk'] = function(block) {
  var code = 'asomebot.moonwalk()\n';
  return code;
};


// Sensor
Blockly.Python['asomebot_measure_distance'] = function(block) {
  var cm = Blockly.Python.variableDB_.getName('cm', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(cm);
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Python['asomebot_prepare_motion_detect'] = function(block) {
  let code = 'import motion_detect\nmotion_detect.start()\n';
  return code;
};

Blockly.Python['asomebot_check_motion'] = function(block) {
  var motion = Blockly.Python.variableDB_.getName('motion', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(motion);
  let code = 'cm = hcsr04.get_distance()\nmotion = motion_detect.get(cm)\n';
  return code;
};

// Sound
Blockly.Python['asomebot_buzzer_on'] = function(block) {
  let code = 'asomebot.turn_off()\nimport music\nmusic.open(1)\n';
  return code;
};

Blockly.Python['asomebot_buzzer_off'] = function(block) {
  let code = '\nmusic.close()\nimport asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Python['asomebot_music_tone'] = function(block) {
  let number_tone = block.getFieldValue('tone');
  let number_secs = block.getFieldValue('secs');
  let code = 'music.tone('+number_tone+')\ndelay('+number_secs+')\nmusic.mute()\n';
  return code;
};

Blockly.Python['asomebot_music_note'] = function(block) {
  let string_scale = block.getFieldValue('scale');
  let number_octave = block.getFieldValue('octave');
  let number_secs = block.getFieldValue('secs');
  let code = 'music.note("'+string_scale+number_octave+'",'+number_secs+'*1000)\n';
  return code;
};

