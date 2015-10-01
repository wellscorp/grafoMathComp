var num_vertices_from_file;
var num_arestas_from_file;

var matrixController = MatrixController();

$("#matriz-button").click(function(){
	matrixController.carregarMatrix();
	matrixController.mostrarMatrix();
	
	
	
});




initialize();

function initialize(){
	waitForFile();
}

function waitForFile(){
	
	document.getElementById('file').onchange = function(){

	var file = this.files[0];
	
	var reader = new FileReader();
	reader.onload = function(progressEvent){
		// Entire file
		//console.log(this.result);
		
		
		var searchMode = {};
		searchMode.NONE = "none";
		searchMode.VERTICES = "vertices";
		searchMode.ARESTAS = "arestas";
		searchMode.current_mode = searchMode.NONE;
		
		// By lines
		var lines = this.result.split('\n');
		for(var line = 0; line < lines.length; line++){
			//console.log(lines[line]);
			//console.log(searchMode.current_mode);
			
			
			if(searchMode.current_mode == searchMode.VERTICES){
				if(num_vertices_from_file != 0){
					
					var newVertice = Vertice();
					matrixController.addVertice(newVertice);
					
					num_vertices_from_file--;
				}else{
					searchMode.current_mode = searchMode.NONE;
				}
			}
		
		
			if(searchMode.current_mode == searchMode.ARESTAS){
				
				if(num_arestas_from_file != 0){
					var line_elements = lines[line].split('-');
					var vertice_1 = parseInt(line_elements[0]);
					var vertice_2 = parseInt(line_elements[1]);
					
					var newAresta = Aresta(matrixController.arrVertices[vertice_1], matrixController.arrVertices[vertice_2]);
					
					matrixController.addAresta(newAresta);
					
					num_arestas_from_file--;
				}else{
					searchMode.current_mode = searchMode.NONE;
				}
				
				
			}


			if(searchMode.current_mode == searchMode.NONE){
				var line_elements = lines[line].split(' ');
				if(line_elements[0] == searchMode.VERTICES){
					
					num_vertices_from_file = parseInt(line_elements[1]);					
					matrixController.numeroVertices = num_vertices_from_file;					
					searchMode.current_mode = searchMode.VERTICES;
					
				}else if(line_elements[0] == searchMode.ARESTAS){
					
					num_arestas_from_file = parseInt(line_elements[1]);
					searchMode.current_mode = searchMode.ARESTAS;
				}
				
			}
			
			
		}
		matrixController.showArrayVerticesOnConsole();
	};
	
	reader.readAsText(file);
	};
}

