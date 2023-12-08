// import noble from "noble";
const noble = require('noble');
// const noble = require('@abandonware/noble');
const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID

let bleUnit = null;
// let noble = window.noble;

// 전역 변수로 캐릭터리스틱 저장
let connectedCharacteristic = null;

class BluUnit {
    connect(){
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
        
            peripheral.connect((error) => {
                if (error) {
                console.error('연결 실패:', error);
                return;
                }
        
                console.log('연결 완료됨');
        
                peripheral.discoverServices([], (error, services) => {
                console.log(`발견된 서비스 수: ${services.length}`);
        
                services.forEach((service) => {
                    console.log(`서비스 UUID: ${service.uuid}`);
        
                    service.discoverCharacteristics([], (error, characteristics) => {
                    console.log(`발견된 캐릭터리스틱 수 (${service.uuid}): ${characteristics.length}`);
        
                    characteristics.forEach((char) => {
                        console.log(`캐릭터리스틱 UUID: ${char.uuid}`);
        
                        if (char.uuid === UUID_RX.replace(/-/g, '')) {
                        connectedCharacteristic = char; // 캐릭터리스틱 저장
                        }
                    });
                    });
                });
                });
            });
            }
        });
    }
    
}


const ble = {
    connect() {
        bleUnit = new BluUnit();
        bleUnit.connect();
    },

    
    // 데이터 전송 함수
    sendData(command) {
        if (!connectedCharacteristic) {
        console.error('캐릭터리스틱이 연결되지 않았습니다.');
        return;
        }
    
        const data = Buffer.from(command, 'utf-8');
        connectedCharacteristic.write(data, false, (error) => {
        if (error) {
            console.error('데이터 전송 실패:', error);
        } else {
            console.log('데이터 전송 완료');
        }
        });
    }
}


// 예제 사용법
// sendData('red = OutputPin(11);red.on();');
// sendData('delay(2000); red.off();');

export default ble;

