import React, { useState } from 'react';

const ProductForm = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.25);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let newProduct = {
            title: title,
            price: price,
            description: description,
        }
    // Resetting input values
        setProductList([newProduct, ...productList]);
        setTitle("");
        setPrice(0.25);
        setDescription("");
    }
    //IMMEDIATE CHANGE DISPLAYED
    // const createProduct = (e) => {
    //     e.preventDefault();
    //     const newProduct = {title, price, description};
    //     console.log("You just created a(n)" + newProduct);
    // }

    return(
        <div className = "wrapper">
            <h1>Product Manager</h1>
            <form onSubmit = {onSubmitHandler}>
                <label>Title</label>
                <input type = "text" name="title" value = {title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Price</label>
                <input type = "number" name="price" value = {price} onChange={(e) => setPrice(e.target.value)}></input>
                <label>Description</label>
                <input type = "text" name="description" value = {description} onChange={(e) => setDescription(e.target.value)}></input>
                <button type = "submit">Create New Product</button>
            </form>

            {/* //IMMEDIATE CHANGE DISPLAYED */}
            {/* <form onSubmit = {createProduct} className = "product-form">
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
            </div> */}
        </div>
    )
}


export default ProductForm;