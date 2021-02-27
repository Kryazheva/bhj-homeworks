'use srtict';
const menuActive = document.querySelector('.dropdown__value');
const linkMenu = document.querySelectorAll('.dropdown__link');
const listMenu = document.querySelector('.dropdown__list');
const arrLinks = Array.from(linkMenu);

function clickOnDropdown () {
    listMenu.classList.add('dropdown__list_active');
};

arrLinks.forEach(elem => { 
    elem.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuActive.textContent = elem.textContent;
    listMenu.classList.remove('dropdown__list_active');
    });
});



menuActive.addEventListener("click", clickOnDropdown);