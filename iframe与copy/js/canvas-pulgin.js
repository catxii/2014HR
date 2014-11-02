// $(document).ready(function() {
// disable scrolling on touch devices so we can actually draw
$(document).bind('touchmove', function(e) {
	if (e.target === document.documentElement) {
		return e.preventDefault();
	}
});

// the only LC-specific thing we have to do
function addCanvas() {
	$('.SECT', "#mymaincontent").literallycanvas();
	// $(".SECT").not( $(".SECT:first") ).hide();
	var pageChangeul = "<ul class='page-change mid'>" +
		"<li class='arrow-up' style='display:none'><span class='icon-step-backward'></span></li>" +
		"<li class='arrow-up-one button '><span class='icon-chevron-left'></span>后退</li>" +
		"<li class='arrow-down-one button '>前进<span class='icon-chevron-right'></span></li>" +
		"<li class='arrow-down'  style='display:none'><span class='icon-step-forward'></span> 后退</li>" +
		"</ul>"+
		"<ul class='page-change-left-right'>" +
		"<li class='arrow-up-one'><span class='icon-step-backward'></span></li>" +
		"<li class='arrow-down-one'><span class='icon-step-forward'></span></li>" +
		"</ul>"

	function appenPageul() {
		$(".SECT").append(pageChangeul);
	}
	appenPageul();
}

function canvasHide() {
	$("canvas,.page-change,.toolbar").hide();
}

function canvasShow() {
	$("canvas,.page-change,.toolbar").show();
}

$(".sidebar").on("click", "ul li a", function() {
	$(this).parent().addClass("current").siblings().removeClass("current");
	var sidebarLI = $(this).parent().index();//li的index
	$(".SECT").eq(sidebarLI).show().siblings().hide();
	liAddCurrent()
})


$("section").on("click", ".arrow-up", function() {
	var arrowSection = $(this).closest(".SECT");
	arrowSection.prev().fadeIn("slow").siblings().hide();
	liAddCurrent()
});

$("section").on("click", ".arrow-down", function() {
	var arrowSection = $(this).closest(".SECT");
	arrowSection.next().fadeIn("slow").siblings().hide();
	liAddCurrent()
});

function liAddCurrent() {
	var SECTIndex = $(".SECT:visible").index();

	//这里只有单击缩略图 MY
	if (ifFullscreen()) { //MY
		sectid = SECTIndex + 1; //MY
		hele = []; //MY
		prev = []; //MY
		for (var iobj = 0, iLen = animHide.length; iobj < iLen; iobj++) { //MY
			if ($("#sect" + sectid).find("#" + animHide[iobj]).size() > 0) { //MY
				$("#" + animHide[iobj], "#sect" + sectid).hide(); //MY
				hele.push(animHide[iobj]); //MY
			} //MY
		} //MY
		ifcurr = false; //MY
	} //MY

	$(".sidebar li").eq(SECTIndex).addClass("current").siblings().removeClass("current");
}

$("body").on("click",".tool-eye-pointSB",function(){
	$(".SECT canvas").hide();
	$(".tool-eye-pointSB").addClass("active").siblings().removeClass("active");
	$(".SECT canvas").css("cursor","pointer");
});

function canvasDo(name){
	$(".SECT canvas").show();
	$(name).addClass("active").siblings().removeClass("active");
	//$(".SECT canvas").css("cursor","Crosshair");
	$(".SECT canvas").css("cursor","url(highlighter.cur),default");//MY
}
$("body").on("click",".tool-pencil",function(){
	canvasDo(".tool-pencil");
});
// $("body").on("click",".tool-rectangle",function(){
// 	canvasDo(".tool-rectangle");
// });
// $("body").on("click",".tool-eraser",function(){
// 	canvasDo(".tool-eraser");
// });

