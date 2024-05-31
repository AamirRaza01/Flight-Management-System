import { Router } from "express";
import { register,login,logout } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/authentication.js";

const userRouter = Router()

userRouter.route("/registerUser").post(register)
userRouter.route("/loginUser").post(login)
userRouter.route("/logoutUser").post(verifyJWT,logout)

export default userRouter