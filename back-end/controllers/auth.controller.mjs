
import User from "../models/user.model.mjs"
export const signup = async (req,res)=>{
    try {
        const {body} = req
    const {fullName,username,password,confirmPassword,gender} = body

    if(password !== confirmPassword){
        return res.status(400).json({eroor:"password don't match"})
    }

    const user = await User.findOne({username})
    if (user){
        return res.status(400).json({error:"User already exists"})
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User({
        fullName,
        username,
        password,
        gender,
        profilePic: "male" ? boyProfilePic : girlProfilePic
    })

    await newUser.save()

    return res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        password: newUser.password,

    })
        
    } catch (error) {
        console.log("error while creating new user",error)
        res.status(500).json({error:"internal server error"})
        
    }
    

//
}

export const login = (req,res)=>{
    res.status(200).send("login User")

}
export const logout = (req,res)=>{
    res.status(200).send("logut User")

}
