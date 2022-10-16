String.format = function() {
	var s = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}
	return s;
}

function make_list(obj, html, data) {
	var list = "";
	$.each(data, function(index, row) {
		var line = html;
		for (var i=0; i<Object.keys(row).length; i++) {
			line = line.replace("{" + i + "}", Object.values(row)[i]);
		}
		list = list + line;
	});
	$(obj).html(list);
}

function logout() {
	localStorage.setItem('logined', 0);
	go_url('http://www.genstudy.net/main/ex_login.asp?accessmode='+localStorage.getItem('accessmode'));
}

function now() {
	var d = new Date();
	var str = "({0}, {1}, {2}, 0, {3}, {4}, {5}, 0)";
	return String.format(str, d.getFullYear(), (d.getMonth() + 1), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
}

function is_mobile() {
	var filter = "win16|win32|win64|mac|macintel"; 
	if (navigator.platform) { 
		return filter.indexOf(navigator.platform.toLowerCase()) < 0;
	}
	return true;
}

function go_url(url) {
	window.location.href = url;
}

function go_level(gcode) {
	url = "./list.html?gcode={0}";
	go_url( String.format(url, gcode) );
}

function run_cmd(text) {
	runAsomeCodeCommand(text);
}

function escape_str(text) {
	result = "";
	for (var i=0; i<text.length; i++) {
		if (text[i] == "\n") result = result + "\\n";
		else if (text[i] == "\t") result = result + "\\t";
		else if (text[i] == "%") result = result + "{mod}";
		else result = result + text[i];
	}

	result = result.replace(/@@NOW/g, now());

	return result;
}

function run_text(code,type) {
	runAsomeCodeText( code+"\n",type );
//	runAsomeCodeText( escape_str(code)+"\n" );
}

function run_update(code) {
	asomecode_update( code);
}

function run_code(code) {
	runAsomeCodeText( code+"\n" );
//	runAsomeCodeText( escape_str(code)+"\n" );
//	runAsomeCodeText( decodeURIComponent(code)+"\n" );
}

function system_view(obj) {
	var editor = ace.edit(obj);
	var code = editor.getValue()
	sessionStorage.setItem("showEditor", code);
}

function run_editor(obj,type) {
	var editor = ace.edit(obj);
	console.log(editor.getValue());
	run_text( editor.getValue(),type );
}

function video(level, filename) {
	if (is_mobile()) {
		App.run_cmd( String.format("Code=Video/level={0}/filename={1}", level, filename) );
	} else {
		var url = String.format("http://d2aozwz1hb9h7m.cloudfront.net/English/video/{0}/{1}", level, filename);
		var player = document.getElementById("video_player");

		document.getElementById("video_src").src = url + ".webm";

		try {
			var textTracks = player.textTracks;
	    	var textTrack = textTracks[0];
	    	var cues = textTrack.cues;
	    	for (var i=cues.length-1; i>=0; i--) textTrack.removeCue(cues[i]);
		} catch (exception) {
			// TODO: alert(exception);
		}

		document.getElementById("video_subtitle").src = url + ".vtt";

		player.load();
		player.play();
		
		$('#video_dialog').modal('show');
	}
}

function play(filename) {
    new Audio("../../audio/" + filename).play();
}

function fnMove(seq) {
    var offset = $("#" + seq).offset();
    $('html, body').animate({ scrollTop: offset.top - 150 }, 400);
    $(".mobile_nav3").trigger("click");
}

var presentSession = function(present){
	sessionStorage.setItem("stage",present);
	console.log("sessiong html stage : "+sessionStorage.getItem("stage"));
}
 
function customPage(customTrue) {
	window.sessionStorage.setItem("customPage",customTrue)
}

function customLevel(customName) {
	window.sessionStorage.setItem("customName",customName)
}

function goCustomLevel() {
	levelName = window.sessionStorage.getItem("customName")
	go_url('./level_'+levelName+'.html')
}

function customTitle(title) {
	window.sessionStorage.setItem("customTitle",title)
}

function asomeProduct(Product) {
	window.sessionStorage.setItem("asomeProduct",Product)
}

function gasuwonBot() {
	customPage('True')
	customLevel('gasuwaon_bot')
	customTitle('가수원초')
	asomeProduct('Asome bot')
	go_url('./index.html')
}

function gasuwonKit() {
	customPage('True')
	customLevel('gasuwaon_kit')
	customTitle('가수원초')
	asomeProduct('Asome kit')
	go_url('./index.html')
}

function gajungBot() {
	customPage('True')
	customLevel('gajung_bot')
	customTitle('가정초')
	asomeProduct('Asome bot')
	go_url('./index.html')
}

function gajungKit() {
	customPage('True')
	customLevel('gajung_kit')
	customTitle('가정초')
	asomeProduct('Asome kit')
	go_url('./index.html')
}

function seongnamBot() {
	customPage('True')
	customLevel('sungnam_bot')
	customTitle('성남초')
	asomeProduct('Asome bot')
	go_url('./index.html')
}

function seongamKit() {
	customPage('True')
	customLevel('sungnam_kit')
	customTitle('성남초')
	asomeProduct('Asome kit')
	go_url('./index.html')
}

function jejuBot() {
	customPage('True')
	customLevel('shinjeju_bot')
	customTitle('신제주초')
	asomeProduct('Asome bot')
	go_url('./index.html')
}

function jejuKit() {
	customPage('True')
	customLevel('shinjeju_kit')
	customTitle('신제주초')
	asomeProduct('Asome kit')
	go_url('./index.html')
}

function songdoBot() {
	customPage('True')
	customLevel('songdo_bot')
	customTitle('송도초')
	asomeProduct('Asome bot')
	go_url('./index.html')
}

function songdoKit() {
	customPage('True')
	customLevel('songdo_kit')
	customTitle('송도초')
	asomeProduct('Asome kit')
	go_url('./index.html')
}

document.addEventListener('scroll', function() {
	//
});

document.addEventListener('scroll', function() {
	//
});

document.addEventListener("DOMContentLoaded", function(event) {
	//
});