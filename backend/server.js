import express from "express";
import 'dotenv/config'
import cors from "cors"
import connectdb from "./config/mongodb.js";



const app = express();
const port = process.env.PORT || 4000;
connectdb();

app.use(express.json())
app.use(cors())

//endpoint
app.get("/",(req,res)=>
{
    res.send("api is up and running at "+port+"........")
})

app.listen(port,()=>
{
    console.log("hello world")
})