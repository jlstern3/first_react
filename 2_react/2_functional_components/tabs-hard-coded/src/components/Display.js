import React from 'react';

const Display = (props) => {
    const {allTabs, currentTabIndex} = props;
    
    return(
        <div className = "content">
            {allTabs[currentTabIndex].content}
        </div>
    );
}

export default Display;