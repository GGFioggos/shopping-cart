import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/Shop.css';
import CarsDisplay from '../components/CarsDisplay';
import Cart from '../components/Cart';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [isCartShown, setIsCartShown] = useState(false);
    const [total, setTotal] = useState(0);

    const handleClick = (event) => {
        setIsCartShown((current) => !current);
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((car) => {
            total += car.quantity * car.price;
        });
        setTotal(total);
    };

    const addToCart = (item) => {
        setCart([...cart, item]);

        let cartIndex = cart.findIndex((car) => car.name === item.name);

        if (cartIndex !== -1) {
            let newCart = [...cart];
            newCart[cartIndex].quantity = newCart[cartIndex].quantity + 1;
            setCart(newCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]);
        }
    };

    const increaseQuantity = (car) => {
        let index = cart.findIndex((cartItem) => cartItem.name === car.name);
        let newCart = [...cart];
        newCart[index].quantity = newCart[index].quantity + 1;
        setCart(newCart);
    };

    const decreaseQuantity = (car) => {
        let index = cart.findIndex((cartItem) => cartItem.name === car.name);
        let newCart = [...cart];
        if (newCart[index].quantity <= 1) {
            // REMOVE FROM CART
            newCart.splice(index, 1);
        } else {
            newCart[index].quantity = newCart[index].quantity - 1;
        }
        setCart(newCart);
    };

    useEffect(() => {
        setItemsInCart(cart.length);
        calculateTotal();
    }, [cart]);

    return (
        <div>
            <Header itemsInCart={itemsInCart} isCartShown={handleClick} />
            <CarsDisplay addToCart={addToCart} />
            <Cart
                cart={cart}
                handleClick={handleClick}
                isCartShown={isCartShown}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                total={total}
            />
        </div>
    );
};

export default Shop;
