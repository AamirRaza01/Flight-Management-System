import { AirlineReview } from "../models/airline.review";
import { asyncHandler } from "../utilities/asyncHandler";

//create review
const createAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const airlineId = req.params;
    let {rating,reviewText} =  req.body;
    const newReview = new AirlineReview({
        user:userId,
        airline: airlineId,
        rating:rating,
        reviewText: reviewText
    })
    const nR = await newReview.save();
    return res.status(200).json(200,nR,"New review added");
})

//update review
const updateAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const reviewId = req.params;
    let {rating,reviewText} =  req.body;
    const nR = await AirlineReview.findByIdAndUpdate(reviewId,{rating:rating,reviewText:reviewText});
    return res.status(200).json(200,nR,"New review added");
})

//delete review
const deleteAirlineReview = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const reviewId = req.params;

    const deleted = await AirlineReview.findByIdAndDelete(reviewId);
    return res.status(200).json(200,deleted,"Review deleted");
})


//get all reviews of an airline 
const getAirlineReviews = asyncHandler(async(req,res)=>{
    const airlineId = req.params;
    const allReviews = await AirlineReview.find({airline: airlineId});
    return res.status(200).json(200,allReviews,"Your requested Review");
})

//get airline reviews by an user
const userAirlineReview = asyncHandler(async(req,res)=>{
    const userId=req.params;
    const allReviews = await AirlineReview.find({user: userId});
    return res.status(200).json(200,allReviews,"These are your reviews");
})

export {userAirlineReview,updateAirlineReview,createAirlineReview,deleteAirlineReview,getAirlineReviews};