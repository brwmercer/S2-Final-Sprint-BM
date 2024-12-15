// src/Components/ItemDetails.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ItemDetails.css';
import allproduct from '../Components/Assets/allproduct';

const ItemDetails = () => {
    const { id } = useParams();
    const { props } = useContext(ShopContext); 
    const [item, setItem] = useState(null);
    const {addToCart} = useContext(ShopContext);

    const handleAddToCart = () => {
        addToCart(item.id);
    };
    
    useEffect(() => {
        // Find the item using the id from the URL params
        const selectedItem = allproduct.find((product) => product.id === parseInt(id, 10));
        setItem(selectedItem);
    }, [id, props]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="item-details">
            <img className='details-img' src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Amount available: {item.quantity}</p>
            <div className="item-prices">
                <div className="item-price-new">${item.new_price}</div>
                <div className="item-price-old">${item.old_price}</div>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ItemDetails;
