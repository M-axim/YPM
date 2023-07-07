const maxCurrent = 9; // макс.кол-во допустимого значения
const minCurrent = 1; // мин.кол-во допустимого значения

let products = document.querySelectorAll('.product__calc'); // находим все контейнеры калькуляторов
let finalPriceBlock = document.querySelector('.result span'); // находим блок куда бедет выводится итоговая цена

let totalPrice = 0;

function prices(current, priceItem, currentPrice) {
    priceItem.innerHTML = currentPrice * current.innerHTML; // вычитаем
    finalPriceBlock.innerHTML = totalPrice; // выводим получившуюся цену в блок цены
}

function plus(current, priceItem, currentPrice) {
    if (current.innerHTML != maxCurrent) {
        current.innerHTML++;

        totalPrice += parseInt(currentPrice); // слаживаем в итоговой цену цену за один элемент
        prices(current, priceItem, currentPrice);
    }
}

function minus(current, priceItem, currentPrice) {
    if (current.innerHTML != minCurrent) {
        current.innerHTML--;

        totalPrice -= parseInt(currentPrice); // вычитаем из итоговой цены цену за один элемент
        prices(current, priceItem, currentPrice);
    }
}

function varInitialization(product) {
    let minusBtn = product.children[0]; // находим кнопку со значение -
    let current = product.children[1]; // находим поле с текущем значением количества
    let plusBtn = product.children[2]; // находим кнопку со значение +
    let priceItem = product.children[3]; // находим поле 'цена за текущее значение'

    let currentPrice = parseInt(priceItem.innerHTML); // фиксируем цену текущего значение по умолчанию для каждого элемента

    totalPrice += currentPrice; // итоговая сумма
    finalPriceBlock.innerHTML = totalPrice;  // выводим результат

    minusBtn.addEventListener('click', function () { // при нажатии вызываем функцию minus
        minus(current, priceItem, currentPrice);
    });

    plusBtn.addEventListener('click', function () { // при нажатии вызываем функцию plus
        plus(current, priceItem, currentPrice);
    });

}

for (let i = 0; i < products.length; i++) { // выводим каждый элемент по отдельности
    let product = products[i]; // записываем их в одну переменную
    varInitialization(product) // выносим значение элементов в функцию инициализации
}