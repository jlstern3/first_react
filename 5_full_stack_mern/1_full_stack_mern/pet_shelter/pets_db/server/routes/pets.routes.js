const PetController = require('../controllers/pets.controllers');

module.exports = function(app){
    //get all movies
    app.get('/', PetController.getAllPets);
    // create movie
    app.post('/pets/new', PetController.createPet);
    // get one movie
    app.get('/pets/:id', PetController.getPetDetails);
    // update movie
    app.put('/pets/:id/edit', PetController.editPet);
    // //delete movie
    // app.delete('/pets/:id', PetController.deletePet);
}
