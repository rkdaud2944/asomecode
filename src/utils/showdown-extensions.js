// src/utils/showdown-extensions.js

export const customExtensions = () => {
    return [
        {
            type: 'lang',
            regex: /\[image\s*\((.*?)\)\s*(.*?)\]/g, // [image (Title) src]
            replace: function (match, title, src) {
                return `<figure class="img_content_box"><img src="${src}" alt="${title}"><figcaption align="center">[${title}]</figcaption></figure>`;
            }
        },
        {
            type: 'lang',
            regex: /\[video\s*(.*?)\]/g, // [video src]
            replace: function (match, src) {
                return `<video controls width="100%"><source src="${src}" type="video/webm">Your browser does not support the video tag.</video>`;
            }
        },
        // 추가적인 커스텀 구문 확장
        {
            type: 'lang',
            regex: /\[button\s+(.*?)\]/g, // [button functionName]
            replace: function (match, functionName) {
                const uniqueId = Date.now();
                const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
                return `<div onclick="runCode(getCode('${functionId}'))" class="function_btn">${functionName}</div></br>` +
                       `<div id="${functionId}" class="hidden"></div>`;
            }
        },
        {
            type: 'lang',
            regex: /\[controllerwifi\s+(.*?)\]/g, // [controllerwifi functionName:filename]
            replace: function (match, params) {
                const [functionName, fileName] = params.split(':').map(str => str.trim());
                const uniqueId = Date.now();
                const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
                return `<button class="answer-btn" style="cursor: pointer;" onclick="contentsUploadFile('${fileName}',getCode('${functionId}'))" class="function_btn">${functionName}</button></br>` +
                       `<div id="${functionId}" class="hidden"></div>`;
            }
        },
        {
            type: 'lang',
            regex: /\[upload\s+(.*?)\]/g, // [upload functionName:filename]
            replace: function (match, params) {
                const [functionName, fileName] = params.split(':').map(str => str.trim());
                const uniqueId = Date.now();
                const functionId = `${functionName.replaceAll(' ', '-').replaceAll("'", '').replaceAll('"', '')}-${uniqueId}`;
                return `<button class="answer-btn" style="cursor: pointer;" onclick="contentsUploadFile('${fileName}',getCode('${functionId}'))" class="function_btn">${functionName}</button></br>` +
                       `<div id="${functionId}" class="hidden"></div>`;
            }
        },
        // 필요한 경우 다른 커스텀 구문 추가
    ];
};
