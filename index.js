const mongoose = require("mongoose")
const config = require("./utils/config")
const app = require("./app")

console.log("connecting to mongodb...");

mongoose.connect(config.MongoDB_URL)
.then(()=>{
    console.log("connected mongodb..👍");
    app.listen(config.Port,()=>{
        console.log(`server running on port ${config.Port}...🌍`);
    })
})
.catch((error)=>{
   console.log("error connecting to mongodb",error.message);
})