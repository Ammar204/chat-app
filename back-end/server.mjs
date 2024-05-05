import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.mjs"
import connectDb from "../database/connect-db.mjs"
dotenv.config()


const app = express()
app.use(express.json())
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