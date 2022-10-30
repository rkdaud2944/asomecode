/* eslint-disable */

export default {
    markedInput(input) {
        if (input == null) return

        const lines = input.split("\n");

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith("!")) {
                const imageTitle = line.substring(line.indexOf('[') + 1, line.indexOf(']'))
                const imageSrc = line.substring(line.indexOf('(') + 1, line.indexOf(')'))

                if (imageTitle == '')
                    input = input.replace(line, `<figure class="img_content_box"><img src="${imageSrc}"></figure>`);
                else
                    input = input.replace(line, `<figure class="img_content_box"><img src="${imageSrc}"><figcaption align = "center">[${imageTitle}]</figcaption></figure>`);
            }

            if (line.startsWith("#")) {
                const contentType = line.substring(line.indexOf('[') + 1, line.indexOf(']'))
                const content = line.substring(line.indexOf('(') + 1, line.lastIndexOf(')'))
                let functionNameId = content.replaceAll(' ', '-')

                if (contentType == 'video')
                    input = input.replace(line, `<video controls width="100%"><source src="${content}" type="video/webm"></video>`);

                if (contentType == 'function')
                    input = input.replace(line, `<div onclick="runCode(getCode('${functionNameId}'))" class="function_btn">${content}</div></br>`);

                if (contentType == 'code')
                    input = input.replace(line, ``);
            }
        }

        return marked.parse(input);
    },
}