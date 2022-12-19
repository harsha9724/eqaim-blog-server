const express=require("express");
const router=express.Router();
const bodyParser=require("body-parser");
router.use(bodyParser());
const blogModel=require("../models/blog");
router.post("/api/v1/addBlog",async(req,res)=>{
    try{
      const data=await blogModel.create({
        title:req.body.title,
        description:req.body.description
      });
      res.status(200).json({
        status:"success"
      })
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
});

router.get("/api/v1/blogs",async(req,res)=>{
    try{
      const data=await blogModel.find();
    //   console.log(data);
      res.status(200).json({
        status:"success",
        data
      })
    }catch(err){
        res.status(400).json({
            status:"failed",
            message:err.message
        })
    }
})

module.exports=router;












