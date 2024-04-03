/**
 * POP UP 윈도우에서 메인 윈도우에 있는 시리얼 객체를 사용할 수 있도록 한다.
 */
export default {
    sendCommand(type) {
        const msg = {
            type: type,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },

    connect() {
        this.sendCommand('connect');
    },

    disconnect() {
        this.sendCommand('disconnect');
    },

    stop() {
        this.sendCommand('stop');
    },

    reboot() {
        this.sendCommand('reboot');
    },

    runCode(code) {
        const msg = {
            type: "runCode",
            params: code,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },

    write(code) {
        const msg = {
            type: "write",
            params: code,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },
    
    writeLn(code) {
        const msg = {
            type: "writeLn",
            params: code,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },
    
    writeInput(code) {
        const msg = {
            type: "writeInput",
            params: code,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },

    uploadTextToBoard(filename, text) {
        const msg = {
            type: "uploadTextToBoard",
            filename: filename,
            text: text,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },

    
    runBle(code) {
        const msg = {
            type: "runBle",
            params: code,
        };
        window.opener.postMessage(JSON.stringify(msg));
    },
}