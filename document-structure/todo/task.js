'use strict';
const tamplate = document.querySelector('#todo_list').content;
const task = tamplate.querySelector('.task');
const container = document.querySelector('#tasks__list');
const input = document.querySelector('#task__input');
const form = document.querySelector('#tasks__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === '') {
        return false;
    }
    const cloneFragment = task.cloneNode(true);
    const taskText = cloneFragment.querySelector('.task__title');
    taskText.textContent = input.value;
    container.appendChild(cloneFragment);
})

container.addEventListener('click', (e) => {
    if (e.target.className === 'task__remove') {
        e.target.closest('div.task').remove();
    }
})