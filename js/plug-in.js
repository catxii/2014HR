$(function(){
	$(".collapse-lx .title-button").click(function(){
		$(this).siblings(".sub-list").toggle();
		if ( $(this).siblings(".sub-list").is(":visible") ) {
			$(this).children(".glyphicon").addClass("glyphicon-chevron-down");
		}else{
			$(this).children(".glyphicon").removeClass("glyphicon-chevron-down");
		}
	});


	// select2定义列表
 	$(".select2-box").select2(); 
 	$(".select2-box.dele").select2({
		allowClear: true
	});
 	$(".select2-box-single").select2({
 		maximumSelectionSize: 1
 	});
 	$(".select2-box-single-bank").select2({
 		maximumSelectionSize: 1
 	});
 	$(".select2-box-single-bank").on("select2-close",function(e){
 		var patchBankName = $(".select2-search-choice > div").text();
 		var selectBankName = $(".bank-name:contains('"+ patchBankName+"')").closest(".list-group");
 		$(".list-group.list-group-collapse-button").not( selectBankName ).hide();
 	});
 	$(".select2-box-single-bank").on("select2-removing",function(e){
 		$(".list-group.list-group-collapse-button").show();
 	});


 	// tips设置
 	$('a,.btn,.icon-eye-close,.glyphicon-trash').tooltip();
 	$(".add-person-button,.show-tips").tooltip();
 	$('.btn-popover,a.a-popover').popover();



 	// tree
	$(".all-tree-ul-none.showit").find(".icon-circle-plus").addClass("icon-circle-minus");
	$(".all-tree-ul-none.showit .glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");

 	function treeHide(){
 		$(".tree-sub").show();
 		$(".all-tree-ul-none").find(".icon-circle-plus").addClass("icon-circle-minus");
 		$(".glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");
 	}
 	function treeShow(){
 		$(".all-tree-ul-none").find(".icon-circle-plus").removeClass("icon-circle-minus");
		$(".tree-sub").hide();
		$(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
 	}
 	$(".open-all-tree").click(function(){
 		if( $(this).text() == "全部展开" ){
 			$(this).text("全部折叠");
 			treeHide();
 		}else {
 			$(this).text("全部展开");
 			$(".all-tree-ul-none").removeClass("showit")
 			treeShow();
 		}
 	});
 	$(".tree-title-button").click(function(){
 		if ( $(this).children( $(".tree-sub") ).is(":visible") ) {
 			$(".open-all-tree").text("全部折叠").addClass("active");
 		}else{
 			$(".open-all-tree").text("全部展开");
 		};
 	});
 	$(document).on('click','.sub-click-area',function(){
 		$(".add-person-button").removeClass("disabled");
 		if( $(this).closest("li").children(".tree-sub").is(":hidden") ){
 			$(this).closest("li").children(".tree-sub").show();
 			$(this).parent("a").children(".icon-circle-plus").addClass("icon-circle-minus");
 			$(this).parent("a").children(".glyphicon-folder-close").addClass("glyphicon-folder-open");
 			$(".open-all-tree").text("全部折叠").addClass("active");
 		}else{
 			$(this).closest("li").children(".tree-sub").hide();
 			$(this).parent("a").children(".icon-circle-plus").removeClass("icon-circle-minus");
 			$(this).parent("a").children(".glyphicon-folder-close").removeClass("glyphicon-folder-open");
 		}
 		
 	});


 	// 资源库页面js
 	$(".filter-box .list a").click(function(){
 		$(this).parent("li").addClass("current").siblings("li").removeClass("current");
 	});

 	$(document).on("click",".sub-list-all-hover .tree-sub > li > a",function(){
 		if(!$(this).parent().hasClass("bkp"))
 		{
 			$(this).parent().addClass("current-tree").siblings().removeClass("current-tree");
 			$(".current-tree").not( $(this).parent() ).removeClass("current-tree");
 		}
 	})

 	//  打开所有的德能银行
 	function treeHideBank(){
 		$(".panel-body-collapse").show();
 		$(".all-tree-ul-none").find(".icon-circle-plus").addClass("icon-circle-minus");
 		$(".glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");
 	}
 	function treeShowBank(){
 		$(".all-tree-ul-none").find(".icon-circle-plus").removeClass("icon-circle-minus");
		$(".panel-body-collapse").hide();
		$(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
 	}
 	$(".open-all-collapse").click(function(){
 		if( $(this).text() == "全部展开" ){
 			$(this).text("全部折叠");
 			treeHideBank();
 			$(".collapse-button-allopen").addClass("active");
 		}else {
 			$(this).text("全部展开");
 			treeShowBank();
 			$(".collapse-button-allopen").removeClass("active");
 		}
 	});
 	$(".list-group-collapse-button").click(function(){
 		if ( $(this).find(".panel-body-collapse").is(":visible") ) {
 			$(".open-all-collapse").text("全部折叠").addClass("active");
 			$(this).find(".glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");
 			$(this).find(".collapse-button-allopen").addClass("active");
 		}else{
 			$(".open-all-collapse").text("全部展开").removeClass("active");
 			$(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
 			$(this).find(".collapse-button-allopen").removeClass("active");
 		};
 	});
 	// 日期选择器
 	$('.form_datetime').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
	$('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
    });

	// 保存成功后
	function saveComplete(){
		$(this).after("<i class='icon-circle-ok green'></i>");
	}

	// 选择教材版本
	var paddingName = $(".padding-name span").length;
	$(".banben-chose-box tr a").click(function(){
		var choseEqOne = $(this).closest("tr").index();
		var ThisText = $(this).text();
		console.log( ThisText );
		console.log( choseEqOne );
		$(".padding-name span").eq(choseEqOne).text(ThisText);
	});
	


	// 组合备课
	$('#zhbkmodal').on('show.bs.modal', function () {
	  $(".chose-box-index").removeClass("container").addClass("container-fluid");
	  $(".chose-box-index").css({ "z-index":"1041","position":"relative"});
	  $("body").css("overflow","auto");

	})
	$('#zhbkmodal').on('hide.bs.modal', function () {
		$(".chose-box-index").removeClass("container-fluid").addClass("container");
	  	$(".chose-box-index").css({ "z-index":"0","position":"static"});
	})

	//  打开所有的德能银行
 	function bodyHide(a,b){
 		$("a").show();
 		$("b").find(".icon-circle-plus").addClass("icon-circle-minus");
 		$(".glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");
 	}
 	function bodyShow(){
 		$("a").find(".icon-circle-plus").removeClass("icon-circle-minus");
		$("b").hide();
		$(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
 	}
 	$(".title-button a").click(function(){
 		$(this).parent().next(".menu-div .list").toggle();
 		if ( $(".menu-div .list").is(":visible") ) {
 			$(this).find(".glyphicon.glyphicon-plus").addClass("glyphicon-minus");
 		}else{
 			$(this).find(".glyphicon.glyphicon-plus").removeClass("glyphicon-minus");
 		};
 	});
 	$(".menu-list li a").click(function(){
 		$(this).parent().addClass("current").siblings("li").removeClass("current");
 	});
 	$(".menu-div .list a").click(function(){
 		$(this).parent().addClass("current");
 		$(".menu-div .list li").siblings("li").not( $(this).parent() ).removeClass("current");
 	});
 	$(".menu-list1 li a").click(function(){
 		var thisIndexNumber = $(this).parent().index()+1;
 		$("#sub-box"+thisIndexNumber ).show().siblings(".menu-div").hide();
 	});

 	// 备课参考js
 	// $(".bkck-yy-botton").click(function(){
 	// 	var getDataSrc = $(this).attr("data-src");
 	// 	var setDataSrc = $(this).closest(".tab-pane").find(".ckbk-iframe");
 	// 	setDataSrc.attr("src",getDataSrc).show();
 	// })
	$(".ckzl-tab li").click(function(){
		$(this).not(".addli").addClass("active").siblings().removeClass("active");
		var LiNumber = $(this).index();
		$(".tab-pane-ck").eq(LiNumber).removeClass("position-hidden").siblings(".tab-pane-ck").addClass("position-hidden");
	});
	$('#addconsult').on('show.bs.modal', function () {
		$(".tab-pane-ck").addClass("position-hidden");
	})
	$('#addconsult').on('hide.bs.modal', function () {
		$(".tab-pane-ck").removeClass("position-hidden");
	})
	$(".order-header a").click(function(){
		$(this).addClass("glyphicon glyphicon-sort").closest("td").siblings().find("a").removeClass("glyphicon glyphicon-sort");
	});

	// 批量导入试题页面
	// function choseAll(chosebutton,checkbox){
	// 	chosebutton.click(function(){
	// 		if ( $(this).is(":checked") ) {
	// 			checkbox.attr("checked",true);
	// 		}else{
	// 			checkbox.attr("checked",false);
	// 		}
	// 	})
	// }
	// var examChose = $(".chose-all-exam input:checkbox");
	// var examCheck = $(".singlecheck input:checkbox");
	// choseAll(examChose,examCheck);

	// 圈子效果
	$(".panel-body").on("click",".watch",function(){
		if( $(this).find(".icon-heart").hasClass("gray") ){
			$(this).find(".icon-heart").addClass("red").removeClass("gray");
			$(this).find(".gz").text("取消关注");
		}else{
			$(this).find(".icon-heart").addClass("gray").removeClass("red");
			$(this).find(".gz").text("关注");
		}
	});
	$(".table-pepole-list").on("click","tr",function(){
		$(this).not( $(".title") ).addClass("active").siblings().removeClass("active");
	});
	$(".table-pepole-list").on("click",".title td a",function(){
		$(".table-pepole-list .title").next("tr").addClass("active").siblings().removeClass("active");
	});

	function tabChangeBox(tabHead,tabPane){
		$(tabHead).click(function(){
			$(this).parent().addClass("current").siblings().removeClass("current");
			var tabIndex = $(this).parent().index() ;
			$(tabPane).eq(tabIndex).show().siblings( tabPane ).hide();
		})
	}
	tabChangeBox( ".tab-header-ul li a",".tab-panel-body" );

	$(".btn-batch-del").click(function(){
		$(".batch-box").show();
		$(this).parent().parent().hide();
		$(".batch-check").show();
	})
	$(".btn-batch-cancel").click(function(){
		$(".batch-box").hide();
		$(".btn-batch-del").parent().parent().show();
		//$(".chose-all-batch-check").prop("checked", false);
		//$(".batch-check").prop("checked", false);
		$(".batch-check").hide();
	})
	/*
	$(".chose-all-batch-check").click(function(){
		$(".batch-check").prop("checked",$(this).is(":checked"));
	})
	$(".panel-body").on("click",".batch-check",function(){
		var checkAll = ($(".batch-check:checked").length == $(".batch-check").length);
		$(".chose-all-batch-check").prop("checked", checkAll);
	})
	*/

	var navigationtoplight = $("#navigation-top-menu").val();
	$("#"+navigationtoplight).parent().find("li").removeClass("active");
	$("#"+navigationtoplight).addClass("active");

	
    
})
// loading图形
	function openLoading(boxName){
        $(boxName).show();
        $("body").append("<div class='modal-backdrop modal-backdrop2 fade in' style='z-index:1050;'></div><div class='loadmodal'><img src='"+getPathUrl()+"/static/img/logo.gif' width='50' ></div>")
    }
    function closeLoading(boxName){
        $(boxName).hide();
        $(".modal-backdrop2").remove();
        $(".loadmodal").remove();
    }
    
    /*获取path*/
    function getPathUrl()
    {
        var curWwwPath=window.document.location.href;
        var pathName=window.document.location.pathname;
        var pos=curWwwPath.indexOf(pathName);
        var localhostPaht=curWwwPath.substring(0,pos);
        var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
        return (localhostPaht+projectName);
    }