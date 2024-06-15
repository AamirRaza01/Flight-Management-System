import { Router } from "express";
import { bookFlight } from "../controllers/bookFlight.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";

const bookingRouter = Router()

bookingRouter.route("/bookFlight").post(verifyJWT,bookFlight)

export default bookingRouter