Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "asomebot_ready",
        "message0": "%1 %{BKY_ASOMEBOT_READY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomebot.png",
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
        "type": "asomebot_home",
        "message0": "%1 %{BKY_ASOMEBOT_HOME}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/attention.png",
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
        "type": "asomebot_set_align",
        "message0": "%1 %{BKY_ASOMEBOT_SET_ALIGN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/attention.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "align1",
                "value": 90
            }
            ,{
                "type": "field_number",
                "name": "align2",
                "value": 90
            }
            ,{
                "type": "field_number",
                "name": "align3",
                "value": 90
            }
            ,{
                "type": "field_number",
                "name": "align4",
                "value": 90
            },
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
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
        "type": "asomebot_move_forward",
        "message0": "%1 %{BKY_ASOMEBOT_MOVE_FORWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "steps",
                "value": 1,
                "min": 0,
                "max": 30,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_move_forward_advance",
        "message0": "%1 %{BKY_ASOMEBOT_MOVE_FORWARD_ADVANCE} %5",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "speed1",
                "value": 150,
            }
            ,{
                "type": "field_number",
                "name": "speed2",
                "value": 300,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_move_backward",
        "message0": "%1 %{BKY_ASOMEBOT_MOVE_BACKWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_backward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "steps",
                "value": 1,
                "min": 0,
                "max": 30,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_move_backward_advance",
        "message0": "%1 %{BKY_ASOMEBOT_MOVE_BACKWARD_ADVANCE} %5",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_backward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "speed1",
                "value": 150,
            }
            ,{
                "type": "field_number",
                "name": "speed2",
                "value": 300,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_turn_left",
        "message0": "%1 %{BKY_ASOMEBOT_TURN_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "steps",
                "value": 1,
                "min": 0,
                "max": 30,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_turn_left_advance",
        "message0": "%1 %{BKY_ASOMEBOT_TURN_LEFT_ADVANCE} %4",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "speed",
                "value": 300,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_turn_right",
        "message0": "%1 %{BKY_ASOMEBOT_TURN_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "steps",
                "value": 1,
                "min": 0,
                "max": 30,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_turn_right_advance",
        "message0": "%1 %{BKY_ASOMEBOT_TURN_RIGHT_ADVANCE} %4",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "speed",
                "value": 300,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_angle_of_motor",
        "message0": "%1 %{BKY_ASOMEBOT_ANGLE_OF_MOTOR} %6",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "count",
                "options": [["0","0"],["1","1"],["2","2"], ["3","3"]]
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "angle",
                "value": 90,
                "min": 0,
                "max": 180,
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1,
                "min": 0,
                "max": 30,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_angles",
        "message0": "%1 %{BKY_ASOMEBOT_ANGLES} %9",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "angle1",
                "value": 90,
                "min": 0,
                "max": 180,
            }
            ,{
                "type": "field_number",
                "name": "angle2",
                "value": 90,
                "min": 0,
                "max": 180,
            }
            ,{
                "type": "field_number",
                "name": "angle3",
                "value": 90,
                "min": 0,
                "max": 180,
            }
            ,{
                "type": "field_number",
                "name": "angle4",
                "value": 90,
                "min": 0,
                "max": 180,
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1,
                "min": 0,
                "max": 30,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_ballet",
        "message0": "%1 %{BKY_ASOMEBOT_BALLET}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/ballet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_wiggle",
        "message0": "%1 %{BKY_ASOMEBOT_WIGGLE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/wiggle.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_flap",
        "message0": "%1 %{BKY_ASOMEBOT_FLAP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/flap.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_mouse",
        "message0": "%1 %{BKY_ASOMEBOT_MOUSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/mouse.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "direction",
                "options": [["Left","1"], ["Right","-1"]]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_warigari",
        "message0": "%1 %{BKY_ASOMEBOT_WARIGARI}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/warigari.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_swing",
        "message0": "%1 %{BKY_ASOMEBOT_SWING}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/swing.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_right_swing",
        "message0": "%1 %{BKY_ASOMEBOT_RIGHT_SWING}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/right_swing.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_left_swing",
        "message0": "%1 %{BKY_ASOMEBOT_LEFT_SWING}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/left_swing.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_tick_tock",
        "message0": "%1 %{BKY_ASOMEBOT_TICK_TOCK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/tick_tock.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_yaho",
        "message0": "%1 %{BKY_ASOMEBOT_YAHO}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/yaho.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_moonwalk",
        "message0": "%1 %{BKY_ASOMEBOT_MOONWALK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/moonwalk.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_measure_distance",
        "message0": "%1 %{BKY_ASOMEBOT_MEASURE_DISTANCE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/measure_distance.png",
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
        "type": "asomebot_prepare_motion_detect",
        "message0": "%1 %{BKY_ASOMEBOT_PREPARE_MOTION_DETECT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/measure_distance.png",
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
        "type": "asomebot_check_motion",
        "message0": "%1 %{BKY_ASOMEBOT_CHECK_MOTION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/measure_distance.png",
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
        "type": "asomebot_buzzer_on",
        "message0": "%1 %{BKY_ASOMEBOT_BUZZER_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/music.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_buzzer_off",
        "message0": "%1 %{BKY_ASOMEBOT_BUZZER_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/music.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_music_tone",
        "message0": "%1 %{BKY_ASOMEBOT_MUSIC_TONE} %5",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/music.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "input_dummy"
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
                "max": 10000,
            }
            ,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomebot_music_note",
        "message0": "%1 %{BKY_ASOMEBOT_MUSIC_NOTE} %6",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/music.png",
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
                "type": "input_dummy"
            }
            ,{
                "type": "field_number",
                "name": "secs",
                "value": 1,
                "min": 0,
                "max": 10000,
            }
			,{
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
]);


