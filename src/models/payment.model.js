import mongoose,{Schema} from "mongoose";

const paymentSchema = new Schema({
    bookingId: {
        type: Schema.Types.ObjectId,
        ref: "History"
    },
    paymentMethod: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
},{timestamps: true})

export const Payment = mongoose.model("Payment",paymentSchema)