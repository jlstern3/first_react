const express = require('express');
const app = express();
const faker = require('faker');

//configure server
app.use(express.json());
app.use(urlencoded({extended: true}));

//routes need an http verb, a path, and a function with two parameters (request, response) to run 
//must return something 
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: ' + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);


//activate server on a port
app.listen(8000, ()=>{
    console.log("The server is listening on Port 8000");
})