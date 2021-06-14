const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post("/api/jokes", JokeController.createJoke);
    app.get("/api/jokes/:jokeId", JokeController.getSingleJoke);
    app.put("/api/jokes/:jokeId", JokeController.updateJoke);
    app.delete("/api/jokes/:jokeId", JokeController.deleteJoke);
};