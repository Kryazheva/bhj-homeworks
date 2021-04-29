'use strict';

const windowModal = document.querySelector('#subscribe-modal');
const btnClose = document.querySelector('.modal__close');

btnClose.addEventListener('click', () => {
    windowModal.classList.remove("modal_active");
    document.cookie = "status=active";
});

window.addEventListener('DOMContentLoaded', () => {
    if (!document.cookie.includes("status=active")) {
        windowModal.classList.add("modal_active");
        // console.log(document.cookie.includes("status=active"));
    }
});
