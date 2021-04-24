'use strict';
const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

let answer = xhr;
// console.log(answer)

xhr.onreadystatechange = () => {
    let responseData;
    if (xhr.readyState === 4 && xhr.status === 200) {
        responseData = xhr.response.data.answers;
        title.textContent = xhr.response.data.title;
        console.log(typeof(responseData));
        console.log(responseData);
        responseData.forEach(item => {
           answers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer"> ${item} </button> `);
        });
    }
};

answers.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        alert('спасибо, Ваш голос засчитан!');
    }
});