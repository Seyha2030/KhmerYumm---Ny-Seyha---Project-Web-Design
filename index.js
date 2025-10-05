const testimonials = document.querySelectorAll(".testimonial-card");
let currentIndex = 0;
const visibleCards = 2; // show 2 at a time

function showSlide(index) {
  testimonials.forEach((card, i) => {
    if (i >= index && i < index + visibleCards) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex - visibleCards + testimonials.length) % testimonials.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + visibleCards) % testimonials.length;
  showSlide(currentIndex);
}

// Initialize
showSlide(0);






