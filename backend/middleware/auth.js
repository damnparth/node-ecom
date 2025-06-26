import jwt from "jsonwebtoken"

// recieve request, remove the bearer
// example : authorization : bearer abcdxyz(jwt)
// verify server's secret key

const authenticate=(req,res,next)=>
{

    const token=req.headers.authorization?.split(" ")[1];
    if(!token)
    {
        return res.send({message:"no token recieved"})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next();
    }
    catch(error)
    {
        return res.send({message:error.message})
    }


}

export default authenticate;