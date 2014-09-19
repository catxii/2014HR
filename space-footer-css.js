//2014“暑假班”JS公用库

function loadJS(filename){
	for (var i = 0; i < filename.length; i++) {
		document.write(filename[i]);
	}
}

var filegroup = [

	//jQuery文件。务必在bootstrap.min.js 之前引入
	"<script type='text/javascript' src='libs/bootstrap/js/jquery.min.js'><\/script>",

	//最新的 Bootstrap 核心 JavaScript 文件
	"<script type='text/javascript' src='libs/bootstrap/js/bootstrap.min.js'><\/script>",
	"<script type='text/javascript' src='libs/bootstrap/js/docs.min.js'><\/script>",

	//angular JS 文件
	"<script type='text/javascript' src='libs/angularjs/js/angular.min.js'><\/script>",

	//select2 JS 文件
	"<script type='text/javascript' src='libs/select2/select2.js'><\/script>",

	//lightbox JS 文件
	"<script type='text/javascript' src='libs/jquery-lightbox/jquery.lightbox.js'><\/script>",

	//日期选择器
	"<script type='text/javascript' src='libs/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js'></script>",
	"<script type='text/javascript' src='libs/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.fr.js'></script>",

	// 自定义JS
	"<script type='text/javascript' src='js/plug-in.js'><\/script>"

]

loadJS(filegroup);



