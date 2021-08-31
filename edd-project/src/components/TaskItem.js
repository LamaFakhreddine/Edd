import React, { useState } from 'react';
import "./TaskItem.scss";

function TaskItem({callBack, task}, props) {

    const [completed, setCompleted] = useState(false)
    let amPm = "AM";

    const handleClick = (event) => {
        setCompleted(!completed);
    }

    const handleDelete = (event) => {
        callBack(props.key);
    };

    // returns time in 12 hr format 
    const hour12 = (time) => {
        let hr_24 = time.substr(0,2);
        // to render 12:00 PM instead of 00:00 PM
        let hr_12 = hr_24 === '12'? '12' : hr_24 % 12;
        hr_12 = hr_12 < 10? '0' + hr_12 : hr_12;
        amPm = hr_24 >= 12? 'PM' : 'AM';
        return (time.replace(hr_24,hr_12));
    }

    return (
        <div className="task-item d-flex align-items-center" style={completed? {filter: "opacity(0.5)"} : {backgroundColor: "#fff4f4"}}>
            <div className="task-time">{hour12(task.time)}
                <span className="am-pm">{amPm}</span>
            </div>
            <div className="task-name">{task.taskName}</div>
            <div className="ms-auto d-flex align-items-center wrapper">
                <div className="delete" onClick={handleDelete}>
                    <i className="far fa-trash-alt"></i>
                </div>
                <div className="checkbox" onClick={handleClick}>
                    {completed? <i className="fas fa-check"></i> : <></>}  
                </div>         
            </div>
        </div>
    )
}

export default TaskItem
