'use strict';
const arrLi = document.querySelector('.interest');
const arrInput = Array.from(document.getElementsByClassName('interest__check'));

arrInput.forEach(input => {
    input.addEventListener('change', (e) => {
        let checkboxes = e.target.closest('.interest').querySelectorAll('input[type="checkbox"]');

        if ( e.target.checked ) {
            checkboxes.forEach( el => {
                el.checked = true;
            });
            } else {
            checkboxes.forEach( el => {
                el.checked = false;
            });
        }
    })
});
