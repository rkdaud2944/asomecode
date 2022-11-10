import serial from '@/globals/serial';
import otp from "@/globals/otp";

let windows = [];

window.addEventListener('message', (msg) => {
    let message = {};
    try {
        message = JSON.parse(msg.data);
    } catch (error) {
        console.log(error, msg);
    }

    switch (message.type) {
        case 'connect': serial.connect(); break;
        case 'disconnect': serial.disconnect(); break;
        case 'stop': serial.stop(); break;
        case 'reboot': serial.reboot(); break;
        case 'runCode': serial.runCode(message.params); break;
        case 'verifyOtp': otp.start(message.params); break;
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
        windows[name] = window.open(url, name);
    },
};