Blockly.Python['asomekit_ready'] = function(block) {
  let code = '';
  return code;
};

Blockly.Python['asomekit_turn_off_pins'] = function(block) {
  let code = 'turnoff_pins()\n';
  return code;
};

// Prepare
Blockly.Python['asomekit_prepare_led'] = function(block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let number_pin3 = block.getFieldValue('pin3_number');
  let number_pin4 = block.getFieldValue('pin4_number');
  let code = 'red = OutputPin('+number_pin1+')\nyellow = OutputPin('+number_pin2+')\ngreen = OutputPin('+number_pin3+')\nbright = OutputPin('+number_pin4+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_rgb'] = function(block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let number_pin3 = block.getFieldValue('pin3_number');
  let code = 'r = ServoPin('+number_pin1+')\ng = ServoPin('+number_pin2+')\nb = ServoPin('+number_pin3+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_button'] = function(block) {
  var bt = Blockly.Python.variableDB_.getName('bt', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(bt);
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import button\nbt = button.create('+number_pin+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_sound'] = function(block) {
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import music\nmusic.open('+number_pin+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_buzzer'] = function(block) {
  var buzzer = Blockly.Python.variableDB_.getName('buzzer', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(buzzer);
  let number_pin = block.getFieldValue('pin_number');
  let code = 'buzzer = OutputPin('+number_pin+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_dht'] = function(block) {
  var ht = Blockly.Python.variableDB_.getName('ht', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(ht);
  let number_pin = block.getFieldValue('pin_number');
  let code = 'import dht11\nht = dht11.create('+number_pin+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_led_tube'] = function(block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let code = 'import tm1637\ntm1637.open('+number_pin1+', '+number_pin2+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_vibration_sensor'] = function(block) {
  var vs = Blockly.Python.variableDB_.getName('vs', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(vs);
  let number_pin = block.getFieldValue('pin_number');
  let number_secs = block.getFieldValue('secs');
  let code = 'import vibration_sensor\nvs = vibration_sensor.create('+number_pin+', '+number_secs+')\n';
  return code;
};

Blockly.Python['asomekit_prepare_ultrasonic_sensor'] = function(block) {
  let number_pin1 = block.getFieldValue('pin1_number');
  let number_pin2 = block.getFieldValue('pin2_number');
  let code = 'import hcsr04\nhcsr04.open('+number_pin1+', '+number_pin2+')\n';
  return code;
};

// LED
Blockly.Python['asomekit_led_color'] = function(block) {
  let string_color = block.getFieldValue('color');
  let string_turn_on_off = block.getFieldValue('turn_on_off');

  let code = string_color+'.'+string_turn_on_off+'()\n';
  return code;
};

Blockly.Python['asomekit_led_bright'] = function(block) {
  let string_turn_on_off = block.getFieldValue('turn_on_off');

  let code = 'bright.'+string_turn_on_off+'()\n';
  return code;
};

Blockly.Python['asomekit_led_set_brightness'] = function(block) {
  let string_rgb = block.getFieldValue('rgb');
  let number_duty = block.getFieldValue('duty');

  let code = string_rgb+'.duty('+number_duty+')\n';
  return code;
};

Blockly.Python['asomekit_display_tube'] = function(block) {
  var var_tube = Blockly.Python.variableDB_.getName(block.getFieldValue('tube'), Blockly.VARIABLE_CATEGORY_NAME);
  let code = 'tm1637.number('+var_tube+')\n';
  return code;
};

Blockly.Python['asomekit_display_tube_time'] = function(block) {
  var number_tube_h = Blockly.Python.variableDB_.getName(block.getFieldValue('tube_h'), Blockly.VARIABLE_CATEGORY_NAME);
  var number_tube_m = Blockly.Python.variableDB_.getName(block.getFieldValue('tube_m'), Blockly.VARIABLE_CATEGORY_NAME);
  let string_true_false = block.getFieldValue('true_false');

  let code = 'tm1637.time('+number_tube_h+','+number_tube_m+','+string_true_false+')\n';
  return code;
};

// Button
Blockly.Python['asomekit_check_button_clicked'] = function(block) {
  var clicked = Blockly.Python.variableDB_.getName('clicked', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(clicked);
  let code = 'clicked = bt.is_clicked()\n';
  return code;
};

Blockly.Python['asomekit_check_button_value'] = function(block) {
  var bt_value = Blockly.Python.variableDB_.getName('bt_value', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(bt_value);
  let code = 'bt_value = bt.value()\n';
  return code;
};


// Sensor
Blockly.Python['asomekit_measure_distance'] = function(block) {
  var cm = Blockly.Python.variableDB_.getName('cm', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(cm);
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Python['asomekit_measure_humidity'] = function(block) {
  var humidity = Blockly.Python.variableDB_.getName('humidity', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(humidity);
  let code = 'ht.measure()\nhumidity = ht.humidity()\n';
  return code;
};

Blockly.Python['asomekit_measure_temperature'] = function(block) {
  var temperature = Blockly.Python.variableDB_.getName('temperature', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(temperature);
  let code = 'ht.measure()\ntemperature = ht.temperature()\n';
  return code;
};

Blockly.Python['asomekit_check_water_sensor'] = function(block) {
  var water = Blockly.Python.variableDB_.getName('water', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(water);
  let code = 'water = AnalogPin().read()\n';
  return code;
};

Blockly.Python['asomekit_check_light_sensor'] = function(block) {
  var light = Blockly.Python.variableDB_.getName('light', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(light);
  let code = 'light = AnalogPin().read()\n';
  return code;
};

Blockly.Python['asomekit_check_sound_sensor'] = function(block) {
  var sound = Blockly.Python.variableDB_.getName('sound', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(sound);
  let code = 'sound = AnalogPin().read()\n';
  return code;
};

Blockly.Python['asomekit_check_moisture_sensor'] = function(block) {
  var moisture = Blockly.Python.variableDB_.getName('moisture', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(moisture);
  let code = 'moisture = AnalogPin().read()\n';
  return code;
};

Blockly.Python['asomekit_check_vibration_sensor'] = function(block) {
  var vibration = Blockly.Python.variableDB_.getName('vibration', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(vibration);
  let code = 'vibration = vs.is_active()\n';
  return code;
};


// Sound
Blockly.Python['asomekit_buzzer_onoff'] = function(block) {
  let string_turn_on_off = block.getFieldValue('turn_on_off');

  let code = 'buzzer.'+string_turn_on_off+'()\n';
  return code;
};

Blockly.Python['asomekit_music_tone'] = function(block) {
  let number_tone = block.getFieldValue('tone');
  let number_secs = block.getFieldValue('secs');
  let code = 'music.tone('+number_tone+')\ndelay('+number_secs+')\nmusic.mute()\n';
  return code;
};

Blockly.Python['asomekit_music_note'] = function(block) {
  let string_scale = block.getFieldValue('scale');
  let number_octave = block.getFieldValue('octave');
  let number_secs = block.getFieldValue('secs');
  let code = 'music.note("'+string_scale+number_octave+'",'+number_secs+'*1000)\n';
  return code;
};