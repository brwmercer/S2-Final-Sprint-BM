import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/CSS/Shopcategory';
import Product from './Pages/Products';
import Cart from './Pages/CartPage';
import ItemDetails from './Pages/ItemDetails';
import PaymentPage from './Pages/PaymentPage';
import Login from './Pages/LoginPage';
import ShopContextProvider from './Context/ShopContext'; 

function App() {
    return (
        <ShopContextProvider>
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='/tickets' element={<Shopcategory category="ticket" />} />
                        <Route path='/apparel' element={<Shopcategory category="apparel" />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/:productId' element={<Product />} />
                        <Route path='/item/:id' element={<ItemDetails />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ShopContextProvider>
    );
}

export default App;
