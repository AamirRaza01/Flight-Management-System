import mongoose,{ Schema } from "mongoose";

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    departureCity: {
        type:String,
        set: (v)=>v=v.toLowerCase(),
        required:true
    },
    departureAirport: {
        type: String,
        required: true
    },
    arrivalCity: {
        type:String,
        set: (v)=>v=v.toLowerCase(),
        required:true
    },
    arrivalAirport: {
        type: String,
        required: true
    },
    departureDateTime: {
        type: Date,
        required: true
    },
    arrivalDateTime: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seatsAvailable: {
        type: Number,
        required: true
    }
},{timestamps: true})

export const Flight = mongoose.model("Flight",flightSchema)