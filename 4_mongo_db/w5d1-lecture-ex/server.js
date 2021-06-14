const express = require('express');
const app = express();

require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//load up and run the mongoose config file so we can connect to our database
require("./server/config/mongoose.config");

//runs routes file we created
const dogRoutes = require('./server/routes/dog.routes');
//call function we created on line 13 and pass in our app
//this loads all of my routes into my express application
dogRoutes(app);


app.listen(8000, () =>
    console.log("Server is actively listening on port 8000"));