"use strict";
//selecting Elements
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let gameRules = document.querySelector(".btn--rule");
let modal = document.querySelector(".help");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close-help");
let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
let diceRoll = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");
let current0El = document.querySelector("#current--0");
let current01El = document.querySelector("#current--1");

//starting games conditions

let activePlayer, score, currentScore, playing;

let init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current01El.textContent = 0;
  current0El.textContent = 0;

  diceRoll.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

//switch player function
let switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//roll btn
btnRoll.addEventListener("click", () => {
  if (playing) {
    //Generating Random Dice
    let dice = Math.trunc(Math.random() * 6) + 1;

    //display  dice Roll
    diceRoll.classList.remove("hidden");
    diceRoll.src = `./images/dice-${dice}.png`;

    //check for the rolled 1:if it's true switch to the next player
    if (dice !== 1) {
      //add to the current dice
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }

  //
});

//hold btn function
btnHold.addEventListener("click", () => {
  if (playing) {
    //add current score to the total score
    score[activePlayer] = score[activePlayer] + currentScore;
    console.log(score[activePlayer]);
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    //if score>=100 sho the winner
    if (score[activePlayer] >= 100) {
      playing = false;
      diceRoll.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
//new game
btnNew.addEventListener("click", init);

//game rules functions
gameRules.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
// close
close.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
