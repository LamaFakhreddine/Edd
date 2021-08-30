import React from 'react'
import "./TodayPlans.scss"
import NoTasks from './NoTasks'


function Card() {
    return (
        <div className="card-grid-item">
            <h2>Today's Plan</h2>
            <NoTasks />
        </div>
    )
}

export default Card;
