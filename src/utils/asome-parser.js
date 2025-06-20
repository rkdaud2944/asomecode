// src/utils/asome-parser.js
import { v1 as uuidv1 } from "uuid";
import showdown from 'showdown';
import { customExtensions } from "@/utils/showdown-extensions";
import partImgCode from "@/utils/asome-part-img-code";
import stripComments from "@/utils/strip-comments";
import images from "@/assets/images";

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
        const marks = ["button", "upload", "image", "imgButton", "writeLn", "video", "code", "editor", "parts", "wifi", "openWifi", "messenger", "botBase", "boardErr", "newbotBase", "phoneupload", "service", "oneservice", "twoservice", "threeservice", "fourservice", "sc_button"];
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
            case "[service": return this.#get_servicecontrollerbot(this.buffer);
            case "[oneservice": return this.#get_servicecontrollerbotstep1(this.buffer);
            case "[twoservice": return this.#get_servicecontrollerbotstep2(this.buffer);
            case "[threeservice": return this.#get_servicecontrollerbotstep3(this.buffer);
            case "[fourservice": return this.#get_servicecontrollerbotstep4(this.buffer);
            case "[sc_button": return this.#get_servicecontrollerbutton(this.buffer);
            case "[phoneupload": return this.#get_codeupload(this.buffer);
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
            case "[newbotBase": return this.#get_newbotBase();
            case "[boardErr": return this.#get_boardErr();
            case "[botBase": return this.#get_botBase();
        
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
    
            // S3 URL 생성
            if (!imageSrc.startsWith('http://') && !imageSrc.startsWith('https://')) {
                imageSrc = this.lessonContentBaseUrl + "lesson/images/" + imageSrc;
            }
    
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

        return `<pre onclick="openEditor(getCode('${uuid}'))" style="margin-left:10px; width:98%;">\n` +
            `<code id="${uuid}" class="python">${content}</code></pre>`;
    }
    
    #get_editorText(text) {
        const firstLine = text.split("\n")[0];
        let content = text.replace(`${firstLine}`, "").slice(0, -1);

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
    
    #get_wifi_open_Text() {
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

    // 어썸봇 1:1 컨트롤러
    #get_codeupload(text) {
        // 첫 줄에서 업로드 정보를 추출 (예: "[upload 자동 실행 프로그램 등록 : main.py")
        const firstLine = text.split("\n")[0];
        let functionName = firstLine.replace("[phoneupload ", "").trim();
        const [funcName, fileName] = functionName.split(":").map(str => str.trim());
        const uniqueId = Date.now();
        const functionId = funcName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '') + "-" + uniqueId;
            
        // 첫 줄 제거 후 나머지 내용 추출, 마지막 ']' 제거
        let content = text.substring(firstLine.length).trim();
        if (content.endsWith("]")) {
            content = content.slice(0, -1).trim();
        }
            
        // (옵션) Python 주석 제거: '#'으로 시작하는 줄은 제거
        const lines = content.split("\n");
        content = lines.map(line => line.trim().startsWith("#") ? "" : line).join("\n");
            
        // (옵션) 마크다운 변환기가 있으면 사용, 없으면 <pre> 태그로 감쌉니다.
        const markdownContent = window.converter ? window.converter.makeHtml(content) : "<pre>" + content + "</pre>";
            
        // 버튼과 숨김 영역 HTML 반환 (버튼 클릭 시 contentsUploadFile() 호출)
        return `<div style="width: 1000px; margin: 20px auto; padding: 20px; padding-top: 0px;border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; height: 520px; text-align: center;">
                    <h2 style="text-align: center; margin-bottom: 20px;">
                        어썸봇 - 자동 실행 프로그램 등록
                    </h2>
                    <img src="${images.controllerbot}" alt="controllerbot" style="width: 800px; height: auto; display: block; margin-bottom: 20px; margin-left: auto; margin-right: auto;"/>
                    <div class="wifi-open-container">
                        <div class="input-group" style="margin-left: auto; margin-right: auto;">
                            <span class="input-group-addon"><i class="q-icon material-icons">wifi</i></span>
                            <input id="wifi_open" style="width: 200px; text-align: center; border: 1px solid #ddd; border-radius: 4px;
                                    padding: 5px; font-size: 16px;" type="text" id="align02" value="AsomebotSolo"
                                    onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';" class="form-control" type="text" id="wifi_open" placeholder="공유기 이름 (SSID)" aria-label="공유기 이름 (SSID)">
                        </div>
                    </div>
                    <button class="answer-btn" style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                        color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';" onclick="contentsUploadFile('${fileName}', getCode('${functionId}'))">${funcName}
                    </button>
                    <button type="button"tabindex="-1"
                        style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                        color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                        onclick="reset()"
                        >
                        재부팅
                    </button>
                    <button type="button"tabindex="-1"
                        style="background: #fff; border: 2px solid #dc3545; border-radius: 5px; 
                        color: #dc3545; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#dc3545'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#dc3545';"
                        onclick="deletemain()"
                        >
                        자동 실행 프로그램 삭제
                    </button>
                </div>`+
                `</br>` +
               `<div id="${functionId}" class="hidden">${markdownContent}
               </div>`;
    }
    
    #get_servicecontrollerbutton(text) {
        // 첫 줄에서 업로드 정보를 추출 (예: "[upload 자동 실행 프로그램 등록 : main.py")
        const firstLine = text.split("\n")[0];
        let functionName = firstLine.replace("[sc_button ", "").trim();
        const [funcName, fileName] = functionName.split(":").map(str => str.trim());
        const uniqueId = Date.now();
        const functionId = funcName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '') + "-" + uniqueId;
            
        // 첫 줄 제거 후 나머지 내용 추출, 마지막 ']' 제거
        let content = text.substring(firstLine.length).trim();
        if (content.endsWith("]")) {
            content = content.slice(0, -1).trim();
        }
            
        // (옵션) Python 주석 제거: '#'으로 시작하는 줄은 제거
        const lines = content.split("\n");
        content = lines.map(line => line.trim().startsWith("#") ? "" : line).join("\n");
            
        // (옵션) 마크다운 변환기가 있으면 사용, 없으면 <pre> 태그로 감쌉니다.
        const markdownContent = window.converter ? window.converter.makeHtml(content) : "<pre>" + content + "</pre>";
            
        // 버튼과 숨김 영역 HTML 반환 (버튼 클릭 시 contentsUploadFile() 호출)
        return `<div>asd
                    <button class="answer-btn" style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                        color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';" onclick="contentsUploadFile('${fileName}', getCode('${functionId}'))">${funcName}
                    </button>
                    <button type="button"tabindex="-1"
                        style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                        color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                        onclick="reset()"
                        >
                        재부팅
                    </button>
                    <button type="button"tabindex="-1"
                        style="background: #fff; border: 2px solid #dc3545; border-radius: 5px; 
                        color: #dc3545; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                        transition: all 0.2s;"
                        onmouseover="this.style.background='#dc3545'; this.style.color='#fff';"
                        onmouseout="this.style.background='#fff'; this.style.color='#dc3545';"
                        onclick="deletemain()"
                        >
                        자동 실행 프로그램 삭제
                    </button>
                </div>`+
                `</br>` +
               `<div id="${functionId}" class="hidden">${markdownContent}
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

    // 어썸봇 군무 컨트롤러 종합
    #get_servicecontrollerbot() {
        return `<div style="width: auto; margin: 20px auto; padding: 20px; padding-top: 0px;border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; height: auto; text-align: center;">
                    <h2 style="text-align: center; margin-bottom: 20px;">
                        군무형 - 자동 실행 프로그램 등록
                    </h2>
                    <img src="${images.servicecontrollerbot}" alt="servicecontrollerbot" style="width: auto; height: auto; display: block; margin-bottom: 20px; margin-left: auto; margin-right: auto;"/>
                </div>`;
    }

    // 어썸봇 군무 컨트롤러 단계
    #get_servicecontrollerbotstep1(text) {
        const firstLine = text.split("\n")[0];
        let functionName = firstLine.replace("[oneservice ", "").trim();
        const [funcName, fileName] = functionName.split(":").map(str => str.trim());
        const uniqueId = Date.now();
        const functionId = funcName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '') + "-" + uniqueId;
            
        let content = text.substring(firstLine.length).trim();
        if (content.endsWith("]")) {
            content = content.slice(0, -1).trim();
        }
            
        const lines = content.split("\n");
        content = lines.map(line => line.trim().startsWith("#") ? "" : line).join("\n");
            
        const markdownContent = window.converter ? window.converter.makeHtml(content) : "<pre>" + content + "</pre>";
            
        return `<div style="
         display: flex; 
         width: 100%; 
         box-sizing: border-box; 
         border: 1px solid #ddd; 
         border-radius: 8px;
         overflow: hidden;
         margin: 20px 0;
        ">

        <div style="
             flex: 1; 
             padding: 20px; 
             text-align: center;
        ">
            <h2 style="margin-bottom: 20px;">군무형 - 어썸보드에 자동실행 프로그램 삽입</h2>
            <img src="${images.servicecontrollerstep1}" 
                 alt="servicecontrollerbot" 
                 style="
                    width: auto; 
                    height: auto; 
                    max-width: 100%; 
                    display: block; 
                    margin: 0 auto 20px auto;
                 "/>
            <div class="wifi-open-container">
                <div class="input-group" style="margin: 0 auto;">
                    <span class="input-group-addon">
                        <i class="q-icon material-icons">wifi</i>
                    </span>
                    <input id="wifi_open" 
                           class="form-control"
                           style="
                                width: 200px; 
                                text-align: center; 
                                border: 1px solid #ddd; 
                                border-radius: 4px;
                                padding: 5px; 
                                font-size: 16px;
                           " 
                           type="text" 
                           value="AsomeIT"
                           onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                           onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"
                           placeholder="공유기 이름 (SSID)" 
                           aria-label="공유기 이름 (SSID)"
                    />
                </div>
            </div>
        </div>
        <div id="${functionId}" class="hidden">${markdownContent}
        </div>

        <div style="
             flex: 1; 
             padding: 20px; 
             text-align: center; 
             border-left: 1px solid #ddd;
             background-color: #f9f9f9;
        ">
            <h2 style="margin-bottom: 20px;">설명</h2>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
                1. 어썸보드가 송출할 와이파이 이름을 입력합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                2.
                <button class="answer-btn" style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                transition: all 0.2s;"
                onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';" onclick="contentsUploadFile('${fileName}', getCode('${functionId}'))">${funcName}
                </button> 버튼을 클릭합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                3.
                <button type="button"tabindex="-1"
                style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                transition: all 0.2s;"
                onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                onclick="reset()"
                >
                재부팅
                </button> 버튼을 클릭하여 어썸보드를 재부팅합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                4. 보드의 코드를 삭제하고 싶다면
                <button type="button"tabindex="-1"
                    style="background: #fff; border: 2px solid #dc3545; border-radius: 5px; 
                    color: #dc3545; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                    transition: all 0.2s;"
                    onmouseover="this.style.background='#dc3545'; this.style.color='#fff';"
                    onmouseout="this.style.background='#fff'; this.style.color='#dc3545';"
                    onclick="deletemain()"
                    >
                    자동 실행 프로그램 삭제
                </button> 버튼을 클릭하여 자동 실행 프로그램을 삭제합니다.
            </p>
        </div>
    </div>
    `;
    }

    // 어썸봇 군무 컨트롤러    
    #get_servicecontrollerbotstep2(text) {
        const firstLine = text.split("\n")[0];
        let functionName = firstLine.replace("[twoservice ", "").trim();
        const [funcName, fileName] = functionName.split(":").map(str => str.trim());
        const uniqueId = Date.now();
        const functionId = funcName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '') + "-" + uniqueId;
            
        let content = text.substring(firstLine.length).trim();
        if (content.endsWith("]")) {
            content = content.slice(0, -1).trim();
        }
            
        const lines = content.split("\n");
        content = lines.map(line => line.trim().startsWith("#") ? "" : line).join("\n");
            
        const markdownContent = window.converter ? window.converter.makeHtml(content) : "<pre>" + content + "</pre>";
        
        return `<div style="
         display: flex; 
         width: 100%; 
         box-sizing: border-box; 
         border: 1px solid #ddd; 
         border-radius: 8px;
         overflow: hidden;
         margin: 20px 0;
        ">
        <!-- 좌측 영역: 사진 및 입력창 -->
        <div style="
             flex: 1; 
             padding: 20px; 
             text-align: center;
        ">
            <h2 style="margin-bottom: 20px;">군무형 - 어썸 봇 어썸보드에 연결하기</h2>
            <img src="${images.servicecontrollerstep2}" 
                 alt="servicecontrollerbot" 
                 style="
                    width: auto; 
                    height: auto; 
                    max-width: 100%; 
                    display: block; 
                    margin: 0 auto 20px auto;
                 "/>
            <div class="wifi-open-container">
                <div class="input-group" style="margin: 0 auto;">
                    <span class="input-group-addon">
                        <i class="q-icon material-icons">wifi</i>
                    </span>
                    <input id="connect_wifi_open" 
                           class="form-control"
                           style="
                                width: 200px; 
                                text-align: center; 
                                border: 1px solid #ddd; 
                                border-radius: 4px;
                                padding: 5px; 
                                font-size: 16px;
                           " 
                           type="text" 
                           value="AsomeIT"
                           onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                           onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"
                           placeholder="공유기 이름 (SSID)" 
                           aria-label="공유기 이름 (SSID)"
                    />
                </div>
            </div>
        </div>
        <div id="${functionId}" class="hidden">${markdownContent}
        </div>

        <!-- 우측 영역: 설명 -->
        <div style="
             flex: 1; 
             padding: 20px; 
             text-align: center; 
             border-left: 1px solid #ddd;
             background-color: #f9f9f9;
        ">
            <h2 style="margin-bottom: 20px;">설명</h2>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
                1. 조종할 어썸봇들에게 앞서 입력한 [공유기 이름(SSID)]을 찾아서 입력합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                2.
                <button class="answer-btn" style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                transition: all 0.2s;"
                onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';" onclick="connectcontentsUploadFile('${fileName}', getCode('${functionId}'))">${funcName}
                </button> 버튼을 클릭합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                3.
                <button type="button"tabindex="-1"
                style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                transition: all 0.2s;"
                onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                onclick="reset()"
                >
                재부팅
                </button> 버튼을 클릭하여 어썸봇을 재부팅합니다.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
                4. 로봇의 코드를 삭제하고 싶다면
                <button type="button"tabindex="-1"
                    style="background: #fff; border: 2px solid #dc3545; border-radius: 5px; 
                    color: #dc3545; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                    transition: all 0.2s;"
                    onmouseover="this.style.background='#dc3545'; this.style.color='#fff';"
                    onmouseout="this.style.background='#fff'; this.style.color='#dc3545';"
                    onclick="deletemain()"
                    >
                    자동 실행 프로그램 삭제
                </button> 버튼을 클릭하여 자동 실행 프로그램을 삭제합니다.
            </p>
        </div>
    </div>
    `;
    }
    // 어썸봇 군무 컨트롤러    
    #get_servicecontrollerbotstep3() {
        return `<div style="
             display: flex; 
             width: 100%; 
             box-sizing: border-box; 
             border: 1px solid #ddd; 
             border-radius: 8px;
             overflow: hidden;
             margin: 20px 0;
        ">
            <!-- 좌측 영역: 사진 및 입력창 -->
            <div style="
                 flex: 1; 
                 padding: 20px; 
                 text-align: center;
            ">
                <h2 style="margin-bottom: 20px;">군무형 - 스마트폰 Wi-Fi 연결</h2>
                <img src="${images.servicecontrollerstep3}" 
                     alt="servicecontrollerbot" 
                     style="
                        width: auto; 
                        height: auto; 
                        max-width: 100%; 
                        display: block; 
                        margin: 0 auto 20px auto;
                     "/>
            </div>
    
            <!-- 우측 영역: 설명 -->
            <div style="
                 flex: 1; 
                 padding: 20px; 
                 text-align: center; 
                 border-left: 1px solid #ddd;
                 background-color: #f9f9f9;
            ">
                <h2 style="margin-bottom: 20px;">설명</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
                    스마트폰의 와이파이(WiFi) 목록에서 앞서 입력한 [공유기 이름(SSID)]을 찾아서 연결합니다.
                </p>
                <p style="font-size: 16px; line-height: 1.5;">
                    이렇게 어썸보드가 공유기 모드로 사용되고 있는 동안에는 어썸보드는 스마트폰과만 연결되며, 인터넷은 사용할 수 없습니다.
                </p>
                <p style="font-size: 16px; line-height: 1.5;">
                    스마트폰에서 인터넷 연결 문제가 발생하면 "WI-FI 연결 유지"를 선택해주시기 바랍니다.
                </p>
            </div>
        </div>
        `;
    }
    // 어썸봇 군무 컨트롤러    
    #get_servicecontrollerbotstep4() {
        return `<div style="
             display: flex; 
             width: 100%; 
             box-sizing: border-box; 
             border: 1px solid #ddd; 
             border-radius: 8px;
             overflow: hidden;
             margin: 20px 0;
        ">
            <!-- 좌측 영역: 사진 및 입력창 -->
            <div style="
                 flex: 1; 
                 padding: 20px; 
                 text-align: center;
            ">
                <h2 style="margin-bottom: 20px;">군무형 - 어썸 봇 원격 조종</h2>
                <img src="${images.servicecontrollerstep4}" 
                     alt="servicecontrollerbot" 
                     style="
                        width: auto; 
                        height: auto; 
                        max-width: 100%; 
                        display: block; 
                        margin: 0 auto 20px auto;
                     "/>
            </div>
    
            <!-- 우측 영역: 설명 -->
            <div style="
                 flex: 1; 
                 padding: 20px; 
                 text-align: center; 
                 border-left: 1px solid #ddd;
                 background-color: #f9f9f9;
            ">
                <h2 style="margin-bottom: 20px;">설명</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">
                    어썸 컨트롤러의 버튼을 클릭하면 로봇이 그에맞는 코드를 동작하는 모습을 확인하실 수 있습니다.
                </p>
                <p style="font-size: 16px; line-height: 1.5;">
                    방향키패드와 1~11번의 숫자버튼을 입력하여 로봇을 조종해보세요!
                </p>
            </div>
        </div>
        `;
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

    // 어썸봇 테스트(구형)
    #get_botBase() {
        return `<div class="bot-base-from input-group" style="width: 50%;">
                    <div class="input-group-addon bot-base">
                        <i class="q-icon material-icons">settings</i>
                    </div>
                    <div class="motor-control">
                        <input class="form-control" type="text" id='align01' value="90" placeholder="0번 모터 (Pin5)"/>  
                        <button style="width:25px;" class="btn-plus" onclick="updateMotorValue('align01', 1)">+</button>
                        <button style="width:25px;" class="btn-minus" onclick="updateMotorValue('align01', -1)">-</button>
                    </div>
                    <div class="motor-control">
                        <input class="form-control" type="text" id='align02' value="90" placeholder="1번 모터 (Pin6)"/>  
                        <button style="width:25px;" class="btn-plus" onclick="updateMotorValue('align02', 1)">+</button>
                        <button style="width:25px;" class="btn-minus" onclick="updateMotorValue('align02', -1)">-</button>
                    </div>
                    <div class="motor-control">
                        <input class="form-control" type="text" id='align03' value="90" placeholder="2번 모터 (Pin7)"/>  
                        <button style="width:25px;" class="btn-plus" onclick="updateMotorValue('align03', 1)">+</button>
                        <button style="width:25px;" class="btn-minus" onclick="updateMotorValue('align03', -1)">-</button>
                    </div>
                    <div class="motor-control">
                        <input class="form-control" type="text" id='align04' value="90" placeholder="3번 모터 (Pin8)"/>  
                        <button style="width:25px;" class="btn-plus" onclick="updateMotorValue('align04', 1)">+</button>
                        <button style="width:25px;" class="btn-minus" onclick="updateMotorValue('align04', -1)">-</button>
                    </div>
                </div>`;
    }

    // 어썸봇 테스트(신형)
    #get_newbotBase() {
        return `<div style="width: 1000px; margin: 20px auto; padding: 20px; padding-top: 0px;border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; height: 520px;">
                    <h2 style="text-align: center; margin-bottom: 20px;">
                        어썸봇 각도조절 (정면)
                    </h2>
                    <div style="display: flex; justify-content: center; align-items: center; gap: 200px;">
                        <div style="position: relative; width: 300px;">
                        <img src="${images.motorbot}" alt="Motorbot" style="width: 300px; height: auto; display: block;"/>

                        <!-- 1번 모터 (Pin6) -->
                        <div style="position: absolute; top: 163px; left: 0px; display: flex; align-items: center; gap: 8px;">
                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align02', 1)">
                                +
                            </button>

                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 14px; margin-bottom: 3px;">(6ipn)</span>
                                <input 
                                    style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; 
                                    padding: 5px; font-size: 16px;" type="text" id="align02" value="90" 
                                    onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"/>
                            </div>

                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align02', -1)">
                                -
                            </button>
                        </div>

                        <!-- 0번 모터 (Pin5) -->
                        <div style="position: absolute; top: 163px; left: 158px; display: flex; align-items: center; gap: 8px;">
                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align01', 1)">
                                +
                            </button>

                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 14px; margin-bottom: 3px;">(5ipn)</span>
                                <input 
                                    style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; 
                                    padding: 5px; font-size: 16px;" type="text" id="align01" value="90" 
                                    onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"/>
                            </div>

                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align01', -1)">
                                -
                            </button>
                        </div>

                        <!-- 3번 모터 (Pin8) -->
                        <div style="position: absolute; top: 238px; right: 253px; display: flex; flex-direction: column; align-items: center;gap: 8px;">
                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align04', -1)">
                                -
                            </button>

                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 14px; margin-bottom: 3px;">(8ipn)</span>
                                <input 
                                    style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; 
                                    padding: 5px; font-size: 16px;" type="text" id="align04" value="90" 
                                    onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"/>
                            </div>

                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align04', 1)">
                                +
                            </button>
                        </div>

                        <!-- 2번 모터 (Pin7) -->
                        <div style="position: absolute; top: 238px; left: 257px; display: flex; flex-direction: column; align-items: center;gap: 8px;">
                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align03', 1)">
                                +
                            </button>

                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 14px; margin-bottom: 3px;">(7ipn)</span>
                                <input 
                                    style="width: 60px; text-align: center; border: 1px solid #ddd; border-radius: 4px; 
                                    padding: 5px; font-size: 16px;" type="text" id="align03" value="90" 
                                    onfocus="this.style.borderColor='#6fb1fc'; this.style.boxShadow='0 0 5px rgba(111,177,252,0.5)';"
                                    onblur="this.style.borderColor='#ddd'; this.style.boxShadow='none';"/>
                            </div>

                            <button tabindex="-1" 
                                style="background: linear-gradient(145deg, #6fb1fc, #4364f7); border: none; border-radius: 50%;
                                color: #fff; font-size: 18px; width: 35px; height: 35px; margin: 0; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
                                onmousedown="this.style.transform='scale(0.95)'; this.style.boxShadow='0 2px 3px rgba(0,0,0,0.1)';"
                                onmouseup="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 6px rgba(0,0,0,0.1)';"
                                onclick="updateMotorValue('align03', -1)">
                                -
                            </button>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; justify-content: center; gap: 25px;">
                        <button type="button" tabindex="-1"
                            style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                            color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                            transition: all 0.2s;"
                            onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                            onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                            onclick="testBotBase()">
                            차렷자세 테스트 하기
                        </button>

                        <button type="button"tabindex="-1"
                            style="background: #fff; border: 2px solid #6fb1fc; border-radius: 5px; 
                            color: #6fb1fc; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                            transition: all 0.2s;"
                            onmouseover="this.style.background='#6fb1fc'; this.style.color='#fff';"
                            onmouseout="this.style.background='#fff'; this.style.color='#6fb1fc';"
                            onclick="saveBotBase()"
                            >
                            어썸봇에 적용 시키기
                        </button>

                        <button type="button"tabindex="-1"
                            style="background: #fff; border: 2px solid #dc3545; border-radius: 5px; 
                            color: #dc3545; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                            transition: all 0.2s;"
                            onmouseover="this.style.background='#dc3545'; this.style.color='#fff';"
                            onmouseout="this.style.background='#fff'; this.style.color='#dc3545';"
                            onclick="checkBotBase()"
                            >
                            현재 중심 각도 확인
                        </button>
                    </div>
                </div>
            `;
    }
    
}
