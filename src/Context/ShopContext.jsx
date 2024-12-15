import React, { createContext, useState } from 'react';
import allproduct from '../Components/Assets/allproduct';
import ItemDetails from '../Pages/ItemDetails';

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allproduct.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [products] = useState(allproduct);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1; 
            }
            if (newCart[itemId] === 0) {
                delete newCart[itemId]; // Remove the item if quantity reaches zero
            }
            return newCart;
        });
    };

    const contextValue = { allproduct: products, ItemDetails, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

console.log(allproduct);

