import express from "express";
import authRoutes from "./auth.routes.mjs";
import messageRoute from "./message.routes.mjs";
import userRoute from "./user.routes.mjs";
import { login, signup, logout } from "../controllers/auth.controller.mjs";
const router = express.Router();

router.get("/check-me", (req, res) => {
  res.send("Hello world");
});
router.use("/auth", authRoutes);
router.use("/messages", messageRoute);
router.use("/users", userRoute);
export default router;
