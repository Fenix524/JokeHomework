// Переключення контенту кнопками
const btnPrevious = document.querySelector('.js-previous-joke');
const btnNext = document.querySelector('.js-next-joke');

// Масив з історією
let arrayWithHistory = [
    ['Жарт 1', 'Чому програмісти не люблять природу? Тому що вона має багато багів.'],
    ['Жарт 2', 'Як програмісти відпочивають? Вони закривають очі і виключаються.'],
    ['Жарт 3', 'Гроші не головне.. головне, щоб вони були.'],
    ['Жарт 4', 'Доросле життя - це коли кола під очима більші, ніж твоє коло спілкування..'],
    ['Жарт 5', 'Чому програмістам не подобається кидати м\'яч? Тому що вони бояться, що він не повернеться.']
]; 

// Індекс поточного жарту
let currentJokeIndex = 0;

// Змінна для тексту жарту
let jokeText = document.querySelector('.js-joke-text');
let jokeTitle = document.querySelector('.js-joke-title');

// Функція для оновлення тексту жарту
function updateJoke() {
    jokeText.textContent = arrayWithHistory[currentJokeIndex][1];
    jokeTitle.textContent = arrayWithHistory[currentJokeIndex][0];
}

// Обробники подій для кнопок
btnPrevious.addEventListener('click', function() {
    if (currentJokeIndex > 0) {
        currentJokeIndex--;
        updateJoke();
    }
});

btnNext.addEventListener('click', function() {
    if (currentJokeIndex < arrayWithHistory.length - 1) {
        currentJokeIndex++;
        updateJoke();
    }
});

// Оновлюємо текст жарту при завантаженні сторінки
updateJoke();
