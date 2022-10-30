Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "asomekit_ready",
        "message0": "%1 %{BKY_ASOMEKIT_READY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomekit.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#14A2FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_turn_off_pins",
        "message0": "%1 %{BKY_ASOMEKIT_TURN_OFF_PINS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomekit.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#14A2FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_led",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_LED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin1_number",
                "value": 4,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin2_number",
                "value": 5,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin3_number",
                "value": 6,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin4_number",
                "value": 7,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_rgb",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_RGB}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin1_number",
                "value": 5,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin2_number",
                "value": 6,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin3_number",
                "value": 7,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_button",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_BUTTON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/button.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin_number",
                "value": 6,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_sound",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_SOUND}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound_sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin_number",
                "value": 8,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_buzzer",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_BUZZER}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/buzzer.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin_number",
                "value": 8,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_dht",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_DHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/dht.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin_number",
                "value": 5,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_led_tube",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_LED_TUBE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin1_number",
                "value": 3,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin2_number",
                "value": 4,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_vibration_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_VIBRATION_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/vibration_sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin_number",
                "value": 7,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_prepare_ultrasonic_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_PREPARE_ULTRASONIC_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/ultrasonic_sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "pin1_number",
                "value": 5,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "pin2_number",
                "value": 6,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_led_color",
        "message0": "%1 %{BKY_ASOMEKIT_LED_COLOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "color",
                "options": [["Red","red"], ["Yellow","yellow"], ["Green","green"], ['Bright','bright']]
            }
            ,{
                "type": "field_dropdown",
                "name": "turn_on_off",
                "options": [["On","on"], ["Off","off"]]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_led_set_brightness",
        "message0": "%1 %{BKY_ASOMEKIT_LED_SET_BRIGHTNESS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "rgb",
                "options": [["Red","r"], ["Green","g"], ["Blue","b"]]
            }
            ,{
                "type": "field_number",
                "name": "duty",
                "value": 0,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_display_tube",
        "message0": "%1 %{BKY_ASOMEKIT_DISPLAY_TUBE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_variable",
                "name": "tube",
                "variable": "i",
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_display_tube_time",
        "message0": "%1 %{BKY_ASOMEKIT_DISPLAY_TUBE_TIME}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_variable",
                "name": "tube_h",
                "variable": "h",
            }
            ,{
                "type": "field_variable",
                "name": "tube_m",
                "variable": "m",
            }
            ,{
                "type": "field_dropdown",
                "name": "true_false",
                "options": [["True","True"], ["False","False"]]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_button_clicked",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_BUTTON_CLICKED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/button.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_button_value",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_BUTTON_VALUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/button.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_measure_distance",
        "message0": "%1 %{BKY_ASOMEKIT_MEASURE_DISTANCE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/measure_distance.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_measure_humidity",
        "message0": "%1 %{BKY_ASOMEKIT_MEASURE_HUMIDITY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_measure_temperature",
        "message0": "%1 %{BKY_ASOMEKIT_MEASURE_TEMPERATURE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_water_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_WATER_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_light_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_LIGHT_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_sound_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_SOUND_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_soil-moisture_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_CHECK_SOIL-MOISTURE_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_check_vibration_sensor",
        "message0": "%1 %{BKY_ASOMEKIT_VIBRATON_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/vibration_sensor.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FFCD00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_buzzer_onoff",
        "message0": "%1 %{BKY_ASOMEKIT_BUZZER_ONOFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "turn_on_off",
                "options": [["On","on"], ["Off","off"]]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_music_tone",
        "message0": "%1 %{BKY_ASOMEKIT_MUSIC_TONE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "tone",
                "value": 0,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomekit_music_note",
        "message0": "%1 %{BKY_ASOMEKIT_MUSIC_NOTE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "scale",
                "options": [["C","C"],["C#","C#"],["D","D"],["D#","D#"],["Db","Db"],["E","E"],["Eb","Eb"],["F","F"],["F#","F#"],["G","G"],["G#","G#"],["Gb","Gb"],["A","A"],["A#","A#"],["Ab","Ab"], ["B","B"],["Bb","Bb"]]
            }
            ,{
                "type": "field_dropdown",
                "name": "octave",
                "options": [["1","1"],["2","2"], ["3","3"], ["4","4"], ["5","5"]]
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
]);
