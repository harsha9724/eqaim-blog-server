const mongoose = require("mongoose");
const blogSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
});

const blogModel=new mongoose.model("blog",blogSchema);

module.exports=blogModel;