/* eslint-disable */

export default {
    setHtml(text) {
        this.html = marked.parse(text);

        this.titles = [];
        const lines = text.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line.startsWith("#")) continue;

            const tag = "tag-" + i;
            const title_items = line.split(" ");
            const level = title_items[0];

            title_items.shift();
            const name = title_items.join(" ");

            this.html = this.html.replace(name, `<div id="${tag}">${name}</div>`);

            this.titles.push({
                name: name,
                level: level.length,
                tag: tag,
            });
        }
    },

    getTitles() {
        return this.titles;
    },

    getContent() {
        return this.html;
    }
}