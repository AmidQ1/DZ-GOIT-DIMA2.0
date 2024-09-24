document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img.lazy-load');


    const loadImage = (image) => {
        image.src = image.dataset.src; 
        image.classList.remove('lazy-load'); 
    };

    // Ініціалізація Intersection Observer
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


    document.getElementById('loadImagesBtn').addEventListener('click', () => {
        images.forEach(image => {
            loadImage(image); 
        });
    });
});
