import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import cors from "cors"

const app = express()

app.use(cors({
    //origin: from the env file
    credentials: true 
}))

app.use(express.json({limit: "10kb"}))
app.use(express.urlencoded({extended: true,limit: "10kb"}))
app.use(express.static("public"))//stores the assets like files in the public folder
app.use(cookieParser())

export {app}