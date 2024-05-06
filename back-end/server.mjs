import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.mjs"
import messageRoute from "./routes/message.routes.mjs"
import cookieParser from "cookie-parser"
import connectDb from "../database/connect-db.mjs"
dotenv.config()


const app = express()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{{

    connectDb()

    console.log(`Your app is listening on ${PORT}`)
}
})

app.get("/",(req,res)=>{
    res.status(200).send("Hello World")
})

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoute)