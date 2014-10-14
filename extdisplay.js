
window.onload=function(){
	document.getElementById('sect1').webkitRequestFullScreen();

	var viewFullScreen = document.getElementById("fullscreen");
	if (viewFullScreen) {
		viewFullScreen.addEventListener("click", function () {
			var docElm = document.documentElement;
			//docElm=document.getElementById('sect1');
			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			}
			else if (docElm.msRequestFullscreen) {
				docElm.msRequestFullscreen();
			}
			else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			}
			else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			}

			$("#mysidebar").hide();
			$("section[id^='sect']").hide();
			$("#sect1").show(200);
		}, false);
		
	}

	var sectid=2;
	var ifcurr=true;//是否停在当页
	var hele=[];
	//处理键盘
	document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==27){ // 按 Esc 
	//要做的事情
		console.log("取消全屏");
	}
	if(e && e.keyCode==113){ // 按 F2 
	//要做的事情
	} 
	if(e && e.keyCode==13){ // enter 键
	//要做的事情
	}
	if(e && e.keyCode==32){ //空格
		//show("sect"+sectid);

		//$("section[id^='sect']").hide();


		//var hele=[];
		if(hele.length==0&&ifcurr){
			for (var iobj in animHide) {
				//console.log(animHide[iobj]);
				if($("#sect"+sectid).find("#"+animHide[iobj]).size()>0){
					$("#"+animHide[iobj]).hide();
					hele.push(animHide[iobj]);
					//console.log("隐藏hide:"+animHide[iobj]);
				}

			}
			ifcurr=false;
		}

		//console.log("lll"+$("#sect"+sectid).find("div").size());
		console.log("sect"+sectid);
		if(hele.length==0){
			$("#sect"+(sectid-1)).hide();
			$("#sect"+sectid).show(200);
			ifcurr=true;
			sectid++;
		}else{


			//console.log("show sta-"+$("#sect"+sectid).is(":visible"));
			//$("#sect"+sectid).show();
			//$("#"+hele[0]).show();
			console.log(hele.length);
			 if($("#sect"+sectid).is(":visible")&&hele.length>0){//如果大页面已经显示
			 	$("#"+hele[0]).show();
			 	console.log("delete arrayindex");
			 	hele.splice(0,1);
			// 	console.log("show hele");
			 }else{
			 	$("#sect"+(sectid-1)).hide();
			 	$("#sect"+sectid).show();
			// 	console.log("show sect-"+$("#sect"+sectid).is(":visible"));
			 }
			
			
			//console.log(hele[0]);
		}
		//hele=[];
		
		
	}
}; 








function show(sectid){
	var docElm=document.getElementById(sectid);
	if (docElm.requestFullscreen) {
		docElm.requestFullscreen();
	}
	else if (docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	}
	else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();
	}
	else if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();
	}
}


};