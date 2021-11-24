import React, { useState, useEffect } from 'react';
import "./Time.scss";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("default", { hour: 'numeric', minute: 'numeric', hour12: true}));

    useEffect((_time) => {
        const id =  setInterval(() => setTime(new Date().toLocaleTimeString("default", { hour: 'numeric', minute: 'numeric', hour12: true})), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    
    let amPm = time.slice(-2);
    let newTime = time.replace(/am|pm/gi, "");
    return (
        <div className="time">
            {newTime}
            <span className="am-pm">{amPm}</span>
        </div>
    )
}

export default Time
