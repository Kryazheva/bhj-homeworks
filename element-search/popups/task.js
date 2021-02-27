const modalMain = document.getElementById('modal_main');
const modalSucces = document.getElementById('modal_success');
const modalClose = Array.from(document.querySelectorAll('.modal__close'));
const showSuccess = document.querySelector('.show-success');

let addClassShow = () => {
    modalMain.classList.add('modal_active');
}

setTimeout (addClassShow, 3000);

for (let close of modalClose) {
    close.onclick = function () {
        // console.log(close)
        if (modalMain.classList.contains('modal_active') || modalSucces.classList.contains('modal_active')) {
            modalMain.classList.remove('modal_active');
            modalSucces.classList.remove('modal_active');
        } 
    }
}

//клик по ссылке "Сделать хорошо", удаляет класс у модального окна "modal_main" и переходит класс следующему модальному окну
showSuccess.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSucces.classList.add('modal_active');
}