import { SerialPort, ReadlineParser } from "serialport";

let port = null;
let parser = null;

export default {
    async connect() {
        if (port !== null) this.disconnect();

        const asomeboard = await this.getAsomeboard();
        console.log(asomeboard);
        if (asomeboard == null) {
            // TODO: 오류 메시지 출력
            console.log("asomeboard not found");
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

        parser.on('data', console.log);

        port.on('close', () => {
            console.log('Seiral.closed');
            this.terminate();
        });
        port.on('error', (err) => {
            console.error("Seiral.error", err);
            this.terminate();
        });
        port.on('connected', (err) => {
            console.log('Seiral.connected', err);
            this.terminate();
        });

        try {
            port.open();
            // TODO: 이벤트 처리
            console.log('Seiral.open');
        } catch (error) {
            // TODO: 오류 메시지 출력
            console.log(error);
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

    async getAsomeboard() {
        const ports = await SerialPort.list();
        console.log(ports);
        return ports.find(port => port.manufacturer.startsWith("Silicon Labs"));
    }
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