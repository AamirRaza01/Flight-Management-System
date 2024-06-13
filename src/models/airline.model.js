import mongoose,{Schema} from "mongoose";

const airlineSchema = new mongoose.Schema({
    airlineId: {
        type: String,
        required: true
    },
    airlineName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    operatingRegion: {
        type: String,
        required: true
    }
},{timestamps: true})

export const Airline = mongoose.model("Airline",airlineSchema)