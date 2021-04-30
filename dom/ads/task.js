const arrRotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
const rotator = document.getElementsByClassName('rotator');
let active = arrRotatorCase.findIndex((value) => value.classList.contains('rotator__case_active'));

let getActiveElement = (arr) => {
    arr.forEach ((elem) => {
        delClass (arr);
        elem.style.color = elem.dataset.color;
    })
};

arrRotatorCase.forEach((elem) => {
    setInterval(() => {
        getActiveElement(arrRotatorCase);
    }, elem.dataset.speed);
});

let delClass = (arr) => {
  arr[active].classList.remove('rotator__case_active');
  active++;
  if (active === arr.length - 1) {
    active = 0;
  }
  arr[active].classList.add('rotator__case_active');
  return active;
};