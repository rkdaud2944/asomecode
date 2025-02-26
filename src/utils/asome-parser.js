// src/utils/asome-parser.js
import { v1 as uuidv1 } from "uuid";
import showdown from 'showdown';
import { customExtensions } from "@/utils/showdown-extensions";
import partImgCode from "@/utils/asome-part-img-code";
import stripComments from "@/utils/strip-comments";

export default class AsomeParser {
    constructor(input) {
      this.scanner = new Scanner(input);
      this.parser = new Parser();
  
      // updateMotorValue 전역 함수 정의
      window.updateMotorValue = (inputId, value) => {
        const inputEl = document.getElementById(inputId);
        if (!inputEl) return; 
        
        // 문자열을 정수로 변환 후 증감
        const currentVal = parseInt(inputEl.value || '0', 10);
        inputEl.value = currentVal + value;
      };
  
      this.scanner.onToken = (token) => this.parser.addToken(token);
    }
  
    execute() {
      this.scanner.execute();
      return this.parser.result;
    }
  }
  

const State = {
    BASE: 0,
    RETURN: 1,
    BEGIN_MARK: 2,
}

const TokenType = {
    TEXT: 0,
    BEGIN_MARK: 1,
    END_MARK: 2,
}

class Scanner {
    constructor(input) {
        this.source = input;
        this.index = 0;
        this.state = State.BASE;
    }

    execute() {
        while (this.#isNotEmpty()) {
            switch (this.state) {
                case State.BASE: this.#do_base(); break
                case State.RETURN: this.#do_return(); break
                case State.BEGIN_MARK: this.#do_beginMark(); break
            }
        }
    }

    #isNotEmpty() {
        return this.index < this.source.length;
    }

    #nextChar() {
        const ch = this.source[this.index];
        this.index++;
        return ch;
    }

    #do_base() {
        const ch = this.#nextChar();
        switch (ch) {
            case "\n":
                this.onToken({ text: "\n", type: TokenType.TEXT })
                this.state = State.RETURN;
                break;

            default:
                this.onToken({ text: ch, type: TokenType.TEXT })
        }
    }

    #do_return() {
        const ch = this.#nextChar();
        switch (ch) {
            case "\n":
                this.onToken({ text: "\n", type: TokenType.TEXT })
                break;

            case "[": this.state = State.BEGIN_MARK;
                break;

            case "]":
                this.onToken({ text: ch, type: TokenType.END_MARK })
                this.state = State.BASE;
                break;

            default:
                this.onToken({ text: ch, type: TokenType.TEXT })
                this.state = State.BASE;
        }
    }

    #do_beginMark() {
        const text = this.source.substr(this.index, 20); // 최대 길이 조정
        const marks = ["button", "upload", "image", "imgButton", "writeLn", "video", "code", "editor", "parts", "wifi", "openWifi", "messenger", "botBase", "boardErr"];
        let matched = false;

        for (let mark of marks) {
            if (text.startsWith(mark)) {
                this.index += mark.length;
                this.onToken({ text: `[${mark}`, type: TokenType.BEGIN_MARK });
                matched = true;
                break;
            }
        }

        if (!matched) {
            this.onToken({ text: "[", type: TokenType.TEXT });
        }

        this.state = State.BASE;
    }
}

class Parser {
    constructor() {
        this.lessonContentBaseUrl = process.env.VUE_APP_LESSON_CONTENT_BASEURL || 'https://asomecode-dev-resource.s3.ap-northeast-2.amazonaws.com/';
        this.result = "";
        this.markType = "";
        this.buffer = "";

        // Showdown 설정
        this.converter = new showdown.Converter({
            extensions: customExtensions(),
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            ghCompatibleHeaderId: true,
            // 필요에 따라 추가 옵션 설정
        });
    }

    addToken(token) {
        if (token.type === TokenType.BEGIN_MARK) {
            this.markType = token.text;
        }

        if (this.markType === "") {
            this.result += token.text;
        } else {
            this.buffer += token.text;
        }

        if (token.type === TokenType.END_MARK) {
            this.result += this.#get_markText();
            this.buffer = "";
            this.markType = "";
        }
    }

