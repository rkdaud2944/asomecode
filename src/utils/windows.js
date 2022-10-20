import serial from '@/utils/serial';

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
    }
});

export default {
    open(name, url) {
        windows[name] = window.open(url, name);
    },
}