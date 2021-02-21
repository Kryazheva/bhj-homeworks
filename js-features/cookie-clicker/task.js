const quantityClicks = document.getElementById('clicker__counter');
const clickImage = document.getElementById('cookie');
clickImage.onclick = function() {
    if (clickImage.width == 200) {
        clickImage.width = 250;
    } else {
        clickImage.width = 200;
    }

    return quantityClicks.textContent++;
}