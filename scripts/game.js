//Lägger in keys i game. I game.test testar vi om dessa keys finns i game. 
let game = {
    score: 0, 
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame () {
   game.score = 0;
   game.currentGame = [];
   game.playerMoves = [];
   showScore();
   addTurn();
    }

function showScore () {
    document.getElementById("score").innerText = game.score;
};


function addTurn () {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

/**exports används i Node.js för att exportera en modul. 
I detta fall exporteras ett objekt som har en egenskap med namnet game,
och värdet av den egenskapen är det värde som är associerat med variabeln game i din kod.*/
module.exports = { game, newGame, showScore, addTurn };