import {addFlight,getFlight,getFlightByAirline,getFlightForUpdate,cancelFlight} from "../Admin/flight.controller";
import { Router } from "express";

const adminFlightRouter = Router;

adminFlightRouter.route("/add").post(addFlight);
adminFlightRouter.route("/get").get(getFlight);
adminFlightRouter.route("/getairline").get(getFlightByAirline);
adminFlightRouter.route("/getupdate").get(getFlightForUpdate);
adminFlightRouter.route("/update/:flightIdd").put();//edit controller here
adminFlightRouter.route("/delete/:flightId").delete(cancelFlight);

export default adminFlightRouter;
