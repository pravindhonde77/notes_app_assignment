import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const USERNAME=process.env.DB_USERNAME
const PASS=process.env.DB_PASS


const Connection=()=>{
    const MONGODB_URL=`mongodb+srv://${USERNAME}:${PASS}@cluster0.zfxhmnn.mongodb.net/?retryWrites=true&w=majority`
    // const MONGODB_URL= `mongodb+srv://${USERNAME}:${PASS}@cluster1.omp75le.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL,{useNewUrlParser:true})

    mongoose.connection.on("connected",()=>{
        console.log("Database connected successfully")
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("Database disconnected")
    })

    mongoose.connection.on("error",()=>{
        console.log("Error while connecting with the Database ")
    })
}

export default Connection