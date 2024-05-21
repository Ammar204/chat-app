import bcrypt from "bcryptjs";
import User from "../models/user.model.mjs";
import generateWebTokenAndSetCookie from "../utilis/generateToken.mjs"

export const signup = async (req, res) => {
  try {
    const { body } = req;
    const { fullName, username, password, confirmPassword, gender } = body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      await newUser.save();

      generateWebTokenAndSetCookie(newUser._id,res)

      return res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        password: newUser.password,
      });
    } else {
      return res.status(400).json({ error: "invalid data" });
    }
  } catch (error) {
    console.log("error while creating new user", error);
    res.status(500).json({ error: "internal server error" });
  }

  //
};

export const login = async (req, res) => {
  try {

    const {username,password} = req.body
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

    if(!isPasswordCorrect || !user){
      return res.status(400).json({error: "Incorrect Username or Password"})
    }

    generateWebTokenAndSetCookie(user._id,res)
    return res.status(200).json({
      id:user._id,
      fullName: user.fullName,
      username : user.username,
      profilePic: user.profilePic
    })

    
  } catch (error) {
    console.log("error login user", error);
    res.status(500).json({ error: "internal server error" });

    
  }

};
export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{
      maxAge:0
    })
    return res.status(200).json({message:"logout successfully"})

    
  } catch (error) {
    console.log("error logout user", error);
    res.status(500).json({ error: "internal server error" });
    
  }

};
