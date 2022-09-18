/**
 * 서버에서 파일을 파이썬 또는 리소스 파일을 다운받아서 어썸보드에 저장한다.
 */

import config from "@/config";
import axios from "axios";
import serial from "./serial";
import eventbus from "@/utils/eventbus";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;
    if (!data.includes("### Next Line")) return;

    downloadToBoard.nextLine();
});

const buffer = [];

const downloadToBoard = {
    async download(filename) {
        let lines = [];
        try {
            const response = await axios.request(config.pythonUrl() + filename);            
            lines = response.data.replaceAll("\r", "").split("\n");
        } catch (error) {
            console.log(error);
            return;
        }
        const file = {
            isOpened: false,
            name: filename,
            lines: lines,
        }
        buffer.push(file);
        console.log("download", buffer);
        eventbus.emit("onSerialReceived", "### Next Line");
    },

    nextLine() {
        if (buffer.length == 0) return;

        console.log("nextLine", buffer);

        const file = buffer[0];
        if (file.lines.length == 0) {
            buffer.shift();
            serial.writeLn("f.close()");
            serial.writeLn("f = None");
            eventbus.emit("onSerialReceived", "### Next Line");
            return;
        }

        if (!file.isOpened) {
            file.isOpened = true;
            serial.writeLn(`f = open("${file.name}", "w")`);
        }

        const line = file.lines.shift().replaceAll('"', '\\"');
        serial.writeLn(`f.write("${line}\\n")`);
        serial.writeLn("### Next Line");
    },
};

export default downloadToBoard;