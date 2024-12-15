import React, { useState } from 'react'; 
import "./Navbar.css";
import logo from '../Assets/moose.png';
import cart_icon from '../Assets/cart.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop"); 

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Shop Logo" style={{ width: '300px', height: 'auto' }} />
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("home") }}>
                    <Link style={{textDecoration: 'none'}}to='/'>Home</Link>
                    {menu === "home" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("tickets") }}>
                    <Link style ={{textDecoration: 'none'}} to='/tickets'>Tickets</Link>
                    {menu === "tickets" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("apparel") }}>
                    <Link style ={{textDecoration: 'none'}} to='/apparel'>Apparel</Link>
                    {menu === "apparel" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Log In</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="Cart Icon" style={{ width: '50px', height: 'auto' }} />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar; 
