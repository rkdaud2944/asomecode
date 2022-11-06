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
    CODE: 1,
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
        if (text.startsWith("code")) {
            this.index = this.index + "code".length;
            this.onToken({text: "[code", type: TokenType.CODE});
        } else {
            this.onToken({text: "[", type: TokenType.TEXT});
        }
        this.state = State.BASE;
    }
}

class Parser {
    constructor() {
        this.result = "";
    }

    addToken(token) {
        console.log(token);
        this.result = this.result + token.text;
    }
}