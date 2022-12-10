import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();

mongoose.connect(
    "mongodb+srv://visswateza:visswateza@cluster0.xkhreoj.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log("Database connection successfull.");
}).catch((err)=>{
    console.error(err);
})

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});