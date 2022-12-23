import fs from 'fs';

export default {
    async loadFileAsText(label, ext, charSet='utf-8') {
        const file = await window.remote.dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [
                { name: label, extensions: [ext] }
            ]
        });
        if (file.canceled) return;
        if (file.filePaths.length == 0) return;

        return fs.readFileSync(file.filePaths[0], charSet);
    },

    async saveTextToFile(label, ext, data) {
        const file = await window.remote.dialog.showSaveDialog({
            filters: [
                { name: label, extensions: [ext] }
            ]
        });
        if (file.canceled) return;
        if (file.filePath.length == 0) return;

        return fs.writeFileSync(file.filePath, data);
    },
}