import express from "express";
const router = express.Router();
import { Apis } from "../models/apisModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import "dotenv/config.js"
import authenticate from "../middleware/auth.js";


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

router.post('/login',async(req,res)=>
{
    const {username,password}=req.body;
    //  console.log(username)
    //  console.log(password)
    try{
         const user = await Apis.findOne({username})
    if(!user)
    {
        return res.send({message:"user does not exist"})

    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch)
    {
       return res.send({message:"incorrect password"})
    }

    //create jwt token
    const token = jwt.sign({
        id:user._id,
        username:user.username
    },
    process.env.JWT_SECRET,
    {expiresIn:'1h'}

);


    return res.send({message:"login successful",
        token,
        user:{
            username:user.username,
            fullname:user.fullname
        }


    },
      
    )


    }
    catch(error){
            console.log(error.message)
            return res.send({message:error.message})

    }
   
})

router.post('/address', authenticate, async (req, res) => {
  try {
    const { add } = req.body; 
    const userId = req.user.id;

    // Find the user first
    const user = await Apis.findOne({ _id: userId });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Set the address and save the user
    user.address = add;
    await user.save();

    res.send({ message: "Address updated successfully" });
  } 
  catch (error) {
    console.log("Error updating address:", error);
    res.status(500).send({ error: " error while updating address" });
  }
});








export default router;