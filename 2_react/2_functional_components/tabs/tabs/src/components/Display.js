import React from 'react';

const Display = (props) => {
    const { tabsArray } = props;

    return (
        <div>
            {
                tabsArray.map((tab, index) => (
                    <div>
                    <h3 key={index} style={{
                        margin: "15px",
                        display: "inline-block",
                        overflow: "scroll",
                    }}>{tab.tab}</h3>
                    <p key={index} style={{
                        margin: "15px",
                        display: "inline-block",
                        overflow: "scroll",
                    }}>{tab.content}</p>
                    </div>
                ))
            }
        </div>
    );

}
//     return (
//         <div>
//             {
//                 tabsArray.map((tab, index) => (
//                     <p key={index} style={{
//                         margin: "20px",
//                         color: "red",
//                         }}>tab.tab</p>
            
//                     <p key={index} style={{ 
//                         margin: "20px", 
//                         display: inline-block,}}>{tab.content}
//                     </p>
//                 ))
//             }
//         </div>
//     );

// }

export default Display;