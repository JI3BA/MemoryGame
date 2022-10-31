import React , { useState, useEffect } from "react";
import './Timer.css'
import { useDispatch } from "react-redux";

const Timer = ({active}) => {
    const [time, setTime] = useState(0);
    const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    const msec = ("0" + ((time / 10) % 100)).slice(-2)

    const dispatch = useDispatch()

    
    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTime((prev) => prev + 10);
            }, 10);
        }else if(!active) {
            clearInterval(interval);
        }
        dispatch({type: 'GET_MIN', payload: min})
        dispatch({type: 'GET_SEC', payload: sec})
        dispatch({type: 'GET_MSEC', payload: msec})
        return () => clearInterval(interval);

        
    }, [active, dispatch, min, sec, msec]);

    return(
        <div className="timer">
            <div className="timer-container">
                <p className="timer-time timer-minutes"><span>{min}</span><span>:</span></p>
                <p className="timer-time timer-seconds"><span>{sec}</span><span>:</span></p>
                <p className="timer-time timer-mseconds"><span>{msec}</span></p>
            </div>
        </div>
    )
}

export default Timer