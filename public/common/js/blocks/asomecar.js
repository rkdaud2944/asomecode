Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "asomecar_ready",
        "message0": "%1 %{BKY_ASOMECAR_READY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomecar.png",
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
        "type": "asomecar_move_stop",
        "message0": "%1 %{BKY_ASOMECAR_MOVE_STOP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomecar.png",
                "width": 30,
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
        "type": "asomecar_move_forward",
        "message0": "%1 %{BKY_ASOMECAR_MOVE_FORWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/move_forward.png",
                "width": 30,
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
        "type": "asomecar_move_backward",
        "message0": "%1 %{BKY_ASOMECAR_MOVE_BACKWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/move_backward.png",
                "width": 30,
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
        "type": "asomecar_rotate_left",
        "message0": "%1 %{BKY_ASOMECAR_ROTATE_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/turn_left.png",
                "width": 30,
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
        "type": "asomecar_rotate_right",
        "message0": "%1 %{BKY_ASOMECAR_ROTATE_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/turn_right.png",
                "width": 30,
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
        "type": "asomecar_turn_left",
        "message0": "%1 %{BKY_ASOMECAR_TURN_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/turn_left.png",
                "width": 30,
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
        "type": "asomecar_turn_right",
        "message0": "%1 %{BKY_ASOMECAR_TURN_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomecar/turn_right.png",
                "width": 30,
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
        "type": "asomecar_set_speed_of_motor",
        "message0": "%1 %{BKY_ASOMECAR_SET_SPEED_OF_MOTOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomecar.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_dropdown",
                "name": "motor_number",
                "options": [["0","0"],["1","1"],["2","2"], ["3","3"]]
            }
            ,{
                "type": "field_number",
                "name": "motor_speed",
                "value": 60,
                "min": 0,
                "max": 140,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomecar_move",
        "message0": "%1 %{BKY_ASOMECAR_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/icons/asomecar.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_number",
                "name": "move1",
                "value": 0,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "move2",
                "value": 0,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "move3",
                "value": 0,
                "min": 0,
                "max": 1000,
            }
            ,{
                "type": "field_number",
                "name": "move4",
                "value": 0,
                "min": 0,
                "max": 1000,
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "asomecar_measure_distance",
        "message0": "%1 %{BKY_ASOMECAR_MEASURE_DISTANCE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/measure_distance.png",
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
        "type": "asomecar_prepare_motion_detect",
        "message0": "%1 %{BKY_ASOMECAR_PREPARE_MOTION_DETECT}",
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
        "type": "asomecar_check_motion",
        "message0": "%1 %{BKY_ASOMECAR_CHECK_MOTION}",
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
        "type": "asomecar_measure_light_intensity",
        "message0": "%1 %{BKY_ASOMECAR_MEASURE_LIGHT_INTENSITY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/sensor.png",
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
        "type": "asomecar_check_line_sensor",
        "message0": "%1 %{BKY_ASOMECAR_CHECK_LINE_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/sensor.png",
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
]);