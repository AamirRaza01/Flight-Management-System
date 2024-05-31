import { asyncHandler } from "../utilities/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilities/apiResponse.js";
import { ApiError } from "../utilities/apiError.js";


const register = asyncHandler(async (req,res) => {
    // const {username,fullname,email,password} = req.body
    // console.log(req.body)
    // if(!username || !email || !fullname || !password){
    //     throw new ApiError(500,"all field are required")
    // }
    // const user = await User.create({
    //     username: username,
    //     fullname: fullname,
    //     email: email,
    //     password: password
    // })

    // return res
    // .status(201)
    // .json(
    //     new ApiResponse(200,user,"done")
    // )
    const {username,fullname,email,password} = req.body
    
    // if(!username || !fullname || !email || !password){
    //     throw new ApiError(400,"All fields are required")
    // }

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"user already exist")
    }

    const profileLocalPath = req.files?.profilePicture[0]?.path

    if(!profileLocalPath){
        throw new ApiError(400,"profile picture is required")
    }

    const profilePicture = await uploadOnCloudinary(profileLocalPath)//need cloudinary service

    if(!profilePicture){
        throw new ApiError(400,"profile picture is required")
    }

    const user = await User.create({
        fullname,
        email,
        password,
        username,
        profilePicture: profilePicture
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"//for security
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(201,createdUser,"User registered successfully")
    )

})

const generateRefreshAccessToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken= user.generateRefreshToken()
        // console.log(accessToken)
        // console.log(refreshToken)

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong")
    }
}

const login = asyncHandler(async (req,res) => {
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
            "user logged in successfully"
        )
    )
})

const logout = asyncHandler(async (req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"User logged out")
    )
})

export {
    register,
    login,
    logout
}