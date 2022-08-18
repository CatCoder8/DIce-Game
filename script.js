'use strict';

// Initialize
let p1Score = document.querySelector('#score--0');
let p2Score = document.querySelector('#score--1');  

let scoreLabel = document.querySelectorAll('.score');
let currentScoreLabel = document.querySelectorAll('.current-score');

const player = document.querySelector('.player');

let dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');

let diceNum;
let score = 0;

// Resetting Game
const reset = function(){
    score = 0;

    for(let i=0; i<scoreLabel.length; i++){
        scoreLabel[i].textContent = score;
        currentScoreLabel[i].textContent = score;
    }

    dice.classList.add('hidden');
    player.classList.add('player--active');
}
reset();

newGame.addEventListener('click', reset)

// Roll Dice
roll.addEventListener('click', function(){
    
    // Displaying dice
    dice.classList.remove('hidden');

    // Generating random dice
    diceNum = Math.ceil(Math.random()*6);
    dice.setAttribute('src',`dice-${diceNum}.png`)
   
    // Setting score
    if (diceNum != 1){
        score += diceNum;
    }
})




