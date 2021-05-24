import React, {useState} from 'react';

const ColorForm = (props) => {
    const {boxList, setBoxList} = props;
    const[newColor, setNewColor] = useState("");
    const[integer, setInteger] = useState(200);

    const submitHandler = (e) => {
        e.preventDefault();
        let newBox = {
            color: newColor,
            integer: integer + "px",
        }
        setBoxList([newBox, ...boxList]);
        setNewColor("");
        setInteger(200);
    }
    
    return(
        <div>
            <form onSubmit= {submitHandler}> 
                <label>Color</label>
                <input 
                    type="text" 
                    name="newColor" 
                    value={newColor}
                    onChange = {(e) => setNewColor(e.target.value)} />
                <input
                    type="number"
                    name="integer"
                    value = {integer}
                    onChange = {(e) => setInteger(e.target.value)} />

                <button type="submit">Add</button>
                {
                        newColor.length > 0 && newColor.length < 3 ?
                        <p id = "error-message">Your color must be at least three characters long.</p>
                        : null
                    }
            </form>

        </div>
    )
}

export default ColorForm;