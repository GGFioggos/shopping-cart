import React from 'react';
import bmw_logo from '../images/bmw_logo.webp';
import cart from '../images/cart.png';
import '../styles/Header.css';

const Header = (props) => {
    const isCartShown = props.isCartShown;

    return (
        <div className="header">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                <li>
                    <a href="/shop">Shop</a>
                </li>
            </ul>
            <a href="/">
                <img className="logo" src={bmw_logo} alt="BMW Logo"></img>
            </a>
            <button onClick={isCartShown} className="show-cart">
                <div>Cart: {props.itemsInCart}</div>
                <img src={cart} alt="cart-icon"></img>
            </button>
        </div>
    );
};

export default Header;
