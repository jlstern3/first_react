const express = require('express');
const app = express();

//EQUIVALENT FUNCTIONALITIES LINE 7-13
//require pulls in the function we created in routes
//then it invokes the function the app express server as an argument
require('./routes/movie.routes') (app);

//this is saying that whatever we exported in the movie.routes file, 
//save it in the variable movieRoutes (which is a function)
//then run the movieRoutes function we created and pass in app as it's argument
// const movieRoutes = require('./routes/movie.routes');
// movieRoutes(app)

app.listen(8000, () => {
    console.log("Server is actively listening on Port 8000")
});