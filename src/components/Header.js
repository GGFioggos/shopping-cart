import React from 'react';
import { Link } from 'react-router-dom';
import bmw_logo from '../images/bmw_logo.webp';
import cart from '../images/cart.png';
import '../styles/Header.css';

const Header = (props) => {
    const isCartShown = props.isCartShown;

    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
            <Link to="/">
                <img className="logo" src={bmw_logo} alt="BMW Logo"></img>
            </Link>
            <button onClick={isCartShown} className="show-cart">
                <div>Cart: {props.itemsInCart}</div>
                <img src={cart} alt="cart-icon"></img>
            </button>
        </div>
    );
};

export default Header;
