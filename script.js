// task 1
const time1 = document.getElementById("timer1");
let seconds1 = 60 * 60;
const timerId1 = setInterval(function () {
  seconds1--;

  const hours = Math.floor(seconds1 / 3600);
  const minutes = Math.floor((seconds1 % 3600) / 60);
  const seconds = seconds1 % 60;
  time1.textContent = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (seconds1 === 30 * 60) {
    alert("Залишилось менше половини часу!");
  }

  if (seconds1 <= 0) {
    alert("Час вичерпано!");
    clearInterval(timerId1);
  }
}, 1000);

// task 2
const timerDisplay2 = document.getElementById("timer2");
const animatedText = document.getElementById("animatedText");
const startButton = document.getElementById("startButton");
let timeLeft = 30 * 1000; 

function startTimer2() {
  timeLeft = 30 * 1000; 
  startButton.classList.add("active-button"); 
  updateTimer2();
}

function updateTimer2() {
  const seconds = Math.floor(timeLeft / 1000); 
  const milliseconds = timeLeft % 1000; 

  timerDisplay2.textContent = `0:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;

  if (seconds <= 10 && seconds > 0) {
    animatedText.style.display = "block";
  } else {
    animatedText.style.display = "none";
  }

  if (timeLeft <= 0) {
    startButton.classList.remove("active-button");
    startButton.textContent = "Почати знову";
    return;
  }

  timeLeft -= 10; 
  setTimeout(updateTimer2, 10); 
}
startTimer2();