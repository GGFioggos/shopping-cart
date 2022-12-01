import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/Shop.css';
import CarsDisplay from '../components/CarsDisplay';
const Shop = () => {
    const [cart, setCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    useEffect(() => {
        setItemsInCart(cart.length);
    }, [cart]);

    return (
        <div>
            <Header itemsInCart={itemsInCart} />
            <CarsDisplay addToCart={addToCart} />
        </div>
    );
};

export default Shop;
