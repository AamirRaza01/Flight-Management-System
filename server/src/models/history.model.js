import mongoose, { Schema } from "mongoose";

const historySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: "Flight"
    },
    bookingDate: {
        type: Date,
        default: Date.now
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["confirmed","cancelled"],
        default: "confirmed"
    }
},{timestamps: true})

export const History = mongoose.model("History",historySchema)