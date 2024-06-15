import {Flight} from '../src/models/flights.model.js';
import {ApiResponse} from '../src/utilities/apiResponse.js';
import {ApiError} from '../src/utilities/apiError.js';
import {asyncHandler} from '../src/utilities/asyncHandler.js';
import { History } from '../src/models/history.model.js';
import { User } from '../src/models/user.model.js';
import { sendNotification } from '../src/controllers/notification.controller.js';

const getUsersWithBooking = async(flightId) => {
    try {
        const bookings = await History.find({flightId}).select("owner")
    
        const userIds = bookings.map(booking => booking.owner)
    
        const users = await User.find({_id: {$in: userIds}})
    
        return users
    } catch (error) {
        throw new ApiError(500,"Something went wrong")
    }
}


const editFlight = asyncHandler(async(req,res)=>{
    const {flightId} =req.params;
    const flight = await Flight.findByIdAndUpdate(
        flightId,
        {...req.body},
        {
            new: true
        }
    );

    if(!flight){
        throw new ApiError(400,'Flight was not found')
    }
    //socket logic for brodcasting the changes to those user who have booked ticket of this flight

    const usersToNotify = await getUsersWithBooking(flightId);

    usersToNotify.forEach((user) => {
      sendNotification(user._id,`Your flight ${flight.flightNumber} was updated on ${flight.updatedAt}`)
    });

    return res
    .status(200)
    .json(
        new ApiResponse(200,flight,"flight was updated")
    )
});

export {
    editFlight
}