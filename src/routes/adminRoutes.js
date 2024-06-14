import { Router } from "express";
import { adminLogin } from "../controllers/admin.controller.js";

const adminRouter = Router()

adminRouter.route("/adminLogin").post(adminLogin)

export default adminRouter