import React from 'react';
import { Link } from 'react-router-dom';
import "./ProgressBar.scss";

function ProgressBar() {
    const WEEKDAYS = ['S','M','T','W','T','F','S'];
    return (
        <div className="progress-bar">
            <h2>Week Planner</h2>
            <div className="steps-bar d-flex flex-row">
                {WEEKDAYS.map((weekday, index) => {
                    return ( 
                        // add completed class only if the day is already completed
                    <Link to="/" key={index+weekday} className={`step ${index < new Date().getDay()? "completed" : ""}`}>
                        <div className="step-bubble"></div>
                        <div className="step-label">{weekday}</div>
                    </Link>
                    );
                
                })}
            </div>
        </div>
    )
}

export default ProgressBar;
