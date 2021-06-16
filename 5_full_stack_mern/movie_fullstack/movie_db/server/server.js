const express = require('express');
const app = express();
// inside the server dir, run: npm install cors
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//adds the cors functionality to our express server 
//which allows our browser to request things from our API
app.use(cors());

//run Mongoose connect file 
require('./config/mongoose.config');

//EQUIVALENT FUNCTIONALITIES LINE 10-19
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