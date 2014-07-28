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
 	$('.btn').tooltip();



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

 	$(".sub-click-area").click(function(){
 		if( $(this).closest("li").children(".tree-sub").is(":hidden") ){
 			$(this).closest("li").children(".tree-sub").show();
 			$(this).parent("a").children(".icon-circle-plus").addClass("icon-circle-minus");
 			$(".open-all-tree").text("全部折叠").addClass("active");
 		}else{
 			$(this).closest("li").children(".tree-sub").hide();
 			$(this).parent("a").children(".icon-circle-plus").removeClass("icon-circle-minus");

 		}
 		
 	});

 	// 资源库页面js
 	$(".filter-box .list a").click(function(){
 		$(this).parent("li").addClass("current").siblings("li").removeClass("current");
 	});

 	$(".sub-list-all-hover .tree-sub li a").click(function(){
 		$(this).parent().addClass("current-tree").siblings().removeClass("current-tree");
 		$(".current-tree").not( $(this).parent() ).removeClass("current-tree");
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
 		}else {
 			$(this).text("全部展开");
 			treeShowBank();
 		}
 	});
 	$(".list-group-collapse-button").click(function(){
 		if ( $(".panel-body-collapse").is(":visible") ) {
 			$(".open-all-collapse").text("全部折叠").addClass("active");
 			$(this).find(".glyphicon.glyphicon-chevron-right").addClass("glyphicon-chevron-down");
 		}else{
 			$(".open-all-collapse").text("全部展开").removeClass("active");
 			$(this).find(".glyphicon.glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
 		};
 	});

 	// 日期选择器
 	$('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
        showMeridian: 1
    });
	$('.form_date').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
        language:  'fr',
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
})
