function Aresta(vertice_1, vertice_2){
	
	var aresta = {};
	
	aresta.verticeInicio =  new Vertice();
	aresta.verticeFim =  new Vertice();
	
	
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

    aresta.getCoordenadas = function () {

        var aCoo = [
            [aresta.verticeInicio.x,aresta.verticeInicio.y],
            [aresta.verticeFim.x,aresta.verticeFim.y]
        ];

        return aCoo;
    };

    aresta.desenharAresta = function (id) {

        var aCoo = aresta.getCoordenadas();
        // GERAR ARTESTA
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");
        // coordenada (x,y)
        ctx.moveTo(aCoo[0][0],aCoo[0][1]);
        ctx.lineTo(aCoo[1][0],aCoo[1][1]);
        ctx.stroke();
        /*
        // GERAR VERTICE
        var ctx = c.getContext("2d");
        ctx.beginPath();
        // x, y, diamentro, circuferencia,
        ctx.arc(aCoo[0][0],aCoo[0][1],5,0,2*Math.PI);
        ctx.stroke();
        // GERAR VERTICE
        var ctx = c.getContext("2d");
        ctx.beginPath();
        // x, y, diamentro, circuferencia,
        ctx.arc(aCoo[1][0],aCoo[1][1],5,0,2*Math.PI);
        ctx.stroke();
        */
    };
	
	//aresta.criarAresta(vertice_1, vertice_2);
	
	return aresta;
}