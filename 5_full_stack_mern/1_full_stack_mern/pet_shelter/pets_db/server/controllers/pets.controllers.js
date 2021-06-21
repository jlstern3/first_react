const Pet = require('../models/pets.models');

module.exports.getAllPets = (req,res) => {
    console.log("Inside getAllPets");
    Pet.find({})
        .then(allPets => {
            console.log(allPets);
            res.json(allPets);
        })
        .catch(err => {
            console.log(err);
        })
}