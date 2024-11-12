const img = () => {
  const images = document.querySelectorAll("img.lazy-load");

  const load = (img) => {
      img.src = img.dataset.src; 
      img.onload = () => {
          img.classList.add('loaded'); 
      };
  };

  const observerOptions = {
      root: null, 
      threshold: 0.1, 
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              load(entry.target); 
              observer.unobserve(entry.target); 
          }
      });
  }, observerOptions);

  images.forEach(image => {
      imageObserver.observe(image); 
  });
};

img()