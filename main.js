const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Atribuye la clase Current al elemento
  const current = document.querySelector('.current');
  // Remueve la clase Current del elemento
  current.classList.remove('current');
  // Verifica el siguiente elemento Slide
  if (current.nextElementSibling) {
    // Añade la clase current al siguiente elemento
    current.nextElementSibling.classList.add('current');
  } else {
    // Si el elemento slide es el utlimo, retorna la clase current al primer elemento
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Atribuye la clase Curret al elemento
  const current = document.querySelector('.current');
  // Remueve la clase Current del elemento
  current.classList.remove('current');
  // Verifica el anterior elemento Slide
  if (current.previousElementSibling) {
    // Añade la clase Current al elemento anterior
    current.previousElementSibling.classList.add('current');
  } else {
    // Si el elemento Slide es el primero, retorna la clase current al ultimo elemento 
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Comportamiento de los botones
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

//Slide Automatico
if(auto){
    //Pasa a la siguiente Slide en intervalo de tiempo
    slideInterval =setInterval(nextSlide, intervalTime);
}