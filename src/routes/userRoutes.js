import { Router } from "express";
import { register,login,logout,getHistory } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";

const userRouter = Router()

userRouter.route("/registerUser").post(register)
userRouter.route("/loginUser").post(login)
userRouter.route("/logoutUser").post(verifyJWT,logout)
userRouter.route("history").post(verifyJWT,getHistory)

export default userRouter