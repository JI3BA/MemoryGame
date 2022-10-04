import React, { useState, useEffect } from "react";
import MyButton from "../../MyButton";
import MyInput from "../../MyInput";
import ButtonSubmit from "../../ButtonSubmit";
import './LogIn.css'

const LogIn = ({errorNick}) => {
    const [level,setLevel] = useState('Easy')
    const [formValid, setFormValid] = useState(false)

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
    
    useEffect(() => {
        if(errorNick){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
        console.log(errorNick);
    }, [errorNick])
    


    return (
        <div className="container">
            <form className="login-container">
                <MyInput />
                <div className="login-level-container">
                    <p className="login-level">Game Level: {level}</p>
                </div>
                <div className="login-buttons-container" onClick={changeLevel}>
                    <MyButton>Easy</MyButton>
                    <MyButton>Average</MyButton>
                    <MyButton>Hard</MyButton>
                </div>
                <ButtonSubmit disabled={!formValid} errornick={errorNick} >Create</ButtonSubmit>
            </form>
        </div>
    )
}

export default LogIn