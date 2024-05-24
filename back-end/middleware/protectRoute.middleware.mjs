import User from "../models/user.model.mjs";
import jwt from "jsonwebtoken"

const protectRoute = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized no token acces"})
        }

        const decoded = jwt.verify(token, process.env.JWT_secret)
        if (!decoded){
            return res.status(401).json({error:"Unauthorized no token acces"})
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(404).json({error:"user is not found"})

        }
        // console.log("user",user)

        req.user = user
        next()
        
        
    } catch (error) {
        console.log("error while protecting Route",error.message)
        return res.status(500).json({error:"internal server error"})
        
    }

}

export default protectRoute