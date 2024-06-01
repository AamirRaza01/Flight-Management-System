import { Router } from "express";
import { createReview,
    readFlightReview,
    readUserReview,
    updateReview,
    deleteReview } from "../controllers/review.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";

const reviewRouter = Router()

reviewRouter.route("/createReview").post(verifyJWT,createReview)

export default reviewRouter
