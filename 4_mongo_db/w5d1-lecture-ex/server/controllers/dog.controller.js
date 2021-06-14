const Dog = require('../models/dog.model')

module.exports.getAllDogs = (req, res) => {
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
}

module.exports.createDog = (req, res) => {
    Dog.create(req.body)
        .then(newDog => {
            res.json({
                results: newDog,
                message: "success"
            })
        })
        .catch(err => {
            console.log("An error occurred");
            res.json({
                message: "error",
                error: err
            })
        })
}

module.exports.getSingleDog = (req, res) => {
    Dog.findById(req.params.dogID)
        .then(singleDog => {
            res.json({
                results: singleDog,
                message: "success"
            })
        })
        .catch(err => {
            console.log("An error occurred");
            res.json({
                message: "error",
                error: err
            })
        })
}

module.exports.baseRoute = (req, res) => {
    return res.json({
        message: "Hello world!"
    });
}

