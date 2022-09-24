import React , { useState, useEffect } from "react";
import './Timer.css'

const Timer = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('40')

    useEffect(() => {
    //    setInterval(() => {
    //     if(seconds < 9){
    //         setSeconds('0' + String(Number(seconds) + 1))
    //     }else if(seconds >= 9 && seconds < 60){
    //         setSeconds(String(Number(seconds) + 1))
    //     }else if(seconds >= 60){
    //         setSeconds('00')
    //         setMinutes('0' + String(Number(minutes) + 1))
    //     }
    //    }, 1000)
    }, [hours, minutes, seconds])


    return(
        <div className="timer-container">
            <p className="timer timer-hours">{hours}<span>:</span></p>
            <p className="timer timer-minutes">{minutes}<span>:</span></p>
            <p className="timer timer-seconds">{seconds}</p>
        </div>
    )
}

export default Timer