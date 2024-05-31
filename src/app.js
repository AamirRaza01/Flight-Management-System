import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"

const app = express()
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))//stores the assets like files in the public folder
app.use(cookieParser())


//routes
import userRouter from "./routes/userRoutes.js";
import flightRouter from "./routes/flightRoutes.js";

app.use("/api/v1/users",userRouter)
app.use("/api/v1/flights",fl)

export {app}