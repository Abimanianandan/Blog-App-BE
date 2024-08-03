const express = require("express")

const blogController = require("../controller/BlogController")
const blogRouter = express.Router();

blogRouter.post("/create",blogController.create)
blogRouter.get("/getAllBlogs",blogController.getAllBlogs)
blogRouter.get("/:id",blogController.getBlogById)
blogRouter.put("/:id",blogController.updateBlog)
blogRouter.delete("/:id",blogController.deleteBlog)

module.exports = blogRouter;