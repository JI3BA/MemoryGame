import React from "react";
import '../styles/MyInput.css'

const MyInput = () => {
    return (
        <input type="text" className="input" placeholder="Login" maxLength={15}/>
    )
}

export default MyInput