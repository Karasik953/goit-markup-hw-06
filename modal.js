// Отримуємо елементи
const backdrop = document.querySelector('.backdrop');
const modalCloseButton = document.querySelector('.modal-btn');

// Функція для закриття модального вікна
function closeModal() {
    backdrop.classList.remove('is-open'); // Забираємо клас is-open
    backdrop.style.pointerEvents = 'none'; // Блокуємо кліки по бекдропу
}

// Додаємо слухач на кнопку з хрестиком
modalCloseButton.addEventListener('click', closeModal);