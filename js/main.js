// Toda logica inicia aqui

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var stage;
var layer;

stage = new Konva.Stage({
	container: 'container',
	width: WIDTH,
	height: HEIGHT
});

layer = new Konva.Layer();
stage.add(layer);