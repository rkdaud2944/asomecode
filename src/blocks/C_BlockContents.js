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
                { "kind": "block", "gap": "8", "type": "basic_ready" }
            ],
        },
        {
            "kind": "category",
            "name": "MOVE",
            "field" : "CAR",
            "colour": "FF9A00",
            "contents": [
                { "kind": "block", "gap": "8", "type": "move_stop" },
                { "kind": "block", "gap": "8", "type": "move_forward" },
                { "kind": "block", "gap": "8", "type": "move_back" },
                { "kind": "block", "gap": "8", "type": "move_left_fixed" },
                { "kind": "block", "gap": "8", "type": "move_right_fixed" },
                { "kind": "block", "gap": "8", "type": "move_left" },
                { "kind": "block", "gap": "8", "type": "move_right" },
                { "kind": "block", "gap": "8", "type": "move_speed_one" },
                { "kind": "block", "gap": "8", "type": "move_speed_all" },
            ],
        },
        {
            "kind": "category",
            "name": "SENSOR",
            "field" : "CAR",
            "colour": "FFCD00",
            "contents": [
                { "kind": "block", "gap": "8", "type": "sensor_ultrasonic" },
                { "kind": "block", "gap": "8", "type": "sensor_light" },
                { "kind": "block", "gap": "8", "type": "sensor_linesensor" },
            ],
        },
        {
            "kind": "category",
            "name": "ADVENCE",
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