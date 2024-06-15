import { AirlineReview } from "../models/airline.review.js";
import { ApiError } from "../utilities/apiError.js";
import { asyncHandler } from "../utilities/asyncHandler.js";


export const isRevOwner = asyncHandler(async (req,res,next)=>{
   try{
         let userId = req.user._id;
         let {reviewId} = req.params;
         let review =  await AirlineReview.findById(reviewId);
         if(!review){
            throw new ApiError(500,"review not found");
         }
         if(review.user.equals(userId)){
             next();
         }else{
             throw new ApiError(500,"Your are not the owner of this content");
         }
   }catch(error){
    throw new ApiError(500,error);
   }

})
