import mongoose from "mongoose";


const airportSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    }
});

export const Airport = mongoose.model('Airport', airportSchema);