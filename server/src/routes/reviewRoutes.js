import { Router } from "express";
import { createReview,
    readFlightReview,
    readUserReview,
    updateReview,
    deleteReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";

const reviewRouter = Router()

reviewRouter.route("/createReview").post(verifyJWT,createReview)
reviewRouter.route("/readflightreview").post(readFlightReview)
reviewRouter.route("/readuserreview").post(verifyJWT,readUserReview)
reviewRouter.route("/updatereview").post(updateReview)
reviewRouter.route("/deletereview").post(deleteReview)

export default reviewRouter
