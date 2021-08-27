import React from 'react';
import "./ProgressBar.scss";

function ProgressBar() {
    const WEEKDAYS = ['S','M','T','W','T','F','S'];
    return (
        <div className="steps-bar d-flex flex-row">
            {WEEKDAYS.map((item, index) => {
                return ( 
                <div className="step">
                    <div className="step-bubble"></div>
                    <div key={index} className="step-label">{item}</div>
                </div>
                );
            
            })}
        </div>
    )
}

export default ProgressBar;
