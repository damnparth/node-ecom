import express from "express";
const router = express.Router();
import { Apis } from "../models/apisModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


// to do
// 1. multiple usernames should be rejected [done]
// 2. hash the passwords [done]
// 3. jwt []

router.post('/',async(req,res)=>
{
    try{
        // const userData=
        // {
        //     username:req.body.username,
        //     fullname:req.body.fullname,
        //     password:req.body.password
        // }

        const {username, fullname, password }=req.body;
      

       const isDuplicate = await Apis.findOne({username})
       if(isDuplicate)
       {    
        res.send({message:"username already exists"})
       }
       else{
        
        const hashed = await bcrypt.hash(password,10)
        const userData={
        username:username,
        fullname:fullname,
        password:hashed
       }
         
       const user = await Apis.create(userData)

       return res.send({message:"registered successfully"})

       }
     
    }
    catch(error)
    {
        console.log(error.message)
        res.send({message:error.message})
    }
})








export default router;