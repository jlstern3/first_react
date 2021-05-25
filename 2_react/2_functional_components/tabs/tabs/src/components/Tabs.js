import React, {useState} from 'react';

const Tabs = (props) => {
    const {tabsArray, setTabsArray} = props;
    const [tabsInput, setTabsInput] = useState("");
    const [contentInput, setContentInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        let newTab = {
            tab: tabsInput,
            content: contentInput,
        }
        setTabsArray([newTab, ...tabsArray]);
        setTabsInput("");
        setContentInput("");
    }


    return(
        <form onSubmit = {submitHandler}>
            <label>Tab Name: </label>
            <input 
            type="text" 
            name ="tabName" 
            value = {tabsInput} 
            onChange = {(e) => setTabsInput(e.target.value)}></input>
            <label>Tab Content: </label>
            <input 
            type = "text" 
            name = "tabContent" 
            value = {contentInput}
            onChange = {(e) => setContentInput(e.target.value)} ></input>
            <button type = "submit">Add New Tab Object</button>
        </form>

    );
}

export default Tabs;