var defaultProduct = "asomebot";
var asomeProductList = ['asomebot','asomekit','asomecar'];
var contentArea = null;
var blocklyArea = null;
var blocklyDiv = null;
var blockMakerDiv = null;
var sourceViewerWidthOpened = 500;
var BlockEditorWorkspace = null;
var sourceViewerWidth = sourceViewerWidthOpened;
var blockSourceEditorControllerDiv = null;
var asomeBlockList = {};
var currentProduct = null;
var localStorageName = 'asomeblock_maker_block_list';

$(document).ready(function() {
    contentArea = document.getElementById('content-area');
    blocklyArea = document.getElementById('blockly-area');
    blocklyDiv = document.getElementById('blockly-div');
    blockMakerDiv = document.getElementById('block-maker-div-container');
    blockCategoryDiv = $('.block-list-div-container');

    blockSourceEditorControllerDiv = document.getElementById('block-source-editor-controller-div');
    blockControllerContainer = document.getElementById('block-controller-container');
    sourceViewerDiv = document.getElementById('block-source-div');

    initToolbox("maker");
    let onresize = function(e) {
        resizeBlockEditor();
    };

    window.addEventListener('resize', onresize, false);
    //onresize();
    Blockly.svgResize(BlockEditorWorkspace);
    //BlockEditorWorkspace.addChangeListener(showCode);
    resizeBlockEditor();

    ace.require("ace/ext/language_tools");
    blockSourceEditor = ace.edit("block-source-editor");
    blockSourceEditor.setTheme("ace/theme/xcode");
    blockSourceEditor.session.setMode("ace/mode/asomeblock_python");
    blockSourceEditor.setOptions({
        enableBasicAutocompletion: true
        ,enableSnippets: true
        ,enableLiveAutocompletion: true
        ,wrap: true
        ,mode: 'ace/mode/asomeblock_python'
    });

    Blockly.prompt = function(message, defaultValue, callback) {
        promptToInput(defaultValue, callback);
    };

    changeMakerToolboxCategory();
    newAsomeBlock();
    loadAllBlocksFromLocalStorage();
});

var initToolbox = function(name) {
    BlockEditorWorkspace = Blockly.inject(blocklyDiv,
        {media: '/common/blockly/media/'
            ,grid: {spacing: 20, length: 1, colour: '#ccc', snap: true }
            ,trashcan: false
            ,collapse : false
            ,comments : false
            ,disable : false
            ,horizontalLayout : false
            ,theme : Blockly.Themes.Modern
            ,scrollbars: true
        });
}

var resizeBlockEditor = function () {
    let x = 300;
    let y = 0;
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';

    let contentAreaHeight = document.body.offsetHeight - 100;

    contentArea.style.height = contentAreaHeight +'px';

    let blockDivWidth = blocklyArea.offsetWidth - x - sourceViewerWidth;
    let contentAreaBodyHeight = contentAreaHeight - blockControllerContainer.offsetHeight;
    //let blockDivHeight = contentAreaHeight - blockControllerContainer.offsetHeight;
    let blockDivHeight = 200;

    blockCategoryDiv.height(contentAreaBodyHeight);

    blocklyDiv.style.width = blockDivWidth + 'px';
    blocklyDiv.style.height = blockDivHeight + 'px';
    Blockly.svgResize(BlockEditorWorkspace);

    let sourceViewerLeft = x + blockDivWidth;
    sourceViewerDiv.style.left = sourceViewerLeft + 'px';
    sourceViewerDiv.style.width = sourceViewerWidth + 'px';
    sourceViewerDiv.style.height = contentAreaBodyHeight + 'px';

    blockMakerDiv.style.left = x + 'px';
    blockMakerDiv.style.top = blockDivHeight + 'px';
    blockMakerDiv.style.width = blockDivWidth + 'px';
    blockMakerDiv.style.height = contentAreaBodyHeight - blockDivHeight +'px';

    blockSourceEditorControllerDiv.style.left = sourceViewerDiv.style.left;
    blockSourceEditorControllerDiv.style.width = sourceViewerDiv.style.width;

    $(".blocklyFlyout").css({height: (blockDivHeight)+'px'});
    $("#block-source-editor").css({height: (contentAreaBodyHeight)+'px'});
}

