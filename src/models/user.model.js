import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    selectionHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "History"
        }
    ],
    refreshToken: {
        type: String
    }

},{timestamps: true})

export const User = mongoose.model("User",userSchema)