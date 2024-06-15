import { AirlineReview } from "../models/airline.review.js";
import { asyncHandler } from "../utilities/asyncHandler.js";
import { ApiResponse } from "../utilities/apiResponse.js";
//create review
const createAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const {airlineId} = req.params;
    let {rating,reviewText} =  req.body;
    const newReview = new AirlineReview({
        user:userId,
        airline: airlineId,
        rating:rating,
        reviewText: reviewText
    })
    const nR = await newReview.save();
    return res
            .status(200)
            .json(
                new ApiResponse(200,nR,"Your review was added")
            )
    
})

//update review
const updateAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const {reviewId} = req.params;
    let {rating,reviewText} =  req.body;
    const nR = await AirlineReview.findByIdAndUpdate(reviewId,{rating:rating,reviewText:reviewText});
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,nR,"Your review was updated")
    )
})

//delete review
const deleteAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const {reviewId} = req.params;
    const deleted = await AirlineReview.findByIdAndDelete(reviewId);
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,deleted,"Your review was deleted")
    )
})


//get all reviews of an airline 
const getAirlineReviews = asyncHandler(async(req,res)=>{
    const {airlineId} = req.params;
    const allReviews = await AirlineReview.find({airline: airlineId});
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,allReviews,"All reviews")
    )
})


//get airline reviews by an user
const userAirlineReview = asyncHandler(async(req,res)=>{
    const userId=req.user._id;
    const allReviews = await AirlineReview.find({user: userId});
    new ApiResponse(200,allReviews,"Your reviews")
    return res
    .status(200)
    .json(
        new ApiResponse(200,allReviews,"Your reviews")
    )
})

export {userAirlineReview,updateAirlineReview,createAirlineReview,deleteAirlineReview,getAirlineReviews};