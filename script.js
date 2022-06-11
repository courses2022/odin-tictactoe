console.log("Hi there");

const player = name => {
    let score =0;
    const incrementScore = () => score+=1;
    const getScore = () => score;
    const getName = () =>  name;
    const resetScore = () => score = 0;
    return{getName, incrementScore, getScore, resetScore};
}

const Player1 = player("Player 1");
const Player2 = player("Player 2");

const GameBoard = (() => {
    const board = [0,0,0,0,0,0,0,0,0];
    const getBoard = () => board;
    const addMove = (position, move) =>{
        if(board[position] == 0){
            board.splice(position, 1, move);
            return true;
        }
        else
            return false;

    };
    const getState = () => {
        if(((board[0]==board[1] && board[1]==board[2]) || (board[0]==board[3]&&board[3]==board[6]) || (board[0]==board[4]&&board[4]==board[8])) && board[0]!= 0) return `${board[0]} wins`;
        if((board[3]==board[4] && board[4]==board[5]) && board[3]!= 0) return `${board[3]} wins`;
        if((board[6]==board[7] && board[7]==board[8]) && board[6]!= 0) return `${board[6]} wins`;
        if((board[1]==board[4] && board[4]==board[7]) && board[1]!= 0) return `${board[1]} wins`;
        if((board[2]==board[5] && board[5]==board[8]) && board[2]!= 0) return `${board[2]} wins`;
        if(board.includes(0)) return "active";
        if(!board.includes(0)) return "draw";


    };
    const resetBoard = () => {board = [0,0,0,0,0,0,0,0,0]}
    return {getBoard, addMove, getState, resetBoard}
})();

const DisplayController = ((selector = ".board", action) =>{
    const root = document.querySelector(selector);
    const drawBoard = (board=[" "," ","x","x","o","o","o","x","x"]) => {
        root.innerHTML = "";
        board.forEach((x, index) => {
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode(`${x}`);
            newDiv.appendChild(newContent);
            newDiv.setAttribute("onclick", `action(${index})`);
            if(x!= " ")newDiv.classList.add("full");
            root.appendChild(newDiv);
        });
        

    }

    return {drawBoard};
})();

const GameController = (() => {
    const notification = document.querySelector(".notification")
    const initialiseGame = () => {
        //temporatily
        DisplayController.drawBoard();
        playGame();
    }

    const newGame = () => {
        GameBoard.resetBoard();
        Player1.resetScore();
        Player2.resetScore();
    }

    const playGame = () => {

        while(GameBoard.getState() == "active"){
            setTimeout(function timer() {
            //Get player1 move
            notification.innerHTML = "Player 1's Move";
            // Check game state draw or win
            //Get player2 move
            // Check game state draw or win
              }, 3000);
            
            break;
        }
    }
    return {initialiseGame, newGame};
})();

GameController.initialiseGame();