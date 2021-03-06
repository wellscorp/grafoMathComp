
function MatrixController(){
	
	var matrixController = {};
	
	matrixController.numeroVertices;
	matrixController.numeroArestas;
	
	matrixController.rows;
	matrixController.cols;
	
	matrixController.matrix;
	
	matrixController.arrVertices = [];
	
	
	matrixController.addVertice = function(vertice){
		matrixController.arrVertices.push(vertice);
	};
	
	matrixController.addAresta = function(aresta){
		for(var i = 0; i < matrixController.arrVertices.length; i++){
			if(matrixController.arrVertices[i].id == aresta.verticeInicio.id 
			 || matrixController.arrVertices[i].id == aresta.verticeFim.id){
				 
				 matrixController.arrVertices[i].addAresta(aresta);
				 
			 }
		}
	};
	
	matrixController.showArrayVerticesOnConsole = function(){
		console.log(matrixController.arrVertices);
	};
	
	matrixController.criarMatrix = function(x, y){
		matrixController.numeroVertices = x;
		matrixController.rows = x;
		matrixController.cols = y;
		
		return matrixController.gerarGrafoSimples(x, y);
		
		
	};
	
	matrixController.carregarMatrix = function(){
		var matrix = [];
		for(var i = 0; i < matrixController.numeroVertices; i++){
			matrix[i] = [];
			for(var j = 0; j < matrixController.numeroVertices; j++){
				matrix[i][j] = 0;
			}
		}
				
		
		for(var i = 0; i < matrixController.arrVertices.length; i++){
			for(var j = 0; j < matrixController.arrVertices.length; j++){
				for(var k = 0; k < matrixController.arrVertices[i].arestas.length; k++){
					if(matrixController.arrVertices[i].getAresta(k).getVerticeInicio().id == matrixController.arrVertices[i].id
						&& matrixController.arrVertices[i].getAresta(k).getVerticeFim().id == matrixController.arrVertices[j].id){
						matrix[i][j]++;
					}
					
					if(matrixController.arrVertices[i].getAresta(k).getVerticeFim().id == matrixController.arrVertices[i].id
						&& matrixController.arrVertices[i].getAresta(k).getVerticeInicio().id == matrixController.arrVertices[j].id){
						matrix[i][j]++;
					}
				}
			}
		}
		
		console.log(matrix);
		
		matrixController.matrix = matrix;
	};
	
	matrixController.gerarGrafoSimples = function(x, y){
		var matrix = [];
		for(var i = 0; i < x; i++){
			matrix[i] = [];
			for(var j = 0; j < y; j++){
				if(j == i)
					matrix[i][j] = 0;
				
				if(i > 0){
					if(i > j){
						if(matrix[j][i] > 0){
							matrix[i][j] = 0;
						}else{
							matrix[i][j] = 1;//Math.floor(Math.random() * 2);
						}
					}
				}
				
				if(i < j){
					matrix[i][j] = 1; //Math.floor(Math.random() * 2);
				}
				
				
				matrixController.numeroArestas += matrix[i][j];
			}
		}
		
		return matrix;
	};
	
	matrixController.gerarGrafoAleatorio = function(x, y){
		var matrix = [];
		for(var i = 0; i < x; i++){
			matrix[i] = [];
			for(var j = 0; j < y; j++){
				matrix[i][j] = Math.floor(Math.random() * 2);
				
			}
		}
		
		return matrix;
	};
	
	matrixController.getNumeroArestas = function(){
		return matrixController.numeroArestas;
	};
	
	matrixController.getNumeroVertices = function(){
		return matrixController.numeroVertices;
	};
	
	matrixController.mostrarMatrix = function(){
		var alertMessage = "";
		for(var i = 0; i < matrixController.numeroVertices; i++){
			alertMessage += " <br>";
			for(var j = 0; j < matrixController.numeroVertices; j++){
				alertMessage += " " + matrixController.matrix[i][j];
				
			}
		}
		
		document.write(alertMessage);
	};
	
	matrixController.checkArestaEntreVertices = function(vertex_1, vertex_2){
		return (matrixController.matrix[vertex_1][vertex_2] >= 1);	
	};
	
	matrixController.inserirArestaEntreVertices = function(vertex_1, vertex_2){
		matrixController.matrix[vertex_1][vertex_2]++;
	};
	
	matrixController.removerArestaEntreVertices = function(vertex_1, vertex_2){
		if(matrixController.matrix[vertex_1][vertex_2] > 0)
			matrixController.matrix[vertex_1][vertex_2]--;
	};
	
	matrixController.getVerticesAdjacentes = function(vertex){
		var adjacentes = [];
		
		for(var i = 0; i < matrixController.cols; i++){
			if(vertex != i){
				if(matrixController.matrix[vertex][i] > 0){
					adjacentes.push(i);
				}
			}
		}
		
		//document.write("<br>" + adjacentes);
		return adjacentes;
	};
	
	matrixController.obterGrauVertice = function(vertex){
		var grau = 0;
		
		for(var i = 0; i < matrixController.cols; i++){
			grau += matrixController.matrix[vertex][i];
			
		}
		
		return grau;
	};
	
	matrixController.identificarGrauMinimo = function(){
		var grau = 0;
		var grauMin = 0;
		
		for(var i = 0; i < matrixController.rows; i++){
			
			for(var j = 0; j < matrixController.cols; j++){
				grau += matrixController.matrix[i][j];
			}
			
			if(i == 0) 
				grauMin = grau;
			
			
			if(grau < grauMin){
				grauMin = grau;
			}
			
			grau = 0;
		}	
		
		return grauMin;
	};
	
	matrixController.identificarGrauMedio = function(){
		return 2 * matrixController.getNumeroArestas() / matrixController.getNumeroVertices();
	};
	
	matrixController.identificarGrauMaximo = function(){
		var grau = 0;
		var grauMax = 0;
		
		for(var i = 0; i < matrixController.rows; i++){
			
			for(var j = 0; j < matrixController.cols; j++){
				grau += matrixController.matrix[i][j];
			}
			
			if(i == 0) 
				grauMax = grau;
			
			
			if(grau > grauMax){
				grauMax = grau;
			}
			
			grau = 0;
		}	
		
		return grauMax;
	};
	
	/*
	 Grafo Conexo se refere ao grafo em que há sempre um caminho de 
	 um vértice até outro. 
	*/
	matrixController.identificarGrafoConexo = function(){
		
		for(var i = 0; i < matrixController.rows; i++){
			for(var j = 0; j < matrixController.cols; j++){
				var quantEdgeFound = 0;
				if(i != j){
					if(matrixController.matrix[i][j] > 0){
						quantEdgeFound++;
					}
					
					if(j == matrixController.cols - 1 && quantEdgeFound == 0)
						return false;
				}
			}
		}
		
		return true;
	};
	
	matrixController.identificarCaminhoEuler = function(){
		
		var countVerticesGrauImpar = 0;
		
		for(var i = 0; i < matrixController.cols; i++){
			if(matrixController.obterGrauVertice(i) % 2 != 0){
				countVerticesGrauImpar++;
			}
		}
		
		if(countVerticesGrauImpar > 0 && countVerticesGrauImpar != 2){
			return false;
		}
		
		return true;
	};
	
	return matrixController;
};
