// import images from "@/assets/images";
// import Blockly from "blockly";
    

export { KitToolbox };

    const KitToolbox = {
        "kind": "categoryToolbox",
        "contents": [
            {
              "kind": "category",
              "name": "BASIC",
              "field" : "KIT",
              "colour": "14A2FF",
              "contents": [
                { "kind": "block", "gap": "8", "type": "basic_kit_ready" },
                { "kind": "block", "gap": "8", "type": "basic_turnoff_pins" }
              ],
          },
          {
              "kind": "category",
              "name": "PREPARE",
              "field" : "KIT",
              "colour": "FF9A00",
              "contents": [
                { "kind": "block", "gap": "8", "type": "prepare_led_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_RGBled_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_button_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_music_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_buzzer_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_tm_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_ledtube_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_vibration_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_ultrasonic_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_photoresistor_ready" },
                { "kind": "block", "gap": "8", "type": "prepare_photoresistor2_ready" },
              ],
          },
          {
              "kind": "category",
              "name": "LED",
              "field" : "KIT",
              "colour": "FF61FF",
              "contents": [
                { "kind": "block", "gap": "8", "type": "led_ready" },
                { "kind": "block", "gap": "8", "type": "led_setting" },
                { "kind": "block", "gap": "8", "type": "led_ledtube_ready" },
                { "kind": "block", "gap": "8", "type": "led_ledtube_time" },
              ],
          },
          {
              "kind": "category",
              "name": "BUTTON",
              "field" : "KIT",
              "colour": "4CC1B9",
              "contents": [
                { "kind": "block", "gap": "8", "type": "button_push" },
                { "kind": "block", "gap": "8", "type": "button_info" },
              ],
          },
          {
              "kind": "category",
              "name": "SENSOR",
              "field" : "KIT",
              "colour": "FFCD00",
              "contents": [
                { "kind": "block", "gap": "8", "type": "sensor_ultrasonic" },
                { "kind": "block", "gap": "8", "type": "sensor_humidity" },
                { "kind": "block", "gap": "8", "type": "sensor_temperature" },
                { "kind": "block", "gap": "8", "type": "sensor_water_level" },
                { "kind": "block", "gap": "8", "type": "sensor_brightness" },
                { "kind": "block", "gap": "8", "type": "sensor_sound" },
                { "kind": "block", "gap": "8", "type": "sensor_brightness_complete" },
                { "kind": "block", "gap": "8", "type": "sensor_sound_complete" },
                { "kind": "block", "gap": "8", "type": "sensor_soil_humidity" },
                { "kind": "block", "gap": "8", "type": "sensor_vibration_sensor" },
              ],
          },
          {
              "kind": "category",
              "name": "SOUND",
              "field" : "KIT",
              "colour": "EC1961",
              "contents": [
                { "kind": "block", "gap": "8", "type": "sound_buzzer_onoff" },
                { "kind": "block", "gap": "8", "type": "sound_bot_hz" },
                { "kind": "block", "gap": "8", "type": "sound_bot_scale" },
              ],
          },
          {
              "kind": "category",
              "name": "ADVANCE",
              "field" : "KIT",
              "colour": "55A55B",
              "contents": [
                { "kind": "block", "gap": "8", "type": "advance_waiting" },
                { "kind": "block", "gap": "8", "type": "advance_repeat" },
                { "kind": "block", "gap": "8", "type": "advance_endless_repeat" },
                { "kind": "block", "gap": "8", "type": "advance_if" },
                { "kind": "block", "gap": "8", "type": "advance_elseif" },
                { "kind": "block", "gap": "8", "type": "advance_if_logical" },
                { "kind": "block", "gap": "8", "type": "advance_elseif_logical" },
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
              "field" : "KIT",
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
