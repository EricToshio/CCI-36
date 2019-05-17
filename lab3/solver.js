

function getAvailableMoves(board, currentPosition) {
	// console.log(currentPosition);
	var curr_x = currentPosition.position.x;
	var curr_y = currentPosition.position.y;
	var movesAvailable = [];
	//x axis move
	if(curr_x+2 < 7 && board[curr_x+2][curr_y] && board[curr_x+1][curr_y] && board[curr_x+2][curr_y].piece === false && board[curr_x+1][curr_y].piece === true)
		movesAvailable.push({x: curr_x+2, y: curr_y});
	if(curr_x-2 >= 0 && board[curr_x-2][curr_y] && board[curr_x-1][curr_y] && board[curr_x-2][curr_y].piece === false && board[curr_x-1][curr_y].piece === true)
		movesAvailable.push({x: curr_x-2, y: curr_y});
	//y axis move
	if(curr_y+2 < 7 && board[curr_x][curr_y+2] && board[curr_x][curr_y+1] && board[curr_x][curr_y+2].piece === false && board[curr_x][curr_y+1].piece === true)
		movesAvailable.push({x: curr_x, y: curr_y+2});
	if(curr_x-2 >= 0 &&board[curr_x][curr_y-2] && board[curr_x][curr_y-1] && board[curr_x][curr_y-2].piece === false && board[curr_x][curr_y-1].piece === true)
		movesAvailable.push({x: curr_x, y: curr_y-2});

	return movesAvailable;
}

function removeIndexFromArray(array, index) {
	array.splice(index, 1); 
}



function translateMatrix(board) {
	var linhas = new Array(7);
	for(var i=0;i<7;i++)
		linhas[i] = new Array(7);
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board.length; j++){
			if(board[i][j]){
				linhas[i][j] = {position:{x:0,y:0},piece:false};
				linhas[i][j].position.x = i;
				linhas[i][j].position.y = j;
				if(board[i][j].piece){
					linhas[i][j].piece = true;
				} else {
					linhas[i][j].piece = false;
				}
			} else {
				linhas[i][j] = null;
			}
		}
	}
	linhas[3][3].piece = false;
	return linhas;
}

function makeBoardCopy(board) {
	var linhas = new Array(7);
	for(var i=0;i<7;i++)
		linhas[i] = new Array(7);
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board.length; j++){
			if(board[i][j]){
				linhas[i][j] = {position:{x:0,y:0},piece:false};
				linhas[i][j].piece = board[i][j].piece;
				linhas[i][j].position = board[i][j].position;
			} else {
				linhas[i][j] = null;
			}
		}
	}
	return linhas;
}

function countPiecesOnBoard(board) {
	var count = 0;
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board.length; j++){
			if(board[i][j] && board[i][j].piece){
				count += 1;
			}
		}
	}
	return count;
}

function makeMove(board, pieceOrigin, finalPosition) {
	// console.log(board);
	// console.log(pieceOrigin.position.x, pieceOrigin.position.y, "->",finalPosition.x, finalPosition.y);
	board[finalPosition.x][finalPosition.y].piece = true;
	var x = (pieceOrigin.position.x + finalPosition.x)/2;
	var y = (pieceOrigin.position.y + finalPosition.y)/2;
	board[x][y].piece = false;
	board[pieceOrigin.position.x][pieceOrigin.position.y].piece = false;
}

function undoMove(board, pieceOrigin, finalPosition) {
	board[finalPosition.x][finalPosition.y].piece = false;
	var x = (pieceOrigin.position.x + finalPosition.x)/2;
	var y = (pieceOrigin.position.y + finalPosition.y)/2;
	board[x][y].piece = true;
	board[pieceOrigin.position.x][pieceOrigin.position.y].piece = true;
}


function checkCandidates(candidates) {
	for(var i=0; i< candidates.length; i++)
		if(candidates[i].peca.piece === false){
			console.log("pegou errado");
			return;
		}
}

function listAllCandidatesToMove(board, list) {
	// procura quem pode se mover
	for(var i=0; i<board.length; i++){
		for(var j=0; j<board.length; j++){
			if(board[i][j] && board[i][j].piece){ //se eh uma posicao valida
				var moves = getAvailableMoves(board, board[i][j]);
				if(moves.length){ //se eh uma peca que pode se mover
					list.push({
						peca: board[i][j],
						moves: moves
					});
				}
			}
		}
	}
}

function calculateHeuristic(board) {
	var candidates =[];
	listAllCandidatesToMove(board, candidates);
	return candidates.length;	
}

function createNode(parent, prevMove, board) {
	var node = {
		parent: parent,
		prevMove: prevMove,
		board: makeBoardCopy(board),
		heuristic: calculateHeuristic(board);
	}
	return node;
}

function getBestNode(globalList) {
	var best = 0;
	for(var i=0; i<globalList.length;i++){
		if(globalList[i].heuristic > globalList[best].heuristic){
			best = i;
		}
	}
	var node = globalList[best];
	removeIndexFromArray(globalList, best);
	return node;
}

function solver(board) {
	var movesAnswer = [];
	var depth = 0;
	var newBoard = translateMatrix(board);
	var initialNode = createNode(null, null, newBoard);
	var globalList = [initialNode];
	var response = solverBFS(newBoard, movesAnswer, depth, globalList);
	// if(response){
	// 	console.log("achou a solucao: ",movesAnswer);
	// } else {
	// 	console.log("bugou");
	// }
	return movesAnswer;
}

function solverBFS(board, movesAnswer, depth, globalList) {
	// console.log(board);
	if(depth > 32){
		console.log("profundidade", depth);
		return false;
	}
	depth += 1;
	if(countPiecesOnBoard(board) == 2) {
		return true;
	} else {
		console.log(countPiecesOnBoard(board));
	}

	var candidates = [];
	listAllCandidatesToMove(board, candidates);
	// candidates = definePriority(candidates);
	
	checkCandidates(candidates);
	if(candidates.length == 0)
		return false;

	var solutionNotFound = true;
	for(var i=0;i<candidates.length && solutionNotFound;i++) {
		var candidate = candidates[i];
		for(var j=0; j<candidate.moves.length && solutionNotFound; j++) {
			makeMove(board, candidate.peca, candidate.moves[j]);
			// console.log("movimento:", candidate.peca, "estado: ",board);
			var response = solverDFS(board, movesAnswer, depth);
			// console.log(response);
			if(response) {
				solutionNotFound = false;
				var remove = [];
				remove.x = (candidate.peca.position.x+candidate.moves[j].x)/2;
				remove.y = (candidate.peca.position.y+candidate.moves[j].y)/2;
				var solution = {
					origin: {x: candidate.peca.position.x, y:candidate.peca.position.y},
					remove: {x: remove.x, y: remove.y},
					destiny: {x: candidate.moves[j].x, y: candidate.moves[j].y}
				};
				movesAnswer.push(solution);
				return true;
			} else {
				undoMove(board, candidate.peca, candidate.moves[j]);
				console.log("des");
			}
		}
	}
	return false;

}

