// $(document).ready(function() {
// disable scrolling on touch devices so we can actually draw
$(document).bind('touchmove', function(e) {
	if (e.target === document.documentElement) {
		return e.preventDefault();
	}
});

// the only LC-specific thing we have to do
function addCanvas() {

	var pageChangeul = 
		"<ul class='page-change-left-right'>" +
			"<li class='arrow-down-one'><span class='icon-step-forward'></span></li>" +
		"</ul>" +
		"<ul class='position-right-bottom'>" +
			
			"<li class='pencil-button button '>显示画笔</li>" +
			"<li class='arrow-up-one button '><span class='icon-chevron-left'></span>后退</li>" +
			"<li class='arrow-down-one button '>前进<span class='icon-chevron-right'></span></li>" +
			"<li class='out-fullscreen-button button-red'><span class='icon-resize-small'></span> 退出全屏</li>" +
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


$("body").on("click",".pencil-button",function(){
	var ThisCanvas = $(this).closest(".SECT").find(".literally");
	function ThisTextClose(){
		$(this).text("关闭画笔");
	}
	function ThisTextOpen(){
		$(this).text("显示画笔");
	}
	if( ThisCanvas.length > 0 ){
		if ( ThisCanvas.is(":visible") ) {
			ThisCanvas.hide();
			$(this).text("显示画笔");
		}else{
			ThisCanvas.show();
			$(this).text("关闭画笔");
		}
	}else {
		$(this).closest( $(".SECT") ).append("<div class='literally'></div>");
		$(this).closest( $(".SECT") ).find( $('.literally') ).literallycanvas({
		  imageURLPrefix: 'img',
		  onInit: function(lc) {
		    console.log('initialized with', lc)
		  }
		});
		$(this).text("关闭画笔");
	}
});

$("body").on("click",".out-fullscreen-button",function(){
	quxiaoquanping();
	$(".literally").remove();
	$(".position-right-bottom").hide();
});

function pptSize(){
	var sectHeight = 566;
	$(".mainbox .s1d").css({
    "width":sectHeight * 1.3339,
    "height":sectHeight
	})
	var pptSmallsizeHeight = $(".mainbox .s1d").height();
	var sectHeightHeight = $("html").height();
	var pptSmallsizeWidth = $(".mainbox .s1d").width();
	var sectHeightWidth = $(".SECT").width();
	var resultHeight = sectHeightHeight / pptSmallsizeHeight;
	// var resultWidth = sectHeightWidth * resultHeight;
	$(".mainbox .s1d").css({
    	"transform":"scale("+resultHeight+","+resultHeight+")"
	})
}
pptSize();
$(window).resize(function() {
  pptSize();
});

