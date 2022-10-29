import React from "react";
import { useSelector } from "react-redux";
import './Modal.css'

const Modal = ({active, setActive}) => {
    const getNickName = useSelector(state => state.name)

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h1 className="modal-title">You win!</h1>
                <p className="modal-info">{getNickName}</p>
            </div>
        </div>
    )
}

export default Modal