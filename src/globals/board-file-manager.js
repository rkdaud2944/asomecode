/**
 * 파일 목록을 전달 받아서 서버로부터 다운받은 후 어썸보드에 저장한다.
 */

import axios from "axios";
import config from "@/globals/config";
import serial from "@/globals/serial";
import eventbus from "@/globals/eventbus";

eventbus.on("onSerialReceived", (data) => {
  if (!data) return;

  if (data.startsWith("### Next File")) boardFileManager.nextFile();
  if (data.startsWith("### Next Line")) boardFileManager.nextLine();
});

let tobeDowndloads = [];
let currentFile = {};

const boardFileManager = {
  async download(filenames) {
    tobeDowndloads = filenames;
    serial.writeLn('print("### Next File")');
  },

  async nextFile() {
    if (tobeDowndloads.length == 0) {
      serial.reboot();
      eventbus.emit("onUpdateComplete");
      return;
    }

    let filename = tobeDowndloads.shift();
    let lines = [];
    try {
      const response = await axios.get(config.pythonUrl(localStorage.getItem('updateMode')) + filename);
      lines = response.data.replace(/\r/g, "").replace(/\t/g, "    ").replace(/"/g, '\\"').split("\n");
    } catch (error) {
      console.log(error);
      return;
    }
    currentFile = {
      opened: false,
      name: filename,
      lines: lines,
    };
    serial.writeLn('print("### Next Line")');
  },

  nextLine() {
    if (currentFile.lines.length == 0) {
      serial.writeLn("f.close()");
      serial.writeLn("f = None");
      serial.writeLn('print("### Next File")');
      return;
    }

    if (!currentFile.opened) {
      currentFile.opened = true;
      serial.writeLn(`f = open("${currentFile.name}", "w")`);
    }

    const line = currentFile.lines.shift();
    serial.writeLn(`f.write("${line}\\n")`);
    serial.writeLn('print("### Next Line")');
  },
};

export default boardFileManager;
