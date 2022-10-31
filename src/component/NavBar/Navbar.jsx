import React from "react";
import { useDispatch } from "react-redux";
import '../NavBar/Navbar.css'

const Navbar = () => {
    const dispatch = useDispatch()

    const logOutUser = () => {
        dispatch({type: 'ADD_AUTH', payload: false})
    }

    return (
        <header className="navbar">
            <div className="navbar-container">
                <button className="btn btn-change" onClick={logOutUser}>LogOut</button>
            </div>
        </header>
    )
}

export default Navbar