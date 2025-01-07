import { ipcRenderer } from "electron";
import { Notify } from "quasar";
import eventbus from "@/globals/eventbus";
import { useConnectStore } from "@/store/connect-store";
import ble from "@/globals/ble";

// 예: boardFileManager, boardUpdater, speakerManager 등
// import boardUpdater from "@/globals/board-updater";
// import boardFileManager from "@/globals/board-file-manager";

// const fs = require("fs");

let boardType = "Zet";

/** 
 * 1) 'serial-data' 이벤트: 
 *    모든 보드 출력이 여기로 옴.
 */
ipcRenderer.on("serial-data", (event, msg) => {
  console.log("[Renderer] serial-data:", msg);

  // A. eventbus로도 전달
  eventbus.emit("onSerialReceived", msg);

  // B. “(sysname=esp32...)” → setBoardType
  if (msg.startsWith("(sysname=")) {
    seiral.setBoardType(msg);
  }

  // C. “### Next File” / “### Next Line”을 여기서 잡아서 
  //    boardFileManager.nextFile(), boardFileManager.nextLine()을 호출 
  //    (로직상 필요 시)
  // if (msg.startsWith("### Next File")) {
  //   boardFileManager.nextFile();
  // }
  // if (msg.startsWith("### Next Line")) {
  //   boardFileManager.nextLine();
  // }

  // D. “### AsomeCODE.Version:” 이면 boardUpdater.updateFile(msg);
  //    ... etc
});

ipcRenderer.on("serial-closed", () => {
  console.log("[Renderer] serial-closed");
  const connectStore = useConnectStore();
  connectStore.disconnect();
  eventbus.emit("onSerialClosed");
});

/** 메인 시리얼 관리 객체 */
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
  // (A) connect(): 포트 목록 → 원하는 포트 open
  // --------------------------------------
  async connect() {
    const connectStore = useConnectStore();
    // 혹시 이미 연결 중이면 닫아주기
    this.disconnect();

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

    // 예: Silicon Labs / wch.cn / vendorId=1a86
    const asomeboard = ports.find(
      (p) =>
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

      // 연결 성공
      console.log("[seiral.connect] 연결 완료:", asomeboard.path);
      connectStore.setMode("serial");
      connectStore.connected();
      eventbus.emit("onSerialConnected");

      // 백그라운드에서 이미 "import os; os.uname()" 보냄
      // => (sysname=esp32...) 응답은 "serial-data" 이벤트로 받을 수 있음
    } catch (error) {
      console.error("Error opening port:", error);
      this.fireErrorEvent("어썸보드에 연결할 수가 없습니다.");
    }
  },

  // --------------------------------------
  // (B) disconnect(): 포트 닫기
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
  // (C) write / writeLn
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
  // (D) runCode, stop, reboot, ...
  // --------------------------------------
  async runCode(codes) {
    console.log("runCode", codes);
    this.writeLn(`_codes_ = ""`);
    const lines = codes.replaceAll("\r", "").split("\n");
    for (let line of lines) {
      // 이스케이프
      line = line.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      // 딜레이
      await new Promise(r => setTimeout(r, 100));
      this.writeLn(`_codes_ = _codes_ + '${line}\\n'`);
    }
    this.writeLn(`exec(_codes_)\r\n`);
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
