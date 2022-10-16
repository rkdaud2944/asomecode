Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "asomecar_at_the_side",
        "message0": "at the %1 %2 %3 %4 %5",
        "args0": [
            {
                "type": "field_variable",
                "name": "if_key",
                "variable": "i",
            }
            ,{
                "type": "field_dropdown",
                "name": "if_condition",
                "options": [["==","=="],[">",">"],["<","<"],[">=",">="], ["<=","<="], ["!=","!="]]
            }
            ,{
                "type": "field_dropdown",
                "name": "side",
                "options": [["left","1"],["right","2"],["both","4"], ["none","8"]]
            }
            ,{
                "type": "input_dummy"
            }
            ,{
                "type": "input_statement",
                "name": "if_state"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "common_internet_get_weather",
        "message0": "%1 %{BKY_COMMON_INTERNET_GET_WEATHER}",
        "args0": [
            {
                "type": "field_image",
                "src": "../common/images/block_icons/common/internet.png",
                "width": 30,
                "height": 30,
                "alt": "*"
            }
            ,{
                "type": "field_input",
                "name": "location_name",
                "text": "       "
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#b666fc",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "common_wait_for_secs",
        "message0": "%{BKY_COMMON_WAIT_FOR_SECS}",
        "args0": [
            {
                "type": "field_number",
                "name": "secs",
                "value": 1
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        "tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
    ,{
        "type": "common_start_timer",
        "message0": "%{BKY_COMMON_START_TIMER}",
        "args0": [

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#50a560",
        //"tooltip": "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        //"helpUrl": "%{BKY_CONTROLS_REPEAT_HELPURL}"
    }
]);