var generateBlockId = function() {
    let userAgent = navigator.userAgent.toLowerCase();
    let dt = new Date();
    let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    return $.md5(userAgent+$( window ).width()+$( window ).height()+$.now());
}

var newAsomeBlock = function() {
    resetMaker();
    $('#block_maker_block_id').val(generateBlockId());
}

var resetMaker = function() {
    $('#block_maker_block_id').val('');
    $('#block_maker_product').prop("selectedIndex", 0).change();
    $('#block_maker_name').val('Untitled');
    deleteAllParameter();
}

var deleteParameter = function(object) {
    $(object).parent().remove();
    showBlocklyFromEditorForm();
}

var addParameter = function() {
    addParameterWithValue('','','')
}

var addParameterWithValue = function(name, type, defaultValue) {
    let typeStringSelected = '';
    let typeIntegerSelected = '';

    if ( type == 'string' ) {
        typeStringSelected = 'selected';
    }
    else if ( type == 'integer' ) {
        typeIntegerSelected = 'selected';
    }

    let parameterHtmlContent = "<div class=\"js-block-maker-parameter\">"
        +"<input name=\"param_name[]\" aria-labelledby=\"block_maker_parameters\" style=\"width: 190px;\" type=\"text\" placeholder=\"Name\" value=\""+name+"\" onClick=\"this.select();\" />"
        +"<select name=\"param_type[]\" aria-labelledby=\"block_maker_parameters\">"
        +"<option value=''>- Type -</option>"
        +"<option value='string' "+typeStringSelected+">String</option>"
        +"<option value='integer' "+typeIntegerSelected+">Integer</option>"
        +"</select>"
        +"<input name=\"param_default[]\" aria-labelledby=\"block_maker_parameters\" type=\"text\" placeholder=\"Default\" value=\""+defaultValue+"\" onClick=\"this.select();\" />"
        +"&nbsp;<button onclick='deleteParameter(this);' style='float: right;'>X</button>"
        +"</div>";

    $("#block_maker_parameter_fieldset").append(parameterHtmlContent);
}


var deleteAllParameter = function() {
    if ( $('.js-block-maker-parameter').length > 0 ) {
        $('.js-block-maker-parameter').remove();
    }

}

var getCodeFromEditor = function() {
    return blockSourceEditor.getValue();
}

var putCodeToEditor = function(code) {
    blockSourceEditor.setValue(code);
    blockSourceEditor.clearSelection();
}


var generateAsomeBlockXmlFromEditorForm = function() {
    let blockFormArray = $("#block-maker-form").serializeArray();
    let xmlDoc = document.implementation.createDocument(null, 'asomeblocks', null);

    let tempA = 0;
    let tempB = 0;

    let blockDom = null;
    let blockId = null;
    for(tempA=0; tempA < blockFormArray.length; tempA++) {
        let blockItem = blockFormArray[tempA];
        if ( blockItem['name'] == 'block_id' ) {
            blockId = blockItem['value'];
        }

        if ( blockItem['name'] == 'product' ) {
            if ( blockItem['value'] == null || blockItem['value'] == "" ) {
                blockDom = null;
            } else {
                blockDom = xmlDoc.createElement('block');
                let tempBlockId = xmlDoc.createElement('id');
                tempBlockId.textContent = blockId;
                blockDom.appendChild(tempBlockId);

                let foo = xmlDoc.createElement('product');
                foo.textContent = blockItem['value'];
                blockDom.appendChild(foo);
            }
        }

        if ( blockDom == null ) {
            continue;
        }
        if ( blockItem['name'] == 'name' ) {
            let foo = xmlDoc.createElement('name');
            foo.textContent = blockItem['value'];
            blockDom.appendChild(foo);
        }
        else if ( blockItem['name'] == 'param_name[]' ) {
            let isToAddParam = true;
            let paramDom = xmlDoc.createElement('param');

            let paramItemDom = null;
            if ( blockItem['value'] == "" || blockItem['value'] == null ) {
                isToAddParam = false;
            } else {
                paramItemDom = xmlDoc.createElement('name');
                paramItemDom.textContent = blockItem['value'];
                paramDom.appendChild(paramItemDom);
            }

            tempA++;
            blockItem = blockFormArray[tempA];
            if ( blockItem['value'] == "" || blockItem['value'] == null ) {
                isToAddParam = false;
            } else {
                paramItemDom = xmlDoc.createElement('type');
                paramItemDom.textContent = blockItem['value'];
                paramDom.appendChild(paramItemDom);
            }

            tempA++;
            blockItem = blockFormArray[tempA];
            paramItemDom = xmlDoc.createElement('default');
            paramItemDom.textContent = blockItem['value'];
            paramDom.appendChild(paramItemDom);

            if ( isToAddParam == true ) {
                blockDom.appendChild(paramDom);
            }
        }
    }

    if ( blockDom != null ) {
        let sourceCodeDom = xmlDoc.createElement('code');
        let tempCode = getCodeFromEditor();
        sourceCodeDom.textContent = tempCode.encodeHTML();
        blockDom.appendChild(sourceCodeDom);

        xmlDoc.documentElement.appendChild(blockDom);
    }

    var xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
    return xmlString;
}

