export class AsomeParser {
    constructor (input) {
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
    constructor (input) {
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
                this.onToken({text: "\n", type: TokenType.TEXT})
                this.state = State.RETURN;
                break;

            default: 
                this.onToken({text: ch, type: TokenType.TEXT})
        }
    }

    #do_return() {
        const ch = this.#nextChar();
        switch (ch) {
            case "\n": 
                this.onToken({text: "\n", type: TokenType.TEXT})
                break;

            case "[": this.state = State.BEGIN_MARK; 
                break;

            case "]": 
                this.onToken({text: ch, type: TokenType.END_MARK})
                this.state = State.BASE;
                break;
            
            default: 
                this.onToken({text: ch, type: TokenType.TEXT})
                this.state = State.BASE;            
        }
    }

    #do_beginMark() {
        const text = this.source.substr(this.index, 6);

        if (text.startsWith("button")) {
            this.index = this.index + "button".length;
            this.onToken({text: "[button", type: TokenType.BEGIN_MARK});
        } else if (text.startsWith("image")) {
            this.index = this.index + "image".length;
            this.onToken({text: "[image", type: TokenType.BEGIN_MARK});
        } else if (text.startsWith("video")) {
            this.index = this.index + "video".length;
            this.onToken({text: "[video", type: TokenType.BEGIN_MARK});
        } else {
            this.onToken({text: "[", type: TokenType.TEXT});
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
        }
    }

    #get_buttonText(text) {
        const firstLine = text.split("\n")[0]
        const id = firstLine.replace("[button ","");
        let content = text.replace(`${firstLine}`, "").slice(0, -1)
        return `<div onclick="runCode(getCode('${id}'))" class="function_btn">${id}</div></br>`+ 
               `<div id="${id}" class="hidden">${content}</div>`;
    }

    #get_imageText(text) {
        const firstLine = text.split("\n")[0]
        const imageTitle = firstLine.substring(firstLine.indexOf('(') + 1, firstLine.indexOf(')'))
        let imageSrc = this.lessonContentBaseUrl + "lesson/images/" + text.replace(`[image (${imageTitle}) `, "").slice(0, -1)

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

    #get_editorText() {
        return "";
    } 
}