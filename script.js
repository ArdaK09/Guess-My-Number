'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.guess').value)

let highScore = 0;
let score = 20;
let gameNumber = Math.floor(Math.random() * 20 + 1)
console.log("Num to guess:", gameNumber);

function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

const checkHandler = function() {
	const guess = Number(document.querySelector('.guess').value);
	
	if (guess === gameNumber){
		displayMessage("🎉 Congratulations, you got it!");
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '25rem';
		document.querySelector('.number').textContent = gameNumber;
		
		document.querySelector('.again').style.width = '30rem';
		document.querySelector('.again').style.fontSize = '4.5rem';
		
		// High score
		if(score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	}
	else if (guess > 20 || guess < 1){
		displayMessage("🚫 Enter a number 1-20");
		document.querySelector('.guess').value = '';
	}
	else if (guess > gameNumber){
		displayMessage("🔼 TOO HIGH");
		score--;
		document.querySelector('.score').textContent = score;
	}
	else if (guess < gameNumber){
		displayMessage("🔽 TOO LOW");
		score--;
		document.querySelector('.score').textContent = score;
	}
	
	if (score <= 0){ // Failed
		displayMessage("💥 You lose the game!");
		document.querySelector('body').style.backgroundColor = '#f00';
		document.querySelector('.number').textContent = gameNumber;
		document.querySelector('.score').textContent = 0;
		// Remove the option to keep playing by removing the "Check" button
		document.querySelector('.check').disabled = true;
		
		document.querySelector('.again').style.width = '30rem';
		document.querySelector('.again').style.fontSize = '4.5rem';
	}
};

const againHandler = function () {
  score = 20;
  gameNumber = Math.floor(Math.random() * 20) + 1;
  console.log("Num to guess:", gameNumber);
  
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  
  document.querySelector('.guess').value = '';
  
  document.querySelector('body').style.backgroundColor = '#222';
  
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  
  document.querySelector('.again').style.width = '180px';
  document.querySelector('.again').style.fontSize = '20px';
  document.querySelector('.check').disabled = false;
};

// Check
document.querySelector('.check').addEventListener('click', checkHandler);

// Again
document.querySelector('.again').addEventListener('click', againHandler);