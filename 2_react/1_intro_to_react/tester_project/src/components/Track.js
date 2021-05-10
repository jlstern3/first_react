import React from 'react';

const Track=(props) => {
    const moduleStyle = {
        display: "inline-block",
        height: "80px",
        width: "80px",
        margin: "10px",
        backgroundColor: "red",
    };

    return(
        <div>
            <h3 className="module-header">{props.trackName} - {props.instructor}</h3>
            <div style={moduleStyle}></div>
            <div style={moduleStyle}></div>
            <div style={moduleStyle}></div>
            <div style={moduleStyle}></div>
        </div>
    )
}

export default Track;