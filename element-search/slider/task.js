'use srtict';
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let arrSelector = Array.from(document.getElementsByClassName('slider__item'));
let active = arrSelector.findIndex((value) => value.classList.contains('slider__item_active'));

next.onclick = () => {
    if (active > arrSelector.length - 1) {
        active = 0;
    }
        arrSelector[active].classList.remove('slider__item_active');
        active = active + 1;
        arrSelector[active].classList.add('slider__item_active'); 
}

prev.onclick = () => {
    if (active == -1) {
        active = arrSelector.length - 1;
    }
    arrSelector[active].classList.remove('slider__item_active');
    active = active - 1;
    arrSelector[active].classList.add('slider__item_active');
    
    
}
