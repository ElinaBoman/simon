//Lägger in keys i game. I game.test testar vi om dessa keys finns i game. 
let game = {
    score: 0, 
    currentGame: [],
    playerMoves: [],
    choices: []
}


/**exports används i Node.js för att exportera en modul. 
I detta fall exporteras ett objekt som har en egenskap med namnet game,
och värdet av den egenskapen är det värde som är associerat med variabeln game i din kod.*/
module.exports = { game };