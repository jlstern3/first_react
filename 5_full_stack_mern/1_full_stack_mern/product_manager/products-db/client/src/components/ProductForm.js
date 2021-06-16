import React, { useState } from 'react';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.25);
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        const newProduct = {title, price, description};
        console.log("You just created a(n)" + newProduct);
    }

    return(
        <div className = "wrapper">
            <h1>Product Manager</h1>
            <form onSubmit = {createProduct} className = "product-form">
                <label>Title</label>
                <input type = "text" onChange = {(e) => setTitle(e.target.value)}></input>
                <label>Price</label>
                <input type= "number" onChange = {(e) => setPrice(e.target.value)}></input>
                <label>Description</label>
                <input type = "text" onChange = {(e) => setDescription(e.target.value)}></input>
            </form>
            <div className="data-displayed">
                <h2>Your Form Data</h2>
                <h3>Title: {title}</h3>
                <h3>Price: {price}</h3>
                <h3>Description: {description}</h3>
            </div>
        </div>
    )
}


export default ProductForm;