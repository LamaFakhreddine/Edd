import React, { useState } from 'react';
import "./TaskItem.scss";

function TaskItem() {

    const [completed, setCompleted] = useState(false)

    const handleClick = (event) => {
        setCompleted(!completed);
    }

    const handleDelete = (event) => {

    };

    return (
        <div className="task-item d-flex align-items-center" style={completed? {filter: "opacity(0.5)"} : {backgroundColor: "#fff4f4"}}>
            <div className="task-time">9:05</div>
            <div className="task-time-am-pm">AM</div>
            <div contentEditable="true" className="task-name">Studying</div>
            <div className="ms-auto d-flex align-items-center wrapper">
                <div className="delete" onClick={handleDelete}>
                    <i className="far fa-trash-alt"></i>
                </div>
                <div className="checkbox" onClick={handleClick}>
                    {completed? <i class="fas fa-check"></i> : <></>}  
                </div>         
            </div>
        </div>
    )
}

export default TaskItem
