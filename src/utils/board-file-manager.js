/**
 * 파일을 파이썬 또는 리소스 파일을 다운받아서 어썸보드에 저장한다.
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
    async saveText(filename, text) {
        const file = {
            isOpened: false,
            name: filename,
            lines: text.replaceAll("\r", "").split("\n"),
        }
        buffer.push(file);
        eventbus.emit("onSerialReceived", "### Next Line");
    },

    async download(filename) {
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
        const file = {
            isOpened: false,
            name: filename,
            lines: lines,
        }
        buffer.push(file);
        eventbus.emit("onSerialReceived", "### Next Line");
    },

    nextLine() {
        if (buffer.length == 0) return;

        const file = buffer[0];
        if (file.lines.length == 0) {
            buffer.shift();
            serial.writeLn("f.close()");
            serial.writeLn("f = None");
            // TODO: 비동기 오류 발생, 시리얼 포트로 전송해서 싱크해야 함 (### 명령어 이벤트 버스 사용하면 안됨)
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