import React from 'react';

const Tabs = (props) => {
    const{allTabs, currentTabIndex, setCurrentTabIndex} = props;

    // declare function to set selected tab
    const setSelectedTab = (index) => {
        setCurrentTabIndex(index);
    };

    // styling tabs
    const tabStyle = (index) => {
        if (index === currentTabIndex){
            return "selectedTab";
        }
        else{
            return "notSelectedTab";
        }
    }


    return(
        <div style={{margin: "20px", width: "80%", textAlign: "center"}}>
            {
                allTabs.map((item, index) => (
                    <div className={`tab ${ tabStyle(index) }`} onClick = {(e) => setSelectedTab(index)}>{item.label}</div>
                ))
            }
        </div>
    )
}

export default Tabs;