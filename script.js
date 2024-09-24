document.addEventListener('DOMContentLoaded', function () {
    const sliderInput = document.querySelector('.slider__input');
    const sliderImage = document.querySelector('.slider__image');
  
    // Функція зміни розміру зображення
    const resizeImage = _.debounce(function (event) {
      const scale = event.target.value / 100; // Значення слайдера 1-100
      sliderImage.style.transform = `scale(${scale})`; // Масштабування зображення
    }, 300); // Затримка 300 мс
  
    sliderInput.addEventListener('input', resizeImage);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('box');
  
    // Функція переміщення блоку
    const moveBox = _.debounce(function (event) {
      box.style.left = event.pageX + 'px';
      box.style.top = event.pageY + 'px';
    }, 100); // Затримка 100 мс
  
    // Обробник події переміщення мишки
    document.addEventListener('mousemove', moveBox);
  });
   