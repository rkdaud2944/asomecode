import { useConnectStore } from '@/store/connect'
import eventbus from "@/globals/eventbus";

const noble = require('@abandonware/noble');
// const noble = require('noble');
// 쓰기
const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 읽기
const UUID_TX = '6e400003b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 전역 변수로 캐릭터리스틱 저장
let connectedCharacteristic = null; //rx
let TX_characteristic = null; //tx
// let text = "";

class BleUnit {

    serviceScan() {
        const connectStore = useConnectStore();
        noble.on('stateChange', (state) => {
            connectStore.scanning()
            if (state === 'poweredOn') {
                noble.startScanning([], false); // 모든 서비스에 대해 스캔
                this.connect();
            } else {
                // useConnectStore.disconnect()
                noble.stopScanning();
            }
        });
    }

    connect() {
        const connectStore = useConnectStore();
        connectStore.setMode('ble');

        noble.on('discover', (peripheral) => {
            if (peripheral.advertisement.localName && peripheral.advertisement.localName.includes('AsomeBot-A01')) {
                noble.stopScanning();

                peripheral.connect((error) => {
                    connectStore.connecting()
                    if (error) {
                        connectStore.handleError();
                        console.error('연결 실패:', error);
                        return;
                    }
                    try {
                        this.discoverService(peripheral);
                    } catch (error) {
                        connectStore.handleError();
                        console.log(error);
                    } finally {
                        connectStore.connected()
                        
                        eventbus.emit("onBleConnected");
                        eventbus.emit("onBleReceived", ">>>")
                        console.log('연결 완료됨');
                    }

                    // 연결 끊김 
                    peripheral.once('disconnect', () => {
                        connectStore.disconnect()
                        eventbus.emit("onBleDisconnected");
                        console.log('연결이 끊어졌습니다.');
                    });
                });
            }
        });
    }

    discoverService(peripheral) {

        peripheral.discoverServices([], (error, services) => {
            services.forEach((service) => {
                this.discoverChar(service);
            })
        });
    }

    discoverChar(service) {

        service.discoverCharacteristics([], (error, characteristics) => {
            characteristics.forEach((char) => {
                // 쓰기 UUID
                if (char.uuid === UUID_RX.replace(/-/g, '')) {
                    connectedCharacteristic = char;
                }

                // 읽기 UUID
                if (char.uuid === UUID_TX.replace(/-/g, '')) {
                    TX_characteristic = char

                    this.readData()
                }

            });
        })
    }

    readData() {
        TX_characteristic.subscribe((error) => {
            if (!error) {
                TX_characteristic.on('data', (data, isNotification) => {
                    if (isNotification){
                        eventbus.emit("onBleReceived", data.toString());
                    }
                });
            }
        })
    }

    sendData(text) {
        const data = Buffer.from(text, 'utf-8');
        connectedCharacteristic.write(data, false, (error) => {
            if (error) console.error('보내기 실패:', error);
        });
        connectedCharacteristic.write(Buffer.from([13], 'utf-8'), false, (error) => {
            if (error) console.error('보내기 실패:', error);
        });
    }

}

const bleConnect = {
    bleUnit: new BleUnit(),

    connect() {
        this.bleUnit = new BleUnit();
        this.bleUnit.serviceScan();        
    },

    write(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null) {
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        if (this.bleUnit) this.bleUnit.sendData(text);
    },

    writeLn(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null) {
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        // this.write(text +"\r\n");
        this.write(text);
    },

    runCode(codes) {
        console.log("runCode", codes);

        this.writeLn(`_codes_ = ""`);
        for (let code of codes.replaceAll("\r", "").split("\n")) {
            code = code.replace(/\\/gi, '\\\\');
            code = code.replace(/'/gi, "\\'");
            this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
        }
        this.writeLn(`exec(_codes_)`);
    },

}


export default bleConnect;