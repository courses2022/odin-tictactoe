console.log("Hi there");

const player = name => {
    let score =0;
    const incrementScore = () => score+=1;
    const getScore = () => score;
    const getName = () =>  name;
    return{getName, incrementScore, getScore};
}

const player1 = player("Player 1");
const player2 = player("Player 2");

