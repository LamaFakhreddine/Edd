import React from 'react'
import Time from './Time';
import Day from './Day';
import ProgressBar from './ProgressBar';
import "./Welcome.scss";

function Welcome(props) {
    return (
        <div className="welcome-grid-item">
            <h2 className="header-text">Hello, {props.name}!</h2>
            <div className="d-flex date-time">
                <Day />
                <Time />
            </div>
            <ProgressBar />

        </div>
    )
}

export default Welcome
