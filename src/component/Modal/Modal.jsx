import React from "react";
import { useSelector } from "react-redux";
import './Modal.css'

const Modal = ({active, setActive}) => {
    const getName = useSelector(state => state.logIn.name)
    const getMinute = useSelector(state => state.time.minute)
    const getSecond = useSelector(state => state.time.second)
    const getMsecond = useSelector(state => state.time.msecond)

    const refreshField = () => {
        window.location.reload()
    }
      

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h1 className="modal-title">You win!</h1>
                <div className="modal-user-container">
                    <p className="modal-user modal-user__name">Name: {getName}</p>
                    <p className="modal-user modal-user__time">Time: {getMinute}:{getSecond}:{getMsecond}</p>
                </div>
                <div className="btn-container">
                    <button className='btn btn-retry' onClick={refreshField}>Retry</button>
                </div>
            </div>
        </div>
    )
}

export default Modal