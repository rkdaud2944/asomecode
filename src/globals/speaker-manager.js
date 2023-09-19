import serial from "@/globals/serial";
import eventbus from "@/globals/eventbus";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### audio Next Line")) speakerManager.nextLine();
});

/**
 * base64로 변환된 wav파일을 보드에 txt파일로 저장
 */
const speakerManager = {
    save(fileName,data){
        fileName = "/fc/"+fileName+".txt"
        this.lines = [];
        for (let i = 0; i < data.length; i += 150) {
            this.lines.push(data.substring(i, i + 150));
        }
        
        serial.runCode(init)
        const line = this.lines.shift();
        serial.writeLn(`f = open("${fileName}", "w")`)
        serial.writeLn(`f.write("${line}")`);
        serial.writeLn(`print("### audio Next Line")`);
    },

    nextLine() {
        if (this.lines.length == 0) {
            serial.writeLn("f.close()");
            serial.writeLn("f = None");
            serial.writeLn('os.umount("/fc")');
            serial.writeLn('print("### End Saving audio")');
            return;
        }

        const line = this.lines.shift();
        serial.writeLn(`f.write("${line}")`);
        serial.writeLn('print("### audio Next Line")');
    },
}


export default speakerManager;

const init = `
import machine, os, sdcard
from machine import Pin, SoftSPI
spi= machine.SPI(sck=Pin(14), miso=Pin(12), mosi=Pin(13))
sd = sdcard.SDCard(spi, Pin(15))
vfs = os.VfsFat(sd)
os.mount(vfs, "/fc")`