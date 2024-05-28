import mongoose, { Schema } from "mongoose";

const historySchema = new Schema({
    user: {
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
    passengers: {
        type: Number,
        required: true
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