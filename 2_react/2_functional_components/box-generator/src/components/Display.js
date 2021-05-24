import React from 'react';

const Display = (props) => {
    const { boxList } = props;

    return (
        <div>
            {
                boxList.map((box, index) => (
                    <div key={index} style={{
                        margin: "15px",
                        width: box.integer,
                        height: box.integer,
                        display: "inline-block",
                        overflow: "scroll",
                        backgroundColor: box.color,
                    }}></div>
                ))
            }
        </div>
    );

}

export default Display;