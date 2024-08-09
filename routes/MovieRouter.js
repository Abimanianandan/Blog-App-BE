const express = require("express")

const movieController = require("../controller/MovieController")





const movieRouter = express.Router();

movieRouter.post("/create",movieController.create)
movieRouter.get("/getAllMovies",movieController.getAllMovies)
movieRouter.get("/:id",movieController.getMovieById)
movieRouter.put("/:id",movieController.updateMovie)
movieRouter.delete("/:id",movieController.deleteMovie)

module.exports = movieRouter;