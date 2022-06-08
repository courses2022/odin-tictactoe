console.log("Hi there");

const player = name => {
    let score =0;
    const incrementScore = () => score+=1;
    const getScore = () => score;
    const getName = () =>  name;
    return{getName, incrementScore, getScore};
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
    return {getBoard, addMove, getState}
})();

const DisplayController = ((root, action) =>{
    const drawBoard = () => {
        
    }

    return {drawBoard};
})();