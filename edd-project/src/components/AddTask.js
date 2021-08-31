import React, { useState } from 'react';
import Button from './Button';
import "./AddTask.scss";

function AddTask({ callBack }) {
    // list that stores subtasks of each task
    const initialState = {
        time: new Date().toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true}),
        taskName: "",
    };
    const [newTask, setNewTask] = useState(initialState);

    const handleChange = (event) => {
        let targetName = event.target.name;
        let targetValue = event.target.value;
        console.log("time is:" , targetValue)
        setNewTask({
            ...newTask,
            [targetName] : targetValue
        })
    }

    // set the final task
    const handleClick = (event) => {
        if (newTask !== initialState){
            setNewTask({
                ...newTask
            });
            // send newTask info back to <Tasks /> parent component 
            callBack(newTask); 
            // reset state
            setNewTask(initialState);
        }
    }

    return (
        <div className="add-task d-flex">
            {/* <form> */}
                <input required 
                    className="task-time"
                    type="time"
                    name="time"
                    value={newTask.time}
                    onChange={handleChange}/>                
                <input required 
                    spellCheck="true"
                    className="task-name" 
                    type="text" 
                    placeholder="Task name" 
                    name="taskName"
                    value={newTask.taskName} 
                    onChange={handleChange} />

                <Button btnStyle="secondary-btn" btnSize="btn-s" onClick={handleClick}>Add</Button>
            {/* </form> */}
        </div>   
    
    )
}

export default AddTask
