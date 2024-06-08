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
    const userId = req.user._id

    if(!userId){
        throw new ApiError(500,"User not authenticated")
    }

    const notifications = await Notification.findById(userId)

    if(!notifications){
        return res.status(200).json(new ApiResponse(200,"No notification yet"))
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,notifications)
    )

})

export {
    sendNotification,
    getNotification

}