const Pet = require('../models/pets.models');

//AllPets
module.exports.getAllPets = (req,res) => {
    console.log("Inside getAllPets");
    Pet.find({})
        .then(allPets => {
            console.log(allPets);
            res.json(allPets);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
};

//CreatePet
module.exports.createPet = (req,res) => {
    console.log("Inside createPet");
    console.log(req.body);
    Pet.create(req.body)
        .then((newPet)=> {
            console.log(newPet);
            res.json(newPet);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
};



// PetDetails
module.exports.getPetDetails = (req,res) => {
    console.log("Inside getPetDetails");
    Pet.findById(req.params.id)
        .then(onePet => {
            console.log(onePet);
            res.json(onePet);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
};

//EditPet
module.exports.editPet = (req, res) => {
    console.log("Inside editPet");
    console.log(req.params.id);
    console.log(req.body);
    Pet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedPet)=> {
            console.log(updatedPet);
            res.json(updatedPet);
        })
        .catch(err => {
            console.log(err);
            res.json(err)
        })
};

//DeletePet
// module.exports.deletePet

