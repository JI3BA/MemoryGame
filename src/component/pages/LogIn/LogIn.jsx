import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyButton from "../../MyButton";
import './LogIn.css'
import { addAuthAction } from "../../store/authReducer";
import { addUsersAction } from "../../store/usersReducer";
import { getLevelAction, getNameAction } from "../../store/logInReducer";

const LogIn = () => {
    const [formValid, setFormValid] = useState(false)
    const [nickDirty, setNickDirty] = useState(false)
    const [errorNick, setErrorNick] = useState('Введите правильно своё имя!')
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const getNickName = useSelector(state => state.logIn.name)
    const getLevel = useSelector(state => state.logIn.level)
    
    const nameHandler = (e) => {
        dispatch(getNameAction(e.target.value))
    }

    const blurHandler = (e) => {
        if(e.target.value.length < 2){
            setNickDirty(true)
            setErrorNick('Некорректное имя')
        }else{
            setNickDirty(false)
            setErrorNick('')
        }
    }

    const addUsers = () => {
        const users = {
            name: getNickName,
            level: getLevel,
        }

        dispatch(addUsersAction(users))
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(addAuthAction(true))
        addUsers()
        navigate('/field')
    }

    useEffect(() => {
        if((getLevel === 'Easy' || getLevel === 'Average' || getLevel === 'Hard') && nickDirty === false){
            setFormValid(true) 
        }else{
            setFormValid(false)
        }
    }, [getLevel, nickDirty, dispatch])

    const changeLevel = (e) => {
        if(e.target.tagName !== 'BUTTON') return

        if(e.target.value === 'Easy'){
            dispatch(getLevelAction(e.target.value))
            e.target.classList.add('button--active')
            if(e.target.nextElementSibling.classList.contains('button--active') || e.target.nextElementSibling.nextElementSibling.classList.contains('button--active')){
                e.target.classList.add('button--active')
                e.target.nextElementSibling.classList.remove('button--active')
                e.target.nextElementSibling.nextElementSibling.classList.remove('button--active')
            }
        }else if(e.target.value === 'Average'){
            dispatch(getLevelAction(e.target.value))
            e.target.classList.add('button--active')
            if(e.target.previousElementSibling.classList.contains('button--active') || e.target.nextElementSibling.classList.contains('button--active')){
                e.target.classList.add('button--active')
                e.target.previousElementSibling.classList.remove('button--active')
                e.target.nextElementSibling.classList.remove('button--active')
            }
        }else if(e.target.value === 'Hard'){
            dispatch(getLevelAction(e.target.value))
            e.target.classList.add('button--active')
            if(e.target.previousElementSibling.classList.contains('button--active') || e.target.previousElementSibling.previousElementSibling.classList.contains('button--active')){
                e.target.classList.add('button--active')
                e.target.previousElementSibling.classList.remove('button--active')
                e.target.previousElementSibling.previousElementSibling.classList.remove('button--active')
            }
        }
    }
    


    return (
        <div className="login">
            <form className="login-container">
                <div className="input-container">
                    {nickDirty ? <div className='input--error'>{errorNick}</div> : <div style={{height: '50px'}}></div>}
                    <input onBlur={e => blurHandler(e)} type="text" className="input" placeholder="Name" maxLength={15} value={getNickName} onChange={nameHandler}/>
                </div>
                <div className="login-level-container">
                    <p className="login-level">Game Level: {getLevel}</p>
                </div>
                <div className="login-buttons-container" onClick={changeLevel}>
                    <MyButton>Easy</MyButton>
                    <MyButton>Average</MyButton>
                    <MyButton>Hard</MyButton>
                </div>
                <button disabled={!formValid} type="submit" className="btn-submit" onClick={handlerSubmit}>Create</button>
            </form>
        </div>
    )
}

export default LogIn