function responseJs(text){
	if (text.includes("run_cmd")){
		text = text.substring(text.indexOf("Page")+5,text.length)
		text = text.substring(0,text.indexOf('/'))
		open_url(text)
	}else{
		popup_js(text.trim())
	}
	
	
}

function popup_js(text){
	try{
		openPopup.eval(text);
	}catch(e){
//		console.log("error : "+e)
	}
}

function open_url(title){
	openPopup = window.open(String.format("https://asomecode-web.s3.ap-northeast-2.amazonaws.com/asomecode-web-version/common/simulation/{0}/index.html",title), 'AsomeCode Block Coding', 'width=400, height=300');
}

var openPopup
var valueFromeChild
function popup_reload(){
	openPopup.location.reload()
}

function getValueFromeChild(value){
	valueFromeChild = value
	openPopup.focus()
	console.log(valueFromeChild)
}

