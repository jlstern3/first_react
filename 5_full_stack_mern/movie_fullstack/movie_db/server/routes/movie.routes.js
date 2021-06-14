const MovieController = require('../controllers/movie.controllers');

module.exports = function(app){
    app.get('/api/movies', MovieController.getAllMovies);
    
}