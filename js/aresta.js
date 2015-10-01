function Aresta(vertice_1, vertice_2){
	
	var aresta = {};
	
	aresta.verticeInicio;
	aresta.verticeFim;
	
	
	aresta.criarAresta = function(vertice_1, vertice_2){
		aresta.verticeInicio = vertice_1;
		aresta.verticeFim = vertice_2;
		
		aresta.verticeInicio.grau++;
		aresta.verticeFim.grau++;
	
	};
	
	aresta.showInfo = function(){
		console.log("VERTICE INICIO: " + aresta.verticeInicio.id);
		console.log("VERTICE FIM: " + aresta.verticeFim.id);
	};
	
	aresta.getVerticeInicio = function(){
		return aresta.verticeInicio;	
	};
	
	aresta.getVerticeFim = function(){
		return aresta.verticeFim;	
	};
	
	aresta.criarAresta(vertice_1, vertice_2);
	
	return aresta;
}