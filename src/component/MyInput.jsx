import React, { useState} from "react";
import { useEffect } from "react";
import '../styles/MyInput.css'

const MyInput = () => {
    const [changeValue, setChangeValue] = useState({value: ''})

    const changeName = (e) => {
        setChangeValue({value: e.target.value})
    }

    useEffect(() => {
        if(changeName.value === ''){

        }
    }, [changeName])


    return (
        <input type="text" className="input" placeholder="Nickname" maxLength={15} value={changeValue.value} onChange={changeName}/>
    )
}

export default MyInput