// import axios from "axios";
// import serial from "./serial";
import eventbus from "@/globals/eventbus";
import { Notify } from 'quasar'

eventbus.on("onSerialReceived", (data) => {
    if (!data) return;

    if (data.startsWith("### OTP.Ready")) otp.read();
    if (data.startsWith("### OTP.Error")) otp.error();
    if (data.startsWith("### OTP.Result")) otp.result(data);
});

/**
 * OTP 인증을 처리한다.
 */
const otp = {
    // start(serialNumber) {
    //     this.serialNumber = serialNumber;
    //     serial.runCode(codeOptStart);
    // },

    read() {
        // let now = Date.now();
        // now = parseInt((now -946652400) / 60);
        // const timeStr = `[0x38, ${now >> 24}, ${now >> 16}, ${now >> 8}, ${now & 0xff}]`;
        // serial.runCode(getCodeOptRead(timeStr));
    },

    error() {
        Notify.create({
            color: "deep-orange",
            textColor: "white",
            message: "OTP 코드를 가져오지 못했습니다.",
        });
    },

    result(data) {
        const code = data.split(":")[1].trim();

        // TODO: 백엔드에 전달하고 인증 결과 가져와서 처리하기
        console.log("OTP 인증에 성공했습니다.", this.serialNumber, code);
    },
};

export default otp;

// const codeOptStart = `from machine import SoftI2C, Pin
// import array
// import time
// scl = Pin(22, pull=Pin.PULL_UP)
// sda = Pin(21, pull=Pin.PULL_UP)
// i2c = SoftI2C(scl, sda, freq=100000)
// opt_devices = i2c.scan()
// if (len(opt_devices) >= 1):
//     print("### OTP.Ready")
// else:
//     print("### OTP.Error")`;

// function getCodeOptRead(time) {
//     return `sndbuf = array.array('B', ${time})
// i2c.writeto(0x27, sndbuf)
// time.sleep(0.2)
// rcvbuf = i2c.readfrom(0x27, 6)
// print("### OTP.Result: " + rcvbuf.decode())`;
// }