import { Router } from "express";
import { createReview,
    readFlightReview,
    readUserReview,
    updateReview,
    deleteReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";
import { isOwner } from "../middlewares/ownerAuth.js";
const reviewRouter = Router()

reviewRouter.route("/createReview/:flightId").post(verifyJWT,createReview);

reviewRouter.route("/:reviewId")
     .delete(verifyJWT,isOwner,deleteReview)
     .put(verifyJWT,isOwner,updateReview);

reviewRouter.route("/:flightId").get(readFlightReview);
reviewRouter.route("/user").get(verifyJWT,readUserReview);

export default reviewRouter
