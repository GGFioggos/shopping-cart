import React from 'react';

const CartItem = (props) => {
    const { name, image, price, quantity } = props.car;
    const increaseQuantity = props.increaseQuantity;
    const decreaseQuantity = props.decreaseQuantity;

    const handleChange = (e) => {};

    return (
        <div className="cart-item">
            <img className="carimg" src={image} alt="Car"></img>
            <div className="car-info">
                <div>
                    <div className="title">{name}</div>
                    <div className="price">Price: {price + '$'}</div>
                </div>
                <div className="quantity">
                    <button
                        className="quantity-decrease"
                        onClick={decreaseQuantity.bind(this, props.car)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 10h24v4h-24z"></path>
                        </svg>
                    </button>
                    <input
                        onChange={handleChange}
                        type="number"
                        className="cart-quantity"
                        value={quantity}
                    ></input>
                    <button
                        className="quantity-increase"
                        onClick={increaseQuantity.bind(this, props.car)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
