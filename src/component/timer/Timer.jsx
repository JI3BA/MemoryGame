import React , { useState, useEffect } from "react";
import './Timer.css'

const Timer = ({active}) => {
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTime((prev) => prev + 10);
            }, 10);
        }else if(!active) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active]);

    return(
        <div className="timer">
            <div className="timer-container">
                <p className="timer-time timer-minutes"><span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span><span>:</span></p>
                <p className="timer-time timer-seconds"><span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span><span>:</span></p>
                <p className="timer-time timer-mseconds"><span>{("0" + ((time / 10) % 100)).slice(-2)}</span></p>
            </div>
        </div>
    )
}

export default Timer