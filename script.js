'use strict';

// Initialize
let scoreLabel = document.querySelectorAll('.score');
let currentScoreLabel = document.querySelectorAll('.current-score');
let p1ScoreLabel = document.querySelector('#score--0')
let p2ScoreLabel = document.querySelector('#score--1')
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
    if (p0.classList.contains('player--active')){
        p0.classList.remove('player--active')
        p1.classList.add('player--active');
    }
    else {
        p1.classList.remove('player--active')
        p0.classList.add('player--active');
    }       
}

const currentPlayer = function(){
    if(p0.classList.contains('player--active'))
        return 'p0';
    else 
        return 'p1';
}

const p1Reset = function(){
    p1CurrentScore = 0;
    p1CurrentScoreLabel.textContent = 0;
    switchPlayer();
}
const p2Reset = function(){
    p2CurrentScore = 0;
    p2CurrentScoreLabel.textContent = 0;
    switchPlayer();
}

const settingScore = function(diceNum, currentPlayer){

        if (currentPlayer === 'p0'){
            if (diceNum === 1)
                p1Reset();
            else {
                p1CurrentScore += diceNum;
                p1CurrentScoreLabel.textContent = p1CurrentScore;
            }
        }

        if (currentPlayer === 'p1'){
            if (diceNum === 1)
                p2Reset();
            else {
                p2CurrentScore += diceNum;
                p2CurrentScoreLabel.textContent = p2CurrentScore;
            }
        }
}

const holdingScore = function(currentPlayer){

        if (currentPlayer === 'p0'){
            if (p1Score < 100){
                p1Score += p1CurrentScore;
                p1ScoreLabel.textContent = p1Score;
                p1Reset();
            }
            if (p1Score >= 100) {
                p1ScoreLabel = p1Score;
                p0.classList.add('player--winner');
            }
        }

        if (currentPlayer === 'p1'){
            if (p2Score < 100){
                p2Score += p2CurrentScore;
                p2ScoreLabel.textContent = p2Score;
                p2Reset();
            }
            if (p2Score >= 100) {
                p2ScoreLabel = p2Score;
                p1.classList.add('player--winner');
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

// Buttons
btnNew.addEventListener('click', reset)

btnRoll.addEventListener('click', function(){
    generateDice();
    settingScore(diceNum, currentPlayer());
})

btnHold.addEventListener('click', function(){
    holdingScore(currentPlayer());
})