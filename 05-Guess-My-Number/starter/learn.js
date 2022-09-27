('use strict');
/*
//*Select element
const number = document.querySelector('.number');

//*SETTING VALUES TO THE HTML
number.textContent = '20';
number.id = 'findNumber';
const tipo = typeof number;

console.log(`This is the textContent :${number.textContent}`);
console.log(`This is the id: ${number.id}`);
console.log(`Tipo de datos : ${tipo}`);

number.addEventListener('click', function () {
  number.textContent = '?';
  console.log(`This is the now text content ${number.textContent}`);
});
*/
//*Save the data of the input and know if the value is tr
//Generate random number
const randomNumber = () => {
  const randomNumber = Math.round(Math.random() * 20 + 1);
  return randomNumber;
};

//Elements html
const inputValue = document.querySelector('.guess');
const buttonCheck = document.querySelector('.check');
const statusMessage = document.querySelector('.message');
const background = document.querySelector('body');
const buttonAgain = document.querySelector('.again');
const numberGuessed = document.querySelector('.number');
const labelScore = document.querySelector('.label-score');
const highscore = document.querySelector('.label-highscore');

const numberToGuess = randomNumber();

//Restart the game
buttonAgain.addEventListener('click', function () {
  location.reload();
});

//Verify number to guess
let tryes = 0;
let win;
let bestScore = 0;
let concurrentRecord = localStorage.getItem('bestScore');

if (background.className != 'win') {
  highscore.textContent = `🥇 Highscore: ${concurrentRecord}`;
}
buttonCheck.addEventListener('click', function () {
  const inputEntered = Number(inputValue.value);

  if (inputEntered === numberToGuess) {
    statusMessage.textContent = '🎉 Congratulations you guess the number!';
    numberGuessed.textContent = `${numberToGuess}`;
    background.className = 'win';
    highscore.textContent = `🥇 Highscore: ${bestScore}`;
    if (bestScore < localStorage.getItem('bestScore')) {
      localStorage.setItem('bestScore', bestScore);
    }
  }
  if (!win) {
    if (tryes <= 20) {
      labelScore.textContent = `💯 Score: ${20 - tryes}`;
    }
    if (inputEntered > numberToGuess) {
      statusMessage.textContent = '📈 Too high!';
    }
    if (inputEntered < numberToGuess) {
      statusMessage.textContent = '📉 Too low!';
    }
    if (tryes >= 20) {
      statusMessage.textContent = '💥 You loose!';
      background.className = 'loose';
    }
    if (inputEntered) {
      bestScore++;
      tryes++;
    } else {
      statusMessage.textContent = '⚠️ Enter a number:';
    }
    console.log(bestScore);
  }
});
