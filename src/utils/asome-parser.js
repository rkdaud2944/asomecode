import { v1 as uuidv1 } from "uuid"
import partImgCode from "@/utils/asome-part-img-code";
import stripComments from "@/utils/strip-comments";

export default class AsomeParser {
    constructor(input) {
        this.scanner = new Scanner(input);
        this.parser = new Parser();

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
        const text = this.source.substr(this.index, 6);

        if (text.startsWith("button")) {
            this.index = this.index + "button".length;
            this.onToken({ text: "[button", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("image")) {
            this.index = this.index + "image".length;
            this.onToken({ text: "[image", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("video")) {
            this.index = this.index + "video".length;
            this.onToken({ text: "[video", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("editor")) {
            this.index = this.index + "editor".length;
            this.onToken({ text: "[editor", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("parts")) {
            this.index = this.index + "parts".length;
            this.onToken({ text: "[parts", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("wifi")) {
            this.index = this.index + "wifi".length;
            this.onToken({ text: "[wifi", type: TokenType.BEGIN_MARK });
        } else if (text.startsWith("input")) {
            this.index = this.index + "input".length;
            this.onToken({ text: "[input", type: TokenType.BEGIN_MARK });
        } else {
            this.onToken({ text: "[", type: TokenType.TEXT });
        }
        this.state = State.BASE;
    }
}

class Parser {
    constructor() {
        this.lessonContentBaseUrl = process.env.VUE_APP_LESSON_CONTENT_BASEURL,
            this.result = "";
        this.markType = "";
        this.buffer = "";
    }

    addToken(token) {
        if (token.type == TokenType.BEGIN_MARK) {
            this.markType = token.text;
        }

        if (this.markType == "") {
            this.result = this.result + token.text;
        } else {
            this.buffer = this.buffer + token.text;
        }

        if (token.type == TokenType.END_MARK) {
            this.result = this.result + this.#get_markText();
            this.buffer = "";
            this.markType = "";
        }
    }

    #get_markText() {
        switch (this.markType) {
            case "[button": return this.#get_buttonText(this.buffer);
            case "[image": return this.#get_imageText(this.buffer);
            case "[video": return this.#get_videoText(this.buffer);
            case "[editor": return this.#get_editorText(this.buffer);
            case "[parts": return this.#get_partsText(this.buffer);
            case "[wifi": return this.#get_wifi_Text();
            case "[input": return this.#get_input_Text(this.buffer);
        }
    }

    #get_buttonText(text) {
        const firstLine = text.split("\n")[0]
        const functionName = firstLine.replace("[button ", "");
        const functionId = functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')

        let content = text.replace(`${firstLine}`, "").slice(0, -1)
        const lines = content.split("\n")
        content = lines.map( e => stripComments.stripPythonComments(e)).join('\n')

        return `<div onclick="runCode(getCode('${functionId}'))" class="function_btn">${functionName}</div></br>` +
               `<div id="${functionId}" class="hidden">${content}</div>`;
    }

    #get_imageText(text) {
        const firstLine = text.split("\n")[0]
        const imageTitle = firstLine.substring(firstLine.indexOf('(') + 1, firstLine.indexOf(')'))
        let imageSrc = text.replace(`[image (${imageTitle}) `, "").slice(0, -1) // 로컬 파일
        if (imageSrc.charAt(0) != '/')
            imageSrc = this.lessonContentBaseUrl + "lesson/images/" + text.replace(`[image (${imageTitle}) `, "").slice(0, -1) // S3 파일

        if (imageTitle == '')
            return `<figure class="img_content_box"><img src="${imageSrc}"></figure>`
        else
            return `<figure class="img_content_box"><img src="${imageSrc}"><figcaption align = "center">[${imageTitle}]</figcaption></figure>`
    }

    #get_videoText(text) {
        const firstLine = text.split("\n")[0]
        let content = this.lessonContentBaseUrl + "lesson/videos/" + firstLine.replace("[video ", "")
        return `<video controls width="100%"><source src="${content}" type="video/webm"></video>`;
    }

    #get_editorText(text) {
        const firstLine = text.split("\n")[0]
        let content = text.replace(`${firstLine}`, "").slice(0, -1)
        const uuid = uuidv1(new Date())

        return `<pre onclick="openEditor(getCode('${uuid}'))">\n` +
            `<code id="${uuid}" class="python">${content}` +
            `</code></pre>`;
    }

    #get_partsText(text) {
        const firstLine = text.split("\n")[0]
        const partList = text.replace(`${firstLine}`, "").slice(0, -1).split("\n")
        let content = ''

        partList.forEach(e => {
            const partName = e.split('*')[0].trim()
            const qty = e.split('*')[1]
            const src = partImgCode.data().parts.find(item => item.label == partName)?.src

            if (src == undefined || qty == undefined)
                return;

            content = content +
                `<div class="part_component">
                    <div class="parts_compoent_box">
                    <div class="parts_compoent" frameborder="0">
                        <div style="width: 100%; height: 100%;">
                        <div class="parts_image_bar">
                            <img class="parts_image" src="../../common/parts/${src}">
                            <div class="parts_qty"><p style="display: table-cell; vertical-align: middle;">x ${qty}</p></div>
                        </div>
                        <div class="parts_comment_bar">
                        ${partName}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`
        });

        return `<div>${content}</div>`;
    }

    #get_wifi_Text() {
        return `<div class="input-group" >
          <span class="input-group-addon"><i class="q-icon material-icons"> wifi</i></span>
          <input class="form-control" type="text" id="wifi_name" placeholder="와이파이 이름" onchange="setWifiInfo()">
        </div>
        <br>
        <div>
          <span class="input-group-addon"><i class="q-icon material-icons">lock</i></span>
            <input class="form-control" type="text" id="wifi_password" placeholder="와이파이 암호" onchange="setWifiInfo()">
        </div>
        <br>` +

        `<div onclick="runCode(getCode('인터넷-연결하기'))" class="function_btn">인터넷 연결하기</div></br>` +
        `<div id="인터넷-연결하기" class="hidden"></div>`;
    }

    #get_input_Text(text) {
        const firstLine = text.split("\n")[0]
        const incon = firstLine.substring(firstLine.indexOf('(') + 1, firstLine.indexOf(')'))
        const name = firstLine.replace("[input ", "").replace(`(${incon}) `, '');
        const id = name.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')

        return `<div class="input-group" >
          <span class="input-group-addon"><i class="q-icon material-icons">${incon}</i></span>
          <input class="form-control" type="text" id="${id}" placeholder="${name}" onchange="setInputValue(${id})">
        </div>
        <br>`;
    }
}