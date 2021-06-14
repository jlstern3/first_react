const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required for Movies."],
        minlength: [3, "Title must be at least 3 characters long"], 
    },
    genre: {
        type: String,
        required: [true, "Genre is required for Movies."],
        //enumerate: saying genre must match certain types (whatever you specify in array)
        enum: ["Action", "Comedy", "Fantasy", "Horror", "Sci-Fi"]
    },
    producer: {
        type: String,
        required: [true, "Producer is required for Movies."],
        minlength: [3, "Producer must be at least 3 characters long"], 
    },
    length: {
        type: Number,
        required: [true, "Movie length in minutes is required for Movies."],
        //min = minimum length of time (smallest number allowed to be entered)
        min: [30, "Movies must be at least 30 minutes in length"],
    },
    dateProduction: {type: Date}, //no validation -- we decided date can be optional
    rating: {
        type: String,
        required: [true, "Rating is required for Movies."],
        //enumerate: saying genre must match certain types (whatever you specify in array)
        enum: ["G", "PG", "PG-13", "R", "NR"]
    },
    isOnNetflix: {
        type: Boolean,
        default: false
    },
    coverArtURL: {type: String} //optional input
}, {timestamps: true});

//if I look for this "collection" name in the mongo db, it will be lowercase AND plural!
//this would be "movies"
module.exports = mongoose.model('Movie', MovieSchema);