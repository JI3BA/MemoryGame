import React from "react";
import '../styles/MyInput.css'

const MyInput = () => {
    return (
        <input type="text" className="input" placeholder="Nickname" maxLength={15} />
    )
}

export default MyInput