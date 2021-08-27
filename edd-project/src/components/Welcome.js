import React from 'react'
import Time from './Time';
import Day from './Day';
import "./Welcome.scss";

function Welcome(props) {
    return (
        <div className="welcome-grid-item">
            <h2 className="header-text">Hello, {props.name}!</h2>
            <div className="d-flex date-time">
                <Day />
                <Time />
            </div>
        </div>
    )
}

export default Welcome
