Blockly.Python['common_delay'] = function (block) {
  let number_secs = block.getFieldValue('secs');
  let code = 'delay(' + number_secs + ')\n';
  return code;
};

Blockly.Python['common_repeat'] = function (block) {
  // Repeat n times.
  var repeat_times = block.getFieldValue('repeat_times');
  if (Blockly.isNumber(repeat_times)) {
    repeat_times = parseInt(repeat_times, 10);
  } else {
    repeat_times = 'int(' + repeat_times + ')';
  }
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var loopVar = Blockly.Python.variableDB_.getName('count', Blockly.VARIABLE_CATEGORY_NAME);

  Blockly.getMainWorkspace().createVariable(loopVar);

  var code = 'for ' + loopVar + ' in range(' + repeat_times + '):\n' + branch;
  return code;
};

Blockly.Python['common_repeat_infinitely'] = function (block) {
  // Repeat n times.
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'while True:\n' + branch;
  return code;
};

Blockly.Python['controls_condition_if'] = function (block) {
  var string_key = Blockly.Python.variableDB_.getName(block.getFieldValue('if_key'), Blockly.VARIABLE_CATEGORY_NAME);
  var dropdown_condition = block.getFieldValue('if_condition');
  var value_if_value = Blockly.Python.valueToCode(block, 'if_value', Blockly.Python.ORDER_ATOMIC);
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if ' + string_key + ' ' + dropdown_condition + ' ' + value_if_value + ':\n' + statements_if;
  return code;
};

