import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ziyanshabbir25:Pakistan204@cluster0.9wxfoes.mongodb.net/chat-app-db")
        console.log("your database is connect")

    }
    catch(error){
        console.log("error while connnect db",error)

    }
}

export default connectDb