    #get_markText() {
        switch (this.markType) {
            case "[button": return this.#get_buttonText(this.buffer);
            case "[upload": return this.#get_uploadFile(this.buffer);
            case "[imgButton": return this.#get_buttonImg(this.buffer);
            case "[writeLn": return this.#get_writeLn(this.buffer);
            case "[image": return this.#get_imageText(this.buffer);
            case "[video": return this.#get_videoText(this.buffer);
            case "[code": return this.#get_codeText(this.buffer);
            case "[editor": return this.#get_editorText(this.buffer);
            case "[parts": return this.#get_partsText(this.buffer);
            case "[wifi": return this.#get_wifi_Text();
            case "[openWifi": return this.#get_wifi_open_Text();
            case "[messenger": return this.#get_asome_messenger_Text();
            case "[botBase": return this.#get_botBase();
            case "[boardErr": return this.#get_boardErr();
            default: return this.buffer;
        }
    }

    #get_buttonText(text) {
        const firstLine = text.split("\n")[0];
        const functionName = firstLine.replace("[button ", "").trim();
        const uniqueId = Date.now();
        const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;

        let content = text.replace(`${firstLine}`, "").slice(0, -1);
        const lines = content.split("\n");
        content = lines.map(e => stripComments.stripPythonComments(e)).join('\n');

        // 표준 마크다운 처리
        const markdownContent = this.converter.makeHtml(content);

        return `<div onclick="runCode(getCode('${functionId}'))" class="function_btn">${functionName}</div></br>` +
            `<div id="${functionId}" class="hidden">${markdownContent}</div>`;
    }

    #get_buttonImg(text) {
        const firstLine = text.split("\n")[0];
        let functionImg = firstLine.replace("[imgButton ", "").trim();
        const functionName = functionImg.replace(/\.png/g, "").trim();
        const uniqueId = Date.now();
        const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
        let content = text.replace(`${firstLine}`, "").slice(0, -1);

        if (functionImg.charAt(0) !== '/')
            functionImg = this.lessonContentBaseUrl + "lesson/images/btn-image/" + functionImg; // S3 파일

        // 표준 마크다운 처리
        const markdownContent = this.converter.makeHtml(stripComments.stripPythonComments(content));

        return `<div class="">
            <img class="markdown-btn-img" src="${functionImg}" onclick="runCode(getCode('${functionId}'))"/></div></br>` +
            `<div id="${functionId}" class="hidden">${markdownContent}</div>`;
    }

    #get_writeLn(text) {
        const firstLine = text.split("\n")[0];
        let functionImg = firstLine.replace("[writeLn ", "").trim();
        const functionName = functionImg.replace(/\.png/g, "").trim();
        const uniqueId = Date.now();
        const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
        let content = text.replace(`${firstLine}`, "").slice(0, -1);

        if (functionImg.charAt(0) !== '/')
            functionImg = this.lessonContentBaseUrl + "lesson/images/btn-image/" + functionImg; // S3 파일

        // 표준 마크다운 처리
        const markdownContent = this.converter.makeHtml(stripComments.stripPythonComments(content));

        return `<div class="">
            <img class="markdown-btn-img" src="${functionImg}" onclick="writeLn(getCode('${functionId}'))"/></div></br>` +
            `<div id="${functionId}" class="hidden">${markdownContent}</div>`;
    }
    
    #get_imageText(text) {
        // 정규표현식으로 이미지 구문 추출
        const regex = /\[image\s*\((.*?)\)\s*(.*?)\]/s; // 's' 플래그는 줄바꿈 포함
        const match = text.match(regex);
    
        if (match) {
            const imageTitle = match[1].trim();
            let imageSrc = match[2].trim();
    
            // console.log(`Image Title: "${imageTitle}", Image Src: "${imageSrc}"`);
    
            // S3 URL 생성
            if (!imageSrc.startsWith('http://') && !imageSrc.startsWith('https://')) {
                imageSrc = this.lessonContentBaseUrl + "lesson/images/" + imageSrc;
            }
    
            // console.log(`Final Image URL: "${imageSrc}"`);
    
            // 표준 마크다운 이미지 구문으로 변환

            if (imageTitle === '') {
                return `![alt](${imageSrc})`;
            } else {
                return `![${imageTitle}](${imageSrc})`;
            }
        } else {
            console.warn('Image syntax not matched:', text);
            return text; // 변환 실패 시 원본 텍스트 반환
        }
    }
    
    
    #get_videoText(text) {
        const firstLine = text.split("\n")[0];
        let videoSrc = firstLine.replace("[video ", "").trim();
        
        if (videoSrc.charAt(0) !== '/') {
            videoSrc = this.lessonContentBaseUrl + "lesson/videos/" + videoSrc; // S3 파일
        }

        return `<video controls width="100%"><source src="${videoSrc}" type="video/webm">Your browser does not support the video tag.</video>`;
    }

    #get_codeText(text) {
        const firstLine = text.split("\n")[0];
        let content = text.replace(`${firstLine}`, "").slice(0, -1);
        const uuid = uuidv1(new Date());

        // 표준 마크다운 처리 (코드 블록)
        // const markdownContent = this.converter.makeHtml(`\`\`\`python\n${content}\n\`\`\``);
        
        return `<pre onclick="openEditor(getCode('${uuid}'))" style="margin-left:10px; width:98%;">\n` +
            `<code id="${uuid}" class="python">${content}</code></pre>`
            // + markdownContent;
            // 코드가 두개 중복되서 없앰
    }
    
    #get_editorText(text) {
        const firstLine = text.split("\n")[0];
        let content = text.replace(`${firstLine}`, "").slice(0, -1);

        // 표준 마크다운 처리 (필요 시)
        const markdownContent = this.converter.makeHtml(content);

        return `<p class="editorLocation" style="display: none;"/>` +
            `<div class="editorDiv">${markdownContent}</div>`;
    }

    #get_partsText(text) {
        const firstLine = text.split("\n")[0];
        const partList = text.replace(`${firstLine}`, "").slice(0, -1).split("\n");
        let content = '';

        partList.forEach(e => {
            const [partName, qty] = e.split('*').map(str => str.trim());
            const src = partImgCode.data().parts.find(item => item.label === partName)?.src;

            if (!src || !qty) return;

            content +=
                `<div class="part_component">
                    <div class="parts_compoent_box">
                        <div class="parts_compoent" frameborder="0">
                            <div style="width: 100%; height: 100%;">
                                <div class="parts_image_bar">
                                    <img class="parts_image" src="/common/parts/${src}">
                                    <div class="parts_qty"><p style="display: table-cell; vertical-align: middle;">x ${qty}</p></div>
                                </div>
                                <div class="parts_comment_bar">
                                    ${partName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        // 표준 마크다운 처리 (필요 시)
        const markdownContent = this.converter.makeHtml(content);

        return `<div>${markdownContent}</div>`;
    }

    #get_wifi_Text() {
        return `
            <div class="wifi-container">
                <div class="input-group">
                    <span class="input-group-addon"><i class="q-icon material-icons">wifi</i></span>
                    <input class="form-control" type="text" id="wifi_name" placeholder="와이파이 이름" onchange="setWifiInfo()">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="q-icon material-icons">lock</i></span>
                    <input class="form-control" type="text" id="wifi_password" placeholder="와이파이 암호" onchange="setWifiInfo()">
                </div>
                <div class="button-group">
                    <button class="answer-btn function_btn" onclick="runCode(getCode('인터넷-연결하기'))" type="button">
                        <span>인터넷 연결하기</span>
                    </button>
                </div>
                <div id="인터넷-연결하기" class="hidden"></div>
            </div>
        `;
    }
    

    #get_wifi_open_Text() { // 인터넷 오픈
        return `
            <div class="wifi-open-container">
                <div class="input-group">
                    <span class="input-group-addon"><i class="q-icon material-icons">wifi</i></span>
                    <input class="form-control" type="text" id="wifi_open" placeholder="공유기 이름 (SSID)" onchange="openWifiInfo()" aria-label="공유기 이름 (SSID)">
                </div>
                <div class="button-group">
                    <button class="answer-btn function_btn" onclick="runCode(getCode('asome-wifi-open'))" type="button" aria-label="인터넷 연결하기">
                        <span>확인</span>
                    </button>
                </div>
                <div id="asome-wifi-open" class="hidden"></div>
            </div>
        `;
    }
    
    #get_asome_messenger_Text() {
        return `
            <div class="asome-messenger-container">
                <div class="input-group">
                    <span class="input-group-addon"><i class="q-icon material-icons">phone</i></span>
                    <input class="form-control" type="text" id="asome_connect_code" placeholder="접속코드" onchange="setAsomeMessengerInfo()" aria-label="접속코드">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="q-icon material-icons">message</i></span>
                    <input class="form-control" type="text" id="asome_msg" placeholder="메시지" onchange="setAsomeMessengerInfo()" aria-label="메시지">
                </div>
                <div class="button-group">
                    <button class="answer-btn function_btn" onclick="runCode(getCode('asome-messenger'))" type="button" aria-label="메시지 전송">
                        <span>전송</span>
                    </button>
                </div>
                <div id="asome-messenger" class="hidden"></div>
            </div>
        `;
    }

    #get_botBase() {
        return `<div style="width: 70%; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin: 20px auto;">
                    <div style="display: flex; align-items: center;">
                        <input style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; padding: 5px; font-size: 16px;"
                            type="text" id="align01" value="90" placeholder="0번 모터 (Pin5)"
                            onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                            onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';" />
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align01', 1)">+</button>
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align01', -1)">-</button>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <input style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; padding: 5px; font-size: 16px;"
                            type="text" id="align02" value="90" placeholder="1번 모터 (Pin6)"
                            onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                            onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';" />
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align02', 1)">+</button>
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align02', -1)">-</button>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <input style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; padding: 5px; font-size: 16px;"
                            type="text" id="align03" value="90" placeholder="2번 모터 (Pin7)"
                            onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                            onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';" />
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align03', 1)">+</button>
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align03', -1)">-</button>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <input style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; padding: 5px; font-size: 16px;"
                            type="text" id="align04" value="90" placeholder="3번 모터 (Pin8)"
                            onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                            onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';" />
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align04', 1)">+</button>
                        <button style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%; color: #fff; font-size: 18px; width: 35px; height: 35px; display: inline-flex; align-items: center; justify-content: center; margin: 0 5px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: transform 0.2s ease, box-shadow 0.2s ease;"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align04', -1)">-</button>
                    </div>
                </div>`;
    }

    #get_uploadFile(text) {        
        const firstLine = text.split("\n")[0];
        let functionName = firstLine.replace("[upload ", "").trim();
        const [funcName, fileName] = functionName.split(":").map(str => str.trim());
        const uniqueId = Date.now();
        const functionId = `${funcName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
    
        let content = text.replace(`${firstLine}`, "").slice(0, -1);
        const lines = content.split("\n");
        content = lines.map(e => stripComments.stripPythonComments(e)).join('\n');
        
        // 표준 마크다운 처리
        const markdownContent = this.converter.makeHtml(content);
        
        return `<button class="answer-btn" style="cursor: pointer;" onclick="contentsUploadFile('${fileName}',getCode('${functionId}'))" class="function_btn">${funcName}</button></br>` +
            `<div id="${functionId}" class="hidden">${markdownContent}</div>`;
    }
    
    #get_boardErr() {        
        return `<div class="board-err-wrap">
                    <div class="board-err-img">
                        <img src="/common/board-err.png">
                    </div>
                    <div>
                        <p class="err-title">실행이 안 되는데요!</p>
                        <p class="err-cts">실행이 잘 안된다면 다음 중에 원인이 있는지 확인해 보세요.</p>
                        <p class="err-cts">1. 어썸보드의 불이 들어오는지 확인하세요. 불이 들어오지 않는다면 보드가 고장 난 것입니다.<br/>
                        2. 부품 조립이 제대로 되어 있는지 확인해 보세요.<br/>
                        3. 결과창에 에러가 있는지 확인해 보세요. 에러가 있다면 코드에 문제가 있는 것입니다. 마지막 실행한 코드가 제대로 입력되었는지 확인하세요.
                        그래도 에러가 난다면 메뉴의 [포맷], [업데이트] 버튼을 순서대로 클릭하여 어썸보드를 최신 상태로 만들고 다시 실행하세요.<br/>
                        4. USB 코드를 컴퓨터에 뽑았다가 다시 꽂은 후에 [연결하기] 버튼을 클릭해 보세요.
                        </p>
                    </div>
                </div>`;
    }
}
