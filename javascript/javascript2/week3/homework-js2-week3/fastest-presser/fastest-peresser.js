const startButton = document.getElementsByClassName('start-button')[0];
const resetButton = document.getElementsByClassName('reset-button')[0];
const scoreTextRight = document.getElementsByClassName('right-score')[0];
const scoreTextLeft = document.getElementsByClassName('left-score')[0];
const leftSide = document.getElementsByClassName('left-side')[0];
const rightSide = document.getElementsByClassName('right-side')[0];
const countdown =  document.getElementsByClassName("countdown")[0];
const input = document.getElementsByClassName('time-input')[0];


let countRight = 0;
let countLeft = 0;

function countScore(event) {
  if (event.key === 'l') {
    console.log('right');
    countRight += 1;
    scoreTextRight.innerHTML = `${countRight}`;
  }
  if (event.key === 's') {
    console.log('left');
    countLeft += 1;
    scoreTextLeft.innerHTML = `${countLeft}`;
  }
}

function showConfetti(side) {
  var confettiSettings = { target: `canvas-${side}` };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function clearConfetti() {
  const canvasElementLeft = document.getElementById(`canvas-left`);
  const canvasElementRight = document.getElementById(`canvas-right`);
  canvasElementLeft.style.display = 'none';
  canvasElementRight.style.display = 'none';
}

const showWinner = () => {
  if (countLeft === countRight && countLeft !== 0 && countRight !== 0) {
    alert('Same score');
  } else if (countLeft > countRight) {
    showConfetti('left');
  } else if (countLeft < countRight) {
    showConfetti('right');
  }
};

function start() {
  const inputValue = input.value;
  let time = parseInt(inputValue);
  if (!time) {
    alert('Please set seconds!');
  }
  const downloadTimer = setInterval(function(){
    if(time <= 0){
      clearInterval(downloadTimer);
      countdown.innerHTML = "Finished";
    } else {
      countdown.innerHTML = `${time} seconds remaining`;
    }
    time -= 1;
  }, 1000);
  setTimeout(showWinner, time * 1000);
}

function reset() {
  countLeft = 0;
  countRight = 0;
  scoreTextRight.innerHTML = '';
  scoreTextLeft.innerHTML = '';
  countdown.innerHTML = '';
  clearConfetti()
  input.value = ''
}

startButton.onclick = start;
startButton.onkeypress = countScore;
resetButton.onclick = reset;
