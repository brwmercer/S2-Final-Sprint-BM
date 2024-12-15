import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
    const location = useLocation();
    const total = location.state?.total || 0; // Fallback to 0 if total is not available

    return (
        <div className="payment-page">
            <div className="payment-header">
                <h1>Payment Information</h1>
            </div>
            <form className="payment-form">
                <label htmlFor="name">Name on Card</label>
                <input type="text" id="name" placeholder="John Doe" required />

                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required />

                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" id="expiry" placeholder="MM/YY" required />

                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="123" required />

                <div className="payment-total">
                    <span>Total:</span>
                    <span>${total}</span> 
                </div>
                <button type="submit" className="submit-button">Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentPage;

