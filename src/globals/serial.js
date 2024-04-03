import { SerialPort, ReadlineParser } from "serialport";
import eventbus from "@/globals/eventbus";
import speakerManager from "@/globals/speaker-manager";
import { Notify } from 'quasar'
// import {useConnectStore} from '@/store/connect-store'

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;
    
    if (data.startsWith("(sysname=")) {
        seiral.setBoardType(data);
    }

    if (data.startsWith("### Speech to text")) {
        localStorage.setItem("stt", "OK");
        localStorage.removeItem("stt");
        eventbus.emit("sttReceived"); // 이벤트 발생시키기
    }
});

let serialUnit = null;
let boardType = "Zet";
const fs = require('fs');

class SerialUnit {
    async open(portName) {
        // useConnectStore.connecting();

        this.port = new SerialPort({
            path: portName,
            baudRate: 115200,
            autoOpen: false,
            lock: false,
        });

        this.parser = new ReadlineParser({ delimiter: '\r\n' });
        this.port.pipe(this.parser);

        this.parser.on('data', (msg) => this.onReceived(msg));
        this.port.on('close', () => {
            if (this.port != null) this.onClosed()
        });
        this.port.on('error', (error) => {
            console.log(error);
            this.close();
            // useConnectStore.handleError();
            // this.onError("어썸보드에서 오류가 감지되었습니다.");
            console.log("어썸보드에서 오류가 감지되었습니다.")
        });

        try {
            await this.port.open();            
            this.onOpened();
            // useConnectStore.connected();
            this.writeLn("import os; os.uname()");
            this.writeLn("");
        } catch (error) {
            console.log(error);
            
            // useConnectStore.handleError();
            this.onError("어썸보드에 연결할 수가 없습니다.");
            return;
        }
    }

    
    close() {
        if (!this.port) return;

        const port = this.port;

        this.port = null;
        this.parser = null;

        try {
            port.close();            
        } catch (error) {
            console.log(error);
        }
    }

    write(text) {
        if (this.port == null) return;
        try {
            this.port.write(text);
        } catch (error) {
            console.log(error);
        }
    }

    writeLn(text) {
        if (this.port == null) return;
        try {
            this.port.write(text +"\r\n");
        } catch (error) {
            console.log(error);
        }
    }
}

/**
 * 시리얼 포트를 열고, 시리얼 포트로부터 데이터를 읽거나 쓰는 등의 기능을 제공한다.
 */
const seiral = {
    setBoardType(boardInfo) {
        boardInfo.includes("esp32") ? boardType = "Pro" : boardType = "Zet";
        console.log("Board Type: " + boardType);
    },

    getBoardType() {
        return boardType;
    },

    async getAsomeboard() {
        const ports = await SerialPort.list();
        console.log(ports);
        return ports.find((port) =>
            port.manufacturer &&
            (port.manufacturer.startsWith("Silicon Labs") || port.manufacturer.startsWith("wch.cn")) || (port.vendorId === "1a86")
        );
    },

    async connect() {
        this.disconnect();
        
        const asomeboard = await this.getAsomeboard();
        if (asomeboard == null) {
            this.fireErrorEvent("어썸보드를 찾을 수 없습니다.");
            return;
        }

        serialUnit = new SerialUnit();
        serialUnit.onOpened = () => eventbus.emit("onSerialConnected");
        serialUnit.onClosed = () => eventbus.emit("onSerialClosed");
        serialUnit.onReceived = (msg) => eventbus.emit("onSerialReceived", msg);
        serialUnit.onError = (error) => this.fireErrorEvent(error);
        serialUnit.open(asomeboard.path);

        console.log("연결 완료")
    },
    
    disconnect() {
        if (serialUnit == null) return;

        serialUnit.close();
        serialUnit = null;
    },

    list() {
        SerialPort.list().then(console.log);
    },

    write(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null){
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        if (serialUnit) serialUnit.write(text);
    },

    writeLn(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null){
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        this.write(text +"\r\n");
    },

    writeInput(text) {
        if (serialUnit) serialUnit.write(text +"\r\n");
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

    viewFile(filename) {
        this.runCode(codeViewFile(filename));
    },

    async runCode(codes) {
        console.log("runCode", codes);

        this.writeLn( `_codes_ = ""`);
        for (let code of codes.replaceAll("\r", "").split("\n")) {
            // TODO: 파이썬 코드의 주석을 삭제한다. 특히 한글 주석은 보드에 에러를 유발할 수 있다.
            // sLine := RemoveComment(sLine);

            // TODO: 델파이와 달라서 필요 없을 듯. 확인 후  삭제
            // sLine := Space2Tab(Lines[Loop]);
            // sLine := StringReplace(sLine, #9, '\t', [rfReplaceAll]);
            // code = code.replace(/{mod}/gi, "%");
            // code = code.replace(/@@NOW/gi, "CurrentTime");

            code = code.replace(/\\/gi, '\\\\');
            code = code.replace(/'/gi, "\\'");

            await new Promise(resolve => setTimeout(resolve, 100)); 

            this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
        }
        this.writeLn(`exec(_codes_)`);
    },

    fireErrorEvent(msg) {
        eventbus.emit("onError", msg);
        Notify.create({
            color: "deep-orange",
            textColor: "white",
            message: msg,
        });
    },

    audioWrite(filename, path) {
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            data = data.slice(44);
            speakerManager.save(filename,data.toString('base64'));
        }); 
    },
}

export default seiral;

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

function codeViewFile(filename) {
    return `print("### System.Start.View")
f = open("${filename}", "r")
while True:
    line = f.readline()
    if not line:
        break
    print("> " + line[:-1])
f.close()
print("### System.End.View")`;
}