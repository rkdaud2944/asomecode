// import images from "@/assets/images";
// import Blockly from "blockly";
    

export { LessonToolbox };

    const LessonToolbox  = {
        "kind": "categoryToolbox",
        
        // Session 01.03
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

                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.04
        "01.04": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_4_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_4_turnoff_pins" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_off" },

                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    { "kind": "block", "gap": "8", "type": "common_delay_5" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],
        
        // Session 01.05
        "01.05": [
            { 
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.05",
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
                "field" : "01.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_6_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_6_mute" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_6_tone_400" },
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
                "field" : "01.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_red_max" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_green_max" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_blue_max" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_red_mid" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_green_mid" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_blue_mid" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_red_off" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_green_off" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_7_blue_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_red_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_green_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_blue_random" },
                    
                    { "kind": "block", "gap": "8", "type": "common_delay_0.1" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],
        
        // Session 01.08
        "01.08": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.08",
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

        // Session 01.09
        "01.09": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_dht_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_dht_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_display" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.10
        "01.10": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_10_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_10_20pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_10_20pin_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_10_illuminance_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_10_sensor_2000_if_else" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.11.01
        "01.11.01": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.11.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_11_1_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_3_13pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_3_13pin_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_1_sound_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_11_1_sensor_4000_if_else" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.11.02
        "01.11.02": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.11.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_stove_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_stove_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_down" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.12
        "01.12": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_message_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_message_print" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_if_message_receice" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.13
        "01.13": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_13_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_13_bibration_active" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_13_message_send" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_13_vibration_detection" },
                    
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.14
        "01.14": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_14_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit1_14_soil_sensor_show" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_14_soil_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_14_message_send" },
                    { "kind": "block", "gap": "8", "type": "common_delay_5" },
                    { "kind": "block", "gap": "8", "type": "pro_kit1_14_need_water" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.15
        "01.15": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.15",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_led_tube_count" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_count_100" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_count_minus" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_if_0" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_button_clicked" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.01
        "02.01": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_1_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_light_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_sound_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_sound_off" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.01" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_for_100" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_for_10" },
                ],
            },
        ],

        // Session 02.02
        "02.02": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_2_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_car_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_car_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_save" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.03
        "02.03": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_3_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_3_led_tube_cm" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_3_get_distance" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.02" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.04
        "02.04": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_4_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_open" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_close" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_get_distance" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_20_cm" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.05
        "02.05": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.05",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_5_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_flag_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_situation_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_countdown" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_1_win" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_2_win" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_1_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_2_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.06
        "02.06": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_6_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_start" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_left" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_right" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_direction_left" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_direction_right" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.07
        "02.07": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_7_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_maze_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_maze_apply" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_vert" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_vert_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_button_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_hori" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_vert" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.08
        "02.08": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.08",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_8_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_puzzle_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_puzzle_shuffle" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_vert" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_hori_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_vert_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_button_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_hori" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_vert" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.09
        "02.09": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_9_ready" },

                    { "kind": "block", "gap": "8", "type": "pro_kit2_9_nomal_mode" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_9_min_mode" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_9_sec_mode" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_9_mode_plus_1" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_change_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_timer_change" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_timer_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_countdown" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_buzzer_2sec" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_if_bt1_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_if_bt2_clicked" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.10
        "02.10": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_start" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_speed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_if_landed" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.11
        "02.11": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.11",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_engine_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_engine_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_ship_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_ship_explode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_if_landed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_if_speed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_11_bt_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.12
        "02.12": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_12_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_power" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_angle_45" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_angle" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_fire" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_if_bt_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_y_0" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.13
        "02.13": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_led_tube_time_true" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_led_tube_time_false" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_print_time" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.14
        "02.14": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_14_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_leds_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_clock_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_temp_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_humi_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_if_bt_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_mode_change" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_clock" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_temp" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_humi" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.15
        "02.15": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.15",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_15_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_sun" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_rain" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_off" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_15_water_sensor_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_distance" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_continue" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_if_50" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_15_water_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.16
        "02.16": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.16",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_16_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_distance" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_change_value" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_buzzer_2sec" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_distance_save" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_if_30" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.17
        "02.17": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.17",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "pro_kit2_17_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_led_tube_encoder" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_buzzer_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_buzzer_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_sensor_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.03-Zet
        "01.03-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_connect" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_off" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.04-Zet
        "01.04-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_red_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_yellow_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_4_green_led_off" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    { "kind": "block", "gap": "8", "type": "common_delay_5" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.05-Zet
        "01.05-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.05",
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

        // Session 01.06-Zet
        "01.06-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_do" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_re" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_mi" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_fa" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_so" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_la" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_ti" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_6_h_do" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.07-Zet
        "01.07-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_red_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_green_random" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_7_rgb_blue_random" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.1" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.08-Zet
        "01.08-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.08",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_active_buzzer_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_active_buzzer_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_water_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_8_sensor_50_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.09-Zet
        "01.09-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_dht_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_dht_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_9_display" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.10-Zet
        "01.10-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_10_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_10_illuminance_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_10_sensor_200_if_else" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.11.01-Zet
        "01.11.01-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.11.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_1_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_3_4pin_led_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_1_sound_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_1_sensor_50_if_else" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.11.02-Zet
        "01.11.02-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.11.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_stove_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_stove_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_11_2_down" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.12-Zet
        "01.12-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_message_read" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_message_print" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_12_if_message_receice" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.13-Zet
        "01.13-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_13_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_13_vibration_detection" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_13_message_send" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.14-Zet
        "01.14-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_14_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_14_need_water" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_14_message_send" },
                    { "kind": "block", "gap": "8", "type": "common_delay_5" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 01.15-Zet
        "01.15-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "01.15",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_led_tube_count" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_button_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_count_100" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_count_minus" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_15_if_0" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.01-Zet
        "02.01-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_light_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_sound_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_1_sound_off" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.01" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.02-Zet
        "02.02-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_car_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_car_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_save" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.03-Zet
        "02.03-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_3_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_3_led_tube_cm" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_3_get_distance" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.02" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.04-Zet
        "02.04-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_open" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_door_close" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_get_distance" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_4_20_cm" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.05-Zet
        "02.05-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.05",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_flag_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_situation_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_countdown" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_1_win" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_2_win" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_1_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_5_2_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.06-Zet
        "02.06-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_start" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_left" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_spacecraft_right" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_direction_left" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_direction_right" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.07-Zet
        "02.07-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_button_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_maze_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_maze_apply" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_vert" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_vert_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_hori" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_vert" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.08-Zet
        "02.08-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.08",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_button_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_puzzle_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_puzzle_shuffle" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_hori_vert" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_hori_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_8_vert_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_hori" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_7_if_vert" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.09-Zet
        "02.09-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_if_bt1_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_if_bt2_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_change_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_timer_change" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_timer_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_countdown" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_9_buzzer_2sec" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.10-Zet
        "02.10-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_6_button_clicked_wait" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_start" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_speed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_lunar_down" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_10_if_landed" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.12-Zet
        "02.12-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_if_bt_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_show" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_power" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_angle" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_fire" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_cannon_move" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit1_break" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_y_0" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.13-Zet
        "02.13-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_led_tube_time_true" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_led_tube_time_false" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_13_print_time" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.14-Zet
        "02.14-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_leds_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_clock_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_temp_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_humi_mode" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_12_if_bt_clicked" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_mode_change" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_clock" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_temp" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_14_if_humi" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.15-Zet
        "02.15-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.15",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_sun" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_rain" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_distance" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_continue" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_if_50" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_15_water_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.16-Zet
        "02.16-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.16",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_distance" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_buzzer_2sec" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_distance_save" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_16_if_30" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 02.17-Zet
        "02.17-Zet": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "02.17",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_ready" },

                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_led_tube_encoder" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_update" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_buzzer_on" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_buzzer_off" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_2_encoder_changed" },
                    { "kind": "block", "gap": "8", "type": "zet_kit2_17_sensor_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.01
        "03.01": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_1_left" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_right" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_stop" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_cm_angle" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_distance" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.2" },

                    { "kind": "block", "gap": "8", "type": "code_bot_1_continue" },
                    { "kind": "block", "gap": "8", "type": "code_bot_1_if_dis_err" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.02
        "03.02": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_turn_right" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_for_10" },
                ],
            },
        ],

        // Session 03.03
        "03.03": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_3_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "dance_ballet" },
                    { "kind": "block", "gap": "8", "type": "dance_wiggle" },
                    { "kind": "block", "gap": "8", "type": "dance_flap" },
                    { "kind": "block", "gap": "8", "type": "dance_mouse" },
                    { "kind": "block", "gap": "8", "type": "dance_warigari" },
                    { "kind": "block", "gap": "8", "type": "dance_swing" },
                    { "kind": "block", "gap": "8", "type": "dance_right_swing" },
                    { "kind": "block", "gap": "8", "type": "dance_left_swing" },
                    { "kind": "block", "gap": "8", "type": "dance_tick_tock" },
                    { "kind": "block", "gap": "8", "type": "dance_yaho" },
                    { "kind": "block", "gap": "8", "type": "dance_moonwalk" },
                ],
            },
        ],

        // Session 03.04
        "03.04": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_4_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_bot_4_distance" },
                    { "kind": "block", "gap": "8", "type": "code_bot_4_distance_print" },
                    { "kind": "block", "gap": "8", "type": "code_bot_4_if_cm_10" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_for_10" },

                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.05
        "03.05": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.05",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_read_text" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_msg" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_h" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_f" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_b" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_l" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_if_r" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_print_msg" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.06
        "03.06": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_turn_off" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_2m_plus" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_2m_minus" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_3m_plus" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_3m_minus" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_right_out" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_right_in" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_right_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_left_out" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_left_in" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_left_home" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.01" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.02" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_for_30" },
                    { "kind": "block", "gap": "8", "type": "code_bot_6_for_60" },
                ],
            },
        ],

        // Session 03.07
        "03.07": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_7_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "dance_moonwalk" },
                    { "kind": "block", "gap": "8", "type": "code_bot_7_ticks_ms" },
                    { "kind": "block", "gap": "8", "type": "code_bot_7_start_tick" },
                    { "kind": "block", "gap": "8", "type": "code_bot_7_tick" },
                    { "kind": "block", "gap": "8", "type": "code_bot_7_print_tick" },
                ],
            },
        ],

        // Session 03.08
        "03.08": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.08",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_bot_5_read_text" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_if_h" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_if_f" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_if_b" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_if_l" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_if_r" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.09
        "03.09": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_9_music_play" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_do" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_re" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_mi" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_fa" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_so" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_la" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_ti" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_add_h_do" },
                    { "kind": "block", "gap": "8", "type": "code_bot_9_music_update" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.10
        "03.10": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_10_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_10_motor_duty0" },
                    { "kind": "block", "gap": "8", "type": "code_bot_10_angle_index_angle" },
                    { "kind": "block", "gap": "8", "type": "code_bot_10_input_index_angle" },
                    { "kind": "block", "gap": "8", "type": "code_bot_10_angle_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.11
        "03.11": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.11",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_11_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_forward_1" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_forward_2" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_forward_3" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_forward_4" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_delay_0.2" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.12
        "03.12": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_12_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_12_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_12_turn_1" },
                    { "kind": "block", "gap": "8", "type": "code_bot_12_turn_2" },
                    { "kind": "block", "gap": "8", "type": "code_bot_12_turn_3" },
                    { "kind": "block", "gap": "8", "type": "code_bot_12_turn_4" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_delay_0.2" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.13
        "03.13": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_13_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_2_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_delay_0.2" },
                    { "kind": "block", "gap": "8", "type": "code_bot_13_for_4" },
                    { "kind": "block", "gap": "8", "type": "code_bot_13_for_10" },
                    { "kind": "block", "gap": "8", "type": "code_bot_13_msg_wait" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.14
        "03.14": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_2_home" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_distance" },
                    { "kind": "block", "gap": "8", "type": "code_bot_11_delay_0.2" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_pass" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_change_close" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_change_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_print_stop" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_100_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_20_close" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_if_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_if_close" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_if_100" },
                    { "kind": "block", "gap": "8", "type": "code_bot_14_if_elif" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 03.15
        "03.15": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "03.15",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_ready" },

                    { "kind": "block", "gap": "8", "type": "code_bot_15_stop" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_8_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_moonwalk" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_motion_start" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_motion_get" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_command_3" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_if_stop" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_if_forward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_if_backward" },
                    { "kind": "block", "gap": "8", "type": "code_bot_15_if_moonwalk" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.01
        "04.01": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.01",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_1_stop" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_get_distance" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_continue" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_distance_error" },
                    { "kind": "block", "gap": "8", "type": "code_car_1_cm_10_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.02
        "04.02": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.02",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_2_move_stop" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_move_backward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_rotate_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_rotate_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_turn_right" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.03
        "04.03": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.03",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_3_move_count" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_get_distance" },
                    { "kind": "block", "gap": "8", "type": "common_delay_2" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_count_0" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_count_30" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_count_minus" },
                    { "kind": "block", "gap": "8", "type": "code_car_3_10_if" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.04
        "04.04": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.04",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_2_move_stop" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_move_backward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_rotate_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_rotate_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_read_text" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_if_msg" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_msg_h" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_msg_f" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_msg_b" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_msg_l" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_msg_r" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_print_msg" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.05
        "04.05": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.05",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_5_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_5_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "code_car_5_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_5_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_5_read_300_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.06
        "04.06": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.06",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_6_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_6_sensor_read" },
                    { "kind": "block", "gap": "8", "type": "code_car_6_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_turn_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_turn_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_6_if_both" },
                    { "kind": "block", "gap": "8", "type": "code_car_6_if_left" },
                    { "kind": "block", "gap": "8", "type": "code_car_6_if_right" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.07
        "04.07": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.07",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_7_move_stop" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_fast_speed" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_slow_speed" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_fasts_minus" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_fasts" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_print_fasts" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_print_i" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_print_forward_speed" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_print_backward_speed" },
                    { "kind": "block", "gap": "8", "type": "common_delay_1" },
                    { "kind": "block", "gap": "8", "type": "code_car_7_for_15" },
                ],
            },
        ],

        // Session 04.08
        "04.08": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.08",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_8_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_8_move_stop" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_2_rotate_right" },
                    { "kind": "block", "gap": "8", "type": "code_car_8_break" },
                    { "kind": "block", "gap": "8", "type": "common_delay_0.5" },
                    { "kind": "block", "gap": "8", "type": "common_delay_3" },
                    { "kind": "block", "gap": "8", "type": "code_car_4_read_text" },
                    { "kind": "block", "gap": "8", "type": "code_car_8_if_msg" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.09
        "04.09": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.09",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_9_move_speed" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_speed_0" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_speed_max" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_speed_down" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_get_distance" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_cm_70_if" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_cm_10_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.10
        "04.10": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.10",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_10_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_10_motor_duty" },
                    { "kind": "block", "gap": "8", "type": "code_car_10_input" },
                    { "kind": "block", "gap": "8", "type": "code_car_10_print" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.11
        "04.11": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.11",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_11_move_forward" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_turn" },
                    { "kind": "block", "gap": "8", "type": "code_car_9_get_distance" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_print_yes" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_print_no" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_obstacle" },
                    { "kind": "block", "gap": "8", "type": "code_car_11_cm_line_if_else" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.12
        "04.12": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.12",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_12_line_read" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_timer_start" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_print_count" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_timer_reset" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_count_1" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_count_1_minus" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_save_value" },
                    { "kind": "block", "gap": "8", "type": "code_car_12_line_out" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.13
        "04.13": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.13",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_13_maze_show" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_maze_set_009" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_maze_set_119" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_maze_set_110" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_set_maze" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_bt_wait" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_for_x" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_for_y" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],

        // Session 04.14
        "04.14": [
            {
                "kind": "category", 
                "name": "BASIC",
                "field" : "04.14",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_car_ready" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_ready" },

                    { "kind": "block", "gap": "8", "type": "code_car_13_maze_show" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_set_maze" },
                    { "kind": "block", "gap": "8", "type": "code_car_13_bt_wait" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_cell_type_break" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_find_next_move" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_move_xy" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_path" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_star" },
                    { "kind": "block", "gap": "8", "type": "code_car_14_delay" },

                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                ],
            },
        ],
    };
