// ------------- SLIDER ---------------------
  
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let intervalId;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoplay() {
  intervalId = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  clearInterval(intervalId);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('pause-play').addEventListener('click', () => {
  if (document.getElementById('pause-play').textContent !='Play') {
    stopAutoplay();
    document.getElementById('pause-play').textContent = 'Play';
  } else {
    startAutoplay();
    document.getElementById('pause-play').textContent = 'Pause';
  }
});

startAutoplay();

// ---------------- CARDS MAIN PAGE --------------------
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.card-container');
  const leftBtn = document.querySelector('.scroll-left');
  const rightBtn = document.querySelector('.scroll-right');
  const cardWidth = document.querySelector('.card').offsetWidth;
  let scrollPosition = 0;

  function scrollLeft() {
    scrollPosition -= cardWidth; // 20 is the gap between cards
    scrollPosition = Math.max(scrollPosition, 0);
    container.style.transform = `translateX(-${scrollPosition}px)`;
  }

  function scrollRight() {
    const maxScroll = container.scrollWidth - container.clientWidth;
    scrollPosition += cardWidth;
    scrollPosition = Math.min(scrollPosition, maxScroll);
    container.style.transform = `translateX(-${scrollPosition}px)`;
  }

  leftBtn.addEventListener('click', scrollLeft);
  rightBtn.addEventListener('click', scrollRight);

  // Touch scrolling for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
  }, false);

  container.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      scrollRight();
    }
    if (touchEndX > touchStartX) {
      scrollLeft();
    }
  }
});


