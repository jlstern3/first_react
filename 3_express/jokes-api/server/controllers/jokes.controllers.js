const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({
            message: "We've returned all the jokes.",
            jokes: allJokes}))
        .catch (err => res.json({
            message: "We caught an error!",
            error: err,
        }))
};

module.exports.getSingleJoke = (req,res) => {
    Joke.findById(req.params.jokeId)
        .then(oneSingleJoke => res.json({
            message: "We've returned one joke.",
            joke: oneSingleJoke}))  
        .catch(err => res.json({
            message: "We caught an error!",
            error: err,
        }))
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({
            message: "we've created a new joke.",
            joke: newJoke,
            })
        })
        .catch( err => {
            res.json({
            messeage: "We caught an error!",
            error: err,
            })
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id:req.params.jokeId}, req.body, {new: true})
        .then(updateUser => {
            res.json({
            message: "We've updated the user.",
            user: updateUser,
            })
        })
        .catch( err => {
            res.json({
            message: "We caught an error!",
            error: err,
            })
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id:req.params.jokeId})
        .then(deletedJoke => {
            res.json({
            message: "We've deleted a joke.",
            result: deletedJoke,
            })
        })
        .catch(err => {
            res.json({
            message: "We caught an error!",
            error: err,
            })
        })
}