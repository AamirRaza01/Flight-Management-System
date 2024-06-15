import { asyncHandler } from "../utilities/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";

const adminLogin = asyncHandler(async (req,res) => {
    const {email,username,password} = req.body

    if(!username && !email){
        throw new ApiError(400,"username or email is required")
    }

    const user = await User.findOne({
        $or: [{username},{email}]
    })

    if(!user){
        throw new ApiError(404,"user doesnot exist")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(401,"invalid user password")
    }
    const {accessToken,refreshToken} = await generateRefreshAccessToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    if(loggedInUser.isAdmin !== true){
        new ApiError(400,"Invalid credentials")
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,accessToken,refreshToken
            },
            "Admin logged in successfully"
        )
    )
})

export {adminLogin}