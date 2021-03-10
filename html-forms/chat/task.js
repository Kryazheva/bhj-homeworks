const buttonChat = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const conteiner = document.getElementById('chat-widget__messages');
const template = document.querySelector('template').content;
const message = template.querySelector('.message');
const arrBotMessage = ['Добрый день!', 'Чем могу помочь', 'Мы вам перезвоним'];
// console.log(openChat)
// input.onfocus = (e) => {
//     console.log(e.target)
// };
let setLength = (i) => {
    if (i.value.length <= 0) {
        console.log(i.value);
        return false;
    };
};

let postBotMessage = (element, arr, cont) => {
    //   console.log(element.cloneNode(true))
    const arrTemplate = element.cloneNode(true);
    const time = arrTemplate.querySelector('.message__time');
    const text = arrTemplate.querySelector('.message__text');
    time.textContent = new Date().toTimeString();
    text.textContent = arr[Math.floor(Math.random() * arr.length)];
    cont.appendChild(arrTemplate);
};
    
let postClientMessage = (element, input, cont) => {
    const arrTemplate = element.cloneNode(true);
    const time = arrTemplate.querySelector('.message__time');
    const text = arrTemplate.querySelector('.message__text');
    time.textContent = new Date().toTimeString();
    text.textContent = input.value;
    cont.appendChild(arrTemplate);
};

buttonChat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
});

input.addEventListener('keydown', (e) => {
    setLength(input); //не работает, скорее всего нужно проверку делать при вызове функции postClientMessage, но тоже не срабатывает и как отменить отправку?
    if (e.code === 'Enter') {
     postClientMessage (message, input, conteiner);
     setTimeout(() => {
        postBotMessage(message, arrBotMessage, conteiner);
     }, 1000);
     input.value = '';   
    }   
});





