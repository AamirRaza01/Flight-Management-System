import { Router } from "express";
import { createReview,
    readFlightReview,
    readUserReview,
    updateReview,
    deleteReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";
import { isOwner } from "../middlewares/ownerAuth.js";
const reviewRouter = Router()

reviewRouter.route("/createReview").post(verifyJWT,createReview);

reviewRouter.route("/:reviewId")
     .delete(verifyJWT,isOwner,deleteReview)
     .put(verifyJWT,isOwner,updateReview);

export default reviewRouter