Blockly.Python['controls_condition_if_else'] = function (block) {
  var string_key = Blockly.Python.variableDB_.getName(block.getFieldValue('if_key'), Blockly.VARIABLE_CATEGORY_NAME);
  var dropdown_condition = block.getFieldValue('if_condition');
  var value_if_value = Blockly.Python.valueToCode(block, 'if_value', Blockly.Python.ORDER_ATOMIC);
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if ' + string_key + ' ' + dropdown_condition + ' ' + value_if_value + ':\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

Blockly.Python['common_print'] = function (block) {
  var string_key = Blockly.Python.variableDB_.getName(block.getFieldValue('print_var'), Blockly.VARIABLE_CATEGORY_NAME);
  var code = 'print(' + string_key + ')\n';
  return code;
};

Blockly.Python['common_break'] = function (block) {
  var code = 'break;\n';
  return code;
};

Blockly.Python['common_set_var'] = function (block) {
  var var_name = Blockly.Python.variableDB_.getName(block.getFieldValue('var_name'), Blockly.VARIABLE_CATEGORY_NAME);
  var set_value = Blockly.Python.valueToCode(block, 'set_value', Blockly.Python.ORDER_ATOMIC);
  var code = '';

  if (set_value != '') {
    code = var_name + '=' + set_value + '\n';
  }


  reloadToolbox();
  return code;
};

Blockly.Python['common_internet_get_weather_data'] = function (block) {
  var string_city = block.getFieldValue('city');
  var string_country = block.getFieldValue('country');
  var weather = Blockly.Python.variableDB_.getName('weather', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(weather);
  var temp = Blockly.Python.variableDB_.getName('temp', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(temp);
  var humidity = Blockly.Python.variableDB_.getName('humidity', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(humidity);
  var code = 'import internet\nweather_data = internet.get_weather("' + string_city + '","' + string_country + '")\nweather = weather_data[0]\ntemp = weather_data[1]\nhumidity = weather_data[2]\n';
  return code;
};

// Internet
Blockly.Python['common_internet_connect'] = function (block) {
  let string_ssid = block.getFieldValue('ssid');
  let string_password = block.getFieldValue('password');
  let code = 'import internet\ninternet.connect("' + string_ssid.trim() + '","' + string_password.trim() + '")\n';
  return code;
};

Blockly.Python['common_internet_change_ap_mode'] = function (block) {
  let string_ssid = block.getFieldValue('ssid');
  let code = 'import internet\ninternet.open_ap("' + string_ssid.trim() + '")\n';
  return code;
};

Blockly.Python['common_internet_open_udp'] = function (block) {
  let number_port = block.getFieldValue('port');
  let code = 'import udp_socket\nudp_socket.open(' + number_port.trim() + ')\n';
  return code;
};

Blockly.Python['common_internet_read_udp'] = function (block) {
  var msg = Blockly.Python.variableDB_.getName('msg', Blockly.VARIABLE_CATEGORY_NAME);
  Blockly.getMainWorkspace().createVariable(msg);
  let code = 'msg = udp_socket.read_text()\n';
  return code;
};

Blockly.Python['common_internet_send_message'] = function (block) {
  let string_msg = block.getFieldValue('msg');
  let string_code = block.getFieldValue('code');
  let code = 'import internet\ninternet.send_msg("' + string_code.trim() + '","' + string_msg.trim() + '")\n';
  return code;
};

Blockly.Python['common_at_the_side'] = function (block) {
  var string_key = Blockly.Python.variableDB_.getName(block.getFieldValue('if_key'), Blockly.VARIABLE_CATEGORY_NAME);
  var dropdown_condition = block.getFieldValue('if_condition');
  var number_side = block.getFieldValue('side');
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if ' + string_key + ' ' + dropdown_condition + ' ' + number_side + ':\n' + statements_if;
  return code;
};


// delay
Blockly.Python['common_delay_0.01'] = function (block) {
  let code = 'delay(0.01)\n';
  return code;
};

Blockly.Python['common_delay_0.02'] = function (block) {
  let code = 'delay(0.02)\n';
  return code;
};

Blockly.Python['common_delay_0.05'] = function (block) {
  let code = 'delay(0.05)\n';
  return code;
};

Blockly.Python['common_delay_0.1'] = function (block) {
  let code = 'delay(0.1)\n';
  return code;
};

Blockly.Python['common_delay_0.2'] = function (block) {
  let code = 'delay(0.1)\n';
  return code;
};

Blockly.Python['common_delay_0.5'] = function (block) {
  let code = 'delay(0.5)\n';
  return code;
};

Blockly.Python['common_delay_1'] = function (block) {
  let code = 'delay(1)\n';
  return code;
};

Blockly.Python['common_delay_2'] = function (block) {
  let code = 'delay(2)\n';
  return code;
};

Blockly.Python['common_delay_3'] = function (block) {
  let code = 'delay(3)\n';
  return code;
};

Blockly.Python['common_delay_5'] = function (block) {
  let code = 'delay(5)\n';
  return code;
};

// 01.03
Blockly.Python['common_01.03_ready'] = function (block) {
  let code = '';
  return code;
};

Blockly.Python['13pin_connect'] = function (block) {
  let code = 'led = OutputPin(13)\n';
  return code;
};

Blockly.Python['13pin_on'] = function (block) {
  let code = 'led.on()\n';
  return code;
};

Blockly.Python['13pin_off'] = function (block) {
  let code = 'led.off()\n';
  return code;
};

// 01.04
Blockly.Python['common_01.04_ready'] = function (block) {
  let code = 'red = OutputPin(13)\nyellow = OutputPin(14)\ngreen = OutputPin(15)\n';
  return code;
};

Blockly.Python['red_led_on'] = function (block) {
  let code = 'red.on()\n';
  return code;
};

Blockly.Python['yellow_led_on'] = function (block) {
  let code = 'yellow.on()\n';
  return code;
};

Blockly.Python['green_led_on'] = function (block) {
  let code = 'green.on()\n';
  return code;
};

Blockly.Python['red_led_off'] = function (block) {
  let code = 'red.off()\n';
  return code;
};

Blockly.Python['yellow_led_off'] = function (block) {
  let code = 'yellow.off()\n';
  return code;
};

Blockly.Python['green_led_off'] = function (block) {
  let code = 'green.off()\n';
  return code;
};

// 01.05
Blockly.Python['common_01.05_ready'] = function (block) {
  let code = 'import dice\nimport button\nbt = button.create(6)\n';
  return code;
};

Blockly.Python['dice_show'] = function (block) {
  let code = 'dice.show()\n';
  return code;
};

Blockly.Python['dice_roll'] = function (block) {
  let code = 'dice.roll()\n';
  return code;
};

Blockly.Python['button_press'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if bt.value() == 0:\n' + branch;
  return code;
};

// 01.06
Blockly.Python['common_01.06_ready'] = function (block) {
  let code = 'import music\nmusic.open(12)\n';
  return code;
};

Blockly.Python['music_note_C4'] = function (block) {
  let code = 'music.note("C4", 300)\n';
  return code;
};

Blockly.Python['music_note_D4'] = function (block) {
  let code = 'music.note("D4", 300)\n';
  return code;
};

Blockly.Python['music_note_E4'] = function (block) {
  let code = 'music.note("E4", 300)\n';
  return code;
};

Blockly.Python['music_note_F4'] = function (block) {
  let code = 'music.note("F4", 300)\n';
  return code;
};

Blockly.Python['music_note_G4'] = function (block) {
  let code = 'music.note("G4", 300)\n';
  return code;
};

Blockly.Python['music_note_A4'] = function (block) {
  let code = 'music.note("A4", 300)\n';
  return code;
};

Blockly.Python['music_note_B4'] = function (block) {
  let code = 'music.note("B4", 300)\n';
  return code;
};

Blockly.Python['music_note_C5'] = function (block) {
  let code = 'music.note("C5", 300)\n';
  return code;
};

// 01.07
Blockly.Python['common_01.07_ready'] = function (block) {
  let code = 'red = ServoPin(17)\ngreen = ServoPin(18)\nblue = ServoPin(19)\n';
  return code;
};

Blockly.Python['red_duty_random'] = function (block) {
  let code = 'red.duty(random(1024))\n';
  return code;
};

Blockly.Python['green_duty_random'] = function (block) {
  let code = 'green.duty(random(1024))\n';
  return code;
};

Blockly.Python['blue_duty_random'] = function (block) {
  let code = 'blue.duty(random(1024))\n';
  return code;
};

Blockly.Python['red_duty_off'] = function (block) {
  let code = 'red.duty(0)\n';
  return code;
};

Blockly.Python['green_duty_off'] = function (block) {
  let code = 'green.duty(0)\n';
  return code;
};

Blockly.Python['blue_duty_off'] = function (block) {
  let code = 'blue.duty(0)\n';
  return code;
};

Blockly.Python['all_duty_off'] = function (block) {
  let code = 'red.duty(0)\ngreen.duty(0)\nblue.duty(0)\n';
  return code;
};

// 01.08
Blockly.Python['common_01.08_ready'] = function (block) {
  let code = 'import water_sensor\nbuzzer = OutputPin(11)\n';
  return code;
};

Blockly.Python['water_sensor_show'] = function (block) {
  let code = 'water_sensor.show()\n';
  return code;
};

Blockly.Python['check_water_sensor'] = function (block) {
  let code = 'value = water_sensor.read()\n';
  return code;
};

Blockly.Python['buzzer_on'] = function (block) {
  let code = 'buzzer.on()\n';
  return code;
};

Blockly.Python['buzzer_off'] = function (block) {
  let code = 'buzzer.off()\n';
  return code;
};

Blockly.Python['value>20_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  value > 20:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 01.09
Blockly.Python['common_01.09_ready'] = function (block) {
  let code = 'import dht_screen\nimport dht11\ndh = dht11.create(5)\n';
  return code;
};

Blockly.Python['dht_screen_show'] = function (block) {
  let code = 'dht_screen.show()\n';
  return code;
};

Blockly.Python['dht_screen_display'] = function (block) {
  let code = 'dht_screen.display( dh.temperature(), dh.humidity() )\n';
  return code;
};

Blockly.Python['dh_measure'] = function (block) {
  let code = 'dh.measure()\n';
  return code;
};

// 01.10
Blockly.Python['common_01.10_ready'] = function (block) {
  let code = 'sensor = AnalogPin(1)\nled = OutputPin(20)\n';
  return code;
};

Blockly.Python['20pin_on'] = function (block) {
  let code = 'led.on()\n';
  return code;
};

Blockly.Python['20pin_off'] = function (block) {
  let code = 'led.off()\n';
  return code;
};

Blockly.Python['check_light_sensor'] = function (block) {
  let code = 'value = sensor.read()\nprint(value)\n';
  return code;
};

Blockly.Python['value>200_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  value > 200:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 01.11.01
Blockly.Python['common_01.11.01_ready'] = function (block) {
  let code = 'sensor = AnalogPin(2)\nled = OutputPin(13)\n';
  return code;
};

Blockly.Python['check_sound_sensor'] = function (block) {
  let code = 'value = sensor.read()\n';
  return code;
};

Blockly.Python['value<4000_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  value < 4000:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 01.11.02
Blockly.Python['common_01.11.02_ready'] = function (block) {
  let code = 'import button\nimport stove\nbt = button.create(6)\n';
  return code;
};

Blockly.Python['stove_show'] = function (block) {
  let code = 'stove.show()\n';
  return code;
};

Blockly.Python['stove_off'] = function (block) {
  let code = 'stove.off()\n';
  return code;
};

Blockly.Python['if_stove_down'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt.value() == 1:\n' + statements_if;
  return code;
};

// 01.12
Blockly.Python['common_01.12_ready'] = function (block) {
  let code = 'import udp_socket\nsocket = udp_socket.Server()\nsocket.open(1234)\n';
  return code;
};

Blockly.Python['read_text'] = function (block) {
  let code = 'msg = socket.read_text()\n';
  return code;
};

Blockly.Python['print_msg'] = function (block) {
  let code = 'print(msg)\n';
  return code;
};

Blockly.Python['if_msg'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if msg:\n' + statements_if;
  return code;
};

// 01.13
Blockly.Python['common_01.13_ready'] = function (block) {
  let code = 'import vibration_sersor\nimport http_utils\nsensor = vibration_sensor.create(1, 1000)\n';
  return code;
};

Blockly.Python['send_msg'] = function (block) {
  //	var text = 
  //  let code = 'print("http_utils.send_msg("�묒냽肄붾뱶", "vibration detected!")")\n';
  let code = `print("http_utils.send_msg('�묒냽肄붾뱶', 'vibration detected!')")\ndelay(5)\n`;
  return code;
};

Blockly.Python['if_vibration_sensor'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if sensor.is_active():\n' + statements_if;
  return code;
};

// 01.14
Blockly.Python['common_01.14_ready'] = function (block) {
  let code = 'import http_utils\nimport soil_sensor\n';
  return code;
};

Blockly.Python['soil_sensor_show'] = function (block) {
  let code = 'soil_sensor.show()\n';
  return code;
};

Blockly.Python['send_msg_14'] = function (block) {
  let code = `print("http_utils.send_msg('�묒냽肄붾뱶', 'flower pot needs water!')")\n`;
  return code;
};

Blockly.Python['if_soil_moisture_sensor'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if soil_sensor.read() < 100:\n' + statements_if;
  return code;
};

// 01.15
Blockly.Python['common_01.15_ready'] = function (block) {
  let code = 'import tm1637\nimport button\ntm1637.open(3, 4)\nswitch = button.create(6)\n';
  return code;
};

Blockly.Python['count_100'] = function (block) {
  let code = 'count = 100\n';
  return code;
};

Blockly.Python['count_minus'] = function (block) {
  let code = 'count = count - 1\n';
  return code;
};

Blockly.Python['led_tube_count'] = function (block) {
  let code = 'tm1637.number(count)\n';
  return code;
};

Blockly.Python['if_switch_value'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if switch.value() == 0:\n' + statements_if;
  return code;
};

Blockly.Python['if_count_0'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if count <= 0:\n' + statements_if;
  return code;
};

// 02.01
Blockly.Python['common_02.01_ready'] = function (block) {
  let code = 'import sound_effect\nred = ServoPin(17)\ngreen = ServoPin(18)\nblue = ServoPin(19)\nsound_effect.open(12)\n';
  return code;
};

Blockly.Python['duty_minus'] = function (block) {
  let code = 'red.duty(99 - i)\ngreen.duty(99 - i)\nblue.duty(99 - i)\n';
  return code;
};

Blockly.Python['sound_minus'] = function (block) {
  let code = 'sound_effect.tone(1000 - i * 10)\n';
  return code;
};

Blockly.Python['sound_mute'] = function (block) {
  let code = 'sound_effect.mute()\n';
  return code;
};

Blockly.Python['repeat_100'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for i in range(100):\n' + branch;
  return code;
};

// 02.02
Blockly.Python['common_02.02_ready'] = function (block) {
  let code = 'import car_race\nimport rotary\nencoder = rotary.create(9, 10)\nold_value = 0\n';
  return code;
};

Blockly.Python['car_race_show'] = function (block) {
  let code = 'car_race.show()\n';
  return code;
};

Blockly.Python['car_race_move'] = function (block) {
  let code = 'car_race.move(encoder.value() - old_value)\n';
  return code;
};

Blockly.Python['encoder_update'] = function (block) {
  let code = 'encoder.update()\n';
  return code;
};

Blockly.Python['encoder_value'] = function (block) {
  let code = 'old_value = encoder.value()\n';
  return code;
};

Blockly.Python['if_encoder_changed'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if encoder.has_changed():\n' + statements_if;
  return code;
};

// 02.03
Blockly.Python['common_02.03_ready'] = function (block) {
  let code = 'import tm1637\nimport hcsr04\ntm1637.open(3, 4)\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Python['tm1637_cm'] = function (block) {
  let code = 'tm1637.number(cm)\n';
  return code;
};

Blockly.Python['cm_get'] = function (block) {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

// 02.04
Blockly.Python['common_02.04_ready'] = function (block) {
  let code = 'import door\nimport hcsr04\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Python['door_show'] = function (block) {
  let code = 'door.show()\n';
  return code;
};

Blockly.Python['door_open'] = function (block) {
  let code = 'door.open()\n';
  return code;
};

Blockly.Python['door_close'] = function (block) {
  let code = 'door.close()\n';
  return code;
};

Blockly.Python['cm_get_if'] = function (block) {
  let code = 'cm = hcsr04.get_distance()\nif cm < 0:\n\tcontinue\n';
  return code;
};

Blockly.Python['cm<20_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  cm < 20:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 02.05
Blockly.Python['common_02.05_ready'] = function (block) {
  let code = 'import button\nimport flag_game\nbt1 = button.Button(6)\nbt2 = button.Button(2)\n';
  return code;
};

Blockly.Python['flag_show'] = function (block) {
  let code = 'flag_game.show()\n';
  return code;
};

Blockly.Python['1_win'] = function (block) {
  let code = 'flag_game.win(1)\n';
  return code;
};

Blockly.Python['2_win'] = function (block) {
  let code = 'flag_game.win(2)\n';
  return code;
};

Blockly.Python['waiting_player'] = function (block) {
  let code = 'while True:\n\tif bt1.is_clicked():\n\t\tflag_game.join(1)\n\tif bt2.is_clicked():\n\t\tflag_game.join(2)\n\tif flag_game.is_ready():\n\t\tbreak\n';
  return code;
};

Blockly.Python['count_down'] = function (block) {
  let code = 'for i in range(4):\n\tprint("Countdown: ", 3-i)\n\tflag_game.count_down(3-i)\n\tdelay(1)\n';
  return code;
};

Blockly.Python['if_1_win'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt1.is_clicked():\n' + statements_if;
  return code;
};

Blockly.Python['if_2_win'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt2.is_clicked():\n' + statements_if;
  return code;
};

// 02.06
Blockly.Python['common_02.06_ready'] = function (block) {
  let code = 'import spacecraft\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\n';
  return code;
};

Blockly.Python['spacecraft_show'] = function (block) {
  let code = 'spacecraft.show()\n';
  return code;
};

Blockly.Python['spacecraft_start'] = function (block) {
  let code = 'spacecraft.start()\n';
  return code;
};

Blockly.Python['button_wait'] = function (block) {
  let code = 'while True:\n\tif bt.value() == 0:\n\t\tbreak\n';
  return code;
};

Blockly.Python['encoder_direction'] = function (block) {
  let code = 'encoder.update()\ndirection = encoder.direction()\n';
  return code;
};

Blockly.Python['move_left'] = function (block) {
  let code = 'spacecraft.move_left()\n';
  return code;
};

Blockly.Python['move_right'] = function (block) {
  let code = 'spacecraft.move_right()\n';
  return code;
};

Blockly.Python['if_left_turn'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if direction < 0:\n' + statements_if;
  return code;
};

Blockly.Python['if_right_turn'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if direction > 0:\n' + statements_if;
  return code;
};

// 02.07
Blockly.Python['common_02.07_ready'] = function (block) {
  let code = 'import maze\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nx = 0\ny = 0\nhori_vert = 1\n';
  return code;
};

Blockly.Python['maze_show'] = function (block) {
  let code = 'maze.show()\n';
  return code;
};

Blockly.Python['apply_location'] = function (block) {
  let code = 'if direction != 0:\n\tmaze.move_xy(x, y)\n';
  return code;
};

Blockly.Python['encoder_direction2'] = function (block) {
  let code = 'encoder.update()\ndirection = encoder.direction()\n';
  return code;
};

Blockly.Python['change_direction'] = function (block) {
  let code = 'hori_vert = hori_vert * -1\n';
  return code;
};

Blockly.Python['vertical_move'] = function (block) {
  let code = 'y = y + direction\n';
  return code;
};

Blockly.Python['horizontal_move'] = function (block) {
  let code = 'x = x + direction\n';
  return code;
};

Blockly.Python['if_button_clicked'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt.is_clicked():\n' + statements_if;
  return code;
};

Blockly.Python['if_vertical'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if hori_vert == -1:\n' + statements_if;
  return code;
};

Blockly.Python['if_horizontal'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if hori_vert == 1:\n' + statements_if;
  return code;
};

// 02.08
Blockly.Python['common_02.08_ready'] = function (block) {
  let code = 'import sliding_puzzle\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nhori_vert = 1\n';
  return code;
};

Blockly.Python['puzzle_show'] = function (block) {
  let code = 'sliding_puzzle.show()\n';
  return code;
};

Blockly.Python['puzzle_mix'] = function (block) {
  let code = 'for i in range(1000):\n\ttemp = random(4)\n\tif temp == 0:\n\t\tsliding_puzzle.blank_left()\n\tif temp == 1:\n\t\tsliding_puzzle.blank_right()\n\tif temp == 2:\n\t\tsliding_puzzle.blank_up()\n\tif temp == 3:\n\t\tsliding_puzzle.blank_down()\n';
  return code;
};

Blockly.Python['puzzle_vertical_move'] = function (block) {
  let code = 'if direction == 1:\n\tsliding_puzzle.blank_right()\nif direction == -1:\n\tsliding_puzzle.blank_left()\n';
  return code;
};

Blockly.Python['puzzle_horizontal_move'] = function (block) {
  let code = 'if direction == -1:\n\tsliding_puzzle.blank_up()\nif direction == 1:\n\tsliding_puzzle.blank_down()\n';
  return code;
};

// 02.09
Blockly.Python['common_02.09_ready'] = function (block) {
  let code = 'import timer\nimport button\nimport rotary\nbt1 = button.create(6)\ntimer.open(3, 4)\nbt2 = button.create(2)\nencoder = rotary.create(9, 10)\nbuzzer = OutputPin(11)\n';
  return code;
};

Blockly.Python['timer_count_down'] = function (block) {
  let code = 'for i in range(timer.duration() + 1):\n\ttimer.number(timer.duration() - i)\n\tdelay(1)\n';
  return code;
};

Blockly.Python['timer_change'] = function (block) {
  let code = 'timer.set_value(timer.value() + encoder.direction())\n';
  return code;
};

Blockly.Python['set_mode'] = function (block) {
  let code = 'timer.set_mode(timer.mode() + 1)\n';
  return code;
};

Blockly.Python['timer_update'] = function (block) {
  let code = 'timer.update()\n';
  return code;
};

Blockly.Python['buzzer_2sec'] = function (block) {
  let code = 'buzzer.on()\ndelay(2)\nbuzzer.off()\n';
  return code;
};

Blockly.Python['if_bt1_clicked'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt1.is_clicked():\n' + statements_if;
  return code;
};

Blockly.Python['if_bt2_clicked'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if bt2.is_clicked():\n' + statements_if;
  return code;
};

// 02.10
Blockly.Python['common_02.10_ready'] = function (block) {
  let code = 'import lunar_lander\nimport button\nbt = button.create(6)\n';
  return code;
};

Blockly.Python['lunar_lander_show'] = function (block) {
  let code = 'lunar_lander.show()\n';
  return code;
};

Blockly.Python['lunar_lander_start'] = function (block) {
  let code = 'lunar_lander.start()\n';
  return code;
};

Blockly.Python['lunar_lander_speed'] = function (block) {
  let code = 'lunar_lander.speed = 0.1\n';
  return code;
};

Blockly.Python['ship_down'] = function (block) {
  let code = 'lunar_lander.ship_down()\n';
  return code;
};

Blockly.Python['if_ship_landed'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if lunar_lander.is_landed():\n' + statements_if;
  return code;
};

// 02.11
Blockly.Python['common_02.11_ready'] = function (block) {
  let code = 'import lunar_lander\nimport button\nbt = button.create(6)\nlunar_lander.show()\nlunar_lander.start()\n';
  return code;
};

Blockly.Python['engine_on'] = function (block) {
  let code = 'lunar_lander.engine_on()\n';
  return code;
};

Blockly.Python['engine_off'] = function (block) {
  let code = 'lunar_lander.engine_off()\n';
  return code;
};

Blockly.Python['ship_move'] = function (block) {
  let code = 'lunar_lander.ship_move()\n';
  return code;
};

Blockly.Python['ship_explode'] = function (block) {
  let code = 'lunar_lander.ship_explode()\n';
  return code;
};

Blockly.Python['bt_press_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if bt.value() == 0:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

Blockly.Python['if_ship_speed'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if lunar_lander.speed > 1:\n' + statements_if;
  return code;
};

// 02.12
Blockly.Python['common_02.12_ready'] = function (block) {
  let code = 'import cannon\nimport button\nimport rotary\nbt = button.create(2)\nencoder = rotary.create(9, 10)\npower = 300\npower_x = 0\npower_y = 0\nx = 0\ny = 0\n';
  return code;
};

Blockly.Python['cannon_show'] = function (block) {
  let code = 'cannon.show()\n';
  return code;
};

Blockly.Python['cannon_fire'] = function (block) {
  let code = 'cannon.fire()\npower_x = cannon.power_x()\npower_y = cannon.power_y()\n';
  return code;
};

Blockly.Python['cannonball_move'] = function (block) {
  let code = 'x = x + (power_x / power)\ny = y + (power_y / power)\ncannon.bullet_moveto(x, y)\npower_y = power_y - 1\n';
  return code;
};

Blockly.Python['cannon_set_angle'] = function (block) {
  let code = 'cannon.set_angle(encoder.value())\n';
  return code;
};

Blockly.Python['cannon_set_power'] = function (block) {
  let code = 'cannon.set_power(power)\n';
  return code;
};

Blockly.Python['if_button_press'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if bt.is_clicked():\n' + branch;
  return code;
};

Blockly.Python['if_cannonball_drop'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if y < 0:\n' + statements_if;
  return code;
};

// 02.13
Blockly.Python['common_02.13_ready'] = function (block) {
  let code = 'import tm1637\nimport clock\ntm1637.open(3, 4)\n';
  return code;
};

Blockly.Python['led_tube_time_true'] = function (block) {
  let code = 'tm1637.time(clock.hour(), clock.minute(), True)\n';
  return code;
};

Blockly.Python['led_tube_time_false'] = function (block) {
  let code = 'tm1637.time(clock.hour(), clock.minute(), False)\n';
  return code;
};

Blockly.Python['clock_text'] = function (block) {
  let code = 'print(clock.text())\n';
  return code;
};

// 02.14
Blockly.Python['common_02.14_ready'] = function (block) {
  let code = 'import button\nimport tm1637\nimport clock\nimport dht11\nimport internet\nbt = button.create(6)\ntm1637.open(3, 4)\ndh = dht11.create(5)\nled_index = 1\nleds = [OutputPin(13), OutputPin(14), OutputPin(15)]\nclock.set( internet.get_time(@@NOW) )\n';
  return code;
};

Blockly.Python['led_tube_humidity'] = function (block) {
  let code = 'dh.measure()\ntm1637.number(dh.humidity())\n';
  return code;
};

Blockly.Python['led_tube_temperature'] = function (block) {
  let code = 'dh.measure()\ntm1637.number(dh.temperature())\n';
  return code;
};

Blockly.Python['led_tube_clock'] = function (block) {
  let code = 'display_dot = clock.millis() > 500\ntm1637.time(clock.hour(), clock.minute(), display_dot)\n';
  return code;
};

Blockly.Python['show_mode'] = function (block) {
  let code = 'leds[led_index-1].on()\n';
  return code;
};

Blockly.Python['mode_change'] = function (block) {
  let code = 'leds[led_index-1].off()\nled_index = led_index + 1\nif led_index > 3:\n\tled_index = 1\nprint(led_index)\n';
  return code;
};

Blockly.Python['if_humidity'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if led_index == 3:\n' + branch;
  return code;
};

Blockly.Python['if_temperature'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if led_index == 2:\n' + branch;
  return code;
};

Blockly.Python['if_clock'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if led_index == 1:\n' + branch;
  return code;
};

// 02.15
Blockly.Python['common_02.15_ready'] = function (block) {
  let code = 'import tm1637\nimport hcsr04\nimport water_sensor\ntm1637.open(3, 4)\nhcsr04.open(7, 8)\n';
  return code;
};

Blockly.Python['measure_distance'] = function (block) {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Python['rain_show'] = function (block) {
  let code = 'tm1637.write([0b01010000, 0b01110111, 0b00000110, 0b01010100])\n';
  return code;
};

Blockly.Python['sun_show'] = function (block) {
  let code = 'tm1637.write([0b00000000, 0b01101101, 0b00011100, 0b01010100])\n';
  return code;
};

Blockly.Python['continue'] = function (block) {
  let code = 'continue\n';
  return code;
};

Blockly.Python['if_cm>50'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if cm > 50:\n' + branch;
  return code;
};

Blockly.Python['sensor>20_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if water_sensor.read() > 20:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

Blockly.Python['tm1637_write_0'] = function (block) {
  let code = 'tm1637.write([0, 0, 0, 0])\n';
  return code;
};

// 02.16
Blockly.Python['common_02.16_ready'] = function (block) {
  let code = 'import hcsr04\nhcsr04.open(7, 8)\nbuzzer = OutputPin(11)\ncm = 0\nold_cm = 0\n';
  return code;
};

Blockly.Python['old_cm'] = function (block) {
  let code = 'old_cm = cm\n';
  return code;
};

Blockly.Python['if_cm>30'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if abs(cm - old_cm) > 30:\n' + branch;
  return code;
};

// 02.17
Blockly.Python['common_02.17_ready'] = function (block) {
  let code = 'import tm1637\nimport button\nimport rotary\nsensor = AnalogPin(1)\ntm1637.open(3, 4)\nbt = button.create(2)\nencoder = rotary.create(9, 10)\nbuzzer = OutputPin(11)\nencoder.set(300)\n';
  return code;
};

Blockly.Python['p_buzzer_on'] = function (block) {
  let code = 'buzzer.on()\n';
  return code;
};

Blockly.Python['p_buzzer_off'] = function (block) {
  let code = 'buzzer.off()\n';
  return code;
};

Blockly.Python['led_tube_encoder'] = function (block) {
  let code = 'tm1637.number(encoder.value())\n';
  return code;
};

Blockly.Python['encoder_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if sensor.read() > encoder.value():\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 03.01
Blockly.Python['common_03.01_ready'] = function (block) {
  let code = 'import hcsr04\ns = ServoPin(8)\nhcsr04.open(3, 2)\n';
  return code;
};

Blockly.Python['angle_5'] = function (block) {
  let code = 's.angle(cm * 5)\n';
  return code;
};

Blockly.Python['if_cm<0'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if cm < 0:\n' + branch;
  return code;
};

// 03.02
Blockly.Python['common_03.02_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Python['repeat_10'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for i in range(10):\n' + branch;
  return code;
};

Blockly.Python['move1_forward'] = function (block) {
  let code = 'asomebot.forward()\n';
  return code;
};

Blockly.Python['move1_backward'] = function (block) {
  let code = 'asomebot.backward()\n';
  return code;
};

Blockly.Python['turn1_left'] = function (block) {
  let code = 'asomebot.turn_left()\n';
  return code;
};

Blockly.Python['turn1_right'] = function (block) {
  let code = 'asomebot.turn_right()\n';
  return code;
};

// 03.03
Blockly.Python['common_03.03_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Python['mouse'] = function (block) {
  let code = 'asomebot.mouse()\n';
  return code;
};

Blockly.Python['flap'] = function (block) {
  let code = 'asomebot.flap()\n';
  return code;
};

Blockly.Python['warigari'] = function (block) {
  let code = 'asomebot.warigari()\n';
  return code;
};

Blockly.Python['tick_tock'] = function (block) {
  let code = 'asomebot.tick_tock()\n';
  return code;
};

Blockly.Python['wiggle'] = function (block) {
  let code = 'asomebot.wiggle()\n';
  return code;
};

Blockly.Python['ballet'] = function (block) {
  let code = 'asomebot.ballet()\n';
  return code;
};

Blockly.Python['left_swing'] = function (block) {
  let code = 'asomebot.left_swing()\n';
  return code;
};

Blockly.Python['right_swing'] = function (block) {
  let code = 'asomebot.right_swing()\n';
  return code;
};

Blockly.Python['yaho'] = function (block) {
  let code = 'asomebot.yaho()\n';
  return code;
};

Blockly.Python['swing'] = function (block) {
  let code = 'asomebot.swing()\n';
  return code;
};

Blockly.Python['moonwalk'] = function (block) {
  let code = 'asomebot.moonwalk()\n';
  return code;
};

// 03.04
Blockly.Python['common_03.04_ready'] = function (block) {
  let code = 'import asomebot\nimport hcsr04\nasomebot.ready(5, 6, 7, 8)\nhcsr04.open(3, 2)\n';
  return code;
};

Blockly.Python['if_cm<10'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if cm < 10:\n' + branch;
  return code;
};

// 03.05
Blockly.Python['common_03.05_ready'] = function (block) {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Python['msg_read'] = function (block) {
  let code = 'msg = s.read_text()\n';
  return code;
};

Blockly.Python['if_msg_h'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if msg =="H":\n' + branch;
  return code;
};

Blockly.Python['if_msg_f'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if msg =="F":\n' + branch;
  return code;
};

Blockly.Python['if_msg_b'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if msg =="B":\n' + branch;
  return code;
};

Blockly.Python['if_msg_l'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if msg =="L":\n' + branch;
  return code;
};

Blockly.Python['if_msg_r'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if msg =="R":\n' + branch;
  return code;
};

// 03.06
Blockly.Python['common_03.06_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\na2 = 90\na3 = 90\n';
  return code;
};

Blockly.Python['repeat_60'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for i in range(60):\n' + branch;
  return code;
};

Blockly.Python['turn_off'] = function (block) {
  let code = 'asomebot.turn_off()\n';
  return code;
};

Blockly.Python['2angle_up'] = function (block) {
  let code = 'a2 = a2 + 1\nasomebot.angle(2, a2)\n';
  return code;
};

Blockly.Python['2angle_down'] = function (block) {
  let code = 'a2 = a2 - 1\nasomebot.angle(2, a2)\n';
  return code;
};

Blockly.Python['3angle_up'] = function (block) {
  let code = 'a3 = a3 + 1\nasomebot.angle(3, a3)\n';
  return code;
};

Blockly.Python['3angle_down'] = function (block) {
  let code = 'a3 = a3 - 1\nasomebot.angle(3, a3)\n';
  return code;
};

// 03.07
Blockly.Python['common_03.07_ready'] = function (block) {
  let code = 'import asomebot\nimport utime\nasomebot.ready(5, 6, 7, 8)\n';
  return code;
};

Blockly.Python['start_time'] = function (block) {
  let code = 'start_tick = utime.ticks_ms()\n';
  return code;
};

Blockly.Python['end_time'] = function (block) {
  let code = 'tick = utime.ticks_ms()\n';
  return code;
};

Blockly.Python['difference_time'] = function (block) {
  let code = 'print(tick-start_tick)\n';
  return code;
};

// 03.08
Blockly.Python['common_03.08_ready'] = function (block) {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Python['home_turn_off'] = function (block) {
  let code = 'asomebot.home()\nasomebot.turn.off()\n';
  return code;
};

// 03.09
Blockly.Python['common_03.09_ready'] = function (block) {
  let code = 'import music_player\nmusic_player.open(1)\n';
  return code;
};

Blockly.Python['music_play'] = function (block) {
  let code = 'music_player.play()\n';
  return code;
};

Blockly.Python['music_add_C3'] = function (block) {
  let code = 'music_player.add("C3", 300)\n';
  return code;
};

Blockly.Python['music_add_D3'] = function (block) {
  let code = 'music_player.add("D3", 300)\n';
  return code;
};

Blockly.Python['music_add_E3'] = function (block) {
  let code = 'music_player.add("E3", 300)\n';
  return code;
};

Blockly.Python['music_update'] = function (block) {
  let code = 'music_player.update()\n';
  return code;
};

// 03.10
Blockly.Python['common_03.10_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Python['servos_turn_off'] = function (block) {
  let code = 'asomebot.servos[index].duty(0)\n';
  return code;
};

Blockly.Python['angle_index'] = function (block) {
  let code = 'asomebot.angle( index, angle )\n';
  return code;
};

Blockly.Python['get_angle_index'] = function (block) {
  let code = 'print("index =", index, ", angle =", angle)\n';
  return code;
};

Blockly.Python['angle<0_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  angle < 0:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 03.11
Blockly.Python['common_03.11_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Python['forward_motion_1'] = function (block) {
  let code = 'asomebot.angle(2, 90 - 30)\nasomebot.angle(3, 90 - 15)\n';
  return code;
};

Blockly.Python['forward_motion_2'] = function (block) {
  let code = 'asomebot.angle(0, 90 - 30)\nasomebot.angle(1, 90 - 30)\n';
  return code;
};

Blockly.Python['forward_motion_3'] = function (block) {
  let code = 'asomebot.angle(2, 90 + 15)\nasomebot.angle(3, 90 + 30)\n';
  return code;
};

Blockly.Python['forward_motion_4'] = function (block) {
  let code = 'asomebot.angle(0, 90 + 30)\nasomebot.angle(1, 90 + 30)\n';
  return code;
};

// 03.12
Blockly.Python['common_03.12_ready'] = function (block) {
  let code = 'import asomebot\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Python['turn_motion_1'] = function (block) {
  let code = 'asomebot.angle(3, 90 + 30)\n';
  return code;
};

Blockly.Python['turn_motion_2'] = function (block) {
  let code = 'asomebot.angle(1, 90 + 30)\n';
  return code;
};

Blockly.Python['turn_motion_3'] = function (block) {
  let code = 'asomebot.angle(2, 90 - 30)\nasomebot.angle(3, 90 - 20)\n';
  return code;
};

Blockly.Python['turn_motion_4'] = function (block) {
  let code = 'for i in range(30):\n\tasomebot.angle(1, 90 + 30 - i)\n\tdelay(0.008)\n';
  return code;
};

// 03.13
Blockly.Python['common_03.13_ready'] = function (block) {
  let code = 'import asomebot\nimport udp_socket\nasomebot.ready(5, 6, 7, 8)\ns = udp_socket.create()\ns.open(1234)\n';
  return code;
};

Blockly.Python['wait_message'] = function (block) {
  let code = 'msg = s.read_text()\nif msg:\n\tbreak\n';
  return code;
};

Blockly.Python['repeat_4'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for i in range(4):\n' + branch;
  return code;
};

// 03.14
Blockly.Python['common_03.14_ready'] = function (block) {
  let code = 'import hcsr04\nhcsr04.open(3, 2)\nready = 0\nclose = 1\nstate = ready\n';
  return code;
};

Blockly.Python['get_distance_if'] = function (block) {
  let code = 'cm = hcsr04.get_distance()\nif cm < 0:\n\tcontinue\n';
  return code;
};

Blockly.Python['cm>100_to_prepare'] = function (block) {
  let code = 'if cm > 100:\n\tprint("to ready state")\n\tstate = ready\n';
  return code;
};

Blockly.Python['cm<20_to_close'] = function (block) {
  let code = 'if cm < 20:\n\tprint("to close state")\n\tstate = close\n';
  return code;
};

Blockly.Python['if_prepare'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if state == ready:\n' + branch;
  return code;
};

Blockly.Python['if_close'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if state == close:\n' + branch;
  return code;
};

// 03.15
Blockly.Python['common_03.15_ready'] = function (block) {
  let code = 'import asomebot\nimport motion\nasomebot.ready(5, 6, 7, 8)\nasomebot.home()\n';
  return code;
};

Blockly.Python['get_motion'] = function (block) {
  let code = 'comand = motion.get()\n';
  return code;
};

Blockly.Python['motion_start'] = function (block) {
  let code = 'motion.start()\n';
  return code;
};

Blockly.Python['asomebot_home_stop'] = function (block) {
  let code = 'asomebot.home()\nasomebot.turn.off()\n';
  return code;
};

Blockly.Python['if_command_forward'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if command ==motion.forward:\n' + branch;
  return code;
};

Blockly.Python['if_command_backward'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if command ==motion.backward:\n' + branch;
  return code;
};

Blockly.Python['if_command_moonwalk'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if command ==motion.moonwalk:\n' + branch;
  return code;
};

Blockly.Python['if_command_stop'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if command ==motion.stop:\n' + branch;
  return code;
};

// 04.01
Blockly.Python['common_04.01_ready'] = function (block) {
  let code = 'import hcsr04\ns = ServoPin(8)\nhcsr04.open(5, 6)\n';
  return code;
};

Blockly.Python['cm_get_distance'] = function (block) {
  let code = 'cm = hcsr04.get_distance()\n';
  return code;
};

Blockly.Python['s_duty_1'] = function (block) {
  let code = 's.duty(1)\n';
  return code;
};

Blockly.Python['s_duty_128'] = function (block) {
  let code = 's.duty(128)\n';
  return code;
};

Blockly.Python['cm<10_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  cm < 10:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 04.02
Blockly.Python['common_04.02_ready'] = function (block) {
  let code = 'import asomecar\nasomecar.ready(1, 2, 7, 8)\n';
  return code;
};

// 04.03
Blockly.Python['common_04.03_ready'] = function (block) {
  let code = 'import asomecar\nimport hcsr04\nimport interval\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\ntimer = interval.create(100)\n';
  return code;
};

Blockly.Python['count_0'] = function (block) {
  let code = 'count = 0\n';
  return code;
};

Blockly.Python['count_30'] = function (block) {
  let code = 'count = 30\n';
  return code;
};

Blockly.Python['1sec_count_down_10'] = function (block) {
  let code = 'if timer.is_active() and (count > 0):\n\tcount = count - 1\n';
  return code;
};

Blockly.Python['count_car_move'] = function (block) {
  let code = 'if count == 30:\n\tasomecar.backward()\nif count == 5:\n\tasomecar.turn_left()\nif count == 0:\n\tasomecar.forward()\n';
  return code;
};

// 04.04
Blockly.Python['common_04.04_ready'] = function (block) {
  let code = 'import asomecar\nimport udp_socket\nasomecar.ready(1, 2, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

// 04.05
Blockly.Python['common_04.05_ready'] = function (block) {
  let code = 'servo = ServoPin(8)\nsensor = AnalogPin()\n';
  return code;
};

Blockly.Python['sensor>300_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  sensor.read() > 300:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 04.06
Blockly.Python['common_04.06_ready'] = function (block) {
  let code = 'import asomecar\nimport line_sensor\nasomecar.ready(1, 2, 7, 8)\nline_sensor.ready()\n';
  return code;
};

Blockly.Python['if_above_line'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if line_sensor.read() >= line_sensor.BOTH:\n' + branch;
  return code;
};

Blockly.Python['if_tilt_left'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if line_sensor.read() == line_sensor.LEFT:\n' + branch;
  return code;
};

Blockly.Python['if_tilt_right'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if line_sensor.read() == line_sensor.RIGHT:\n' + branch;
  return code;
};

// 04.07
Blockly.Python['common_04.07_ready'] = function (block) {
  let code = 'import asomecar\nasomecar.ready(1, 2, 7, 8)\n';
  return code;
};

Blockly.Python['Fmoter_speed_down'] = function (block) {
  let code = 'asomecar.forward_fasts = (140 - (i * 10),  0,  0,  0)\n';
  return code;
};

Blockly.Python['changed_speed_forward'] = function (block) {
  let code = 'asomecar.forward(asomecar.forward_fasts)\n';
  return code;
};

Blockly.Python['changed_speed_print'] = function (block) {
  let code = 'print(asomecar.forward_fasts)\n';
  return code;
};

Blockly.Python['repeat_15'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for i in range(15):\n' + branch;
  return code;
};

// 04.08
Blockly.Python['common_04.08_ready'] = function (block) {
  let code = 'import asomecar\nimport udp_socket\nasomecar.ready(1, 2, 7, 8)\ns = udp_socket.Server()\ns.open(1234)\n';
  return code;
};

Blockly.Python['if_msg_receved'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var code = 'if msg:\n' + statements_if;
  return code;
};

// 04.09
Blockly.Python['common_04.09_ready'] = function (block) {
  let code = 'import asomecar\nimport hcsr04\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\n';
  return code;
};

Blockly.Python['min_speed'] = function (block) {
  let code = 'speed_left  = 0\nspeed_right = 0\n';
  return code;
};

Blockly.Python['max_speed'] = function (block) {
  let code = 'speed_left  = 140\nspeed_right = 1\n';
  return code;
};

Blockly.Python['designated_speed_move'] = function (block) {
  let code = 'asomecar.forward( (speed_left, speed_right, speed_left, speed_right) )\n';
  return code;
};

Blockly.Python['designated_speed_down'] = function (block) {
  let code = 'slow_down = 70 - cm\nspeed_left  = speed_left  - slow_down\nspeed_right = speed_right + slow_down\n';
  return code;
};

Blockly.Python['if_cm<70'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if cm < 70:\n' + branch;
  return code;
};

Blockly.Python['cm_10_if_else'] = function (block) {
  var statements_if = Blockly.Python.statementToCode(block, 'if_state');
  var statements_else = Blockly.Python.statementToCode(block, 'else_state');
  var code = 'if  cm < 10:\n' + statements_if + 'else:\n' + statements_else;
  return code;
};

// 04.10
Blockly.Python['common_04.10_ready'] = function (block) {
  let code = 'motors = [ServoPin(1), ServoPin(2), ServoPin(7), ServoPin(8)]\n';
  return code;
};

Blockly.Python['get_value'] = function (block) {
  let code = 'line = input()\nvalues = line.split(",")\nindex = int(values[0])\nduty  = int(values[1])\n';
  return code;
};

Blockly.Python['value_print'] = function (block) {
  let code = 'print("index =", index, ", duty =", duty)\n';
  return code;
};

Blockly.Python['value_turn'] = function (block) {
  let code = 'motors[ index ].duty( duty )\n';
  return code;
};

// 04.11
Blockly.Python['common_04.11_ready'] = function (block) {
  let code = 'import asomecar\nimport hcsr04\nasomecar.ready(1, 2, 7, 8)\nhcsr04.open(5, 6)\nline = AnalogPin()\n';
  return code;
};

Blockly.Python['direction_change'] = function (block) {
  let code = 'asomecar.backward()\ndelay(2)\nasomecar.turn_left()\ndelay(1)\n';
  return code;
};

Blockly.Python['if_obstacle_found'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if (cm < 10) or (line.read() < 100):\n' + branch;
  return code;
};

// 04.12
Blockly.Python['common_04.12_ready'] = function (block) {
  let code = 'import interval\ns = InputPin(12)\ntimer = interval.create()\ncount = 0\nold_value = 0\n';
  return code;
};

Blockly.Python['line_sensor_value'] = function (block) {
  let code = 'value = s.value()\n';
  return code;
};

Blockly.Python['print_black_line'] = function (block) {
  let code = 'print(count)\ntimer.start()\ncount = 0\n';
  return code;
};

Blockly.Python['change_count_up'] = function (block) {
  let code = 'if value != old_value:\n\tif value == 1:\n\t\tcount = count + 1\n';
  return code;
};

Blockly.Python['above_line_initialization'] = function (block) {
  let code = 'if value == 1:\n\ttimer.start()\n';
  return code;
};

Blockly.Python['old_value_value'] = function (block) {
  let code = 'old_value = value\n';
  return code;
};

Blockly.Python['if_out_of_line'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'while_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;
  var code = 'if timer.get() > 1000:\n' + branch;
  return code;
};

// 04.13
Blockly.Python['common_04.13_ready'] = function (block) {
  let code = 'import maze_maker\nimport button\nbt = button.create(6)\npath = [\n[0, 9, 9, 9, 9, 0, 0, 0, 0, 0],\n[0, 9, 9, 9, 9, 0, 9, 9, 9, 0],\n[0, 0, 0, 0, 0, 0, 9, 0, 0, 0],\n[9, 0, 9, 0, 9, 0, 9, 9, 9, 9],\n[9, 0, 9, 0, 9, 0, 0, 0, 0, 9],\n[9, 0, 9, 0, 9, 9, 9, 9, 0, 9],\n[9, 0, 9, 0, 9, 9, 9, 9, 0, 0],\n[0, 0, 9, 0, 0, 0, 0, 0, 9, 0]\n]\n';
  return code;
};

Blockly.Python['maze_maker_show'] = function (block) {
  let code = 'maze_maker_show()\n';
  return code;
};

Blockly.Python['maze_maker_set'] = function (block) {
  let code = 'maze_maker.set_cell_type(x, y, path[y][x])\n';
  return code;
};

Blockly.Python['wait_button_click'] = function (block) {
  let code = 'while True:\n\tif bt.is_clicked():\n\t\tbreak\n';
  return code;
};

Blockly.Python['vertical_repeat'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for y in range(8):\n' + branch;
  return code;
};

Blockly.Python['horizontal_repeat'] = function (block) {
  var branch = Blockly.Python.statementToCode(block, 'do_state');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
    Blockly.Python.PASS;

  var code = 'for x in range(10):\n' + branch;
  return code;
};

// 04.14
Blockly.Python['common_04.14_ready'] = function (block) {
  let code = 'import maze_maker\nimport button\nbt = button.create(6)\npath = [\n\t[0, 9, 9, 9, 9, 0, 0, 0, 0, 0],\n\t[0, 9, 9, 9, 9, 0, 9, 9, 9, 0],\n\t[0, 0, 0, 0, 0, 0, 9, 0, 0, 0],\n\t[9, 0, 9, 0, 9, 0, 9, 9, 9, 9],\n\t[9, 0, 9, 0, 9, 0, 0, 0, 0, 9],\n\t[9, 0, 9, 0, 9, 9, 9, 9, 0, 9],\n\t[9, 0, 9, 0, 9, 9, 9, 9, 0, 0],\n\t[0, 0, 9, 0, 0, 0, 0, 0, 9, 0]\n]\n';
  return code;
};

Blockly.Python['maze_maker_set_xy'] = function (block) {
  let code = 'for y in range(8):\n\tfor x in range(10):\n\t\tmaze_maker.set_cell_type(x, y, path[y][x])\n';
  return code;
};

Blockly.Python['path_mark'] = function (block) {
  let code = 'path[dy][dx] = path[dy][dx] +1]\n';
  return code;
};

Blockly.Python['star_starting_point'] = function (block) {
  let code = 'dx = 0\ndy = 0\npath[dy][dx] = path[dy][dx] +1]\n';
  return code;
};

Blockly.Python['move_xy'] = function (block) {
  let code = 'maze_maker.move_xy(dx, dy)\n';
  return code;
};

Blockly.Python['find_next_move'] = function (block) {
  let code = '(cell_type, dx, dy) = maze_maker.find_next_move(path, dx, dy)\n';
  return code;
};

Blockly.Python['wall_repeat_break'] = function (block) {
  let code = 'if cell_type >= 9:\n\tbreak\n';
  return code;
};