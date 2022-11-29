import React from 'react';
import bmw_logo from '../images/bmw_logo.webp';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <img className="logo" src={bmw_logo} alt="BMW Logo"></img>
        </div>
    );
};

export default Header;
