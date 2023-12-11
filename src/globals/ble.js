const noble = require('@abandonware/noble');
// const noble = require('noble');
const UUID_RX = '6e400002b5a3f393e0a9e50e24dcca9e'; // RX 캐릭터리스틱 UUID
// 전역 변수로 캐릭터리스틱 저장
let connectedCharacteristic = null;


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
        
                    console.log('연결 완료됨');
                    this.discoverService(peripheral);
                });
            }
        });

    }

    discoverService(peripheral){
        
        peripheral.discoverServices([], (error, services) => {
            console.log(`발견된 서비스 수: ${services.length}`);
            services.forEach((service) => {
                console.log(`서비스 UUID: ${service.uuid}`);
                this.discoverChar(service);
            })
        });


    }

    discoverChar(service){
        
        service.discoverCharacteristics([], (error, characteristics) => {
            console.log(`발견된 캐릭터리스틱 수 (${service.uuid}): ${characteristics.length}`);
            characteristics.forEach((char) => {
                console.log(`캐릭터리스틱 UUID: ${char.uuid}`);

                if (char.uuid === UUID_RX.replace(/-/g, '')) {
                    connectedCharacteristic = char; // 캐릭터리스틱 저장
                    
                }
            });
        })
    }


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