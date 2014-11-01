//document.write("<script type='text/javascript' src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>");
// if (typeof(netAddress) == 'undefined') {
// 	//netAddress="/linktrust/static/";
// 	netAddress = "";
// }
//document.write("<script src='/linktrust/static/libs/literallycanvas/lib/js/literallycanvas.fat.js'></script>");document.write('<script type="text/javascript" src="/linktrust/static/js/canvas-pulgin.js"></script>');
document.write("<script src='" + netAddress + "libs/literallycanvas/lib/js/literallycanvas.fat.js'></script>");document.write('<script type="text/javascript" src="' + netAddress + 'js/canvas-pulgin.js"></script>');
var sectid = 1;
var ifcurr = true;
var hele = [];
var prev = [];
window.onload = function() {
	//window.setTimeout("initThumbnail()",2000);
	
console.log("页面基本加载完成");
	// var parentIframe = parent.document.getElementsByTagName('iframe')[0];
	//console.info(parentIframe);
	if (!(parent === window)) {
		$("#fullscreen").parent().hide();
		$("span", "#mymaincontent").attr("contenteditable", "true");
		canvasHide();
		//console.info(parentIframe);
		return;
	} else {
		$("#fullscreen").parent().show();
		console.log("显示进入全屏按钮");
	}



	addEventListenerfullscreenchange();
	//addCanvas();
	canvasHide();
	// canvasShow();
	$("span", "#mymaincontent").attr("contentEditable", "true");
	//$(".sidebar ul li:first").addClass("current").siblings().removeClass("current");
	$(".sidebar ul li:first").find("a").click();
	// $(".button.full-button:last-child").text("全屏显示").click(function() {
	// 	quanpingxianshi();
	// });

	var viewFullScreen = document.getElementById("fullscreen");
	if (viewFullScreen) {
		viewFullScreen.addEventListener("click", function() {
			addCanvas();
			canvasShow();
			quanpingxianshi();
			$(".button.full-button:last-child").text("退出全屏").click(function() {
				quxiaoquanping();
			}); //隐藏右下角退出全屏按钮

			//$("section[id^='sect']").hide();
			$("section[id^='sect']").show();

			//$("#sect" + sectid).show(1000);
			window.setTimeout('$(".sidebar li").eq(' + (sectid - 1) + ').find("a").click();', 1000);

		}, false);
	}
	document.onkeydown = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && e.keyCode == 27) { //按 Esc 
			//要做的事情
		}
		if (e && e.keyCode == 37) { //左方向
			if (ifFullscreen()) {
				rowandpageshowprev();
			}
		}
		if (e && e.keyCode == 38) { //上方向
			if (ifFullscreen()) {
				rowandpageshowprev();
			}
		}
		if (e && e.keyCode == 13) { //enter 键
			if (ifFullscreen()) {
				rowandpageshownext();
			}
		}
		if (e && e.keyCode == 32) { //空格
			if (ifFullscreen()) {
				rowandpageshownext();
			}
		}
		if (e && e.keyCode == 39) { //右方向
			if (ifFullscreen()) {
				rowandpageshownext();
			}
		}
		if (e && e.keyCode == 40) { //下方向
			if (ifFullscreen()) {
				rowandpageshownext();
			}
		}
	};
	$("section").on("click", ".arrow-up-one", function() {
		rowandpageshowprev();
	});

	$("section").on("click", ".arrow-down-one", function() {
		rowandpageshownext();
	});


	initThumbnail();//初始化缩略图
};
//console.info("加载后 ҉ ");

var quanpingxianshi = function() {
	var docElm = document.documentElement;
	if (docElm.requestFullscreen) {
		docElm.requestFullscreen();
	} else if (docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	} else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	} else if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	}
	$(".fullscreen-button").hide();
	$(".button.full-button:last-child").unbind("click").text("退出全屏").click(function() {
		console.log("帮");
		quxiaoquanping();
	});
	//$("span", "#mymaincontent").removeAttr("contenteditable");
	canvasShow();
	console.time("计时器一");
	// for (var iobj in animHide) {
	for (var iobj = 0, iLen = animHide.length; iobj < iLen; iobj++) {
		if ($("#sect" + sectid).find("#" + animHide[iobj]).size() > 0) {
			$("#" + animHide[iobj]).hide();
			hele.push(animHide[iobj]);
		}
	}
	console.timeEnd("计时器一"); //70ms
	ifcurr = false;
};

var quxiaoquanping = function() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitCancelFullScreen) {
		document.webkitCancelFullScreen();
	}
	$(".fullscreen-button").show();
	$(".button.full-button:last-child").unbind("click").text("全屏显示").click(function() {
		quanpingxianshi();
	});
	canvasHide();
	$("span", "#mymaincontent").attr("contenteditable", "true");
};

function rowandpageshownext() {
	console.log(hele.length + "---" + ifcurr);
	if (hele.length == 0 && ifcurr) {
		console.info("检测幻灯片", sectid);
		console.time('检测幻灯片时间');
		for (var iobj = 0, iLen = animHide.length; iobj < iLen; iobj++) {
			if ($("#sect" + sectid).find("#" + animHide[iobj]).size() > 0) {
				$("#" + animHide[iobj], "#sect" + sectid).hide();
				hele.push(animHide[iobj]);
			}
		}
		console.timeEnd("检测幻灯片时间"); //5ms
		console.info("含有逐行元素：" + hele.length);
		ifcurr = false;
	}
	if (hele.length == 0) {
		if (sectid == 1) $("section[id^='sect']").hide();
		$("#sect" + (sectid - 1)).hide();
		$("#sect" + sectid).show();
		prev = [];
		ifcurr = true;
		$("#sect" + (sectid + 1)).size() > 0 ? sectid++ : sectid = 1;
		console.log("执行自加" + ifcurr);
	} else {
		console.time('显示逐行元素时间');
		console.log("剩余隐藏元素：" + hele.length);
		if ($("#sect" + sectid).is(":visible") && hele.length > 0) {
			if ($("#" + hele[0], "#sect" + sectid).is(":visible")) {
				hele.splice(0, 1);
				console.log("删除垃圾元素");
			}
			console.info("---:", "#" + hele[0], $("#" + hele[0], "#sect" + sectid).is(":visible"));
			var heleZhuhang = $("#" + hele[0], "#sect" + sectid);
			var leftbaifenbi = heleZhuhang.css("left");
			console.log("当前百分比：", leftbaifenbi);
			heleZhuhang.css("left", "100%");
			heleZhuhang.show();
			heleZhuhang.animate({
				left: leftbaifenbi
			});
			prev.unshift(hele[0]);
			console.log("添加元素到prev", hele[0]);
			hele.splice(0, 1);
			if (hele.length == 0) {
				sectid++;
				ifcurr = true;
			}
		} else {
			$("#sect" + (sectid - 1)).hide();
			$("#sect" + sectid).show();
			prev = [];
		}
		console.timeEnd("显示逐行元素时间");
	}
	$(".sidebar li").eq(sectid - 1).addClass("current").siblings().removeClass("current");
}

function rowandpageshowprev() {
	console.log("退一步", prev);

	if (prev.length == 0 && ifcurr) {
		console.log("退步检测幻灯片", sectid);
		for (var iobj = 0, iLen = animHide.length; iobj < iLen; iobj++) {
			if ($("#sect" + sectid).find("#" + animHide[iobj]).size() > 0) {
				//$("#" + animHide[iobj], "#sect" + sectid).hide();
				prev.unshift(animHide[iobj]);
			}
		}
		ifcurr = false;
	}
	if (prev.length == 0) {
		//if (sectid == 1) $("section[id^='sect']").hide();
		$("#sect" + sectid).hide();
		$("#sect" + (sectid - 1)).show();
		hele = [];
		ifcurr = true;
		$("#sect" + (sectid - 1)).size() > 0 ? sectid-- : sectid = 1;
	}
	if (prev.length) {
		console.log("剩余退步隐藏元素：" + prev.length, "#" + prev[0]);
		var prevZhuhang = $("#" + prev[0], "#sect" + sectid);
		var leftbaifenbi = prevZhuhang.css("left");
		prevZhuhang.animate({
			left: '100%'
		}, function() {
			prevZhuhang.hide();
			prevZhuhang.css("left", leftbaifenbi);
		});
		hele.unshift(prev[0]);
		prev.splice(0, 1);
	} else {
		console.log("退一页");
		if ($("#sect" + (sectid - 1)).size() > 0) {
			$("#sect" + sectid).hide();
			$("#sect" + (sectid - 1)).show();
		}
		$("#sect" + (sectid - 1)).size() > 0 ? sectid-- : sectid = 1;
		ifcurr = true;
	}
	$(".sidebar li").eq(sectid - 1).addClass("current").siblings().removeClass("current");
}

