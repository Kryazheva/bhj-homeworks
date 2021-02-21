const modalMain = document.getElementById('modal_main');
const modalSucces = document.getElementById('modal_success');
const modalClose = Array.from(document.querySelectorAll('.modal__close'));
console.log(modalClose.length);
const showSuccess = document.querySelector('.show-success');


for (let close of modalClose) {
    close.onclick = function () {
        console.log(close)
        if (modalMain.classList.contains('modal_active')) {
            modalMain.classList.remove('modal_active');
        } 
        if (modalSucces.classList.contains('modal_active')) {
            modalSucces.classList.remove('modal_active');
        }
    }
}




showSuccess.onclick = function(){
    modalMain.classList.remove('modal_active');
    modalSucces.classList.add('modal_active');
}