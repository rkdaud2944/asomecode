// import serial from "@/globals/serial";
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

    // TODO: App이 아닌 내부에서만 사용하기 때문에 분리해야 함
    /**
     * 엘레먼트 id 태그 안에 텍스트를 리턴한다.
     * @param id 엘레먼트 id
     * @returns 엘ㄹ먼트 내부 텍스트
     */
    getCode(id) {
        const element = document.getElementById(id);
        return element.textContent;
    },

    // runCode(code) {
    //     // serial.runCode(code);
    // },

    openEditor(code) {
        console.log(code);
        localStorage.setItem("code", code);
        windows.open("editor", "/editor");
    },

    setWifiInfo() {
        const wifiName = document.getElementById('wifi_name').value;
        const wifiPassword = document.getElementById('wifi_password').value;
        document.getElementById("인터넷-연결하기").innerText =
            `import internet; internet.connect('${wifiName}', '${wifiPassword}')`;
    },

    setAsomeMessengerInfo() {
        const connectCode = document.getElementById('asome_connect_code').value;
        const msg = document.getElementById('asome_msg').value;
        document.getElementById("asome-messenger").innerText =
            `import http_utils; http_utils.send_msg('${connectCode}', '${msg}')`;
    },

    presentSession(present, language) {
        localStorage.setItem("stage", present);
        window.open(`/AsomeBlock/BlockCoding.html?language=${language}`)
    }
};

window.refresh = bridge.refresh;
window.loadUrl = bridge.loadUrl;
window.getCode = bridge.getCode;
window.runCode = bridge.runCode;
window.openEditor = bridge.openEditor;
window.setWifiInfo = bridge.setWifiInfo;
window.setAsomeMessengerInfo = bridge.setAsomeMessengerInfo;
window.presentSession = bridge.presentSession;

export default bridge;