var convertAsomeBlockXmlToEditorForm = function(xmlContent) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString( xmlContent, "text/xml");
    let children = xmlDoc.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block');

    var blockArgs = [];

    for(var i =0; i< children.length; i++) {
        var child = children[i];

        if (child.nodeType == Node.ELEMENT_NODE) {
            let blockId = child.getElementsByTagName("id")[0].textContent;
            let blockProduct = child.getElementsByTagName("product")[0].textContent;
            let blockName = child.getElementsByTagName("name")[0].textContent;
            let blockParams = child.getElementsByTagName("param");
            let blockCode = child.getElementsByTagName("code")[0].textContent;

            $('#block-maker-form #block_maker_block_id').val(blockId);
            $('#block-maker-form #block_maker_product').val(blockProduct);
            $('#block-maker-form #block_maker_name').val(blockName);
            putCodeToEditor(blockCode);

            for ( var tmpCount = 0; tmpCount < blockParams.length; tmpCount++ ) {
                let paramName = blockParams[tmpCount].getElementsByTagName("name")[0].textContent;
                let paramType = blockParams[tmpCount].getElementsByTagName("type")[0].textContent;
                let paramDefault = blockParams[tmpCount].getElementsByTagName("default")[0].textContent;

                addParameterWithValue(paramName, paramType, paramDefault);
            }
        }

        convertAsomeBlockXmlToBlockly(xmlContent);
    }
}

var convertAsomeBlockXmlToBlockly = function(xmlContent) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString( xmlContent, "text/xml");
    var children = xmlDoc.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block');

    var blockMessageStr = "";
    var blockArgs = [];

    for(var i =0; i< children.length; i++) {
        var child = children[i];

        if(child.nodeType == Node.ELEMENT_NODE)  {
            var blockProduct = child.getElementsByTagName("product")[0];
            var blockName = child.getElementsByTagName("name")[0];
            var blockParams = child.getElementsByTagName("param");
            var blockCode = child.getElementsByTagName("code")[0];

            var productContent = blockProduct.textContent;
            var nameContent = blockName.textContent;
            var codeContent = blockCode.textContent;

            blockMessageStr = blockMessageStr + nameContent;
            for ( var tmpCount = 0; tmpCount < blockParams.length; tmpCount++ ) {
                let paramName = blockParams[tmpCount].getElementsByTagName("name")[0].textContent;
                let paramType = blockParams[tmpCount].getElementsByTagName("type")[0].textContent;
                let paramDefault = blockParams[tmpCount].getElementsByTagName("default")[0].textContent;

                let blockArgNumber = tmpCount*2;
                blockArgs[blockArgNumber]  = { "type": "input_dummy","align": "RIGHT" };
                blockMessageStr = blockMessageStr +" %"+(blockArgNumber+1);
                blockMessageStr = blockMessageStr + " "+paramName;
                if ( paramType == "integer" ) {
                    blockArgs[blockArgNumber+1] = {"type": "field_number", "name": paramName, "value": paramDefault};
                } else {
                    blockArgs[blockArgNumber+1] = {"type": "field_input", "name": paramName, "text": paramDefault};
                }
                blockMessageStr = blockMessageStr +" %"+(blockArgNumber+1+1);
            }
        }
    }

    let blockJson = [{
        "type": nameContent,
        "lastDummyAlign0": "RIGHT",
        "message0": blockMessageStr,
        "args0": blockArgs,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 65,
        "tooltip": "",
        "helpUrl": ""
    }];

    Blockly.defineBlocksWithJsonArray(blockJson);
    importBlocks('<xml><block type="'+nameContent+'" x="100" y="50"></block></xml>');
}


