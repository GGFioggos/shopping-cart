import React from 'react';
import '../styles/Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cart = props.cart;
    const increaseQuantity = props.increaseQuantity;
    const decreaseQuantity = props.decreaseQuantity;

    return (
        <div className="cart">
            <div className="cart-title">Your Cart</div>
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
        </div>
    );
};

export default Cart;
