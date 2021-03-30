'use strict';
const products = document.querySelector('.products');
const template = document.querySelector('#product__template').content;
const cloneTemplate = template.querySelector('.cart__product');
const containerCarts = document.querySelector('.cart__products');

products.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let valueResult = target.closest('div.product').querySelector('.product__quantity-value');
    let imgTarget = target.closest('div.product').querySelector('.product__image').src;
    let targetId = target.closest('div.product').dataset.id;
    // console.log(targetId)
    if (target.classList.contains('product__quantity-control_inc')) {
        valueResult.textContent++;
    }
    if (target.classList.contains('product__quantity-control_dec')) {
        if (valueResult.textContent > 1) {
            valueResult.textContent--;
        }
    } 
    if (target.className === 'product__add') {
        if(containerCarts.children.length !==0) {
            Array.from(containerCarts.children).find((item) => {
                if (item.dataset.id === targetId) {
                  item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(valueResult.textContent);
                }
            })
        }
      let cloneFragmetn = cloneTemplate.cloneNode(true);
      let text = cloneFragmetn.querySelector('.cart__product-count');
      let img = cloneFragmetn.querySelector('.cart__product-image');
      cloneFragmetn.dataset.id = targetId;
      img.src = imgTarget;
      text.textContent = valueResult.textContent;
      containerCarts.appendChild(cloneFragmetn);
    }
}); 







