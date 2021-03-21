'use strict';
const arrInput = Array.from(document.getElementsByClassName('interest__check'));

arrInput.forEach(input => {
    input.addEventListener('change', (e) => {
        let checkboxes = e.target.closest('.interest').querySelectorAll('input[type="checkbox"]');

        if ( e.target.checked ) {
            checkboxes.forEach( element => {
                element.checked = true;
            });
            } else {
            checkboxes.forEach( element => {
                element.checked = false;
            });
        }
    })
});
