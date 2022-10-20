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
}