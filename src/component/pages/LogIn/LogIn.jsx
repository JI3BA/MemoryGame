import React, { useState } from "react";
import { useEffect } from "react";
import MyButton from "../../MyButton";
import './LogIn.css'

const LogIn = () => {
    const [level,setLevel] = useState('Selection')
    const [formValid, setFormValid] = useState(false)
    const [changeValue, setChangeValue] = useState('')
    const [nickDirty, setNickDirty] = useState(false)
    const [errorNick, setErrorNick] = useState('Введите правильно своё имя!')
    
    const nameHandler = (e) => {
        setChangeValue(e.target.value)
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

    const handlerSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if((level === 'Easy' || level === 'Average' || level === 'Hard') && nickDirty === false){
            setFormValid(true)
        }else{
            setFormValid(false)
        }
    }, [level, nickDirty])

    const changeLevel = (e) => {
        if(e.target.tagName !== 'BUTTON') return

        if(e.target.value === 'Easy'){
            setLevel(e.target.value)
            e.target.classList.add('button--active')
            if(e.target.nextElementSibling.classList.contains('button--active') || e.target.nextElementSibling.nextElementSibling.classList.contains('button--active')){
                e.target.classList.add('button--active')
                e.target.nextElementSibling.classList.remove('button--active')
                e.target.nextElementSibling.nextElementSibling.classList.remove('button--active')
            }
        }else if(e.target.value === 'Average'){
            setLevel(e.target.value)
            if(e.target.previousElementSibling.classList.contains('button--active') || e.target.nextElementSibling.classList.contains('button--active')){
                e.target.classList.add('button--active')
                e.target.previousElementSibling.classList.remove('button--active')
                e.target.nextElementSibling.classList.remove('button--active')
            }
            e.target.classList.add('button--active')
        }else if(e.target.value === 'Hard'){
            setLevel(e.target.value)
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
                    <input onBlur={e => blurHandler(e)} type="text" className="input" placeholder="Nickname" maxLength={15} value={changeValue} onChange={nameHandler}/>
                </div>
                <div className="login-level-container">
                    <p className="login-level">Game Level: {level}</p>
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