/* eslint-disable */

export default {
    markedInput(input) {
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

                if (contentType == 'function')
                    input = input.replace(line, `<div onclick="runCode(getCode('${functionNameId}'))" class="bg-positive">${content}</div></br>`);
            }
        }
        
        return marked.parse(input);
    },
}