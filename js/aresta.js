function Aresta(){
	
	var aresta = {};
	
	aresta.verticeInicio;
	aresta.verticeFim;
	
	
	aresta.criarAresta = function(vertice_1, vertice_2){
		aresta.verticeInicio = vertice_1;
		aresta.verticeFim = vertice_2;
		
		aresta.verticeInicio.grau++;
		aresta.verticeFim.grau++;
	
	};
	
	return aresta;
}