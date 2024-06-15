import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    airline:{
        type:mongoose.Schema.ObjectId,
        ref:'Airline',
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    reviewText:{
        type:String,
        required:true
    }
},{timestamps: true})

export const AirlineReview = mongoose.model('AirlineReview',reviewSchema);