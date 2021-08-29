import React from 'react';
import NoResults from "../assets/img/no-results.svg";
import Button from './Button';
import "./NoTasks.scss";

function NoTasks() {
    return (
        <div className="no-tasks">
            <img src={NoResults} alt="No results" className="mx-auto" />
            <p>Looks like you have no tasks for today</p>
            <p className="subheading">Get into your productive mode!</p>
            <Button btnStyle="" btnSize="btn-long" >Start Planning</Button>
        </div>
    )
}

export default NoTasks
