import express from "express"
import { sendMessage } from "../controllers/message.controller.mjs"
import protectRoute from "../middleware/protectRoute.middleware.mjs"
const router = express.Router()

router.post("/send/:id",protectRoute,sendMessage)

export default router


