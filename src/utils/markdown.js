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

    markedInput(input) {
        const lines = input.split("\n");

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line.startsWith("!")) continue;

            const imageTitle = line.substring(line.indexOf('[') + 1, line.indexOf(']'))
            const imageSrc = line.substring(line.indexOf('(') + 1, line.indexOf(')'))

            if (imageTitle == '')
                input = input.replace(line, `<figure class="img_content_box"><img src="${imageSrc}"></figure>`);
            else
                input = input.replace(line, `<figure class="img_content_box"><img src="${imageSrc}"><figcaption align = "center">[${imageTitle}]</figcaption></figure>`);
        }

        return marked.parse(input);
    },

    getTitles() {
        return this.titles;
    },

    getContent() {
        return this.html;
    }
}