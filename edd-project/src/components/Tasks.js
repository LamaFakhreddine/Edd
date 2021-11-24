import React, { useState } from 'react';
import "./Tasks.scss";
import AddTask from "./AddTask";
import TaskItem from './TaskItem';


function Tasks({ callBack }) {
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
    const addTask = (task) => {
        setTaskList([...taskList, task].sort(compare));
        // callBack(taskList.length === 0);
    };

    // a callback that receives the id of the task to be deleted
    const deleteTask = (id) => {
        taskList.forEach(item => console.log(item.id));
        let newTaskList = taskList.filter((task) => task.id !== id).sort(compare); 
        return setTaskList(newTaskList);
    }

    function compare(task1, task2) {
        if (task1.id < task2.id) {
            return -1; 
        }
        if (task1.id > task2.id) {
            return 1;
        }
        return 0;
    }
    return (
        <div className="tasks">
                <button className="no-style" onClick={handleClick}>{addBtn}</button>
                {toggle && <AddTask callBack={addTask} /> /* render AddTask only when we press the btn*/ }
                <ul className="task-list">
                    {taskList.map((task) => {
                        return (
                            <TaskItem key={task.time} task={task} callBack={deleteTask} />
                        );
                    })}
                </ul>
        </div>
    )
}

export default Tasks
