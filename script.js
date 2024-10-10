document.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded Я знающо ми не вчили 
    const images = document.querySelectorAll('img.lazy-load');


    const loadImage = (image) => {
        image.src = image.dataset.src; 
        image.classList.remove('lazy-load'); 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target); 
                observer.unobserve(entry.target); 
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});
