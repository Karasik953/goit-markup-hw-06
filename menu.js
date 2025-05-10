// Отримуємо елементи
const burgerButton = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-close');

// Відкриття мобільного меню
burgerButton.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

// Закриття мобільного меню
closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});