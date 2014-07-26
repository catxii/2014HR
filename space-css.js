// 2014“暑假班”样式公用库 



function loadJS(filename){
	for (var i = 0; i < filename.length; i++) {
		document.write(filename[i]);
	}
}

var filegroup = [

	"<link href='libs/glyphicons/css/glyphicons.css' rel='stylesheet'>",
	// Bootstrap core CSS 
	"<link href='libs/bootstrap/css/bootstrap.css' rel='stylesheet'>",
	// Bootstrap theme 
	"<link href='libs/bootstrap/css/bootstrap-theme.css' rel='stylesheet'>",

	// select 2 
	"<link href='libs/select2/select2.css' rel='stylesheet'>",

	// Custom styles for this template 
	"<link href='css/style-v1.css' rel='stylesheet'>"

]

loadJS(filegroup);

