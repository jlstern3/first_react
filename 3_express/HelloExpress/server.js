const express = require("express");
const app = express();

//confingure server here
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//create routes and functions here 

app.get("/api", (request, response) => {
  response.send("Let's see nodemon in action!");
});


//tell server to listen on port 8000
const server = app.listen(8000, () =>
  console.log("Listening on port 8000")
);


