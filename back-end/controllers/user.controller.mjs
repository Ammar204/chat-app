import User from "../models/user.model.mjs";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filterdUser = await User.find({ _id: { $ne: loggedInUser } });
    return res.status(200).json(filterdUser);
  } catch (error) {
    console.log("error while fetching user", error.message);
    return res.status(500).json({ error: "internal server error" });
  }
};
