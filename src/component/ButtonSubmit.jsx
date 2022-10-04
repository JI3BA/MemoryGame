import React from 'react'
import '../styles/ButtonSubmit.css'

const ButtonSubmit = ({children}) => {
   
    return (
        <button type="submit" className="btn-submit">{children}</button>
    )
}

export default ButtonSubmit