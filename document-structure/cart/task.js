'use strict';
const products = document.querySelector('.products');
const template = document.querySelector('#product__template').content;
const cloneTemplate = template.querySelector('.cart__product');
const containerCarts = document.querySelector('.cart__products');
let result = 1;
// console.log(typeof result);

products.addEventListener('click', (e) => {
    result = addNumber (e.target, result);
    let valueResult = e.target.closest('div.product').querySelector('.product__quantity-value');
    valueResult.textContent = result;
    if ( e.target.className === 'product__add') {
      const cloneFragmetn = cloneTemplate.cloneNode(true);
      const text = cloneFragmetn.querySelector('.cart__product-count');
      const img = cloneFragmetn.querySelector('.cart__product-image');
      const imgTarget = e.target.closest('div.product').querySelector('.product__image').src;
      img.src = imgTarget;
      text.textContent = result;
      containerCarts.appendChild(cloneFragmetn);
    }
});

const addNumber = (target, sum) => {
    if (target.classList.contains('product__quantity-control_inc')) {
        sum = sum + 1;
        return sum;
    }
    else if (target.classList.contains('product__quantity-control_dec')) {
        sum = sum - 1;
        return sum;
    } 
    return sum;
};





