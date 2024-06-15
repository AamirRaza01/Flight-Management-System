import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"

const app = express()
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))//stores the assets like files in the public folder
app.use(cookieParser())


//routes
import userRouter from "./routes/userRoutes.js";
import flightRouter from "./routes/flightRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";
import bookingRouter from "./routes/bookRoutes.js";
import notifyRoute from "./routes/notificationRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

app.use("/api/v1/users",userRouter)
app.use("/api/v1/flights",flightRouter)
app.use("/api/v1/review",reviewRouter)
app.use("/api/v1/book",bookingRouter)
app.use("/api/v1/notify",notifyRoute)
app.use("/api/v1/admin",adminRouter)

export {app}