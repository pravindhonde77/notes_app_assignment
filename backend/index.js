import  express  from "express";
import cors from "cors"
import Connection from "./database/db.js";
import route from "./routes/route.js"


const app=express()

app.use(cors())

app.use(express.json())

app.use("/",route)


 
Connection()
const PORT=8080

app.listen(PORT,()=>console.log(`Your server is running Successfully on PORT ${PORT}`)) 