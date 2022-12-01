import React, { useState } from 'react';
import '../styles/CarsDisplay.css';

const CarCard = (props) => {
    const { name, image, description, price } = props.car;

    return (
        <div className="car-card">
            <img className="carimg" src={image} alt="Car"></img>
            <div className="car-info">
                <div className="title">{name}</div>
                <div className="description">{description}</div>
                <div className="price">Price: {price + '$'}</div>
                <button onClick={props.addToCart.bind(this, props.car)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default CarCard;
