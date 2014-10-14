// 2014“暑假班”样式公用库 

function loadJS(filename){
	for (var i = 0; i < filename.length; i++) {
		document.write(filename[i]);
	}
}

var filegroup = [
	"<link href='libs/literallycanvas/lib/css/colorpicker.css' rel='stylesheet'>",
	"<link href='libs/literallycanvas/lib/css/literally.css' rel='stylesheet'>",
	"<link href='css/canvas-style.css' rel='stylesheet'>",
	"<link href='libs/glyphicons/css/glyphicons.css' rel='stylesheet'>",
	"<script src='libs/literallycanvas/lib/js/literallycanvas.fat.js'></script>"
	]

loadJS(filegroup);

