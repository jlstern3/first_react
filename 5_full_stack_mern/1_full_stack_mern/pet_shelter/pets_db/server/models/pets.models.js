const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required for all pets."],
        minlength: [3, "Name must be at least 3 characters long"], 
    }, 
    type: {
        type: String,
        required: [true, "Type is required for all pets."],
        minlength: [3, "Pet type must be at least 3 characters long"], 
    },
    description: {
        type: String, 
        required: [true, "A description is required for all pets."],
        minlength: [3, "Description must be at least 3 characters long"], 

    },
    skills: {
        type: Number,
        required: [true, "Skills are required for all pets."], 
        // enum: [0, 1, 2, 3],
        // OR
        // min: 0,
        // max: 3, 
    },

}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);