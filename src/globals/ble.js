import { useConnectStore } from '@/store/connect-store'
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


// var  serviceUUIDs  = ['6E400003-B5A3-F393-E0A9-E50E24DCCA9E'] ; 
// var  allowDuplicates  = false;

class BleUnit {
    constructor() {
        this.peripheralToConnectId = null; // 연결할 장치 ID
    }
    serviceScan() {
        const connectStore = useConnectStore();
    
        noble.removeAllListeners('stateChange');  // 기존 'stateChange' 이벤트 리스너 제거
        noble.on('stateChange', (state) => {
            connectStore.scanning();
            if (state === 'poweredOn') {
                noble.startScanning([], true); // 모든 장치 스캔
            } else {
                noble.stopScanning();
            }
        });
    
        noble.removeAllListeners('discover');
        noble.on('discover', (peripheral) => {
            const deviceName = peripheral.advertisement.localName;
            
            // 이름이 있는 장치만 추가
            if (deviceName) {
                const deviceData = {
                    id: peripheral.id,
                    name: deviceName,
                    rssi: peripheral.rssi,
                    uuid: peripheral.uuid,
                    advertisement: peripheral.advertisement,
                };
                // console.log(`장치 발견: ${deviceName} (ID: ${peripheral.id})`);
                eventbus.emit("onBleScan", deviceData);
            }
            
        });
    
        // 현재 상태가 'poweredOn'이면 즉시 스캔 시작
        if (noble.state === 'poweredOn') {
            noble.startScanning([], true);
        }
    }

    stopScanning() {
        noble.stopScanning();
        console.log("BLE 스캔이 중지되었습니다.");
    }

    connectToDevice(peripheralId) {        
        this.peripheralToConnectId = peripheralId;

        noble.removeAllListeners('discover');
        // noble의 기존 discover 이벤트를 통해 peripheral을 찾고 연결
        noble.on('discover', (peripheral) => {
            if (peripheral.id === this.peripheralToConnectId) {
                noble.stopScanning(); // 연결을 시도할 때 스캔을 중지
                this.connectToPeripheral(peripheral); // 찾은 peripheral로 연결 시도
            }
        });

        noble.startScanning([], false); // 장치 검색 재시작
    }

    async connectToPeripheral(peripheral) {
        noble.stopScanning();
        await peripheral.connect((error) => {
            const connectStore = useConnectStore();
            connectStore.setMode('ble');
            if (error) {
                connectStore.handleError();
                eventbus.emit("onBleConnectError", error);
                return;
            }
            this.discoverService(peripheral);
            connectStore.connected();
            eventbus.emit("onBleConnected");
            // this.writeLn("import os; os.uname()");

            peripheral.once('disconnect', () => {
                connectStore.disconnect();
                eventbus.emit("onBleDisconnected");
                console.log("BLE 연결이 끊어졌습니다.");
            });
        });
        
        await this.sendData("import os; os.uname()");
    }

    discoverService(peripheral) {
        peripheral.discoverServices([], (error, services) => {
            services.forEach((service) => {
                this.discoverChar(service);
            });
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
                    
                    if (isNotification) {
                        const receivedData = data.toString();
                        const [mainData, promptData] = receivedData.split(">>>");
                        if (mainData && mainData.trim()) {
                            eventbus.emit("onBleReceived", mainData.trim());
                        }
                        if (promptData !== undefined) {
                            eventbus.emit("onBleReceived", ">>>" + promptData.trim());
                        }
                    }
                });
            }
        })
    }

    sendData(text) {
        if (!connectedCharacteristic) {
            console.error("connectedCharacteristic이 초기화되지 않았습니다.");
            return;
        }
        const data = Buffer.from(text, 'utf-8');
        connectedCharacteristic.write(data, false, (error) => {
            if (error) {
                console.error("데이터 전송 중 오류 발생:", error);
                eventbus.emit("bleSendDataError", error);
            }
        });

        connectedCharacteristic.write(Buffer.from([13], 'utf-8'), false, (error) => {
            if (error)  eventbus.emit("bleSendDataError", error);
        });
    }

}

const bleConnect = {
    bleUnit: new BleUnit(),

    bleScan() {
        this.bleUnit.serviceScan();
    },

    stopScanning() {
        this.bleUnit.stopScanning();
    },

    connectToSelectedDevice(peripheralId) {
        return this.bleUnit.connectToDevice(peripheralId);
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

    async runCode(codes) {
        console.log("runCode", codes);

        this.writeLn(`_codes_ = ""`);
        for (let code of codes.replaceAll("\r", "").split("\n")) {
            code = code.replace(/@@NOW/gi, currentTime);
            code = code.replace(/\\/gi, '\\\\');
            code = code.replace(/'/gi, "\\'");

            await new Promise(resolve => setTimeout(resolve, 100));             
            this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
        }
        this.writeLn(`exec(_codes_)\r\n`);
    },
    

}

function currentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `(${year}, ${month}, ${day}, 0, ${hours}, ${minutes}, ${seconds}, 0)`;
}


export default bleConnect;