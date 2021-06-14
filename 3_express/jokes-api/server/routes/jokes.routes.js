const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:_id", JokeController.getSingleJoke);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke);
};