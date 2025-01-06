import eventbus from "@/globals/eventbus";
import speakerManager from "@/globals/speaker-manager";
import { Notify } from 'quasar';
import ble from "@/globals/ble";
import { useConnectStore } from '@/store/connect-store';

// Node.js FS (preload or nodeIntegration에 따라)
const fs = require('fs');

// === IPC
import { ipcRenderer } from 'electron';

let boardType = "Zet";

// ---------------------------------------------------
// (1) 메인 프로세스 -> 렌더러: 시리얼 데이터 수신
// ---------------------------------------------------
ipcRenderer.on('serial-data', (event, msg) => {
  console.log('[Renderer] serial-data:', msg);
  eventbus.emit('onSerialReceived', msg);
});

// ---------------------------------------------------
// (2) 포트가 닫혔음을 렌더러에 알리는 이벤트
// ---------------------------------------------------
ipcRenderer.on('serial-closed', () => {
  console.log('[Renderer] serial-closed');
  const connectStore = useConnectStore();
  // Pinia 스토어를 disconnected 로
  connectStore.disconnect();

  // 혹시 eventbus로도 알리고 싶다면
  eventbus.emit('onSerialClosed');
});

// ----------------------------------------------------------------------------
// 시리얼 제어 객체
// ----------------------------------------------------------------------------
const seiral = {
  setBoardType(boardInfo) {
    boardInfo.includes("esp32") ? (boardType = "Pro") : (boardType = "Zet");
    console.log("Board Type: " + boardType);
  },

  getBoardType() {
    return boardType;
  },

  // ----------------------------------------------------------
  // (A) connect(): 보드 검색 후 연결
  // ----------------------------------------------------------
  async connect() {
    const connectStore = useConnectStore();
    // 혹시 이미 연결되어 있으면 닫고 시작
    this.disconnect();

    let ports;
    try {
      ports = await ipcRenderer.invoke('list-serial-ports');
      console.log("[seiral.connect] ports:", ports);
    } catch (err) {
      console.error("Error listing ports:", err);
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다 (목록 조회 오류).");
      return;
    }

    if (!ports || ports.length === 0) {
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다.");
      return;
    }

    // '어썸보드'로 추정되는 포트 찾기
    const asomeboard = ports.find((port) =>
      (port.manufacturer && (
        port.manufacturer.startsWith("Silicon Labs") ||
        port.manufacturer.startsWith("wch.cn")
      )) ||
      (port.vendorId === "1a86")
    );
    if (!asomeboard) {
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다 (조건 불일치).");
      return;
    }

    // 포트 열기
    try {
      const result = await ipcRenderer.invoke('open-serial-port', {
        portPath: asomeboard.path,
      });
      if (!result || !result.success) {
        this.fireErrorEvent("어썸보드에 연결할 수가 없습니다.");
        return;
      }

      // 연결 성공
      console.log("[seiral.connect] 포트 연결 완료:", asomeboard.path);
      // Pinia 스토어에 모드=serial, connectionState=connected
      connectStore.setMode("serial");
      connectStore.connected();

      // eventbus
      eventbus.emit("onSerialConnected");

      // 필요하다면 보드 버전 요청
      // this.writeLn("import os; os.uname()");
    } catch (error) {
      console.error("Error opening port:", error);
      this.fireErrorEvent("어썸보드에 연결할 수가 없습니다.");
    }
  },

  // ----------------------------------------------------------
  // (B) disconnect(): 포트 닫기
  // ----------------------------------------------------------
  disconnect() {
    const connectStore = useConnectStore();
    if (connectStore.mode === 'ble') {
      ble.disconnect();
    }

    // 메인 프로세스에 포트 닫기 요청
    ipcRenderer.invoke('close-serial-port').catch((err) => {
      console.error("Error closing serial port:", err);
    });

    // Pinia 스토어도 disconnected로
    connectStore.disconnect();
  },

  // ----------------------------------------------------------
  // (C) 쓰기/명령 함수들
  // ----------------------------------------------------------
  write(text) {
    const connectStore = useConnectStore();
    if (connectStore.mode === 'ble') {
      ble.writeLn(text);
    } else if (connectStore.mode === 'serial') {
      text = this.encodeKorean(text);
      ipcRenderer.invoke('write-serial-port', { text }).catch(console.error);
    }
  },
  writeLn(text) {
    this.write(text + "\r\n");
  },

  encodeKorean(text) {
    if (text !== undefined && text !== null) {
      text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
    }
    return text;
  },

  // ----------------------------------------------------------
  // (D) runCode 등
  // ----------------------------------------------------------
  async runCode(codes) {
    console.log("runCode", codes);
    this.writeLn(`_codes_ = ""`);
    for (let code of codes.replaceAll("\r", "").split("\n")) {
      code = code.replace(/\\/gi, '\\\\');
      code = code.replace(/'/gi, "\\'");
      await new Promise((resolve) => setTimeout(resolve, 100));
      this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
    }
    this.writeLn(`exec(_codes_)\r\n`);
  },

  listFiles() {
    this.write(codeListFiles);
  },
  viewFile(filename) {
    this.runCode(codeViewFile(filename));
  },
  runFile(filename) {
    this.runCode(codeRunFile(filename));
  },
  deleteFile(filename) {
    this.runCode(codeDeleteFile(filename));
  },

  stop() {
    this.write(String.fromCharCode(3)); // Ctrl+C
  },
  reboot() {
    this.writeLn("import machine; machine.reset()");
  },
  format() {
    this.writeLn("import os; import flashbdev; os.VfsFat.mkfs(flashbdev.bdev)");
    this.writeLn("import machine; machine.reset()");
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
      speakerManager.save(filename, data.toString('base64'));
    });
  },
};

export default seiral;

// 파이썬 코드
const codeListFiles = 
`import os\r\n
_codes_ = ""\r\n
_codes_ = _codes_ + 'files = os.listdir("")\\n'\\r\\n
_codes_ = _codes_ + 'count = 0\\n'\\r\\n
_codes_ = _codes_ + 'for file in files:\\n'\\r\\n
_codes_ = _codes_ + '    if file == "system.run.temp.py":\\n'\\r\\n
_codes_ = _codes_ + '        continue\\n'\\r\\n
_codes_ = _codes_ + '    count = count + 1\\n'\\r\\n
_codes_ = _codes_ + '    print(file)\\n'\\r\\n
_codes_ = _codes_ + 'print(count, "files")\\n'\\r\\n
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
function codeRunFile(filename) {
  return `import disk;disk.run('${filename}')\r\n`;
}
function codeDeleteFile(filename) {
  return `import os; os.remove('${filename}')\r\n`;
}
