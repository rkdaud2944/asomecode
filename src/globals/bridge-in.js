import serial from "@/globals/serial";
import router from "@/router";
// import windows from "@/globals/windows";

/**
 * App to Web 브릿지 메시지
 */

let editor = [];
let lessonBlock = [];

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

    runCode(code) {
        serial.runCode(code);
    },

    openEditor(code) {
        const route = router.resolve({ path: '/editor' });
        localStorage.setItem("code", code);
        editor['editor'] = window.open(route.href, 'editor', 'width=800,height=600'); // 400 300
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

    // 기능블록
    presentSession(present, language) {
        console.log("lessonBlock : "+present + " language : "+language)
        // localStorage.setItem("lessonBlock", present);
        // window.open('/blockCoding')

        
        const route = router.resolve({ path: '/blockCoding' });
        lessonBlock['lessonBlock'] = window.open(route.href, 'lessonBlock', 'width=1000,height=900'); // 400 300
    },
    
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