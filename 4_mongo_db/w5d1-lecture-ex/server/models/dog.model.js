//import mongoose
const mongoose = require('mongoose');

//Schema - template for documents in our collection
const DogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bites: Boolean
}, {timestamps: true});

//create Mongoose model containing methods we need to query database
const Dog = mongoose.model("Dog", DogSchema);

//export dog module
module.exports = Dog;