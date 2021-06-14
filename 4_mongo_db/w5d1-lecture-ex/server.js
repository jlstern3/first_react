const express = require('express');
const app = express();

require("./server/config/dog.config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//get Mongoose library
const mongoose = require('mongoose');

//connect mongoose to mongoDB
mongoose.connect("mongodb://localhost/dogs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("We've established a connection to our database."))
    .catch(err => console.log("Error connecting to database"))


app.get('/', (req, res) => {
    return res.json({
        message: "Hello world!"
    });
})

app.listen(8000, () =>
    console.log("Server is actively listening on port 8000"));