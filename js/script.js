

  document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".installment__item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
    
          const index = [...items].indexOf(entry.target);

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 300); 

          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2 
    });

    items.forEach(item => observer.observe(item));
  });
