String.format = function() {
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

function run_cmd(text) {
	runAsomeCodeCommand(text);
}

function run_code(code) {
	runAsomeCodeText( code+"\n" );
//	runAsomeCodeText( escape_str(code)+"\n" );
//	runAsomeCodeText( decodeURIComponent(code)+"\n" );
}

function fnMove(seq) {
    var offset = $("#" + seq).offset();
    $('html, body').animate({ scrollTop: offset.top - 150 }, 400);
    $(".mobile_nav3").trigger("click");
}

function resizeLeftMenuSize() {
	var header = $('#p3_header');
	if (header.length) {
		var window_height = $(window).height();
		var left_height_css = window_height - $('#p3_header').offset().top;
		$("#p3_container .left").css( {"height":+left_height_css+"px"});
	}
}

var presentSession = function(present){
	sessionStorage.setItem("stage",present);
	console.log("sessiong html stage : "+sessionStorage.getItem("stage"));
}