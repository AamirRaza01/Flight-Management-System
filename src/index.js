import dotenv from "dotenv";
import connectDB from "./database/index.js";
import {app} from './app.js';
import { User } from "./models/user.model.js";
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.on("error",(err) => {
        throw err
    })
    app.listen(8000, () => {
        console.log('Server is running at port : 8000');
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

