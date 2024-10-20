// task 1
let int = 0;
const intervalId = setInterval(function () {
  int++;
  console.log(`Повідомлення номер ${int}`);

  if (int === 5) {
    clearInterval(intervalId);
    console.log("Таймер зупинено.");
  }
}, 1000);
// Я зробив це у вигляді консолі якщо треба alert я поміняю

// task 2
const blog = document.querySelectorAll(".box");
let interval = 0;

setInterval(function () {
  blog.forEach((blog, index) => {
    const newSize = Math.random() * 100 + 20;
    blog.style.width = `${newSize}px`;
    blog.style.height = `${newSize}px`;
    blog.style.top = `${Math.random() * (window.innerHeight - newSize)}px`;
    blog.style.left = `${Math.random() * (window.innerWidth - newSize)}px`;
  });
}, 1000);

// task 3
const totalDisplay = document.getElementById("total");
const target = document.querySelector(".target");
let total = 0;
let game = 10;

function moveTarget() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}
// Я взяв весь монітор як умовні позначки, чи було треба зробити в блоці?

target.addEventListener("click", function () {
  total++;
  totalDisplay.textContent = `Очки: ${total}`;
  moveTarget();
});

moveTarget();

const gameInterval = setInterval(function () {
  game--;
  if (game <= 0) {
    alert(`Ваші очки: ${total}`);
    clearInterval(gameInterval);
  }
}, 1000);

// task 4
const start = document.getElementById("start");
const timer = document.getElementById("time");

start.addEventListener("click", function () {
  const time = parseInt(timer.value);
  if (isNaN(time) || time <= 0) {
    alert("Введіть час у секундах.");
    return;
  }

  setTimeout(function () {
    alert("Час вичерпано!");
  }, time * 1000); 
});