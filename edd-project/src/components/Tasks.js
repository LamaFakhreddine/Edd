import React, { useState } from 'react';
import "./Tasks.scss";
import AddTask from "./AddTask";

function Tasks(props) {
    // to toggle the add-task section
    const [toggle, setToggle] = useState(false);
    //add btn
    const [addBtn, setaddBtn] = useState(<span><i className="fas fa-plus-circle"></i>Add task</span>);
    // to modify tasks list 
    const [taskList, setTaskList] = useState([]);

    const handleClick = () => {
        setToggle(!toggle);
        // change Add task --> Cancel and rotate icon from + to x
        if (!toggle) {
            setaddBtn(<span><i className="fas fa-plus-circle" style={{transform: "rotate(45deg)"}}></i>Cancel</span>);
        } else {
            setaddBtn(<span><i className="fas fa-plus-circle"></i>Add task</span>)
        }
    };

    return (
        <div className="task-list">
            <button className="no-style" onClick={handleClick}>{addBtn}</button>
            {/* {taskList.length > 0 && <NoTasks />} */}
            {toggle && <AddTask /> /* render AddTask only when we press the btn*/ }
            <ul>
            </ul>
        </div>
    )
}

export default Tasks
