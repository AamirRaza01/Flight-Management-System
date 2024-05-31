import mongoose from "mongoose";
import { User } from "../models/user.model.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/tripma')
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB