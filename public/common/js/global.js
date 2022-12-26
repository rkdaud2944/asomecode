var defaultProduct = "asomebot";
var asomeProductList = ['asomebot', 'asomekit', 'asomecar'];
var sourceViewerWidthOpened = 350;
var sourceViewerWidthClosed = 54;
var BlockEditorWorkspace = null;
var sourceViewerWidth = sourceViewerWidthOpened;
var currentProduct = null;
var contentArea = null;
var blocklyArea = null;
var blocklyDiv = null;
var blockCategoryDiv = null;
var sourceViewerDiv = null;
var blockSourceEditorControllerDiv = null;
var blockControllerContainer = null;
var blockSourceEditor = null;
var blockCodeTempRepository = [];
var customBlockList = {};
var localStorageNameForCustomBlock = 'asomeblock_maker_block_list';

var userBrowser = "web";

if (blockeditorType == 'undefined') {
    var blockeditorType = '';
}
if (blockeditorToolboxAutoClose == 'undefined') {
    var blockeditorToolboxAutoClose = false;
}

if (navigator.userAgent.indexOf("AsomeCodeApp") != -1) {
    userBrowser = "app";
}

async function loadToolboxCategory(product) {
    var url
    if (sessionStorage.getItem("stage") != null) {
        url = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/ajax/get_toolbox_category_common.html";
    } else {
        url = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/ajax/get_toolbox_category_" + product + ".html";
    }
    try {
        const response = await fetch(url);
        const resultData = await response.text();
        document.getElementsByClassName('block-category-div')[0].innerHTML = resultData;
        document.getElementsByClassName('menu-tab-item')[0].innerHTML = resultData;
        document.getElementsByClassName('js--tab-' + product)[0].classList.add('menu-tab-selected');
        await loadToolboxBlocks(product);
    } catch (error) {
        console.log(error);
    }
}

async function loadToolboxBlocks(product, defaultCategory) {
    if (defaultCategory == undefined) {
        defaultCategory = "basic";
    }

    var url
    if (sessionStorage.getItem("stage") != null) {
        url = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/ajax/chapter/get_toolbox_blocks_" + product + ".html";
    } else {
        url = "https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/ajax/get_toolbox_blocks_" + product + ".html";
    }

    try {
        const response = await fetch(url);
        const resultData = await response.text();
        document.getElementsByClassName('blockly-block-data')[0].innerHTML = resultData;
        await changeToolbox(defaultCategory, product);
    } catch (error) {
        console.log(error);
    }
}

var resizeBlockEditor = function () {
    let x = 70;
    let y = 0;
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';

    let contentAreaHeight = document.body.offsetHeight - 100;
    if (blockeditorType == 'simple') {
        contentAreaHeight = document.body.offsetHeight - 80;
    }

    contentArea.style.height = contentAreaHeight + 'px';

    let blockDivWidth = blocklyArea.offsetWidth - x - sourceViewerWidth;
    let blockDivHeight = contentAreaHeight - blockControllerContainer.offsetHeight;

    blockCategoryDiv.style.height = blockDivHeight;

    blocklyDiv.style.width = blockDivWidth + 'px';
    blocklyDiv.style.height = blockDivHeight + 'px';
    Blockly.svgResize(BlockEditorWorkspace);

    let sourceViewerLeft = x + blockDivWidth - 9;
    sourceViewerDiv.style.left = sourceViewerLeft + 'px';
    sourceViewerDiv.style.width = sourceViewerWidth + 'px';
    sourceViewerDiv.style.height = blockDivHeight + 'px';

    blockSourceEditorControllerDiv.style.left = sourceViewerDiv.style.left;
    blockSourceEditorControllerDiv.style.width = sourceViewerDiv.style.width;

    if (blockeditorType == 'simple') {
        let blockSourceEditorControllerDivLeft = sourceViewerLeft - 17;

        blockSourceEditorControllerDiv.style.left = blockSourceEditorControllerDivLeft + 'px';
        blockSourceEditorControllerDiv.style.width = blockSourceEditorControllerDivLeft + 'px';
    }


    document.getElementsByClassName("blocklyFlyout")[0].style.height = (blockDivHeight - 2) + 'px';
    document.getElementById("block-source-editor").style.height = (blockDivHeight - 2) + 'px';
}

var toggleSourceEditor = function () {
    if (sourceViewerWidth <= sourceViewerWidthClosed) {
        openSourceEditor();
    } else {
        closeSourceEditor();
    }
    window.dispatchEvent(new Event('resize'));
}

var closeSourceEditor = function () {
    sourceViewerWidth = sourceViewerWidthClosed;
    resizeBlockEditor();
}

var openSourceEditor = function () {
    sourceViewerWidth = sourceViewerWidthOpened;
    resizeBlockEditor();
}

var generateCode = function (workspace) {
    Blockly.Python.INFINITE_LOOP_TRAP = null;

    var xml = Blockly.Xml.workspaceToDom(workspace);
    // Find and remove all top blocks.
    var topBlocks = [];
    for (var i = xml.childNodes.length - 1, node; block = xml.childNodes[i]; i--) {
        if (block.tagName == 'BLOCK') {
            xml.removeChild(block);
            topBlocks.unshift(block);
        }
    }

    // Add each top block one by one and generate code.
    var allCode = [];
    var code = "";
    for (var i = 0, block; block = topBlocks[i]; i++) {
        var blockType = block.getAttribute("type");

        if (blockType.indexOf("_ready") !== -1) {
            var headless = new Blockly.Workspace();
            xml.appendChild(block);
            Blockly.Xml.domToWorkspace(xml, headless);
            allCode.push(Blockly.Python.workspaceToCode(headless));

            headless.dispose();
            xml.removeChild(block);
        }
    }

    allCode.forEach(function (element) {
        code = code + element + "\n";
    });

    return code;
}


var showCode = function (event) {
    if (event.type == Blockly.Events.UI) {
        if (blockeditorToolboxAutoClose == true && toolboxStartClosedForAutoClose == 1) {
            closeToolbox();
            toolboxStartClosedForAutoClose++;
        }

        return;  // Don't mirror UI events.
    }

    if ((event.type == Blockly.Events.MOVE
        || event.type == Blockly.Events.BLOCK_CHANGE
        || event.type == Blockly.Events.BLOCK_DELETE
        || event.type == Blockly.Events.VAR_RENAME
    ) && (event.oldParentId == undefined || event.oldParentId == null)) {

        var code = generateCode(BlockEditorWorkspace);

        blockSourceEditor.setValue(code);
        blockSourceEditor.clearSelection();
    }
}

var initToolbox = function (name) {
    BlockEditorWorkspace = Blockly.inject(blocklyDiv,
        {
            media: '../common/blockly/media/'
            , toolbox: document.getElementById('toolbox_' + name)
            , grid: { spacing: 20, length: 1, colour: '#ccc', snap: true }
            , trashcan: true
            , collapse: false
            , comments: false
            , disable: false
            , horizontalLayout: false
            , theme: Blockly.Themes.Modern
            , scrollbars: true
        });

    if (blockeditorToolboxAutoClose == true) {
        BlockEditorWorkspace.flyout_.autoClose = true;
        closeToolbox();
    }
}

var initWorkspace = function () {
    changeToolboxCategory();
    closeSourceEditor();
    resizeBlockEditor();
}

var closeToolbox = function () {
    BlockEditorWorkspace.flyout_.hide();
    resizeBlockEditor();
    document.getElementsByClassName("block-category-div div.btn")[0].classList.remove("category-selected");
}

var selectedToolbox = {
    name: null,
    category: null
}
var toolboxStartClosedForAutoClose = 0;

function changeToolbox(name, category) {
    if (blockeditorToolboxAutoClose == true) {
        let element = document.getElementsByClassName("block-category-div div.btn")[0];
        if (element.hasClass("category-selected") == true) {
            closeToolbox();
            return;
        }

        if (toolboxStartClosedForAutoClose == 0) {
            toolboxStartClosedForAutoClose++;
            return;
        }
    }

    BlockEditorWorkspace.updateToolbox(document.getElementById('toolbox_' + name));

    document.querySelector(".block-category-div div.btn").classList.remove("category-selected");
    document.getElementsByClassName('js--category-' + category + '-' + name)[0].classList.add("category-selected");

    selectedToolbox.name = name;
    selectedToolbox.category = category;
}

var reloadToolbox = function () {
    if (selectedToolbox.name != null && selectedToolbox.category != null) {
        changeToolbox(selectedToolbox.name, selectedToolbox.category);
    }
}

var cleanBlockWorkspace = function () {
    Blockly.mainWorkspace.clear();
}

async function changeToolboxCategory(product) {
    if (product == undefined || product == "") {

        if (sessionStorage.getItem("stage") != null) {
            product = sessionStorage.getItem("stage");
            //			sessionStorage.removeItem("stage")
        } else {
            product = getProductFromUrl();
        }
    }

    if (currentProduct != product) {
        blockCodeTempRepository[currentProduct] = Blockly.Xml.workspaceToDom(BlockEditorWorkspace);
        cleanBlockWorkspace();
        if (blockCodeTempRepository[product] == undefined || blockCodeTempRepository[product] == null || blockCodeTempRepository[product] == "") {

        } else {
            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, blockCodeTempRepository[product]);
        }

        await loadToolboxCategory(product);
        currentProduct = product;
        showCustomBlockToBlockList(currentProduct);
    }
}

var getProductFromUrl = function () {
    let url = window.location.href;
    let productHash = url.substring(url.indexOf("#") + 1);

    if (asomeProductList.includes(productHash) == false) {
        productHash = defaultProduct;
    }
    return productHash;

}

let goHome = function (e) {
    if (userBrowser == "app") {
        App.run_cmd('Code=GoBack')
    } else {
        util.goUrl("/blockeditor");
    }
}

var runBlockCode = function () {
    runAsomeCodeText();
}

var saveBlocksLocalStorage = function () {
    let asomeblocksXml = exportBlocks();
    localStorage.setItem("asomeblock_workspace_product", currentProduct);
    localStorage.setItem("asomeblock_workspace_blocks", asomeblocksXml);
}

var loadBlocksLocalStorage = function () {
    let asomeblocksProduct = localStorage.getItem("asomeblock_workspace_product");
    let asomeblocksXml = localStorage.getItem("asomeblock_workspace_blocks");
    if (asomeblocksProduct != null && asomeblocksXml != null) {
        changeToolboxCategory(asomeblocksProduct);
        localStorage.clear();
        importBlocks(asomeblocksXml);
    }
}

var exportBlocks = function () {
    let xml = Blockly.Xml.workspaceToDom(BlockEditorWorkspace);
    return Blockly.Xml.domToPrettyText(xml);
}

var importBlocks = function (xmlText) {
    cleanBlockWorkspace();
    let xml = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, BlockEditorWorkspace);
}

var exportBlocksToFile = function () {
    saveTextToFile(exportBlocks());
}

var importCustomBlocks = function (xmlContent) {
    saveAsomeBlockCustomXmlToLocalStorage(xmlContent);
    showCustomBlockToBlockList(currentProduct);
}

var importBlocksFromFile = function () {
    loadTextFile(importBlocks);
}

var importCustomBlocksFromFile = function () {
    loadTextFile(importCustomBlocks);
}

async function saveTextToFile(text) {
    const file = await window.remote.dialog.showSaveDialog({
        filters: [
            { name: "XML", extensions: ["xml"] }
        ]
    });
    if (file.canceled) return;
    if (file.filePath.length == 0) return;

    return window.fs.writeFileSync(file.filePath, text);
}

function clickElem(elem) {
    // Thx user1601638 on Stack Overflow (6/6/2018 - https://stackoverflow.com/questions/13405129/javascript-create-and-save-file )
    var eventMouse = document.createEvent("MouseEvents")
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    elem.dispatchEvent(eventMouse)
}

function loadTextFile(func) {
    let fileInput = document.createElement("input");

    readFile = function (e) {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
            let contents = e.target.result;
            fileInput.func(contents)
            document.body.removeChild(fileInput)
        }
        reader.readAsText(file)
    }

    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.onchange = readFile;
    fileInput.func = func;
    document.body.appendChild(fileInput);
    clickElem(fileInput);
}

let promptToInput = function (defaultValue, callback) {
    $.confirm({
        title: 'Enter a value',
        content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<label>Value : </label>' +
            '<input type="text" style="padding: 5px;" placeholder="" class="prompt-value form-control" required value="' + defaultValue + '" onfocus="this.select()" />' +
            '</div>' +
            '</form>',
        buttons: {
            formSubmit: {
                text: 'OKAY',
                btnClass: 'btn-blue',
                action: function () {
                    let promptValue = this.$content.find('.prompt-value').val();
                    if (!promptValue) {
                        $.alert('Input a valid value.');
                        return false;
                    }
                    callback(promptValue);
                }
            },
            cancel: function () {
                //close
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
            });
        }
    });
}

/*
For Chrome App
 */

String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}

function now() {
    var d = new Date();
    var str = "({0}, {1}, {2}, 0, {3}, {4}, {5}, 0)";
    return String.format(str, d.getFullYear(), (d.getMonth() + 1), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
}

function escape_str(text) {
    result = "";
    for (var i = 0; i < text.length; i++) {
        if (text[i] == "\n") result = result + "\\n";
        else if (text[i] == "\t") result = result + "\\t";
        else if (text[i] == "%") result = result + "{mod}";
        else result = result + text[i];
    }

    result = result.replace(/@@NOW/g, now());

    return result;
}

function connect() {
    asomecode_chrome();
    //asomecode_connect();
}

function sendCommand(type) {
    const msg = {
        type: type,
    };
    window.opener.postMessage(JSON.stringify(msg));
}

function runCode() {
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    let code = generateCode(BlockEditorWorkspace);
    const msg = {
        type: "runCode",
        params: code,
    };
    window.opener.postMessage(JSON.stringify(msg));
}

function stopCode() {
    sendCommand('stop');
}

var asomecodeVersion = null;
var extensionIdNumber = 0;
var extensionId = null;
var extensionIdArray = ["ailmkijlaoejbdbndhbdhbeioehiadol", "lkjpcfmhdhnnemlmghemieodciljkhfg"];

function asomecode_chrome() {
    asomecode_set();
}

function asomecode_set() {
    if (userBrowser == "app") {
        App.run_cmd('Code=AsomeCodeConnect');
    } else {

        if (extensionIdArray.length >= extensionIdNumber) {
            asomecode_check_version(extensionIdArray[extensionIdNumber]);
        } else {
            console.log("Not installed the AsomeCode Communicator for Chrome.");
        }
    }
}

function asomecode_check_version(id) {
    chrome.runtime.sendMessage(id, { message: "version" },
        function (response) {
            if (response != undefined) {
                asomecodeVersion = response;
                extensionId = id;
                asomecode_open();
            } else {
                extensionIdNumber++;
                asomecode_set();
            }
        });
}

function asomecode_open() {
    chrome.runtime.sendMessage(extensionId, { message: "open" },
        function (response) {
            console.log(response);
        });
}

var saveAsomeBlockCustomXmlToLocalStorage = function (xmlContent) {
    let asomeBlockListArray = loadCustomBlocksLocalStorage();
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlContent, "text/xml");
    let children = xmlDoc.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block');

    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        if (child.nodeType == Node.ELEMENT_NODE) {
            let blockId = child.getElementsByTagName("id")[0].textContent;
            let blockProduct = child.getElementsByTagName("product")[0].textContent;
            let blockName = child.getElementsByTagName("name")[0].textContent;
            let blockXml = (new XMLSerializer()).serializeToString(children[i]);

            asomeBlockListArray[blockId] = { 'id': blockId, 'product': blockProduct, 'name': blockName, 'xml': "<asomeblocks>" + blockXml + "</asomeblocks>" };
        }
    }
    saveArrayToLocalStorage(asomeBlockListArray, localStorageNameForCustomBlock);
}

var saveArrayToLocalStorage = function (asomeBlockListArray, localStorageName) {
    localStorage.setItem(localStorageName, JSON.stringify(asomeBlockListArray));
}


var loadCustomBlocksLocalStorage = function () {
    let asomeBlockListArray = JSON.parse(localStorage.getItem(localStorageNameForCustomBlock));
    if (asomeBlockListArray == null) {
        asomeBlockListArray = {}
    }
    return asomeBlockListArray;
}

var showCustomBlockToBlockList = function (product) {
    customBlockList = loadCustomBlocksLocalStorage();
    let blockJson = null;
    for (let key in customBlockList) {
        if (product == customBlockList[key]['product']) {
            convertAsomeBlockXmlToCustomBlockly(customBlockList[key]['xml']);
        }
    }
}


var convertAsomeBlockXmlToCustomBlockly = function (xmlContent) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlContent, "text/xml");
    var children = xmlDoc.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block');

    var blockMessageStr = "";
    var blockArgs = [];
    var blockParameters = {};

    for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.nodeType == Node.ELEMENT_NODE) {
            var blockId = child.getElementsByTagName("id")[0];
            var blockProduct = child.getElementsByTagName("product")[0];
            var blockName = child.getElementsByTagName("name")[0];
            var blockParams = child.getElementsByTagName("param");
            var blockCode = child.getElementsByTagName("code")[0];

            var idContent = blockId.textContent;
            var productContent = blockProduct.textContent;
            var nameContent = blockName.textContent;
            var codeContent = blockCode.textContent;

            blockMessageStr = blockMessageStr + nameContent;
            for (var tmpCount = 0; tmpCount < blockParams.length; tmpCount++) {
                let paramName = blockParams[tmpCount].getElementsByTagName("name")[0].textContent;
                let paramType = blockParams[tmpCount].getElementsByTagName("type")[0].textContent;
                let paramDefault = blockParams[tmpCount].getElementsByTagName("default")[0].textContent;

                blockParameters[tmpCount] = { 'name': paramName, 'type': paramType, 'default': paramDefault };

                let blockArgNumber = tmpCount * 2;
                blockArgs[blockArgNumber] = { "type": "input_dummy", "align": "RIGHT" };
                blockMessageStr = blockMessageStr + " %" + (blockArgNumber + 1);
                blockMessageStr = blockMessageStr + " " + paramName;
                if (paramType == "integer") {
                    blockArgs[blockArgNumber + 1] = { "type": "field_number", "name": 'custom' + idContent + '_' + paramName, "value": paramDefault };
                } else {
                    blockArgs[blockArgNumber + 1] = { "type": "field_input", "name": 'custom' + idContent + '_' + paramName, "text": paramDefault };
                }
                blockMessageStr = blockMessageStr + " %" + (blockArgNumber + 1 + 1);
            }
        }
    }

    let blockJson = [{
        "type": idContent,
        "lastDummyAlign0": "RIGHT",
        "message0": blockMessageStr,
        "args0": blockArgs,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "",
        "helpUrl": ""
    }];

    convertAsomeBlockXmlCodeToBlocklyCode(idContent, codeContent, blockParameters);
    Blockly.defineBlocksWithJsonArray(blockJson);
    $('#toolbox_custom').html('');
    $('#toolbox_custom').append('<block type="' + idContent + '"></block>');
}

var convertAsomeBlockXmlCodeToBlocklyCode = function (name, code, params) {
    let codeContent = "";
    let paramCode = "";
    for (let key in params) {
        let paramName = 'custom' + name + '_' + params[key]['name'];
        codeContent = codeContent + 'let ' + paramName + ' = block.getFieldValue("' + paramName + '");\n';
        paramCode = paramCode + params[key]['name'] + ' = \\\""+' + paramName + '+"\\\"\\n';
    }
    code = JSON.stringify(code);
    code = code.substring(1, code.length - 1);

    codeContent = codeContent + 'let code = \"' + paramCode + code + '"\nreturn code;';
    Blockly.Python[name] = new Function('block', codeContent);
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openPopupMenuCustom() {
    document.getElementById("dropdown_menu_custom").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function urlParam(name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}

function loadLanguage() {
    let languageParam = urlParam('language');
    let languageCode = 'en';
    switch (languageParam) {
        case 'Korean':
            languageCode = 'ko';
            break;
        case 'Chinese':
            languageCode = 'ch';
            break;
        case 'Indonesian':
            languageCode = 'id';
            break;
        case 'Vietnamese':
            languageCode = "vi";
            break;
        default:
            languageCode = 'en';
    }

    let languageScript = document.createElement('script');
    languageScript.src = "../common/js/blocks/msg/asomeblock_" + languageCode + ".js";
    document.body.appendChild(languageScript);
}

document.addEventListener("DOMContentLoaded", function () {
    contentArea = document.getElementById('content-area');
    blocklyArea = document.getElementById('blockly-area');
    blocklyDiv = document.getElementById('blockly-div');
    blockCategoryDiv = document.getElementsByClassName('block-category-div')[0];
    blockControllerContainer = document.getElementById('block-controller-container');

    sourceViewerDiv = document.getElementById('block-source-div');
    blockSourceEditorControllerDiv = document.getElementById('block-source-editor-controller-div');

    initToolbox("basic");
    let onresize = function (e) {
        resizeBlockEditor();
    };

    window.addEventListener('resize', onresize, false);
    //onresize();
    Blockly.svgResize(BlockEditorWorkspace);
    BlockEditorWorkspace.addChangeListener(showCode);
    resizeBlockEditor();

    blockSourceEditor = ace.edit("block-source-editor");
    blockSourceEditor.setTheme("ace/theme/xcode");
    blockSourceEditor.session.setMode("ace/mode/python");
    blockSourceEditor.setOptions({
        enableBasicAutocompletion: true
        , enableSnippets: true
        , enableLiveAutocompletion: true
        , wrap: true
        , mode: 'ace/mode/python'
        , fixedWidthGutter: true
        , hScrollBarAlwaysVisible: false
        , autoScrollEditorIntoView: false
    });

    if (userBrowser == "app") {
        loadBlocksLocalStorage();
    } else {

    }

    Blockly.prompt = function (message, defaultValue, callback) {
        promptToInput(defaultValue, callback);
    };


    let closeKeyboard = function () {
        debug("Close Keyboard");
        $('.onscreenKeyboard').css('display', 'none');
    }

    var debug = function (product) {
        var data = { product: product };
        $.ajax("ajax/getToolboxCategory.php", {
            data: data,
            dataType: "html",
            method: "GET",
            async: false,
            success: function (resultData) {
            }
        })
    }

    changeToolboxCategory();
    closeSourceEditor();
});