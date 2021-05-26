import React from 'react';

const Display = (props) => {
    const { tabsArray } = props;

    return (
        <div>
        {
            tabsArray.map((tab, index) => (
                <div id="tabs">
                    <ul>
                        <li key={index}>{tab.tab}</li>
                    </ul>
                    <div key={index}>{tab.content}</div>
                </div>
            ))
        }
    </div>
        // <div>
        //     {
        //         tabsArray.map((tab, index) => (
        //             <div>
        //             <h3 key={index} style={{
        //                 margin: "15px",
        //                 display: "inline-block",
        //                 overflow: "scroll",
        //             }}>{tab.tab}</h3>
        //             <p key={index} style={{
        //                 margin: "15px",
        //                 display: "inline-block",
        //                 overflow: "scroll",
        //             }}>{tab.content}</p>
        //             </div>
        //         ))
        //     }
        // </div>
    );

}

export default Display;