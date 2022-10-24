import React from "react";
import '../styles/MyButton.css'

const MyButton = ({children}) => {
    return (
        <button type="button" className="button" value={children}>{children}</button>
    )
}

export default MyButton