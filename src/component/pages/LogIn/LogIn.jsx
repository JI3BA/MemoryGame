import React from "react";
import './LogIn.css'

const LogIn = () => {
    return (
        <div className="container">
            <div className="login-container">
                <input type="text" placeholder="Login" className="login-input"/>
                <div className="login-buttons-container">
                    <button className="login-button"></button>
                    <button className="login-button"></button>
                    <button className="login-button"></button>
                </div>
                <button className="login-button"></button>
            </div>
        </div>
    )
}

export default LogIn