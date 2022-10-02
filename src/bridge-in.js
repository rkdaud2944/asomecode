/**
 * App to Web 브릿지 메시지
 */

import serial from "./utils/serial";
import router from "@/router";

const bridge = {
    init() {
        //
    },

    refresh() {
        router.go();
    },

    loadUrl(url) {
        router.push({ path: window.atob(url) });
    },

    getCode(id) {
        const element = document.getElementById(id);
        return element.textContent;
    },

    runCode(code) {
        serial.runCode(code);
    },
};

window.refresh = bridge.refresh;
window.loadUrl = bridge.loadUrl;
window.getCode = bridge.getCode;
window.runCode = bridge.runCode;

export default bridge;