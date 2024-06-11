import { Notification } from "../models/notification.model.js";
import { io } from "../index.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { ApiError } from "../utilities/apiError.js";
import { ApiResponse } from "../utilities/apiResponse.js";

const sendNotification = async (userId, message) => {
    const notification = new Notification({
        user: userId,
        message: message
    });

    await notification.save();

    io.to(userId).emit('notification', message);
};
// get notification history
const getNotification = asyncHandler(async (req,res) => {
    try {
        const userId = req.user._id
        console.log(userId)
    
        if(!userId){
            throw new ApiError(500,"User not authenticated")
        }
    
        const notifications = await Notification.find({user: userId})
        console.log(notifications)
    
        if(!notifications || notifications.length <= 0){
            return res.status(200).json(new ApiResponse(200,"No notification yet"))
        }
    
        return res
        .status(200)
        .json(
            new ApiResponse(200,notifications)
        )
    } catch (error) {
        throw new ApiError(400,"Something went wrong")
    }

})



export {
    sendNotification,
    getNotification

}