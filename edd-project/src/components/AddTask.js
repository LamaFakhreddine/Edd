import React, { useState } from 'react';
import Button from './Button';
import "./AddTask.scss";

function AddTask({childToParent}) {
    // list that stores subtasks of each task
    const initialState = {
        hr: 0,
        min: 0,
        amPm: "AM",
        taskName: "",
    };
    const [newTask, setNewTask] = useState(initialState);

    const handleChange = (event) => {
        let targetName = event.target.name;
        let targetValue = event.target.value;
        setNewTask({
            ...newTask,
            [targetName] : targetValue
        })
    }

    // set the final task
    const handleClick = (event) => {
        setNewTask({
            ...newTask
        })
        // send newTask info back to <Tasks /> parent component 
        childToParent(newTask); 
        // reset form
        setNewTask(initialState);
    }

    return (
        <div className="add-task d-flex">
            <form id="add-task">
                <input required 
                    className="task-time"
                    type="number"
                    min="1" max="12"
                    placeholder="HH"
                    name="hr"
                    value={newTask.hr}
                    onChange={handleChange}/>
                    
                {/* <div className="md-text">:</div> */}

                <input required  
                    className="task-time"
                    type="number" 
                    min="0" max="59" 
                    placeholder="MM" 
                    name="min"
                    value={newTask.min} 
                    onChange={handleChange}/>

                <select required 
                    className="task-time-am-pm" 
                    name="amPm" 
                    value={newTask.amPm} 
                    onChange={handleChange}>
                    <option value="AM">AM</option>
                    <option value='PM'>PM</option>
                </select>
                
                <input required 
                    spellCheck="true"
                    className="task-name" 
                    type="text" 
                    placeholder="Task name" 
                    name="taskName"
                    value={newTask.name} 
                    onChange={handleChange} />

                <Button btnStyle="secondary-btn" btnSize="btn-s" onClick={handleClick}>Add</Button>
            </form>
        </div>   
    
    )
}

export default AddTask
