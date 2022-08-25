'use strict';

// Initializex`
let scoreLabel = document.querySelectorAll('.score');
let currentScoreLabel = document.querySelectorAll('.current-score');
let p1CurrentScoreLabel = document.querySelector('#current--0');
let p2CurrentScoreLabel = document.querySelector('#current--1');

const p0 = document.querySelector('.player--0');
const p1 = document.querySelector('.player--1');

let dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let diceNum;
let score = 0;
let p1Score = 0;
let p2Score = 0;
let p1CurrentScore = 0;
let p2CurrentScore = 0;

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

const settingScore = function(diceNum, currentPlayer){

        if (currentPlayer === 'p0'){
            if (diceNum === 1){
                p1CurrentScore === 0;
                p1CurrentScoreLabel.textContent = 0;
                switchPlayer();
            }
            else {
                p1CurrentScore += diceNum;
                p1CurrentScoreLabel.textContent = p1CurrentScore;
            }
        }


        if (currentPlayer === 'p1'){
            if (diceNum === 1){
                p2CurrentScore === 0;
                p2CurrentScoreLabel.textContent = 0;
                switchPlayer();
            }
            else {
                p2CurrentScore += diceNum;
                p2CurrentScoreLabel.textContent = p2CurrentScore;
            }
        }
}

const generateDice = function(){
        // Displaying dice
        dice.classList.remove('hidden');

        // Generating random dice
        diceNum = Math.ceil(Math.random()*6);
        dice.setAttribute('src',`dice-${diceNum}.png`)
}

// Resetting Game
const reset = function(){
    score = 0;

    for(let i=0; i<scoreLabel.length; i++){
        scoreLabel[i].textContent = score;
        currentScoreLabel[i].textContent = score;
    }

    dice.classList.add('hidden');
    p0.classList.add('player--active');
}

reset();
btnNew.addEventListener('click', reset)

// Roll Dice
btnRoll.addEventListener('click', function(){
    
    generateDice();
    settingScore(diceNum, currentPlayer());
})

// Hold
// hold.addEventListener('click', function hold(player){
//     // Checking score
//     if (p1CurrentScore >= 100){
//         scoreLabel.textContent = scoreLabel;
//         player.classList.add('player--winner');
//     }
//     else
//         switchPlayer();
    
// })









