/**
 * 파일을 파이썬 또는 리소스 파일을 다운받아서 어썸보드에 저장한다.
 */

import config from "@/config";
import axios from "axios";
import serial from "./serial";
import eventbus from "@/globals/eventbus";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### Next File")) downloadToBoard.nextFile();
    if (data.startsWith("### Next Line")) downloadToBoard.nextLine();
});

let tobeDowndloads = [];
let currentFile = {};

const downloadToBoard = {
    async download(filenames) {
        tobeDowndloads = filenames;
        serial.writeLn('print("### Next File")');
    },

    async nextFile() {
        if (tobeDowndloads.length == 0) {
            serial.reboot();
            return;
        }

        let filename = tobeDowndloads.shift();
        let lines = [];
        try {
            const response = await axios.request(config.pythonUrl() + filename);
            let text = response.data.replaceAll("\r", "");
            text = text.replaceAll("\t", "    ");
            lines = text.split("\n");
        } catch (error) {
            console.log(error);
            return;
        }
        currentFile = {
            opened: false,
            name: filename,
            lines: lines,
        }
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

        const line = currentFile.lines.shift().replaceAll('"', '\\"');
        serial.writeLn(`f.write("${line}\\n")`);
        serial.writeLn('print("### Next Line")');
    },
};

export default downloadToBoard;