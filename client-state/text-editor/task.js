'use strict';

const textEditor = document.querySelector('#editor');
const clearButton = document.querySelector('.clear__button');

textEditor.addEventListener('input', () => {
    localStorage.setItem('value', textEditor.value);
});

window.addEventListener('load', () => {
    textEditor.value = localStorage.getItem('value');
});

clearButton.addEventListener('click', () => {
    localStorage.clear();
    textEditor.value = '';
});