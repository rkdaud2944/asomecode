/**
 * 텍스트 데이터를 보드의 파일로 저장한다.
 */

import serial from "@/globals/serial";
import eventbus from "@/globals/eventbus";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### Saver Next Line")) boardFileSaver.nextLine();
});

const boardFileSaver = {
    save(filename, text) {
        this.filename = filename;
        this.lines = text.replaceAll("\r", "").replaceAll("\t", "    ").replaceAll('"', '\\"').split("\n");

        serial.writeLn(`f = open("${filename}", "w")`);
        serial.writeLn('print("### Saver Next Line")');
    },

    nextLine() {
        if (this.lines.length == 0) {
            serial.writeLn("f.close()");
            serial.writeLn("f = None");
            serial.writeLn('print("파일 업로드 완료")');
            serial.writeLn('');
            return;
        }

        const line = this.lines.shift();
        serial.writeLn(`f.write("${line}\\n")`);
        serial.writeLn('print("### Saver Next Line")');
    },
};

export default boardFileSaver;