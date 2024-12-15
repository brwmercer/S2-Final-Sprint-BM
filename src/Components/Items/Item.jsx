import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext'; 
import './Item.css';
const Item = (props) => {
    const { addToCart } = useContext(ShopContext); 

    const handleAddToCart = () => {
        addToCart(props.id); 
    };

    return (
        <div className='item'>
            <Link to={`/item/${props.id}`}>
                <img src={props.image} alt='' />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">${props.new_price}</div>
                <div className="item-price-old">${props.old_price}</div>
            </div>
            <button onClick={handleAddToCart}>Add to Cart</button> 
        </div>
    );
};

export default Item;