document.addEventListener('DOMContentLoaded', function () {
    const sliderInput = document.querySelector('.slider__input');
    const sliderImage = document.querySelector('.slider__image');
  
    
    const resizeImage = _.debounce(function (event) {
      const scale = event.target.value / 100; 
      sliderImage.style.transform = `scale(${scale})`; 
    }, 300); 
  
    sliderInput.addEventListener('input', resizeImage);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('box');
  

    const moveBox = _.debounce(function (event) {
      box.style.left = event.pageX + 'px';
      box.style.top = event.pageY + 'px';
    }, 100); 
  

    document.addEventListener('mousemove', moveBox);
  });
   