const express = require('express');
const app = express();

require("./server/config/dog.config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//get Mongoose library
const mongoose = require('mongoose');

//connect mongoose to mongoDB
mongoose.connect("mongodb://localhost/dogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("We've established a connection to our database."))
    .catch(err => console.log("Error connecting to database"))

//Schema - template for documents in our collection
const DogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bites: Boolean
}, {timestamps: true});


//create Mongoose model containing methods we need to query database
const Dog = mongoose.model("Dog", DogSchema);

//Routes and functions
app.get('/', (req, res) => {
    return res.json({
        message: "Hello world!"
    });
})

//Get all dogs
app.get('/dogs', (req,res)=>{
    Dog.find()
        .then(dogsArray => {
            console.log("We got some dogs")
            res.json(dogsArray);
        })
        .catch(err => {
            console.log("An error occurred");
            res.json({
                message: "error",
                error: err
            })
        })
})

//Create dogs
app.post('/dogs/create', (req,res)=>{
    Dog.create(req.body)
        .then(newDog => {
            res.json({
                results: newDog,
                message: "success"})
        })
        .catch(err => {
            console.log("An error occurred");
            res.json({
                message: "error",
                error: err
            })
        })
})

//Find single dog
app.get('/dogs/:dogID', (req,res) =>{
    Dog.findById(req.params.dogID)
        .then(singleDog => {
            res.json({
                results: singleDog,
                message:"success"
            })
        })
        .catch(err => {
            console.log("An error occurred");
            res.json({
                message: "error",
                error: err
            })
        })
})


app.listen(8000, () =>
    console.log("Server is actively listening on port 8000"));