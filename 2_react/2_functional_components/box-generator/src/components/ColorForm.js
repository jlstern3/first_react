import React, {useState} from 'react';

const ColorForm = (props) => {
    const {boxList, setBoxList} = props;
    const[newColor, setNewColor] = useState("");
    // const[boxList, setBoxList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setBoxList([newColor, ...boxList]);
        setNewColor("");
    }
    return(
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>Color</label>
                <input 
                    type="text" 
                    name="newColor" 
                    value={newColor}
                    onChange = {(e) => setNewColor(e.target.value)} />
                <button type="submit">Add</button>
            </form>

        </div>
    )
}

export default ColorForm;