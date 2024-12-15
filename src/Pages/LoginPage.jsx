import React from 'react';
import './CSS/LoginPage.css'

const LoginPage = () => {
    return (
        <div className = 'loginpage'>
            <div className= "loginpage-container">
                <h1>Sign Up</h1>
                <div className = "loginpage-fields">
                    <input type = "text" placeholder='Your name:'/>
                    <input type = "email" placeholder='Email Address'/>
                    <input type = "password" placeholder='Password'/>

                    </div>
                    <button>Continue</button>
                    <p className = "loginpage-login">Already have an account?<span>-Log in here-</span></p>
                    <div className="loginpage-agree">
                        <input type = "checkbox" name="" id="" />
                        <p> I agree to the terms and conditions</p>
                    </div>

                </div>
        </div>
    );
};

export default LoginPage