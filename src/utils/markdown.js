import AsomeParser from "./asome-parser";

/* eslint-disable */

export default class {
    static parse(input) {
        if (input == null) return

        const asomeParser = new AsomeParser(input);
        return marked.parse(asomeParser.execute());
    }
}