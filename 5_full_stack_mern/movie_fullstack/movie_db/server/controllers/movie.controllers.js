const Movie = require('../models/movie.models'); 

//find all movie documents
module.exports.getAllMovies = (req,res) =>{
    console.log("Inside getAllMovies");
    Movie.find({})  
        .then(allMovies => {
            console.log(allMovies);
            res.json(allMovies);
        })
        .catch( err => {
            console.log(err);
        })
};

//creating movie
module.exports.createMovie = (req,res) => {
    console.log("Inside createMovies");
    //debugging technique: see what data is being recieved into controller
    console.log(req.body);
    Movie.create(req.body)
        .then((newMovie) => {
            console.log(newMovie);
            res.json(newMovie);
        })
        .catch( err => {
            console.log(err);
            res.json(err);
        })

};

//get one movie
module.exports.getOneMovie = (req,res) => {
    console.log("Inside getOneMovie")
    Movie.findById(req.params.id)
        .then(oneMovie => {
            console.log(oneMovie);
            res.json(oneMovie);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
};

    //update movie
module.exports.updateMovie = (req,res) => {
    console.log("Inside updateMovie");
    //need these two pieces of data to update: req.params.id and req.body
    console.log(req.params.id);
    console.log(req.body);
    //update by default will send back the original document, not the updated one 
    //update will NOT validate your data by default
    Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //return updated document instead of the original
        runValidators: true // validate the json data just like the create
    })
        .then(updatedMovie => {
            console.log(updatedMovie);
            res.json(updatedMovie);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
};

//delete movie
module.exports.deleteMovie = (req, res) => {
    console.log("We're inside deleteMovie");
    console.log(req.params.id);
    Movie.findByIdAndDelete(req.params.id)
        .then(deletedMovie => {
            console.log(deletedMovie);
            res.json(deletedMovie);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })     
};