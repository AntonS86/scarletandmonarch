'use strict';

import CartState from "./CartState";
import LocalStorageDataSaver from "./LocalStorageDataSaver";
import Cart from "./Cart";

export default () => {

    //создали состояние корзины
    const cartState = new CartState(new LocalStorageDataSaver());
    //создали корзину
    const cart = new Cart('#cartQuantity');
    //подписали корзину на состояние
    cartState.events.subscribe('update', cart);
    //инициализировали состояние
    cartState.init();

    const res = document.querySelectorAll('.product-tile .product-tile__product-cart-button');
    res.forEach((node) => {
        node.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.closest('.product-tile').dataset.productId;
            cartState.add({
                id,
                someProp: 'someProp'
            });
        });
    });
}