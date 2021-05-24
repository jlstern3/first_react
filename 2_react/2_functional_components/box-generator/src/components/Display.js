import React from 'react';

const Display = (props) => {
    const boxStyle = {
        backgroundColor: "{props.color}",
        margin: "15px",
        width: "200px",
        height: "200px",
        border: "1px solid black",
        display: "inline-block",
        overflow: "scroll",
        backgroundColor: {newColor},
    };
    const { boxList } = props;
    return (
        <div>
            <h2> Display Colored Boxes for {props.name}</h2>

            <div>
                {
                    boxList.map((color, colorListIndex) => (
                        <p key={colorListIndex}  style={boxStyle}>{color}</p>
                    ))
                }
            </div>
        </div>
    );

}

export default Display;