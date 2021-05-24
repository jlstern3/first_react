import React from 'react';

const Display = (props) => {
    const { boxList } = props;
    return (
        <div>
            {
                boxList.map((color, index) => (
                    <div key={index} style={{
                        margin: "15px",
                        width: "200px",
                        height: "200px",
                        display: "inline-block",
                        overflow: "scroll",
                        backgroundColor: color,
                    }}></div>
                ))
            }
        </div>
    );

}

export default Display;