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
    // setNewColor("");
    const[newColor, setNewColor] = useState("");
    const[boxList, setBoxList] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setBoxList([newColor]);
    }

    return(
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>Color</label>
                <input 
                    type="text" 
                    name="newColor" 
                    onChange = {(e) => setNewColor(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            {/* <div style={boxStyle}>Placeholder</div> */}
        </div>
    )
}

export default ColorForm;