import mongoose,{Schema}from "mongoose";

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    }
},{timestamps: true})

export const Review = mongoose.model("Review",reviewSchema)
