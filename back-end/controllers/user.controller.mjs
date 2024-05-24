import User from "../models/user.model.mjs";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const fullName = req.query.fullName;
    // console.log("fullName from server",fullName)

    const query = fullName
      ? {
          fullName: { $regex: fullName, $options: "i" },
          _id: { $ne: loggedInUser },
        }
      : { _id: { $ne: loggedInUser } };

    const user = await User.find(query);
    return res.status(200).json(user);
  } catch (error) {
    console.log("error while fetching user", error.message);
    return res.status(500).json({ error: "internal server error" });
  }
};
