import React from "react";
import '../styles/MyButton.css'

const MyButton = ({children}) => {
    return (
        <input type='button' className="button" value={children} />
    )
}

export default MyButton