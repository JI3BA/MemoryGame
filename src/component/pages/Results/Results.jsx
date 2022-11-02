import React from "react";
import '../Results/Result.css'
import Navbar from '../../NavBar/Navbar'
import { useSelector } from "react-redux";

const Results = () => {
    const users = useSelector(state => state.users.users)

    return(
        <div className="result">
            <Navbar />
            <div className="result-container">
                <h1 className="result-top">Last Players</h1>
                <div className="result-table">
                    {users.map((item, index) => 
                        <div  key={index} className="result-user">
                            <p className="result-info result-info-name">Name: {item.name}</p>
                            <p className="result-info result-info-level">Level: {item.level}</p>
                            <p className="result-info result-info-time">Time: {item.time}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Results