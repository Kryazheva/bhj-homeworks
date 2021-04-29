"use srtict";

const divSignin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
const btnSignin = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const spanUserId = document.querySelector('#user_id');

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.spanUserId) {
        divSignin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        spanUserId.textContent = localStorage.spanUserId;
    } else {
        divSignin.classList.add('signin_active');
    }
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
            let responseOk = xhr.response;
            console.log(responseOk);
            // console.log(typeof(responseOk))
            if (responseOk.success) {
                localStorage.spanUserId = responseOk.user_id;
                console.log(localStorage.spanUserId)
                spanUserId.textContent = localStorage.spanUserId; // localStorage.spanUserId = responseOk.user_id; ответ сервера 
                divSignin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
            }
            else {
                alert('Неверный логин/пароль');
                form.reset();
            }
        }
    }
    xhr.send(formData);
});