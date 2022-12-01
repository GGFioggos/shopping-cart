import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Shop.css';
import CarsDisplay from '../components/CarsDisplay';
const Shop = () => {
    return (
        <div>
            <Header />
            <CarsDisplay />
        </div>
    );
};

export default Shop;
