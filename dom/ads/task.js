const arrRotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
arrRotatorCase.forEach( (element) => {
    setInterval( () => {
     delElementOfArr(element);
        element.style.color = element.dataset.color;
    },element.dataset.speed);    
});

let delElementOfArr = (e) => {
    e.classList.contains('rotator__case_active') ? e.classList.remove('rotator__case_active') : e.classList.add('rotator__case_active');
};

