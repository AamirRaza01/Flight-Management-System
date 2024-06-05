import { asyncHandler } from "../utilities/asyncHandler.js";
import { ApiError } from "../utilities/apiError.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { Review } from "../models/review.model.js";
import { Flight } from "../models/flights.model.js";

//save review
const createReview = asyncHandler(async (req,res) => {
    try {
        const {flightid,rating,reviewText} = req.body
        const userId = req.user._id

        const flight = await Flight.findById(flightid)

        if(!flight){
            throw new ApiError(401,"Flight not found")
        }

        const review = new Review.create({
            user: userId,
            flight: flightid,
            rating,
            reviewText
        })

        if(!review){
            throw new ApiError(401,"Review not created")
        }

        return res
        .status(200)
        .json(
            new ApiResponse(200,review,"Review is created")
        )
    } catch (error) {
        throw new ApiError(500,"something went wrong")
    }
})

//crud operations

//fetch review using user id
const readUserReview = asyncHandler(async (req,res) => {
    try{
        let {userId} = req.params;
        let review = await Review.find({user: userId});
        
        return res
          .status(200)
          .json(
             new ApiResponse(200,review,"These are your reviews")
          )
    }catch(error){
        throw new ApiError(500,"Somethis went wrong");
    }


})

//fetch review using flight id

const readFlightReview = asyncHandler(async (req,res) => {
    try{
        let {flightid} = req.params;
        let review = await Review.find({flight: flightId});
        if(!review){
            throw new ApiError(500,"no review found");
        }
        return res
          .status(200)
          .json(
             new ApiResponse(200,review,"These are your reviews")
          )
    }catch(error){
        throw new ApiError(500,"Somethis went wrong");
    }
})

//update review

const updateReview = asyncHandler(async (req,res) => {
    try{
        let {reviewId } = req.params;
        let {rating,reviewText} = req.body;
        let review = await Review.findByIdAndUpdate(reviewId,{rating: rating,reviewText: reviewText});
        if(!review){
            throw new ApiError(500,"no review found");
        }
        return res
            .status(200)
            .json(
                new ApiResponse(200,review,"Your review was updated")
            )
    }catch(error){
        throw new ApiError(500,"something went wrong");
    }
})

//delete review

const deleteReview = asyncHandler(async (req,res) => {
    try{
        let {reviewId } = req.params;
        let review = await Review.findByIdAndDelete(reviewId);
        if(!review){
            throw new ApiError(500,"no review found");
        }
        return res
            .status(200)
            .json(
                new ApiResponse(200,review,"Your review was deleted")
            )
    }catch(error){
        throw new ApiError(500,"something went wrong");
    }

})

export {
    createReview,
    readFlightReview,
    readUserReview,
    updateReview,
    deleteReview
}
