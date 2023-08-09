/**
 * 보드에 전송 후 파일 생성
 */

// import axios from "axios";
// import config from "@/globals/config";
import serial from "@/globals/serial";
import eventbus from "@/globals/eventbus";

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### Saver Next Sound Line")) speakerManager.nextLine();
});


// const filename = "/fc/temp.txt";
const speakerManager = {
    save(text){
        console.log(1)
        this.lines = text.replaceAll("\r", "").replaceAll("\t", "    ").replaceAll('"', '\\"').split("\n");
    
        console.log(11)
        serial.writeLn(init);
        // serial.writeLn(`f = open("${filename}", "w")`);
        serial.writeLn(`with open(fn, "w") as f:`);
        console.log(111)
        serial.writeLn('print("### Saver Next Sound Line")');
        console.log(1111)
    
    },


    nextLine() {
        console.log(2)
        if (this.lines.length == 0) {
            serial.writeLn("f.close()");
            serial.writeLn("f = None");
            serial.writeLn('print("### End Saving Sound")');
            return;
        }

        const line = this.lines.shift();
        serial.writeLn(`f.write("${line}\\n")`);
        serial.writeLn('print("### Saver Next Sound Line")');
    },
}


export default speakerManager;

const init = `
import machine, os, sdcard\r\n
from machine import Pin, SoftSPI\r\n

spi= machine.SPI(sck=Pin(14), miso=Pin(12), mosi=Pin(13))\r\n
spi.init()  # Ensure right baudrate\r\n
sd = sdcard.SDCard(spi, Pin(15))  # Compatible with PCB\r\n
vfs = os.VfsFat(sd)\r\n
os.mount(vfs, "/fc")\r\n
`;

// const write = `
// with open(fn, "w") as f:
// `