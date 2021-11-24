import React, { useState } from 'react';
import NoResults from "../assets/img/no-results.svg";
import Button from './Button';
import "./NoTasks.scss";
import Tasks from './Tasks';

function NoTasks() {

    const [click, setclick] = useState(false);

    const handleClick = (event) => {
        setclick(!click);
    }

    return (
        <>
        {/* render the <Tasks /> if btn is clicked */}
            {click === true ? <Tasks /> :
            <div className="no-tasks">
                <img src={NoResults} alt="No results" className="mx-auto" />
                <p>Looks like you have no tasks for today</p>
                <p className="subheading">Get into your productive mode!</p>
                <Button btnStyle="" btnSize="btn-long" onClick={handleClick}>Start Planning</Button>
            </div>
            }
        </>
    )
}

export default NoTasks
