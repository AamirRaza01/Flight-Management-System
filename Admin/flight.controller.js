import {Flight} from '../server/src/models/flights.model.js';
import {ApiResponse} from '../server/src/utilities/apiResponse.js';
import {ApiError} from '../server/src/utilities/apiError.js';
import {asyncHandler} from '../server/src/utilities/asyncHandler.js';
import { sendNotification } from "../server/src/controllers/notification.controller.js";
import {History} from "../server/src/models/history.model.js";
// const editFlight = asyncHandler(async(req,res)=>{
//     let {id} =req.params;
//     let flight = await findByIdAndUpdate(id,{...req.body.flight});
//     //socket logic for brodcasting the changes to those user who have booked ticket of this flight
//     return res
//     .status(200)
//     .json(
//         new ApiResponse(200,flight,"flight was updated")
//     )
// });

//search flight by departure and arrival citys and the date
const getFlight = asyncHandler(async(req,res)=>{
    let {from,to,date} = req.body;
    const dates = new Date(date);
    let flight = await Flight.find({departureCity:from, arrivalCity:to,departureDateTime:dates});
    return res
        .status(200)
        .json(
            new ApiResponse(200,flight,"flights you searched for")
        )
        
})

//search flights using airline names for specific date
const getFlightByAirline = asyncHandler(async(req,res)=>{
    let {airline,date} = req.body;
    let dDate = new Date(date);
    let flights = await Flight.find({airline:airline,departureDateTime: dDate});
    return res.status(200).json(new ApiResponse(200,flight,`${airline} flights on ${date}`));
})


//your can get the data of the fight by their id ,as params, to update them
const getFlightForUpdate = asyncHandler(async(req,res)=>{
    let {flighId} =req.params;
    const flight = await Flight.findById(flighId);
    return res.status(200).json(new ApiResponse(200,flight,'this is the flight to be updated'));
})

//admin can add new flight send the required info from req body
const addFlight = asyncHandler(async(req,res)=>{
    const newFlight = new Flight({...req.body});
    let nF=await newFlight.save();
    return res.status(200).json(new ApiResponse(200,nF,"newFlightadded"));
})

// this will delete a flight // send their id as params
const cancelFlight = asyncHandler(async(req,res)=>{
    let {flightId} = req.params;
    let deleted = await Flight.findByIdAndDelete(flightId);
    const flightUsers = await getUsersWithBooking(flightId);
    flightUsers.forEach((user)=>{
        sendNotification(user._id,`Your flight of ${deleted.airline} on ${deleted.departureDateTime} was cancelled.`);
    })
    return res.status(200).json(new ApiResponse(200,deleted,"this is the deleted flight"))
})
export {addFlight,getFlight,getFlightByAirline,getFlightForUpdate,cancelFlight};