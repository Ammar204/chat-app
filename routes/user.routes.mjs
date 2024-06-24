import express from 'express'
import protectRoute from '../middleware/protectRoute.middleware.mjs'
import {getUserForSidebar} from "../controllers/user.controller.mjs"

const router = express.Router()

router.get("/",protectRoute,getUserForSidebar)



export default router