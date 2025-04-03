import { ipcRenderer } from "electron";
import { Notify } from "quasar";
import eventbus from "@/globals/eventbus";
import { useConnectStore } from "@/store/connect-store";
import ble from "@/globals/ble";

// =======================
// (A) 파일 작업용 코드들
// =======================
const codeListFiles = `
import os
_codes_ = ""
_codes_ = _codes_ + 'files = os.listdir("")\\n'
_codes_ = _codes_ + 'count = 0\\n'
_codes_ = _codes_ + 'for file in files:\\n'
_codes_ = _codes_ + '    if file == "system.run.temp.py":\\n'
_codes_ = _codes_ + '        continue\\n'
_codes_ = _codes_ + '    count = count + 1\\n'
_codes_ = _codes_ + '    print(file)\\n'
_codes_ = _codes_ + 'print(count, "files")\\n'
exec(_codes_)
`;

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
  return `import disk; disk.run('${filename}')\r\n`;
}

function codeDeleteFile(filename) {
  return `import os; os.remove('${filename}')\r\n`;
}

// =======================
// (B) 보드 타입 관리
// =======================
let boardType = "Zet";

ipcRenderer.on("serial-data", (event, msg) => {
  console.log("[Renderer] serial-data:", msg);
  eventbus.emit("onSerialReceived", msg);

  if (msg.startsWith("(sysname=")) {
    seiral.setBoardType(msg);
  }
});

ipcRenderer.on("serial-closed", () => {
  console.log("[Renderer] serial-closed");
  const connectStore = useConnectStore();
  connectStore.disconnect();
  eventbus.emit("onSerialClosed");
});

const seiral = {
  setBoardType(str) {
    if (str.includes("esp32")) {
      boardType = "Pro";
    } else {
      boardType = "Zet";
    }
    console.log("Board Type:", boardType);
  },

  getBoardType() {
    return boardType;
  },

  // --------------------------------------
  // (1) connect(): 포트 목록 → 원하는 포트 open
  // --------------------------------------
  async connect() {
    const connectStore = useConnectStore();
    this.disconnect(); // 혹시 이미 연결되어 있으면 닫기

    let ports = [];
    try {
      ports = await ipcRenderer.invoke("list-serial-ports");
      console.log("[seiral.connect] got ports:", ports);
    } catch (err) {
      console.error("Error listing ports:", err);
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다 (목록 조회 오류).");
      return;
    }

    if (!ports || ports.length === 0) {
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다.");
      return;
    }

    // 특정 보드 찾기
    const asomeboard = ports.find((p) =>
      (p.manufacturer && (
        p.manufacturer.startsWith("Silicon Labs") ||
        p.manufacturer.startsWith("wch.cn")
      )) ||
      p.vendorId === "1a86"
    );
    if (!asomeboard) {
      this.fireErrorEvent("어썸보드를 찾을 수 없습니다 (조건 불일치).");
      return;
    }

    try {
      const result = await ipcRenderer.invoke("open-serial-port", {
        portPath: asomeboard.path,
      });
      if (!result || !result.success) {
        this.fireErrorEvent("어썸보드에 연결할 수가 없습니다.");
        return;
      }

      console.log("[seiral.connect] 연결 완료:", asomeboard.path);
      connectStore.setMode("serial");
      connectStore.connected();
      eventbus.emit("onSerialConnected");
      // 백그라운드에서 uname() 호출 -> "serial-data"로 (sysname=...) 받음
    } catch (error) {
      console.error("Error opening port:", error);
      this.fireErrorEvent("어썸보드를 찾을 수가 없습니다.");
    }
  },

  // --------------------------------------
  // (2) disconnect()
  // --------------------------------------
  disconnect() {
    const connectStore = useConnectStore();
    if (connectStore.mode === "ble") {
      ble.disconnect();
    }
    ipcRenderer.invoke("close-serial-port").catch(console.error);
    connectStore.disconnect();
  },

  // --------------------------------------
  // (3) write / writeLn
  // --------------------------------------
  write(text) {
    const connectStore = useConnectStore();
    if (connectStore.mode === "ble") {
      ble.writeLn(text);
    } else if (connectStore.mode === "serial") {
      text = this.encodeKorean(text);
      ipcRenderer.invoke("write-serial-port", { text }).catch(console.error);
    }
  },
  writeLn(text) {
    this.write(text + "\r\n");
  },

  encodeKorean(text) {
    if (!text) return text;
    return text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (m) => `{{${encodeURIComponent(m)}}}`);
  },

  // --------------------------------------
  // (4) runCode, stop, reboot, ...
  // --------------------------------------
  async runCode(codes) {
    console.log("runCode", codes);
    // Paste mode 진입: Ctrl+E (0x05)
    this.write(String.fromCharCode(0x05));
    // 진입 후 약간의 딜레이를 둡니다 (50ms 정도)
    await new Promise(r => setTimeout(r, 50));
  
    // 전체 코드를 그대로 전송합니다.
    // 코드를 수정할 필요가 있다면 (예: 이스케이프 등) 추가 처리할 수 있습니다.
    // 여기서는 줄바꿈(\r\n)을 포함하여 한 번에 전송합니다.
    this.write(codes + "\r\n");
  
    // Paste mode 종료: Ctrl+D (0x04)
    this.write(String.fromCharCode(0x04));
  },

  // async runCode(codes) {
  //   console.log("runCode", codes);
  //   this.writeLn(`_codes_ = ""`);
  //   const lines = codes.replaceAll("\r", "").split("\n");
  //   for (let line of lines) {
  //     // @@NOW 토큰 처리
  //     line = line.replace(/@@NOW/gi, currentTime());
  //     // 이스케이프 처리
  //     line = line.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  //     // 딜레이
  //     await new Promise(r => setTimeout(r, 100));
  //     this.writeLn(`_codes_ = _codes_ + '${line}\\n'`);
  //   }
  //   this.writeLn(`exec(_codes_)\r\n`);
  // },

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

  // --------------------------------------
  // (5) 파일 관련 함수 복원
  // --------------------------------------
  listFiles() {
    // 예전처럼 codeListFiles를 runCode()로 전송
    this.runCode(codeListFiles);
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

  fireErrorEvent(msg) {
    console.error(msg);
    Notify.create({
      color: "deep-orange",
      textColor: "white",
      message: msg,
    });
    eventbus.emit("onError", msg);
  },
};

export default seiral;

/**
 * 현재 시간을 파이썬의 datetime 형식과 유사하게 반환하는 함수
 * 예: (2023, 03, 15, 0, 14, 30, 45, 0)
 */
// function currentTime() {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   const day = String(now.getDate()).padStart(2, '0');
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   return `(${year}, ${month}, ${day}, 0, ${hours}, ${minutes}, ${seconds}, 0)`;
// }
