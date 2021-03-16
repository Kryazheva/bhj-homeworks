'use strict'
const hrefTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const active = document.querySelector('.tooltip');

document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'has-tooltip') {
        const position = e.target.getBoundingClientRect()
        active.style.left = position.left + 'px';
        active.style.top = position.bottom + 'px';
        active.textContent = e.target.title;
        active.classList.add('tooltip_active');
        console.log(active)
    }
})

document.body.addEventListener('mouseout', (e) => {
    if (e.target.className === 'has-tooltip') {
        active.classList.remove('tooltip_active');
    }
});
