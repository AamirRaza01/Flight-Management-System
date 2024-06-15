import { Router } from "express";
import { isRevOwner } from "../middlewares/airlineReviewAutho.js";
import { verifyJWT } from "../middlewares/authentication.js";
import { userAirlineReview,updateAirlineReview,createAirlineReview,deleteAirlineReview,getAirlineReviews } from "../controllers/airline.review.js";

const airlineReviewRouter = Router();


airlineReviewRouter.route("/user/reviews").get(verifyJWT,userAirlineReview);
airlineReviewRouter.route("/update/:reviewId").put(verifyJWT,isRevOwner,updateAirlineReview);
airlineReviewRouter.route("/create/:airlineId").post(verifyJWT,createAirlineReview);
airlineReviewRouter.route("/delete/:reviewId").delete(verifyJWT,isRevOwner,deleteAirlineReview);
airlineReviewRouter.route("/reviews/:airlineId").get(getAirlineReviews);


export default airlineReviewRouter;