/* eslint-disable */
export default class {
    static stripPythonComments(text) {
        if (!text) return "";

        this.state = State.BASE
        this.commnets = ""

        for (let i = 0; i < text.length; i++) {
            switch (this.state) {
                case State.BASE: this.do_base(text[i]); break
                case State.QUOTATION: this.do_quotation(text[i]); break
                case State.DOUBLE_QUOTATION: this.do_double_quotation(text[i]); break
                case State.PYTHON_COMMENTS: this.do_phthon_comments(text[i]); break
            }
        }

        let result = text.replace(this.commnets, '');
        return result;
    }

    static do_base(ch) {
        switch (ch) {
            case "\'":
                this.state = State.QUOTATION;
                break;
            case "\"":
                this.state = State.DOUBLE_QUOTATION;
                break;
            case "#":
                this.state = State.PYTHON_COMMENTS;
                this.commnets = this.commnets + ch
                break;
            default:
                break;
        }
    }

    static do_quotation(ch) {
        switch (ch) {
            case "\'":
                this.state = State.BASE;
                break;
            default:
                break;
        }
    }

    static do_double_quotation(ch) {
        switch (ch) {
            case "\"":
                this.state = State.BASE;
                break;
            default:
                break;
        }
    }

    static do_phthon_comments(ch) {
        switch (ch) {
            case "\n":
                this.state = State.BASE;
                break;
            default:
                this.commnets = this.commnets + ch
                break;
        }
    }
}

const State = {
    BASE: 0,
    QUOTATION: 1,
    DOUBLE_QUOTATION: 2,
    PYTHON_COMMENTS: 3,
}