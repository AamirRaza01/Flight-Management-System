import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { Flight } from "./models/flights.model.js";
import mongoose from "mongoose";
const mongo_url = "mongodb://127.0.0.1:27017/tripma";

main().then(()=>{
    console.log("connected succesfully");
})
.catch((err)=>{
    console.log(err);
})

async function  main(){
    await mongoose.connect(mongo_url);
};
// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(cors({
    //origin: from the env file
    credentials: true 
}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))//stores the assets like files in the public folder
app.use(cookieParser())
app.use((req, res, next) => {
    console.log("Incoming Request Body: ", req.body.flight);
    next();
});

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
//routes
app.get("/flight",(req,res)=>{
    res.render("flight.ejs");
})

app.post("/flight/search/result",async (req,res)=>{
    let {flight} = req.body;
    const date = new Date(flight.date);
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));
    let from=flight.from.toLowerCase();
    let to=flight.to.toLowerCase();
    let found =await Flight.find({departureCity:from, arrivalCity:to,departureDateTime: {$gte: startOfDay,$lt: endOfDay}});
    
    res.render("searchresult.ejs",{found});
})

// import userRouter from "./routes/userRoutes.js";

// app.use("/api/v1/users",userRouter);

app.listen(8080,()=>{
    console.log("listening to port 8080");
})

export {app}


