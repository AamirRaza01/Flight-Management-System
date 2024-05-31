import { Router } from "express";
import { flightSearch } from "../controllers/flight.controller.js";

const flightRouter = Router()

flightRouter.route("/flightSearch").post(flightSearch)

export default flightRouter