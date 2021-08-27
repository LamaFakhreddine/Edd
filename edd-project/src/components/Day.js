import React, { useState, useEffect } from 'react';
import "./Day.scss";

function Day() {
    // const _date = new Date();
    const [date, setDate] = useState({
        day : new Date().getDate(),
        weekDay: new Date().toLocaleString('default', {weekday : 'long'}),
        month: new Date().toLocaleString('default', {month: 'long'})
    });

    useEffect(() => {
        const id =  setInterval(setDate({
            day : new Date().getDate(),
            weekDay: new Date().toLocaleString('default', {weekday : 'long'}),
            month: new Date().toLocaleString('default', {month: 'long'})
        }), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    
    return (
        <div className="date"> 
            <div className="weekday">
                {date.weekDay}
            </div>
           <div className="day-month">
            {`${date.day} ${date.month}`}
           </div>
        </div>
    )
}


export default Day;
