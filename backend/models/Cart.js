import mongoose from "mongoose";
const cart=mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        items:[
            {
                productId:{
                    type:String,
                    required:true
                },
                quantity:{
                    type:Number,
                    required:true,
                    default:1
                }
            }
        ]
    }

)
export const Cart=mongoose.model("Cart",cart)