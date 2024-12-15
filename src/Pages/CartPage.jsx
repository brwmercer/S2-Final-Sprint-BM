import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CartPage.css'; 
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { allproduct, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handlePayNow = () => {
        navigate('/payment'); 
    };

    const calculateTotal = () => {
        let total = 0;
        for (const [id, quantity] of Object.entries(cartItems)) {
            const item = allproduct[id];
            total += item.new_price * quantity;
        }
        return total.toFixed(2);
    };

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Your Cart</h1>
            </div>
            <div className="cart-items">
                {allproduct.map((item, index) => {
                    if (cartItems[index] > 0) {
                        return (
                            <div className="cart-item" key={item.id}>
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <p>{item.name}</p>
                                    <p className="cart-item-price">${item.new_price}</p>
                                    <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>
                                </div>
                                <p className="cart-item-quantity">{cartItems[index]}</p>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cart-total">
                <span>Subtotal: ${calculateTotal()}</span>
                <span>Tax: ${(calculateTotal()*0.15).toFixed(2)}</span>
                <span>Total: ${(calculateTotal()*1.15).toFixed(2)}</span>

                <button onClick={handlePayNow} className="pay-now-button">Pay Now</button>
            </div>
        </div>
    );
};

export default CartPage;
