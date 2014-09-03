// 2014“暑假班”样式公用库 

function loadJS(filename){
	for (var i = 0; i < filename.length; i++) {
		document.write(filename[i]);
	}
}

var filegroup = [
	//glyphicons 图标样式
	"<link href='libs/glyphicons/css/glyphicons.css' rel='stylesheet'>",
	// Bootstrap core CSS 
	"<link href='libs/bootstrap/css/bootstrap.css' rel='stylesheet'>",
	// Bootstrap theme 
	"<link href='libs/bootstrap/css/bootstrap-theme.css' rel='stylesheet'>",

	// select 2 
	"<link href='libs/select2/select2.css' rel='stylesheet'>",

	// lightbox 2 
	"<link href='libs/jquery-lightbox/css/lightbox.css' rel='stylesheet'>",

	// 日期选择器 
	// "<link href='libs/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css' rel='stylesheet' >",

	// Custom styles for this template 
	"<link href='css/style-v1.css' rel='stylesheet'>",
    "<link href='css/style-feng.css' rel='stylesheet'>", 

	// Just for debugging purposes. Don't actually copy these 2 lines! 
	// "<!--[if lt IE 9]> <script src='libs/bootstrap/js/ie8-responsive-file-warning.js'></script> <![endif]-->",
	// "<script src='libs/bootstrap/js/ie-emulation-modes-warning.js'></script>",

	// IE10 viewport hack for Surface/desktop Windows 8 bug 
	// "<script src='libs/bootstrap/js/ie10-viewport-bug-workaround.js'></script>",

	// HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries 
	// "<!--[if lt IE 9]>\
	// <script src='https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js'></script>\
	// <script src='https://oss.maxcdn.com/respond/1.4.2/respond.min.js'>\
	// </script>\
	// <![endif]-->",

	//当为IE6~9的
	"<!--[if IE 6]>\
	<script type='text/javascript' src='js/downbrowser.js'></script>\
	<![endif]-->\
	<!--[if IE 7]>\
	<script type='text/javascript' src='js/downbrowser.js'></script>\
	<![endif]-->\
	<!--[if IE 8]>\
	<script type='text/javascript' src='js/downbrowser.js'></script>\
	<![endif]-->\
	<!--[if IE 9]>\
	<script type='text/javascript' src='js/downbrowser.js'></script>\
	<![endif]-->"
]

loadJS(filegroup);

