import React from 'react';
import "./Button.scss";

function Button({
    children,
    btnSize,
    btnStyle,
    onClick
    }) {
    const STYLES = ['primary-btn','secondary-btn'];
    const SIZES = ['btn-l','btn-m','btn-s','btn-long'];

    const checkBtnStyle = STYLES.includes(btnStyle)? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize)? btnSize : SIZES[0];

    return (
        <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick}>{children}</button>
    )
}

export default Button
