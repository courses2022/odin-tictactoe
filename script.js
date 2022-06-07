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

    }
    const getState = () => {
        if((board[0]==board[1]==board[2]) || (board[0]==board[1]==board[2]) || (board[0]==board[1]==board[2])) return `${board[0]} wins`;
        if(board[0]==board[1]==board[2]) return `${board[0]} wins`;
        if(board[0]==board[1]==board[2]) return `${board[0]} wins`;

    }
    return {getBoard, addMove}
})();