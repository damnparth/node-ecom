import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import authenticate from "../middleware/auth.js";
import { Cart } from "../models/Cart.js";
import { Apis } from "../models/apisModels.js";
import "dotenv/config.js"


//add item to cart
router.post("/add",authenticate,async(req,res)=>
{
    try{
        const {productId, quantity}=req.body;
    const userId=req.user.id;


    let cart = await Cart.findOne({userId})

    if(!cart)
    {
        cart = await Cart.create({ userId, items: [{ productId, quantity }] }); 
    }
    else{
        const item=cart.items.find(item=>item.productId===productId)
        if(item)
        {
            item.quantity+=quantity
           
        }
        else{
            cart.items.push({productId,quantity})
            
        }
        await cart.save()
    }
    res.send({message:"cart updated successfully"})

    }
    catch(error)
    {
        console.log("error updating cart",error)
        res.send({error:"something went wrong while updating the cart"})
    }
    
})


//get cart
router.get('/', authenticate, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    res.send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error fetching cart" });
  }
});

router.post('/increase',authenticate,async(req,res)=>
{
    try{
        const {productId}=req.body;
    const userId=req.user.id;

    const cart = await Cart.findOne({userId})
    const item=cart.items.find(i=>i.productId===productId)
    if(item)
    {
        item.quantity+=1;
    }
    await cart.save()

    res.send({message:"quantity increased"})
    }
    catch(error)
    {
        console.log(error)
       res.send({"error":error.message})
    }


})

router.post('/decrease',authenticate,async(req,res)=>
{
    try{
        const {productId}=req.body;
        const userId=req.user.id;


        const cart = await Cart.findOne({userId})
        const item=cart.items.find(i=>i.productId===productId)
        if(item)
        {
            item.quantity-=1;

        }
        await cart.save()
        res.send({message:"quantity decreased"})

    }
    catch(error)
    {
        console.log(error)
        res.send({"error":error})
      

    }
})


// router.delete("/:id",authenticate,async(req,res)=>
// {
//     try{
//         const{productId}=req.body;
//         const userID=req.user.id;

//         const cart =await Cart.findOne({userId})
        

//     }
//     catch(error)
//     {

//     }

    
// })
export default router;



