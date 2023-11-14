// import images from "@/assets/images";
// import Blockly from "blockly";
    

export { BotToolbox };

    const BotToolbox  = {
        "kind": "categoryToolbox",

        "contents": [
            {
                "kind": "category",
                "name": "BASIC",
                "field" : "BOT",
                "colour": "14A2FF",
                "autoClose": "true",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "basic_ready"},
                    { "kind": "block", "gap": "8", "type": "basic_attention" },
                    { "kind": "block", "gap": "8", "type": "basic_motor_angle" },
                ],
            },
            {
                "kind": "category",
                "name": "WALK",
                "field" : "BOT",    
                "colour": "FF9A00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "walk_step_forward" },
                    { "kind": "block", "gap": "8", "type": "walk_step_back" },
                    { "kind": "block", "gap": "8", "type": "walk_step_left" },
                    { "kind": "block", "gap": "8", "type": "walk_step_right" },
                    { "kind": "block", "gap": "8", "type": "walk_motor_angle" },
                    { "kind": "block", "gap": "8", "type": "walk_all_motor_angle" },
                    { "kind": "block", "gap": "8", "type": "walk_forward" },
                    { "kind": "block", "gap": "8", "type": "walk_back" },
                    { "kind": "block", "gap": "8", "type": "walk_left" },
                    { "kind": "block", "gap": "8", "type": "walk_right" },
                    
                ],
            },
            {
                "kind": "category",
                "name": "DANCE",
                "field" : "BOT",
                "colour": "FF61FF",
                "contents": [
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
            {
                "kind": "category",
                "name": "SENSOR",
                "field" : "BOT",
                "colour": "FFCD00",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "sensor_ultrasonic" },
                    { "kind": "block", "gap": "8", "type": "sensor_hand_detection" },
                    { "kind": "block", "gap": "8", "type": "sensor_hand_check" }
                ],
            },
            {
                "kind": "category",
                "name": "SOUND",
                "field" : "BOT",
                "colour": "EC1961",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "sound_buzzer_on" },
                    { "kind": "block", "gap": "8", "type": "sound_buzzer_off" },
                    { "kind": "block", "gap": "8", "type": "sound_bot_hz" },
                    { "kind": "block", "gap": "8", "type": "sound_bot_scale" }
                ],
            },
            {
                "kind": "category",
                "name": "ADVANCE",
                "field" : "BOT",
                "colour": "55A55B",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "advance_waiting" },
                    { "kind": "block", "gap": "8", "type": "advance_repeat" },
                    { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                    { "kind": "block", "gap": "8", "type": "advance_if" },
                    { "kind": "block", "gap": "8", "type": "advance_elseif" },
                    { "kind": "block", "gap": "8", "type": "int" },
                    { "kind": "block", "gap": "8", "type": "mark_int" },
                    { "kind": "block", "gap": "8", "type": "screen" },
                    { "kind": "block", "gap": "8", "type": "break" },
                    { "kind": "block", "gap": "8", "type": "variable" },
                    
                ],
            },
            {
                "kind": "category",
                "name": "INTERNET",
                "field" : "BOT",
                "colour": "B666FC",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "internet_connect" },
                    { "kind": "block", "gap": "8", "type": "nonpass_wifi" },
                    { "kind": "block", "gap": "8", "type": "get_message" },
                    { "kind": "block", "gap": "8", "type": "message" },
                    { "kind": "block", "gap": "8", "type": "send_message" },
                    { "kind": "block", "gap": "8", "type": "get_weather" },
                ],
            },
            {
                "kind": "category",
                "name": "AI",
                "field" : "BOT",
                "colour": "5058D1",
                "contents": [
                    { "kind": "block", "gap": "8", "type": "internet_connect" },
                    { "kind": "block", "gap": "8", "type": "nonpass_wifi" },
                    { "kind": "block", "gap": "8", "type": "get_message" },
                    { "kind": "block", "gap": "8", "type": "message" },
                    { "kind": "block", "gap": "8", "type": "send_message" },
                    { "kind": "block", "gap": "8", "type": "get_weather" },
                ],
            },
        ]
    };
