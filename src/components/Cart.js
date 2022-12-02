import React from 'react';
import '../styles/Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className="cart">
            <div className="cart-title">Your Cart</div>
            <CartItem car={cart[0]}></CartItem>
        </div>
    );
};

export default Cart;
