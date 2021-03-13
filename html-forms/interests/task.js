'use strict';
const arrLi = document.querySelector('.interest');
const arrInput = Array.from(document.getElementsByClassName('interest__check'));

arrInput.forEach((input) => {
    input.addEventListener('change', (e) => {
        if (e.target.closest('li.interest')) {
            console.log('y')
        } 
    })
})