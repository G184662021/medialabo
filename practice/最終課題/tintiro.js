let playerCount;
let currentPlayer = 1;
let scores = [];

function startGame() {
  playerCount = parseInt(document.getElementById("playerCount").value);
  initializeScores();
  document.getElementById("playerSelection").style.display = "none";
  document.getElementById("gameScene").style.display = "block";
  displayPlayerTurn();
}

function initializeScores() {
  scores = [];
  for (let i = 0; i < playerCount; i++) {
    scores.push(0);
  }
}

function rollDice() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dice3 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice1").src = `img/dice${dice1}.png`;
  document.getElementById("dice2").src = `img/dice${dice2}.png`;
  document.getElementById("dice3").src = `img/dice${dice3}.png`;

  const result = calculateResult(dice1, dice2, dice3);
  scores[currentPlayer - 1] += result;

  displayResult(result);
  nextPlayer();
}

function calculateResult(dice1, dice2, dice3) {
  const diceSum = dice1 + dice2 + dice3;
  if (dice1 === dice2 && dice2 === dice3) {
    return diceSum === 18 ? 5 : 4;
  } else if (dice1 === dice2 || dice2 === dice3 || dice1 === dice3) {
    return 2;
  } else if (diceSum === 3 || diceSum === 18) {
    return 3;
  } else if (dice1 !== dice2 && dice2 !== dice3 && dice1 !== dice3) {
    return -1;
  } else {
    return 0;
  }
}

function displayResult(result) {
  document.getElementById("result").textContent = `得点：${result}点`;
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer > playerCount) {
    endGame();
  } else {
    displayPlayerTurn();
  }
}

function displayPlayerTurn() {
  document.getElementById("ranking").textContent = "";
  document.getElementById("result").textContent = "";
}

function endGame() {
  document.getElementById("diceContainer").style.display = "none";
  document.getElementById("ranking").textContent = "ゲーム終了！ 順位：";

  const sortedScores = [...scores].sort((a, b) => b - a);
  for (let i = 0; i < playerCount; i++) {
    const player = scores.indexOf(sortedScores[i]) + 1;
    document.getElementById("ranking").textContent += ` プレイヤー${player}`;
  }
}
