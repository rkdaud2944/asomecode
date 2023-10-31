import serial from "@/globals/serial";

const fs = require('fs');
const request = require('request');

const clientId = 'jfgmf4wpcq';
const clientSecret = 'bqnPGX7qjWPM0Yah03SvikST2oS9D2SpQ1FEWHXL';

// language => 언어 코드 ( Kor, Jpn, Eng, Chn )
export function stt(language, filePath) {
    const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${language}`;
    const requestConfig = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/octet-stream',
            'X-NCP-APIGW-API-KEY-ID': clientId,
            'X-NCP-APIGW-API-KEY': clientSecret
        },
        body: fs.createReadStream(filePath)
    };

    request(requestConfig, (err, response, body) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(response.statusCode);
        let text = JSON.parse(body).text
        console.log(text);

        if(text.includes('준비')){
            serial.writeLn('import asomebot;asomebot.ready(5,6,7,8);')
        }
        if(text.includes('차렷')){
            serial.writeLn('asomebot.home();')
        }
        if(text.includes('걷기')){
            serial.writeLn('asomebot.forward();')
        }
        if(text.includes('마우스')){
            serial.writeLn('asomebot.mouse();')
        }
        text=""
    });
}
