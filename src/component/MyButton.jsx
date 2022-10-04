import React from "react";
import '../styles/MyButton.css'

const MyButton = ({children}) => {
    return (
        <button type="button" className="button">{children}</button>
    )
}

export default MyButton