

const noble = require('@abandonware/noble');
// const noble = require('noble');
// 쓰기
const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 읽기
const UUID_TX = '6e400003b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 전역 변수로 캐릭터리스틱 저장
let connectedCharacteristic = null; //rx
let TX_characteristic = null; //tx


class BleUnit {
    
    serviceScan() {
        noble.on('stateChange', (state) => {
            if (state === 'poweredOn') {
                noble.startScanning([], false); // 모든 서비스에 대해 스캔
                this.connect();
            } else { 
                noble.stopScanning();
            }
        });
    }

    connect(){
        noble.on('discover', (peripheral) => {
            if (peripheral.advertisement.localName && peripheral.advertisement.localName.includes('AsomeBot-A01')) {
                noble.stopScanning();

                peripheral.connect((error) => {
                    if (error) {
                        console.error('연결 실패:', error);
                        return;
                    }
                    try {
                        this.discoverService(peripheral);
                    } catch (error) {
                        console.log(error);
                    } finally {
                        console.log('연결 완료됨');
                    }

                    // 연결 끊김 
                    peripheral.once('disconnect', () => {
                        console.log('연결이 끊어졌습니다.');
                    });
                }); 
            } 
        }); 
    }

    discoverService(peripheral){
        
        peripheral.discoverServices([], (error, services) => {
            services.forEach((service) => {
                this.discoverChar(service);
            })
        });
    }

    discoverChar(service){
        
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

    readData(){
        TX_characteristic.subscribe((error) => {
            if(!error){
                TX_characteristic.on('data', (data, isNotification) => {
                    if(isNotification)
                    console.log(data.toString());
                });
            }
        })
    }

    sendData(text){
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

    connect(){
        
        this.bleUnit = new BleUnit();
        this.bleUnit.serviceScan();
        
    },

    write(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null){
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        if (this.bleUnit) this.bleUnit.sendData(text);
    },

    writeLn(text) {
        // 한글만 인코딩하여 전송
        if (text !== undefined && text !== null){
            text = text.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, (match) => `{{${encodeURIComponent(match)}}}`);
        }
        this.write(text +"\r\n");
    },

    runCode(codes) {
        console.log("runCode", codes);

        this.writeLn( `_codes_ = ""`);
        for (let code of codes.replaceAll("\r", "").split("\n")) {
            // TODO: 파이썬 코드의 주석을 삭제한다. 특히 한글 주석은 보드에 에러를 유발할 수 있다.
            // sLine := RemoveComment(sLine);

            // TODO: 델파이와 달라서 필요 없을 듯. 확인 후  삭제
            // sLine := Space2Tab(Lines[Loop]);
            // sLine := StringReplace(sLine, #9, '\t', [rfReplaceAll]);
            // code = code.replace(/{mod}/gi, "%");
            // code = code.replace(/@@NOW/gi, "CurrentTime");

            code = code.replace(/\\/gi, '\\\\');
            code = code.replace(/'/gi, "\\'");
            this.writeLn(`_codes_ = _codes_ + '${code}\\n'`);
        }
        this.writeLn(`exec(_codes_)`);
    },

}


export default bleConnect;