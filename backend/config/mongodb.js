import mongoose from "mongoose";
const connectdb = async ()=>
{
    mongoose.connection.on(`connected`,()=>
    {
        console.log("db is connected.....")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/node-ecom`)
   
}
export default connectdb;