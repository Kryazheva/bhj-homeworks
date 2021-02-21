const divTimer = document.getElementById('status');
const timer = document.getElementById('timer');
const getTimer = function(time) {
    if (time.textContent == 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
    return time.textContent -= 1;
}

const timerInterval = setInterval(function() {
    getTimer(timer);
}, 1000);