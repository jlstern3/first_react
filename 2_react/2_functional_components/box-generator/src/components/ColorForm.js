import React, {useState} from 'react';

const ColorForm = () => {

    // const createBox = (e)=>{
    //     e.preventDefault();
        // function to create new box w/ color value set to color's getter state key
    //     console.log("You created a box");
    // };
    // const boxStyle = {
    //     backgroundColor: {color},
    //     margin: "15px",
    //     width: "200px",
    //     height: "200px",
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
                    <p key={colorListIndex}>{color}</p>
                ))
            }
            {/* <div style={boxStyle}>Placeholder</div> */}
        </div>
    )
}

export default ColorForm;