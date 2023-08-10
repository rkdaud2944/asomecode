let page_size = 20;

function random_str(count)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i <count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

function setHtmlByValue(name, values) {
	$(name).each(function(i, obj) {
		$(obj).html(values[obj.getAttribute("value")]);
	});
}

function decode_str(str) {
	if (str == null) return "";

	try {
		str = decodeURI(str);
	} catch (exception) {
	}

	str = unescape(str);	
	str = str.replaceAll("+", "&nbsp;");
	str = str.replaceAll("<", "&lt;");
	str = str.replaceAll("\n", "<br>");
	str = str.replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
	return str;
}

function decode_str2(str) {
	if (str == null) return "";

	try {
		str = decodeURI(str);
	} catch (exception) {
	}

	str = unescape(str);	
	str = str.replaceAll("+", " ");
	str = str.replaceAll("&lt;", "<");
	return str;
}

function decode_str3(str) {
	if (str == null) return "";

	try {
		str = decodeURI(str);
	} catch (exception) {
	}

	str = unescape(str);	
	str = str.replaceAll("+", " ");
	str = str.replaceAll("&lt;", "<");
	str = str.replaceAll("\\n", "\n");
	str = str.replaceAll("\\t", "\t");

	return str;
}

function get_param(name) {
	var url = unescape(location.href);
	var pm  = url.split('?');
	if (pm.length > 1) {
		var params = pm[1].split('&');
		for( var i=0; i<params.length; i++ ) {
			var param = params[i].split('=');
			if (param[0] ==  name) return param[1];
		}
	}

	return "";
}

function make_list(obj, html, data) {
	var list = "";
	$.each(data, function(index, row) {
		var line = html;
		var keys = Object.keys(row);
		var values = Object.values(row);
		for (var i=0; i<keys.length; i++) {
			line = line.replaceAll("{" + keys[i] + "}", decode_str(values[i]));
			line = line.replaceAll("{" + keys[i] + ", 2}", decode_str2(values[i]));
			line = line.replaceAll("{" + keys[i] + ", 3}", decode_str3(values[i]));
		}
		line = line.replaceAll("@No", index + 1);
		list = list + line;
	});
	$(obj).html(list);
}

function make_detail(obj, html, row) {
	var line = html;
	var keys = Object.keys(row);
	var values = Object.values(row);
	for (var i=0; i<keys.length; i++) {
		line = line.replaceAll("{" + keys[i] + "}", decode_str(values[i]));
		line = line.replaceAll("{" + keys[i] + ", 2}", decode_str2(values[i]));
		line = line.replaceAll("{" + keys[i] + ", 3}", decode_str3(values[i]));
	}
	$(obj).html(line);
}

function Pages(url, page_size, row_count, current) {
	this.url = url;
	this.page_size = page_size;
	this.row_count = row_count;
	this.current = current;

	this.page_count = parseInt((this.row_count - 1) / this.page_size) + 1;
	if (this.current > this.page_count) this.current = this.page_count;
	if (this.current < 1) this.current = 1;
}

Pages.prototype.getHtml = function() {
	var html_prev = '<li><a href="{First}">&lt;&lt;</a></li><li><a href="{Prev}">&lt;</a></li>';
	html_prev = html_prev.replaceAll("{First}", this.url);
	html_prev = html_prev.replaceAll("{page}", 1);

	var prev = this.current - 1;
	if (prev < 1) prev = 1;
	html_prev = html_prev.replaceAll("{Prev}", this.url);
	html_prev = html_prev.replaceAll("{page}", prev);

	var html_next = '<li><a href="{Next}">&gt;</a></li><li><a href="{Last}">&gt;&gt;</a></li>';
	html_next = html_next.replaceAll("{Last}", this.url);
	html_next = html_next.replaceAll("{page}", this.page_count);

	var next = this.current + 1;
	if (next > this.page_count) next = this.page_count;
	html_next = html_next.replaceAll("{Next}", this.url);
	html_next = html_next.replaceAll("{page}", next);

	var html_page = '<li><a href="{url}">{No}</a></li>';
	var html_active = '<li class="active"><a href="javascript:void(0);">{No}</a></li>';

	var result = '<ul class="pagination">';

	if ((this.current > 1) && (this.page_count > 10)) result = result + html_prev;

	var pages = this.page_count;
	if (pages > 10) pages = 10;

	var offset = 0;
	if (this.page_count > 10) {
		offset = parseInt((this.current - 1) / 10) * 10;	
		if (offset > (this.page_count - 10)) offset = this.page_count - 10;
	}

	for (var i=1; i<=pages; i++) {
		var index = offset + i;
		var line = "";
		if (index == this.current) {
			line = html_active.replaceAll("{No}", index);
		} else {
			line = html_page.replaceAll("{No}", index);
		}
		line = line.replaceAll("{url}", this.url);
		line = line.replaceAll("{page}", index);
		result = result + line;
	}

	if ((this.current < this.page_count) && (this.page_count > 10)) result = result + html_next;

	result = result + '</ul>';

	return result;
}