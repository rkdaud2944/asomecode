const noble = require('@abandonware/noble');
// const noble = require('noble');
const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 전역 변수로 캐릭터리스틱 저장
let connectedCharacteristic = null;

const bleConnect = {
    
    serviceScan() {
        noble.on('stateChange', (state) => {
            if (state === 'poweredOn') {
                noble.startScanning([], false); // 모든 서비스에 대해 스캔
                this.connect();
            } else {
                noble.stopScanning();
            }
            });
    },

    connect(){
        noble.on('discover', (peripheral) => {
            if (peripheral.advertisement.localName && peripheral.advertisement.localName.includes('AsomeBot-A01')) {
                noble.stopScanning();

                peripheral.connect((error) => {
                    if (error) {
                    console.error('연결 실패:', error);
                    return;
                    }
        
                    console.log('연결 완료됨');
                    this.discoverService(peripheral);
                });
            }
        });

    },

    discoverService(peripheral){
        
        peripheral.discoverServices([], (error, services) => {
            console.log(`발견된 서비스 수: ${services.length}`);
            services.forEach((service) => {
                console.log(`서비스 UUID: ${service.uuid}`);
                this.discoverChar(service);
            })
        });


    },

    discoverChar(service){
        
        service.discoverCharacteristics([], (error, characteristics) => {
            console.log(`발견된 캐릭터리스틱 수 (${service.uuid}): ${characteristics.length}`);
            characteristics.forEach((char) => {
                console.log(`캐릭터리스틱 UUID: ${char.uuid}`);

                if (char.uuid === UUID_RX.replace(/-/g, '')) {
                    connectedCharacteristic = char; // 캐릭터리스틱 저장
                    
                    this.sendData('red = OutputPin(11);red.on();')
                }
            });
        })
    },


    sendData(text){
        const data = Buffer.from(text, 'utf-8');
        connectedCharacteristic.write(data, false, (error) => {
            if (error) {
                console.error('데이터 전송 실패:', error);
            } else {
                console.log('데이터 전송 완료');
            }
        });
        connectedCharacteristic.write(Buffer.from([13], 'utf-8'), false, (error) => {
            if (error) {
                console.error('보내기 실패:', error);
            } else {
                console.log('보내기');
            }
        });
    }
}


export default bleConnect;