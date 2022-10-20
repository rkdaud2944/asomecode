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

$(document).ready(function() {
	$(".image-btn").each(function() {
		$(this).attr("src", $(this).attr("filename"));
	});
	$(".image-btn").hover(function() {
		$(this).attr("src", $(this).attr("filename") + ".over.png");
	}, function() {
		$(this).attr("src", $(this).attr("filename"));
	});
	$(".image-btn").mousedown(function() {
		$(this).attr("src", $(this).attr("filename") + ".click.png");
		var audio = new Audio('../audio/click.ogg');
		audio.play();
	});
	$(".image-btn").mouseup(function() {
		$(this).attr("src", $(this).attr("filename") + ".over.png");
	});

	$("#video_dialog").on("hidden.bs.modal", function () {
    	document.getElementById("video_player").pause();
	});

	$('.part_component').each(function(i, obj) {
		var html = `
			<div class="parts_compoent_box">
				<div class="parts_compoent" src="../../common/parts/parts.html?img={0}" frameborder="0">
					<div style="width: 100%; height: 100%;">
						<div class="parts_image_bar">
							<img class="parts_image" src="../../common/parts/{0}">
							<div class="parts_qty"><p style="display: table-cell; vertical-align: middle;">x {2}</p></div>
						</div>
						<div class="parts_comment_bar">
							{1}
						</div>
					</div>
				</div>
			</div>`;	
		html = String.format(html, obj.getAttribute("image"), obj.getAttribute("title"), obj.getAttribute("qty"));
		$(obj).html(html);
	});	

	var url = unescape(location.href);
	var pm  = url.split('?');
	if (pm.length > 1) {
		var params = pm[1].split('&');
		for( var i=0; i<params.length; i++ ) {
			var param = params[i].split('=');
			localStorage.setItem(param[0], param[1]);
		}
	}
	$("#chapter").html( String.format($("#chapter").text(), localStorage.getItem("chapter")) );

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
		hljs.lineNumbersBlock(block)
	});

	$('.editor').each(function() {
		var editor = ace.edit(this);
		editor.setTheme("ace/theme/monokai");
		editor.setFontSize(14);
		editor.session.setMode("ace/mode/python");
		editor.setOptions({
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true
		});
	});

    $(".m").click(function() {
        if ($(".mobile_top").css("display") == "none") {
            $(".mobile_top").show();
            $("#mobile").css({ "height": "90px" });
            $("#p3_container").css("margin-top", "170px");
            $("#p3_container .left").hide();
            $(".mobile_nav3").css({ "height": "10px", "top": "163px" });
            $(".mobile_nav3 a").hide();
            $("#p3_container .right").css("padding-top", "30px");
        } else {
            $(".mobile_top").hide();
            $("#mobile").css({ "height": "90px" });
            $("#p3_container").css("margin-top", "80px");
            $(".mobile_nav3").css({ "top": "90px" });
        }
    });

    $(".mobile_nav3").click(function() {
        if ($("#p3_container .left").css("display") == "none") {
            $(".mobile_top").hide();
            $("#mobile").css({ "height": "90px", "z-index": "90" });
            $("#p3_container").css("margin-top", "0vw");
            $(".mobile_nav3").css("top", "85px");
            $(".mobile_nav3 a").show();
            $("#p3_container .left").css("position", "fixed");
            $("#p3_container .left").show();
            $("#p3_container .right").css("padding-top", "400px");
        } else {
            $("#p3_container .left").hide();
            $(".mobile_nav3").css("top", "85px");
            $("#p3_container .right").css("padding-top", "120px");
            $(".mobile_nav3 a").hide();
        }
    });

    var gcodes = localStorage.getItem('gcodes');
    if (gcodes) {
    	gcodes = gcodes.split(',');
	    for (var i=0; i<gcodes.length; i++) {
	        $("."+gcodes[i]).css("display", "block");
	    }
	}

    if ((document.getElementById("pn1")) && (!is_mobile())) {
		var html_gotop = `
		    <div style="position: fixed; bottom: 5px; right: 5px;">
		        <a href="javascript:fnMove('wrap')"><img src="../../common/images/top.png"></a>
		    </div>
	    `;
	    gotop = document.createElement("gotop");
	    document.body.appendChild(gotop);
	    $(gotop).html(html_gotop);
	}	
});

function resizeLeftMenuSize() {
	var header = $('#p3_header');
	if (header.length) {
		var window_height = $(window).height();
		var left_height_css = window_height - $('#p3_header').offset().top;
		$("#p3_container .left").css( {"height":+left_height_css+"px"});
	}
}

$(window).scroll(function() {
	var $el = $('#p3_container .left');
	if($(this).scrollTop() >= 60) $el.addClass('left_menu_fixed');
	else $el.removeClass('left_menu_fixed');
	resizeLeftMenuSize();
});

$(window).resize(function (){
	resizeLeftMenuSize();
});

$(document).ready(function() {
	resizeLeftMenuSize();
});

var presentSession = function(present){
	sessionStorage.setItem("stage",present);
	console.log("sessiong html stage : "+sessionStorage.getItem("stage"));
}
 
$(document).ready(function() {
	$(".updateBtn").click(function() {
		$(".modalCtn").fadeIn(200);
 	});
 	
 	$(".modal_content").click(function(){
		$(".modalCtn").fadeOut(200);
	});
 	
 	$(".update_stop").click(function(){
		stopUpdate()
		$(".modalCtn").fadeOut(200);
	});
});
 

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

$(document).ready(function() {
	if (window.sessionStorage.getItem("customPage") == 'True'){
		$(function(){
			$("#p1_container .p1_02  .p1_02_div6").css({
				"display": "inline-block"
			});
		})
	}
	if (window.sessionStorage.getItem("customTitle") != null || undefined){
		var element = document.getElementById("customLevelTitle");
		title = window.sessionStorage.getItem("customTitle")
		element.innerText = title
	}
	if (window.sessionStorage.getItem("asomeProduct") != null || undefined){
		var element = document.getElementById("customLevelStitle");
		stitle = window.sessionStorage.getItem("asomeProduct")
		element.innerText =stitle;
	}
	if (window.sessionStorage.getItem("asomeProduct") != null || undefined){
		var element = document.getElementById("customLevelText");
		text = window.sessionStorage.getItem("asomeProduct")
		if (text == 'Asome bot'){
			element.innerText =`스마트폰으로 조종하는
                            RC자동차와 2족로봇을
                            직접 개발하고 개발된 놀잇감을
                            프로그램을 통해 개조하도록
                            개발된 프로그램`
		} else if (text == 'Asome kit'){
			element.innerText =`최소한의 부품과 장치를
                            이용하여 교구의 비용은 줄이고
                            피지컬 컴퓨팅 전반의 코딩을
                            체험할 수 있도록
                            준비된 교육 프로그램`
		}
	}
})

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
