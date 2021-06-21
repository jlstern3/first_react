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
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);