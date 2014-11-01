// 2014“暑假班”样式公用库 

function loadJS(filename){
	for (var i = 0; i < filename.length; i++) {
		document.write(filename[i]);
	}
}
var netAddress="";
var filegroup = [
	"<link href='"+netAddress+"libs/literallycanvas/lib/css/colorpicker.css' rel='stylesheet'>",
	"<link href='"+netAddress+"libs/literallycanvas/lib/css/literally.css' rel='stylesheet'>",
	"<link href='"+netAddress+"css/canvas-style.css' rel='stylesheet'>",
	"<link href='"+netAddress+"libs/glyphicons/css/glyphicons.css' rel='stylesheet'>"
	]

loadJS(filegroup);

