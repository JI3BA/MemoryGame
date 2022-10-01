import React from "react";
import MyButton from "../../MyButton";
import MyInput from "../../MyInput";
import './LogIn.css'

const LogIn = () => {
    return (
        <div className="container">
            <div className="login-container">
                <MyInput />
                <div className="login-buttons-container">
                    <MyButton>Easy</MyButton>
                    <MyButton>Average</MyButton>
                    <MyButton>Hard</MyButton>
                </div>
                <MyButton>Create</MyButton>
            </div>
        </div>
    )
}

export default LogIn