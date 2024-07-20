const Blog = require("../model/BlogSchema")

const blogController = ({
   create: async(req,res)=>{
     try{
       const {title,content} = req.body;
       const blog = await Blog.findOne({title})
       if(blog){
         return res.status(400).json({message:"title already exits"})
       }
       const newBlog = new Blog({
        title,
        content
       })
       await newBlog.save();
       res.status(200).json({message:"blog created successfully",newBlog})
     }catch(error){
        res.status(500).json({message:error.message})
     }
   },
   getAllBlogs: async(req,res)=>{
      try{
      const blog = await Blog.find();
      res.status(200).json({message:blog})
      }catch(error){
         res.status(200).json({message:error.message})
      }

   },
   getBlogById: async(req,res)=>{
      try{
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);
        if(!blog){
          return res.status(400).json({message:"blog not found"})
        }
        res.status(200).json({message:blog})
      }catch(error){
         res.status(500).json({message:error.message})
      }
   },
   updateBlog: async(req,res)=>{
      try{
         const blogId = req.params.id;
         const {title,content} = req.body;
         const blog = await Blog.findById(blogId)
        if(!blog){
           return res.status(400).json({message:"blog not found"})
         }
         blog.title = title;
         blog.content = content;
         updatedBlog = await blog.save();
      res.status(200).json({message:"blog update successfully",updatedBlog})
      }catch(error){
         res.status(500).json({message:error.message})
      }
     
   },
   deleteBlog: async(req,res)=>{
      try{
         const blogId = req.params.id;
         const blog = await Blog.findByIdAndDelete(blogId);
         if(!blog){
            return res.status(400).json({message:"blog not found"})
         }
         res.status(200).json({message:"blog deleted successfully"})
      }catch(error){
         res.status(500).json({message:error.message})
      }
     
   }
})

module.exports = blogController;