const express = require("express")
const movieRouter = require("./routes/MovieRouter")
const cors = require("cors")
const morgan = require("morgan")


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/movie",movieRouter)

module.exports = app;