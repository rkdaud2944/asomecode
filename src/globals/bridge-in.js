import serial from "@/globals/serial";
import router from "@/router";
import boardFileSaver from '@/globals/board-file-saver';
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


    writeLn(code) {
        serial.writeLn(code);
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

    setClockWifiInfo() {
        const wifiName = document.getElementById('wifi_name').value;
        const wifiPassword = document.getElementById('wifi_password').value;
        document.getElementById("clock-wifi").innerText =
        `import internet; connect_wifi = lambda: internet.connect('${wifiName}', '${wifiPassword}')`;
    },

    openWifiInfo() {
        const wifi_open = document.getElementById('wifi_open').value;
        document.getElementById("asome-wifi-open").innerText =
            `import internet; internet.open_ap('${wifi_open}')`
    },

    setAsomeMessengerInfo() {
        const connectCode = document.getElementById('asome_connect_code').value;
        const msg = document.getElementById('asome_msg').value;
        document.getElementById("asome-messenger").innerText =
            `import http_utils; http_utils.send_msg('${connectCode}', '${msg}')`;
    },

    // 기능블록
    presentSession(present) {
        localStorage.setItem("lessonBlock", present);

        
        const route = router.resolve({ path: '/blockCoding' });
        lessonBlock['lessonBlock'] = window.open(route.href, 'lessonBlock', 'width=1000,height=900');
    },

    saveBotBase() {
        const align01 = document.getElementById('align01').value;
        const align02 = document.getElementById('align02').value;
        const align03 = document.getElementById('align03').value;
        const align04 = document.getElementById('align04').value;
        bridge.runCode(`f = open("asomebot_align.py", "w")
f.write("### AsomeCODE.Version: asomebot_align.py=1 :End.")
f.write(chr(0x0A))
f.write("base = (${align01}, ${align02}, ${align03}, ${align04})")
f.write(chr(0x0A))
f.close()
f = None

import machine
machine.reset()`);
    
        // 저장 후 인풋 값을 모두 90으로 초기화
        document.getElementById('align01').value = 90;
        document.getElementById('align02').value = 90;
        document.getElementById('align03').value = 90;
        document.getElementById('align04').value = 90;
    },
    

    checkBotBase() {
        bridge.runCode(`import asomebot_align
print("pin5 =",asomebot_align.base[0], "pin6 =",asomebot_align.base[1], "pin7 =",asomebot_align.base[2], "pin8 =",asomebot_align.base[3],)`)
    },

    testBotBase() {
        const align01 = document.getElementById('align01').value;
        const align02 = document.getElementById('align02').value;
        const align03 = document.getElementById('align03').value;
        const align04 = document.getElementById('align04').value;
        bridge.runCode(`import asomebot
asomebot.ready(5, 6, 7, 8)
asomebot.angle(0,${align01})
asomebot.angle(1,${align02})
asomebot.angle(2,${align03})
asomebot.angle(3,${align04})
print("pin5 = ${align01}, pin6 =${align02}, pin7 =${align03}, pin8 = ${align04}")`)
    },

    internetinquiry() {
        bridge.runCode(`
import internet;
print(internet.ifconfig())`)
    },

    internetwebinquiry() {
        bridge.runCode(`
import http_utils
print( http_utils.get_time("@@NOW") )`)
    },

    messageprogarmrun() {
        bridge.runCode(`
import udp_socket
s = udp_socket.Server()
s.open(1234)
while True:
    msg = s.read_text()
    if msg:
        print(msg)`)
    },

    reset() {
        bridge.runCode(`
import machine;
machine.reset()`)
    },

    deletemain() {
        bridge.runCode(`
import os;
os.remove('main.py')`)
    },

    showSlider140() {
        const route = router.resolve({ path: '/simulation/slider140' });
        window.open(route.href, 'lessonBlock', 'width=400,height=400');
    },
    
    contentsUploadFile(fileName,code) {
        // 인풋태그 찾아서 그 값을 wifiname으로 변경
        var wifiName = "AsomeotSolo"
        try{
            if(document.getElementById("wifi_open").value){
                wifiName = document.getElementById("wifi_open").value;
                // console.log("안망했쏘~ : " +wifiName)
            }
        } catch {
            // console.log("아 망했네!! : "+wifiName)
        }

        // wifiname을 넣기위해 업로드될 코드 조개기
        var result_code = "0"
        console.log("Test code : "+code)
        var code_1 = code.split('internet.open_ap("')[0];
        console.log("code_1 : "+code_1)
        var code_warp = code.split('internet.open_ap("')[1];
        console.log("code_warp : "+code_warp)
        var code_3 = code_warp.split('AomebotSolo")')[1];
        console.log("code_3 : "+code_3)
        var code_2 = 'internet.open_ap("'+wifiName+'")';
        console.log("code_2 : "+code_2)
        result_code = code_1 + code_2 + code_3;
        boardFileSaver.save(fileName,result_code)
    },
    
    connectcontentsUploadFile(fileName,code) {
        // 인풋태그 찾아서 그 값을 wifiname으로 변경
        var connectwifiName = "AsomeIT"
        try{
            if(document.getElementById("connect_wifi_open").value){
                connectwifiName = document.getElementById("connect_wifi_open").value;
                console.log("바꾼커넥트 : " +connectwifiName)
            }
        } catch {
            // console.log("아 망했네!! : "+wifiName)
        }

        // wifiname을 넣기위해 업로드될 코드 조개기
        var result_code = "0"
        console.log("Test code : "+code)
        var code_1 = code.split('internet.connect("')[0];
        console.log("code_1 : "+code_1)
        var code_warp = code.split('internet.connect("')[1];
        console.log("code_warp : "+code_warp)
        var code_3 = code_warp.split('AsomeIT", "")')[1];
        console.log("code_3 : "+code_3)
        var code_2 = 'internet.connect("'+connectwifiName+'")';
        console.log("code_2 : "+code_2)
        result_code = code_1 + code_2 + code_3;
        boardFileSaver.save(fileName,result_code)
    },
    
};

window.refresh = bridge.refresh;
window.loadUrl = bridge.loadUrl;
window.getCode = bridge.getCode;
window.runCode = bridge.runCode;
window.writeLn = bridge.writeLn;
window.openEditor = bridge.openEditor;
window.setWifiInfo = bridge.setWifiInfo;
window.setClockWifiInfo = bridge.setClockWifiInfo;
window.openWifiInfo = bridge.openWifiInfo;
window.setAsomeMessengerInfo = bridge.setAsomeMessengerInfo;
window.presentSession = bridge.presentSession;
window.saveBotBase = bridge.saveBotBase;
window.checkBotBase = bridge.checkBotBase;
window.testBotBase = bridge.testBotBase;
window.internetinquiry = bridge.internetinquiry;
window.internetwebinquiry = bridge.internetwebinquiry;
window.messageprogarmrun = bridge.messageprogarmrun;
window.reset = bridge.reset;
window.deletemain = bridge.deletemain;
window.showSlider140 = bridge.showSlider140;
window.contentsUploadFile = bridge.contentsUploadFile;
window.connectcontentsUploadFile = bridge.connectcontentsUploadFile;

export default bridge;