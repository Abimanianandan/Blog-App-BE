const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    actorname:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("movie",movieSchema,"movies");