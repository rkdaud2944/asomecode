import serial from "@/globals/serial";
import router from "@/router";
import windows from "@/globals/windows";

/**
 * App to Web 브릿지 메시지
 */
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

    openEditor(code) {
        console.log(code);
        localStorage.setItem("code", code);
        windows.open("editor", "/editor");
    },

    setCode(code) {
        console.log(code);
    },
};

window.refresh = bridge.refresh;
window.loadUrl = bridge.loadUrl;
window.getCode = bridge.getCode;
window.runCode = bridge.runCode;
window.openEditor = bridge.openEditor;

export default bridge;