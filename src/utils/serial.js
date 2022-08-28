import { SerialPort, ReadlineParser } from "serialport";
import eventbus from "@/utils/eventbus";

let port = null;
let parser = null;

export default {
    async getAsomeboard() {
        const ports = await SerialPort.list();
        console.log(ports);
        return ports.find(port => port.manufacturer.startsWith("Silicon Labs"));
    },

    async connect() {
        if (port !== null) this.disconnect();

        const asomeboard = await this.getAsomeboard();
        if (asomeboard == null) {
            eventbus.emit("onError", "어썸보드를 찾을 수 없습니다.");
            return;
        }

        port = new SerialPort({
            path: asomeboard.path,
            baudRate: 115200,
            autoOpen: false,
            lock: false,
        });

        parser = new ReadlineParser({ delimiter: '\r\n' });
        port.pipe(parser);

        parser.on('data', (msg) => {
            eventbus.emit("onSerialReceived", msg)
        });

        port.on('close', () => {
            this.terminate();
            eventbus.emit("onSerialClosed");
        });
        port.on('error', () => {
            this.disconnect();
            eventbus.emit("onError", "어썸보드에서 오류가 감지되었습니다.");
        });

        try {
            port.open();
            eventbus.emit("onSerialConnected");
        } catch (error) {
            console.log(error);
            eventbus.emit("onError", "어썸보드에 연결할 수가 없습니다.");
            port = null;
            return;
        }
    },

    disconnect() {
        try {
            port.close();
        } catch (error) {
            console.log(error);
        }
        this.terminate();
    },

    terminate() {
        port = null;
        parser = null;
    },

    list() {
        SerialPort.list().then(console.log);
    },

    write(text) {
        if (port == null) return;
        try {
            port.write(text);
        } catch (error) {
            console.log(error);
        }
    },

    writeLn(text) {
        if (port == null) return;
        try {
            port.write(text +"\r\n");
        } catch (error) {
            console.log(error);
        }
    },

    stop() {
        this.write(String.fromCharCode(3));
    },

    reboot() {
        this.writeLn("import machine; machine.reset()");
    },

    format() {
        this.writeLn("import os; import flashbdev; os.VfsFat.mkfs(flashbdev.bdev)");
        this.writeLn("import machine; machine.reset()");
    },

    listFiles() {
        this.write(codeListFiles);
    },

    runCode(codes) {
        this.writeLn( `_codes_ = ""`);
        for (let code of codes.split("\r\n")) {
            // sLine := RemoveComment(sLine);
            // sLine := Space2Tab(Lines[Loop]);
            // sLine := StringReplace(sLine, #9, '\t', [rfReplaceAll]);
            code = code.replace(/\\/gi, '\\\\');
            code = code.replace(/'/gi, "\\'");
            code = code.replace(/{mod}/gi, "%");
            code = code.replace(/@@NOW/gi, "CurrentTime");
            this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
        }
        this.writeLn(`exec(_codes_)`);
    },
}

const codeListFiles =
`import os\r\n
_codes_ = ""\r\n
_codes_ = _codes_ + 'files = os.listdir("")\\n'\r\n
_codes_ = _codes_ + 'count = 0\\n'\r\n
_codes_ = _codes_ + 'for file in files:\\n'\r\n
_codes_ = _codes_ + '    if file == "system.run.temp.py":\\n'\r\n
_codes_ = _codes_ + '        continue\\n'\r\n
_codes_ = _codes_ + '    count = count + 1\\n'\r\n
_codes_ = _codes_ + '    print(file)\\n'\r\n
_codes_ = _codes_ + 'print(count, "files")\\n'\r\n
exec(_codes_)\r\n`;