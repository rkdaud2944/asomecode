export default {
    getTitles(markdown) {
        const titles = [];
        const lines = markdown.split("\n");
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("#")) {
                const title_items = line.split(" ");
                const level = title_items[0];
                title_items.shift();
                titles.push({
                    name: title_items.join(" "),
                    level: level.length,
                });
            }
        }
        return titles;
    }
}