const MovieController = require('../controllers/movie.controllers');

module.exports = function(app){
    //get all movies
    app.get('/api/movies', MovieController.getAllMovies);
        //create movie
    app.post('/api/movies', MovieController.createMovie);
    //get one movie
    app.get('/api/movies/:id', MovieController.getOneMovie);
    //update movie
    app.put('/api/movies/:id', MovieController.updateMovie);
    //delete movie
    app.delete('/api/movies/:id', MovieController.deleteMovie);
}