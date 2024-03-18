// import images from "@/assets/images";
// import Blockly from "blockly";
    

export { LessonToolbox };

    const LessonToolbox  = {
        "kind": "categoryToolbox",
        
        // Session 3
        "01.03": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_3_13pin_led_connect" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_3_13pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_3_13pin_led_off" },

                    { "kind": "block", "gap": "8", "type": "advance_waiting_0.5" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 4
        "01.04": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_4_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_off" },

                    { "kind": "block", "gap": "8", "type": "advance_waiting" },
                    { "kind": "block", "gap": "8", "type": "advance_waiting_5" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],
        
        // Session 5
        "01.05": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_5_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_5_dice_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_5_dice_roll" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_5_button_clicked" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.06
        "01.06": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_6_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_do" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_re" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_mi" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_fa" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_so" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_la" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_ti" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_h_do" },
                ],
            },
        ],
        
        // Session 01.07
        "01.07": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_red_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_green_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_blue_random" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_waiting_0.1" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],
        
        // Session 01.08
        "01.08": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_8_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_active_buzzer_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_active_buzzer_off" }
                    ,
                    { "kind": "block", "gap": "8", "type": "pro_kit1_8_water_sensor_show" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_8_water_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_8_sensor_20_if_else" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],


    };
