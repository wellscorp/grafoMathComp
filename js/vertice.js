var ID_VERTICES = 0;

function Vertice(){
	
	var vertice = {};
	
	vertice.id;
	vertice.ativo;
	vertice.arestas = [];
	vertice.grau = 0;
    vertice.x = 0;
    vertice.y = 0;
	
	vertice.criarVertice = function(){
		vertice.id = ID_VERTICES;
		ID_VERTICES++;
		vertice.ativo = true;
	};
	
	vertice.setCoordenadasNaTela = function(x, y){
        vertice.x = x;
        vertice.y = y;
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

    vertice.desenharVertice = function (id) {
        // GERAR VERTICE
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        // x, y, diamentro, circuferencia,
        ctx.arc(vertice.x,vertice.y,5,0,2*Math.PI);
        ctx.stroke();
    };
	
	vertice.criarVertice();
	
	return vertice;
}
