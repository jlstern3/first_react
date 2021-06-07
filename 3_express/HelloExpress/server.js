const express = require("express");
const app = express();


app.get("/api", (request, response) => {
  response.send("Let's see nodemon in action!");
});

const server = app.listen(8000, () =>
  console.log("Listening on port 8000")
);


