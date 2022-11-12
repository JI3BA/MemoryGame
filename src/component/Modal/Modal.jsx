import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Modal.css'
import { addUsersAction } from "../store/usersReducer";
import { useNavigate } from "react-router-dom";

const Modal = ({active, setActive}) => {
    const dispatch = useDispatch()
    const getName = useSelector(state => state.logIn.name)
    const getLevel = useSelector(state => state.logIn.level)
    const getMinute = useSelector(state => state.time.minute)
    const getSecond = useSelector(state => state.time.second)
    const getMsecond = useSelector(state => state.time.msecond)
    const navigate = useNavigate()

    const addUsers = () => {
        const users = {
            name: getName,
            level: getLevel,
            time: `${getMinute}:${getSecond}:${getMsecond}`
        }

        dispatch(addUsersAction(users))
    }

    
    useEffect(() => {
        if(active === true){
            addUsers()
        }
    }, [active])

    const resultsWindow = () => {
        navigate('/results')
    }
      

    return (
        <div className={active ? 'modal active' : 'modal'} >
            <div className={active ? 'modal-content active' : 'modal-content'} >
                <h1 className="modal-title">You win!</h1>
                <div className="modal-user-container">
                    <p className="modal-user modal-user__name">Name: {getName}</p>
                    <p className="modal-user modal-user__time">Time: {getMinute}:{getSecond}:{getMsecond}</p>
                </div>
                <div className="btn-container">
                    <button className='btn btn-retry' onClick={resultsWindow}>Results</button>
                </div>
            </div>
        </div>
    )
}

export default Modal