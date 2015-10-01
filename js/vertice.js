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
		vertice.ativo = true;
	};
	
	vertice.setCoordenadasNaTela = function(x, y){
		
	};
	
	vertice.addAresta = function(aresta){
		vertice.arestas.push(aresta);
	};
	
	vertice.showArestas = function(){
		for(var i = 0; i < vertice.arestas.length; i++){
			console.log("VERTICE: " + vertice.id);
			console.log("VERTICE INICIO " + vertice.arestas[i].verticeInicio.id);
			console.log("VERTICE FIM " + vertice.arestas[i].verticeInicio.id);
			
			vertice.arestas[i].showInfo();
		}
	};
	
	vertice.getAresta = function(index){
		return vertice.arestas[index];	
	};
	
	vertice.criarVertice();
	
	return vertice;
}
