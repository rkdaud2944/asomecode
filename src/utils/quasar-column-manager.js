import strg from "@/utils/strg";

export default class QuasarColumHeader {
    constructor(columns) {
        this.columns = columns;
    }

    getHeader(col) {
        // ↑, ↓
        let sortSign = "";
        if (col.sortSign) sortSign = col.sortSign;

        if (col.sort) {
            return `<div class="q-table-header-label cursor-pointer text-deep-orange">${sortSign} ${col.label}</div>`;
        } else {
            return col.label;
        }
    }

    getColumn(col) {
        switch (col.type) {
            case "url": return strg.toLink(col.value);
            case "number": return strg.getPriceStr(col.value);
            case "codeText": return this.getCode(col).label;
            case "image": return strg.toImage(col.value);
            default: return col.value;
        }
    }

    getCode(col) {
        if (!col.codes) return {};

        for (let i = 0; i < col.codes.length; i++) {
            if (col.codes[i].value == col.value) {
                return col.codes[i];
            }
        }
        return {};
    }

    onColumnClick(col) {
        const target = this.getColumnByName(col.name);
        if (target.sort) {
            target.sortSign = target.sortSign === "↑" ? "↓" : "↑";
            target.sortType = target.sortSign === "↑" ? "desc" : "asc";
        }

        this.columns.map(col => {
            if (col.name !== target.name) {
                col.sortSign = "";
            }
        });
    }

    getColumnByName(name) {
        return this.columns.find(col => col.name === name);
    }
}