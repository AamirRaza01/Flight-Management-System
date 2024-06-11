import {Flight} from '../src/models/flights.model.js';
import {ApiResponse} from '../src/utilities/apiResponse.js';
import {ApiError} from '../src/utilities/apiError.js';
import {asyncHandler} from '../src/utilities/asyncHandler.js';


const editFlight = asyncHandler(async(req,res)=>{
    let {id} =req.params;
    let flight = await findByIdAndUpdate(id,{...req.body.flight});
    //socket logic for brodcasting the changes to those user who have booked ticket of this flight
    return res
    .status(200)
    .json(
        new ApiResponse(200,flight,"flight was updated")
    )


});

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

export {editFlight,getFlight};