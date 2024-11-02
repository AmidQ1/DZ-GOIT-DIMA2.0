// task 1
const sliderInp = document.querySelector(".slider__input");
const sliderImg = document.querySelector(".slider__img");

const sizeImg = _.throttle(function (e) {
  const scale = e.target.value / 100;
  sliderImg.style.transform = `scale(${scale})`;
}, 300);

sliderInp.addEventListener("input", sizeImg);

// task 2
const box = document.querySelector(".box");

const moveBox = _.throttle(function (e) {
  box.style.left = e.pageX + "px";
  box.style.top = e.pageY + 50 + "px";
  // Я додав до висоти 50 для того, щоб не заважала для першого завдання 
}, 100);

document.addEventListener("mousemove", moveBox);
