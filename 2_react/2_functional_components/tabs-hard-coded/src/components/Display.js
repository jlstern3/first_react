import React from 'react';

const Display = (props) => {
    const {allTabs, currentTabIndex} = props;
    
    return(
        <div>
            {allTabs[currentTabIndex].content}
        </div>
    );
}

export default Display;