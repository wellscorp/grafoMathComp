var ID_VERTICES = 0;

function Vertice(){
	
	var vertice = {};
	
	vertice.id;
	vertice.ativo;
	vertice.arestas = [];
	vertice.grau = 0;
	
	vertice.criarVertice = function(){
		vertice.id = ID_VERTICES;
		ID_VERTICES++;
	};
	
	vertice.setCoordenadasNaTela = function(x, y){
		
	};
	
	vertice.criarVertice();
	
	return vertice;
}
