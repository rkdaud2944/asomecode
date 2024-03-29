// import images from "@/assets/images";
// import Blockly from "blockly";


export { CarToolbox };

const CarToolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "BASIC",
            "field" : "CAR",
            "colour": "14A2FF",
            "contents": [
                { "kind": "block", "gap": "8", "type": "basic_car_ready" }
            ],
        },
        {
            "kind": "category",
            "name": "MOVE",
            "field" : "CAR",
            "colour": "FF9A00",
            "contents": [
                // { "kind": "block", "gap": "8", "type": "move_stop" },
                // { "kind": "block", "gap": "8", "type": "move_forward" },
                // { "kind": "block", "gap": "8", "type": "move_back" },
                // { "kind": "block", "gap": "8", "type": "move_left_fixed" },
                // { "kind": "block", "gap": "8", "type": "move_right_fixed" },
                // { "kind": "block", "gap": "8", "type": "move_left" },
                // { "kind": "block", "gap": "8", "type": "move_right" },
                // { "kind": "block", "gap": "8", "type": "move_speed_one" },
                // { "kind": "block", "gap": "8", "type": "move_speed_all" },
                
                { "kind": "block", "gap": "8", "type": "basic_asomecar_ready" },
                { "kind": "block", "gap": "8", "type": "asomecar_allStop" },
                { "kind": "block", "gap": "8", "type": "asomecar_forward" },
                { "kind": "block", "gap": "8", "type": "asomecar_backward" },
                { "kind": "block", "gap": "8", "type": "asomecar_turnRight" },
                { "kind": "block", "gap": "8", "type": "asomecar_turnLeft" },
                { "kind": "block", "gap": "8", "type": "asomecar_right" },
                { "kind": "block", "gap": "8", "type": "asomecar_left" },
                { "kind": "block", "gap": "8", "type": "asomecar_rightForward" },
                { "kind": "block", "gap": "8", "type": "asomecar_rightBack" },
                { "kind": "block", "gap": "8", "type": "asomecar_leftForward" },
                { "kind": "block", "gap": "8", "type": "asomecar_leftBack" },
            ],
        },
        {
            "kind": "category",
            "name": "LED",
            "field" : "CAR",
            "colour": "FF61FF",
            "contents": [
              { "kind": "block", "gap": "8", "type": "prepare_left_led_ready" },
              { "kind": "block", "gap": "8", "type": "prepare_right_led_ready" },
              { "kind": "block", "gap": "8", "type": "prepare_brake_led_ready" },
              { "kind": "block", "gap": "8", "type": "led_control" },
              { "kind": "block", "gap": "8", "type": "prepare_neopixel_ready" },
              { "kind": "block", "gap": "8", "type": "neopixel_turnoff" },
              { "kind": "block", "gap": "8", "type": "neopixel_turnon" },
              { "kind": "block", "gap": "8", "type": "neopixel_write" },
              { "kind": "block", "gap": "8", "type": "neopixel_all_turnon" },
              { "kind": "block", "gap": "8", "type": "neopixel_for_turnon" },
              { "kind": "block", "gap": "8", "type": "neopixel_rainbow" },
            ],
        },
        {
            "kind": "category",
            "name": "BUTTON",
            "field" : "CAR",
            "colour": "4CC1B9",
            "contents": [
            //   { "kind": "block", "gap": "8", "type": "button_push" },
            //   { "kind": "block", "gap": "8", "type": "button_info" },
              { "kind": "block", "gap": "8", "type": "asomecar_switch_ready" },
              { "kind": "block", "gap": "8", "type": "asomecar_switch_check" },
              { "kind": "block", "gap": "8", "type": "asomecar_button_ready" },
              { "kind": "block", "gap": "8", "type": "asomecar_button_check" },
            ],
        },
        {
            "kind": "category",
            "name": "SENSOR",
            "field" : "CAR",
            "colour": "FFCD00",
            "contents": [
                // { "kind": "block", "gap": "8", "type": "sensor_ultrasonic" },
                // { "kind": "block", "gap": "8", "type": "sensor_light" },
                // { "kind": "block", "gap": "8", "type": "sensor_linesensor" },
                { "kind": "block", "gap": "8", "type": "asomecar_prepare_ultrasonic_ready" },
                { "kind": "block", "gap": "8", "type": "asomecar_sensor_ultrasonic" },
                { "kind": "block", "gap": "8", "type": "servo_ready" },
                { "kind": "block", "gap": "8", "type": "servo_setangle" },
                { "kind": "block", "gap": "8", "type": "servo_off" },
                { "kind": "block", "gap": "8", "type": "servo_for_angle" },
            ],
        },
        {
            "kind": "category",
            "name": "SOUND",
            "field" : "CAR",
            "colour": "EC1961",
            "contents": [
                // { "kind": "block", "gap": "8", "type": "asomecar_buzzer_ready" },
                { "kind": "block", "gap": "8", "type": "asomecar_sound_buzzer_on" },
                { "kind": "block", "gap": "8", "type": "asomecar_sound_buzzer_off" },
                { "kind": "block", "gap": "8", "type": "sound_bot_hz" },
                { "kind": "block", "gap": "8", "type": "sound_bot_scale" }
            ],
        },
        {
            "kind": "category",
            "name": "ADVANCE",
            "field" : "CAR",
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
            "field" : "CAR",
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
    ]
};