'use strict';
const tamplate = document.querySelector('#todo_list').content;
const task = tamplate.querySelector('.task');
const container = document.querySelector('#tasks__list');
const input = document.querySelector('#task__input');
const form = document.querySelector('#tasks__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //match(/^[ ]+$/) метод проверяет, если в тексте одни пробелы
    if (input.value === '' || input.value.match(/^[ ]+$/)) {
        return false;
    }   
    const cloneFragment = task.cloneNode(true);
    const taskText = cloneFragment.querySelector('.task__title');
    //метод trim удаляет пробел с начала и с конца строки
    taskText.textContent = input.value.trim();
    container.appendChild(cloneFragment);
    input.value = '';
})

container.addEventListener('click', (e) => {
    if (e.target.className === 'task__remove') {
        e.target.closest('div.task').remove();
    }
})

