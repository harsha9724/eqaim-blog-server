const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoute=require("./routes/blog");
const cors=require("cors");
mongoose.connect(
    "mongodb+srv://Harsha:harsha%401234@cluster0.ohltzw6.mongodb.net/?retryWrites=true&w=majority",
    () => {
      console.log("connected to db");
    },
    mongoose.set('strictQuery', true)
  );

app.use(cors());
app.get("/",(req,res)=>{
    res.send("home page")
});
app.use("/",blogRoute);

app.listen(8080, () => {
  console.log("server is up at 8080");
});
