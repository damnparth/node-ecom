import express from "express";
import 'dotenv/config'
import cors from "cors"
import connectdb from "./config/mongodb.js";
import router from "./routes/apisRoutes.js";
console.log("🚀 Server file started");






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



app.use('/apis',router)

app.listen(port,()=>
{
    console.log("hello world at "+port)
})