import React from 'react'
import Time from './Time';
import Day from './Day';
import ProgressBar from './ProgressBar';
import "./Welcome.scss";
// import Work1 from '../assets/img/work1.svg';
// import Work2 from '../assets/img/work2.svg';

function Welcome(props) {
    return (
        <div className="welcome-grid-item">
            <h2 className="header-text">Hello, {props.name}!</h2>
            <p>Stay persistnent, Achieve your goals</p>
            <div className="d-flex date-time">
                <Day />
                <Time />
            </div>
            <ProgressBar />
            {/* <img src={Work1} className="svg-img" alt="Work" /> */}
        </div>
    )
}

export default Welcome
