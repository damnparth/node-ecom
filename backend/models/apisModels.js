import mongoose from "mongoose";
const apis=mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true
        },
        fullname:
        {
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)
export const Apis = mongoose.model('Apis',apis)