var convertAsomeBlockXmlCodeToBlocklyCode = function(name, code, params) {
    let codeContent = "";
    let paramCode = "";
    for ( let key in params ) {
        let paramName = 'custom'+name+'_'+params[key]['name'];
        codeContent = codeContent + 'let '+paramName+' = block.getFieldValue("'+paramName+'");\n';
        paramCode = paramCode+ params[key]['name']+' = \\\""+'+paramName+'+"\\\"\\n';
    }
    code = JSON.stringify(code);
    code = code.substring(1, code.length-1);

    codeContent =  codeContent+'let code = \"'+paramCode+code+'"\nreturn code;';
    Blockly.Python[name] = new Function('block', codeContent);
}

var showBlocklyFromEditorForm = function() {
    if ( $('#block_maker_product').val() != '' ) {
        let xmlString = generateAsomeBlockXmlFromEditorForm();
        convertAsomeBlockXmlToBlockly(xmlString);
    } else {
        cleanBlockWorkspace();
    }
}

$(document).ready(function() {
    $(document).on("change", "#block-maker-form input, #block-maker-form select", function(){
        showBlocklyFromEditorForm();
    });
});

var exportAsomeBlockXml = function() {
    return util.formatXml(generateAsomeBlockXmlFromEditorForm())
}

function clickElem(elem) {
    // Thx user1601638 on Stack Overflow (6/6/2018 - https://stackoverflow.com/questions/13405129/javascript-create-and-save-file )
    var eventMouse = document.createEvent("MouseEvents")
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    elem.dispatchEvent(eventMouse)
}

function loadTextFile(func) {
    let fileInput = document.createElement("input");

    readFile = function(e) {
        let file = e.target.files[0];
        if (!file) {
            return;
        }
        let reader = new FileReader();
        reader.onload = function(e) {
            let contents = e.target.result;
            fileInput.func(contents)
            document.body.removeChild(fileInput)
        }
        reader.readAsText(file)
    }

    fileInput.type='file';
    fileInput.style.display='none';
    fileInput.onchange=readFile;
    fileInput.func=func;
    document.body.appendChild(fileInput);
    clickElem(fileInput);
}

var importAsomeBlockXmlFromFile = function() {
    if ( confirm("AsomeBlock already exists. Do you want to replace it?") ) {
        deleteAllAsomeBlockOnLocalStorage();
        resetMaker();
        deleteAllAsomeBlockList();
    }

    loadTextFile(saveAsomeBlockXmlToLocalStorage);
}

var exportAllAsomeBlockXmlToFile = function() {
    let content = loadBlocksLocalStorage();
    let xmlDoc = document.implementation.createDocument(null, 'asomeblocks', null);

    let parser = new DOMParser();
    let blockContentXml = null;

    for (let key in content) {
        blockContentXml = parser.parseFromString( content[key]['xml'], "text/xml");
        xmlDoc.documentElement.appendChild(blockContentXml.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block')[0]);
    }

    let xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
    saveTextToFile(formatXml(xmlString));
}

var cleanBlockWorkspace = function(){
    Blockly.mainWorkspace.clear();
}

var deleteAllAsomeBlockList = function() {
    $('#block_list').html('');
}

var deleteAllAsomeBlockOnLocalStorage = function() {
    localStorage.removeItem(localStorageName);
}

var importBlocks = function(xmlText) {
    cleanBlockWorkspace();
    let xml = Blockly.Xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, BlockEditorWorkspace);
}

var saveTextToFile = function (text) {
    let fileName = prompt("File name :", "asomeblock_custom.xml");

    if ( fileName == null || fileName == undefined ) {

    } else {
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
        hiddenElement.target = '_blank';
        hiddenElement.download = fileName;
        hiddenElement.style.display = 'none';
        hiddenElement.click();
    }
}

var saveArrayToLocalStorage = function( asomeBlockListArray ) {
    localStorage.setItem(localStorageName, JSON.stringify(asomeBlockListArray));
}

