import React, { useState } from 'react';
import '../styles/Cart.css';
import CartItem from './CartItem';
import close from '../images/close.png';

const Cart = (props) => {
    const cart = props.cart;
    const increaseQuantity = props.increaseQuantity;
    const decreaseQuantity = props.decreaseQuantity;
    const handleClick = props.handleClick;
    const isCartShown = props.isCartShown;
    const total = props.total;

    let empty = cart.length > 0 ? '' : 'Cart is empty';

    return (
        <div
            className="cart"
            style={{
                visibility: isCartShown ? 'visible' : 'hidden',
                transform: isCartShown
                    ? 'translate(-36vw,0)'
                    : 'translate(36vw,0)',
            }}
        >
            <div className="cart-title">Your Cart</div>
            <button onClick={handleClick} className="close-cart">
                <img src={close} alt="close cart"></img>
            </button>
            <div className="empty-message">{empty}</div>
            {cart.map((car, index) => {
                return (
                    <CartItem
                        car={car}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        key={index}
                    ></CartItem>
                );
            })}
            <div className="total">Total: {total}$</div>
            <div className="checkout">
                <button>CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;
