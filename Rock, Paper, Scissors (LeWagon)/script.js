// -- Declaring our variables --
const choices = ['✊', '🤚', '✌️'];

const player1 =  document.getElementById("player_1");

const player2 = document.getElementById("player_2");

const resultArea = document.getElementById("result_area");

const playButton = document.getElementById("play_button")

// -- Choose a sign --

function chooseRandomSign() {
    let r = Mathfloor(Math.random() * 3);
    return choices[r]
}

function displayGame(player1Choice, player2Choice, result) {
    player1.innerHTML = player1Choice;
    player2Choice.innerHTML = player2Choice;
    resultArea.innerHTML = result;
};

// -- Decide the winner --
function decideWinner() {
    
}

// -- Run the game --
function play() {
    console.log("fonction play")
    let player1Choice = chooseRandomSign();
    let player2Choice = chooseRandomSign();
    let result = decideWinner(player1Choice, player2Choice);
}

// -- Listening to the Play Button --
play_button.addEventListener("click", play())