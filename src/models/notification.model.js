import mongoose,{Schema} from "mongoose";

const notificationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }

},{timestamps:true})

export const Notification = mongoose.model("Notification",notificationSchema)