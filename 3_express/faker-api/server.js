const express = require('express');
const app = express();

//configure server
// app.use(express.json());
// app.use(urlencoded({extended: true}));

//routes need an http verb, a path, and a function with two parameters (request, response) to run 
//must return something 

//activate server on a port
app.listen(8000, ()=>{
    console.log("The server is listening on Port 8000");
})