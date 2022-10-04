import React, { useState } from "react";
import '../styles/MyInput.css'

const MyInput = () => {
    const [changeValue, setChangeValue] = useState('')
    const [nickDirty, setNickDirty] = useState(false)
    const [errorNick, setErrorNick] = useState('Введите правильно своё имя!')

    const nameHandler = (e) => {
        setChangeValue(e.target.value)
    }

    const blurHandler = (e) => {
        if(e.target.value.length < 2){
            setNickDirty(true)
        }else{
            setNickDirty(false) 
        }
    }

    return (
        <div className="input-container">
            {nickDirty ? <div className='input--error'>{errorNick}</div> : <div style={{height: '50px'}}></div>}
            <input onBlur={e => blurHandler(e)} type="text" className="input" placeholder="Nickname" maxLength={15} value={changeValue} onChange={nameHandler}/>
        </div>
    )
}

export default MyInput