//get Mongoose library
const mongoose = require('mongoose');

//connect mongoose to mongoDB
mongoose.connect("mongodb://localhost/dogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("We've established a connection to our database."))
    .catch(err => console.log("Error connecting to database"))

//Don't need anything exported from this file, we just needed the connection on line 5