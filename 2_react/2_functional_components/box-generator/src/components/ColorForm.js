import React, {useState} from 'react';

const ColorForm = () => {

    // const createBox = (e)=>{
    //     e.preventDefault();
        // function to create new box w/ color value set to color's getter state key
    //     console.log("You created a box");
    // };


    const[newColor, setNewColor] = useState("");
    const[boxList, setBoxList] = useState([]);

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
            {
                boxList.map((color, colorListIndex) => (
                    <p key={colorListIndex} style={{width: "200px", height: "200px", border: "1px solid black", display: "inline-block", margin: "20px", overflow: "scroll",}}>{color}</p>
                ))
            }
        </div>
    )
}

export default ColorForm;