function addEventListenerfullscreenchange() {
	document.addEventListener("fullscreenchange", function() {
		if (!document.fullscreenElement) {
			quxiaoquanping();
		}
	}, false);
	document.addEventListener("msfullscreenchange", function() {
		if (!document.msFullscreenElement) {
			quxiaoquanping();
		}
	}, false);
	document.addEventListener("mozfullscreenchange", function() {
		if (!document.mozFullScreen) {
			quxiaoquanping();
		}
	}, false);
	document.addEventListener("webkitfullscreenchange", function() {
		if (!document.webkitIsFullScreen) {
			quxiaoquanping();
		}
	}, false);
}

function ifFullscreen() {
	var fullscreenState = false;
	if (document.fullscreenElement) {
		fullscreenState = true;
	}
	if (document.msFullscreenElement) {
		fullscreenState = true;
	}
	if (document.mozFullScreen) {
		fullscreenState = true;
	}
	if (document.webkitIsFullScreen) {
		fullscreenState = true;
	}
	return fullscreenState;
}

NodeList.prototype.indexOf = function(el) {
	for (var i = 0, n = this.length; i < n; i++) {
		if (this[i] === el) {
			return i;
		}
	}
	return -1;
}
HTMLCollection.prototype.indexOf = function(el) {
	for (var i = 0, n = this.length; i < n; i++) {
		if (this[i] === el) {
			return i;
		}
	}
	return -1;
}
var parentIframeName;

function initThumbnail() {
	//<iframe id="iframe2" width="100%" height="100%" frameborder="0" src="ppt.html?aa=0"></iframe>
	//console.log("iframe名字",parent.document.getElementsByTagName('iframe')[0].name);
	//parentIframeName = parent.document.getElementsByTagName('iframe');
	parentIframeName = parent.document.getElementsByTagName('iframe');
	//console.log(parentIframeName);
	//console.log(parentIframeName.indexOf('ppt'));
	if (parent === window || parentIframeName[0].name == 'ppt' || parentIframeName[0].name == 'fmt_form') {
		var i = 1;
		//console.time("yi");
		var url = location.href;
		if (url.indexOf("?") != -1) {
			url += "&aa=0";
		} else {
			url += "?aa=0";
		}
		var liSize = $("#mysidebar li").size();
		var timeId = window.setInterval(function() {
			// $("#mysidebar li").each(function() {
			// 	//$(this).css("background","#2ecc71!important");
			if ($("#mysidebar li").eq(i - 1).find("iframe").size() == 0) {
				$("<iframe id='iframe" + i + "' width='100%' height='100%' frameborder='0' src='" + url + "' onload=test(" + i + ")></iframe>").appendTo($("#mysidebar li").eq(i - 1));
			}
			// 	$(iframeWindow).on("load", function() {
			// 		//加载完成，需要执行的代码
			// 		//console.log("ff",data);
			// 	});
			//console.log("测试", i, liSize);

			if (i == liSize) {
				window.clearInterval(timeId);
				console.log("缩略图加载完成");
			}
			i++;
			// });
		}, 0);

		//console.timeEnd("yi");
	} else {

	}
}
var test = function(i) {
	var iframeDocument = $(document.getElementById("iframe" + i).contentDocument);
	//var iframeDocument = $(this).contentDocument;
	iframeDocument.find("#mymaincontent").css("width", "100%");
	iframeDocument.find("section[id^='sect']", "#mymaincontent").hide();

	iframeDocument.find("#mysidebar").remove();
	iframeDocument.find("section[id^='sect" + i + "']", "#mymaincontent").show();
	//iframeDocument.find("span").css("font-size", "1px");
	//iframeDocument.find("body").css("zoom", "1%");
	iframeDocument.find("span", "#mymaincontent").parent().css("-webkit-transform", "scale(0.2,0.2)");
	iframeDocument.find("span", "#mymaincontent").parent().css("-moz-transform", "scale(0.2,0.2)");
	iframeDocument.find("span", "#mymaincontent").parent().css("transform", "scale(0.2,0.2)");
};
// aa(11);

// function aa(ff) {
// 	console.log(ff);
// 	$(document).ready(function() {
// 		$("iframe").each(function() {
// 			
// 		});
// 	});


// }