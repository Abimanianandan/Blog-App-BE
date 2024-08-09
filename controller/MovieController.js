const Movie = require("../model/MovieSchema")




const movieController = ({
   create: async(req,res)=>{
     try{
       const {title,actorname} = req.body;
       if (!title || !actorname ) {
         return res.status(400).send('Missing required fields');
     }
 
       const movie = await Movie.findOne({title})
       if(movie){
         return res.status(400).json({message:"title already exits"})
       }
       const newMovie = new Movie({
        title,
        actorname
       
       })
       await newMovie.save();
       res.status(200).json({message:"movie created successfully",newMovie})
     }catch(error){
        res.status(500).json({message:error.message})
     }
   },
   getAllMovies: async(req,res)=>{
      try{
      const movie = await Movie.find();
      res.status(200).json({message:movie})
      }catch(error){
         res.status(200).json({message:error.message})
      }

   },
   getMovieById: async(req,res)=>{
      try{
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);
        if(!movie){
          return res.status(400).json({message:"movie not found"})
        }
        res.status(200).json({message:movie})
      }catch(error){
         res.status(500).json({message:error.message})
      }
   },
   updateMovie: async(req,res)=>{
      try{
         const movieId = req.params.id;
         const {title,actorname} = req.body;
         const movie = await Movie.findById(movieId)
        if(!movie){
           return res.status(400).json({message:"movie not found"})
         }
         movie.title = title;
         movie.actorname = actorname;
         updatedMovie = await movie.save();
      res.status(200).json({message:"movie update successfully",updatedMovie})
      }catch(error){
         res.status(500).json({message:error.message})
      }
     
   },
   deleteMovie: async(req,res)=>{
      try{
         const movieId = req.params.id;
         const movie = await Movie.findByIdAndDelete(movieId);
         if(!movie){
            return res.status(400).json({message:"movie not found"})
         }
         res.status(200).json({message:"movie deleted successfully"})
      }catch(error){
         res.status(500).json({message:error.message})
      }
     
   }
   
})

module.exports = movieController;