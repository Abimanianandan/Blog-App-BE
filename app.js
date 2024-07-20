const express = require("express")
const blogRouter = require("./routes/BlogRouter")
const cors = require("cors")
const morgan = require("morgan")

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api/blog",blogRouter)

module.exports = app;