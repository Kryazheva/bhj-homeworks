// checkbox.indeterminate = true;
const arrLi = Array.from(document.querySelectorAll('.interest'));
const arrInput = Array.from(document.getElementsByClassName('interest__check'));
;

document.querySelector('.interests_main').onchange = (e) => {
  if (e.target.checked) {
    console.log(true)
    for (let input of arrInput) {
        console.log(input)
    }
  }
}
// не понимаю как присвоить им cheked = true/все вложены с одинаковыми классами и тегами 
// как передать полученного значения e.target следуещему элементу nextElementSibling
// Как ореинтироваться есди у нас есть еще ul class="interests interests_active" которые имеют детей с таким же классом interest
// читала ссылки, все равно не понятно