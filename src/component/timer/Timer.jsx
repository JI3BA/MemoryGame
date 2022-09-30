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
        <div className="timer-container">
            <p className="timer timer-minutes">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}<span>:</span></p>
            <p className="timer timer-seconds">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}<span>:</span></p>
            <p className="timer timer-mseconds">{("0" + ((time / 10) % 100)).slice(-2)}</p>
        </div>
    )
}

export default Timer