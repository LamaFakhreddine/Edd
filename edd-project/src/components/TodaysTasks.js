import React from 'react'
import "./TodaysTasks.scss"
import Tasks from './Tasks'
import AddTask from './AddTask'


function TodaysTasks() {
    return (
        <div className="card-grid-item">
            <h2>Today's Tasks</h2>
            {<Tasks /> }
        </div>
    )
}

export default TodaysTasks;
