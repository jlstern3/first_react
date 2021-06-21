const PetController = require('../controllers/pets.controllers');

module.exports = function(app){
    //get all movies
    app.get('/api/pets', PetController.getAllPets);
    // //create movie
    // app.post('/api/movies', MovieController.createMovie);
    // //get one movie
    // app.get('/api/movies/:id', MovieController.getOneMovie);
    // //update movie
    // app.put('/api/movies/:id', MovieController.updateMovie);
    // //delete movie
    // app.delete('/api/movies/:id', MovieController.deleteMovie);
}
