import React, { useState } from "react";
import MyButton from "../../MyButton";
import MyInput from "../../MyInput";
import './LogIn.css'

const LogIn = () => {
    const [level,setLevel] = useState('Easy')
    const [active, setActive] = useState(false)

    const changeLevel = (e) => {
        if(e.target.tagName !== 'INPUT') return

        if(e.target.value === 'Easy'){
            setLevel(e.target.value)
        }else if(e.target.value === 'Average'){
            setLevel(e.target.value)
        }else if(e.target.value === 'Hard'){
            setLevel(e.target.value)
        }
    }

    return (
        <div className="container">
            <div className="login-container">
                <MyInput />
                <div className="login-level-container">
                    <p className="login-level">Game Level: {level}</p>
                </div>
                <div className="login-buttons-container" onClick={changeLevel}>
                    <MyButton>Easy</MyButton>
                    <MyButton>Average</MyButton>
                    <MyButton>Hard</MyButton>
                </div>
                <MyButton>Create</MyButton>
            </div>
        </div>
    )
}

export default LogIn