var loadBlocksLocalStorage = function() {
    let asomeBlockListArray = JSON.parse(localStorage.getItem(localStorageName));
    if ( asomeBlockListArray == null ) {
        asomeBlockListArray = {}
    }
    return asomeBlockListArray;
}

var showAsomeBlocksOnList = function() {
    deleteAllAsomeBlockList();
    asomeBlockList = loadBlocksLocalStorage();

    for (let key in asomeBlockList) {
        if ( currentProduct == asomeBlockList[key]['product']) {
            addAsomeBlockToBlockList(asomeBlockList[key]['id'],asomeBlockList[key]['name']);
        }
    }
}

var saveAsomeBlockXmlToLocalStorage = function(xmlContent) {
    let asomeBlockListArray  = loadBlocksLocalStorage();

    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString( xmlContent, "text/xml");
    let children = xmlDoc.getElementsByTagName('asomeblocks')[0].getElementsByTagName('block');

    for(let i =0; i< children.length; i++) {
        let child = children[i];

        if(child.nodeType == Node.ELEMENT_NODE)  {
            let blockId = child.getElementsByTagName("id")[0].textContent;
            let blockProduct = child.getElementsByTagName("product")[0].textContent;
            let blockName = child.getElementsByTagName("name")[0].textContent;
            let blockXml = (new XMLSerializer()).serializeToString(children[i]);

            asomeBlockListArray[blockId] = { 'id':blockId, 'product':blockProduct, 'name':blockName, 'xml': "<asomeblocks>"+blockXml+"</asomeblocks>" };
        }
    }
    saveArrayToLocalStorage(asomeBlockListArray);
    showAsomeBlocksOnList();
}

var loadAllBlocksFromLocalStorage = function() {
    showAsomeBlocksOnList();
}

var saveAsomeBlockEditorToLocalStorage = function() {
    let blockProduct = $('#block_maker_product').val();
    let blockId = $('#block_maker_block_id').val();
    let blockName = $('#block_maker_name').val();
    let blockXml = exportAsomeBlockXml();

    if ( blockProduct != '' ) {
        asomeBlockList[blockId] = { 'id':blockId, 'product': blockProduct, 'name':blockName, 'xml': blockXml };
    }
    saveArrayToLocalStorage( asomeBlockList );
    showAsomeBlocksOnList();
}

var deleteAsomeBlockOnLocalStorage = function() {
    let blockId = $('#block_maker_block_id').val();
    if ( blockId == null ) { return; }

    resetMaker();
    delete asomeBlockList[blockId];

    saveArrayToLocalStorage( asomeBlockList );
    showAsomeBlocksOnList();
}

var clearAsomeBlockOnLocalStorage = function() {
    if ( confirm("Are you sure you want to clear all AsomeBlocks?") ) {
        deleteAllAsomeBlockOnLocalStorage();
        resetMaker();
        deleteAllAsomeBlockList();
    } else {

    }
}

var addAsomeBlockToBlockList = function(blockId, blockName, blockCode) {
    if ( $('#'+blockId).length > 0 ) {
        // 블록 업데이트 로직이 들어가야 한다.
    } else {
        let blockDom = '<li id="' + blockId + '" onclick="selectAsomeBlock(this);">' + blockName + '</li>';
        $('#block_list').append(blockDom);
    }
}

var selectAsomeBlock = function(element) {
    resetMaker();
    let blockId = $(element).attr('id');
    //let blockProduct = asomeBlockList[blockId]
    convertAsomeBlockXmlToEditorForm(asomeBlockList[blockId]['xml']);
}

var editAsomeBlockXmlOnMaker = function(blockId) {

}

function formatXml(xml) {
    let formatted = '';
    let reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    let pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        let indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        let padding = '';
        for (let i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}


var changeMakerToolboxCategory = function(product) {
    if ( product == undefined || product == "" ){
        product = getProductFromUrl();
    }

    if ( currentProduct == product ) {

    } else {
        currentProduct = product;
        showAsomeBlocksOnList();

        $(".menu-tab-item").removeClass("menu-tab-selected");
        $('.js--tab-'+product).addClass("menu-tab-selected");
    }
}


var getProductFromUrl = function() {
    let url = window.location.href;
    let productHash = url.substring(url.indexOf("#")+1);

    if ( asomeProductList.includes(productHash) == false ) {
        productHash = defaultProduct;
    }
    return productHash;

}
