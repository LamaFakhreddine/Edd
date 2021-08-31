import React, { useState } from 'react';
import "./Tasks.scss";
import AddTask from "./AddTask";
import TaskItem from './TaskItem';
// import NoTasks from './NoTasks';

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

    // a callback function that retrieves new task from the <AddTask /> child component
    const callBack = (task) => {
        setTaskList([...taskList, task]);
    };
    // a callback that receives the task key to be deleted
    const deleteTask = (key) => {
        setTaskList(taskList.filter((item) => item.key !== key ));
    }

    return (
        <div className="tasks">
            <button className="no-style" onClick={handleClick}>{addBtn}</button>
            {/* {taskList.length > 0 && <NoTasks />} */}
            {toggle && <AddTask callBack={callBack} /> /* render AddTask only when we press the btn*/ }
            <ul className="task-list">
                {taskList.map((task) => {
                    return (
                        <TaskItem key={task.time+" "+task.name} task={task} callBack={deleteTask} />
                    );
                })}
            </ul>
        </div>
    )
}

export default Tasks
