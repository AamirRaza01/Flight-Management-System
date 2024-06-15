import { Router } from "express";
import { verifyJWT } from "../middlewares/authentication.js";
import { getNotification } from "../controllers/notification.controller.js";

const notifyRoute = Router()

notifyRoute.route("/notification").post(verifyJWT,getNotification)

export default notifyRoute