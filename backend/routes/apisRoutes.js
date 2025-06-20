import express from "express";
const router = express.Router();
import { Apis } from "../models/apisModels.js";

// to do
// 1. multiple usernames should be rejected
// 2. hash the passwords

router.post('/',async(req,res)=>
{
    try{
       const userData={
        username:req.body.username,
        fullname:req.body.fullname,
        password:req.body.fullname
       }
      
       const user = await Apis.create(userData)
       return res.send(user,{message:"registered successfully"})
    }
    catch(error)
    {
        console.log(error.message)
        res.send({message:error.message})
    }
})








export default router;