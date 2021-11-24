import React, { useState } from 'react'
import "./TodaysTasks.scss"
import Tasks from './Tasks'
import NoTasks from './NoTasks';


function TodaysTasks() {
    const [noTasks, setNoTasks] = useState(true);

    // a callback that checks the length of the tasks list 
    const checkLength = (isEmpty) => {
        setNoTasks(isEmpty);
    }

    return (
        <div className="card-grid-item">
            <h2>Today's Tasks</h2>
            {noTasks? <NoTasks /> : <Tasks callBack={checkLength} />} 
        </div>
    )
}

export default TodaysTasks;
