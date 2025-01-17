import { asyncHandler } from "../utilities/asyncHandler.js";
import { ApiError } from "../utilities/apiError.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { Flight } from "../models/flights.model.js";
import { History } from "../models/history.model.js";
import { sendNotification } from "./notification.controller.js";

const bookFlight = asyncHandler(async (req,res) => {
    try {
        const userId = req.user._id
    
        if(!userId){
            throw new ApiError(400,"User is not authenticated")
        }
        const {flightId} = req.body
    
        const flight = await Flight.findById(flightId)
    
        if(!flight){
            throw new ApiError(400,"Flight not found")
        }
    
        const totalPrice = flight.price
        const seatsAvailable = flight.seatsAvailable
    
        if(seatsAvailable<=0){
            return res
            .status(400)
            .json(
                new ApiResponse({message: "No seats available"})
            )
        }
    
        const newBooking = await History.create({
            owner: userId,
            flight: flight,
            totalPrice:totalPrice,
            status: "confirmed"
        })
    
        await newBooking.save();

        sendNotification(userId, `Your flight ${flight.flightNumber} has been booked successfully.`);
        
        flight.seatsAvailable = seatsAvailable-1;
    
        await flight.save()
    
        return res
        .status(200)
        .json(
            new ApiResponse(200,newBooking,"Booking confirmed")
        )
    } catch (error) {
        throw new ApiError(400,error.message)
    }
})

export {bookFlight}