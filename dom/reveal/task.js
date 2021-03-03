const arrReveal = Array.from(document.getElementsByClassName('reveal'));
const reveal = document.querySelector('.reveal') 
window.addEventListener('scroll', function() {

    arrReveal.forEach(element => {
        if (element.getBoundingClientRect().y < 370) {
            element.classList.add('reveal_active')
        } 
    });
});