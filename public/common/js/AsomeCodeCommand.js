function runAsomeCodeCommand(text) {
	
    var cmdValue = getValueFromCommandText("code",text);

    switch (cmdValue) {
		case "AsomeBlock":
			window.open("../../AsomeBlock/AsomeBlock.html?language=Korean");
			break;
        case "GoHome":
            go_url("../../AsomeCode-Student/Korean/index.html");
            break;
        case "GoHome_B":
        	go_url("../../AsomeBlock/Korean/free.html");
        	break;
        case "GoBack":
            history.back(-1);
        	break;
        case "GoLevel01":
            go_url("../../AsomeCode-Student/Korean/level_01.html");
            break;
        case "GoLevel02":
            go_url("../../AsomeCode-Student/Korean/level_02.html");
            break;
        case "GoLevel03":
            go_url("../../AsomeCode-Student/Korean/level_03.html");
            break;
        case "GoLevel04":
            go_url("../../AsomeCode-Student/Korean/level_04.html");
            break;
        case "InstallDriver":
        	installDriver();
        	break;
        case "AsomeCodeReboot":
            run_text('import machine; machine.reset()');
            stopCode();
        	break;
        case "AsomeCodeFormat":
            run_text('import os; import flashbdev; os.VfsFat.mkfs(flashbdev.bdev)\nimport machine; machine.reset()');
            stopCode();
        	break;
        case "AsomeCodeUpdate":
        	update();
        	break;
        case "Upload_file":
        	upload();
        	break;
        case "AsomeCodeConnect":
            console.log("AsomeCodeConnect");
            connect();
            break;
        case "Stop":
            stopCode();
            break;
        case "BlockCoding":
            window.open("../../AsomeBlock/BlockCoding.html?language=Korean");
            break;
        case "ShowEditor":
        	window.open("../../common/ShowEditor.html", 'AsomeCode Block Conding', 'width=1000, height=750');
        	break;
        case "Open_file":
			showopenfile();
        	break;
        case "Save_file":
			showsavefile();
        	break;
        default:

    }

}

var OSName = "Unknown";

/*function getValueFromeChild(value){
	valueFromeChild = value
	dicePopup.focus()
	console.log(valueFromeChild)
}*/


// cmd = "code"
// text = "Code=DiceShow"
function getValueFromCommandText(cmd, text) {

    var commands = text.split("/");
    var res = "";
    cmd = cmd.toLowerCase();

    for ( var i =0; i < commands.length; i++) {
        if ( commands[i] != "" ) {
            res = commands[i].split("=");
            if ( res.length > 0 ) {
                if ( res[0].toLowerCase() == cmd ) {
                    return res[1];
                }
            }
        }
    }
    return "";
}


function runAsomeCodeText(code,type) {
    //asomecode_connect();
    asomecode_exec(code,type);
}


function showCode() {
    // Generate JavaScript code and display it.
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Python.workspaceToCode(BlockEditorWorkspace);
    $('#blockCodeViewer').text(code);
}

function connect() {
    asomecode_chrome();

}

function runCode() {
    // Generate JavaScript code and display it.
    Blockly.Python.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Python.workspaceToCode(BlockEditorWorkspace);

    //asomecode_connect();
    asomecode_exec(code);
}

function stopCode() {
    asomecode_stop();
}

//
var extensionId = "ailmkijlaoejbdbndhbdhbeioehiadol";
// for Test
//extensionId = "lkjpcfmhdhnnemlmghemieodciljkhfg";

function asomecode_chrome() {
// Make a simple request:
    chrome.runtime.sendMessage(extensionId, {message : "open"},
        function(response) {
            console.log("Response.");
        });
}

function asomecode_connect() {
    chrome.runtime.sendMessage(extensionId, {message : "connect"},
        function(response) {
            console.log("Response.");
        });
}

function asomecode_exec(code,type) { 
    if (code !== undefined){
	    console.log("RUN CODE :");
	    console.log(code);
		code = deleteKorean(code);
	}
    chrome.runtime.sendMessage(extensionId, {message : "exec", source : code, type : type},
        function(response) {
            if (response.loop == "Y"){
				asomecode_exec();
			};
			var resJs = response.js;
			for(var i in response.js){
				responseJs(response.js[i]);
			}
			if(response.printMsg != undefined){		
				console.log(response.printMsg);
			}
        }
    );
}


// 한글삭제 정규식
function deleteKorean(text){
	var result = text.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,"");
	return result;
}

function asomecode_stop() {
	loop = "N";
    chrome.runtime.sendMessage(extensionId, {message : "stop_exec"},function(response) { 
		if(response.printMsg != "\r\n>>> " && response.printMsg != "\r"){
			asomecode_stop();
			console.log("STOP CODE ");
		}
	});
}

var showsavefile = function (text) {
    try {
        let fileName = prompt("File name :", "파일명을 입력하시오.");

        if (fileName == null || fileName == undefined) {

        } else {

			var editor = ace.edit("editor");
			
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(editor.getValue()));
			//saveAs(editor);
			element.setAttribute('download', fileName+ ".py");
		
			element.style.display = 'none';
			document.body.appendChild(element);
			
			element.click();
			document.body.removeChild(element);
        }
    } catch ( e) {
		console.log("error : "+e);
    }
}

function showopenfile() {
	  try {
    let fileInput = document.createElement("input");
    readFile = function(e) {
        let file = e.target.files[0]; 
        alert(file.name +'을 선택했습니다.');
        
        if (!file) {	//결과값이 0이면 리턴
	        console.log("리턴됨");
	        return;
	        	
		} else {
 	    	console.log("리턴안됨");
	        
        let reader = new FileReader();
		reader.readAsText(file);//내용을 텍스트 형식으로 읽기
       	
        	reader.onload = function(e) {
				let contents = e.target.result;
				sessionStorage.setItem("showEditor", contents);
				window.location.reload();
//				alert(contents);
				document.body.removeChild(fileInput)
	       	}
//				reader.readAsText(file, "euc-kr");
	    }
	}
	    fileInput.type='file';
	    fileInput.style.display='none';
	    fileInput.onchange=readFile;
	    document.body.appendChild(fileInput);
	    clickElem(fileInput);
	
		}	catch ( e) {
			console.log("error : "+e);
	}
}

function upload(){
	upload_code()
}

function upload_code(){
	var editor = ace.edit("editor");
	var code = editor.getValue()
	var replace = code.replaceAll("'", "\\'");
	var pyCode = "f.write("
	let file = prompt("File name :", "파일명을 입력하시오.");
	var name = file.split('.');
	var fileName = name[0];
		var arr = replace.split('\n');
	for(i=0; i<arr.length; i++){
		if(i==arr.length-1){
			pyCode = pyCode +`'`+arr[i]+`')\nf.close()\n`;
		}else{		
			pyCode = pyCode +`'`+arr[i]+`\\n'\n`;
		}
	}
	run_text(`f = open('${fileName}.py','w')
${pyCode}
import machine; machine.reset()
`);
}

function installDriver() {
	run_driver();
}
	
function get_os() {
	if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) {
		OSName="win10";
	}
	else {
		OSName="win7";
	}
	return OSName;
}

function run_driver() {
	var agent = navigator.userAgent.toLowerCase();
	get_os();
	if (OSName == 'win10') {
		window.open('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/Driver/win10_Driver.zip');
	} else {
		window.open('https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/Driver/Driver.zip');
	}
}
