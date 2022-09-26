import React , { useState, useEffect } from "react";
import './Timer.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [mseconds, setMseconds] = useState(0)

    useEffect(() => {
        let addTimer = setTimeout(function tick(){
            setMseconds(mseconds + 1)
            if(mseconds === 99){
                setMseconds(0)
                setSeconds(seconds + 1)
            }
            if(seconds === 59){
                setSeconds(0)
                setMinutes(minutes + 1)
            }
            addTimer = setTimeout(tick, 1)
        }, 1)

        return () => clearTimeout(addTimer)
    }, [mseconds, minutes, seconds])

    return(
        <div className="timer-container">
            <p className="timer timer-minutes">{minutes < 10 ? '0' + minutes : minutes}<span>:</span></p>
            <p className="timer timer-seconds">{seconds < 10 ? '0' + seconds : seconds}<span>:</span></p>
            <p className="timer timer-mseconds">{mseconds < 10 ? '0' + mseconds : mseconds}</p>
        </div>
    )
}

export default Timer