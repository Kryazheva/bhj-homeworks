'use srtict';
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let arrSelector = Array.from(document.getElementsByClassName('slider__item'));
let active = arrSelector.findIndex((value) => value.classList.contains('slider__item_active'));

next.onclick = () => {
    arrSelector[active].classList.remove('slider__item_active');
    active++;
    if (active === arrSelector.length - 1) {
        active = 0;
    }
    arrSelector[active].classList.add('slider__item_active');
};

prev.onclick = () => {
    arrSelector[active].classList.remove('slider__item_active');
    active--;
    if (active < 0) {
        active = arrSelector.length - 1;
    }
    arrSelector[active].classList.add('slider__item_active');
};

