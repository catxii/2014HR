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

})