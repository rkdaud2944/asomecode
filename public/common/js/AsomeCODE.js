var keywords = [
	"asomebot",
		"ready", "align", "angle", "angles", "turn_off", "home", "leg_up", "forward",
		"backward", "turn_left", "turn_right", "foot_wave", "mouse", "flap", "warigari",
		"tock", "tick_tock", "wiggle", "ballet", "left_swing", "right_swing", "yaho", "swing", "moonwalk",

	"asomecar",
		"ready", "stop", "to_left", "to_right",

	"boot",
		"random", "delay", "OutputPin", "InputPin", "InputPullUp", "AnalogPin", "ServoPin", "turnoff_pins",
	
	"button",
		"create", "is_clicked", "do_click", "setOnClick",
	
	"cannon",
		"show", "set_angle", "set_power", "power_x", "power_y", "bullet_moveto", "target_moveto", "fire", "target_explode",

	"car_race",
		"show_time", "start", "move", "is_finished",
	
	"clock",
		"set", "datetime", "year", "month", "day", "week", "hour", "minute", "second", "millis", "text",

	"dth_screen",
		"display",

	"dht11",
		"measure", "temperature", "humidity",
	
	"dice",
		"roll",

	"disk",
		"list", "view", "run",
	
	"door",
		"close",

	"flag_game",
		'join', "is_ready", "count_down", "win",

	"hcsr04",
		"get_distance",
	
	"internet",
		"connect", "ifconfig", "open_ap", "get_http", "get_time", "send_msg",
	
	"interval",
    
	"line_sensor",
		"ready", "read",

	"lunar_lander",
		"ship_move", "ship_speed_up", "ship_speed_down", "fule_is_empty", "engine_on", "engine_off", "is_landed", "ship_explode",
	
	"maze",
		"move_xy", "can_move",

	"maze_maker",
		"set_cell_type", "get_left", "get_right", "get_up", "get_down", "find_next_move",

	"music",
		"get_tone", "tone", "mute", "note",

	"rotary",
		"direction", "has_changed",

	"scheduler",
		"check", "wait",

	"sliding_puzzle",
		"blank_left", "blank_right", "blank_up", "blank_down",

	"sound_effect",
		"level_up", "so_sad", "ariel", "laugh", "sad", "victory", "get_ready",

	"spacecraft",
		"move_left", "move_right", "set_speed",

	"stove",
		"on", "off",

	"timer",
		"number", "update", "set_mode", "mode", "set_value", "value", "duration",

	"tm1637",
		"set_brightness", "write_str", "time",

	"udp_socket",
		"read_text", "send_text",

	"vibration_sensor",
		"is_active",
];

function hasNewVersion() {
	try {
		return App.version() != "1.9";
	} catch (exception) {
		return false;
	}
}

String.format = function() {
	var s = arguments[0];
	for (var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}
	return s;
}

function logout() {
	localStorage.setItem('logined', 0);
	App.logout();
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
	App.go_url(url);
}

function go_level(gcode) {
	App.run_cmd('Code=GoLevel/Level='+gcode+'/');
}

function run_cmd(text) {
	App.run_cmd(text);
}

function escape_str(text) {
	text = text.replace("    ", "\t");

	var result = "";
	for (var i=0; i<text.length; i++) {
		if (text[i] == "\n") result = result + "\\n";
		else if (text[i] == "\t") result = result + "\\t";
		else if (text[i] == "%") result = result + "{mod}";
		else result = result + text[i];
	}

	result = result.replace(/@@NOW/g, now());

	return result;
}

function run_text(code) {
	App.run_text( escape_str(code) );
}

function run_code(code) {
	App.run_code( escape_str(code) );
}

function system_view(obj) {
	var editor = ace.edit(obj);
	App.system_view( escape_str(editor.getValue()) );
}

function run_editor(obj) {
	var editor = ace.edit(obj);
	App.run_code( escape_str(editor.getValue()) );
}

function video(level, filename) {
	if (is_mobile()) {
		App.run_cmd( String.format("Code=Video/level={0}/filename={1}", level, filename) );
	} else {
		var url = String.format("../../common//video/{0}/{1}/{2}", localStorage.getItem('language'), level, filename);
		console.log(url);

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
	if (localStorage.getItem("version") == "free") {
		$("#bt_logout").css("display", "none");
	}

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
		var audio = new Audio('./audio/click.ogg');
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

	if (localStorage.getItem('logined') != 1) {
		$(".video_button").css("display", "none");
	}

	$('.video_button').each(function(i, obj) {
		var html = `
			<img src="../../common/images/bt_paly_video.png" onclick="video('{0}', '{1}')">
		`;
		html = String.format(html, obj.getAttribute("level"), obj.getAttribute("filename"));
		$(obj).html(html);
	});

	localStorage.setItem("chapter", "0");

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

        editor.completers.push({
            getCompletions: function (editor, session, pos, prefix, callback) {
                var completions = [];
                keywords.forEach(function (w) {
                    completions.push({
                        value: w,
                        meta: "AsomeIT",
                        score: 1000,
                    });
                });
                callback(null, completions);
            }
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