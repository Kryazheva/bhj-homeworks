const killMoles = document.getElementById('dead');
const nonHole = document.getElementById('lost');


getHole = index => document.getElementById(`hole${index}`);
for (index = 1; index < 9; index++) {
    this.onclick = function() {
        if (getHole(index).classList.contains('hole_has-mole')) {
            killMoles.textContent++;
        } else {
            nonHole.textContent++;
        }
    }
}