Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "text",
        "message0": "%1 %2",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 1,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_input",
                "name": "TEXT",
                "text": ""
            }
        ],
        "output": "String",
        "style": "text_blocks",
        "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
        "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
        "extensions": [
            "text_quotes",
            "parent_tooltip_when_inline"
        ],
        "style": "loop_blocks"
    },
    {
        "type": "math_number",
        "message0": "%1 %2",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 1,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_number",
                "name": "NUM",
                "value": 0
            }
        ],
        "output": "Number",
        "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
        "style": "math_blocks",
        "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
        "extensions": ["parent_tooltip_when_inline"],
        "style": "loop_blocks"
    }
    , {
        "type": "common_at_the_side",
        "message0": "%1 %{BKY_COMMON_AT_THE_SIDE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_variable",
                "name": "if_key",
                "variable": "i",
            }
            , {
                "type": "field_dropdown",
                "name": "if_condition",
                "options": [["==", "=="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="], ["!=", "!="]]
            }
            , {
                "type": "field_dropdown",
                "name": "side",
                "options": [["�쇱そ", "1"], ["�ㅻⅨ履�", "2"], ["�묒そ", "4"], ["none", "8"]]
            }
            , {
                "type": "input_dummy"
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_repeat_infinitely",
        "message0": "%1 %{BKY_COMMON_REPEAT_INFINITELY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_repeat",
        "message0": "%1 %{BKY_COMMON_REPEAT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_number",
                "name": "repeat_times",
                "value": 1
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay",
        "message0": "%1 %{BKY_COMMON_DELAY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_number",
                "name": "secs",
                "value": 1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "controls_condition_if",
        "message0": "%1 %{BKY_CONTROLS_CONDITION_IF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_variable",
                "name": "if_key",
                "variable": "i",
            }
            , {
                "type": "field_dropdown",
                "name": "if_condition",
                "options": [["==", "=="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="], ["!=", "!="]]
            }
            , {
                "type": "input_value"
                , "name": "if_value"
                , "check": ["Number", "String"]
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "controls_condition_if_else",
        "message0": "%1 %{BKY_CONTROLS_CONDITION_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_variable",
                "name": "if_key",
                "variable": "i",
            }
            , {
                "type": "field_dropdown",
                "name": "if_condition",
                "options": [["==", "=="], [">", ">"], ["<", "<"], [">=", ">="], ["<=", "<="], ["!=", "!="]]
            }
            , {
                "type": "input_value"
                , "name": "if_value"
                , "check": ["Number", "String"]
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_print",
        "message0": "%1 %{BKY_COMMON_PRINT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_variable",
                "name": "print_var",
                "variable": "i"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_break",
        "message0": "%1 %{BKY_COMMON_BREAK}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_set_var",
        "message0": "%1 %{BKY_COMMON_SET_VAR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "field_variable",
                "name": "var_name",
            }
            , {
                "type": "input_value"
                , "name": "set_value"
                , "check": ["Number", "String"]
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_get_weather_data",
        "message0": "%1 %{BKY_COMMON_INTERNET_GET_WEATHER_DATA}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "field_input",
                "name": "city",
                "text": "  "
            }
            , {
                "type": "field_input",
                "name": "country",
                "text": "  "
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_connect",
        "message0": "%1 %{BKY_COMMON_INTERNET_CONNECT} %6",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy"
            }
            , {
                "type": "field_input",
                "name": "ssid",
                "text": "  "
            }
            , {
                "type": "input_dummy"
            }
            , {
                "type": "field_input",
                "name": "password",
                "text": "  "
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_change_ap_mode",
        "message0": "%1 %{BKY_COMMON_INTERNET_CHANGE_AP_MODE} %4",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy"
            }
            , {
                "type": "field_input",
                "name": "ssid",
                "text": "  "
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_open_udp",
        "message0": "%1 %{BKY_COMMON_INTERNET_OPEN_UDP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "field_number",
                "name": "port",
                "value": 1234
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_read_udp",
        "message0": "%1 %{BKY_COMMON_INTERNET_READ_UDP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_internet_send_message",
        "message0": "%1 %{BKY_COMMON_INTERNET_SEND_MESSAGE} %5",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy"
            }
            , {
                "type": "field_input",
                "name": "msg",
                "text": "       "
            }
            , {
                "type": "field_input",
                "name": "code",
                "text": "       "
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // delay
    , {
        "type": "common_delay_0.01",
        "message0": "%1%{BKY_COMMON_DELAY_0.01}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_0.02",
        "message0": "%1 %{BKY_COMMON_DELAY_0.02}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_0.05",
        "message0": "%1 %{BKY_COMMON_DELAY_0.05}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_0.1",
        "message0": "%1 %{BKY_COMMON_DELAY_0.1}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_0.2",
        "message0": "%1 %{BKY_COMMON_DELAY_0.2}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_0.5",
        "message0": "%1 %{BKY_COMMON_DELAY_0.5}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_1",
        "message0": "%1 %{BKY_COMMON_DELAY_1}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_2",
        "message0": "%1 %{BKY_COMMON_DELAY_2}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_3",
        "message0": "%1 %{BKY_COMMON_DELAY_3}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "common_delay_5",
        "message0": "%1 %{BKY_COMMON_DELAY_5}",
        "args0": [
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
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.03
    , {
        "type": "common_01.03_ready",
        "message0": "%1 %{BKY_COMMON_01.03_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "13pin_connect",
        "message0": "%1 %{BKY_13PIN_CONNECT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ff9a00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "13pin_on",
        "message0": "%1 %{BKY_13PIN_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "13pin_off",
        "message0": "%1 %{BKY_13PIN_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.04
    , {
        "type": "common_01.04_ready",
        "message0": "%1 %{BKY_COMMON_01.04_READY}",
        "height": 80,
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "red_led_on",
        "message0": "%1 %{BKY_RED_LED_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "yellow_led_on",
        "message0": "%1 %{BKY_YELLOW_LED_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "green_led_on",
        "message0": "%1 %{BKY_GREEN_LED_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "red_led_off",
        "message0": "%1 %{BKY_RED_LED_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "yellow_led_off",
        "message0": "%1 %{BKY_YELLOW_LED_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "green_led_off",
        "message0": "%1 %{BKY_GREEN_LED_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.05
    , {
        "type": "common_01.05_ready",
        "message0": "%1 %{BKY_COMMON_01.05_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "dice_show",
        "message0": "%1 %{BKY_DICE_SHOW}",
        "args0": [
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
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "dice_roll",
        "message0": "%1 %{BKY_DICE_ROLL}",
        "args0": [
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
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "button_press",
        "message0": "%1 %{BKY_BUTTON_PRESS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    // 01.06
    , {
        "type": "common_01.06_ready",
        "message0": "%1 %{BKY_COMMON_01.06_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_C4",
        "message0": "%1 %{BKY_MUSIC_NOTE_C4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_D4",
        "message0": "%1 %{BKY_MUSIC_NOTE_D4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_E4",
        "message0": "%1 %{BKY_MUSIC_NOTE_E4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_F4",
        "message0": "%1 %{BKY_MUSIC_NOTE_F4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_G4",
        "message0": "%1 %{BKY_MUSIC_NOTE_G4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_A4",
        "message0": "%1 %{BKY_MUSIC_NOTE_A4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_B4",
        "message0": "%1 %{BKY_MUSIC_NOTE_B4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_note_C5",
        "message0": "%1 %{BKY_MUSIC_NOTE_C5}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.07
    , {
        "type": "common_01.07_ready",
        "message0": "%1 %{BKY_COMMON_01.07_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "red_duty_random",
        "message0": "%1 %{BKY_RED_DUTY_RANDOM}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "green_duty_random",
        "message0": "%1 %{BKY_GREEN_DUTY_RANDOM}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "blue_duty_random",
        "message0": "%1 %{BKY_BLUE_DUTY_RANDOM}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "red_duty_off",
        "message0": "%1 %{BKY_RED_DUTY_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "green_duty_off",
        "message0": "%1 %{BKY_GREEN_DUTY_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "blue_duty_off",
        "message0": "%1 %{BKY_BLUE_DUTY_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "all_duty_off",
        "message0": "%1 %{BKY_ALL_DUTY_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.08
    , {
        "type": "common_01.08_ready",
        "message0": "%1 %{BKY_COMMON_01.08_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "water_sensor_show",
        "message0": "%1 %{BKY_WATER_SENSOR_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "check_water_sensor",
        "message0": "%1 %{BKY_CHECK_WATER_SENSOR}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "buzzer_on",
        "message0": "%1 %{BKY_BUZZER_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "buzzer_off",
        "message0": "%1 %{BKY_BUZZER_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "value>20_if_else",
        "message0": "%1 %{BKY_VALUE>20_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.09
    , {
        "type": "common_01.09_ready",
        "message0": "%1 %{BKY_COMMON_01.09_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "dht_screen_show",
        "message0": "%1 %{BKY_DHT_SCREEN_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "dht_screen_display",
        "message0": "%1 %{BKY_DHT_SCREEN_DISPLAY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "dh_measure",
        "message0": "%1 %{BKY_DH_MEASURE}",
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

    // 01.10
    , {
        "type": "common_01.10_ready",
        "message0": "%1 %{BKY_COMMON_01.10_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "20pin_on",
        "message0": "%1 %{BKY_20PIN_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "20pin_off",
        "message0": "%1 %{BKY_20PIN_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    },
    , {
        "type": "check_light_sensor",
        "message0": "%1 %{BKY_CHECK_LIGHT_SENSOR}",
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
    , {
        "type": "value>200_if_else",
        "message0": "%1 %{BKY_VALUE>200_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.11.01
    , {
        "type": "common_01.11.01_ready",
        "message0": "%1 %{BKY_COMMON_01.11.01_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "check_sound_sensor",
        "message0": "%1 %{BKY_CHECK_SOUND_SENSOR}",
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
    , {
        "type": "value<4000_if_else",
        "message0": "%1 %{BKY_VALUE<4000_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.11.02
    , {
        "type": "common_01.11.02_ready",
        "message0": "%1 %{BKY_COMMON_01.11.02_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "stove_show",
        "message0": "%1 %{BKY_STOVE_SHOW}",
        "args0": [
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
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "stove_off",
        "message0": "%1 %{BKY_STOVE_OFF}",
        "args0": [
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
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_stove_down",
        "message0": "%1 %{BKY_IF_STOVE_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.12
    , {
        "type": "common_01.12_ready",
        "message0": "%1 %{BKY_COMMON_01.12_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "read_text",
        "message0": "%1 %{BKY_READ_TEXT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "print_msg",
        "message0": "%1 %{BKY_PRINT_MSG}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg",
        "message0": "%1 %{BKY_IF_MSG}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.13
    , {
        "type": "common_01.13_ready",
        "message0": "%1 %{BKY_COMMON_01.13_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "send_msg",
        "message0": "%1 %{BKY_SEND_MSG}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_vibration_sensor",
        "message0": "%1 %{BKY_IF_VIBRATION_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.14
    , {
        "type": "common_01.14_ready",
        "message0": "%1 %{BKY_COMMON_01.14_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "soil_sensor_show",
        "message0": "%1 %{BKY_SOIL_SENSOR_SHOW}",
        "args0": [
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
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "send_msg_14",
        "message0": "%1 %{BKY_SEND_MSG_14}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_soil_moisture_sensor",
        "message0": "%1 %{BKY_IF_SOIL_MOISTURE_SENSOR}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 01.15
    , {
        "type": "common_01.15_ready",
        "message0": "%1 %{BKY_COMMON_01.15_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_100",
        "message0": "%1 %{BKY_COUNT_100}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_minus",
        "message0": "%1 %{BKY_COUNT_MINUS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_count",
        "message0": "%1 %{BKY_LED_TUBE_COUNT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_switch_value",
        "message0": "%1 %{BKY_IF_SWITCH_VALUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_count_0",
        "message0": "%1 %{BKY_IF_COUNT_0}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.01
    , {
        "type": "common_02.01_ready",
        "message0": "%1 %{BKY_COMMON_02.01_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "duty_minus",
        "message0": "%1 %{BKY_DUTY_MINUS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "sound_minus",
        "message0": "%1 %{BKY_SOUND_MINUS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "sound_mute",
        "message0": "%1 %{BKY_SOUND_MUTE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "repeat_100",
        "message0": "%1 %{BKY_REPEAT_100}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.02
    , {
        "type": "common_02.02_ready",
        "message0": "%1 %{BKY_COMMON_02.02_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "car_race_show",
        "message0": "%1 %{BKY_CAR_RACE_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "car_race_move",
        "message0": "%1 %{BKY_CAR_RACE_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "encoder_update",
        "message0": "%1 %{BKY_ENCODER_UPDATE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "encoder_value",
        "message0": "%1 %{BKY_ENCODER_VALUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_encoder_changed",
        "message0": "%1 %{BKY_IF_ENCODER_CHANGED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.03
    , {
        "type": "common_02.03_ready",
        "message0": "%1 %{BKY_COMMON_02.03_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "tm1637_cm",
        "message0": "%1 %{BKY_TM1637_CM}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm_get",
        "message0": "%1 %{BKY_CM_GET}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.04
    , {
        "type": "common_02.04_ready",
        "message0": "%1 %{BKY_COMMON_02.04_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "door_show",
        "message0": "%1 %{BKY_DOOR_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "door_open",
        "message0": "%1 %{BKY_DOOR_OPEN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "door_close",
        "message0": "%1 %{BKY_DOOR_CLOSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm_get_if",
        "message0": "%1 %{BKY_CM_GET_IF}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm<20_if_else",
        "message0": "%1 %{BKY_CM<20_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.05
    , {
        "type": "common_02.05_ready",
        "message0": "%1 %{BKY_COMMON_02.05_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "flag_show",
        "message0": "%1 %{BKY_FLAG_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "1_win",
        "message0": "%1 %{BKY_1_WIN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "2_win",
        "message0": "%1 %{BKY_2_WIN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "waiting_player",
        "message0": "%1 %{BKY_WAITING_PLAYER}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_down",
        "message0": "%1 %{BKY_COUNT_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_1_win",
        "message0": "%1 %{BKY_IF_1_WIN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_2_win",
        "message0": "%1 %{BKY_IF_2_WIN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.06
    , {
        "type": "common_02.06_ready",
        "message0": "%1 %{BKY_COMMON_02.06_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "spacecraft_show",
        "message0": "%1 %{BKY_SPACECRAFT_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "spacecraft_start",
        "message0": "%1 %{BKY_SPACECRAFT_START}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "button_wait",
        "message0": "%1 %{BKY_BUTTON_WAIT}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "encoder_direction",
        "message0": "%1 %{BKY_ENCODER_DIRECTION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "move_left",
        "message0": "%1 %{BKY_MOVE_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "move_right",
        "message0": "%1 %{BKY_MOVE_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_left_turn",
        "message0": "%1 %{BKY_IF_LEFT_TURN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_right_turn",
        "message0": "%1 %{BKY_IF_RIGHT_TURN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.07
    , {
        "type": "common_02.07_ready",
        "message0": "%1 %{BKY_COMMON_02.07_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "maze_show",
        "message0": "%1 %{BKY_MAZE_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "apply_location",
        "message0": "%1 %{BKY_APPLY_LOCATION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "encoder_direction2",
        "message0": "%1 %{BKY_ENCODER_DIRECTION2}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "change_direction",
        "message0": "%1 %{BKY_CHANGE_DIRECTION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "vertical_move",
        "message0": "%1 %{BKY_VERTICAL_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "horizontal_move",
        "message0": "%1 %{BKY_HORIZONTAL_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_button_clicked",
        "message0": "%1 %{BKY_IF_BUTTON_CLICKED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_vertical",
        "message0": "%1 %{BKY_IF_VERTICAL}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_horizontal",
        "message0": "%1 %{BKY_IF_HORIZONTAL}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.08
    , {
        "type": "common_02.08_ready",
        "message0": "%1 %{BKY_COMMON_02.08_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "puzzle_show",
        "message0": "%1 %{BKY_PUZZLE_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "puzzle_mix",
        "message0": "%1 %{BKY_PUZZLE_MIX}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "puzzle_vertical_move",
        "message0": "%1 %{BKY_PUZZLE_VERTICAL_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "puzzle_horizontal_move",
        "message0": "%1 %{BKY_PUZZLE_HORIZONTAL_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.09
    , {
        "type": "common_02.09_ready",
        "message0": "%1 %{BKY_COMMON_02.09_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "timer_count_down",
        "message0": "%1 %{BKY_TIMER_COUNT_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "timer_change",
        "message0": "%1 %{BKY_TIMER_CHANGE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "set_mode",
        "message0": "%1 %{BKY_SET_MODE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "timer_update",
        "message0": "%1 %{BKY_TIMER_UPDATE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "buzzer_2sec",
        "message0": "%1 %{BKY_BUZZER_2SEC}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_bt1_clicked",
        "message0": "%1 %{BKY_IF_BT1_CLICKED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_bt2_clicked",
        "message0": "%1 %{BKY_IF_BT2_CLICKED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.10
    , {
        "type": "common_02.10_ready",
        "message0": "%1 %{BKY_COMMON_02.10_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "lunar_lander_show",
        "message0": "%1 %{BKY_LUNAR_LANDER_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "lunar_lander_start",
        "message0": "%1 %{BKY_LUNAR_LANDER_START}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "lunar_lander_speed",
        "message0": "%1 %{BKY_LUNAR_LANDER_SPEED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "ship_down",
        "message0": "%1 %{BKY_SHIP_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_ship_landed",
        "message0": "%1 %{BKY_IF_SHIP_LANDED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.11
    , {
        "type": "common_02.11_ready",
        "message0": "%1 %{BKY_COMMON_02.11_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "engine_on",
        "message0": "%1 %{BKY_ENGINE_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "engine_off",
        "message0": "%1 %{BKY_ENGINE_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "ship_move",
        "message0": "%1 %{BKY_SHIP_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "ship_explode",
        "message0": "%1 %{BKY_SHIP_EXPLODE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "bt_press_if_else",
        "message0": "%1 %{BKY_BT_PRESS_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    , {
        "type": "if_ship_speed",
        "message0": "%1 %{BKY_IF_SHIP_SPEED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.12
    , {
        "type": "common_02.12_ready",
        "message0": "%1 %{BKY_COMMON_02.12_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cannon_show",
        "message0": "%1 %{BKY_CANNON_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cannon_fire",
        "message0": "%1 %{BKY_CANNON_FIRE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cannonball_move",
        "message0": "%1 %{BKY_CANNONBALL_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cannon_set_angle",
        "message0": "%1 %{BKY_CANNON_SET_ANGLE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cannon_set_power",
        "message0": "%1 %{BKY_CANNON_SET_POWER}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_button_press",
        "message0": "%1 %{BKY_IF_BUTTON_PRESS}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cannonball_drop",
        "message0": "%1 %{BKY_IF_CANNONBALL_DROP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.13
    , {
        "type": "common_02.13_ready",
        "message0": "%1 %{BKY_COMMON_02.13_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_time_true",
        "message0": "%1 %{BKY_LED_TUBE_TIME_TRUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_time_false",
        "message0": "%1 %{BKY_LED_TUBE_TIME_FALSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "clock_text",
        "message0": "%1 %{BKY_CLOCK_TEXT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.14
    , {
        "type": "common_02.14_ready",
        "message0": "%1 %{BKY_COMMON_02.14_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_humidity",
        "message0": "%1 %{BKY_LED_TUBE_HUMIDITY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_temperature",
        "message0": "%1 %{BKY_LED_TUBE_TEMPERATURE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_clock",
        "message0": "%1 %{BKY_LED_TUBE_CLOCK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "show_mode",
        "message0": "%1 %{BKY_SHOW_MODE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "mode_change",
        "message0": "%1 %{BKY_MODE_CHANGE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_humidity",
        "message0": "%1 %{BKY_IF_HUMIDITY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_temperature",
        "message0": "%1 %{BKY_IF_TEMPERATURE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_clock",
        "message0": "%1 %{BKY_IF_CLOCK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.15
    , {
        "type": "common_02.15_ready",
        "message0": "%1 %{BKY_COMMON_02.15_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "measure_distance",
        "message0": "%1 %{BKY_MEASURE_DISTANCE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "rain_show",
        "message0": "%1 %{BKY_RAIN_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "sun_show",
        "message0": "%1 %{BKY_SUN_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "continue",
        "message0": "%1 %{BKY_CONTINUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cm>50",
        "message0": "%1 %{BKY_IF_CM>50}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "sensor>20_if_else",
        "message0": "%1 %{BKY_SENSOR>20_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "tm1637_write_0",
        "message0": "%1 %{BKY_TM1637_WRITE_0}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.16
    , {
        "type": "common_02.16_ready",
        "message0": "%1 %{BKY_COMMON_02.16_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "old_cm",
        "message0": "%1 %{BKY_OLD_CM}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cm>30",
        "message0": "%1 %{BKY_IF_CM>30}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 02.17
    , {
        "type": "common_02.17_ready",
        "message0": "%1 %{BKY_COMMON_02.17_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "p_buzzer_on",
        "message0": "%1 %{BKY_P_BUZZER_ON}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "p_buzzer_off",
        "message0": "%1 %{BKY_P_BUZZER_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/sound.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#ec1961",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "led_tube_encoder",
        "message0": "%1 %{BKY_LED_TUBE_ENCODER}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomekit/led_tube.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF61FF",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "encoder_if_else",
        "message0": "%1 %{BKY_ENCODER_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            },
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.01
    , {
        "type": "common_03.01_ready",
        "message0": "%1 %{BKY_COMMON_03.01_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "angle_5",
        "message0": "%1 %{BKY_ANGLE_5}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cm<0",
        "message0": "%1 %{BKY_IF_CM<0}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.02
    , {
        "type": "common_03.02_ready",
        "message0": "%1 %{BKY_COMMON_03.02_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "move1_forward",
        "message0": "%1 %{BKY_MOVE1_FORWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
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
    , {
        "type": "move1_backward",
        "message0": "%1 %{BKY_MOVE1_BACKWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_backward.png",
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
    , {
        "type": "turn1_left",
        "message0": "%1 %{BKY_TURN1_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
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
    , {
        "type": "turn1_right",
        "message0": "%1 %{BKY_TURN1_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
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
    , {
        "type": "repeat_10",
        "message0": "%1 %{BKY_REPEAT_10}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.03
    , {
        "type": "common_03.03_ready",
        "message0": "%1 %{BKY_COMMON_03.03_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "mouse",
        "message0": "%1 %{BKY_MOUSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/mouse.png",
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
    , {
        "type": "flap",
        "message0": "%1 %{BKY_FLAP}",
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
    , {
        "type": "warigari",
        "message0": "%1 %{BKY_WARIGARI}",
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
    , {
        "type": "tick_tock",
        "message0": "%1 %{BKY_TICK_TOCK}",
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
    , {
        "type": "wiggle",
        "message0": "%1 %{BKY_WIGGLE}",
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
    , {
        "type": "ballet",
        "message0": "%1 %{BKY_BALLET}",
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
    , {
        "type": "left_swing",
        "message0": "%1 %{BKY_LEFT_SWING}",
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
    , {
        "type": "right_swing",
        "message0": "%1 %{BKY_RIGHT_SWING}",
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
    , {
        "type": "yaho",
        "message0": "%1 %{BKY_YAHO}",
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
    , {
        "type": "swing",
        "message0": "%1 %{BKY_SWING}",
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
    , {
        "type": "moonwalk",
        "message0": "%1 %{BKY_MOONWALK}",
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

    // 03.04
    , {
        "type": "common_03.04_ready",
        "message0": "%1 %{BKY_COMMON_03.04_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cm<10",
        "message0": "%1 %{BKY_IF_CM<10}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.05
    , {
        "type": "common_03.05_ready",
        "message0": "%1 %{BKY_COMMON_03.05_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "msg_read",
        "message0": "%1 %{BKY_MSG_READ}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_h",
        "message0": "%1 %{BKY_IF_MSG_H}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_f",
        "message0": "%1 %{BKY_IF_MSG_F}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_b",
        "message0": "%1 %{BKY_IF_MSG_B}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_l",
        "message0": "%1 %{BKY_IF_MSG_L}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_r",
        "message0": "%1 %{BKY_IF_MSG_R}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    // 03.06
    , {
        "type": "common_03.06_ready",
        "message0": "%1 %{BKY_COMMON_03.06_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "repeat_60",
        "message0": "%1 %{BKY_REPEAT_60}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "2angle_up",
        "message0": "%1 %{BKY_2ANGLE_UP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
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
    , {
        "type": "2angle_down",
        "message0": "%1 %{BKY_2ANGLE_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
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
    , {
        "type": "3angle_up",
        "message0": "%1 %{BKY_3ANGLE_UP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
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
    , {
        "type": "3angle_down",
        "message0": "%1 %{BKY_3ANGLE_DOWN}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
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
    , {
        "type": "turn_off",
        "message0": "%1 %{BKY_TURN_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
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

    // 03.07
    , {
        "type": "common_03.07_ready",
        "message0": "%1 %{BKY_COMMON_03.07_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "start_time",
        "message0": "%1 %{BKY_START_TIME}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "end_time",
        "message0": "%1 %{BKY_END_TIME}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "difference_time",
        "message0": "%1 %{BKY_DIFFERENCE_TIME}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.08
    , {
        "type": "common_03.08_ready",
        "message0": "%1 %{BKY_COMMON_03.08_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "home_turn_off",
        "message0": "%1 %{BKY_HOME_TURN_OFF}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.09
    , {
        "type": "common_03.09_ready",
        "message0": "%1 %{BKY_COMMON_03.09_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_play",
        "message0": "%1 %{BKY_MUSIC_PLAY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_add_C3",
        "message0": "%1 %{BKY_MUSIC_ADD_C3}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_add_D3",
        "message0": "%1 %{BKY_MUSIC_ADD_D3}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_add_E3",
        "message0": "%1 %{BKY_MUSIC_ADD_E3}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "music_update",
        "message0": "%1 %{BKY_MUSIC_UPDATE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.10
    , {
        "type": "common_03.10_ready",
        "message0": "%1 %{BKY_COMMON_03.10_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "servos_turn_off",
        "message0": "%1 %{BKY_SERVOS_TURN_OFF}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "angle_index",
        "message0": "%1 %{BKY_ANGLE_INDEX}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "get_angle_index",
        "message0": "%1 %{BKY_GET_ANGLE_INDEX}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_right.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "angle<0_if_else",
        "message0": "%1 %{BKY_ANGLE<0_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.11
    , {
        "type": "common_03.11_ready",
        "message0": "%1 %{BKY_COMMON_03.11_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "forward_motion_1",
        "message0": "%1 %{BKY_FORWARD_MOTION_1}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "forward_motion_2",
        "message0": "%1 %{BKY_FORWARD_MOTION_2}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "forward_motion_3",
        "message0": "%1 %{BKY_FORWARD_MOTION_3}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "forward_motion_4",
        "message0": "%1 %{BKY_FORWARD_MOTION_4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/move_forward.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.12
    , {
        "type": "common_03.12_ready",
        "message0": "%1 %{BKY_COMMON_03.12_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "turn_motion_1",
        "message0": "%1 %{BKY_TURN_MOTION_1}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "turn_motion_2",
        "message0": "%1 %{BKY_TURN_MOTION_2}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "turn_motion_3",
        "message0": "%1 %{BKY_TURN_MOTION_3}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "turn_motion_4",
        "message0": "%1 %{BKY_TURN_MOTION_4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/asomebot/turn_left.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#FF9A00",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.13
    , {
        "type": "common_03.13_ready",
        "message0": "%1 %{BKY_COMMON_03.13_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "repeat_4",
        "message0": "%1 %{BKY_REPEAT_4}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "wait_message",
        "message0": "%1 %{BKY_WAIT_MESSAGE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.14
    , {
        "type": "common_03.14_ready",
        "message0": "%1 %{BKY_COMMON_03.14_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "get_distance_if",
        "message0": "%1 %{BKY_GET_DISTANCE_IF}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm>100_to_prepare",
        "message0": "%1 %{BKY_CM>100_TO_PREPARE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm<20_to_close",
        "message0": "%1 %{BKY_CM<20_TO_CLOSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_prepare",
        "message0": "%1 %{BKY_IF_PREPARE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_close",
        "message0": "%1 %{BKY_IF_CLOSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 03.15
    , {
        "type": "common_03.15_ready",
        "message0": "%1 %{BKY_COMMON_03.15_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "get_motion",
        "message0": "%1 %{BKY_GET_MOTION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "motion_start",
        "message0": "%1 %{BKY_MOTION_START}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "asomebot_home_stop",
        "message0": "%1 %{BKY_ASOMEBOT_HOME_STOP}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_command_forward",
        "message0": "%1 %{BKY_IF_COMMAND_FORWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_command_backward",
        "message0": "%1 %{BKY_IF_COMMAND_BACKWARD}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_command_moonwalk",
        "message0": "%1 %{BKY_IF_COMMAND_MOONWALK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_command_stop",
        "message0": "%1 %{BKY_IF_COMMAND_STOP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.01
    , {
        "type": "common_04.01_ready",
        "message0": "%1 %{BKY_COMMON_04.01_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm_get_distance",
        "message0": "%1 %{BKY_CM_GET_DISTANCE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "s_duty_1",
        "message0": "%1 %{BKY_S_DUTY_1}",
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
    , {
        "type": "s_duty_128",
        "message0": "%1 %{BKY_S_DUTY_128}",
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
    , {
        "type": "cm<10_if_else",
        "message0": "%1 %{BKY_CM<10_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            },
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.02
    , {
        "type": "common_04.02_ready",
        "message0": "%1 %{BKY_COMMON_04.02_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.03
    , {
        "type": "common_04.03_ready",
        "message0": "%1 %{BKY_COMMON_04.03_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_0",
        "message0": "%1 %{BKY_COUNT_0}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_30",
        "message0": "%1 %{BKY_COUNT_30}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "1sec_count_down_10",
        "message0": "%1 %{BKY_1SEC_COUNT_DOWN_10}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "count_car_move",
        "message0": "%1 %{BKY_COUNT_CAR_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.04
    , {
        "type": "common_04.04_ready",
        "message0": "%1 %{BKY_COMMON_04.04_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.05
    , {
        "type": "common_04.05_ready",
        "message0": "%1 %{BKY_COMMON_04.05_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "sensor>300_if_else",
        "message0": "%1 %{BKY_SENSOR>300_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            },
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.06
    , {
        "type": "common_04.06_ready",
        "message0": "%1 %{BKY_COMMON_04.06_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_above_line",
        "message0": "%1 %{BKY_IF_ABOVE_LINE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_tilt_left",
        "message0": "%1 %{BKY_IF_TILT_LEFT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_tilt_right",
        "message0": "%1 %{BKY_IF_TILT_RIGHT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.07
    , {
        "type": "common_04.07_ready",
        "message0": "%1 %{BKY_COMMON_04.07_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "Fmoter_speed_down",
        "message0": "%1 %{BKY_FMOTER_SPEED_DOWN}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "changed_speed_forward",
        "message0": "%1 %{BKY_CHANGED_SPEED_FORWARD}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "changed_speed_print",
        "message0": "%1 %{BKY_CHANGED_SPEED_PRINT}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "repeat_15",
        "message0": "%1 %{BKY_REPEAT_15}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.08
    , {
        "type": "common_04.08_ready",
        "message0": "%1 %{BKY_COMMON_04.08_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_msg_receved",
        "message0": "%1 %{BKY_IF_MSG_RECEVED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.09
    , {
        "type": "common_04.09_ready",
        "message0": "%1 %{BKY_COMMON_04.09_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "min_speed",
        "message0": "%1 %{BKY_MIN_SPEED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "max_speed",
        "message0": "%1 %{BKY_MAX_SPEED}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "designated_speed_move",
        "message0": "%1 %{BKY_DESIGNATED_SPEED_MOVE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "designated_speed_down",
        "message0": "%1 %{BKY_DESIGNATED_SPEED_DOWN}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_cm<70",
        "message0": "%1 %{BKY_IF_CM<70}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "cm_10_if_else",
        "message0": "%1 %{BKY_CM_10_IF_ELSE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "if_state"
            }
            , {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            }
            , {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "else_state"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.10
    , {
        "type": "common_04.10_ready",
        "message0": "%1 %{BKY_COMMON_04.10_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "get_value",
        "message0": "%1 %{BKY_GET_VALUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "value_print",
        "message0": "%1 %{BKY_VALUE_PRINT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "value_turn",
        "message0": "%1 %{BKY_VALUE_TURN}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.11
    , {
        "type": "common_04.11_ready",
        "message0": "%1 %{BKY_COMMON_04.11_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "direction_change",
        "message0": "%1 %{BKY_DIRECTION_CHANGE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_obstacle_found",
        "message0": "%1 %{BKY_IF_OBSTACLE_FOUND}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.12
    , {
        "type": "common_04.12_ready",
        "message0": "%1 %{BKY_COMMON_04.12_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "line_sensor_value",
        "message0": "%1 %{BKY_LINE_SENSOR_VALUE}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "print_black_line",
        "message0": "%1 %{BKY_PRINT_BLACK_LINE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "change_count_up",
        "message0": "%1 %{BKY_CHANGE_COUNT_UP}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "above_line_initialization",
        "message0": "%1 %{BKY_ABOVE_LINE_INITIALIZATION}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "old_value_value",
        "message0": "%1 %{BKY_OLD_VALUE_VALUE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "if_out_of_line",
        "message0": "%1 %{BKY_IF_OUT_OF_LINE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            },
            {
                "type": "input_statement",
                "name": "while_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }

    // 04.13
    , {
        "type": "common_04.13_ready",
        "message0": "%1 %{BKY_COMMON_04.13_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "maze_maker_show",
        "message0": "%1 %{BKY_MAZE_MAKER_SHOW}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "maze_maker_set",
        "message0": "%1 %{BKY_MAZE_MAKER_SET}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "wait_button_click",
        "message0": "%1 %{BKY_WAIT_BUTTON_CLICK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "vertical_repeat",
        "message0": "%1 %{BKY_VERTICAL_REPEAT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "horizontal_repeat",
        "message0": "%1 %{BKY_HORIZONTAL_REPEAT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
            {
                "type": "input_dummy",
            }
            , {
                "type": "input_statement",
                "name": "do_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "loop_blocks",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    // 04.14
    , {
        "type": "common_04.14_ready",
        "message0": "%1 %{BKY_COMMON_04.14_READY}",
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
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "maze_maker_set_xy",
        "message0": "%1 %{BKY_MAZE_MAKER_SET_XY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "path_mark",
        "message0": "%1 %{BKY_PATH_MARK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "star_starting_point",
        "message0": "%1 %{BKY_STAR_STARTING_POINT}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "move_xy",
        "message0": "%1 %{BKY_MOVE_XY}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "find_next_move",
        "message0": "%1 %{BKY_FIND_NEXT_MOVE}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    , {
        "type": "wall_repeat_break",
        "message0": "%1 %{BKY_WALL_REPEAT_BREAK}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/space.png",
                "width": 10,
                "height": 30,
                "alt": "*"
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4cc1b9",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
]);