import React, { useState, useEffect } from 'react';
import "./Time.scss";

function Time() {
    const _time = new Date();
    const [time, setTime] = useState({
        hours : _time.getHours(),
        minutes: _time.getMinutes() < 10? "0" + _time.getMinutes()  : _time.getMinutes(),
        amOrPm : "am"
    });

    useEffect((_time) => {
        _time = new Date();
        const id =  setInterval(() => setTime({
            hours : _time.getHours(),
            minutes: _time.getMinutes() < 10? "0" + _time.getMinutes()  : _time.getMinutes(),
            amOrPm: _time.getHours() < 12? "am" : "pm"
        }), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    
    return (
        <div className="time"> 
           {`${time.hours}:${time.minutes}`}
           <span className="am-pm">
                {time.amOrPm}  
           </span>
        </div>
    )
}

export default Time
