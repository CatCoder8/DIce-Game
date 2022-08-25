'use strict';

// Initialize
let p1Score = document.querySelector('#score--0');
let p2Score = document.querySelector('#score--1');  
let p1CurrentScore = document.querySelector('#current--0');  
let p2CurrentScore = document.querySelector('#current--1');  
let scoreLabel = document.querySelectorAll('.score');
let currentScoreLabel = document.querySelectorAll('.current-score');
let p1CurrentScoreLabel = document.querySelector('#current--0');
let p2CurrentScoreLabel = document.querySelector('#current--1');

const player = document.querySelector('.player');
const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');

let dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let diceNum;
let score = 0;
let currentScore = 0;

const switchPlayer = function() {     
    if (p0.classList.contains('.player--active')){
        p0.classList.remove('.player--active')
        p1.classList.add('.player--active');
    }
    else {
        p1.classList.remove('.player--active')
        p0.classList.add('.player--active');
    }       
}

// FIX classList contains

const currentPlayer = function(){
    if(p0.classList.contains('.player--active'))
        return 'p1';
    else 
        return 'p0';
}

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
btnNew.addEventListener('click', reset)

// Roll Dice
btnRoll.addEventListener('click', function(){
    
    // Displaying dice
    dice.classList.remove('hidden');

    // Generating random dice
    diceNum = Math.ceil(Math.random()*6);
    dice.setAttribute('src',`dice-${diceNum}.png`)

    // Setting score
    if (diceNum != 1){
        if (currentPlayer() === 'p0')  {
            currentScore += diceNum;
            p1CurrentScoreLabel.textContent = currentScore;
        }
        
        if (currentPlayer() === 'p1') {
            currentScore += diceNum;
            p2CurrentScoreLabel.textContent = currentScore;
        }
    }

    if (diceNum === 1){
        currentScore === 0;
        currentScoreLabel.textContent === '0';
        switchPlayer();
    }
})

// Hold
// hold.addEventListener('click', function hold(player){
//     // Checking score
//     if (currentScore >= 100){
//         scoreLabel.textContent = scoreLabel;
//         player.classList.add('player--winner');
//     }
//     else
//         switchPlayer();
    
// })








