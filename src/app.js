import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"

const app = express()

app.use(cors({
    //origin: from the env file
    credentials: true 
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,limit: "16kb"}))
app.use(express.static("public"))//stores the assets like files in the public folder
app.use(cookieParser())
app.use((req, res, next) => {
    console.log("Incoming Request Body: ", req.body);
    next();
});

//routes
import userRouter from "./routes/userRoutes.js";

app.use("/api/v1/users",userRouter)

export {app}