import noble from "noble";

const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID

let bleUnit = null;
let device = null;
let asomeboard = null;

class BleUnit {     
    async discoverServices(peripheral) {
        // Promise를 사용하여 비동기 작업을 처리합니다
        return new Promise((resolve, reject) => {
            peripheral.discoverServices([], (error, services) => {
                if (error) {
                    reject(error);
                }
                services.forEach((service) => {
                    service.discoverCharacteristics([], (error, characteristics) => {
                        if (error) {
                            reject(error);
                        }
                        characteristics.forEach((char) => {
                            if (char.uuid === UUID_RX.replace(/-/g, '')) {
                                asomeboard = char; // 여기서 asomeboard에 할당합니다
                                resolve(); // Promise 해결
                            }
                        });
                    });
                });
            });
        });
    }

    // write(text) {
    //     device.discoverServices([], (error, services) => {            
    //         services.forEach((service) => {            
    //             service.discoverCharacteristics([], (error, characteristics) => {
    //                 characteristics.forEach((char) => {
        
    //                     if (char.uuid === UUID_RX.replace(/-/g, '')) {
    //                         // const command = 'red = OutputPin(15);red.on();'; 
    //                         const data = Buffer.from(text, 'utf-8');

    //                         asomeboard = char;
    //                         char.write(data, false, (error) => {
    //                             if (error) {
    //                                 console.error('데이터 전송 실패:', error);
    //                             } else {
    //                                 console.log('데이터 전송 완료');
    //                             }
    //                         });
    //                         char.write(Buffer.from([13], 'utf-8'), false, (error) => {
    //                             if (error) {
    //                             console.error('보내기 실패:', error);
    //                             } else {
    //                             console.log('보내기');
    //                             }
    //                         });
    //                     }
    //                 });
    //             });
    //         });
    //     });
    // }
}

const ble = {
    connect() {
        bleUnit = new  BleUnit();
        // await BleUnit.open();

        noble.on('stateChange', (state) => {
            if (state === 'poweredOn') {
                noble.startScanning([], false); // 모든 서비스에 대해 스캔
            } else {
                noble.stopScanning();
            }
        });

        noble.on('discover', (peripheral) => {
            if (peripheral.advertisement.localName && peripheral.advertisement.localName.includes('AsomeBot-A01')) {
                noble.stopScanning();

                this.device = peripheral

                peripheral.connect((error) => {
                if (error) {
                    console.error('연결 실패:', error);
                    return;
                }
                console.log('연결 완료됨');            
                });
            }
        });
    }

    
}

export default ble;