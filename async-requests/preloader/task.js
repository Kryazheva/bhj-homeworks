'use strict';
const forexConrainer = document.querySelector('#items');
// console.log(forexConrainer)
const imgLoader = document.querySelector('.loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = "json";
xhr.send();


xhr.onreadystatechange = () => {
    let forex;
    if (xhr.readyState === 4) {
        forex = xhr.response.response.Valute;
    }

    imgLoader.classList.toggle('loader_active');
    
    for (let forexItem in forex) {
        forexConrainer.insertAdjacentHTML("afterBegin",
        `<div class="item__code">${forex[forexItem].CharCode}</div>
        <div class="item__value">${forex[forexItem].Value}</div>
        <div class="item__currency">руб.</div>`);
    }
}

