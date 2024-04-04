import serial from '@/globals/serial';
import boardFileSaver from '@/globals/board-file-saver';
import otp from "@/globals/otp";
import ble from "@/globals/ble";

let windows = [];

window.addEventListener('message', (msg) => {
    let message = {};
    
    // 데이터가 문자열인지 체크하여 JSON.parse()를 조건적으로 사용합니다.
    if (typeof msg.data === 'string') {
        try {
            message = JSON.parse(msg.data);
        } catch (error) {
            console.error('Error parsing message data as JSON:', error);
            return; // 에러 발생 시 함수 실행을 중단합니다.
        }
    }

    switch (message.type) {
        case 'connect': serial.connect(); break;
        case 'disconnect': serial.disconnect(); break;
        case 'stop': serial.stop(); break;
        case 'reboot': serial.reboot(); break;
        case 'runCode': serial.runCode(message.params); break;
        case 'writeInput': serial.writeInput(message.params); break; // 'writeInput' 오타 수정 'writeInput
        case 'uploadTextToBoard': boardFileSaver.save(message.filename, message.text); break;
        case 'verifyOtp': otp.start(message.params); break;
        case 'runBle': ble.writeLn(this.content); break;
    }
});

/**
 * POP UP WINDOW를 오픈하고 관리한다.
 * 메인 윈도우와 통신하기 위해 메시지 통신을 지원한다.
 */
export default {
    /**
     * POP UP WINDOW를 오픈한다.
     * @param name 팝업 윈도우의 이름
     * @param url 팝업 윈도우의 URL
     */
    open(name, url) {
        console.log("winodws.js 에서의 open()")
        windows[name] = window.open(url, name);
    },

    /**
     * simulator의 자바스크립트를 실행한다.
     */
    runJS(name, line) {
        if (!windows[name]) return;

        const params = {
            type: "runJS",
            line: line,
        };
        windows[name].postMessage(JSON.stringify(params));
    }
};