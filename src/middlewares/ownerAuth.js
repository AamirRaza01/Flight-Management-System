import { Review } from "../models/review.model";
import { ApiError } from "../utilities/apiError";
import { asyncHandler } from "../utilities/asyncHandler";


export const isOwner = asyncHandler(async (req,res,next)=>{
   try{
         let userId = req.user._id;
         let {reviewId} = req.params;
         let review =  await Review.findById(reviewId).populate("user");
         if(review.user._id.equals(userId)){
             next();
         }else{
             throw new ApiError(500,"Your are not the owner of this content");
         }
   }catch(error){
    throw new ApiError(500,"Something went wrong");
   }

})